import fs from "fs";
import {snippetsDirPath} from "./util.js";
import yaml from "yaml";

export function readSnippets() {
    return fs.readdirSync(snippetsDirPath)
        .map(file => {
            const jsonSchemaType = jsonSchemaTypeFromFileName(file);
            const rawContent = fs.readFileSync(snippetsDirPath + file, "utf-8");
            const parsedContent = yaml.parse(rawContent);
            return new Snippet(file, jsonSchemaType, rawContent, parsedContent);
        });
}

// Types

export class Snippet {
    file;
    jsonSchemaType;
    rawContent;
    parsedContent;

    constructor(file, jsonSchemaType, rawContent, parsedContent) {
        this.file = file;
        this.jsonSchemaType = jsonSchemaType;
        this.rawContent = rawContent;
        this.parsedContent = parsedContent;
    }
}


// Helper functions

const snippetFileNameFormat = "<json_schema_type>_<snippet_description>.yaml";

function jsonSchemaTypeFromFileName(file) {
    const fileParts = file.split('_');
    if (fileParts.length < 2) {
        throw new Error(`Invalid snippet file name: ${file}. File names follow the form ${snippetFileNameFormat}`);
    }
    return fileParts[0];
}
