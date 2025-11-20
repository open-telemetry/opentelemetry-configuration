import fs from 'fs';
import {rootTypeName, schemaPath, schemaSourceDirPath} from "./util.js";
import {readSourceTypesByType} from "./source-schema.js";
import yaml from "yaml";

fs.readdirSync(schemaSourceDirPath)
    .forEach(file => {
       const sourceContent = yaml.parse(fs.readFileSync(schemaSourceDirPath + file, 'utf-8'));
       addDefaultToOptionalProperties(sourceContent);
       fs.writeFileSync(schemaSourceDirPath + file, yaml.stringify(sourceContent, {lineWidth: 0}));
    });

function addDefaultToOptionalProperties(type) {
    const properties = type.properties;
    if (properties) {
        const required = type.required || [];
        Object.entries(properties).forEach(([key, property]) => {
            if (!required.includes(key)) {
                property.defaultBehavior = "TODO";
            }
        });
    }
    const defs = type['$defs'];
    if (defs) {
        Object.values(defs).forEach(addDefaultToOptionalProperties);
    }
}
