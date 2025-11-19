import fs from 'fs';
import {schemaOutDirPath} from "./util.js";
import yaml from "yaml";
import {readSourceSchemaTypes} from "./source-schema.js";

// Delete and recreate schema out directory
fs.rmSync(schemaOutDirPath, {recursive: true, force: true});
fs.mkdirSync(schemaOutDirPath);

// Read source schema
const { sourceContentByFile, sourceTypesByType } = readSourceSchemaTypes();

// Validate source types and exit early if there are any errors
const messages = [];
Object.entries(sourceTypesByType).forEach(([type, sourceSchemaType]) => {
    allPropertiesShouldHaveDescriptions(sourceSchemaType, messages);
});
if (messages.length > 0) {
    messages.forEach(message => console.log(message));
    process.exit(1);
}

// If we make it here, source schema is valid. Massage the schema a bit and write it to the output directory in JSON format.

// Replace refs with new JSON file paths
Object.keys(sourceContentByFile).forEach(file => {
    const jsonFile = file.replace('.yaml', '.json');
    Object.entries(sourceContentByFile).forEach(([otherFile, otherContent]) => {
        const otherContentString = yaml.stringify(otherContent, {lineWidth: 0});
        sourceContentByFile[otherFile] = yaml.parse(otherContentString.replaceAll(`$ref: ${file}`, `$ref: ${jsonFile}`));
    });
});

// For each file, parse the YAML, annotate, and write to output directory
Object.entries(sourceContentByFile).forEach(([file, content]) => {
    const jsonFile = file.replace('.yaml', '.json');

    // Annotate with constant info
    const annotated = {
        '$id': `https://opentelemetry.io/otelconfig/${jsonFile}`,
        '$schema': 'https://json-schema.org/draft/2020-12/schema',
        ...content
    }

    fs.writeFileSync(schemaOutDirPath + jsonFile, JSON.stringify(annotated, null, 2));
});

console.log(readSourceSchemaTypes());

function allPropertiesShouldHaveDescriptions(sourceSchemaType, messages) {
    sourceSchemaType.properties.forEach(property => {
       if (!property.schema.description) {
           messages.push(`Property ${sourceSchemaType.type}.${property.property} has no description`);
       }
    });
}
