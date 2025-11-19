import fs from 'fs';
import {schemaOutDirPath} from "./util.js";
import yaml from "yaml";
import {readSourceSchema} from "./source-schema.js";

// Delete and recreate schema out directory
fs.rmSync(schemaOutDirPath, {recursive: true, force: true});
fs.mkdirSync(schemaOutDirPath);

// Read source schema
const {sourceContentByFile, sourceTypesByType} = readSourceSchema();

// Validate source types and exit early if there are any errors
const messages = [];
Object.entries(sourceTypesByType).forEach(([type, sourceSchemaType]) => {
    allPropertiesShouldHaveDescriptions(sourceSchemaType, messages);
    allEnumValuesShouldHaveDescriptions(sourceSchemaType, messages);
});
if (messages.length > 0) {
    messages.forEach(message => console.log(message));
    process.exit(1);
}

// If we make it here, source schema is valid.

// Replace refs with new JSON file paths
Object.keys(sourceContentByFile).forEach(file => {
    const jsonFile = file.replace('.yaml', '.json');
    Object.entries(sourceContentByFile).forEach(([otherFile, otherContent]) => {
        const otherContentString = yaml.stringify(otherContent, {lineWidth: 0});
        sourceContentByFile[otherFile] = yaml.parse(otherContentString.replaceAll(`$ref: ${file}`, `$ref: ${jsonFile}`));
    });
});

// For each file, massage the schema a bit and write it to the output directory in JSON format.
Object.entries(sourceContentByFile).forEach(([file, content]) => {
    const jsonFile = file.replace('.yaml', '.json');

    // Remove bits which are not part of JSON schema spec
    stripExtraSourceSchemaMetadata(content);
    const defs = content['$defs'];
    if (defs) {
        Object.values(defs).forEach(type => stripExtraSourceSchemaMetadata(type));
    }

    // Annotate with constant info
    const annotated = {
        '$id': `https://opentelemetry.io/otelconfig/${jsonFile}`,
        '$schema': 'https://json-schema.org/draft/2020-12/schema',
        ...content
    }

    fs.writeFileSync(schemaOutDirPath + jsonFile, JSON.stringify(annotated, null, 2));
});

// Helper functions

function stripExtraSourceSchemaMetadata(type) {
    delete type['enumDescriptions'];
    delete type['isSdkExtensionPlugin'];
}

// Validation functions

function allPropertiesShouldHaveDescriptions(sourceSchemaType, messages) {
    sourceSchemaType.properties.forEach(property => {
        if (!property.schema.description) {
            messages.push(`Please add 'description' to ${sourceSchemaType.type}.${property.property}.`);
        }
    });
}

function allEnumValuesShouldHaveDescriptions(sourceSchemaType, messages) {
    if (!sourceSchemaType.isEnumType()) {
        return;
    }
    const enumDescriptions = sourceSchemaType.schema['enumDescriptions'];
    if (!enumDescriptions) {
        messages.push(`Please add 'enumDescriptions' to ${sourceSchemaType.type}.`);
        return;
    }
    sourceSchemaType.enumValues.forEach(enumValue => {
        if (!enumDescriptions[enumValue]) {
            messages.push(`Please add entry for ${enumValue} to 'enumDescriptions' for ${sourceSchemaType.type}.`);
        }
    });
    Object.keys(enumDescriptions).forEach(enumValue => {
        if (!sourceSchemaType.enumValues.includes(enumValue)) {
            messages.push(`Please remove entry for ${enumValue} from 'enumDescriptions' for ${sourceSchemaType.type}.`);
        }
    });
}
