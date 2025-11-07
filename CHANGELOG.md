# Changelog

## Unreleased

### Schema

* **BREAKING**: Move certificate configuration under `tls` block
  ([#331](https://github.com/open-telemetry/opentelemetry-configuration/pull/331))
* Add `without_target_info` to PrometheusMetricExporter
  ([#331](https://github.com/open-telemetry/opentelemetry-configuration/pull/376))

## [v1.0.0-rc.2] - 2025-09-26

### Schema

* Move known resource detectors to properties 
  ([#220](https://github.com/open-telemetry/opentelemetry-configuration/pull/220))
* Add 'translation_strategy' to PrometheusMetricExporter 
  ([#262](https://github.com/open-telemetry/opentelemetry-configuration/pull/262))
* bugfix: remove requirement for disabled field for ExperimentalTracerConfig
  ([#307](https://github.com/open-telemetry/opentelemetry-configuration/pull/307))
* bugfix: remove name/config as required in ExperimentalTracerMatcherAndConfig 
  ([#308](https://github.com/open-telemetry/opentelemetry-configuration/pull/308))


### Tooling

* Update community member listings 
  ([#225](https://github.com/open-telemetry/opentelemetry-configuration/pull/225))
* Fix outdated community membership link 
  ([#226](https://github.com/open-telemetry/opentelemetry-configuration/pull/226))
* Add minimum token permissions for all github workflow files 
  ([#231](https://github.com/open-telemetry/opentelemetry-configuration/pull/231))
* Run docker image as current user 
  ([#240](https://github.com/open-telemetry/opentelemetry-configuration/pull/240))
* Install all dependencies in one step 
  ([#241](https://github.com/open-telemetry/opentelemetry-configuration/pull/241))
* Dep validator for validator-build-shelltest-image 
  ([#239](https://github.com/open-telemetry/opentelemetry-configuration/pull/239))

## [v1.0.0-rc.1] - 2025-06-18

### Schema

* Standardize container, host, process, and service resource detectors
  ([#199](https://github.com/open-telemetry/opentelemetry-configuration/pull/199))

### Tooling

* Add mark down link checking build step
  ([#196](https://github.com/open-telemetry/opentelemetry-configuration/pull/196),
  [#198](https://github.com/open-telemetry/opentelemetry-configuration/pull/198))
* Add ossf-scorecard scanning workflow
  ([#194](https://github.com/open-telemetry/opentelemetry-configuration/pull/194))
* Update validator-release.yml to use ubuntu-latest
  ([#200](https://github.com/open-telemetry/opentelemetry-configuration/pull/200))
* Add Renovate configuration
  ([#202](https://github.com/open-telemetry/opentelemetry-configuration/pull/202))
* [StepSecurity] ci: Harden GitHub Actions
  ([#206](https://github.com/open-telemetry/opentelemetry-configuration/pull/206))

## [v0.4.0] - 2025-03-31

This release has a significant number of breaking changes, new additions and
fixes. The breaking changes reflect a higher degree of scrutiny on consistency
and correct data modeling as we approach a stable
release ([#161](https://github.com/open-telemetry/opentelemetry-configuration/issues/161), [#4374](https://github.com/open-telemetry/opentelemetry-specification/issues/4374)).
We anticipate limited churn going forward. Additionally, once we do have a
stable release, users can rely on
the [strong compatibility guarantees](https://github.com/open-telemetry/opentelemetry-configuration?tab=readme-ov-file#stability-definition)
we'll conform to in versions 1.0.0+.

### Schema

* **BREAKING:** Refactor otlp exporter to separate `otlp_http` and `otlp_grpc`
  exporters, add `_file` suffix to OTLP exporter certificate properties
  ([#146](https://github.com/open-telemetry/opentelemetry-configuration/pull/146),
  [#166](https://github.com/open-telemetry/opentelemetry-configuration/pull/166))

  <details>
  
  <summary>Migration steps</summary>
  
  ```yaml
  # Before
  tracer_provider:
    processors:
      - batch:
          exporter:
            otlp: 
              protocol: http/protobuf
              endpoint: http://localhost:4318/v1/traces
              certificate: /app/cert.pem
  ---
  # After
  tracer_provider:
    processors:
      - batch:
          exporter:
            otlp_http: 
              endpoint: http://localhost:4318/v1/traces
              certificate_file: /app/cert.pem
  ```
  </details>

* **BREAKING:** Refactor propagator schema, add `composite_list` for
  compatibility with `OTEL_PROPAGATORS`.
  ([#187](https://github.com/open-telemetry/opentelemetry-configuration/pull/187))

  <details>

  <summary>Migration steps</summary>

  ```yaml
  # Before
  propagator:
    composite:
      - tracecontext
      - baggage
  ---
  # After
  propagator:
    composite:
      - tracecontext:
      - baggage:
    ```
  </details>

* **BREAKING:**  Refactor resource detection and mark experimental
  ([#182](https://github.com/open-telemetry/opentelemetry-configuration/pull/182),
  [#188](https://github.com/open-telemetry/opentelemetry-configuration/pull/188))

  <details>

  <summary>Migration steps</summary>
  
  ```yaml
  # Before
  resource:
    attributes: # ...omitted for brevity
    detectors:
      excluded:
        - process.command_args
  ---
  # After
  resource:
    attributes: # ...omitted for brevity
    detection/development:
      detectors:
        - container:
        - host:
        - os:
        - process:
      attributes:
        excluded:
          - process.command_args
  ```
  </details>

* **BREAKING:** Mark prometheus exporter as experimental
  ([#180](https://github.com/open-telemetry/opentelemetry-configuration/pull/180))

  <details>

  <summary>Migration steps</summary>
  
  ```yaml
  # Before
  meter_provider:
    readers:
      - pull:
          prometheus: # ...omitted for brevity
  ---
  # After
  meter_provider:
    readers:
      - pull:
          prometheus/development: # ...omitted for brevity
  ```
  </details>

* **BREAKING:**  Mark `.instrumentation` as experimental
  ([#179](https://github.com/open-telemetry/opentelemetry-configuration/pull/179))

  <details>

  <summary>Migration steps</summary>
  
  ```yaml
  # Before
  instrumentation: # ...omitted for brevity
  ---
  # After
  instrumentation/development: # ...omitted for brevity
  ```
  </details>

* **BREAKING:** Move metric producers from `MetricReader`
  to `PullMetricReader`, `PeriodicMetricReader`
  ([#148](https://github.com/open-telemetry/opentelemetry-configuration/pull/148))

  <details>

  <summary>Migration steps</summary>
  
  ```yaml
  # Before
  meter_provider:
    readers:
      - periodic: # ...omitted for brevity
        producers:
          - opencensus:
  ---
  # After
  meter_provider:
    readers:
      - periodic: # ...omitted for brevity
          producers:
            - opencensus:
  ```
  </details>

* **BREAKING:** Change various usages of minimum to exclusiveMinimum
  ([#151](https://github.com/open-telemetry/opentelemetry-configuration/pull/151))
* Add `.meter_provider.exemplar_filter` property
  ([#131](https://github.com/open-telemetry/opentelemetry-configuration/pull/131))
* Don't require empty objects
  ([#134](https://github.com/open-telemetry/opentelemetry-configuration/pull/134))
* Improve `.file_format` documentation
  ([#137](https://github.com/open-telemetry/opentelemetry-configuration/pull/137))
* Fix periodic exporter interval default value in `kitchen-sink.yaml`
  ([#143](https://github.com/open-telemetry/opentelemetry-configuration/pull/143))
* Provide guidance on required and null properties. Update schema types to
  reflect guidance, including documenting behavior when properties are omitted
  or null.
  ([#141](https://github.com/open-telemetry/opentelemetry-configuration/pull/141)
   [#192](https://github.com/open-telemetry/opentelemetry-configuration/pull/192))
* Add guidance around use of polymorphic types
  ([#147](https://github.com/open-telemetry/opentelemetry-configuration/pull/147))
* Fix MetricProducer type descriptions
  ([#150](https://github.com/open-telemetry/opentelemetry-configuration/pull/150))
* Add `otlp_file/development` exporter
  ([#154](https://github.com/open-telemetry/opentelemetry-configuration/pull/154),
  [#181](https://github.com/open-telemetry/opentelemetry-configuration/pull/181))
* Object and enum types should be defined in `$defs`
  ([#155](https://github.com/open-telemetry/opentelemetry-configuration/pull/155))
* Add guidance around use of title and description keywords
  ([#157](https://github.com/open-telemetry/opentelemetry-configuration/pull/157))
* Add `log_level` configuration
  ([#121](https://github.com/open-telemetry/opentelemetry-configuration/pull/121))
* Add missing gauge value to InstrumentType enum
  ([#186](https://github.com/open-telemetry/opentelemetry-configuration/pull/186))
* Add cardinality limits configuration to `PullMetricReader`, `PeriodicMetricReader`
  ([#185](https://github.com/open-telemetry/opentelemetry-configuration/pull/185))
* Add scope configuration to disable loggers, tracers, meters
  ([#140](https://github.com/open-telemetry/opentelemetry-configuration/pull/140),
  [#191](https://github.com/open-telemetry/opentelemetry-configuration/pull/191))

### Tooling

* chore: add govulncheck check for validator
  ([#126](https://github.com/open-telemetry/opentelemetry-configuration/pull/126))
* Drop anchors.yaml example
  ([#130](https://github.com/open-telemetry/opentelemetry-configuration/pull/130))
* Rebrand file configuration to declarative configuration
  ([#135](https://github.com/open-telemetry/opentelemetry-configuration/pull/135))
* Rework release process
  ([#149](https://github.com/open-telemetry/opentelemetry-configuration/pull/149),
  [#167](https://github.com/open-telemetry/opentelemetry-configuration/pull/167))
* Clarify JSON schema draft 2020-12
  ([#156](https://github.com/open-telemetry/opentelemetry-configuration/pull/156))
* Move modeling rules to CONTRIBUTING.md
  ([#170](https://github.com/open-telemetry/opentelemetry-configuration/pull/170))
* Add FOSSA scanning workflow
  ([#171](https://github.com/open-telemetry/opentelemetry-configuration/pull/171))
* Add a variety of key definitions surrounding stability
  ([#142](https://github.com/open-telemetry/opentelemetry-configuration/pull/142))

[v0.4.0]: https://github.com/open-telemetry/opentelemetry-configuration/releases/tag/v0.4.0

## [v0.3.0] - 2024-09-20

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
