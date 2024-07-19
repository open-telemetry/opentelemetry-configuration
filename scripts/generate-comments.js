const fs = require('node:fs');
const yaml = require('yaml');

// Extract input file arg or throw
const usageString = "Usage: \n npm run-script generate-comments -- /absolute/path/to/input/file.yaml /absolute/path/to/output/file.yaml";
if (process.argv.length < 3) {
    throw new Error("Missing file to generate comments for. " + usageString);
}
const inputFile = process.argv[2];
if (!fs.existsSync(inputFile)) {
    throw new Error("File \"" + inputFile + "\" not found.");
}

// Extract output file arg
let outputFile = null;
if (process.argv.length >= 4) {
    outputFile = process.argv[3];
}

// Extract options
const options = {
    debug: false
}
for (let i = 4; i < process.argv.length; i++) {
    if (process.argv[i] === '--debug') {
        options['debug'] = true;
    }
}

// Read and validate description rules
const typeDescriptionsContent = fs.readFileSync(__dirname + "/../schema/type_descriptions.yaml", "utf-8");
const typeDescriptionsYaml = yaml.parse(typeDescriptionsContent);
const rulesByType = {};
typeDescriptionsYaml.forEach(rule => {
    const type = rule.type;
    if (!(typeof type === 'string') && !(type instanceof String)) {
        throw new Error("rule must have type: " + JSON.stringify(rule));
    }
    if (type in rulesByType) {
        throw new Error("multiple rules with type: " + type);
    }
    rulesByType[type] = rule;
    if (!('property_descriptions' in rule)) {
        throw new Error("rule missing property_description:" + JSON.stringify(rule));
    }
    if (!('path_patterns' in rule)) {
        throw new Error("rule missing path_patterns:" + JSON.stringify(rule));
    }
    maybeDebugLog("\nRule for type: " + type);
    maybeDebugLog("  property_descriptions:")
    Object.entries(rule.property_descriptions)
        .forEach(([property, description]) => maybeDebugLog("    " +  property + ": " + description));
    maybeDebugLog("  path_patterns: \n" + rule.path_patterns.map(entry => "  - " + toRegex(entry)).join("\n"));
})

// Read in the input file
const fileContent = fs.readFileSync(inputFile, "utf-8");
const fileDoc = yaml.parseDocument(fileContent);
let counter = 0;
// Visit each key/value pair in the input file YAML, attempting to match against description rules
// and setting a comment with the description from the matching rule
yaml.visit(fileDoc, {
    Pair: (key, node, path) => {
        if (yaml.isSeq(node.value)) {
            node.value.items.forEach(item => item.commentBefore = null);
        }
        counter++;
        // Compute the parenPath, a string representation of the location of this key/value pair in the document
        // For example, the following sample YAML is annotated with the parentPath at each node
        // parent:                      # .
        //   child: value               # .parent
        //   child_arr:                 # .parent
        //     - arr_key: value         # .parent.child_arr[]
        const parentPath = pathToString(path);
        const propertyKey = node.key.value;
        maybeDebugLog("");
        maybeDebugLog("parentPath: " + parentPath );
        maybeDebugLog("propertyKey: " + propertyKey);
        maybeDebugLog("currentNodePath: " + parentPath + (parentPath === "." ? "" : ".") + propertyKey);
        // Iterate through the rules and find the first with a matching entry in rule.path_patterns
        const matchingRule = typeDescriptionsYaml.find((rule) => {
            const matchingPathPattern = rule['path_patterns'].find((pathPattern) => {
                const regex = new RegExp(toRegex(pathPattern));
                return regex.test(parentPath);
            });
            return matchingPathPattern !== undefined;
        });
        // Exit early if no matching rule
        if (matchingRule === undefined) {
            maybeDebugLog("no matching rule")
            return;
        }
        maybeDebugLog("matched rule: " + matchingRule.type);
        // Check if there is a description for the current propertyKey in the matching rule
        // Exit early if none registered
        const description = matchingRule['property_descriptions'][propertyKey];
        if (description === undefined) {
            maybeDebugLog("no matching property")
            return;
        }
        // Format the description
        let formattedDescription = description.replace(/\n$/, '').split('\n').map(line => ' ' + line).join('\n');
        // If we're on the first element, prefix the formatted description with the existing commentBefore to retain the comments at the top of the file
        if (counter === 1 && node.key.commentBefore) {
            const index = node.key.commentBefore.lastIndexOf(formattedDescription);
            formattedDescription = (index === -1)
                ? node.key.commentBefore + formattedDescription
                : node.key.commentBefore.substring(0, index) + formattedDescription;
        }
        maybeDebugLog("description previously set to:\n" + node.key.commentBefore);
        maybeDebugLog("updating description to:\n" + formattedDescription)
        // Set the description
        node.key.commentBefore = formattedDescription;
        node.value.commentBefore = null;
    }
});

// Print the output, or write it to a file
if (outputFile === null) {
    console.log("No output file arg set, logging to console.");
    console.log(String(fileDoc))
} else {
    console.log("Writing output to \"" + outputFile + "\"");
    fs.writeFileSync(outputFile, String(fileDoc))
}

// Helper functions

// Converts an input pattern to a regular expression.
// Converts any "*" to a ".*".
// Escapes all other regex special characters.
// Prefixes with "^", and adds "$" suffix.
function toRegex(pattern) {
    let parts = pattern.split("*");
    if (parts.length === 0) parts = [pattern];
    const escaped = parts
        .map(chunk => chunk.replace(/[-[\]{}()*+?.,\\^$|]/g, "\\$&"))
        .join("(.*)");
    return "^" + escaped + "$";
}

// Log the message to the console if the script was run with `--debug` argument
function maybeDebugLog(message) {
    if (options.debug) {
        console.debug(message);
    }
}

// Convert an array of path elements JSON dot notation
function pathToString(path) {
    const elements = []
    path.slice().forEach(entry => {
        if (yaml.isSeq(entry)) {
            elements.push("[]");
        }
        if (yaml.isPair(entry)) {
            elements.push(".");
            elements.push(entry.key.value);
        }
    });
    return elements.length === 0 ? "." : elements.join("");
}
