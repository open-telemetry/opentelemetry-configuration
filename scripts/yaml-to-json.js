import fs from 'fs';
import {metaSchemaFilePrefix, schemaSourceDirPath, schemaOutDirPath} from "./util.js";
import yaml from "yaml";

// Delete and recreate schema out directory
fs.rmSync(schemaOutDirPath, {recursive: true, force: true});
fs.mkdirSync(schemaOutDirPath);

// Read YAML source files and create a map of their content
const fileContentByFile = {};
fs.readdirSync(schemaSourceDirPath)
    .filter(file => file.endsWith('.yaml') && !file.startsWith(metaSchemaFilePrefix))
    .forEach(file => fileContentByFile[file] = fs.readFileSync(schemaSourceDirPath + file, "utf-8"));

// Iterate through source files, replacing references
Object.keys(fileContentByFile).forEach(file => {
    const jsonFile = file.replace('.yaml', '.json');
    Object.entries(fileContentByFile).forEach(([otherFile, otherContent]) => {
        fileContentByFile[otherFile] = otherContent.replaceAll(`$ref: ${file}`, `$ref: ${jsonFile}`);
    });
});

// For each file, parse the YAML, annotate, and write to output directory
Object.entries(fileContentByFile).forEach(([file, content]) => {
    const parsedContent = yaml.parse(content);
    const jsonFile = file.replace('.yaml', '.json');

    // Annotate with constant info
    const annotated = {
        '$id': `https://opentelemetry.io/otelconfig/${jsonFile}`,
        '$schema': 'https://json-schema.org/draft/2020-12/schema',
        ...parsedContent
    }

    fs.writeFileSync(schemaOutDirPath + jsonFile, JSON.stringify(annotated, null, 2));
});
