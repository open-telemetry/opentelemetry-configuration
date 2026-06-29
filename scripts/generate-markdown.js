import {KNOWN_LANGUAGES, readAndFixLanguageImplementations} from "./language-implementations.js";
import fs from "node:fs";
import {languageSupportStatusPath} from "./util.js";
import {readSourceTypesByType} from "./source-schema.js";

// The human-friendly schema explorer that used to be generated into schema-docs.md
// now lives at https://opentelemetry.io/docs/specs/otel-config/types/. This script
// only generates language-support-status.md, which the website does not cover.
const TYPES_PAGE_URL = "https://opentelemetry.io/docs/specs/otel-config/types/";

const sourceTypesByType = readSourceTypesByType();
const sourceTypes = Object.values(sourceTypesByType);

const { messages, languageImplementations } = readAndFixLanguageImplementations();
if (messages.length > 0) {
    throw new Error("Language implementations have problems. Please run fix-language-implementations and try again.");
}

// Write language support status
const languageSupportOutput = [];
addHeader('Language Support Status', 'language-support-status', 1, languageSupportOutput);
languageSupportOutput.push(`This page provides comprehensive language implementation status for each type in the declarative configuration schema. For type definitions and descriptions, see the [schema types reference](${TYPES_PAGE_URL}).\n\n`);
KNOWN_LANGUAGES.forEach(language => languageSupportOutput.push(`* [${language}](#${language})\n`));
languageSupportOutput.push(`\n`);

KNOWN_LANGUAGES.forEach(language => {
    addHeader(language, language, 2, languageSupportOutput);
    const languageImplementation = languageImplementations.find(item => item.language === language);
    if (!languageImplementation) {
        throw new Error(`Meta schema LanguageImplementation not found for language ${language}.`);
    }
    languageSupportOutput.push(`Latest supported file format: \`${languageImplementation.latestSupportedFileFormat}\`\n\n`);

    languageSupportOutput.push(`| Type | Status | Notes | Support Status Details |\n`);
    languageSupportOutput.push(`|---|---|---|---|\n`);
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

        languageSupportOutput.push(`| \`${typeSupportStatus.type}\` | ${typeSupportStatus.status} | ${formattedNotes} | ${supportStatusDetails.join('')} |\n`);
    });
    languageSupportOutput.push(`\n\n`);
});

languageSupportOutput.unshift('<!-- This file is generated using "make generate-markdown". Do not edit directly. -->\n\n')
fs.writeFileSync(languageSupportStatusPath, languageSupportOutput.join(""));

// Helper functions
function addHeader(title, id, level, targetOutput) {
    targetOutput.push(`${'#'.repeat(level)} ${title} <a id="${id}"></a>\n\n`);
}
