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

Before reaching 1.0, each minor version change is equivalent to major version change. That is, there are no guarantees about compatibility and all changes are permitted. As of 1.0, we provide the following stability guarantees:

- For major version: No guarantees.
- For minor versions: TBD

Allowable changes:

- For major versions: All changes are permitted.
- For minor versions: TBD

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

