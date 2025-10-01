import {
    readJsonSchemaTypes
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

types.sort((a, b) => a.type.localeCompare(b.type));
types.forEach(metaSchemaType => {
    const type = metaSchemaType.type;
    const jsonSchemaType = jsonSchemaTypesByType[type];
    if (!jsonSchemaType) {
        throw new Error(`JSON schema type not found for meta schema type ${type}.`);
    }

    // Heading
    output.push(`### ${type} <a id="${type}"></a>\n\n`);

    // Properties
    if (metaSchemaType.properties.length === 0) {
        output.push("No properties.\n\n");
    } else {
        // Property type and description table
        output.push(`| Property | Type | Description |\n`);
        output.push("|---|---|---|\n");
        metaSchemaType.properties.forEach(property => {
           output.push(`| ${property.property} | TODO | ${property.description} |\n`);
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
            output.push(`| ${property.property} |`);
            languages.forEach(language => output.push(`TODO |`));
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
