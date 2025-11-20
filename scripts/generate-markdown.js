import {KNOWN_LANGUAGES, readAndFixLanguageImplementations} from "./language-implementations.js";
import fs from "node:fs";
import {
    isExperimentalProperty,
    isExperimentalType,
    markdownDocPath,
    rootTypeName,
    schemaPath
} from "./util.js";
import {readSourceTypesByType} from "./source-schema.js";

const sourceTypesByType = readSourceTypesByType();
const sourceTypes = Object.values(sourceTypesByType);

const { messages, languageImplementations } = readAndFixLanguageImplementations();
if (messages.length > 0) {
    throw new Error("Language implementations have problems. Please run fix-language-implementations and try again.");
}

const outputSchema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

const output = [];

addHeader('Overview', 'overview', 1);
output.push(`
This document is an auto-generated view of the declarative configuration JSON schema and meta schema meant for improved consumability by humans.

* [Types](#types) contains descriptions of all types and properties, with convenient linking between type references. [${rootTypeName}](#${rootTypeName.toLowerCase()}) is the root type and is a good starting point.
* [Experimental Types](#experimental-types) same as [Types](#types) but for experimental types subject to breaking changes.
* [Language Support Status](#language-support-status) provides all the details about each language's support in a single place. (Alternatively, each type definition has a table showing support status across languages.)
* [SDK Extension Plugins](#sdk-extension-plugins) lists all the SDK extension plugin points.

`);

const types = [];
const experimentalTypes = [];
sourceTypes.sort((a, b) => a.type.localeCompare(b.type));
sourceTypes.forEach(sourceSchemaType => {
    if (isExperimentalType(sourceSchemaType.type)) {
        experimentalTypes.push(sourceSchemaType);
    } else {
        types.push(sourceSchemaType);
    }
});

// Write types

addHeader('Types', 'types', 1);
types.forEach(writeType);

addHeader('Experimental Types', 'experimental-types', 1);
experimentalTypes.forEach(writeType);

