const fs = require("node:fs");
const traverse = require("@json-schema-tools/traverse").default;
const yaml = require('yaml');

const metaSchemaPath = __dirname + "/../meta_schema.yaml";
const metaSchemaContent = fs.readFileSync(metaSchemaPath, "utf-8");
const metaSchemaDoc = yaml.parse(metaSchemaContent);

// console.log(metaSchemaDoc);

const schemasByName = {};
const topLevelSchemas = {};

// Iterate through schema files, adding top-level types and $defs
const schemaDirPath = __dirname + "/../schema/";
fs.readdirSync(schemaDirPath)
    .filter(file => file.endsWith(".json"))
    .forEach(file => {
        const schema = require(`${schemaDirPath}${file}`);
        topLevelSchemas[file] = schema;

        if (file === 'opentelemetry_configuration.json') {
            schemasByName['OpenTelemetryConfiguration'] = { name: 'OpentelemetryConfiguration', file, path: '.', schema };
        }

        traverse(schema, (schema) => {
            const defs = schema['$defs'];
            if (!defs) return;
            Object.entries(defs).forEach(([name, schema]) => {
                const path = `#/$defs/${name}`;
                if (name in schemasByName) {
                    throw new Error(`${name} already exists in schemasByName with definition: ` + schemasByName[name]);
                }
                schemasByName[name] = { name, file, path, schema };
            });
        });
    });

// Resolve refs to top-level types
Object.entries(schemasByName).forEach(([key, value]) => {
    const ref = value.schema['$ref'];
    if (!ref) return;
    const topLevelSchema = topLevelSchemas[ref];
    if (!topLevelSchema) {
        throw new Error("Could not resolve $ref:" + ref);
    }
    schemasByName[key] = { ...value, schema: topLevelSchema };
});

// Validate no extra types in meta schema which are not in schema
const schemaTypes = Object.keys(schemasByName);
const metaSchemaTypes = Object.keys(metaSchemaDoc);

metaSchemaTypes.forEach(typeName => {
    if (!(typeName in schemasByName)) {
        throw new Error(`${metaSchemaPath} has extra definition for type ${typeName} which is not part of schema`);
    }
});

// Validate no extra types in schema which are not in meta schema
schemaTypes.forEach(typeName => {
    if (!(typeName in metaSchemaDoc)) {
        throw new Error(`${metaSchemaPath} missing definition for type ${typeName}`);
    }
});

// Validate meta schema types are in lexicographical order
schemaTypes.sort();
for (let i = 0; i < schemaTypes.length; i++) {
  console.log(schemaTypes[i] + " " + metaSchemaTypes[i]);
  if (schemaTypes[i] !== metaSchemaTypes[i]) {
      throw new Error(`${metaSchemaPath} types are not in lexicographical order\n`);
  }
}

// Iterate through schema and validate all are correctly reflected in the meta schema
schemaTypes.forEach(typeName => {
  const type = schemasByName[typeName];
//  console.log(typeName);
//  console.log(type);
//  console.log();

  // We've previously asserted that metaSchemaDoc and schemasByname contains the same keys
  const metaSchemaDef = metaSchemaDoc[typeName];

  // TODO: validate metaSchemaDef has definitionSource, paths, properties

  const metasSchemaProperties = metaSchemaDef['properties'];
  // TODO: check that properties is an object
  if (!metasSchemaProperties) {
    throw new Error(`${metaSchemaPath} has invalid definition for type ${typeName}: missing properties`);
  }

  const properties = type.schema['properties'];
  if (!properties) {
    return;
  }
  Object.entries(properties).forEach(([propertyName, property]) => {
    const metaSchemaProperty = metasSchemaProperties[propertyName];
    if (!metaSchemaProperty) {
      throw new Error(`${metaSchemaPath} has invalid definition for type ${typeName}: missing property ${propertyName}`);
    }
  });
});
