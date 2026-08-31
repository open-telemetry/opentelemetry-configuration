// Merges semconv-owned instrumentation config into an in-memory copy of
// the otel-config schema.
//
// Reads attribute `annotations.config` blocks from semantic-conventions
// model YAML under semantic-conventions/model/**, maps logical scope
// names to opentelemetry-configuration $defs type names, and injects
// the properties into the corresponding types.
//
// Called by source-schema.js, which is the single point that loads the
// schema into memory for compile-schema.js and other scripts.
//
// Semconv shape:
//   annotations:
//     config:
//       general: <prose, semconv-only>
//       env_var:                      # semconv-only
//         - name: ...
//           description: ...
//       declarative:
//         - config_scopes: [<logical>, ...]
//           properties:
//             <name>:
//               type / items / minItems / maxItems / enum
//               description / defaultBehavior / nullBehavior

import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { semconvSourceDirPath } from './util.js';

const INSTRUMENTATION_FILE = 'instrumentation.yaml';

// Keys permitted directly under `annotations.config`. `general` and
// `env_var` are semconv-side prose/metadata not copied into otel-config.
// `declarative` carries the property definitions that get injected.
const ALLOWED_CONFIG_KEYS = new Set(['general', 'env_var', 'declarative']);

// Fields that may be copied from a semconv declarative property into
// the otel-config schema. Anything else on a property is a hard error
// (catches typos and prevents silent expansion of the exposed surface).
const ALLOWED_OTEL_CONFIG_FIELDS = new Set([
    // otel-config metadata (consumed by compile-schema.js)
    'description', 'defaultBehavior', 'nullBehavior',
    // JSON schema keywords supported for scalar / array-of-scalar properties
    'type', 'items', 'minItems', 'maxItems', 'enum',
]);

const ALLOWED_ITEMS_FIELDS = new Set(['type']);

// Semconv config properties are restricted to scalar types or arrays of
// scalar types. No objects, no $ref, no oneOf/allOf.
const SCALAR_TYPES = new Set(['string', 'integer', 'number', 'boolean']);

// Error prefix so failures thrown from this module are recognizable
// when surfaced by callers.
const ERR_PREFIX = 'semconv config merge:';

// Logical scope name (as used in semconv `config_scopes`) -> $defs
// type name in schema/instrumentation.yaml. Unknown scopes are a hard
// error.
const LOGICAL_NAME_TO_TYPE = {
    'http.client': 'ExperimentalHttpClientInstrumentation',
    'http.server': 'ExperimentalHttpServerInstrumentation',
};

class SemconvConfigProperty {
    constructor({ attribute, logicalName, propertyName, propertySchema, sourceFile }) {
        this.attribute = attribute;
        this.logicalName = logicalName;
        this.propertyName = propertyName;
        this.propertySchema = propertySchema;
        this.sourceFile = sourceFile;
    }
}

// Mutates sourceContentByFile in place, injecting semconv-sourced
// properties into the parsed instrumentation.yaml content.
export function mergeSemconvConfig(sourceContentByFile) {
    const instrumentation = sourceContentByFile[INSTRUMENTATION_FILE];
    if (!instrumentation) {
        throw new Error(`${ERR_PREFIX} ${INSTRUMENTATION_FILE} not loaded`);
    }
    const defs = instrumentation['$defs'];
    if (!defs) {
        throw new Error(`${ERR_PREFIX} ${INSTRUMENTATION_FILE} has no $defs`);
    }

    const configProps = collectSemconvConfig(semconvSourceDirPath);
    for (const prop of configProps) {
        if (!(prop.logicalName in LOGICAL_NAME_TO_TYPE)) {
            throw new Error(`${ERR_PREFIX} unknown logical scope name '${prop.logicalName}' on attribute '${prop.attribute}' in ${prop.sourceFile}. Known: ${Object.keys(LOGICAL_NAME_TO_TYPE).join(', ')}`);
        }
        const typeName = LOGICAL_NAME_TO_TYPE[prop.logicalName];
        const targetType = defs[typeName];
        if (!targetType || !targetType.properties) {
            throw new Error(`${ERR_PREFIX} target type ${typeName} not found or has no properties in ${INSTRUMENTATION_FILE}`);
        }
        if (prop.propertyName in targetType.properties) {
            throw new Error(`${ERR_PREFIX} property ${typeName}.properties.${prop.propertyName} already defined in ${INSTRUMENTATION_FILE}; it must be removed to be sourced from semconv (attribute '${prop.attribute}', logical scope '${prop.logicalName}').`);
        }
        validatePropertyShape(prop);
        const stripped = {};
        for (const [field, value] of Object.entries(prop.propertySchema)) {
            if (ALLOWED_OTEL_CONFIG_FIELDS.has(field)) stripped[field] = value;
        }
        targetType.properties[prop.propertyName] = stripped;
    }
}

