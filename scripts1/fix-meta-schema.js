
import {
    readAndFixMetaSchemaTypes, writeMetaSchemaTypes
} from "./meta-schema.js";

const { messages, types } = readAndFixMetaSchemaTypes();

// Sort lexigraphically and write to meta schema
let sortedMetaSchemaTypes = types.map(type => type.toJson());
sortedMetaSchemaTypes.sort((a, b) => a.type.localeCompare(b.type));
writeMetaSchemaTypes(sortedMetaSchemaTypes);

// Write messages to console
messages.forEach(message => {
    console.log(message);
});
