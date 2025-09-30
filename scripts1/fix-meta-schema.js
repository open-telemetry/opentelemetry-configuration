
import {
    readMetaSchemaDoc,
    metaSchemaFileName,
    readJsonSchemaTypes,
    MetaSchemaProperty,
    writeMetaSchemaTypes,
} from "./schema.js";

// Track messages to be written to console
const messages = [];

// Read meta schema and sanitize
const metaSchemaDoc = readMetaSchemaDoc();
const metaSchemaTypes = [];
if (Array.isArray(metaSchemaDoc)) {
    metaSchemaDoc.forEach(rawMetaSchemaType => {
       const type = rawMetaSchemaType['type'];

       if (typeof type !== 'string') {
           messages.push(`${metaSchemaFileName} contains entry ${JSON.stringify(rawMetaSchemaType)} with invalid type. Ignoring type.`);
           return;
       }

       const rawProperties = rawMetaSchemaType['properties'];
       const metaSchemaProperties = [];

        if (Array.isArray(rawProperties)) {
            rawProperties.forEach(rawProperty => {
                const property = rawProperty['property'];
                if (typeof property !== 'string') {
                    messages.push(`${metaSchemaFileName} type ${type} contains property ${JSON.stringify(rawProperty)} with invalid property. Ignoring property.`);
                    return;
                }

                let description = rawProperty['description'];
                if (typeof description !== 'string') {
                    messages.push(`${metaSchemaFileName} type ${type} contains property ${property} with invalid description. Ignoring description.`);
                    description = '';
                }

                metaSchemaProperties.push(new MetaSchemaProperty(property, description));
            });
        } else {
            messages.push(`${metaSchemaFileName} contains entry ${JSON.stringify(rawMetaSchemaType)} with invalid properties. Ignoring properties.`);
        }

        metaSchemaTypes.push(new MetaSchemaType(type, metaSchemaProperties));
    });
} else {
    messages.push(`${metaSchemaFileName} must be array of types.`);
}

const metaSchemaTypesByType = {};
metaSchemaTypes.forEach(type => metaSchemaTypesByType[type.type] = type);

const jsonSchemaTypesByType = {};
readJsonSchemaTypes().forEach(type => jsonSchemaTypesByType[type.type] = type);

// Find any types in both json schema and meta schema and make sure all json schema properties match
Object.entries(metaSchemaTypesByType).forEach(([type, metaSchemaType]) => {
    const jsonSchemaType = jsonSchemaTypesByType[type];
    if (!jsonSchemaType) {
        return;
    }
    const sanitizedProperties = [];
    const jsonSchemaProperties = jsonSchemaType.toMetaSchemaType().properties;

    // Remove properties in meta schema and not in json schema
    const jsonSchemaPropertiesByProperty = {};
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
});

// Find and remove any types in meta schema not in json schema
Object.entries(metaSchemaTypesByType).forEach(([type, unused]) => {
    if (!(type in jsonSchemaTypesByType)) {
        messages.push(`Type ${type} found in ${metaSchemaFileName} but not in JSON schema. Removing.`);
        delete metaSchemaTypesByType[type];
    }
});

// Find and add any types in json schema not in meta schema
Object.entries(jsonSchemaTypesByType).forEach(([type, jsonSchemaType]) => {
    if (!(type in metaSchemaTypesByType)) {
        messages.push(`Type ${type} in ${jsonSchemaType.file} and path ${jsonSchemaType.path} is missing from ${metaSchemaFileName}. Adding.`);
        const metaSchemaType = jsonSchemaType.toMetaSchemaType();
        metaSchemaTypesByType[metaSchemaType.type] = metaSchemaType;
    }
});

// Sort lexigraphically and write to meta schema
let sortedMetaSchemaTypes = Object.values(metaSchemaTypesByType).map(type => type.toJson());
sortedMetaSchemaTypes.sort((a, b) => a.type.localeCompare(b.type));
writeMetaSchemaTypes(sortedMetaSchemaTypes);

// Write messages to console
messages.forEach(message => {
    console.log(message);
});
