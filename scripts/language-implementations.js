import fs from 'fs';
import yaml from 'yaml';
import {
    metaSchemaLanguageStatusPath,
    metaSchemaLanguageStatusFileName,
    schemaSourceDirPath,
    metaSchemaLanguageFilePrefix,
    isExperimentalType
} from "./util.js";
import {readSourceTypesByType} from "./source-schema.js";

export const KNOWN_LANGUAGES = [
    'cpp', 
    'go', 
    'java',
    'js',
];

const IMPLEMENTATION_STATUS_UNKNOWN = 'unknown';
const IMPLEMENTATION_STATUSES = ['supported', IMPLEMENTATION_STATUS_UNKNOWN, 'not_implemented', 'ignored', 'not_applicable']

export function writeLanguageImplementations(languageImplementations) {
    languageImplementations.forEach(languageImplementation => {
        fs.writeFileSync(metaSchemaLanguageStatusPath(languageImplementation.language), yaml.stringify(languageImplementation.toJson(), {lineWidth: 0}));
    });
}

export function readAndFixLanguageImplementations() {
    // Track messages tracking schema fixes
    const messages = [];

    const sourceTypesByType = readSourceTypesByType();

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

    const languageImplementations = reconcileLanguageImplementations(metaSchemaLanguageImplementations, sourceTypesByType, messages);

    return {messages, languageImplementations};
}

// Types

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

function reconcileLanguageImplementations(languageImplementations, sourceTypesByType, messages) {
    const languageImplementationsByLanguage = {};
    languageImplementations.forEach(languageImplementation => languageImplementationsByLanguage[languageImplementation.language] = languageImplementation);

    // Find any types in both json schema and meta schema and make sure all json schema properties match
    Object.entries(languageImplementationsByLanguage).forEach(([language, languageImplementation]) => {
        if (!KNOWN_LANGUAGES.includes(language)) {
            return;
        }
        const reconciledTypeSupportStatuses = [];
        const expectedTypeSupportStatuses = emptyLanguageImplementation(language, sourceTypesByType).typeSupportStatuses;

        // Remove extra types
        languageImplementation.typeSupportStatuses.forEach(typeSupportStatus => {
            const sourceSchemaType = sourceTypesByType[typeSupportStatus.type];
            if (!sourceSchemaType) {
                messages.push(`LanguageImplementation ${language} has type ${typeSupportStatus.type} not in source. Removing.`);
                return;
            }
            if (!sourceSchemaType.isEnumType()) {
                if (typeSupportStatus.propertyOverrides === null) {
                    messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} is missing propertyOverrides and is not an enum type. Adding.`);
                    typeSupportStatus.propertyOverrides = [];
                }
                if (typeSupportStatus.enumOverrides !== null) {
                    messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} has propertyOverrides but is not an enum type. Removing.`);
                    typeSupportStatus.propertyOverrides = null;
                }
                // Remove any propertyOverrides which occur in meta schema but not json schema
                const reconciledPropertyOverrides = [];
                typeSupportStatus.propertyOverrides.forEach(propertyStatus => {
                    if (!sourceSchemaType.properties.find(sourceSchemaProperty => sourceSchemaProperty.property === propertyStatus.property)) {
                        messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} has propertyOverride ${propertyStatus.property} not in source. Removing.`);
                        return;
                    }
                    reconciledPropertyOverrides.push(propertyStatus);
                });
                typeSupportStatus.propertyOverrides = reconciledPropertyOverrides;
            } else {
                if (typeSupportStatus.enumOverrides === null) {
                    messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} is missing enumOverrides and is an enum type. Adding.`);
                    typeSupportStatus.enumOverrides = [];
                }
                if (typeSupportStatus.propertyOverrides !== null) {
                    messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} has propertyOverrides but is an enum type. Removing.`);
                    typeSupportStatus.propertyOverrides = null;
                }
                // Remove any enumOverrides which occur in meta schema but not json schema
                const reconciledEnumOverrides = [];
                typeSupportStatus.enumOverrides.forEach(enumValueStatus => {
                    if (!sourceSchemaType.enumValues.includes(enumValueStatus.enumValue)) {
                        messages.push(`LanguageImplementation ${language} type ${typeSupportStatus.type} has enumOverride ${enumValueStatus.enumValue} not in source. Removing.`);
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

    return Object.values(languageImplementationsByLanguage);
}

function emptyLanguageImplementation(language, sourceTypesByType) {
    return new LanguageImplementation(
        language,
        'TODO',
        Object.values(sourceTypesByType).map(sourceSchemaType => new TypeSupportStatus(sourceSchemaType.type, IMPLEMENTATION_STATUS_UNKNOWN, [], sourceSchemaType.enumValues === null ? null : [], null)));
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
