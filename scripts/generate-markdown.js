import {readJsonSchemaTypes} from "./json-schema.js";
import {KNOWN_LANGUAGES, readAndFixMetaSchema} from "./meta-schema.js";
import fs from "node:fs";
import {isExperimentalProperty, isExperimentalType, markdownDocPath} from "./util.js";

const { messages, metaSchema } = readAndFixMetaSchema();

if (messages.length > 0) {
    throw new Error("Meta schema has problems. Please run fix-meta-schema and try again.");
}

const jsonSchemaTypes = readJsonSchemaTypes();
const jsonSchemaTypesByType = {};
jsonSchemaTypes.forEach(type => jsonSchemaTypesByType[type.type] = type);

const output = [];

metaSchema.types.sort((a, b) => a.type.localeCompare(b.type));

addHeader('Overview', 'overview', 1);
output.push(`
This document is an auto-generated view of the declarative configuration JSON schema and meta schema meant for improved consumability by humans.

* [Types](#types) contains descriptions of all types and properties, with convenient linking between type references. [OpenTelemetryConfiguration](#opentelemetryconfiguration) is the root type and is a good starting point.
* [Language Support Status](#language-support-status) provides all the details about each language's support in a single place. (Alternatively, each type definition has a table showing support status across languages.)
* [SDK Extension Plugins](#sdk-extension-plugins) lists all the SDK extension plugin points.

`);

