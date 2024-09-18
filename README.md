# JSON Schema Definitions for OpenTelemetry File Configuration

[![Build Check](https://github.com/open-telemetry/opentelemetry-configuration/actions/workflows/build-check.yaml/badge.svg?branch=main)](https://github.com/open-telemetry/opentelemetry-configuration/actions/workflows/build-check.yaml)

This repository contains the JSON schema that defines the OpenTelemetry configuration. This schema can be utilized to generate model code for implementations and to validate the structure of a configuration file. The repository comes as a result of [OTEP #225](https://github.com/open-telemetry/oteps/blob/976c9395e4cbb3ea933d3b51589eba94b87a17bd/text/0225-configuration.md), where JSON schema was chosen for the following reasons:

- support for client-side validation
- code generation
- broad support across languages

## Starter templates

The [examples](./examples) repository contains a variety of sample configuration files to help get started and illustrate useful patterns. The following are noteworthy:

- [sdk-migration-config.yaml](./examples/sdk-migration-config.yaml): Includes env var substitution references to all [standard env vars](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md) which map cleanly to file configuration (see notes in the example for the set of env vars which are not referenced). Note, SDKs parsing configuration files ignore all env vars besides those referenced via [env var substitution][]. This is a great starting point for transitioning from env var based configuration to file based configuration.
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

Before reaching 1.0, each minor version change is equivalent to major version change. That is, there are no guarantees about compatibility and all changes are permitted. As of 1.0, we provide the following stability guarantees:

- For major version: No guarantees.
- For minor versions: TBD

Allowable changes:

- For major versions: All changes are permitted.
- For minor versions: TBD

## Schema modeling rules

The following rules are enforced when modeling the configuration schema:

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

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

Approvers ([@open-telemetry/configuration-approvers](https://github.com/orgs/open-telemetry/teams/configuration-approvers)):

- [Brett McBride](https://github.com/brettmc), Deakin University
- [Marc Alff](https://github.com/marcalff), Oracle

*Find more about the approver role in [community repository](https://github.com/open-telemetry/community/blob/main/guides/contributor/membership.md#approver).*

Maintainers ([@open-telemetry/configuration-maintainers](https://github.com/orgs/open-telemetry/teams/configuration-maintainers)):

- [Alex Boten](https://github.com/codeboten), Honeycomb
- [Jack Berg](https://github.com/jack-berg), New Relic
- [Tristan Sloughter](https://github.com/tsloughter), Splunk
- [Tyler Yahn](https://github.com/tsloughter), Splunk

*Find more about the maintainer role in [community repository](https://github.com/open-telemetry/community/blob/main/guides/contributor/membership.md#maintainer).*

[env var substitution]: https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/file-configuration.md#environment-variable-substitution

