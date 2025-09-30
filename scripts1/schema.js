import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import yaml from 'yaml';
import traverse from '@json-schema-tools/traverse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const metaSchemaFileName = "meta_schema.yaml";
const schemaDirPath = __dirname + "/../schema/";
const metaSchemaPath = schemaDirPath + metaSchemaFileName;

export function readMetaSchemaDoc() {
    const metaSchemaContent = fs.readFileSync(metaSchemaPath, "utf-8");
    return yaml.parse(metaSchemaContent);
};

export function writeMetaSchemaTypes(metaSchemaTypes) {
    fs.writeFileSync(metaSchemaPath, yaml.stringify(metaSchemaTypes, { lineWidth: 0 }));
}

export function readJsonSchemaTypes() {
    const schemasByType = {};
    const topLevelSchemas = {};

    fs.readdirSync(schemaDirPath)
        .filter(file => file.endsWith(".json"))
        .forEach(file => {
            const schema = JSON.parse(fs.readFileSync(schemaDirPath + file, "utf-8"));
            topLevelSchemas[file] = schema;

            if (file === 'opentelemetry_configuration.json') {
                schemasByType['OpenTelemetryConfiguration'] = new JsonSchemaType('OpentelemetryConfiguration', file, '.', schema);
            }

            traverse.default(schema, (schema) => {
                const defs = schema['$defs'];
                if (!defs) return;
                Object.entries(defs).forEach(([type, schema]) => {
                    const path = `#/$defs/${type}`;
                    if (type in schemasByType) {
                        throw new Error(`${type} already exists in schemasByName with definition: ` + schemasByType[type]);
                    }
                    schemasByType[type] = new JsonSchemaType(type, file, path, schema);
                });
            });
        });

    // Resolve refs to top-level types
    Object.entries(schemasByType).forEach(([name, jsonSchemaType]) => {
        const ref = jsonSchemaType.schema['$ref'];
        if (!ref) return;
        const topLevelSchema = topLevelSchemas[ref];
        if (!topLevelSchema) {
            throw new Error("Could not resolve $ref:" + ref);
        }
        schemasByType[name] = new JsonSchemaType(name, jsonSchemaType.file, jsonSchemaType.path, topLevelSchema);
    });

    return Object.values(schemasByType);
}

export class JsonSchemaType {
    type;
    file;
    path;
    schema;

    constructor(type, file, path, schema) {
        this.type = type;
        this.file = file;
        this.path = path;
        this.schema = schema;
    }

    toMetaSchemaType() {
        const properties = [];
        if (this.schema.properties) {
            Object.entries(this.schema.properties).forEach(([propertyName, schema]) => {
                properties.push(new MetaSchemaProperty(propertyName, "TODO"));
            });
        }
        return new MetaSchemaType(this.type, properties);
    }
}

export class MetaSchemaProperty {
    property;
    description;

    constructor(property, description) {
        this.property = property;
        this.description = description;
    }

    toJson() {
        return { property: this.property, description: this.description };
    }
}

export class MetaSchemaType {
    type;
    properties;

    constructor(type, properties) {
        this.type = type;
        this.properties = properties;
    }

    toJson() {
        const properties = this.properties.map(property => property.toJson());
        properties.sort((a, b) => a.property.localeCompare(b.property));

        return { type: this.type, properties: this.properties };
    }
}
