# Contributing

Read OpenTelemetry project [contributing
guide](https://github.com/open-telemetry/community/blob/main/CONTRIBUTING.md)
for general information about the project.

## Schema modeling rules

The following rules are enforced when modeling the configuration schema. 

These rules must be enforced when making changes to the schema; however, changes to the rules are permitted. In other words, the [stability definition](./README.md#stability-definition) does not apply to the rules: so long as the stability definition is not violated for existing properties, the modeling rules guiding new properties may change.

### Which JSON schema version?

The schema is modeled using JSON schema [draft 2020-12](https://json-schema.org/draft/2020-12).

This is reflected in top level schema documents by setting `"$schema": "https://json-schema.org/draft/2020-12/schema"`.

### What properties are part of schema?

Only properties which are described in [opentelemetry-specification](https://github.com/open-telemetry/opentelemetry-specification) or [semantic-conventions](https://github.com/open-telemetry/semantic-conventions) are modeled in the schema. However, it's acceptable to allow additional properties specific to a particular language or implementation, and not covered by the schema. Model these by setting `"additionalProperties": true` (see [JSON schema additionalProperties](https://json-schema.org/understanding-json-schema/reference/object#additionalproperties)). Types should set `"additionalProperties": false` by default unless requested by an opentelemetry component [maintainer](https://github.com/open-telemetry/community/blob/main/community-membership.md#maintainer) which supports additional options.

### Property naming

To remove redundant information from the configuration file, prefixes for data produced by each of the providers will be removed from configuration options. For example, under the `meter_provider` configuration, metric readers are identified by the word `readers` rather than by `metric_readers`. Similarly, the prefix `span_` will be dropped for tracer provider configuration, and `logrecord` for logger provider.

### Property name case

Properties defined in the schema should be lower [snake case](https://en.wikipedia.org/wiki/Snake_case).

### Properties which pattern matching

When a property requires pattern matching, use wildcard `*` (match any number of any character, including none) and `?` (match any single character) instead of regex. If a single property with wildcards is likely to be insufficient to model the configuration requirements, accept `included` and `excluded` properties, each with an array of strings with wildcard entries. The wildcard entries should be joined with a logical OR. If `included` is not specified, assume that all entries are included. Apply `excluded` after applying `included`. Examples:

* Given `excluded: ["a*"]`: Match all except values starting with `a`.
* Given `included: ["a*", "b*"]`, `excluded: ["ab*"]`: Match any value starting with `a` or `b`, excluding values starting with `ab`.
* Given `included: ["a", "b"]`, `excluded: ["a"]`: Match values equal to `b`.

### Data modeling and environment variable substitution

Properties should be modeled using the most appropriate data structures and types to represent the information. This may result in a schema which doesn't support env var substitution for the [standard env vars](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md) where a type mismatch occurs. For example, the `OTEL_RESOURCE_ATTRIBUTES` env var is modeled as a string, consisting of a comma separated list of key-value pairs, which is not the natural way to model a mapping of key-value pairs in JSON schema.

In instances where there is a type mismatch between the JSON schema and equivalent standard env var, an alternative version of the property may be provided to resolve the mismatch. For example, resource attributes are configured at `.resource.attributes`, but `.resource.attributes_list` is available with a format matching that of `OTEL_RESOURCE_ATTRIBUTES`. Alternative properties are reserved for cases where there is a demonstrated need for platforms to be able to participate in configuration and there is no reasonable alternative.

### Name-value pairs

When a type requires a configurable list of name-value pairs (i.e. resource attributes, HTTP headers), model using an array of objects, each with `name` and `value` properties. While an array of name-value objects is slightly more verbose than an object where each key-value is an entry, the latter is preferred because:

* Avoids user input as keys, which ensures conformity with the [snake_case properties](#property-name-case) rule.
* Allows both the names and the values to be targets for [env var substitution]. For example:

    ```yaml
   tracer_provider:
     processors:
       - batch:
           exporter:
             otlp:
               headers:
                - name: ${AUTHORIZATION_HEADER_NAME:-api-key}
                  value: ${AUTHORIZATION_HEADER_VALUE}
    ```

### Required and null properties

JSON schema has two related but subtly different concepts involved in indicating the requirement level of properties and values:

* [`type` of `null`](https://json-schema.org/understanding-json-schema/reference/null): When a property includes a type of `null` along with other allowed types (i.e. `"type": ["string", "null"]`), it indicates that even if the property key is present, the value may be omitted. This is useful in a variety of situations:
  * When modeling properties with primitive types which are candidates for [env var substitution][], since allowing `null` means that the configuration is valid even if the referenced env var is undefined.
  * When modeling objects which do not require any properties. In these cases, either no properties are required, or there are no properties and the presence of the property key expresses the desired state.
* [required](https://json-schema.org/understanding-json-schema/reference/object#required): When a property is `required`, the key must be included in the object or the configuration is invalid. Properties should be required when there is no well default semantic (i.e. it's not clear what the behavior is when the property is absent).

For example:

```
tracer_provider:
 processors:
   - simple:
       exporter:
         console:
 limits:
   attribute_value_length_limit: ${OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT}
```

* `tracer_provider` is not required. When omitted, a noop tracer provider is used.
* `tracer_provider`'s type is `object`. There's no sensible tracer provider which does not minimally set one entry in `processors`.
* `exporter` is required. A simple processor without an exporter is invalid.
* `exporter`'s type is `object`. Setting `exporter` to `null` or any non-object value is invalid.
* `console`'s type is `["object", "null"]`. The console exporter has no properties, and we should not force the user to set an empty object (i.e `console: {}`).
* `limits` is not required. When omitted, default span limits are used.
* `limits`'s type is `object`. If a user includes the `limits` property, they must set at least one property. Settings `limits` to `null` is invalid.
* `attributes_value_length_limit` is not required. If omitted, no attribute length limits are applied.
* `attributes_value_length_limit`'s type is `["integer", "null]`. If null (i.e. because the `OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT` env var is unset), no attribute length limits are applied.

If a property is _not_ required, it should include a [comment](./CONTRIBUTING.md#description-generation) describing the semantics when it is omitted.

If a property `type` includes `null`, it must include a [comment](./CONTRIBUTING.md#description-generation) describing the semantics when the value is `null`. It's common for properties with primitive types to allow `null`. `object` types allow `null` if no properties are required and the presence of the property key is meaningful.

### Polymorphic types

JSON schema's [schema composition](https://json-schema.org/understanding-json-schema/reference/combining) keywords (`allOf`, `anyOf`, `oneOf`) offer a tempting mechanism for object-oriented style inheritance and polymorphic patterns. However, JSON schema code generation tools may struggle or not support these keywords. Therefore, these keywords should be used judiciously, and should not be used to extend `object` types.

For example:

```json
{
  "Shape": {
    "title": "Shape",
    "type": "object",
    "properties": {
      "sides": { "type": "integer"}
    }
  },
  "Square": {
    "title": "Square",
    "type": "object",
    "allOf": [{"$ref": "#/$defs/Shape"}],
    "properties": {
      "side_length": {"type": "integer"}
    }
  }
}
```

`allOf` is used in the `Square` type to extend the parent `Shape` type, such that `Square` has properties `sides` and `side_length`. Avoid this type of use.

Another example:

```json
{
  "AttributeNameValue": {
    "title": "AttributeNameValue",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "value": {
        "oneOf": [
          {"type": "string"},
          {"type": "number"},
          {"type": "boolean"},
          {"type": "null"},
          {"type": "array", "items": {"type": "string"}},
          {"type": "array", "items": {"type": "boolean"}},
          {"type": "array", "items": {"type": "number"}}
        ]
      },
      "type": {
        "$ref": "#/$defs/AttributeType"
      }
    },
    "required": [
      "name", "value"
    ]
  },
  "AttributeType": {
    "type": ["string", "null"],
    "enum": [
      null,
      "string",
      "bool",
      "int",
      "double",
      "string_array",
      "bool_array",
      "int_array",
      "double_array"
    ]
  }
}
```

`oneOf` is used to specify that the `value` property matches the [standard attribute](https://github.com/open-telemetry/opentelemetry-specification/tree/main/specification/common#standard-attribute) definition, and is either a primitive or array of primitives. This type of use is acceptable but should be used judiciously.

### Annotations - title and description

The JSON schema [`title` and `description` annotations](https://json-schema.org/understanding-json-schema/reference/annotations) are keywords which are not involved in validation. Instead, they act as a mechanism to help schemas be self-documenting, and may be used by code generation tools.

Despite these potential benefits, these keywords should be omitted:

* The titles of `object` and `enum` types produced by code generation tools should be defined using key values in [$defs](https://json-schema.org/understanding-json-schema/structuring#defs). Setting the `title` keyword introduces multiple sources of truth and possible conflict.
* As described in [description generation](./CONTRIBUTING.md#description-generation), we use a different mechanism to describe the semantics of types and properties. Setting the `description` keyword introduces multiple sources of truth and possible conflict.

## Schemas and subschemas

In JSON Schema, a [schema](https://json-schema.org/learn/glossary#schema) is a document, and a [subschema](https://json-schema.org/learn/glossary#subschema) is contained in surrounding parent schema. Subschemas can be nested in various ways:

A property can directly describe a complex set of requirements including nested structures:

```json
{
  "properties": {
    "shape": {
      "type": "object",
      "properties": {
        "color": { "type": "string" },
        "sides": { "type": "int" }
      }
    }
  }
}
```

Or a property can reference a subschema residing in a schema document's [$defs](https://json-schema.org/understanding-json-schema/structuring#defs):

```json
{
  "properties": {
    "shape": {
      "$ref": "#/$defs/Shape"
    }
  },
  "$defs": {
    "Shape": {
      "type": "object",
      "properties": {
        "color": { "type": "string" },
        "sides": { "type": "int" }
      }
    }
  }
}
```

In order to promote stylistic consistency and allow for reuse of concepts, `object` and `enum` types should be defined in either as a top level schema document or as a subschema in a schema document's `$defs`.

## Consistency Checks

This repository has various checks to ensure the schema changes are valid. Before using:

- Install the latest LTS release of **[Node](https://nodejs.org/)**.
  For example, using **[nvm][]** under Linux run:

  ```bash
  nvm install --lts
  ```

- Install tooling packages:

  ```bash
  npm install
  ```

You can perform all checks locally using this command:

```bash
make all
```

## Description generation

The [./examples](./examples) directory contains a variety of examples, which
include important comments describing the semantics of the configuration
properties. In order to keep these comments consistent across examples, we have
tooling which automatically generates comments for each property.

How it works:

* The [./schema/type_descriptions.yaml](./schema/type_descriptions.yaml) file
  defines descriptions for each of the properties of each type defines in
  the [JSON schema](./schema) data model.
* The [./scripts/generate-descriptions.js](./scripts/generate-comments.js) is a
  script which for a given input configuration file will:
  * Parse the YAML.
  * Walk through each key / value pair, and for each:
    * Compute the JSON dot notation location of the current key / value pair.
    * Find the first matching rule
      in [type_description.yaml](./schema/type_descriptions.yaml). Iterate
      through the rules and evaluate the key / value pair dot notation location
      against each of the rule's `path_patterns`.
    * Inject / overwrite comments for its properties according
      to `type_descriptions.yaml`.
  * Write the resulting content to specified output file or to the console.

The `make generate-descriptions` command runs this process against each file
in `./examples` and overwrites each file in the process. 

**NOTE:** The [build](./.github/workflows/build-check.yaml) will fail
if `make generate-descriptions` produces any changes which are not checked into
version control.

To run against a single file:

- Install the latest LTS release of **[Node](https://nodejs.org/)**.
  For example, using **[nvm][]** under Linux run:

  ```bash
  nvm install --lts
  ```

- Install tooling packages:

  ```bash
  npm install
  ```
  
- Run the script:

```shell
npm run-script generate-descriptions -- /absolute/path/to/input/file.yaml /absolute/path/to/output/file.yaml
```

Optionally, include the `--debug` parameter. This prints out information about
each key value pair, including the computed dot notation location, the matched
rule, the previous description, the new description, etc.

```shell
npm run-script generate-comments -- /absolute/path/to/input/file.yaml /absolute/path/to/output/file.yaml --debug
```

## Pull requests

A PR is ready to merge when:

* It has as least 1 approval from [codeowners](.github/CODEOWNERS) (TODO: bump to 2 when we have more codeowners)
* There is no `request changes` from the [codeowners](.github/CODEOWNERS)
* If a change to the schema, at least one [example](examples/) is updated to illustrate change
* All required status checks pass
* The PR includes a [CHANGELOG](CHANGELOG.md) entry under `## UNRELEASED` following the form:

```markdown

* {Brief description of change}
  ([#{PR Number}]({https://github.com/open-telemetry/opentelemetry-configuration/pull/{PR Number}))

```

[env var substitution]: https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/file-configuration.md#environment-variable-substitution
[nvm]: https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating
