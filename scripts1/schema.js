import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import yaml from 'yaml';

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
            const fileContent = JSON.parse(fs.readFileSync(schemaDirPath + file, "utf-8"));

            topLevelSchemas[file] = fileContent;

            if (file === 'opentelemetry_configuration.json') {
                schemasByType['OpenTelemetryConfiguration'] = new JsonSchemaType('OpentelemetryConfiguration', file, fileContent, '.', fileContent);
            }

            Object.entries(getDefs(fileContent)).forEach(([type, schema]) => {
                const jsonSchemaPath = `${localDefPrefix}${type}`;
                if (type in schemasByType) {
                    throw new Error(`${type} already exists in schemasByName with definition: ` + schemasByType[type]);
                }
                schemasByType[type] = new JsonSchemaType(type, file, fileContent, jsonSchemaPath, schema);
            });
        });

    // Resolve refs to top-level types
    Object.values(schemasByType).forEach(jsonSchemaType => {
        const ref = jsonSchemaType.schema['$ref'];
        if (!ref) {
            return;
        }
        const topLevelSchema = topLevelSchemas[ref];
        if (!topLevelSchema) {
            throw new Error("Could not resolve top level $ref:" + ref);
        }
        jsonSchemaType.file = ref;
        jsonSchemaType.jsonSchemaPath = '.';
        jsonSchemaType.schema = topLevelSchema;
    });

    // Compute path patterns for types
    // DFS starting at OpenTelemetryConfigurationType
    let current = schemasByType['OpenTelemetryConfiguration'];
    if (current === null) {
        throw new Error("Missing OpenTelemetryConfiguration type");
    }
    recursiveAddPathPatterns(current, schemasByType, ".", []);

    return Object.values(schemasByType);
}

const localDefPrefix = '#/$defs/';

function resolveRef(ref, schemasByType) {
    if (ref.startsWith(localDefPrefix)) {
        const type = ref.substring(localDefPrefix.length);
        return schemasByType[type];
    }
    return Object.values(schemasByType).find(jsonSchemaType => jsonSchemaType.jsonSchemaRef() === ref);
}

function getDefs(jsonSchema) {
    const defs = jsonSchema['$defs'];
    if (!defs) {
        return {};
    }
    return defs;
}

function recursiveAddPathPatterns(currentJsonSchemaType, schemasByType, currentPath, parentTypes) {
    if (currentJsonSchemaType.type === 'Sampler') {
        console.log("Sampler!");
    }
    currentJsonSchemaType.pathPatterns.push(currentPath);

    const properties = currentJsonSchemaType.schema['properties'];
    if (!properties) {
        return;
    }
    const nextParentTypes = [...parentTypes, currentJsonSchemaType];
    Object.entries(properties).forEach(([property, schema]) => {
        let ref = schema['$ref'];
        const isArray = schema['type'] === 'array';
        if (!ref && isArray) {
            const items = schema['items'];
            if (items) {
                ref = items['$ref'];
            }
        }
        if (!ref) {
            return;
        }
        const resolvedRef = resolveRef(ref, schemasByType);
        if (!resolvedRef) {
            throw new Error(`Failed to find type for json schema ref ${ref}`);
        }
        if (parentTypes.find(type => type.type === resolvedRef.type)) {
            return; // Recursive reference
        }
        let nextPath = currentPath;
        nextPath += (currentPath === '.') ? property : ('.' + property)
        if (isArray) {
            nextPath += '[]';
        }
        recursiveAddPathPatterns(resolvedRef, schemasByType, nextPath, nextParentTypes);
    });
}

export class JsonSchemaType {
    type;
    file;
    fileContent;
    jsonSchemaPath;
    schema;
    pathPatterns;

    constructor(type, file, fileContent, jsonSchemaPath, schema) {
        this.type = type;
        this.file = file;
        this.fileContent = fileContent;
        this.jsonSchemaPath = jsonSchemaPath;
        this.schema = schema;
        this.pathPatterns = [];
    }

    jsonSchemaRef() {
        let ref = this.file;
        if (this.jsonSchemaPath !== '.') {
            ref += this.jsonSchemaPath;
        }
        return ref;
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
