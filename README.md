# JSON Schema Definitions for OpenTelemetry Declarative Configuration

[![Build Check](https://github.com/open-telemetry/opentelemetry-configuration/actions/workflows/build-check.yaml/badge.svg?branch=main)](https://github.com/open-telemetry/opentelemetry-configuration/actions/workflows/build-check.yaml)

This repository contains the JSON schema definitions of the OpenTelemetry [declarative configuration](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/README.md#declarative-configuration) [data model](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/data-model.md).

JSON schema was chosen in part because of the large [ecosystem of tools](https://json-schema.org/tools) for things like code generation, validation, IDE integration, etc.

## Project organization

* [opentelemetry_configuration.json](./opentelemetry_configuration.json): the complete compiled JSON schema
* [schema-docs.md](schema-docs.md): generated documentation for the schema and language implementation status, optimized for human consumption
* [/schema](schema): the source schema and language implementation status tracking files (see [CONTRIBUTING.md](CONTRIBUTING.md#json-schema-source-and-output) for more details)
* [/examples](examples): sample configuration files (see [starter templates](#starter-templates) for more details)
* [/snippets](snippets): small targeted configuration files illustrating specific scenarios (see [snippets](CONTRIBUTING.md#snippets) for more details)
* [/validator](validator): a tool which performs env var substitution on YAML, validates YAML against the schema, and outputs to JSON or YAML

## Starter templates

The [examples](./examples) directory contains a variety of sample configuration files to help get started and illustrate useful patterns. The following are noteworthy:
   
* [getting-started.yaml](./examples/getting-started.yaml): A typical default configuration file to get started with declarative configuration. This is a good starting point if you are new to declarative configuration.
- [sdk-migration-config.yaml](./examples/sdk-migration-config.yaml): Includes env var substitution references to all [standard env vars](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md) which map cleanly to declarative configuration (see notes in the example for the set of env vars that are not referenced). Note, SDKs parsing configuration files ignore all env vars besides those referenced via [env var substitution][]. This is a great starting point for transitioning from env var based configuration to file based configuration.
* [sdk-config.yaml](./examples/sdk-config.yaml): Represents a comprehensive default configuration. This is a good starting point if you wish to have a template with more settings than `getting-started.yaml` and you are not using env var based configuration or wish to transition fully to file based configuration. Note, SDKs parsing configuration files ignore all env vars besides those referenced via [env var substitution][].

## Versioning policy

See [VERSIONING.md](VERSIONING.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Releases

See [RELEASING.MD](RELEASING.md) and [releases](https://github.com/open-telemetry/opentelemetry-configuration/releases)

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
