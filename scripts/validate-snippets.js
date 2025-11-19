import fs from "fs";
import {rootTypeName, schemaOutDirPath} from "./util.js";
import {readJsonSchemaTypes} from "./json-schema.js";
import Ajv from "ajv/dist/2020.js";
import {readSnippets} from "./snippets.js";

// Initialize ajv
const ajv = new Ajv({ allErrors: true });
fs.readdirSync(schemaOutDirPath)
    .filter(file => file.endsWith('.json'))
    .forEach(file =>{
        const rawContent = fs.readFileSync(schemaOutDirPath + file, "utf-8");
        const jsonContent = JSON.parse(rawContent);
        ajv.addSchema(jsonContent);
    });


const jsonSchemaTypesByType = {};
readJsonSchemaTypes().forEach(type => jsonSchemaTypesByType[type.type] = type);
const rootJsonSchemaType = jsonSchemaTypesByType[rootTypeName];
const rootJsonSchemaTypeRef = computeJsonSchemaTypeRef(rootJsonSchemaType);


const messages = [];

readSnippets()
    .forEach(snippet => {
        const rootValidator = ajv.getSchema(rootJsonSchemaTypeRef);
        if (!rootValidator) {
            throw new Error(`Unable to resolve root schema for JSON schema type ref: ${rootJsonSchemaTypeRef}`);
        }

        const snippetJsonSchemaType = jsonSchemaTypesByType[snippet.jsonSchemaType];
        if (!snippetJsonSchemaType) {
            messages.push(`Error validating snippet ${snippet.file}. Resolved JSON schema type not found: ${snippet.jsonSchemaType}`);
            return;
        }
        const snippetTypeRef = computeJsonSchemaTypeRef(snippetJsonSchemaType);
        const snippetValidator = ajv.getSchema(snippetTypeRef);
        if (!snippetValidator) {
            messages.push(`Error validating snippet ${snippet.file}. Unable to resolve schema for JSON schema type ref: ${snippetTypeRef}`);
            return;
        }

        // Validate the snippet against the specific schema
        // Return if schema is invalid, so we don't validate the entire snippet against the root schema and duplicate errors
        if (!validate(snippet.file, snippetValidator, snippetTypeRef, snippet.parsedSnippetContent)) {
            return;
        }

        // Validate entire snippet against root schema
        validate(snippet.file, rootValidator, rootJsonSchemaTypeRef, snippet.parsedFullContent);
    });

if (messages.length > 0) {
    messages.forEach(message => console.log(message));
    process.exit(1);
} else {
    console.log("All snippets are valid.");
    process.exit(0);
}

// Helper functions

function validate(snippetFile, ajvValidator, ajvRef, data) {
    try {
        const valid = ajvValidator(data);
        if (!valid) {
            messages.push(`Snippet ${snippetFile} failed validation against ref ${ajvRef} with errors:`);
            ajvValidator.errors.forEach(error => messages.push(`  ${formatError(error)}`));
            return false;
        }
        return true;
    } catch (error) {
        messages.push(`Error validating snippet ${snippetFile} against ref ${ajvRef}: ${error.message}`);
        return false;
    }
}

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
