import {readJsonSchemaTypes} from "./json-schema.js";
import fs from 'fs';
import yaml from 'yaml';
import {
    metaSchemaTypesFileName,
    metaSchemaLanguageStatusPath,
    metaSchemaTypesPath,
    metaSchemaLanguageStatusFileName,
    schemaSourceDirPath,
    metaSchemaLanguageFilePrefix, isExperimentalProperty, isExperimentalType
} from "./util.js";

export const KNOWN_LANGUAGES = [
    'cpp', 
    'go', 
    'java',
    'js',
];

const IMPLEMENTATION_STATUS_UNKNOWN = 'unknown';
const IMPLEMENTATION_STATUSES = ['supported', IMPLEMENTATION_STATUS_UNKNOWN, 'not_implemented', 'ignored', 'not_applicable']

export function writeMetaSchema(metaSchema) {
    fs.writeFileSync(metaSchemaTypesPath, yaml.stringify(metaSchema.toJson().types, {lineWidth: 0}));

    metaSchema.languageImplementations.forEach(languageImplementation => {
        fs.writeFileSync(metaSchemaLanguageStatusPath(languageImplementation.language), yaml.stringify(languageImplementation.toJson(), {lineWidth: 0}));
    });
}

export function readAndFixMetaSchema() {
    // Track messages tracking schema fixes
    const messages = [];

    // Parse meta schema types and sanitize
    const metaSchemaTypesContent = fs.readFileSync(metaSchemaTypesPath, "utf-8");
    const metaSchemaTypesDoc = yaml.parse(metaSchemaTypesContent);
    const metaSchemaTypes = parseArrayValue(
        metaSchemaTypesDoc,
        entryJson => MetaSchemaType.parseJson(entryJson, messages),
        `${metaSchemaTypesFileName} is invalid`,
        error => `${metaSchemaTypesFileName} has invalid MetaSchemaType: ${error.message}. Skipping.`,
        messages);

    // Parse meta schema language implementations and sanitize
    const metaSchemaLanguageImplementations = [];
    KNOWN_LANGUAGES.forEach(language => {
        let metaSchemaLanguageStatusContent;
        try {
            metaSchemaLanguageStatusContent = fs.readFileSync(metaSchemaLanguageStatusPath(language), "utf-8");
        } catch (error) {
            messages.push(`Error reading ${metaSchemaLanguageStatusFileName(language)}: ${error.message}. Skipping.`);
            return;
        }
        const metaSchemaLanguageStatusDoc = yaml.parse(metaSchemaLanguageStatusContent);
        const languageImplementation = LanguageImplementation.parseJson(language, metaSchemaLanguageStatusDoc, messages);
        metaSchemaLanguageImplementations.push(languageImplementation);
    });

    // Create full MetaSchema from meta schema types and language implementations
    let metaSchema = new MetaSchema(metaSchemaTypes, metaSchemaLanguageImplementations);

    const jsonSchemaTypesByType = {};
    readJsonSchemaTypes().forEach(type => jsonSchemaTypesByType[type.type] = type);

    // Reconcile meta schema with json schema
    reconcileTypes(metaSchema, jsonSchemaTypesByType, messages);
    reconcileLanguageImplementations(metaSchema, jsonSchemaTypesByType, messages);

    return {messages, metaSchema};
}

// Types

export class MetaSchema {
    types;
    languageImplementations;

    constructor(types, languageImplementations) {
        this.types = types;
        this.languageImplementations = languageImplementations;
    }

    toJson() {
        let sortedTypes = this.types.map(type => type.toJson());
        // Types in lexicographical order, with non-experimental first
        sortedTypes.sort((a, b) => {
            const differentMaturities = isExperimentalType(a.type) - isExperimentalType(b.type);
            return differentMaturities === 0 ? a.type.localeCompare(b.type) : +differentMaturities;
        });

        return {types: sortedTypes, languageImplementations: this.languageImplementations.map(languageImplementation => languageImplementation.toJson())};
    }
}

