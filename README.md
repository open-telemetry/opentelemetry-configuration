# JSON Schema Definitions for OpenTelemetry Declarative Configuration

[![Build Check](https://github.com/open-telemetry/opentelemetry-configuration/actions/workflows/build-check.yaml/badge.svg?branch=main)](https://github.com/open-telemetry/opentelemetry-configuration/actions/workflows/build-check.yaml)

This repository contains the JSON schema that defines the OpenTelemetry configuration. This schema can be utilized to generate model code for implementations and to validate the structure of a configuration file. The repository comes as a result of [OTEP #225](https://github.com/open-telemetry/oteps/blob/976c9395e4cbb3ea933d3b51589eba94b87a17bd/text/0225-configuration.md), where JSON schema was chosen for the following reasons:

- support for client-side validation
- code generation
- broad support across languages

## Starter templates

The [examples](./examples) directory contains a variety of sample configuration files to help get started and illustrate useful patterns. The following are noteworthy:

- [sdk-migration-config.yaml](./examples/sdk-migration-config.yaml): Includes env var substitution references to all [standard env vars](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md) which map cleanly to declarative configuration (see notes in the example for the set of env vars which are not referenced). Note, SDKs parsing configuration files ignore all env vars besides those referenced via [env var substitution][]. This is a great starting point for transitioning from env var based configuration to file based configuration.
- [sdk-config.yaml](./examples/sdk-config.yaml): Represents the typical default configuration. This is a good starting point if you are not using env var based configuration or wish to transition fully to file based configuration. Note, SDKs parsing configuration files ignore all env vars besides those referenced via [env var substitution][].

## Code generation

There are [several tools](https://json-schema.org/implementations.html) available to generate code from a JSON schema. The following shows an example for generating code from the JSON schema in Go:

```bash
go-jsonschema \
    -p telemetry \
    --schema-package=https://opentelemetry.io/otelconfig/opentelemetry_configuration.json=github.com/open-telemetry/opentelemetry-collector/schema \
    ./schema/opentelemetry_configuration.json
```

## Stability definition

**NOTICE**: The stability definitions are applicable after this repository publishes a stable release (1.0.0). Currently, this repository is experimental and makes no stability guarantees. 

Stability definition consists of the following sections:

* [Objectives](#objectives): Overview of the motivation behind stability.
* [Guarantees and allowed changes](#guarantees-and-allowed-changes): Specific details on allowed and disallowed changed.
* [Applicability](#applicability): Limits of stability definitions, including experimental features and extension points.
* [File format](#file-format): The `file_format` property and implementation behavior when schema versions are not aligned.

### Objectives

The primary objective of stability is to protect users from breaking changes. That is, users providing configuration conforming to a particular stable version of the schema should be able to reliably upgrade minor and patch versions without risk that their configuration becomes invalid, or that the interpretation changes.

A secondary objective is to allow for stable code generation from the JSON schema for language implementations of the [in-memory configuration model](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#in-memory-configuration-model). With stability guarantees in mind, maintainers should be able to write code generation logic (or handcraft an in-memory configuration model) without risk that allowed changes to the schema will break stable implementations. **NOTE**: There is _no_ guarantee that the output of off-the-shelf [code generation](#code-generation) tools will be stable when allowed changes are made. Maintainers are responsible for understanding how code generation tools work (and evolve) and intersect with the guarantees made here.

All schema changes are considered through the lens of maintaining these objectives.

### Guarantees and allowed changes

A type is the JSON schema analog to a [protobuf message](https://protobuf.dev/programming-guides/proto3/#simple). Types have a [`type`](https://json-schema.org/understanding-json-schema/reference/type) of `object`, and use various keywords to describe their properties and conditions which constitute valid data.

Stable types provide the following guarantees. All types except those excluded in [applicability](#applicability) are considered stable after a 1.0.0 release.

* Type property names will not change.
* The `type` of properties will not change, except the allowed addition of `null`.
* Type [title](https://json-schema.org/understanding-json-schema/reference/annotations) will not change.
* Types will be not change to make validation more strict. Changes may occur if they make validation less strict. This applies to the following keywords. Examples are given, but they are not exhaustive.
  * [minLength, maxLength](https://json-schema.org/understanding-json-schema/reference/string): `minLength` will not increase and `maxLength` will not decrease.
  * [pattern](https://json-schema.org/understanding-json-schema/reference/string#regexp): pattern will not become stricter.
  * [format](https://json-schema.org/understanding-json-schema/reference/string#built-in-formats): will not change.
  * [multipleOf](https://json-schema.org/understanding-json-schema/reference/numeric#multiples): will not change.
  * [minimum, exclusiveMinimum, maximum, exclusiveMaximum](https://json-schema.org/understanding-json-schema/reference/numeric#range): `minimum`, `exclusiveMinimum` will not increase; `maximum`, `exclusiveMaximum` will not decrease.
  * [patternProperties](https://json-schema.org/understanding-json-schema/reference/object#patternProperties): will not expand scope to restrict additional properties.
  * [additionalProperties](https://json-schema.org/understanding-json-schema/reference/object#additionalproperties): will not go from `true` to `false`.
  * [propertyNames](https://json-schema.org/understanding-json-schema/reference/object#propertyNames): will not become stricter.
  * [minProperties, maxProperties](https://json-schema.org/understanding-json-schema/reference/object#size): `minProperties` will not increase, `maxProperties` will not decrease.
  * [required](https://json-schema.org/understanding-json-schema/reference/object#required): will not add additional entries.
  * [contains, minContains, maxContains](https://json-schema.org/understanding-json-schema/reference/array#contains): will not become stricter.
  * [minItems, maxItems](https://json-schema.org/understanding-json-schema/reference/array#length): `minItems` will not increase, `maxItems` will not decrease.
  * [uniqueItems](https://json-schema.org/understanding-json-schema/reference/array#uniqueItems): will not go from `true` to `false`.
  * [enum](https://json-schema.org/understanding-json-schema/reference/enum): will not remove entries.
  * [const](https://json-schema.org/understanding-json-schema/reference/const): will not change.
* No existing type will be deleted.
* No type property will be deleted.

The following additive changes are allowed:

* Adding of new properties to existing types.
* Adding new types.
* Changes that make property validation less strict. See above for examples.
* Removing a property from `required`.

### Applicability

Stability guarantees do not apply to [experimental features](#experimental-features) and [extension points](#extension-points).

#### Experimental features

Sometimes we need to experiment with new types and properties. For example, to evaluate the configuration experience for experimental features in [opentelemetry-specification](https://github.com/open-telemetry/opentelemetry-specification).

Experimental properties are denoted by a `*/(development|alpha|beta)` suffix (e.g.`foo/development`). The suffix indicates the property value and all types nested within it are exempt from stability guarantees, and are subject to breaking changes in minor versions. Experimental types have a [title](https://json-schema.org/understanding-json-schema/reference/annotations) prefixed with `Experimental*` (e.g. `ExperimentalFoo`).

Maintainers are not obligated to implement support for experimental properties and types. When they do, they are under no obligation to maintain any stability guarantees. 

End users should be cautious of adopting experimental properties and types, since in doing so they are subject to breaking changes in minor versions. 

#### Extension points

The schema contains types which are designed for extension, as indicated by the presence of `"additionalProperties": true`. For example, [component provider](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#register-componentprovider) provides mechanisms for referencing custom SDK extension components like exporters, processors, samplers, etc. The stability guarantees surrounding properties not explicitly defined in this repository is out of scope. Users should consult documentation for the components interpreting these additional properties and decide if their stability guarantees are sufficient for adoption.

### File format

The top level `.file_format` property is special in that it conveys the version of the schema a user's configuration conforms to. Implementations also target a particular version of the schema, which may or may not align with the version specified by the user.

Given the [guarantees and allowed changes](#guarantees-and-allowed-changes), implementations may encounter the following scenarios:

* The `file_format` major version aligns with the implementation major version, AND:
  * The `file_format` minor version is less than or equal to the implementation minor version: This is ideal, with versions maximally aligned. Despite this, an implementation might not support every property and type of its target version.
  * The `file_format` minor version is greater than the implementation minor version: The implementation should detect and emit a warning since there may be configuration features the user specifies which the implementation does not understand. However, this is acceptable in many cases, and not terribly different from the ideal path where an implementation also might not support every configuration feature.
* The `file_format` major version does not align with the implementation major version. The implementation should produce an error, since there may be breaking changes in the properties and semantics on how they are interpreted. Implementations may choose to temporarily support multiple major version to accommodate transitioning users.

## Schema modeling rules

The following rules are enforced when modeling the configuration schema:

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

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

Approvers ([@open-telemetry/configuration-approvers](https://github.com/orgs/open-telemetry/teams/configuration-approvers)):

- [Brett McBride](https://github.com/brettmc), Deakin University
- [Marc Alff](https://github.com/marcalff), Oracle

*Find more about the approver role in [community repository](https://github.com/open-telemetry/community/blob/main/guides/contributor/membership.md#approver).*

Maintainers ([@open-telemetry/configuration-maintainers](https://github.com/orgs/open-telemetry/teams/configuration-maintainers)):

- [Alex Boten](https://github.com/codeboten), Honeycomb
- [Jack Berg](https://github.com/jack-berg), New Relic
- [Tristan Sloughter](https://github.com/tsloughter), MyDecisiveAI
- [Tyler Yahn](https://github.com/MrAlias), Splunk

*Find more about the maintainer role in [community repository](https://github.com/open-telemetry/community/blob/main/guides/contributor/membership.md#maintainer).*

[env var substitution]: https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/file-configuration.md#environment-variable-substitution

