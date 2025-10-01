
import {
    readJsonSchemaTypes
} from "./json-schema.js";

import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const metaSchemaFileName = "meta_schema.yaml";
export const schemaDirPath = __dirname + "/../schema/";
export const metaSchemaPath = schemaDirPath + metaSchemaFileName;
export const markdownDocPath = __dirname + "/../schema-docs.md";
