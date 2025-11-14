import fs from 'fs';
import {schemaDirPath} from "./util.js";

fs.readdirSync(schemaDirPath)
    .filter(file => file.endsWith(".json"))
    .forEach(file => {
        const fileContent = JSON.parse(fs.readFileSync(schemaDirPath + file, "utf-8"))
        const yamlContent = JSON.stringify(fileContent, null, 2);
        fs.writeFileSync(schemaDirPath + file.replace(".json", ".yaml"), yamlContent);
    });