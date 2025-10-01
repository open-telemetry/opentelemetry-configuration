import fs from 'fs';
import {MetaSchemaProperty, MetaSchemaType} from "./meta-schema.js";
import {schemaDirPath} from "./util.js";

const localDefPrefix = '#/$defs/';

export function readJsonSchemaTypes() {
    const typesByType = {};
    const topLevelSchemas = {};

    fs.readdirSync(schemaDirPath)
        .filter(file => file.endsWith(".json"))
        .forEach(file => {
            const fileContent = JSON.parse(fs.readFileSync(schemaDirPath + file, "utf-8"));

            topLevelSchemas[file] = fileContent;

            if (file === 'opentelemetry_configuration.json') {
                typesByType['OpenTelemetryConfiguration'] = new JsonSchemaType('OpentelemetryConfiguration', file, fileContent, '.', fileContent);
            }

            Object.entries(getDefs(fileContent)).forEach(([type, schema]) => {
                const jsonSchemaPath = `${localDefPrefix}${type}`;
                if (type in typesByType) {
                    throw new Error(`${type} already exists in schemasByName with definition: ` + typesByType[type]);
                }
                typesByType[type] = new JsonSchemaType(type, file, fileContent, jsonSchemaPath, schema);
            });
        });

    // Resolve refs to top-level types
    Object.values(typesByType).forEach(jsonSchemaType => {
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
    let current = typesByType['OpenTelemetryConfiguration'];
    if (current === null) {
        throw new Error("Missing OpenTelemetryConfiguration type");
    }
    recursiveAddPathPatterns(current, typesByType, ".", []);

    return Object.values(typesByType);
}

export function resolveRef(ref, typesByType) {
    let response;
    if (ref.startsWith(localDefPrefix)) {
        const type = ref.substring(localDefPrefix.length);
        response = typesByType[type];
    } else {
        response = Object.values(typesByType).find(jsonSchemaType => jsonSchemaType.jsonSchemaRef() === ref);
    }
    if (!response) {
        throw new Error(`Unable to find type for JSON schema ref ${ref}`);
    }
    return response;
}

function getDefs(jsonSchema) {
    const defs = jsonSchema['$defs'];
    if (!defs) {
        return {};
    }
    return defs;
}

function recursiveAddPathPatterns(currentJsonSchemaType, typesByType, currentPath, parentTypes) {
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
        const resolvedRef = resolveRef(ref, typesByType);
        if (parentTypes.find(type => type.type === resolvedRef.type)) {
            return; // Recursive reference
        }
        let nextPath = currentPath;
        nextPath += (currentPath === '.') ? property : ('.' + property)
        if (isArray) {
            nextPath += '[]';
        }
        recursiveAddPathPatterns(resolvedRef, typesByType, nextPath, nextParentTypes);
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
