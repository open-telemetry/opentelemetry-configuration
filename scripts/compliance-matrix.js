const fs = require("node:fs");
const traverse = require("@json-schema-tools/traverse").default;

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
            console.log()
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

// Uncomment to view contents of catalog
// console.log(schemasByName);

/**
 * Iterate through types and print markdown representation.
 */
const languages = ['c++', 'c#', 'erlang', 'go', 'java', 'js', 'php', 'python', 'ruby', 'rust', 'swift']
const output = [];
const types = Object.keys(schemasByName);
types.sort();
types.forEach(type => {
    const value = schemasByName[type];

    output.push("### " + type + " <a id=\"" + type + "\"></a>\n\n")
    const properties = value.schema.properties;
    if (!properties) {
        return;
    }

    output.push("| Property | Type | ");
    languages.forEach(language => output.push(language + " |"));
    output.push("\n")

    output.push("|---|---|")
    languages.forEach(language => output.push("---|"));
    output.push("\n")

    Object.entries(properties).forEach(([propertyKey, propertyValue]) => {
        output.push("| " + propertyKey + " | ");
        output.push(resolveType(propertyValue) + " | ");
        languages.forEach(language => output.push(" |"));
        output.push("\n")
    });

    output.push("\n")
})

function findMatch(ref) {
    return Object.values(schemasByName)
        .find(value => {
            if (value.path === ref) {
                return true;
            }
            return `${value.file}${value.path}` === ref;
        });
}

function resolveType(schema) {
    const ref = schema['$ref'];
    if (ref) {
        const match = findMatch(ref);
        if (!match) {
            throw new Error("Could not resolve $ref: " + ref);
        }
        return "<a href=\"#" + match.name + "\">" + match.name + "</a>";
    }
    const type = schema.type;
    if (type === 'array') {
        const items = schema.items;
        const itemsType = resolveType(items);
        return itemsType + "[]";
    }
    if (typeof type == 'string') {
        return type;
    }
    if (type === undefined) {
        return "unknown";
    }
    return "[" + type.join(", ") + "]";
}

fs.writeFileSync(__dirname + "/../compliance.md", output.join(""));
