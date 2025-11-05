import {
    readAndFixMetaSchema, writeMetaSchema
} from "./meta-schema.js";

const { messages, metaSchema } = readAndFixMetaSchema();

writeMetaSchema(metaSchema);

// Write messages to console
messages.forEach(message => {
    console.log(message);
});
