import fs from 'fs';
import {metaSchemaFilePrefix, schemaOutDirPath, schemaSourceDirPath} from "./util.js";
import yaml from "yaml";
import {readSourceSchemaTypes} from "./source-schema.js";

// Delete and recreate schema out directory
fs.rmSync(schemaOutDirPath, {recursive: true, force: true});
fs.mkdirSync(schemaOutDirPath);

// Read source schema
const { sourceContentByFile, sourceTypesByType } = readSourceSchemaTypes();

const metaSchemaTypesYaml = yaml.parse(fs.readFileSync(schemaSourceDirPath + 'meta_schema_types.yaml', "utf-8"));
metaSchemaTypesYaml.forEach(metaSchemaType => {
   const sourceSchemaType = sourceTypesByType[metaSchemaType.type];
   if (!sourceSchemaType) {
       throw new Error(`Could not find source schema type ${metaSchemaType.type}`);
   }

   const sourceSchemaFile = sourceContentByFile[sourceSchemaType.sourceFile];
   if (!sourceSchemaFile) {
       throw new Error(`Could not find source schema file ${sourceSchemaType.sourceFile}`);
   }

   // Walk source schema file to find relevant to update
   const type = sourceSchemaType.jsonSchemaPath === '.' ? sourceSchemaFile : sourceSchemaFile['$defs'][sourceSchemaType.type];
   if (!type) {
       throw new Error(`Could not find type ${sourceSchemaType.type} in source schema file ${sourceSchemaType.sourceFile}`);
   }

   if (metaSchemaType.isSdkExtensionPlugin) {
       type['isSdkExtensionPlugin'] = true;
   }

   if (metaSchemaType.properties) {
       metaSchemaType.properties.forEach(metaSchemaProperty => {
           const property = type['properties'][metaSchemaProperty.property];
           if (!property) {
               console.log(type);
               throw new Error(`Could not find property ${metaSchemaProperty.property} in type ${sourceSchemaType.type}`);
           }
           property['description'] = metaSchemaProperty.description;
       })
   } else {
       const enumDescriptions = {};
       metaSchemaType.enumValues.forEach(metaSchemaEnumValue => {
           enumDescriptions[metaSchemaEnumValue.enumValue] = metaSchemaEnumValue.description;
       })
       type['enumDescriptions'] = enumDescriptions;
   }
});

Object.entries(sourceContentByFile).forEach(([file, content]) => {
    fs.writeFileSync(schemaSourceDirPath + file, yaml.stringify(content, {lineWidth: 0}));
});