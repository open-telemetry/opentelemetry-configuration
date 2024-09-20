# Changelog

## Unreleased

## [v0.3.0] - 2024-05-08

* Add metric producers to meter_provider configuration. [#90](https://github.com/open-telemetry/opentelemetry-configuration/pull/90)
* Document what configuration options are covered in the schema. [92](https://github.com/open-telemetry/opentelemetry-configuration/pull/92)
* Remove unnecessary MetricProducer in pull metric reader. [#93](https://github.com/open-telemetry/opentelemetry-configuration/pull/93)
* Add modeling rule for property name case. [#96](https://github.com/open-telemetry/opentelemetry-configuration/pull/96)
* adding instrumentation configuration. [#91](https://github.com/open-telemetry/opentelemetry-configuration/pull/91)
* Add sdk-config.yaml starter template w/ references to env vars. [#76](https://github.com/open-telemetry/opentelemetry-configuration/pull/76)
* Split MetricExporter into PullMetricExporter and PushMetricExporter and ensure only PushMetricExporters can be associated with PeriodicMetricReader. [#110](https://github.com/open-telemetry/opentelemetry-configuration/pull/110)
* Define modeling guidance for mismatches with standard env vars, add resource.attribute_list. [#106](https://github.com/open-telemetry/opentelemetry-configuration/pull/106)
* Update `attribute_keys` from array to to Include type. [#111](https://github.com/open-telemetry/opentelemetry-configuration/pull/111)
* add tool for config file validation and envvar replacement. [#94](https://github.com/open-telemetry/opentelemetry-configuration/pull/94)
* add headers_list support, similar to attributes_list. [#122](https://github.com/open-telemetry/opentelemetry-configuration/pull/122)
* Prefer arrays of name value pairs over objects. [#115](https://github.com/open-telemetry/opentelemetry-configuration/pull/115)
* stream: update stream configuration to include/exclude. [#118](https://github.com/open-telemetry/opentelemetry-configuration/pull/118)
* Project tooling to generate example property descriptions. [#104](https://github.com/open-telemetry/opentelemetry-configuration/pull/104)

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
