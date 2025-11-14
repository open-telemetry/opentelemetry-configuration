import fs from 'fs';
import {metaSchemaFilePrefix, schemaSourceDirPath, schemaOutDirPath} from "./util.js";
import yaml from "yaml";

// Delete and recreate schema out directory
fs.rmSync(schemaOutDirPath, {recursive: true, force: true});
fs.mkdirSync(schemaOutDirPath);

// Parse YAML schema source files and write as JSON to schema out directory
fs.readdirSync(schemaSourceDirPath)
    .filter(file => file.endsWith('.yaml') && !file.startsWith(metaSchemaFilePrefix))
    .forEach(file => {
        const parsedContent = yaml.parse(fs.readFileSync(schemaSourceDirPath + file, "utf-8"));
        fs.writeFileSync(schemaOutDirPath + file.replace('.yaml', '.json'), JSON.stringify(parsedContent, null, 2));
    });
