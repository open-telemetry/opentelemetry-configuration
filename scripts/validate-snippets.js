import fs from "fs";
import {schemaDirPath} from "./util.js";
import {readJsonSchemaTypes} from "./json-schema.js";
import Ajv from "ajv/dist/2020.js";
import {readSnippets} from "./snippets.js";

const jsonSchemaTypesByType = {};
readJsonSchemaTypes().forEach(type => jsonSchemaTypesByType[type.type] = type);

// Initialize ajv
const ajv = new Ajv({ allErrors: true });
fs.readdirSync(schemaDirPath)
    .filter(file => file.endsWith('.json'))
    .forEach(file =>{
        const rawContent = fs.readFileSync(schemaDirPath + file, "utf-8");
        const jsonContent = JSON.parse(rawContent);
        ajv.addSchema(jsonContent);
    });

const messages = [];

readSnippets()
    .forEach(snippet => {
        const jsonSchemaType = jsonSchemaTypesByType[snippet.jsonSchemaType];
        if (!jsonSchemaType) {
            messages.push(`Error validating snippet ${snippet.file}. Resolved JSON schema type not found: ${snippet.jsonSchemaType}`);
            return;
        }
        const jsonSchemaTypeRef = computeJsonSchemaTypeRef(jsonSchemaType);
        const validate = ajv.getSchema(jsonSchemaTypeRef);
        if (!validate) {
            messages.push(`Error validating snippet ${snippet.file}. Unable to resolve schema for JSON schema type ref: ${jsonSchemaTypeRef}`);
            return;
        }

        try {
            const valid = validate(snippet.parsedContent);
            if (!valid) {
                messages.push(`Snippet ${snippet.file} is invalid: `);
                validate.errors.forEach(error => messages.push(`  ${formatError(error)}`));
            }
        } catch (error) {
            messages.push(`Error validating snippet ${snippet.file}: ${error.message}`);
        }
    });

if (messages.length > 0) {
    messages.forEach(message => console.log(message));
    process.exit(1);
} else {
    console.log("All snippets are valid.");
    process.exit(0);
}

// Helper functions

function computeJsonSchemaTypeRef(jsonSchemaType) {
    const fileId = jsonSchemaType.fileContent['$id'];
    if (jsonSchemaType.jsonSchemaPath === '.') {
        return fileId;
    }
    return `${fileId}${jsonSchemaType.jsonSchemaPath}`;
}

function formatError(error) {
    const path = error.instancePath.replaceAll('\/', '.');
    return `${path} ${error.message}`;
}
