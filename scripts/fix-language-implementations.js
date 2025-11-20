import {
    readAndFixLanguageImplementations, writeLanguageImplementations
} from "./language-implementations.js";

const { messages, languageImplementations } = readAndFixLanguageImplementations();

writeLanguageImplementations(languageImplementations);

// Write messages to console
messages.forEach(message => {
    console.log(message);
});
