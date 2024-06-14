# Changelog

## Unreleased

 * Add exporter `retry` configuration.

## [v0.2.0] - 2024-05-08

* Document time value units in kitchen-sink example. [#51](https://github.com/open-telemetry/opentelemetry-configuration/pull/51)
* Add resource `schema_url`. [#50](https://github.com/open-telemetry/opentelemetry-configuration/pull/50)
* Add Prometheus without units & type suffix options. [#61](https://github.com/open-telemetry/opentelemetry-configuration/pull/61)
* Add `without_scope_info` to Prometheus exporter. [#63](https://github.com/open-telemetry/opentelemetry-configuration/pull/63)
* Add insecure field. @codeboten in [#30](https://github.com/open-telemetry/opentelemetry-configuration/pull/30)
* Add comments for each Prometheus exporter config option. [#66](https://github.com/open-telemetry/opentelemetry-configuration/pull/66)
* Remove specification for `service.name`. [#68](https://github.com/open-telemetry/opentelemetry-configuration/pull/68)
* Add console definition for log record exporter. [#84](https://github.com/open-telemetry/opentelemetry-configuration/pull/84)
* Define `resource.detectors.attributes.included/excluded`. [#64](https://github.com/open-telemetry/opentelemetry-configuration/pull/64)
* Add with_resource_constant_labels in exporter/prometheus. [#67](https://github.com/open-telemetry/opentelemetry-configuration/pull/67)
* Add schema modeling guidance to use wildcard syntax instead of regex. [#71](https://github.com/open-telemetry/opentelemetry-configuration/pull/71)

[v0.2.0]: https://github.com/open-telemetry/opentelemetry-configuration/releases/tag/v0.2.0

## v0.1.0 - 2023-10-05

Initial configuration schema release, including:

* Resource
* Attribute limits
* Enabled
* Propagators
* Tracer provider
  * Span processors (and exporters)
  * Span limits
  * Sampler
* Meter provider
  * Metric readers (and exporters)
  * Views
* Logger provider
  * Log record processors (and exporters)
  * Log limits
