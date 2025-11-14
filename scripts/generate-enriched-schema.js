import {
    readAndFixMetaSchema, writeMetaSchema
} from "./meta-schema.js";
import fs from "fs";
import {schemaDirPath, schemaOutDirPath} from "./util.js";
import {readJsonSchemaTypes} from "./json-schema.js";

// Read JSON schema and meta schema
const { messages, metaSchema } = readAndFixMetaSchema();
if (messages.length > 0) {
    throw new Error("Meta schema has problems. Please run fix-meta-schema and try again.");
}
const jsonSchemaTypesByType = {};
readJsonSchemaTypes().forEach(type => jsonSchemaTypesByType[type.type] = type);

const schemaFileContentByFile = {};
fs.readdirSync(schemaDirPath)
    .filter(file => file.endsWith(".json"))
    .forEach(file => {
        schemaFileContentByFile[file] = JSON.parse(fs.readFileSync(schemaDirPath + file, "utf-8"));
    });

metaSchema.types.forEach(metaSchemaType => {
   const jsonSchemaType = jsonSchemaTypesByType[metaSchemaType.type];
   if (!jsonSchemaType) {
       throw new Error(`JSON schema type not found for meta schema type ${metaSchemaType.type}.`);
   }
   const schemaDef = findSchemaDefOrThrow(schemaFileContentByFile, jsonSchemaType);
   if (!metaSchemaType.properties) {
       return;
   }
   metaSchemaType.properties.forEach(metaSchemaProperty => {
       const schemaPropertyDef = findPropertyDefOrThrow(metaSchemaType, schemaDef, metaSchemaProperty);
       schemaPropertyDef.description = metaSchemaProperty.description;
   });
});

// Helper functions

function findSchemaDefOrThrow(schemaFileContentByFile, jsonSchemaType) {
    const schemaFile = schemaFileContentByFile[jsonSchemaType.file];
    if (!schemaFile) {
        throw new Error(`Unable to find schema def for ${jsonSchemaType.type}. Schema file ${jsonSchemaType.file} not found.`);
    }

    if (jsonSchemaType.jsonSchemaPath === '.') {
        return schemaFile;
    }
    if (jsonSchemaType.jsonSchemaPath.startsWith('#/$defs/')) {
        const defs = schemaFile['$defs'];
        if (!defs) {
            throw new Error(`Unable to find schema def for ${jsonSchemaType.type}. ${jsonSchemaType.file} does not contain $defs.`);
        }
        const def = defs[jsonSchemaType.jsonSchemaPath.substring('#/$defs/'.length)];
        if (!def) {
            throw new Error(`Unable to find schema def for ${jsonSchemaType.type}. ${jsonSchemaType.file} $defs does not contain ${jsonSchemaType.jsonSchemaPath}.`);
        }
        return def;
    }
    throw new Error(`Unable to find schema def for ${jsonSchemaType.type}. Unable to handle jsonSchemaPath ${jsonSchemaType.jsonSchemaPath}.`);
}

function findPropertyDefOrThrow(metaSchemaType, schemaDef, metaSchemaProperty) {
    const properties = schemaDef['properties'];
    if (!properties) {
        throw new Error(`Unable to find schema property ${metaSchemaProperty.property} for ${metaSchemaType.type}. Schema does not contain properties.`);
    }
    const property = Object.entries(properties).find(([key, value]) => key === metaSchemaProperty.property);
    if (!property) {
        throw new Error(`Unable to find schema property ${metaSchemaProperty.property} for ${metaSchemaType.type}. Schema def properties does not contain ${metaSchemaProperty.property}.`);
    }
    return property[1];
}

Object.entries(schemaFileContentByFile).forEach(([schemaFile, content]) => {
    fs.writeFileSync(schemaOutDirPath + schemaFile, JSON.stringify(content, null, 2));
});
