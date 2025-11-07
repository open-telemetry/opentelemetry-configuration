import fs from "fs";
import {schemaDirPath, snippetsDirPath} from "./util.js";
import {readJsonSchemaTypes} from "./json-schema.js";
import Ajv from "ajv/dist/2020.js";
import yaml from "yaml";

const jsonSchemaTypesByType = {};
readJsonSchemaTypes().forEach(type => jsonSchemaTypesByType[type.type] = type)

fs.readdirSync(snippetsDirPath)
    .forEach(file => {
       const snippetContent = fs.readFileSync(snippetsDirPath + file, "utf-8");
       const snippetYaml = yaml.parse(snippetContent);
       const jsonSchemaType = jsonSchemaTypeFromFileName(file, jsonSchemaTypesByType);
       const jsonSchemaTypeRef = computeJsonSchemaTypeRef(jsonSchemaType);

       console.log(file);
       console.log(jsonSchemaType.type);
       console.log(jsonSchemaTypeRef);
       console.log(jsonSchemaType.schema);
       console.log(snippetYaml);

        // TODO: use correct json schema version
        const ajv = new Ajv();
        //		npx --no ajv-cli validate --spec=draft2020 --allow-matching-properties --errors=text
        //		-s ./schema/opentelemetry_configuration.json
        //		-r "./schema/!(opentelemetry_configuration.json|*.yaml)"
        //		-d ./out/$$f \

       fs.readdirSync(schemaDirPath)
           .filter(file => file.endsWith('.json'))
           .forEach(file =>{
               const rawContent = fs.readFileSync(schemaDirPath + file, "utf-8");
               const jsonContent = JSON.parse(rawContent);
               ajv.addSchema(jsonContent);
           });

       const validate = ajv.getSchema(jsonSchemaTypeRef);
       if (!validate) {
           throw new Error(`Unable to resolve schema for JSON schema type ref: ${jsonSchemaTypeRef}`);
       }

        try {
           const valid = validate(snippetYaml);
           if (!valid) {
               console.error(ajv.errorsText(validate.errors));
           }
       } catch (error) {
           console.error(error.message);
       }
    });


// Helper functions

const snippetFileNameFormat = "<json_schema_type>_<snippet_description>.yaml";

function jsonSchemaTypeFromFileName(file, jsonSchemaTypesByType) {
    const fileParts = file.split('_');
    if (fileParts.length < 2) {
        throw new Error(`Invalid snippet file name: ${file}. File names follow the form ${snippetFileNameFormat}`);
    }
    const jsonSchemaType = jsonSchemaTypesByType[fileParts[0]];
    if (!jsonSchemaType) {
        throw new Error(`Invalid snippet file name: ${file}. Resolved JSON schema type ${jsonSchemaType} not found in jsonSchemaTypesByType.`);
    }
    return jsonSchemaType;
}

function computeJsonSchemaTypeRef(jsonSchemaType) {
    const fileId = jsonSchemaType.fileContent['$id'];
    return `${fileId}#/$defs/${jsonSchemaType.type}`;
}