function writeType(sourceSchemaType) {
    const type = sourceSchemaType.type;
    const required = sourceSchemaType.schema['required'];

    // Heading
    addHeader(type, type.toLowerCase(), 2);

    // Experimental type warning
    if (isExperimentalType(type)) {
        output.push('> [!WARNING]\n');
        output.push('> This type is [experimental](README.md#experimental-features).\n\n');
    }

    // SDK extension plugin
    if (sourceSchemaType.schema.isSdkExtensionPlugin) {
        output.push(`\`${type}\` is an [SDK extension plugin](#sdk-extension-plugins).\n\n`);
    }

    if (sourceSchemaType.isEnumType()) {
        // Enum values
        output.push("This is a enum type.\n\n");
        output.push(`| Value | Description |\n`);
        output.push(`|---|---|\n`);
        sourceSchemaType.sortedEnumValues().forEach(enumValue => {
            const description = sourceSchemaType.schema['enumDescriptions'][enumValue];
            const formattedDescription = description.split("\n").join("<br>");
            output.push(`| \`${enumValue}\` | ${formattedDescription} |\n`);
        });
        output.push('\n');
    } else {
        // Properties
        const properties = sourceSchemaType.sortedProperties();
        if (properties.length === 0) {
            output.push("No properties.\n\n");
        } else {
            // Property type and description table
            output.push(`| Property | Type | Required? | Constraints | Description |\n`);
            output.push("|---|---|---|---|---|\n");
            properties.forEach(sourceSchemaProperty => {
                let formattedProperty = `\`${sourceSchemaProperty.property}\``
                if (isExperimentalProperty(sourceSchemaProperty.property)) {
                    formattedProperty += '<br>**WARNING:** This property is [experimental](README.md#experimental-features).'
                }
                const formattedPropertyType = formatPropertyType(sourceSchemaProperty, sourceTypesByType);
                const isRequired = required !== undefined && required.includes(sourceSchemaProperty.property);
                let formattedConstraints = resolveAndFormatConstraints(sourceSchemaProperty.schema, '<br>');
                if (formattedConstraints.length === 0) {
                    formattedConstraints = 'No constraints.';
                }
                const formattedDescription = sourceSchemaProperty.schema.description.split("\n").join("<br>");

                output.push(`| ${formattedProperty} | ${formattedPropertyType} | \`${isRequired}\` | ${formattedConstraints} | ${formattedDescription} |\n`);
            });
            output.push('\n');
        }
    }

    // Write language support status for type
    if ((sourceSchemaType.isEnumType() && sourceSchemaType.enumValues.length > 0) || (!sourceSchemaType.isEnumType() && sourceSchemaType.properties.length > 0)) {
        output.push(`<details>\n`);
        output.push('<summary>Language support status</summary>\n\n');
        const languageImplementationsByLanguage = {};
        languageImplementations.forEach(languageImplementation => languageImplementationsByLanguage[languageImplementation.language] = languageImplementation);
        const rowHeader = sourceSchemaType.isEnumType() ? 'Value' : 'Property';
        output.push(`| ${rowHeader} |`);
        KNOWN_LANGUAGES.forEach(language => {
            output.push(` [${language}](#${language}) |`);
            if (!languageImplementationsByLanguage[language]) {
                throw new Error(`Meta schema LanguageImplementation not found for language ${language}.`);
            }
        });
        output.push('\n');
        output.push('|---|');
        KNOWN_LANGUAGES.forEach(language => output.push(`---|`));
        output.push('\n');
        if (sourceSchemaType.isEnumType()) {
            sourceSchemaType.sortedEnumValues().forEach(enumValue => {
                output.push(`| \`${enumValue}\` |`);
                KNOWN_LANGUAGES.forEach(language => {
                    const typeSupportStatus = languageImplementationsByLanguage[language].typeSupportStatuses.find(item => item.type === type);
                    if (!typeSupportStatus) {
                        throw new Error(`Meta schema LanguageImplementation for language ${language} missing type ${type}.`);
                    }
                    const enumValueOverride = typeSupportStatus.enumOverrides.find(enumOverride => enumOverride.enumValue === enumValue);
                    const status = enumValueOverride ? enumValueOverride.status : typeSupportStatus.status;
                    output.push(` ${status} |`);
                });
                output.push('\n');
            });
        } else {
            sourceSchemaType.sortedProperties().forEach(property => {
                output.push(`| \`${property.property}\` |`);
                KNOWN_LANGUAGES.forEach(language => {
                    const typeSupportStatus = languageImplementationsByLanguage[language].typeSupportStatuses.find(item => item.type === type);
                    if (!typeSupportStatus) {
                        throw new Error(`Meta schema LanguageImplementation for language ${language} missing type ${type}.`);
                    }
                    const propertyOverride = typeSupportStatus.propertyOverrides.find(propertyOverride => propertyOverride.property === property.property);
                    const status = propertyOverride ? propertyOverride.status : typeSupportStatus.status;
                    output.push(` ${status} |`);
                });
                output.push('\n');
            });
        }

        output.push(`</details>\n\n`)
    }

    // Constraints
    const formattedConstraints = resolveAndFormatConstraints(sourceSchemaType.schema, '\n');
    if (formattedConstraints.length > 0) {
        output.push('Constraints: \n\n');
        output.push(formattedConstraints);
        output.push('\n');
    } else {
        output.push('No constraints.\n\n');
    }

    // Usages
    const usages = [];
    Object.values(sourceTypesByType).forEach(otherSourceType => {
       otherSourceType.properties.forEach(property => {
           if (property.types.find(item => item === type)) {
               usages.push([ otherSourceType, property ]);
           }
       });
    });
    if (usages.length > 0) {
        output.push('Usages:\n\n');
        usages.forEach(usage => output.push(`* [\`${usage[0].type}.${usage[1].property}\`](#${usage[0].type.toLowerCase()})\n`));
        output.push('\n');
    } else {
        output.push('No usages.\n\n');
    }

    // JSON schema collapsible section
    output.push(`<details>\n`);
    output.push(`<summary>JSON Schema</summary>\n\n`);
    output.push(`[JSON Schema Source File](./schema/${sourceSchemaType.sourceFile})\n`);
    // cleanSchema is a temp hack to minimize the diff while merging the meta schema
    // TODO: come back and remove
    const schemaSource = cleanSchema(getSchemaSource(sourceSchemaType));
    output.push(`<pre>${JSON.stringify(schemaSource, null, 2)}</pre>\n`);
    output.push(`</details>\n`);
    output.push('\n');
}

function getSchemaSource(sourceSchemaType) {
    if (sourceSchemaType.type === rootTypeName) {
        return outputSchema;
    }
    const defs = outputSchema['$defs'];
    if (!defs) {
        throw new Error(`Output schema does not have $defs.`);
    }
    const def = defs[sourceSchemaType.type];
    if (!def) {
        throw new Error(`Output schema does not $defs entry for ${sourceSchemaType.type}.`);
    }
    return def;
}

function cleanSchema(schemaSource) {
    const adjustedSchema = JSON.parse(JSON.stringify(schemaSource));
    const properties = adjustedSchema.properties;
    if (properties) {
        Object.values(properties).forEach(property => delete property.description);
    }
    delete adjustedSchema['$defs'];
    return adjustedSchema;
}

