# JSON Schema Definitions for OpenTelemetry Declarative Configuration

[![Build Check](https://github.com/open-telemetry/opentelemetry-configuration/actions/workflows/build-check.yaml/badge.svg?branch=main)](https://github.com/open-telemetry/opentelemetry-configuration/actions/workflows/build-check.yaml)

This repository contains the JSON schema definitions of the OpenTelemetry [declarative configuration](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/README.md#declarative-configuration) [data model](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/data-model.md).

## Starter templates

The [examples](./examples) directory contains a variety of sample configuration files to help get started and illustrate useful patterns. The following are noteworthy:
   
* [getting-started.yaml](./examples/getting-started.yaml): A typical default configuration file to get started with declarative configuration. This is a good starting point if you are new to declarative configuration.
- [sdk-migration-config.yaml](./examples/sdk-migration-config.yaml): Includes env var substitution references to all [standard env vars](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md) which map cleanly to declarative configuration (see notes in the example for the set of env vars that are not referenced). Note, SDKs parsing configuration files ignore all env vars besides those referenced via [env var substitution][]. This is a great starting point for transitioning from env var based configuration to file based configuration.
* [sdk-config.yaml](./examples/sdk-config.yaml): Represents a comprehensive default configuration. This is a good starting point if you wish to have a template with more settings than `getting-started.yaml` and you are not using env var based configuration or wish to transition fully to file based configuration. Note, SDKs parsing configuration files ignore all env vars besides those referenced via [env var substitution][].

## Code generation

There are [several tools](https://json-schema.org/tools) available to generate code from a JSON schema. The following shows an example for generating code from the JSON schema in Go:

```bash
go-jsonschema \
    -p telemetry \
    --schema-package=https://opentelemetry.io/otelconfig/opentelemetry_configuration.json=github.com/open-telemetry/opentelemetry-collector/schema \
    ./schema/opentelemetry_configuration.json
```

## Stability definition

**NOTICE**: The stability definitions are applicable after this repository publishes a stable release (1.0.0). Currently, this repository is experimental and makes no stability guarantees.

This repository strictly follows [Semantic Versioning 2.0.0](https://semver.org/). This means that all releases have a version following the format `MAJOR.MINOR.PATCH`.

Stability definition consists of the following sections:

* [Objectives](#objective): Overview of the motivation behind stability.
* [Guarantees and allowed changes](#guarantees-and-allowed-changes): Specific details on allowed and disallowed changes within stability guarantees.
* [Applicability](#applicability): Limits of stability definitions, including experimental features and extension points.
* [File format](#file-format): The `file_format` property and implementation behavior when schema versions are not aligned.

### Objective

The objective of stability is to protect users from breaking changes. That is, users providing configuration conforming to a particular stable `MAJOR` version of the schema expect to reliably upgrade `MINOR` and `PATCH` versions without risk that their configuration becomes invalid, or that the interpretation changes.

Similarly, language implementations are expected to provide [in-memory configuration model](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#in-memory-configuration-model) representations, which have their own stability guarantees as defined by respective language SIGs, and which users expect to reliably upgrade. The stability guarantees inform maintainers on the types of changes they need to consider when creating these representations, which may be produced "by hand" or with code generation logic. **NOTE**: There is _no_ guarantee that the output of off-the-shelf [code generation](#code-generation) tools will be stable when allowed changes are made.

All schema changes are considered through the lens of maintaining this objective.

### Guarantees and allowed changes

The following guarantees apply to `MINOR` version changes. There are no guarantees for `MAJOR` version changes.

A type is the JSON schema analog to a [protobuf message](https://protobuf.dev/programming-guides/proto3/#simple). Types have a [type](https://json-schema.org/understanding-json-schema/reference/type) of `object`, and use various keywords to describe their properties and conditions which constitute valid data.

Stable types provide the following guarantees. All types except those excluded in [applicability](#applicability) are considered stable after a 1.0.0 release.

* Type property names will not change.
* The `type` of properties will not change, except the allowed addition of `null`.
* Type [title][annotation] will not change.
* Types will not change to make validation more strict. Changes may occur if they make validation less strict. This applies to the following keywords. Examples are given, but they are not exhaustive.
  * [minLength, maxLength](https://json-schema.org/understanding-json-schema/reference/string): `minLength` will not increase and `maxLength` will not decrease.
  * [pattern](https://json-schema.org/understanding-json-schema/reference/string#regexp): will not become stricter.
  * [format](https://json-schema.org/understanding-json-schema/reference/type#built-in-formats): will not change.
  * [multipleOf](https://json-schema.org/understanding-json-schema/reference/numeric#multiples): will not change.
  * [minimum, exclusiveMinimum, maximum, exclusiveMaximum](https://json-schema.org/understanding-json-schema/reference/numeric#range): `minimum`, `exclusiveMinimum` will not increase; `maximum`, `exclusiveMaximum` will not decrease.
  * [patternProperties](https://json-schema.org/understanding-json-schema/reference/object#patternProperties): will not expand scope to restrict additional properties.
  * [additionalProperties](https://json-schema.org/understanding-json-schema/reference/object#additionalproperties): will not go from `true` to `false`.
  * [propertyNames](https://json-schema.org/understanding-json-schema/reference/object#propertyNames): will not become stricter.
  * [minProperties, maxProperties](https://json-schema.org/understanding-json-schema/reference/object#size): `minProperties` will not increase, `maxProperties` will not decrease.
  * [required](https://json-schema.org/understanding-json-schema/reference/object#required): will not add additional entries.
  * [contains, minContains, maxContains](https://json-schema.org/understanding-json-schema/reference/array#contains): will not become stricter. `minContains` will not increase; `maxContains` will not decrease.
  * [minItems, maxItems](https://json-schema.org/understanding-json-schema/reference/array#length): `minItems` will not increase, `maxItems` will not decrease.
  * [uniqueItems](https://json-schema.org/understanding-json-schema/reference/array#uniqueItems): will not go from `false` to `true`.
  * [enum](https://json-schema.org/understanding-json-schema/reference/enum): will not remove entries.
  * [const](https://json-schema.org/understanding-json-schema/reference/const): will not change.
* No existing type will be deleted.
* No type property will be deleted.

The following additive changes are allowed:

* Adding new properties to existing types.
* Adding new types.
* Changes that make property validation less strict. See above for examples.
* Removing a property from `required`.
* Adding, removing, or modifying `description` [annotation][].
* Adding, removing, or modifying `deprecated` [annotation][].

### Applicability

Stability guarantees do not apply to [experimental features](#experimental-features) and [extension points](#extension-points).

#### Experimental features

Sometimes we need to experiment with new types and properties, e.g. when evaluating the configuration experience for experimental features in [opentelemetry-specification](https://github.com/open-telemetry/opentelemetry-specification).

Experimental properties are denoted by a `*/(development|alpha|beta)` suffix (e.g.`foo/development`). The suffix indicates the property value and all types nested within it are exempt from stability guarantees, and are subject to breaking changes in minor versions. Experimental type key values in `$defs` should be prefixed with `Experimental*` (e.g. `ExperimentalFoo`). Note that because we [omit the title annotation](./CONTRIBUTING.md#annotations---title-and-description), the `$defs` key value effectively acts as the type title for code generation tools.

Maintainers are not obligated to implement support for experimental properties and types. When they do, they are not obligated to maintain any stability guarantees.

End users should be cautious of adopting experimental properties and types, since in doing so they are subject to breaking changes in `MINOR` versions.

#### Extension points

The schema contains types that are designed for extension, as indicated by the presence of `"additionalProperties": true`. For example, [component provider](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#register-componentprovider) provides mechanisms for referencing custom SDK extension components like exporters, processors, samplers, etc. The stability guarantees surrounding properties not explicitly defined in this repository are out of scope. Users should consult documentation for the components interpreting these additional properties and decide if their stability guarantees are sufficient for adoption.

### File format

The top level `.file_format` property is special in that it conveys the version of the schema a user's configuration conforms to. Implementations also target a particular version of the schema, which may or may not align with the version specified by the user.

Given the [guarantees and allowed changes](#guarantees-and-allowed-changes), implementations may encounter the following scenarios:

* The `file_format` `MAJOR` version aligns with the implementation `MAJOR` version, AND:
  * The `file_format` `MINOR` version is less than or equal to the implementation `MINOR` version: This is ideal, with versions maximally aligned. Despite this, an implementation might not support every property and type of its target version.
  * The `file_format` `MINOR` version is greater than the implementation `MINOR` version: The implementation should detect and emit a warning since there may be configuration features the user specifies that the implementation does not understand. However, this is acceptable in many cases, and not terribly different from the ideal path where an implementation also might not support every configuration feature.
* The `file_format` `MAJOR` version does not align with the implementation `MAJOR` version. The implementation should produce an error, since there may be breaking changes in the properties and semantics on how they are interpreted. Implementations may choose to temporarily support multiple major version to accommodate transitioning users.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

### Maintainers

* [Alex Boten](https://github.com/codeboten), Honeycomb
* [Jack Berg](https://github.com/jack-berg), Grafana Labs
* [Tristan Sloughter](https://github.com/tsloughter), MyDecisiveAI
* [Tyler Yahn](https://github.com/MrAlias), Splunk

For more information about the maintainer role, see the [community repository](https://github.com/open-telemetry/community/blob/main/guides/contributor/membership.md#maintainer).

### Approvers

* [Brett McBride](https://github.com/brettmc), Deakin University
* [Marc Alff](https://github.com/marcalff), Oracle

For more information about the approver role, see the [community repository](https://github.com/open-telemetry/community/blob/main/guides/contributor/membership.md#approver).

[annotation]: https://json-schema.org/understanding-json-schema/reference/annotations
[env var substitution]: https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/data-model.md#environment-variable-substitution
