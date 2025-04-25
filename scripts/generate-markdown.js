const fs = require("node:fs");
const traverse = require("@json-schema-tools/traverse").default;
const yaml = require('yaml');
const schema = require('./schema');

const resolvePropertyType = schema.resolvePropertyType;

const metaSchema = yaml.parse(fs.readFileSync(__dirname + "/../meta_schema.yaml", "utf-8"));

const output = [];
const languages = ['c++', 'c#', 'erlang', 'go', 'java', 'js', 'php', 'python', 'ruby', 'rust', 'swift']

Object.entries(metaSchema).forEach(([typeName, typeMeta]) => {
    output.push("### " + typeName + " <a id=\"" + typeName + "\"></a>\n\n");

    // TODO: print raw JSON schema
    // TODO: link to definition in source code

    if (Object.keys(typeMeta.properties).length === 0) {
        output.push("No properties\n\n");
        return;
    }

    output.push("| Property | Type | Description |");
    languages.forEach(language => output.push(language + " |"));
    output.push("\n");

    output.push("|---|---|---|");
    languages.forEach(language => output.push("---|"));
    output.push("\n");

    Object.entries(typeMeta.properties).forEach(([propertyName, property]) => {
        const propertyType = resolvePropertyType(typeName, propertyName, type => `<a href="#${type}">${type}</a>`);
        output.push("| " + propertyName + " | ");
        output.push(propertyType + " | ");
        output.push(property.description.split("\n").join("<br>") + " | ");
        languages.forEach(language => output.push(" |"));
        output.push("\n");
    });
    output.push("\n");
});

fs.writeFileSync(__dirname + "/../schema.md", output.join(""));