// Write language support status
addHeader('Language Support Status', 'language-support-status', 1);
KNOWN_LANGUAGES.forEach(language => {
    addHeader(language, language, 2);
    const languageImplementation = languageImplementations.find(item => item.language === language);
    if (!languageImplementation) {
        throw new Error(`Meta schema LanguageImplementation not found for language ${language}.`);
    }
    output.push(`Latest supported file format: \`${languageImplementation.latestSupportedFileFormat}\`\n\n`);

    output.push(`| Type | Status | Notes | Support Status Details |\n`);
    output.push(`|---|---|---|---|\n`);
    languageImplementation.typeSupportStatuses.forEach(typeSupportStatus => {
        const sourceSchemaType = sourceTypes.find(item => item.type === typeSupportStatus.type);
        if (!sourceSchemaType) {
            throw new Error(`SourceSchemaType not found for type ${typeSupportStatus.type}.`);
        }

        let formattedNotes = typeSupportStatus.notes;
        if (!formattedNotes) {
            formattedNotes = "";
        }

        const supportStatusDetails = [];

        if (!sourceSchemaType.isEnumType()) {
            sourceSchemaType.sortedProperties().forEach(sourceSchemaProperty => {
                const propertyOverride = typeSupportStatus.propertyOverrides.find(propertyOverride => propertyOverride.property === sourceSchemaProperty.property);
                const status = propertyOverride ? propertyOverride.status : typeSupportStatus.status;
                supportStatusDetails.push(`* \`${sourceSchemaProperty.property}\`: ${status}<br>`);
            });
        } else {
            sourceSchemaType.sortedEnumValues().forEach(enumValue => {
                const enumValueOverride = typeSupportStatus.enumOverrides.find(enumOverride => enumOverride.enumValue === enumValue);
                const status = enumValueOverride ? enumValueOverride.status : typeSupportStatus.status;
                supportStatusDetails.push(`* \`${enumValue}\`: ${status}<br>`);
            });
        }

        output.push(`| [\`${typeSupportStatus.type}\`](#${typeSupportStatus.type.toLowerCase()}) | ${typeSupportStatus.status} | ${formattedNotes} | ${supportStatusDetails.join('')} |\n`);
    });
    output.push(`\n\n`);
});

// Write SDK extension plugins
addHeader('SDK Extension Plugins', 'sdk-extension-plugins', 1);
output.push(
`[SDK extension plugins](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#supported-sdk-extension-plugins) are places where custom interface implementations can be referenced and configured.

For example, you could write a custom \`SpanExporter\`, and indicate that it should be paired with a \`BatchSpanProcessor\`.

Each of the following types support referencing custom interface implementations. Each type is an object type containing exactly one property whose value is type \`object\` or \`null\`. The property key refers to the name of the custom implementation, and must be the same as the \`name\` of a corresponding registered [ComponentProvider](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#register-componentprovider). The value passed as configuration when the [ComponentProvider.create](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#create) is called.

SDK extension plugin types may have properties defined corresponding to built-in implementations of the interface. For example, the \`otlp_http\` property of \`SpanExporter\` defines the OTLP http/protobuf exporter.

`);
sourceTypes.filter(sourceSchemaType => sourceSchemaType.schema.isSdkExtensionPlugin)
    .forEach(sourceSchemaType => {
        output.push(`* [${sourceSchemaType.type}](#${sourceSchemaType.type})\n`)
    });

output.unshift('<!-- This file is generated using "make generate-markdown". Do not edit directly. -->\n\n')
fs.writeFileSync(markdownDocPath, output.join(""));

// Helper functions
function formatPropertyType(sourceProperty, sourceTypesByType) {
    const output = [];
    if (sourceProperty.isSeq) {
        output.push('`array` of ');
    }
    let prefix = '';
    let suffix = '';
    if (sourceProperty.types.length > 1) {
        output.push('one of:<br>');
        prefix = '* ';
        suffix = '<br>';
    }
    sourceProperty.types.forEach(type => {
        let resolvedType = sourceTypesByType[type];
        output.push(prefix);
        output.push(resolvedType ? `[\`${resolvedType.type}\`](#${resolvedType.type.toLowerCase()})` : `\`${type}\``)
        output.push(suffix);
    });
    return output.join('');
}

function addHeader(title, id, level) {
    output.push(`${'#'.repeat(level)} ${title} <a id="${id}"></a>\n\n`);
}

function resolveAndFormatConstraints(schema, linebreak) {
    const constraints = [];
    const constraintPropertyNames = [
        'minLength',
        'maxLength',
        'pattern',
        'format',
        'multipleOf',
        'minimum',
        'exclusiveMinimum',
        'maximum',
        'exclusiveMaximum',
        'patternProperties',
        'additionalProperties',
        'propertyNames',
        'minProperties',
        'maxProperties',
        'required',
        'contains',
        'minContains',
        'maxContains',
        'uniqueItems',
        'const',
        'minItems',
        'maxItems',
        // skip enum because we have special formatting for enum types
    ];

    constraintPropertyNames.forEach(propertyName => {
        const property = schema[propertyName];
        if (property !== undefined && property !== null) {
            constraints.push(`* \`${propertyName}\`: \`${JSON.stringify(property)}\`${linebreak}`);
        }
    });

    return constraints.join('');
}