export class MetaSchemaType {
    type;
    properties; // null if enum
    enumValues; // null if not enum
    isSdkExtensionPlugin;

    constructor(type, properties, enumValues, isSdkExtensionPlugin) {
        this.type = type;
        this.properties = properties;
        this.enumValues = enumValues;
        this.isSdkExtensionPlugin = isSdkExtensionPlugin;

    }

    toJson() {
        const json = {type: this.type};

        if (this.enumValues !== null) {
            const enumValues = this.enumValues.map(enumValue => enumValue.toJson());
            enumValues.sort((a, b) => a.enumValue.localeCompare(b.enumValue));
            json.enumValues = enumValues;
        }
        if (this.properties !== null) {
            const properties = this.properties.map(property => property.toJson());
            // Properties in lexicographical order, with non-experimental first
            properties.sort((a, b) => {
                const differentMaturities = isExperimentalProperty(a.property) - isExperimentalProperty(b.property);
                return differentMaturities === 0 ? a.property.localeCompare(b.property) : +differentMaturities;
            });
            json.properties = properties;
        }

        json.isSdkExtensionPlugin = this.isSdkExtensionPlugin;

        return json;
    }

    static parseJson(rawJson, messages) {
        const type = parseString(rawJson, 'type', `MetaSchemaType has invalid 'type'`);
        const properties = parseArray(
            rawJson,
            'properties',
            entryJson => MetaSchemaProperty.parseJson(entryJson, messages),
            `MetaSchemaType '${type}' has invalid 'properties'`,
            error => `MetaSchemaType '${type}' has invalid property: ${error.message}. Skipping.`,
            messages,
            true);
        const enumValues = parseArray(
            rawJson,
            'enumValues',
            entryJson => MetaSchemaEnumValue.parseJson(entryJson, messages),
            `MetaSchemaType '${type}' has invalid 'enumValues'`,
            error => `MetaSchemaType '${type}' has invalid enumValue: ${error.message}. Skipping.`,
            messages,
            true);
        const isSdkExtensionPlugin = parseBoolean(rawJson, 'isSdkExtensionPlugin', `MetaSchemaType has invalid 'isSdkExtensionPlugin'`);
        return new MetaSchemaType(type, properties, enumValues, isSdkExtensionPlugin);
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
        return {property: this.property, description: this.description};
    }

    static parseJson(rawJson, messages) {
        const property = parseString(rawJson, 'property', `MetaSchemaProperty has invalid 'property'`);
        const description = parseString(rawJson, 'description', `MetaSchemaProperty has invalid 'description'`);
        return new MetaSchemaProperty(property, description);
    }
}

export class MetaSchemaEnumValue {
    enumValue;
    description;

    constructor(enumValue, description) {
        this.enumValue = enumValue;
        this.description = description;
    }

    toJson() {
        return {enumValue: this.enumValue, description: this.description};
    }

    static parseJson(rawJson, messages) {
        const enumValue = parseString(rawJson, 'enumValue', `MetaSchemaEnumValue has invalid 'enumValue'`);
        const description = parseString(rawJson, 'description', `MetaSchemaEnumValue has invalid 'description'`);
        return new MetaSchemaEnumValue(enumValue, description);
    }
}

export class LanguageImplementation {
    language;
    latestSupportedFileFormat;
    typeSupportStatuses;

    constructor(language, latestSupportedFileFormat, typeSupportStatuses) {
        this.language = language;
        this.latestSupportedFileFormat = latestSupportedFileFormat;
        this.typeSupportStatuses = typeSupportStatuses;
    }

    toJson() {
        // Types in lexicographical order, with non-experimental first
        const typeSupportStatuses = this.typeSupportStatuses.map(typeSupportStatus => typeSupportStatus.toJson());
        typeSupportStatuses.sort((a, b) => {
            const differentMaturities = isExperimentalType(a.type) - isExperimentalType(b.type);
            return differentMaturities === 0 ? a.type.localeCompare(b.type) : +differentMaturities;
        });

        return {
            latestSupportedFileFormat: this.latestSupportedFileFormat,
            typeSupportStatuses
        };
    }

