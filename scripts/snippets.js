import fs from "fs";
import {snippetsDirPath} from "./util.js";
import yaml from "yaml";

const snippetFileNameFormat = "<JsonSchemaType>_<snake_case_snippet_description>.yaml";
const yamlFileExtension = ".yaml";

const snippetStart = "# SNIPPET_START";

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

            // Read the full snippet file, and extract the bit of interest after "# SNIPPET_START"
            // 1. Find the line containing the snippet start marker
            // 2. For lines that follow, remove whitespace up to the indentation of the snippet start marker
            // 3. Join the lines
            const rawFullContent = fs.readFileSync(snippetsDirPath + file, "utf-8");
            const lines = rawFullContent.split("\n");
            const snippetStartLineIndex = lines.findIndex(line => line.indexOf(snippetStart) !== -1);
            if (snippetStartLineIndex === -1) {
                throw new Error(`Snippet file ${file} does not contain ${snippetStart}`);
            }
            const snippetStartLine = lines[snippetStartLineIndex ];
            const snippetStartIndentation = snippetStartLine.indexOf(snippetStart);
            const rawSnippetContent = lines.splice(snippetStartLineIndex + 1).map(line => line.substring(snippetStartIndentation)).join("\n");

            const parsedFullContent = yaml.parse(rawFullContent);
            const parsedSnippetContent = yaml.parse(rawSnippetContent);
            return new Snippet(file, description, jsonSchemaType, rawFullContent, parsedFullContent, rawSnippetContent, parsedSnippetContent);
        });
}

// Types

export class Snippet {
    file;
    description;
    jsonSchemaType;
    rawFullContent;
    parsedFullContent;
    rawSnippetContent;
    parsedSnippetContent;

    constructor(file, description, jsonSchemaType, rawContent, parsedContent, rawSnippetContent, parsedSnippetContent) {
        this.file = file;
        this.description = description;
        this.jsonSchemaType = jsonSchemaType;
        this.rawFullContent = rawContent;
        this.parsedFullContent = parsedContent;
        this.rawSnippetContent = rawSnippetContent;
        this.parsedSnippetContent = parsedSnippetContent;
    }
}


// Helper functions
