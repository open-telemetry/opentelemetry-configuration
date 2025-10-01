import {
    readJsonSchemaTypes, resolveRef
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
const languages = ['c++', 'c#', 'erlang', 'go', 'java', 'js', 'php', 'python', 'ruby', 'rust', 'swift']

class JsonSchemaType {
    type;
    isPrimitive;
    isArray;
    isOneOf;

    constructor(type, isPrimitive, isArray, isOneOf) {
        this.type = type;
        this.isPrimitive = isPrimitive;
        this.isArray = isArray;
        this.isOneOf = isOneOf;
    }
}

function resolvePropertyTypes(jsonSchemaType, property, jsonSchemaTypesByType) {
    const properties = jsonSchemaType.schema['properties'];
    if (!properties) {
        throw new Error(`Unable to resolve property ${property} for ${jsonSchemaType.type}. Type doesn't have properties.`)
    }
    const jsonSchemaProperty = properties[property];
    if (!jsonSchemaProperty) {
        throw new Error(`Unable to resolve property ${property} for ${jsonSchemaType.type}. Type doesn't have ${property}.`);
    }
    const type = jsonSchemaProperty['type'];
    const ref = jsonSchemaProperty['$ref'];
    const items = jsonSchemaProperty['items'];
    const oneOf = jsonSchemaProperty['oneOf'];
    if (type === 'array' && items) {
        const itemsType = items['type'];
        const itemsRef = items['$ref'];
        if (itemsType) {
            const typeArr = Array.isArray(type) ? type : [type];
            return typeArr.map(item => new JsonSchemaType(item, true, true, false));
        }
        if (itemsRef) {
            const resolvedRef = resolveRef(itemsRef, jsonSchemaTypesByType);
            return [new JsonSchemaType(resolvedRef.type, false, true, false)];
        }
    }
    if (type) {
        const typeArr = Array.isArray(type) ? type : [type];
        return typeArr.map(item => new JsonSchemaType(item, true, false, false));
    }
    if (ref) {
        const resolvedRef = resolveRef(ref, jsonSchemaTypesByType);
        return [new JsonSchemaType(resolvedRef.type, false, false, false)];
    }
    if (oneOf) {
        return [new JsonSchemaType('oneOf', false, false, true)];
    }
    throw new Error(`Unable to resolve types of property ${property}: ${JSON.stringify(jsonSchemaType)}.`)
}

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
            const formatted = [];
            const propertyTypes = resolvePropertyTypes(jsonSchemaType, property.property, jsonSchemaTypesByType);
            propertyTypes.forEach(type => {
                    if (propertyTypes.length > 1) {
                        formatted.push('* ');
                    }
                    if (type.isArray) {
                        formatted.push('`array` of ')
                    }
                    if (type.isPrimitive || type.isOneOf) {
                        formatted.push(`\`${type.type}\``);
                    } else {
                        formatted.push(`[\`${type.type}\`](#${type.type})`);
                    }
                    if (type.isOneOf) {
                        formatted.push(' (see JSON schema for details)');
                    }
                    if (propertyTypes.length > 1) {
                        formatted.push('<br/>');
                    }
                });
            const isRequired = required !== undefined && required.includes(property.property);

            output.push(`| \`${property.property}\` | ${property.description} | ${formatted.join("")} | \`${isRequired}\` |\n`);
        });
        output.push('\n');

        // Property language support table
        output.push('| Property |')
        languages.forEach(language => output.push(`${language} |`));
        output.push('\n');
        output.push('|---|');
        languages.forEach(language => output.push(`---|`));
        output.push('\n');
        metaSchemaType.properties.forEach(property => {
            output.push(`| \`${property.property}\` |`);
            languages.forEach(language => output.push(`unknown |`));
            output.push('\n');
        });
        output.push('\n');
    }

    // JSON schema collapsible section
    output.push(`<details>\n`);
    output.push(`<summary>JSON Schema</summary>\n\n`);
    output.push(`[JSON Schema Source File](./schema/${jsonSchemaType.file})\n`)
    output.push(`<pre>${JSON.stringify(jsonSchemaType.schema, null, 2)}</pre>`);
    output.push(`</details>\n`);

    // Path patterns collapsible section
    output.push(`<details>\n`);
    output.push(`<summary>Path patterns</summary>\n\n`);
    jsonSchemaType.pathPatterns.forEach(pathPattern => {
        output.push(`* \`${pathPattern}\``);
    });
    output.push(`</details>\n`);
});

fs.writeFileSync(markdownDocPath, output.join(""));
