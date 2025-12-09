# Changelog

## [v1.0.0-rc.3] - 2025-12-04 TODO update date

This release contains a number of changes which are breaking according to the [versioning policy](VERSIONING.md), but in
practice are unlikely to be impactful. These changes generally make implicit assumptions explicit, or require changes
from implementations but not end users. There are a small number of notable breaking changes called out below.

This release also contains a large number of project tooling improvements aimed at improving consistency and quality.
Notably, the schema is now compiled into a single file
at [opentelemetry_configuration.json](opentelemetry_configuration.json). Please
see [project tooling docs](CONTRIBUTING.md#json-schema-source-and-output) for more details.

### Schema

* **BREAKING:** Move certificate configuration under `tls` block and rename to align with collector
  ([#331](https://github.com/open-telemetry/opentelemetry-configuration/pull/331),
  [#418](https://github.com/open-telemetry/opentelemetry-configuration/pull/418))

  <details>

  <summary>Migration steps</summary>

  ```yaml
  # Before
  tracer_provider: # or meter_provider, logger_provider
    processors:
      - batch:
          exporter:
            otlp_http:
              certificate_file: /app/cert.pem
              client_key_file: /app/key.pem
              client_certificate_file: /app/client_cert.pem
  ---
  # After
  tracer_provider:
    processors:
      - batch:
          exporter:
            otlp_http:
              tls:
                ca_file: /app/cert.pem
                key_file: /app/key.pem
                cert_file: /app/client_cert.pem
  ```
  </details>

* **BREAKING:** Update .log_level to be enum
  ([#447](https://github.com/open-telemetry/opentelemetry-configuration/pull/447))

  <details>

  <summary>Migration steps</summary>

  ```yaml
  # .log_level must now be one of the values in https://github.com/open-telemetry/opentelemetry-configuration/blob/main/schema-docs.md#severitynumber-
  # If already conforming to this, no update is necessary, else update to the equivalent level.
  log_level: info
  ```
  </details>

* **BREAKING:** Delete ZipkinSpanExporter ahead of stabilizing after deprecation in the specification.
  See https://opentelemetry.io/blog/2025/deprecating-zipkin-exporters/ for details. If you depend on ZipkinSpanExporter
  w/ declarative config, please open an issue to let us know.
  ([#453](https://github.com/open-telemetry/opentelemetry-configuration/pull/453))

* **BREAKING (low-impact):** Add ConsoleMetricExporter
  ([#362](https://github.com/open-telemetry/opentelemetry-configuration/pull/362))
* **BREAKING (low-impact):** Add [0, 1] bounds for TraceIdRatioBasedSampler ratio
  ([#358](https://github.com/open-telemetry/opentelemetry-configuration/pull/358))
* **BREAKING (low-impact):** Make view selector and stream required
  ([#365](https://github.com/open-telemetry/opentelemetry-configuration/pull/365))
* **BREAKING (low-impact):** Change JaegerRemote to Experimental
  ([#363](https://github.com/open-telemetry/opentelemetry-configuration/pull/363))
* **BREAKING (low-impact):** Fix casing for OpenTelemetryConfiguration
  ([#372](https://github.com/open-telemetry/opentelemetry-configuration/pull/372))
* **BREAKING (low-impact):** Add AttributeLimit constraints
  ([#382](https://github.com/open-telemetry/opentelemetry-configuration/pull/382))
* **BREAKING (low-impact):** Set AttributeLimits additionalProperties: false
  ([#381](https://github.com/open-telemetry/opentelemetry-configuration/pull/381))
* **BREAKING (low-impact):** Update Propagator to disallow additionalProperties
  ([#388](https://github.com/open-telemetry/opentelemetry-configuration/pull/388))
* **BREAKING (low-impact):** Add constraints to Base2ExponentialBucketHistogramAggregation properties
  ([#383](https://github.com/open-telemetry/opentelemetry-configuration/pull/383))
* **BREAKING (low-impact):** Add minItems recommendation for array properties
  ([#386](https://github.com/open-telemetry/opentelemetry-configuration/pull/386))
* **BREAKING (low-impact):** Experimental{Signal}MatcherAndConfig require name and config properties
  ([#406](https://github.com/open-telemetry/opentelemetry-configuration/pull/406))
* **BREAKING (low-impact):** Break out dedicated type for prometheus translation strategy
  ([#415](https://github.com/open-telemetry/opentelemetry-configuration/pull/415))
* **BREAKING (low-impact):** Add schema modeling guidance for enum values as lower_snake_case
  ([#445](https://github.com/open-telemetry/opentelemetry-configuration/pull/445))
* Replace patternProperties with additionalProperties for improved type safety
  ([#323](https://github.com/open-telemetry/opentelemetry-configuration/pull/323), 
  [#347](https://github.com/open-telemetry/opentelemetry-configuration/pull/347))
* Minor cleanup of SDK extension plugin types
  ([#385](https://github.com/open-telemetry/opentelemetry-configuration/pull/385))
* Add schema for composite sampler
  ([#390](https://github.com/open-telemetry/opentelemetry-configuration/pull/390),
  [#427](https://github.com/open-telemetry/opentelemetry-configuration/pull/427))
* Add schema for ProbabilitySampler
  ([#339](https://github.com/open-telemetry/opentelemetry-configuration/pull/339))
* Add new LoggerConfig parameters
  ([#392](https://github.com/open-telemetry/opentelemetry-configuration/pull/392))
* Update `without_target_info` to `ExperimentalPrometheusMetricExporter`
  ([#376](https://github.com/open-telemetry/opentelemetry-configuration/pull/376))
* Clarify .file_format is a string consisting of the major and minor version
  ([#455](https://github.com/open-telemetry/opentelemetry-configuration/pull/455))
* Add schema for rule based sampler
  ([#410](https://github.com/open-telemetry/opentelemetry-configuration/pull/410))
* Add Distribution section for vendor-specific settings
  ([#433](https://github.com/open-telemetry/opentelemetry-configuration/pull/433))

### Tooling

* Fix links, use common link checker
  ([#319](https://github.com/open-telemetry/opentelemetry-configuration/pull/319),
  [#351](https://github.com/open-telemetry/opentelemetry-configuration/pull/351),
  [#379](https://github.com/open-telemetry/opentelemetry-configuration/pull/379),
  [#434](https://github.com/open-telemetry/opentelemetry-configuration/pull/434))
* Track additional schema meta data, including default behavior and descriptions. Separate schema source and compile into single output file. Add additional schema validation. Generate documentation from schema.
  ([#312](https://github.com/open-telemetry/opentelemetry-configuration/pull/312),
  [#350](https://github.com/open-telemetry/opentelemetry-configuration/pull/350),
  [#360](https://github.com/open-telemetry/opentelemetry-configuration/pull/360),
  [#359](https://github.com/open-telemetry/opentelemetry-configuration/pull/359),
  [#361](https://github.com/open-telemetry/opentelemetry-configuration/pull/361),
  [#370](https://github.com/open-telemetry/opentelemetry-configuration/pull/370),
  [#369](https://github.com/open-telemetry/opentelemetry-configuration/pull/369),
  [#367](https://github.com/open-telemetry/opentelemetry-configuration/pull/367),
  [#364](https://github.com/open-telemetry/opentelemetry-configuration/pull/364),
  [#384](https://github.com/open-telemetry/opentelemetry-configuration/pull/384),
  [#380](https://github.com/open-telemetry/opentelemetry-configuration/pull/380),
  [#366](https://github.com/open-telemetry/opentelemetry-configuration/pull/366),
  [#374](https://github.com/open-telemetry/opentelemetry-configuration/pull/374),
  [#414](https://github.com/open-telemetry/opentelemetry-configuration/pull/414),
  [#412](https://github.com/open-telemetry/opentelemetry-configuration/pull/412),
  [#411](https://github.com/open-telemetry/opentelemetry-configuration/pull/411),
  [#424](https://github.com/open-telemetry/opentelemetry-configuration/pull/424),
  [#425](https://github.com/open-telemetry/opentelemetry-configuration/pull/425),
  [#426](https://github.com/open-telemetry/opentelemetry-configuration/pull/426),
  [#436](https://github.com/open-telemetry/opentelemetry-configuration/pull/436),
  [#443](https://github.com/open-telemetry/opentelemetry-configuration/pull/443),
  [#444](https://github.com/open-telemetry/opentelemetry-configuration/pull/444),
  [#442](https://github.com/open-telemetry/opentelemetry-configuration/pull/442),
  [#440](https://github.com/open-telemetry/opentelemetry-configuration/pull/440),
  [#451](https://github.com/open-telemetry/opentelemetry-configuration/pull/451),
  [#450](https://github.com/open-telemetry/opentelemetry-configuration/pull/450))
* Document what you see is what you get philosophy as schema modeling rule
  ([#377](https://github.com/open-telemetry/opentelemetry-configuration/pull/377))
* Add contributing / release guidance for breaking changes
  ([#373](https://github.com/open-telemetry/opentelemetry-configuration/pull/373))
* Document SDK extension plugin schema modeling rule
  ([#378](https://github.com/open-telemetry/opentelemetry-configuration/pull/378))
* Misc docs updates
  ([#423](https://github.com/open-telemetry/opentelemetry-configuration/pull/423))
* Add getting started config at `/examples/getting-started.yaml`
  ([#402](https://github.com/open-telemetry/opentelemetry-configuration/pull/402))
* Move stability definition to VERSIONING.md, rework README.md for improved focus
  ([#454](https://github.com/open-telemetry/opentelemetry-configuration/pull/454))

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
