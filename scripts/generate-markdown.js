import {readJsonSchemaTypes} from "./json-schema.js";
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
const headers = [];

types.sort((a, b) => a.type.localeCompare(b.type));

addHeader('Overview', 'overview', 1);
output.push('TODO\n');

// Write types
addHeader('Types', 'types', 1);
types.forEach(metaSchemaType => {
    const type = metaSchemaType.type;
    const jsonSchemaType = jsonSchemaTypesByType[type];
    if (!jsonSchemaType) {
        throw new Error(`JSON schema type not found for meta schema type ${type}.`);
    }
    const required = jsonSchemaType.schema['required'];

    // Heading
    addHeader(type, type, 2);

    // Properties
    if (metaSchemaType.properties.length === 0) {
        output.push("No properties.\n\n");
    } else {
        // Property type and description table
        output.push(`| Property | Description | Type | Required? |\n`);
        output.push("|---|---|---|---|\n");
        metaSchemaType.properties.forEach(property => {
            const jsonSchemaProperty = jsonSchemaType.properties.find(item => item.property === property.property);
            if (!jsonSchemaProperty) {
                throw new Error(`JSON schema property not found for property ${property.property} and type ${type}.`);
            }
            const formattedPropertyType = formatJsonSchemaPropertyType(jsonSchemaProperty, jsonSchemaTypesByType);
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

// Write SDK extension plugins
addHeader('SDK Extension Plugins', 'sdk-extension-plugins', 1);
output.push(
`[SDK extension plugins](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#supported-sdk-extension-plugins) are places where custom interface implementations can be referenced and configured.

For example, you could write a custom \`SpanExporter\`, and indicate that it should be paired with a \`BatchSpanProcessor\`.

Each of the following types support referencing custom interface implementations. Each type is an object type containing exactly one property whose value is type \`object\` or \`null\`. The property key refers to the name of the custom implementation, and must be the same as the \`name\` of a corresponding registered [ComponentProvider](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#register-componentprovider). The value passed as configuration when the [ComponentProvider.create](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#create) is called.

SDK extension plugin types may have properties defined corresponding to built-in implementations of the interface. For example, the \`otlp_http\` property of \`SpanExporter\` defines the OTLP http/protobuf exporter.

`);
types.filter(metaSchemaType => metaSchemaType.isSdkExtensionPlugin)
    .forEach(metaSchemaType => {
        output.push(`* [${metaSchemaType.type}](#${metaSchemaType.type})\n`)
    });

headers.push('\n\n');
output.unshift(...headers);
output.unshift('<!-- This file is generated using "make generate-markdown". Do not edit directly. -->\n\n')
fs.writeFileSync(markdownDocPath, output.join(""));

// Helper functions
function formatJsonSchemaPropertyType(jsonSchemaProperty, jsonSchemaTypesByType) {
    const output = [];
    if (jsonSchemaProperty.isSeq) {
        if (jsonSchemaProperty.isSeq) {
            output.push('`array` of ');
        }
    }
    let prefix = '';
    let suffix = '';
    if (jsonSchemaProperty.types.length > 1) {
        output.push('one of:<br>');
        prefix = '* ';
        suffix = '<br>';
    }
    jsonSchemaProperty.types.forEach(type => {
        let resolvedType = jsonSchemaTypesByType[type];
        output.push(prefix);
        output.push(resolvedType ? `[\`${resolvedType.type}\`](#${resolvedType.type})` : `\`${type}\``)
        output.push(suffix);
    });
    return output.join('');
}

function addHeader(title, id, level) {
    headers.push(`${'  '.repeat(level - 1)}* [${title}](#${id})\n`);
    output.push(`${'#'.repeat(level)} ${title} <a id="${id}"></a>\n\n`);
}

