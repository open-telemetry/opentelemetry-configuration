import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const metaSchemaFilePrefix = "meta_schema";
export const schemaSourceDirPath = __dirname + "/../schema/";
export const schemaOutDirPath = __dirname + "/../schema_out/";
export const markdownDocPath = __dirname + "/../schema-docs.md";

export const metaSchemaTypesFileName = `${metaSchemaFilePrefix}_types.yaml`;
export const metaSchemaTypesPath = schemaSourceDirPath + metaSchemaTypesFileName;

export const metaSchemaLanguageFilePrefix = `${metaSchemaFilePrefix}_language`;
export const metaSchemaLanguageStatusFileName = (language) => `${metaSchemaLanguageFilePrefix}_${language}.yaml`;
export const metaSchemaLanguageStatusPath = (language) => schemaSourceDirPath + metaSchemaLanguageStatusFileName(language);

export const isExperimentalProperty = (property) => property.endsWith('/development');
export const isExperimentalType = (type) => type.startsWith('Experimental');

export const snippetsDirPath = __dirname + "/../snippets/";
export const rootTypeName = 'OpenTelemetryConfiguration';
