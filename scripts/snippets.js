import fs from "fs";
import {snippetsDirPath} from "./util.js";
import yaml from "yaml";

const snippetFileNameFormat = "<JsonSchemaType>_<snake_case_snippet_description>.yaml";
const yamlFileExtension = ".yaml";

export function readSnippets() {
    return fs.readdirSync(snippetsDirPath)
        .filter(file => file.endsWith(yamlFileExtension))
        .map(file => {
            const fileParts = file.split('_');
            if (fileParts.length < 2) {
                throw new Error(`Invalid snippet file name: ${file}. File names follow the form ${snippetFileNameFormat}`);
            }
            const jsonSchemaType = fileParts[0];
            // Strip file extension from the last entry
            fileParts[fileParts.length - 1] = fileParts[fileParts.length - 1].substring(0, fileParts[fileParts.length - 1].indexOf(yamlFileExtension));
            // Build description by converting the snake_case to title case
            const description = fileParts.slice(1)
                .map(word => (word.charAt(0).toUpperCase() + word.slice(1)))
                .join(" ");

            const rawContent = fs.readFileSync(snippetsDirPath + file, "utf-8");
            const parsedContent = yaml.parse(rawContent);
            return new Snippet(file, description, jsonSchemaType, rawContent, parsedContent);
        });
}

// Types

export class Snippet {
    file;
    description;
    jsonSchemaType;
    rawContent;
    parsedContent;

    constructor(file, description, jsonSchemaType, rawContent, parsedContent) {
        this.file = file;
        this.description = description;
        this.jsonSchemaType = jsonSchemaType;
        this.rawContent = rawContent;
        this.parsedContent = parsedContent;
    }
}


// Helper functions