// Write types
addHeader('Types', 'types', 1);
metaSchema.types.forEach(metaSchemaType => {
    const type = metaSchemaType.type;
    const jsonSchemaType = jsonSchemaTypesByType[type];
    if (!jsonSchemaType) {
        throw new Error(`JSON schema type not found for meta schema type ${type}.`);
    }
    const required = jsonSchemaType.schema['required'];

    // Heading
    addHeader(type, type.toLowerCase(), 2);

    // Experimental type warning
    if (isExperimentalType(type)) {
        output.push('> [!WARNING]\n');
        output.push('> This type is [experimental](README.md#experimental-features).\n\n');
    }

    // SDK extension plugin
    if (metaSchemaType.isSdkExtensionPlugin) {
        output.push(`\`${type}\` is an [SDK extension plugin](#sdk-extension-plugins).\n\n`);
    }

    // Properties
    if (metaSchemaType.properties.length === 0) {
        output.push("No properties.\n\n");
    } else {
        // Property type and description table
        output.push(`| Property | Type | Required? | Constraints | Description |\n`);
        output.push("|---|---|---|---|---|\n");
        metaSchemaType.properties.forEach(property => {
            const jsonSchemaProperty = jsonSchemaType.properties.find(item => item.property === property.property);
            if (!jsonSchemaProperty) {
                throw new Error(`JSON schema property not found for property ${property.property} and type ${type}.`);
            }
            let formattedProperty = `\`${property.property}\``
            if (isExperimentalProperty(property.property)) {
                formattedProperty += '<br>**WARNING:** This property is [experimental](README.md#experimental-features).'
            }
            const formattedPropertyType = formatJsonSchemaPropertyType(jsonSchemaProperty, jsonSchemaTypesByType);
            const isRequired = required !== undefined && required.includes(property.property);
            let formattedConstraints = resolveAndFormatConstraints(jsonSchemaProperty.schema, '<br>');
            if (formattedConstraints.length === 0) {
                formattedConstraints = 'No constraints.';
            }
            const formattedDescription = property.description.split("\n").join("<br>");

            output.push(`| ${formattedProperty} | ${formattedPropertyType} | \`${isRequired}\` | ${formattedConstraints} | ${formattedDescription} |\n`);
        });
        output.push('\n');

        // Write language support status for type
        output.push(`<details>\n`);
        output.push('<summary>Language support status</summary>\n\n');
        const languageImplementationsByLanguage = {};
        metaSchema.languageImplementations.forEach(languageImplementation => languageImplementationsByLanguage[languageImplementation.language] = languageImplementation);
        output.push('| Property |');
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
        metaSchemaType.properties.forEach(property => {
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
        output.push(`</details>\n\n`)
    }

    // Constraints
    const formattedConstraints = resolveAndFormatConstraints(jsonSchemaType.schema, '\n');
    if (formattedConstraints.length > 0) {
        output.push('Constraints: \n\n');
        output.push(formattedConstraints);
        output.push('\n');
    } else {
        output.push('No constraints.\n\n');
    }

    // Usages
    const usages = [];
    jsonSchemaTypes.forEach(otherJsonSchemaType => {
       otherJsonSchemaType.properties.forEach(property => {
           if (property.types.find(item => item === type)) {
               usages.push([ otherJsonSchemaType, property ]);
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
    output.push(`[JSON Schema Source File](./schema/${jsonSchemaType.file})\n`)
    output.push(`<pre>${JSON.stringify(jsonSchemaType.schema, null, 2)}</pre>\n`);
    output.push(`</details>\n`);
    output.push('\n');
});

// Write language support status
addHeader('Language Support Status', 'language-support-status', 1);
KNOWN_LANGUAGES.forEach(language => {
    addHeader(language, language, 2);
    const languageImplementation = metaSchema.languageImplementations.find(item => item.language === language);
    if (!languageImplementation) {
        throw new Error(`Meta schema LanguageImplementation not found for language ${language}.`);
    }
    output.push(`Latest supported file format: \`${languageImplementation.latestSupportedFileFormat}\`\n\n`);

    output.push(`| Type | Status | Notes | Property Support Status |\n`);
    output.push(`|---|---|---|---|\n`);
    languageImplementation.typeSupportStatuses.forEach(typeSupportStatus => {
        const metaSchemaType = metaSchema.types.find(item => item.type === typeSupportStatus.type);
        if (!metaSchemaType) {
            throw new Error(`MetaSchemaType not found for type ${typeSupportStatus.type}.`);
        }

        const propertySupportStatus = [];
        metaSchemaType.properties.forEach(metaSchemaProperty => {
            const propertyOverride = typeSupportStatus.propertyOverrides.find(propertyOverride => propertyOverride.property === metaSchemaProperty.property);
            const status = propertyOverride ? propertyOverride.status : typeSupportStatus.status;
            propertySupportStatus.push(`* \`${metaSchemaProperty.property}\`: ${status}<br>`) ;
        });

        output.push(`| [\`${typeSupportStatus.type}\`](#${typeSupportStatus.type.toLowerCase()}) | ${typeSupportStatus.status} | ${typeSupportStatus.notes} | ${propertySupportStatus.join('')} |\n`);
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
metaSchema.types.filter(metaSchemaType => metaSchemaType.isSdkExtensionPlugin)
    .forEach(metaSchemaType => {
        output.push(`* [${metaSchemaType.type}](#${metaSchemaType.type})\n`)
    });

output.unshift('<!-- This file is generated using "make generate-markdown". Do not edit directly. -->\n\n')
fs.writeFileSync(markdownDocPath, output.join(""));

// Helper functions
function formatJsonSchemaPropertyType(jsonSchemaProperty, jsonSchemaTypesByType) {
    const output = [];
    if (jsonSchemaProperty.isSeq) {
        output.push('`array` of ');
    }
    let prefix = '';
    let suffix = '';
    if (jsonSchemaProperty.types.length > 1) {
        output.push('one of:<br>');
        prefix = '* ';
        suffix = '<br>';
    }
    jsonSchemaProperty.types.forEach(type => {
        let resolvedType = jsonSchemaTypesByType[type];
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
        'enum',
        'const',
    ];

    constraintPropertyNames.forEach(propertyName => {
        const property = schema[propertyName];
        if (property !== undefined && property !== null) {
            constraints.push(`* \`${propertyName}\`: \`${JSON.stringify(property)}\`${linebreak}`);
        }
    });

    return constraints.join('');
}
