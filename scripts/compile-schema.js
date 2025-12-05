import fs from 'fs';
import {rootTypeName, schemaPath} from "./util.js";
import {readSourceTypesByType} from "./source-schema.js";

// Read source schema
const sourceTypes = Object.values(readSourceTypesByType());

// Validate source types and exit early if there are any errors
const messages = [];
sourceTypes.forEach(sourceSchemaType => {
    allPropertiesShouldHaveDescriptions(sourceSchemaType, messages);
    allEnumValuesShouldHaveDescriptions(sourceSchemaType, messages);
    sdkExtensionPluginSchema(sourceSchemaType, messages);
    noSubschemas(sourceSchemaType, messages);
    optionalPropertiesHaveDefaultBehavior(sourceSchemaType, messages);
});
if (messages.length > 0) {
    messages.forEach(message => console.log(message));
    process.exit(1);
}

// If we make it here, source schema is valid.

// Construct and write full schema into single output file
// All types go in $defs, except root type, which is the top level schema
sourceTypes.sort((a, b) => a.type.localeCompare(b.type));
const defs = {};
sourceTypes.filter(sourceSchemaType => sourceSchemaType.type !== rootTypeName)
    .forEach(sourceSchemaType => {
        defs[sourceSchemaType.type] = prepareSchemaForOutput(sourceSchemaType, sourceTypes);
    });

const rootType = sourceTypes.find(sourceSchemaType => sourceSchemaType.type === rootTypeName);
if (!rootType) {
    throw new Error(`Root type ${rootTypeName} not found in source schema.`);
}
const rootTypeSchema = prepareSchemaForOutput(rootType, sourceTypes);

const output = {
    "$id": "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": rootTypeName,
    ...rootTypeSchema,
    "$defs": defs
};

fs.writeFileSync(schemaPath, JSON.stringify(output, null, 2));

// Helper functions

function prepareSchemaForOutput(sourceSchemaType, sourceTypes) {
    const schema = JSON.parse(JSON.stringify(sourceSchemaType.schema));

    delete schema['$defs'];

    stripMetadata(schema);
    replaceCrossFileRefs(schema);
    enrichDescriptions(sourceSchemaType, schema, sourceTypes);

    return schema;
}

function stripMetadata(schema) {
    delete schema['enumDescriptions'];
    delete schema['isSdkExtensionPlugin'];

    const properties = schema.properties;
    if (!properties) {
        return;
    }
    Object.values(properties).forEach(propertySchema => {
        delete propertySchema['defaultBehavior'];
        delete propertySchema['nullBehavior'];
    });
}

function replaceCrossFileRefs(schema) {
    const properties = schema.properties;
    if (!properties) {
        return;
    }
    Object.values(properties).forEach(propertySchema => {
        const ref = propertySchema['$ref'];
        if (ref) {
            propertySchema['$ref'] = ref.substring(ref.indexOf('#'));
        }
        const items = propertySchema['items'];
        if (items) {
            const itemsRef = items['$ref'];
            if (itemsRef) {
                items['$ref'] = itemsRef.substring(itemsRef.indexOf('#'));
            }
        }
    });
}

function enrichDescriptions(sourceSchemaType, schema, sourceTypes) {
    const properties = schema.properties;
    if (!properties) {
        return;
    }
    Object.entries(properties).forEach(([propertyKey, propertySchema]) => {
        const sourceProperty = sourceSchemaType.properties.find(property => property.property === propertyKey);
        let description = propertySchema['description'];

        // Add enum value descriptions if property is an enum type
        const enumSourceType = sourceProperty.types.map(type => sourceTypes.find(sourceType => sourceType.type === type)).find(sourceType => sourceType && sourceType.isEnumType());
        if (enumSourceType) {
            description = maybeAddLineBreak(description);
            description += 'Values include:\n';
            enumSourceType.sortedEnumValues().forEach(enumValue => {
                const enumDescription = enumSourceType.schema['enumDescriptions'][enumValue];
                description += `* ${enumValue}: ${enumDescription}\n`;
            });
        }

        // Add default and null behavior
        description = maybeAddLineBreak(description)
        description += sourceProperty.formatDefaultAndNullBehavior();
        if (!description.endsWith('\n')) {
            description += '\n';
        }
        propertySchema['description'] = description;
    });
}

