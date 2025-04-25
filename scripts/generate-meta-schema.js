const fs = require("node:fs");
const traverse = require("@json-schema-tools/traverse").default;
const yaml = require('yaml');
const schemasByName = require('./schema').schemasByName;

const typeDescriptions = yaml.parse(fs.readFileSync(__dirname + "/../schema/type_descriptions.yaml", "utf-8"));

function findTypeDescription(type) {
  return typeDescriptions.find(typeDescription => {
    return typeDescription.type === type;
  });
}

const metaSchema = {};

Object.entries(schemasByName).forEach(([type, value]) => {
    let typeDescription = findTypeDescription(type);
    if (typeDescription === undefined) {
        typeDescription = { path_patterns: [], property_descriptions: {}};
    }

    const typeProperties = {};
    const typeDef = { properties: typeProperties, paths: typeDescription.path_patterns, definitionSource: `${value.file}${value.path}` };
    metaSchema[type] = typeDef;

    const properties = value.schema.properties;
    if (!properties) {
        return;
    }

    Object.entries(properties).forEach(([propertyKey, propertyValue]) => {
        let description = typeDescription.property_descriptions[propertyKey];
        if (description === undefined) {
            description = "unknown";
        }

        const propertyDef = {
          description,
          implementationStatus: {}
        };
        typeProperties[propertyKey] = propertyDef;
    });
})

fs.writeFileSync(__dirname + "/../meta_schema.yaml", yaml.stringify(metaSchema, { sortMapEntries: true, lineWidth: 0 }));