    static parseJson(language, rawJson, messages) {
        const latestSupportedFileFormat = parseString(rawJson, 'latestSupportedFileFormat', `LanguageImplementation has invalid 'latestSupportedFileFormat'`);
        const typeSupportStatuses = parseArray(
            rawJson,
            'typeSupportStatuses',
            entryJson => TypeSupportStatus.parseJson(entryJson, messages),
            `LanguageImplementation '${language}' has invalid 'typeSupportStatuses'`,
            error => `LanguageImplementation '${language}' has invalid TypeSupportStatus: ${error.message}. Skipping.`,
            messages);
        return new LanguageImplementation(language, latestSupportedFileFormat, typeSupportStatuses);
    }
}

export class TypeSupportStatus {
    type;
    status;
    propertyOverrides; // null if enum
    enumOverrides; // null if not enum
    notes;

    constructor(type, status, propertyOverrides, enumOverrides, notes) {
        this.type = type;
        this.status = status;
        this.propertyOverrides = propertyOverrides;
        this.enumOverrides = enumOverrides;
        this.notes = notes;
    }

    toJson() {
        const json = {type: this.type, status: this.status};

        if (this.enumOverrides !== null) {
            const enumOverrides = this.enumOverrides.map(enumValueStatus => enumValueStatus.toJson());
            enumOverrides.sort((a, b) => a.enumValue.localeCompare(b.enumValue));
            json.enumOverrides = enumOverrides;
        }
        if (this.propertyOverrides !== null) {
            const propertyOverrides = this.propertyOverrides.map(propertyStatus => propertyStatus.toJson());
            propertyOverrides.sort((a, b) => a.property.localeCompare(b.property));
            json.propertyOverrides = propertyOverrides;
        }
        if(this.notes !== null) {
            json.notes = this.notes;
        }

        return json;
    }

    static parseJson(rawJson, messages) {
        const type = parseString(rawJson, 'type', `TypeSupportStatus has invalid 'type'`);
        const status = parseEnum(rawJson, 'status', `TypeSupportStatus has invalid 'status'`, IMPLEMENTATION_STATUSES);
        const propertyOverrides = parseArray(
            rawJson,
            'propertyOverrides',
            entryJson => PropertyStatus.parseJson(entryJson, messages),
            `TypeSupportStatus '${type}' has invalid 'propertyOverrides'`,
            error => `TypeSupportStatus '${type}' has invalid PropertyStatus: ${error.message}. Skipping.`,
            messages,
            true);
        const enumOverrides = parseArray(
            rawJson,
            'enumOverrides',
            entryJson => EnumValueStatus.parseJson(entryJson, messages),
            `TypeSupportStatus '${type}' has invalid 'enumOverrides'`,
            error => `TypeSupportStatus '${type}' has invalid EnumValueStatus: ${error.message}. Skipping.`,
            messages,
            true);
        const notes = parseString(rawJson, 'notes', `TypeSupportStatus has invalid 'notes'`, true);
        return new TypeSupportStatus(type, status, propertyOverrides, enumOverrides, notes);
    }
}

export class PropertyStatus {
    property;
    status;

    constructor(property, status) {
        this.property = property;
        this.status = status;
    }

    toJson() {
        return {
            property: this.property,
            status: this.status
        };
    }

    static parseJson(rawJson, messages) {
        const property = parseString(rawJson, 'property', `PropertyStatus has invalid 'property'`);
        const status = parseEnum(rawJson, 'status', `PropertyStatus has invalid 'status'`, IMPLEMENTATION_STATUSES);
        return new PropertyStatus(property, status);
    }
}

export class EnumValueStatus {
    enumValue;
    status;