function maybeAddLineBreak(str) {
    if (!str.endsWith('\n')) {
        return str + '\n';
    }
    return str;
}

// Validation functions

function allPropertiesShouldHaveDescriptions(sourceSchemaType, messages) {
    sourceSchemaType.properties.forEach(property => {
        if (!property.schema.description) {
            messages.push(`Please add 'description' to ${sourceSchemaType.type}.${property.property}.`);
        }
    });
}

function allEnumValuesShouldHaveDescriptions(sourceSchemaType, messages) {
    if (!sourceSchemaType.isEnumType()) {
        return;
    }
    const enumDescriptions = sourceSchemaType.schema['enumDescriptions'];
    if (!enumDescriptions) {
        messages.push(`Please add 'enumDescriptions' to ${sourceSchemaType.type}.`);
        return;
    }
    sourceSchemaType.enumValues.forEach(enumValue => {
        if (!enumDescriptions[enumValue]) {
            messages.push(`Please add entry for ${enumValue} to 'enumDescriptions' for ${sourceSchemaType.type}.`);
        }
    });
    Object.keys(enumDescriptions).forEach(enumValue => {
        if (!sourceSchemaType.enumValues.includes(enumValue)) {
            messages.push(`Please remove entry for ${enumValue} from 'enumDescriptions' for ${sourceSchemaType.type}.`);
        }
    });
}

function sdkExtensionPluginSchema(sourceSchemaType, messages) {
    const sdkExtensionPluginAdditionalProperties = JSON.stringify({"type": ["object", "null"]});

    const schema = sourceSchemaType.schema;
    if (!schema['isSdkExtensionPlugin']) {
        return;
    }
    const type = schema['type'];
    if (type !== 'object') {
        messages.push(`Please set 'type' to 'object' for ${sourceSchemaType.type}.`);
    }
    const additionalProperties = schema['additionalProperties'];
    if (JSON.stringify(additionalProperties) !== sdkExtensionPluginAdditionalProperties) {
        messages.push(`Please set 'additionalProperties' to ${sdkExtensionPluginAdditionalProperties} for ${sourceSchemaType.type}.`);
    }
    const minProperties = schema['minProperties'];
    if (minProperties !== 1) {
        messages.push(`Please set 'minProperties' to 1 for ${sourceSchemaType.type}.`);
    }
    const maxProperties = schema['maxProperties'];
    if (maxProperties !== 1) {
        messages.push(`Please set 'maxProperties' to 1 for ${sourceSchemaType.type}.`);
    }
}

function noSubschemas(sourceSchemaType, messages) {
    if (sourceSchemaType.isEnumType()) {
        return;
    }
    sourceSchemaType.properties.forEach(property => {
        property.types.forEach(type => {
            if (type === 'object') {
                messages.push(`Please move subschema for ${sourceSchemaType.type}.${property.property} to top level type in $defs.`)
            }
        });
    });
}

function optionalPropertiesHaveDefaultBehavior(sourceSchemaType, messages) {
    if (sourceSchemaType.isEnumType()) {
        return;
    }
    const required = sourceSchemaType.schema['required'] || [];
    // Checks for optional properties
    sourceSchemaType.properties
        .filter(property => !required.includes(property.property) && !property.schema['defaultBehavior'])
        .forEach(property => {
            messages.push(`Please add 'defaultBehavior' to optional property ${sourceSchemaType.type}.${property.property}.`);
        });
    // Checks for required properties
    sourceSchemaType.properties
        .filter(property => required.includes(property.property))
        .forEach(property => {
            if (property.schema['defaultBehavior']) {
                messages.push(`Please remove 'defaultBehavior' from required property ${sourceSchemaType.type}.${property.property}.`);
            }
            if (property.isNullable && !property.schema['nullBehavior']) {
                messages.push(`Please add 'nullBehavior' to required nullable property ${sourceSchemaType.type}.${property.property}.`);
            }
            if (!property.isNullable && property.schema['nullBehavior']) {
                messages.push(`Please remove 'nullBehavior' from required property ${sourceSchemaType.type}.${property.property}.`);
            }
        });
}
