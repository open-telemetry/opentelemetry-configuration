const fs = require("node:fs");
const traverse = require("@json-schema-tools/traverse").default;
const yaml = require('yaml');

/*
 * Build up a catalog of schema types
 */
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
            if (defs) {
                Object.entries(defs).forEach(([name, schema]) => {
                    const path = `#/$defs/${name}`;
                    if (name in schemasByName) {
                        throw new Error(`${name} already exists in schemasByName with definition: ` + schemasByName[name]);
                    }
                    schemasByName[name] = { name, file, path, schema };
                });
            }
        });
    });

// Resolve refs to top-level types
Object.entries(schemasByName).forEach(([key, value]) => {
    const ref = value.schema['$ref'];
    if (ref) {
        const topLevelSchema = topLevelSchemas[ref];
        if (!topLevelSchema) {
            throw new Error("Could not resolve $ref:" + ref);
        }
        schemasByName[key] = { ...value, schema: topLevelSchema };
    }
});

function findMatch(ref) {
    return Object.values(schemasByName)
        .find(value => {
            if (value.path === ref) {
                return true;
            }
            return `${value.file}${value.path}` === ref;
        });
}

function resolveType(schema, formatter) {
    const ref = schema['$ref'];
    if (ref) {
        const match = findMatch(ref);
        if (!match) {
            throw new Error("Could not resolve $ref: " + ref);
        }
        return formatter(match.name);
    }
    const type = schema.type;
    if (type === 'array') {
        const items = schema.items;
        const itemsType = resolveType(items, formatter);
        return itemsType + "[]";
    }
    if (typeof type == 'string') {
        return type;
    }
    if (type === undefined) {
        return "unknown";
    }
    // primitive
    const filtered = type.filter(val => val !== 'null');
    if (filtered.length !== 1) {
        throw new Error("expected type to have size 1 but was: " + type);
    }
    return filtered[0];
}

function resolvePropertyType(typeName, propertyName, formatter) {
    const schemaForType = schemasByName[typeName];
    const property = schemaForType.schema.properties[propertyName];

    return resolveType(property, formatter);
}

exports.schemasByName = schemasByName;
exports.resolvePropertyType = resolvePropertyType;
