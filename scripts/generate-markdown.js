import {
    readJsonSchemaTypes, resolveJsonSchemaPropertyType
} from "./json-schema.js";
import {readAndFixMetaSchemaTypes} from "./meta-schema.js";
import fs from "node:fs";
import {markdownDocPath} from "./util.js";

const { messages, types } = readAndFixMetaSchemaTypes();

if (messages.length > 0) {
    throw new Error("Meta schema has problems. Please run fix-meta-schema and try again.");
}

const jsonSchemaTypesByType = {};
readJsonSchemaTypes().forEach(type => jsonSchemaTypesByType[type.type] = type);

const output = [];

output.push('<!-- This file is generated using "make generate-markdown". Do not edit directly. -->\n\n')

types.sort((a, b) => a.type.localeCompare(b.type));
types.forEach(metaSchemaType => {
    const type = metaSchemaType.type;
    const jsonSchemaType = jsonSchemaTypesByType[type];
    if (!jsonSchemaType) {
        throw new Error(`JSON schema type not found for meta schema type ${type}.`);
    }
    const required = jsonSchemaType.schema['required'];

    // Heading
    output.push(`### ${type} <a id="${type}"></a>\n\n`);

    // Properties
    if (metaSchemaType.properties.length === 0) {
        output.push("No properties.\n\n");
    } else {
        // Property type and description table
        output.push(`| Property | Description | Type | Required? |\n`);
        output.push("|---|---|---|---|\n");
        metaSchemaType.properties.forEach(property => {
            const propertyType = resolveJsonSchemaPropertyType(jsonSchemaType, property.property, jsonSchemaTypesByType);
            const formattedPropertyType = formatJsonSchemaPropertyType(propertyType, '', '');
            const isRequired = required !== undefined && required.includes(property.property);

            output.push(`| \`${property.property}\` | ${property.description.split("\n").join("<br>")} | ${formattedPropertyType} | \`${isRequired}\` |\n`);
        });
        output.push('\n');

        // TODO: print language implementation status
    }

    // JSON schema collapsible section
    output.push(`<details>\n`);
    output.push(`<summary>JSON Schema</summary>\n\n`);
    output.push(`[JSON Schema Source File](./schema/${jsonSchemaType.file})\n`)
    output.push(`<pre>${JSON.stringify(jsonSchemaType.schema, null, 2)}</pre>\n`);
    output.push(`</details>\n`);
    output.push('\n');
});

fs.writeFileSync(markdownDocPath, output.join(""));

// Helper functions
function formatJsonSchemaPropertyType(type, prefix, suffix) {
    const output = [];
    output.push(prefix);
    if (type.isOneOf) {
        output.push('One of:<br>');
        type.oneOfTypes.forEach(item => {
            output.push(formatJsonSchemaPropertyType(item, '* ', '<br>'));
        });
        return output.join('');
    }
    if (type.isSeq) {
        output.push('`array` of ');
    }
    if (type.isScalar) {
        output.push(`\`${type.type}\``);
    } else {
        output.push(`[\`${type.type}\`](#${type.type})`);
    }
    output.push(suffix);
    return output.join('');
}
