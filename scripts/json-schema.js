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

    // Resolve properties
    Object.values(typesByType).forEach(jsonSchemaType => {
        jsonSchemaType.properties = resolveJsonSchemaProperties(jsonSchemaType.schema, typesByType);
    });

    return Object.values(typesByType);
}

function resolveJsonSchemaProperties(jsonSchema, typesByType) {
    const properties = jsonSchema['properties'];
    if (!properties) {
        return [];
    }
    const requiredProperties = jsonSchema['required'] || [];
    const resolvedProperties = [];
    Object.entries(properties).forEach(([propertyKey, propertySchema]) => {
        const type = propertySchema['type'];
        const items = propertySchema['items'];
        const ref = propertySchema['$ref'];
        const oneOf = propertySchema['oneOf'];

        let isSeq = false;
        const isRequired = requiredProperties.includes(propertyKey);
        const types = [];

        if (type === 'array' && items) {
            isSeq = true;
            const itemsType = items['type'];
            const itemsRef = items['$ref'];
            if (itemsType) {
                if (Array.isArray(itemsType)) {
                    types.push(...itemsType);
                } else {
                    types.push(itemsType);
                }
            } else if (itemsRef) {
                types.push(resolveRef(itemsRef, typesByType).type);
            }
        } else if (type) {
            if (Array.isArray(type)) {
                types.push(...type);
            } else {
                types.push(type);
            }
        } else if (ref) {
            types.push(resolveRef(ref, typesByType).type);
        } else if (oneOf) {
            types.push('oneOf');
        }
        resolvedProperties.push(new JsonSchemaProperty(propertyKey, types, isSeq, isRequired));
    });

    return resolvedProperties;
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

export class JsonSchemaProperty {
    property;
    types;
    isSeq;
    isRequired;

    constructor(property, types, isSeq, isRequired) {
        this.property = property;
        this.types = types;
        this.isSeq = isSeq;
        this.isRequired = isRequired;
    }
}

export class JsonSchemaType {
    type;
    file;
    fileContent;
    jsonSchemaPath;
    schema;
    properties;

    constructor(type, file, fileContent, jsonSchemaPath, schema) {
        this.type = type;
        this.file = file;
        this.fileContent = fileContent;
        this.jsonSchemaPath = jsonSchemaPath;
        this.schema = schema;
        this.properties = [];
    }

    jsonSchemaRef() {
        let ref = this.file;
        if (this.jsonSchemaPath !== '.') {
            ref += this.jsonSchemaPath;
        }
        return ref;
    }

    toMetaSchemaType() {
        return new MetaSchemaType(
            this.type,
            this.properties.map(jsonSchemaProperty => new MetaSchemaProperty(jsonSchemaProperty.property, "TODO"))
        );
    }
}