    constructor(enumValue, status) {
        this.enumValue = enumValue;
        this.status = status;
    }

    toJson() {
        return {
            enumValue: this.enumValue,
            status: this.status
        };
    }

    static parseJson(rawJson, messages) {
        const enumValue = parseString(rawJson, 'enumValue', `EnumValueStatus has invalid 'enumValue'`);
        const status = parseEnum(rawJson, 'status', `EnumValueStatus has invalid 'status'`, IMPLEMENTATION_STATUSES);
        return new EnumValueStatus(enumValue, status);
    }
}

// Helper functions

function reconcileTypes(metaSchema, jsonSchemaTypesByType, messages) {
    const metaSchemaTypesByType = {};
    metaSchema.types.forEach(type => metaSchemaTypesByType[type.type] = type);

    // Find any types in both json schema and meta schema and make sure all json schema properties match
    Object.entries(metaSchemaTypesByType).forEach(([type, metaSchemaType]) => {
        const jsonSchemaType = jsonSchemaTypesByType[type];
        if (!jsonSchemaType) {
            return;
        }
        const sanitizedProperties = [];
        const emptyMetaSchemaType = jsonSchemaType.toMetaSchemaType();
        const jsonSchemaProperties = emptyMetaSchemaType.properties;

        if (!jsonSchemaType.isEnumType()) {
            if (metaSchemaType.properties === null) {
                messages.push(`Type ${type} in meta schema is missing properties and is not an enum type. Adding.`);
                metaSchemaType.properties = [];
            }
            if (metaSchemaType.enumValues !== null) {
                messages.push(`Type ${type} in meta schema has enumValues but is not an enum type. Removing.`);
                metaSchemaType.enumValues = null;
            }

            const jsonSchemaPropertiesByProperty = {};

            // Remove properties in meta schema and not in json schema
            jsonSchemaProperties.forEach(property => jsonSchemaPropertiesByProperty[property.property] = property);
            metaSchemaType.properties.forEach(property => {
                const propertyName = property.property;
                if (!(propertyName in jsonSchemaPropertiesByProperty)) {
                    messages.push(`Type ${type} has property ${propertyName} in meta schema and not in JSON schema. Removing.`);
                    return;
                }
                sanitizedProperties.push(property);
            });
            // Add properties in json schema and not in meta schema
            const metaSchemaPropertiesByProperty = {};
            metaSchemaType.properties.forEach(property => metaSchemaPropertiesByProperty[property.property] = property);
            jsonSchemaProperties.forEach(property => {
                const propertyName = property.property;
                if (!(propertyName in metaSchemaPropertiesByProperty)) {
                    messages.push(`Type ${type} has property ${propertyName} in JSON schema and not in meta schema. Adding.`);
                    sanitizedProperties.push(property);
                }
            });

            metaSchemaType.properties = sanitizedProperties;
        } else {
            if (metaSchemaType.enumValues === null) {
                messages.push(`Type ${type} in meta schema is missing enumValues and is an enum type. Adding.`);
                metaSchemaType.enumValues = [];
            }
            if (metaSchemaType.properties !== null) {
                messages.push(`Type ${type} in meta schema has properties but is an enum type. Removing.`);
                metaSchemaType.properties = null;
            }

            const sanitizedEnumValues = [];

            // Remove enumValues in meta schema and not in json schema
            metaSchemaType.enumValues.forEach(enumValue => {
                if (!(emptyMetaSchemaType.enumValues.find(item => item.enumValue === enumValue.enumValue))) {
                    messages.push(`Type ${type} has enumValue ${enumValue.enumValue} in meta schema and not in JSON schema. Removing.`);
                    return;
                }
                sanitizedEnumValues.push(enumValue);
            });
            // Add enumValues in json schema and not in meta schema
            emptyMetaSchemaType.enumValues.forEach(enumValue => {
                if (!(metaSchemaType.enumValues.find(item => item.enumValue === enumValue.enumValue))) {
                    messages.push(`Type ${type} has enumValue ${enumValue.enumValue} in JSON schema and not in meta schema. Adding.`);
                    sanitizedEnumValues.push(enumValue);
                }
            });

            metaSchemaType.enumValues = sanitizedEnumValues;
        }
    });

    // Find and remove any types in meta schema not in json schema
    Object.entries(metaSchemaTypesByType).forEach(([type, unused]) => {
        if (!(type in jsonSchemaTypesByType)) {
            messages.push(`Type ${type} found in ${metaSchemaTypesFileName} but not in JSON schema. Removing.`);
            delete metaSchemaTypesByType[type];
        }
    });

    // Find and add any types in json schema not in meta schema
    Object.entries(jsonSchemaTypesByType).forEach(([type, jsonSchemaType]) => {
        if (!(type in metaSchemaTypesByType)) {
            messages.push(`Type ${type} in ${jsonSchemaType.file} and path ${jsonSchemaType.jsonSchemaPath} is missing from ${metaSchemaTypesFileName}. Adding.`);
            const metaSchemaType = jsonSchemaType.toMetaSchemaType();
            metaSchemaTypesByType[metaSchemaType.type] = metaSchemaType;
        }
    });

    metaSchema.types = Object.values(metaSchemaTypesByType);
}

