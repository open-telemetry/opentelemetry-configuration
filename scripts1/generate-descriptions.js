import {
    readJsonSchemaTypes
} from "./json-schema.js";

const jsonSchemaTypes = readJsonSchemaTypes();

// console.log(JSON.stringify(jsonSchemaTypes, null, 2));

jsonSchemaTypes.forEach(type => {
    const json = {
        type: type.type,
        file: type.file,
        pathPatterns: type.pathPatterns,
    };
    console.log(JSON.stringify(json, null, 2));
});
