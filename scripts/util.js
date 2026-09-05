import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const metaSchemaFilePrefix = "meta_schema";
export const schemaSourceDirPath = __dirname + "/../schema/";
export const schemaPath = __dirname + `/../opentelemetry_configuration.json`;
export const developmentSchemaPath = __dirname + `/../opentelemetry_configuration_development.json`;
export const languageSupportStatusPath = __dirname + "/../language-support-status.md";

export const metaSchemaLanguageFilePrefix = `${metaSchemaFilePrefix}_language`;
export const metaSchemaLanguageStatusFileName = (language) => `${metaSchemaLanguageFilePrefix}_${language}.yaml`;
export const metaSchemaLanguageStatusPath = (language) => schemaSourceDirPath + metaSchemaLanguageStatusFileName(language);

// Maturity is metadata about a node, not part of the name of that node.
// `stability` annotates a property or a type, `enumStability` maps an enum value
// to its maturity. Both are stripped when the schema is compiled.
export const stabilityKey = 'stability';
export const enumStabilityKey = 'enumStability';
export const developmentStability = 'development';
export const stableStability = 'stable';
export const stabilityValues = [stableStability, developmentStability];
export const maturityLevelKey = 'maturity_level';

export const isDevelopmentSchema = (schema) => schema != null && schema[stabilityKey] === developmentStability;

export const snippetsDirPath = __dirname + "/../snippets/";
export const rootTypeName = 'OpenTelemetryConfiguration';
