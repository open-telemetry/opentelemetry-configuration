import fs from 'fs';
import {
    isExperimentalProperty,
    metaSchemaFilePrefix,
    rootTypeName,
    schemaSourceDirPath
} from "./util.js";
import yaml from "yaml";

const localDefPrefix = '#/$defs/';

export function readSourceTypesByType() {
    const sourceTypesByType = {};
    const sourceContentByFile = {};

    fs.readdirSync(schemaSourceDirPath)
        .filter(file => file.endsWith('.yaml') && !file.startsWith(metaSchemaFilePrefix))
        .forEach(file => {
            const sourceContent = yaml.parse(fs.readFileSync(schemaSourceDirPath + file, "utf-8"));

            sourceContentByFile[file] = sourceContent;

            if (file === 'opentelemetry_configuration.yaml') {
                sourceTypesByType[rootTypeName] = new SourceSchemaType(rootTypeName, file, sourceContent, '.', sourceContent);
            }

            Object.entries(getDefs(sourceContent)).forEach(([type, schema]) => {
                const jsonSchemaPath = `${localDefPrefix}${type}`;
                if (type in sourceTypesByType) {
                    throw new Error(`${type} already exists in schemasByName with definition: ` + sourceTypesByType[type]);
                }
                sourceTypesByType[type] = new SourceSchemaType(type, file, sourceContent, jsonSchemaPath, schema);
            });
        });

    // Resolve refs to top-level types
    Object.values(sourceTypesByType).forEach(sourceSchemaType => {
        const ref = sourceSchemaType.schema['$ref'];
        if (!ref) {
            return;
        }
        const topLevelSchema = sourceContentByFile[ref];
        if (!topLevelSchema) {
            throw new Error("Could not resolve top level $ref:" + ref);
        }
        sourceSchemaType.sourceFile = ref;
        sourceSchemaType.jsonSchemaPath = '.';
        sourceSchemaType.schema = topLevelSchema;
    });

    // Resolve properties, enum values
    Object.values(sourceTypesByType).forEach(sourceSchemaType => {
        sourceSchemaType.properties = resolveSourceSchemaProperties(sourceSchemaType.schema, sourceTypesByType);
        sourceSchemaType.enumValues = resolveEnumValues(sourceSchemaType);
        if (sourceSchemaType.properties.length > 0 && sourceSchemaType.enumValues !== null) {
            throw new Error(`${sourceSchemaType.type} has enum values and properties`);
        }
    });

    return sourceTypesByType;
}

function resolveSourceSchemaProperties(sourceSchema, typesByType) {
    const properties = sourceSchema['properties'];
    if (!properties) {
        return [];
    }
    const requiredProperties = sourceSchema['required'] || [];
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
        resolvedProperties.push(new SourceSchemaProperty(propertyKey, types, isSeq, isRequired, propertySchema));
    });

    return resolvedProperties;
}

function resolveEnumValues(sourceSchemaType) {
    const enumValues = sourceSchemaType.schema['enum'];
    if (!enumValues) {
        return null;
    }
    return enumValues;
}

export function resolveRef(ref, typesByType) {
    let response;
    if (ref.startsWith(localDefPrefix)) {
        const type = ref.substring(localDefPrefix.length);
        response = typesByType[type];
    } else {
        response = Object.values(typesByType).find(sourceSchemaType => sourceSchemaType.jsonSchemaRef() === ref);
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

export class SourceSchemaProperty {
    property;
    types;
    isSeq;
    isRequired;
    schema;

    constructor(property, types, isSeq, isRequired, schema) {
        this.property = property;
        this.types = types;
        this.isSeq = isSeq;
        this.isRequired = isRequired;
        this.schema = schema;
    }
}

export class SourceSchemaType {
    type;
    sourceFile;
    fileContent;
    jsonSchemaPath;
    schema;
    properties;
    enumValues; // null if not enum

    constructor(type, sourceFile, fileContent, jsonSchemaPath, schema) {
        this.type = type;
        this.sourceFile = sourceFile;
        this.fileContent = fileContent;
        this.jsonSchemaPath = jsonSchemaPath;
        this.schema = schema;
        this.properties = [];
        this.enumValues = null;
    }

    isEnumType() {
        return this.enumValues !== null;
    }

    jsonSchemaRef() {
        let ref = this.sourceFile;
        if (this.jsonSchemaPath !== '.') {
            ref += this.jsonSchemaPath;
        }
        return ref;
    }

    sortedEnumValues() {
        const sorted = this.enumValues.slice();
        sorted.sort((a, b) => a.localeCompare(b));
        return sorted;
    }

    sortedProperties() {
        const sorted = this.properties.slice();
        // Sort in lexigraphical order, with non-experimental properties first
        sorted.sort((a, b) => {
            const differentMaturities = isExperimentalProperty(a.property) - isExperimentalProperty(b.property);
            return differentMaturities === 0 ? a.property.localeCompare(b.property) : +differentMaturities;
        });
        return sorted;
    }
}