function reconcileLanguageImplementations(metaSchema, jsonSchemaTypesByType, messages) {
    const languageImplementationsByLanguage = {};
    metaSchema.languageImplementations.forEach(languageImplementation => languageImplementationsByLanguage[languageImplementation.language] = languageImplementation);

    // Find any types in both json schema and meta schema and make sure all json schema properties match
    Object.entries(languageImplementationsByLanguage).forEach(([language, languageImplementation]) => {
        if (!KNOWN_LANGUAGES.includes(language)) {
            return;
        }
        const reconciledTypeSupportStatuses = [];
        const expectedTypeSupportStatuses = emptyLanguageImplementation(language, metaSchema).typeSupportStatuses;

        // Remove extra types
        languageImplementation.typeSupportStatuses.forEach(typeSupportStatus => {
            const jsonSchemaType = jsonSchemaTypesByType[typeSupportStatus.type];
            if (!jsonSchemaType) {
                messages.push(`LanguageImplementation ${language} has type ${typeSupportStatus.type} in meta schema and not in JSON schema. Removing.`);
                return;
            }
            if (!jsonSchemaType.isEnumType()) {
                if (typeSupportStatus.propertyOverrides === null) {
                    messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} is missing propertyOverrides in meta schema and is not an enum type. Adding.`);
                    typeSupportStatus.propertyOverrides = [];
                }
                if (typeSupportStatus.enumOverrides !== null) {
                    messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} has propertyOverrides in meta schema but is not an enum type. Removing.`);
                    typeSupportStatus.propertyOverrides = null;
                }
                // Remove any propertyOverrides which occur in meta schema but not json schema
                const reconciledPropertyOverrides = [];
                typeSupportStatus.propertyOverrides.forEach(propertyStatus => {
                    if (!jsonSchemaType.properties.find(jsonSchemaProperty => jsonSchemaProperty.property === propertyStatus.property)) {
                        messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} has propertyOverride ${propertyStatus.property} in meta schema and not in JSON schema. Removing.`);
                        return;
                    }
                    reconciledPropertyOverrides.push(propertyStatus);
                });
                typeSupportStatus.propertyOverrides = reconciledPropertyOverrides;
            } else {
                if (typeSupportStatus.enumOverrides === null) {
                    messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} is missing enumOverrides in meta schema and is an enum type. Adding.`);
                    typeSupportStatus.enumOverrides = [];
                }
                if (typeSupportStatus.propertyOverrides !== null) {
                    messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} has propertyOverrides in meta schema but is an enum type. Removing.`);
                    typeSupportStatus.propertyOverrides = null;
                }
                // Remove any enumOverrides which occur in meta schema but not json schema
                const reconciledEnumOverrides = [];
                typeSupportStatus.enumOverrides.forEach(enumValueStatus => {
                    if (!jsonSchemaType.enumValues.includes(enumValueStatus.enumValue)) {
                        messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} has enumOverride ${enumValueStatus.enumValue} in meta schema and not in JSON schema. Removing.`);
                        return;
                    }
                    reconciledEnumOverrides.push(enumValueStatus);
                });
                typeSupportStatus.enumOverrides = reconciledEnumOverrides;
            }

            reconciledTypeSupportStatuses.push(typeSupportStatus);
        });

        // Add missing types
        expectedTypeSupportStatuses.forEach(typeSupportStatus => {
            if (!reconciledTypeSupportStatuses.find(item => item.type === typeSupportStatus.type)) {
                messages.push(`LanguageImplementation ${language} is missing type ${typeSupportStatus.type} in meta schema. Adding.`);
                reconciledTypeSupportStatuses.push(typeSupportStatus);
            }
        });

        languageImplementation.typeSupportStatuses = reconciledTypeSupportStatuses;
    });

    // Find and remove any language implementations which are extra
    fs.readdirSync(schemaSourceDirPath)
        .filter(file => file.startsWith(metaSchemaLanguageFilePrefix))
        .filter(file => !KNOWN_LANGUAGES.some(language => metaSchemaLanguageStatusFileName(language) === file))
        .forEach(file => {
            messages.push(`LanguageImplementation file ${file} found for unrecognized language. Removing.`);
            fs.unlinkSync(schemaSourceDirPath + file);
        });

    // Find and add any language implementations not in meta schema
    KNOWN_LANGUAGES.forEach(language => {
        const languageImplementation = languageImplementationsByLanguage[language];
        if (!languageImplementation) {
            messages.push(`LanguageImplementation ${language} not found. Adding.`);
            languageImplementationsByLanguage[language] = emptyLanguageImplementation(language, metaSchema);
        }
    });

    metaSchema.languageImplementations = Object.values(languageImplementationsByLanguage);
}

