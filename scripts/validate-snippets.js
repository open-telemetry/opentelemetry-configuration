import fs from "fs";
import {developmentSchemaPath, developmentStability, maturityLevelKey, rootTypeName, schemaPath} from "./util.js";
import Ajv from "ajv/dist/2020.js";
import {readSnippets} from "./snippets.js";
import {readSourceTypesByType} from "./source-schema.js";

// One validator per compiled schema. A file says which one reads it.
const stableAjv = newValidator(schemaPath, true);
const developmentAjv = newValidator(developmentSchemaPath, false);

const sourceTypesByType = readSourceTypesByType();

const rootJsonSchemaType = sourceTypesByType[rootTypeName];
const rootJsonSchemaTypeRef = computeJsonSchemaTypeRef(rootJsonSchemaType);

const messages = [];

readSnippets()
    .forEach(snippet => {
        const ajv = validatorFor(snippet.parsedFullContent);
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

function newValidator(path, strict) {
    // The development schema keeps the stability annotation. A validator is
    // required to ignore a keyword it does not know, but the strict mode of ajv
    // is stricter than that.
    const ajv = new Ajv({allErrors: true, strict});
    ajv.addSchema(JSON.parse(fs.readFileSync(path, "utf-8")));
    return ajv;
}

function validatorFor(parsedContent) {
    const declared = parsedContent && parsedContent[maturityLevelKey];
    return declared === developmentStability ? developmentAjv : stableAjv;
}

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
