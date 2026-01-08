import fs from "fs";
import {rootTypeName, schemaPath} from "./util.js";
import Ajv from "ajv/dist/2020.js";
import {readSnippets} from "./snippets.js";
import {readSourceTypesByType} from "./source-schema.js";

// Initialize ajv
const ajv = new Ajv({ allErrors: true });
const outputSchema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
ajv.addSchema(outputSchema);

const sourceTypesByType = readSourceTypesByType();

const rootJsonSchemaType = sourceTypesByType[rootTypeName];
const rootJsonSchemaTypeRef = computeJsonSchemaTypeRef(rootJsonSchemaType);

const messages = [];

readSnippets()
    .forEach(snippet => {
        const rootValidator = ajv.getSchema(rootJsonSchemaTypeRef);
        if (!rootValidator) {
            throw new Error(`Unable to resolve root schema for JSON schema type ref: ${rootJsonSchemaTypeRef}`);
        }

        const snippetJsonSchemaType = sourceTypesByType[snippet.jsonSchemaType];
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
    if (jsonSchemaType.type === rootTypeName) {
        return '';
    }
    return `#/$defs/${jsonSchemaType.type}`;
}

function formatError(error) {
    const path = error.instancePath.replaceAll('\/', '.');
    return `${path} ${error.message}`;
}
