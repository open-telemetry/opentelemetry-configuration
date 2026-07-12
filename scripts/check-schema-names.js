// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

// Checks that every property name and enum/const value in the compiled schema
// is a portable identifier: ASCII letters, digits, and underscores, not
// starting with a digit. These names become identifiers in the many languages
// that generate code from the schema, so restricting them to this common set
// means no generator has to sanitize or translate a name. See issue #690.
//
// NOTE: the schema currently contains names that violate this rule (the
// `/(development|alpha|beta)` stability suffix, e.g. `detection/development`).
// While those exist, the check runs in warn-only mode: it reports violations
// but exits 0 so it does not break the build. Flip ENFORCE to true once the
// remaining violations are resolved to turn it into a hard failure.

import fs from "fs";
import { schemaPath } from "./util.js";

const ENFORCE = false;

const IDENTIFIER = /^[A-Za-z_][A-Za-z0-9_]*$/;

const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
const violations = [];

// Walk the compiled schema, collecting property names and enum/const values
// with a JSON-path breadcrumb for actionable messages.
function walk(node, path) {
  if (Array.isArray(node)) {
    node.forEach((item, i) => walk(item, `${path}[${i}]`));
    return;
  }
  if (node === null || typeof node !== "object") {
    return;
  }

  if (node.properties && typeof node.properties === "object") {
    for (const name of Object.keys(node.properties)) {
      if (!IDENTIFIER.test(name)) {
        violations.push({ kind: "property", value: name, at: `${path}.properties` });
      }
    }
  }

  if (Array.isArray(node.enum)) {
    for (const value of node.enum) {
      if (typeof value === "string" && !IDENTIFIER.test(value)) {
        violations.push({ kind: "enum value", value, at: `${path}.enum` });
      }
    }
  }

  if (typeof node.const === "string" && !IDENTIFIER.test(node.const)) {
    violations.push({ kind: "const value", value: node.const, at: `${path}.const` });
  }

  for (const key of Object.keys(node)) {
    walk(node[key], `${path}.${key}`);
  }
}

walk(schema, "#");

if (violations.length > 0) {
  const label = ENFORCE ? "ERROR" : "WARNING";
  console.error(
    `${label}: found ${violations.length} name(s) that are not valid ` +
    `identifiers (must match ${IDENTIFIER}):\n`
  );
  for (const v of violations) {
    console.error(`  - ${v.kind} "${v.value}"  (at ${v.at})`);
  }
  console.error(
    `\nNames become identifiers in generated code; restrict them to ASCII ` +
    `letters, digits, and underscores. See the schema modeling rules and #690.`
  );
  process.exit(ENFORCE ? 1 : 0);
}

console.log("All property names and enum/const values are valid identifiers.");
