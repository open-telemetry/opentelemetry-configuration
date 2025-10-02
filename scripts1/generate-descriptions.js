import fs from 'fs';
import yaml from 'yaml';
import {schemaDirPath} from "./util.js";
import {readAndFixMetaSchemaTypes} from "./meta-schema.js";
import {readJsonSchemaTypes, resolveJsonSchemaPropertyType, resolveRef} from "./json-schema.js";

let inputFile = '/Users/bergfamily/code/opentelemetry-configuration/examples/kitchen-sink.yaml';
let outputFile = null; // '/Users/bergfamily/code/opentelemetry-configuration/examples/kitchen-sink-new.yaml';


const { messages, types } = readAndFixMetaSchemaTypes();
const metaSchemaTypesByType = {};
types.forEach(type => metaSchemaTypesByType[type.type] = type);

if (messages.length > 0) {
    throw new Error("Meta schema has problems. Please run fix-meta-schema and try again.");
}

const jsonSchemaTypesByType = {};
readJsonSchemaTypes().forEach(type => jsonSchemaTypesByType[type.type] = type);


// Read in the input file
const fileContent = fs.readFileSync(inputFile, "utf-8");
const fileDoc = yaml.parseDocument(fileContent);
let counter = 0;
let lastNode = null;
// Visit each key/value pair in the input file YAML, attempting to match against description rules
// and setting a comment with the description from the matching rule
yaml.visit(fileDoc, {
    Pair: (key, node, path) => {
        if (yaml.isSeq(node.value)) {
            node.value.items.forEach(item => item.commentBefore = null);
        }
        let prevLastNode = lastNode;
        lastNode = node;
        counter++;

        const parentPath = pathToString(path);
        const propertyKey = node.key.value;

        const parentJsonSchemaType = resolveParentNodeType(jsonSchemaTypesByType, path);
        const type = parentJsonSchemaType ? parentJsonSchemaType.type : null;

        console.log(`${parentPath} - ${propertyKey} - ${type}`);

        if (!parentJsonSchemaType) {
            return;
        }

        const parentMetaSchemaType = metaSchemaTypesByType[parentJsonSchemaType.type];
        if (!parentMetaSchemaType) {
            return;
        }
        const property = parentMetaSchemaType.properties.find(item => item.property === propertyKey);
        const hasAdditionalProperties = parentJsonSchemaType.schema['additionalProperties'] || false;
        if (!property && !hasAdditionalProperties) {
            throw new Error(`Unable to find property ${propertyKey} for type ${parentMetaSchemaType.type}`);
        }
    }
});

// Print the output, or write it to a file
if (outputFile === null) {
    console.log("No output file arg set, logging to console.");
    // console.log(String(fileDoc))
} else {
    // console.log("Writing output to \"" + outputFile + "\"");
    fs.writeFileSync(outputFile, String(fileDoc))
}

// Helper functions

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

function resolveParentNodeType(jsonSchemaTypesByType, path) {
    let last = jsonSchemaTypesByType['OpentelemetryConfiguration'];
    if (!last) {
        throw new Error(`JSON schema missing root type 'OpenTelemetryConfiguration'`);
    }
    for (let i = 0; i < path.length; i++) {
        const entry = path[i];
        if (yaml.isPair(entry)) {
            const propertyKey = entry.key.value;
            let jsonSchemaPropertyType;
            try {
                jsonSchemaPropertyType = resolveJsonSchemaPropertyType(last, propertyKey, jsonSchemaTypesByType);
            } catch (error) {
                return null;
            }
            last = jsonSchemaTypesByType[jsonSchemaPropertyType.type];
            if (!last) {
                console.log(`No type for ${jsonSchemaPropertyType.type}`);
                return null;
            }
        }
    }
    return last;
}
