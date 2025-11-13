import fs from 'fs';
import yaml from 'yaml';
import {readAndFixMetaSchema} from "./meta-schema.js";
import {readJsonSchemaTypes} from "./json-schema.js";
import {isExperimentalProperty, rootTypeName} from "./util.js";

// Extract input file arg or throw
const usageString = "Usage: \n npm run-script generate-descriptions -- /absolute/path/to/input/file.yaml /absolute/path/to/output/file.yaml [--debug]";
if (process.argv.length < 3) {
    throw new Error("Missing file to generate descriptions for. " + usageString);
}
const inputFile = process.argv[2];
if (!fs.existsSync(inputFile)) {
    throw new Error("File \"" + inputFile + "\" not found.");
}

// Extract output file arg
let outputFile = null;
if (process.argv.length >= 4 && process.argv[3].startsWith("/")) {
    outputFile = process.argv[3];
}

// Extract options
const options = {
    debug: false
}
for (let i = 3; i < process.argv.length; i++) {
    if (process.argv[i] === '--debug') {
        options['debug'] = true;
    }
}

// Read JSON schema and meta schema
const { messages, metaSchema } = readAndFixMetaSchema();
const metaSchemaTypesByType = {};
metaSchema.types.forEach(type => metaSchemaTypesByType[type.type] = type);
if (messages.length > 0) {
    throw new Error("Meta schema has problems. Please run fix-meta-schema and try again.");
}
const jsonSchemaTypesByType = {};
readJsonSchemaTypes().forEach(type => jsonSchemaTypesByType[type.type] = type);

// Read and process the input file
// Visit each key/value pair in the input file YAML, attempting to match against description rules
// and setting a comment with the description from the matching rule
const fileContent = fs.readFileSync(inputFile, "utf-8");
const fileDoc = yaml.parseDocument(fileContent);
let counter = 0;
let lastNode = null;
yaml.visit(fileDoc, {
    Pair: (key, node, path) => {
        if (yaml.isSeq(node.value)) {
            node.value.items.forEach(item => item.commentBefore = null);
        }
        let prevLastNode = lastNode;
        lastNode = node;
        counter++;
        const propertyKey = node.key.value;
        const jsonPath = yamlPathToJsonPath(path, propertyKey);

        // Resolve jsonSchemaType, metaSchemaType, metaSchemaProperty, or return
        debug("");
        debug(`Resolving description for ${jsonPath}`);
        let jsonSchemaType;
        try {
            jsonSchemaType = resolveJsonSchemaType(jsonSchemaTypesByType, path);
        } catch (error) {
            debug(`Unable to resolve JSON schema type: ${error.message}`);
            return;
        }
        const metaSchemaType = metaSchemaTypesByType[jsonSchemaType.type];
        if (!metaSchemaType) {
            throw new Error(`JSON schema type not found for meta schema type ${jsonSchemaType.type}.`);
        }
        const metaSchemaProperty = metaSchemaType.properties.find(item => item.property === propertyKey);
        if (!metaSchemaProperty) {
            debug(`No meta schema property ${propertyKey} for type ${metaSchemaType.type}.`);
            return;
        }
        let fullDescription = metaSchemaProperty.description;
        if (isExperimentalProperty(metaSchemaProperty.property)) {
            if (!fullDescription.endsWith('\n')) {
                fullDescription += '\n';
            }
            fullDescription += `This property is experimental and subject to breaking changes in minor versions.`;
        }
        debug(`Resolved type ${jsonSchemaType.type}, property ${metaSchemaProperty.property}, description:\n${fullDescription}`);

        // Set the description
        let formattedDescription = fullDescription
            .replace(/\n$/, '')
            .split('\n')
            .map(line => ' ' + line)
            .join('\n');
        // If we're on the first element, prefix the formatted description with the existing commentBefore to retain the comments at the top of the file
        if (counter === 1 && node.key.commentBefore) {
            const index = node.key.commentBefore.lastIndexOf(formattedDescription);
            formattedDescription = (index === -1)
                ? node.key.commentBefore + formattedDescription
                : node.key.commentBefore.substring(0, index) + formattedDescription;
        }
        node.key.commentBefore = formattedDescription;
        node.value.commentBefore = null;
        // yaml parser sometimes misidentifies a pair's commentBefore as the previously processed pair.value.comment
        // we detect and fix that by keeping a reference to the previous node and setting the comment to null
        // this works because we only use commentBefore in this project
        if (prevLastNode !== null) {
            node.key.spaceBefore = null;
            prevLastNode.value.comment = null;
        }
    }
});

// Print the output, or write it to a file
if (outputFile === null) {
    console.log("No output file arg set, logging to console.");
    console.log(String(fileDoc))
} else {
    console.log(`Writing output to ${outputFile}`);
    fs.writeFileSync(outputFile, String(fileDoc))
}

// Helper functions
// Log the message to the console if the script was run with `--debug` argument
function debug(message) {
    if (options.debug) {
        console.debug(message);
    }
}

function yamlPathToJsonPath(yamlPath, propertyKey) {
    const elements = []
    yamlPath.slice().forEach(entry => {
        if (yaml.isSeq(entry)) {
            elements.push("[]");
        }
        if (yaml.isPair(entry)) {
            elements.push(".");
            elements.push(entry.key.value);
        }
    });
    let jsonPath = elements.join('');
    if (!jsonPath.endsWith('.')) {
        jsonPath += '.';
    }
    jsonPath += propertyKey;
    return jsonPath;
}

function resolveJsonSchemaType(jsonSchemaTypesByType, yamlPath) {
    let last = jsonSchemaTypesByType[rootTypeName];
    if (!last) {
        throw new Error(`JSON schema missing root type '${rootTypeName}'`);
    }
    for (let i = 0; i < yamlPath.length; i++) {
        const entry = yamlPath[i];
        if (yaml.isPair(entry)) {
            const jsonSchemaProperty = last.properties.find(property => property.property === entry.key.value);
            if (!jsonSchemaProperty) {
                throw new Error(`Unknown property ${entry.key.value} in type ${last.type}.`);
            }
            // A property may have multiple types. Naively, resolve the type to be the first one that exists in jsonSchemaTypesByType.
            const resolvedTypes = jsonSchemaProperty.types.map(type => jsonSchemaTypesByType[type]).filter(Boolean);
            if (resolvedTypes.length > 0) {
                last = resolvedTypes[0];
            } else {
                throw new Error(`Unable to resolve JSON schema type for property ${entry.key.value} in type ${last.type}.`);
            }
        }
    }
    return last;
}