function emptyLanguageImplementation(language, metaSchema) {
    return new LanguageImplementation(
        language,
        'TODO',
        metaSchema.types.map(metaSchemaType => new TypeSupportStatus(metaSchemaType.type, IMPLEMENTATION_STATUS_UNKNOWN, [], metaSchemaType.enumValues === null ? null : [], null)));
}

function parseEnum(rawJson, propertyName, errorMessage, knownValues) {
    const string = parseString(rawJson, propertyName, errorMessage);
    if (!knownValues.includes(string)) {
        throw new Error(errorMessage);
    }
    return string;
}

function parseString(rawJson, propertyName, errorMessage, nullable = false) {
    const property = rawJson[propertyName];
    if ((property === null || property === undefined) && nullable) {
        return null;
    }
    if (typeof property !== 'string') {
        throw new Error(errorMessage);
    }
    return property;
}

function parseBoolean(rawJson, propertyName, errorMessage) {
    const property = rawJson[propertyName];
    if (typeof property !== 'boolean') {
        throw new Error(errorMessage);
    }
    return property;
}

function parseArray(rawJson, propertyName, entryParser, errorMessage, entryErrorFormatter, messages, nullable = false) {
    const property = rawJson[propertyName];
    if ((property === null  || property === undefined) && nullable) {
        return null;
    }
    return parseArrayValue(property, entryParser, errorMessage, entryErrorFormatter, messages);
}

function parseArrayValue(arrayValue, entryParser, errorMessage, entryErrorFormatter, messages) {
    if (!Array.isArray(arrayValue)) {
        throw new Error(errorMessage);
    }
    const entries = [];
    arrayValue.forEach(entry => {
        try {
            entries.push(entryParser(entry));
        } catch (error) {
            messages.push(entryErrorFormatter(error));
        }
    });
    return entries;
}
