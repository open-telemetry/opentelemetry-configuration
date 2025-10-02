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

export function resolveJsonSchemaPropertyType(jsonSchemaType, property, jsonSchemaTypesByType) {
    const properties = jsonSchemaType.schema['properties'];
    if (!properties) {
        throw new Error(`Unable to resolve property ${property} for ${jsonSchemaType.type}. Type doesn't have properties.`)
    }
    const jsonSchemaProperty = properties[property];
    if (!jsonSchemaProperty) {
        throw new Error(`Unable to resolve property ${property} for ${jsonSchemaType.type}. Type doesn't have ${property}.`);
    }
    const type = jsonSchemaProperty['type'];
    const ref = jsonSchemaProperty['$ref'];
    const items = jsonSchemaProperty['items'];
    const oneOf = jsonSchemaProperty['oneOf'];
    if (type === 'array' && items) {
        const itemsType = items['type'];
        const itemsRef = items['$ref'];
        if (itemsType) {
            return Array.isArray(itemsType)
                ? new JsonSchemaPropertyType('oneOf', false, true, itemsType.map(item => new JsonSchemaPropertyType(item, true, false, [])))
                : new JsonSchemaPropertyType(itemsType, false, true, []);
        }
        if (itemsRef) {
            const resolvedRef = resolveRef(itemsRef, jsonSchemaTypesByType);
            return new JsonSchemaPropertyType(resolvedRef.type, false, true, []);
        }
    }
    if (type) {
        return Array.isArray(type)
            ? new JsonSchemaPropertyType('oneOf', true, false, type.map(item => new JsonSchemaPropertyType(item, true, false, [])))
            : new JsonSchemaPropertyType(type, true, false, []);
    }
    if (ref) {
        const resolvedRef = resolveRef(ref, jsonSchemaTypesByType);
        return new JsonSchemaPropertyType(resolvedRef.type, false, false, []);
    }
    if (oneOf) {
        return new JsonSchemaPropertyType('oneOf', false, false, [new JsonSchemaPropertyType('see JSON schema', false, false, [])]);
    }
    throw new Error(`Unable to resolve types of property ${property}: ${JSON.stringify(jsonSchemaType)}.`)
}

const scalarTypes = ['boolean', 'string', 'null', 'integer', 'number'];

export class JsonSchemaPropertyType {
    type;
    isScalar;
    isSeq;
    isOneOf;
    oneOfTypes;

    constructor(type, isScalar, isSeq, oneOfTypes) {
        this.type = type;
        this.isScalar = isScalar;
        this.isSeq = isSeq;
        this.isOneOf = oneOfTypes.length !== 0;
        this.oneOfTypes = oneOfTypes;
    }
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