function validatePropertyShape(prop) {
    const where = `${prop.attribute}[${prop.logicalName}].${prop.propertyName} in ${prop.sourceFile}`;
    const schema = prop.propertySchema;

    for (const field of Object.keys(schema)) {
        if (!ALLOWED_OTEL_CONFIG_FIELDS.has(field)) {
            throw new Error(`${ERR_PREFIX} unrecognized field '${field}' on ${where}. Allowed: ${[...ALLOWED_OTEL_CONFIG_FIELDS].join(', ')}.`);
        }
    }

    const type = schema.type;
    if (typeof type !== 'string' || (!SCALAR_TYPES.has(type) && type !== 'array')) {
        throw new Error(`${ERR_PREFIX} type on ${where} must be one of ${[...SCALAR_TYPES, 'array'].join(', ')}, got ${JSON.stringify(type)}.`);
    }

    if (type === 'array') {
        if (!schema.items || typeof schema.items !== 'object') {
            throw new Error(`${ERR_PREFIX} array property ${where} is missing 'items'.`);
        }
        for (const field of Object.keys(schema.items)) {
            if (!ALLOWED_ITEMS_FIELDS.has(field)) {
                throw new Error(`${ERR_PREFIX} unrecognized field '${field}' on items of ${where}. Allowed: ${[...ALLOWED_ITEMS_FIELDS].join(', ')}.`);
            }
        }
        if (!SCALAR_TYPES.has(schema.items.type)) {
            throw new Error(`${ERR_PREFIX} items.type on ${where} must be a scalar type (${[...SCALAR_TYPES].join(', ')}), got ${JSON.stringify(schema.items.type)}.`);
        }
    } else if ('items' in schema) {
        throw new Error(`${ERR_PREFIX} non-array property ${where} must not declare 'items'.`);
    }
}

function collectSemconvConfig(rootDir) {
    const results = [];
    for (const file of listYamlFiles(rootDir)) {
        let parsed;
        try {
            parsed = yaml.parse(fs.readFileSync(file, 'utf-8'));
        } catch (e) {
            throw new Error(`${ERR_PREFIX} failed to parse ${file}: ${e.message}`);
        }
        // yaml.parse returns null for empty files / files containing only
        // comments; guard before accessing properties.
        if (!parsed || !Array.isArray(parsed.groups)) continue;
        for (const group of parsed.groups) {
            if (!Array.isArray(group.attributes)) continue;
            for (const attr of group.attributes) {
                const config = attr?.annotations?.config;
                if (!config || typeof config !== 'object') continue;
                const attrName = attr.id || attr.ref || '<unknown>';
                collectFromConfigBlock(config, attrName, file, results);
            }
        }
    }
    // Stable order for deterministic output.
    results.sort((a, b) =>
        a.logicalName.localeCompare(b.logicalName) ||
        a.propertyName.localeCompare(b.propertyName) ||
        a.attribute.localeCompare(b.attribute));
    return results;
}

function collectFromConfigBlock(config, attrName, file, results) {
    for (const key of Object.keys(config)) {
        if (!ALLOWED_CONFIG_KEYS.has(key)) {
            throw new Error(`${ERR_PREFIX} unrecognized key '${key}' under annotations.config on attribute '${attrName}' in ${file}. Allowed: ${[...ALLOWED_CONFIG_KEYS].join(', ')}.`);
        }
    }
    const declarative = config.declarative;
    if (declarative === undefined) return;
    if (!Array.isArray(declarative)) {
        throw new Error(`${ERR_PREFIX} annotations.config.declarative on attribute '${attrName}' in ${file} must be an array.`);
    }
    for (let i = 0; i < declarative.length; i++) {
        const entry = declarative[i];
        if (!entry || typeof entry !== 'object') {
            throw new Error(`${ERR_PREFIX} annotations.config.declarative[${i}] on attribute '${attrName}' in ${file} must be an object.`);
        }
        const scopes = entry.config_scopes;
        if (!Array.isArray(scopes) || scopes.length === 0) {
            throw new Error(`${ERR_PREFIX} annotations.config.declarative[${i}].config_scopes on attribute '${attrName}' in ${file} must be a non-empty array.`);
        }
        const props = entry.properties;
        if (!props || typeof props !== 'object') {
            throw new Error(`${ERR_PREFIX} annotations.config.declarative[${i}].properties on attribute '${attrName}' in ${file} must be an object.`);
        }
        for (const logicalName of scopes) {
            for (const [propertyName, propertySchema] of Object.entries(props)) {
                results.push(new SemconvConfigProperty({
                    attribute: attrName,
                    logicalName,
                    propertyName,
                    propertySchema,
                    sourceFile: file,
                }));
            }
        }
    }
}

function listYamlFiles(dir) {
    const results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...listYamlFiles(full));
        } else if (entry.isFile() && (entry.name.endsWith('.yaml') || entry.name.endsWith('.yml'))) {
            results.push(full);
        }
    }
    return results;
}
