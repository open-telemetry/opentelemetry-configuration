### Aggregation <a id="Aggregation"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| base2_exponential_bucket_histogram | <a href="#Base2ExponentialBucketHistogramAggregation">Base2ExponentialBucketHistogramAggregation</a> | unknown |  | | | | | | | | | | |
| default | <a href="#DefaultAggregation">DefaultAggregation</a> | unknown |  | | | | | | | | | | |
| drop | <a href="#DropAggregation">DropAggregation</a> | unknown |  | | | | | | | | | | |
| explicit_bucket_histogram | <a href="#ExplicitBucketHistogramAggregation">ExplicitBucketHistogramAggregation</a> | Configure aggregation to be explicit_bucket_histogram. |  | | | | | | | | | | |
| last_value | <a href="#LastValueAggregation">LastValueAggregation</a> | unknown |  | | | | | | | | | | |
| sum | <a href="#SumAggregation">SumAggregation</a> | unknown |  | | | | | | | | | | |

### AlwaysOffSampler <a id="AlwaysOffSampler"></a>

No properties

### AlwaysOnSampler <a id="AlwaysOnSampler"></a>

No properties

### AttributeLimits <a id="AttributeLimits"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_count_limit | integer | Configure max attribute count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |  | | | | | | | | | | |
| attribute_value_length_limit | integer | Configure max attribute value size. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> |  | | | | | | | | | | |

### AttributeNameValue <a id="AttributeNameValue"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| name | string | unknown |  | | | | | | | | | | |
| type | <a href="#AttributeType">AttributeType</a> | unknown |  | | | | | | | | | | |
| value | unknown | unknown |  | | | | | | | | | | |

### AttributeType <a id="AttributeType"></a>

No properties

### B3MultiPropagator <a id="B3MultiPropagator"></a>

No properties

### B3Propagator <a id="B3Propagator"></a>

No properties

### BaggagePropagator <a id="BaggagePropagator"></a>

No properties

### Base2ExponentialBucketHistogramAggregation <a id="Base2ExponentialBucketHistogramAggregation"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| max_scale | integer | unknown |  | | | | | | | | | | |
| max_size | integer | unknown |  | | | | | | | | | | |
| record_min_max | boolean | unknown |  | | | | | | | | | | |

### BatchLogRecordProcessor <a id="BatchLogRecordProcessor"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| export_timeout | integer | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> |  | | | | | | | | | | |
| exporter | <a href="#LogRecordExporter">LogRecordExporter</a> | Configure exporter. |  | | | | | | | | | | |
| max_export_batch_size | integer | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> |  | | | | | | | | | | |
| max_queue_size | integer | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> |  | | | | | | | | | | |
| schedule_delay | integer | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 1000 is used.<br> |  | | | | | | | | | | |

### BatchSpanProcessor <a id="BatchSpanProcessor"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| export_timeout | integer | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> |  | | | | | | | | | | |
| exporter | <a href="#SpanExporter">SpanExporter</a> | Configure exporter. |  | | | | | | | | | | |
| max_export_batch_size | integer | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> |  | | | | | | | | | | |
| max_queue_size | integer | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> |  | | | | | | | | | | |
| schedule_delay | integer | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 5000 is used.<br> |  | | | | | | | | | | |

### CardinalityLimits <a id="CardinalityLimits"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| counter | integer | Configure default cardinality limit for counter instruments.<br>If omitted or null, the value from .default is used.<br> |  | | | | | | | | | | |
| default | integer | Configure default cardinality limit for all instrument types.<br>Instrument-specific cardinality limits take priority. <br>If omitted or null, 2000 is used.<br> |  | | | | | | | | | | |
| gauge | integer | Configure default cardinality limit for gauge instruments.<br>If omitted or null, the value from .default is used.<br> |  | | | | | | | | | | |
| histogram | integer | Configure default cardinality limit for histogram instruments.<br>If omitted or null, the value from .default is used.<br> |  | | | | | | | | | | |
| observable_counter | integer | Configure default cardinality limit for observable_counter instruments.<br>If omitted or null, the value from .default is used.<br> |  | | | | | | | | | | |
| observable_gauge | integer | Configure default cardinality limit for observable_gauge instruments.<br>If omitted or null, the value from .default is used.<br> |  | | | | | | | | | | |
| observable_up_down_counter | integer | Configure default cardinality limit for observable_up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> |  | | | | | | | | | | |
| up_down_counter | integer | Configure default cardinality limit for up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> |  | | | | | | | | | | |

### ConsoleExporter <a id="ConsoleExporter"></a>

No properties

### DefaultAggregation <a id="DefaultAggregation"></a>

No properties

### DropAggregation <a id="DropAggregation"></a>

No properties

### ExemplarFilter <a id="ExemplarFilter"></a>

No properties

### ExperimentalGeneralInstrumentation <a id="ExperimentalGeneralInstrumentation"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| http | <a href="#ExperimentalHttpInstrumentation">ExperimentalHttpInstrumentation</a> | Configure instrumentations following the http semantic conventions.<br>See http semantic conventions: https://opentelemetry.io/docs/specs/semconv/http/<br> |  | | | | | | | | | | |
| peer | <a href="#ExperimentalPeerInstrumentation">ExperimentalPeerInstrumentation</a> | Configure instrumentations following the peer semantic conventions.<br>See peer semantic conventions: https://opentelemetry.io/docs/specs/semconv/attributes-registry/peer/<br> |  | | | | | | | | | | |

### ExperimentalHttpInstrumentation <a id="ExperimentalHttpInstrumentation"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| client | object | Configure instrumentations following the http client semantic conventions. |  | | | | | | | | | | |
| server | object | Configure instrumentations following the http server semantic conventions. |  | | | | | | | | | | |

### ExperimentalInstrumentation <a id="ExperimentalInstrumentation"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cpp | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure C++ language-specific instrumentation libraries. |  | | | | | | | | | | |
| dotnet | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure .NET language-specific instrumentation libraries. |  | | | | | | | | | | |
| erlang | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure Erlang language-specific instrumentation libraries. |  | | | | | | | | | | |
| general | <a href="#ExperimentalGeneralInstrumentation">ExperimentalGeneralInstrumentation</a> | Configure general SemConv options that may apply to multiple languages and instrumentations.<br>Instrumenation may merge general config options with the language specific configuration at .instrumentation.<language>.<br> |  | | | | | | | | | | |
| go | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure Go language-specific instrumentation libraries. |  | | | | | | | | | | |
| java | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure Java language-specific instrumentation libraries. |  | | | | | | | | | | |
| js | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure JavaScript language-specific instrumentation libraries. |  | | | | | | | | | | |
| php | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure PHP language-specific instrumentation libraries. |  | | | | | | | | | | |
| python | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure Python language-specific instrumentation libraries. |  | | | | | | | | | | |
| ruby | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure Ruby language-specific instrumentation libraries. |  | | | | | | | | | | |
| rust | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure Rust language-specific instrumentation libraries. |  | | | | | | | | | | |
| swift | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> | Configure Swift language-specific instrumentation libraries. |  | | | | | | | | | | |

### ExperimentalLanguageSpecificInstrumentation <a id="ExperimentalLanguageSpecificInstrumentation"></a>

No properties

### ExperimentalLoggerConfig <a id="ExperimentalLoggerConfig"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| disabled | boolean | Configure if the logger is enabled or not. |  | | | | | | | | | | |

### ExperimentalLoggerConfigurator <a id="ExperimentalLoggerConfigurator"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| default_config | <a href="#ExperimentalLoggerConfig">ExperimentalLoggerConfig</a> | Configure the default logger config used there is no matching entry in .logger_configurator/development.loggers. |  | | | | | | | | | | |
| loggers | <a href="#ExperimentalLoggerMatcherAndConfig">ExperimentalLoggerMatcherAndConfig</a>[] | Configure loggers. |  | | | | | | | | | | |

### ExperimentalLoggerMatcherAndConfig <a id="ExperimentalLoggerMatcherAndConfig"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| config | <a href="#ExperimentalLoggerConfig">ExperimentalLoggerConfig</a> | The logger config. |  | | | | | | | | | | |
| name | string | Configure logger names to match, evaluated as follows:<br><br> * If the logger name exactly matches.<br> * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |  | | | | | | | | | | |

### ExperimentalMeterConfig <a id="ExperimentalMeterConfig"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| disabled | boolean | Configure if the meter is enabled or not. |  | | | | | | | | | | |

### ExperimentalMeterConfigurator <a id="ExperimentalMeterConfigurator"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| default_config | <a href="#ExperimentalMeterConfig">ExperimentalMeterConfig</a> | Configure the default meter config used there is no matching entry in .meter_configurator/development.meters. |  | | | | | | | | | | |
| meters | <a href="#ExperimentalMeterMatcherAndConfig">ExperimentalMeterMatcherAndConfig</a>[] | Configure meters. |  | | | | | | | | | | |

### ExperimentalMeterMatcherAndConfig <a id="ExperimentalMeterMatcherAndConfig"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| config | <a href="#ExperimentalMeterConfig">ExperimentalMeterConfig</a> | The meter config. |  | | | | | | | | | | |
| name | string | Configure meter names to match, evaluated as follows:<br><br> * If the meter name exactly matches.<br> * If the meter name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |  | | | | | | | | | | |

### ExperimentalOtlpFileExporter <a id="ExperimentalOtlpFileExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| output_stream | string | unknown |  | | | | | | | | | | |

### ExperimentalOtlpFileMetricExporter <a id="ExperimentalOtlpFileMetricExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| default_histogram_aggregation | <a href="#ExporterDefaultHistogramAggregation">ExporterDefaultHistogramAggregation</a> | unknown |  | | | | | | | | | | |
| output_stream | string | unknown |  | | | | | | | | | | |
| temporality_preference | <a href="#ExporterTemporalityPreference">ExporterTemporalityPreference</a> | unknown |  | | | | | | | | | | |

### ExperimentalPeerInstrumentation <a id="ExperimentalPeerInstrumentation"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| service_mapping | object[] | unknown |  | | | | | | | | | | |

### ExperimentalPrometheusMetricExporter <a id="ExperimentalPrometheusMetricExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| host | string | Configure host.<br>If omitted or null, localhost is used.<br> |  | | | | | | | | | | |
| port | integer | Configure port.<br>If omitted or null, 9464 is used.<br> |  | | | | | | | | | | |
| with_resource_constant_labels | <a href="#IncludeExclude">IncludeExclude</a> | Configure Prometheus Exporter to add resource attributes as metrics attributes. |  | | | | | | | | | | |
| without_scope_info | boolean | Configure Prometheus Exporter to produce metrics without a scope info metric.<br>If omitted or null, false is used.<br> |  | | | | | | | | | | |
| without_type_suffix | boolean | Configure Prometheus Exporter to produce metrics without a type suffix.<br>If omitted or null, false is used.<br> |  | | | | | | | | | | |
| without_units | boolean | Configure Prometheus Exporter to produce metrics without a unit suffix or UNIT metadata.<br>If omitted or null, false is used.<br> |  | | | | | | | | | | |

### ExperimentalResourceDetection <a id="ExperimentalResourceDetection"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attributes | <a href="#IncludeExclude">IncludeExclude</a> | Configure attributes provided by resource detectors. |  | | | | | | | | | | |
| detectors | <a href="#ExperimentalResourceDetector">ExperimentalResourceDetector</a>[] | Configure resource detectors.<br>Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language. <br>If omitted or null, no resource detectors are enabled.<br> |  | | | | | | | | | | |

### ExperimentalResourceDetector <a id="ExperimentalResourceDetector"></a>

No properties

### ExperimentalTracerConfig <a id="ExperimentalTracerConfig"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| disabled | boolean | Configure if the tracer is enabled or not. |  | | | | | | | | | | |

### ExperimentalTracerConfigurator <a id="ExperimentalTracerConfigurator"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| default_config | <a href="#ExperimentalTracerConfig">ExperimentalTracerConfig</a> | Configure the default tracer config used there is no matching entry in .tracer_configurator/development.tracers. |  | | | | | | | | | | |
| tracers | <a href="#ExperimentalTracerMatcherAndConfig">ExperimentalTracerMatcherAndConfig</a>[] | Configure tracers. |  | | | | | | | | | | |

### ExperimentalTracerMatcherAndConfig <a id="ExperimentalTracerMatcherAndConfig"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| config | <a href="#ExperimentalTracerConfig">ExperimentalTracerConfig</a> | The tracer config. |  | | | | | | | | | | |
| name | string | Configure tracer names to match, evaluated as follows:<br><br> * If the tracer name exactly matches.<br> * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |  | | | | | | | | | | |

### ExplicitBucketHistogramAggregation <a id="ExplicitBucketHistogramAggregation"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| boundaries | number[] | Configure bucket boundaries.<br>If omitted, [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 10000] is used.<br> |  | | | | | | | | | | |
| record_min_max | boolean | Configure record min and max.<br>If omitted or null, true is used.<br> |  | | | | | | | | | | |

### ExporterDefaultHistogramAggregation <a id="ExporterDefaultHistogramAggregation"></a>

No properties

### ExporterTemporalityPreference <a id="ExporterTemporalityPreference"></a>

No properties

### IncludeExclude <a id="IncludeExclude"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| excluded | string[] | Configure list of attribute key patterns to exclude from resource detectors. Applies after .resource.detectors.attributes.included (i.e. excluded has higher priority than included).<br>Attribute keys from resource detectors are evaluated to match as follows:<br> * If the value of the attribute key exactly matches.<br> * If the value of the attribute key matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, .included attributes are included.<br> |  | | | | | | | | | | |
| included | string[] | Configure list of attribute key patterns to include from resource detectors.<br>Attribute keys from resource detectors are evaluated to match as follows:<br> * If the value of the attribute key exactly matches.<br> * If the value of the attribute key matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, all attributes are included.<br> |  | | | | | | | | | | |

### InstrumentType <a id="InstrumentType"></a>

No properties

### JaegerPropagator <a id="JaegerPropagator"></a>

No properties

### JaegerRemoteSampler <a id="JaegerRemoteSampler"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint | string | unknown |  | | | | | | | | | | |
| initial_sampler | <a href="#Sampler">Sampler</a> | unknown |  | | | | | | | | | | |
| interval | integer | unknown |  | | | | | | | | | | |

### LastValueAggregation <a id="LastValueAggregation"></a>

No properties

### LogRecordExporter <a id="LogRecordExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| console | <a href="#ConsoleExporter">ConsoleExporter</a> | Configure exporter to be console. |  | | | | | | | | | | |
| otlp_file/development | <a href="#ExperimentalOtlpFileExporter">ExperimentalOtlpFileExporter</a> | Configure exporter to be OTLP with file transport.<br>This type is in development and subject to breaking changes in minor versions.<br> |  | | | | | | | | | | |
| otlp_grpc | <a href="#OtlpGrpcExporter">OtlpGrpcExporter</a> | Configure exporter to be OTLP with gRPC transport. |  | | | | | | | | | | |
| otlp_http | <a href="#OtlpHttpExporter">OtlpHttpExporter</a> | Configure exporter to be OTLP with HTTP transport. |  | | | | | | | | | | |

### LogRecordLimits <a id="LogRecordLimits"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_count_limit | integer | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |  | | | | | | | | | | |
| attribute_value_length_limit | integer | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> |  | | | | | | | | | | |

### LogRecordProcessor <a id="LogRecordProcessor"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| batch | <a href="#BatchLogRecordProcessor">BatchLogRecordProcessor</a> | Configure a batch log record processor. |  | | | | | | | | | | |
| simple | <a href="#SimpleLogRecordProcessor">SimpleLogRecordProcessor</a> | Configure a simple log record processor. |  | | | | | | | | | | |

### LoggerProvider <a id="LoggerProvider"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| limits | <a href="#LogRecordLimits">LogRecordLimits</a> | Configure log record limits. See also attribute_limits. |  | | | | | | | | | | |
| logger_configurator/development | <a href="#ExperimentalLoggerConfigurator">ExperimentalLoggerConfigurator</a> | Configure loggers.<br>This type is in development and subject to breaking changes in minor versions.<br> |  | | | | | | | | | | |
| processors | <a href="#LogRecordProcessor">LogRecordProcessor</a>[] | Configure log record processors. |  | | | | | | | | | | |

### MeterProvider <a id="MeterProvider"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| exemplar_filter | <a href="#ExemplarFilter">ExemplarFilter</a> | Configure the exemplar filter. <br>Values include: trace_based, always_on, always_off. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#metrics-sdk-configuration.<br>If omitted or null, trace_based is used.<br> |  | | | | | | | | | | |
| meter_configurator/development | <a href="#ExperimentalMeterConfigurator">ExperimentalMeterConfigurator</a> | Configure meters.<br>This type is in development and subject to breaking changes in minor versions.<br> |  | | | | | | | | | | |
| readers | <a href="#MetricReader">MetricReader</a>[] | Configure metric readers. |  | | | | | | | | | | |
| views | <a href="#View">View</a>[] | Configure views. <br>Each view has a selector which determines the instrument(s) it applies to, and a configuration for the resulting stream(s).<br> |  | | | | | | | | | | |

### MetricProducer <a id="MetricProducer"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| opencensus | <a href="#OpenCensusMetricProducer">OpenCensusMetricProducer</a> | Configure metric producer to be opencensus. |  | | | | | | | | | | |

### MetricReader <a id="MetricReader"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| periodic | <a href="#PeriodicMetricReader">PeriodicMetricReader</a> | Configure a periodic metric reader. |  | | | | | | | | | | |
| pull | <a href="#PullMetricReader">PullMetricReader</a> | Configure a pull based metric reader. |  | | | | | | | | | | |

### NameStringValuePair <a id="NameStringValuePair"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| name | string | unknown |  | | | | | | | | | | |
| value | string | unknown |  | | | | | | | | | | |

### OpenCensusMetricProducer <a id="OpenCensusMetricProducer"></a>

No properties

### OpenTelemetryConfiguration <a id="OpenTelemetryConfiguration"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_limits | <a href="#AttributeLimits">AttributeLimits</a> | Configure general attribute limits. See also tracer_provider.limits, logger_provider.limits. |  | | | | | | | | | | |
| disabled | boolean | Configure if the SDK is disabled or not.<br>If omitted or null, false is used.<br> |  | | | | | | | | | | |
| file_format | string | The file format version.<br>The yaml format is documented at<br>https://github.com/open-telemetry/opentelemetry-configuration/tree/main/schema<br> |  | | | | | | | | | | |
| instrumentation/development | <a href="#ExperimentalInstrumentation">ExperimentalInstrumentation</a> | Configure instrumentation.<br>This type is in development and subject to breaking changes in minor versions.<br> |  | | | | | | | | | | |
| log_level | string | Configure the log level of the internal logger used by the SDK.<br>If omitted, info is used.<br> |  | | | | | | | | | | |
| logger_provider | <a href="#LoggerProvider">LoggerProvider</a> | Configure logger provider.<br>If omitted, a noop logger provider is used.<br> |  | | | | | | | | | | |
| meter_provider | <a href="#MeterProvider">MeterProvider</a> | Configure meter provider.<br>If omitted, a noop meter provider is used.<br> |  | | | | | | | | | | |
| propagator | <a href="#Propagator">Propagator</a> | Configure text map context propagators.<br>If omitted, a noop propagator is used.<br> |  | | | | | | | | | | |
| resource | <a href="#Resource">Resource</a> | Configure resource for all signals.<br>If omitted, the default resource is used.<br> |  | | | | | | | | | | |
| tracer_provider | <a href="#TracerProvider">TracerProvider</a> | Configure tracer provider.<br>If omitted, a noop tracer provider is used.<br> |  | | | | | | | | | | |

### OpenTracingPropagator <a id="OpenTracingPropagator"></a>

No properties

### OtlpGrpcExporter <a id="OtlpGrpcExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| certificate_file | string | unknown |  | | | | | | | | | | |
| client_certificate_file | string | unknown |  | | | | | | | | | | |
| client_key_file | string | unknown |  | | | | | | | | | | |
| compression | string | unknown |  | | | | | | | | | | |
| endpoint | string | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> |  | | | | | | | | | | |
| headers | <a href="#NameStringValuePair">NameStringValuePair</a>[] | unknown |  | | | | | | | | | | |
| headers_list | string | unknown |  | | | | | | | | | | |
| insecure | boolean | Configure client transport security for the exporter's connection. <br>Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.<br>If omitted or null, false is used.<br> |  | | | | | | | | | | |
| timeout | integer | unknown |  | | | | | | | | | | |

### OtlpGrpcMetricExporter <a id="OtlpGrpcMetricExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| certificate_file | string | unknown |  | | | | | | | | | | |
| client_certificate_file | string | unknown |  | | | | | | | | | | |
| client_key_file | string | unknown |  | | | | | | | | | | |
| compression | string | unknown |  | | | | | | | | | | |
| default_histogram_aggregation | <a href="#ExporterDefaultHistogramAggregation">ExporterDefaultHistogramAggregation</a> | unknown |  | | | | | | | | | | |
| endpoint | string | unknown |  | | | | | | | | | | |
| headers | <a href="#NameStringValuePair">NameStringValuePair</a>[] | unknown |  | | | | | | | | | | |
| headers_list | string | unknown |  | | | | | | | | | | |
| insecure | boolean | unknown |  | | | | | | | | | | |
| temporality_preference | <a href="#ExporterTemporalityPreference">ExporterTemporalityPreference</a> | unknown |  | | | | | | | | | | |
| timeout | integer | unknown |  | | | | | | | | | | |

### OtlpHttpEncoding <a id="OtlpHttpEncoding"></a>

No properties

### OtlpHttpExporter <a id="OtlpHttpExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| certificate_file | string | unknown |  | | | | | | | | | | |
| client_certificate_file | string | unknown |  | | | | | | | | | | |
| client_key_file | string | unknown |  | | | | | | | | | | |
| compression | string | unknown |  | | | | | | | | | | |
| encoding | <a href="#OtlpHttpEncoding">OtlpHttpEncoding</a> | Configure the encoding used for messages. <br>Values include: protobuf, json. Implementations may not support json.<br>If omitted or null, protobuf is used.<br> |  | | | | | | | | | | |
| endpoint | string | unknown |  | | | | | | | | | | |
| headers | <a href="#NameStringValuePair">NameStringValuePair</a>[] | unknown |  | | | | | | | | | | |
| headers_list | string | unknown |  | | | | | | | | | | |
| timeout | integer | unknown |  | | | | | | | | | | |

### OtlpHttpMetricExporter <a id="OtlpHttpMetricExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| certificate_file | string | unknown |  | | | | | | | | | | |
| client_certificate_file | string | unknown |  | | | | | | | | | | |
| client_key_file | string | unknown |  | | | | | | | | | | |
| compression | string | unknown |  | | | | | | | | | | |
| default_histogram_aggregation | <a href="#ExporterDefaultHistogramAggregation">ExporterDefaultHistogramAggregation</a> | unknown |  | | | | | | | | | | |
| encoding | <a href="#OtlpHttpEncoding">OtlpHttpEncoding</a> | unknown |  | | | | | | | | | | |
| endpoint | string | Configure endpoint, including the metric specific path.<br>If omitted or null, http://localhost:4318/v1/metrics is used.<br> |  | | | | | | | | | | |
| headers | <a href="#NameStringValuePair">NameStringValuePair</a>[] | unknown |  | | | | | | | | | | |
| headers_list | string | unknown |  | | | | | | | | | | |
| temporality_preference | <a href="#ExporterTemporalityPreference">ExporterTemporalityPreference</a> | unknown |  | | | | | | | | | | |
| timeout | integer | unknown |  | | | | | | | | | | |

### ParentBasedSampler <a id="ParentBasedSampler"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| local_parent_not_sampled | <a href="#Sampler">Sampler</a> | unknown |  | | | | | | | | | | |
| local_parent_sampled | <a href="#Sampler">Sampler</a> | unknown |  | | | | | | | | | | |
| remote_parent_not_sampled | <a href="#Sampler">Sampler</a> | unknown |  | | | | | | | | | | |
| remote_parent_sampled | <a href="#Sampler">Sampler</a> | unknown |  | | | | | | | | | | |
| root | <a href="#Sampler">Sampler</a> | unknown |  | | | | | | | | | | |

### PeriodicMetricReader <a id="PeriodicMetricReader"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cardinality_limits | <a href="#CardinalityLimits">CardinalityLimits</a> | Configure cardinality limits. |  | | | | | | | | | | |
| exporter | <a href="#PushMetricExporter">PushMetricExporter</a> | Configure exporter. |  | | | | | | | | | | |
| interval | integer | Configure delay interval (in milliseconds) between start of two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 60000 is used.<br> |  | | | | | | | | | | |
| producers | <a href="#MetricProducer">MetricProducer</a>[] | Configure metric producers. |  | | | | | | | | | | |
| timeout | integer | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> |  | | | | | | | | | | |

### Propagator <a id="Propagator"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| composite | <a href="#TextMapPropagator">TextMapPropagator</a>[] | Configure the propagators in the composite text map propagator. Entries from .composite_list are appended to the list here with duplicates filtered out.<br>Built-in propagator keys include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party keys include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> |  | | | | | | | | | | |
| composite_list | string | Configure the propagators in the composite text map propagator. Entries are appended to .composite with duplicates filtered out.<br>The value is a comma separated list of propagator identifiers matching the format of OTEL_PROPAGATORS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>Built-in propagator identifiers include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party identifiers include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> |  | | | | | | | | | | |

### PullMetricExporter <a id="PullMetricExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| prometheus/development | <a href="#ExperimentalPrometheusMetricExporter">ExperimentalPrometheusMetricExporter</a> | unknown |  | | | | | | | | | | |

### PullMetricReader <a id="PullMetricReader"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cardinality_limits | <a href="#CardinalityLimits">CardinalityLimits</a> | Configure cardinality limits. |  | | | | | | | | | | |
| exporter | <a href="#PullMetricExporter">PullMetricExporter</a> | Configure exporter. |  | | | | | | | | | | |
| producers | <a href="#MetricProducer">MetricProducer</a>[] | Configure metric producers. |  | | | | | | | | | | |

### PushMetricExporter <a id="PushMetricExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| console | <a href="#ConsoleExporter">ConsoleExporter</a> | unknown |  | | | | | | | | | | |
| otlp_file/development | <a href="#ExperimentalOtlpFileMetricExporter">ExperimentalOtlpFileMetricExporter</a> | unknown |  | | | | | | | | | | |
| otlp_grpc | <a href="#OtlpGrpcMetricExporter">OtlpGrpcMetricExporter</a> | unknown |  | | | | | | | | | | |
| otlp_http | <a href="#OtlpHttpMetricExporter">OtlpHttpMetricExporter</a> | unknown |  | | | | | | | | | | |

### Resource <a id="Resource"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attributes | <a href="#AttributeNameValue">AttributeNameValue</a>[] | Configure resource attributes. Entries have higher priority than entries from .resource.attributes_list.<br>Entries must contain .name and .value, and may optionally include .type. If an entry's .type omitted or null, string is used.<br>The .value's type must match the .type. Values for .type include: string, bool, int, double, string_array, bool_array, int_array, double_array.<br> |  | | | | | | | | | | |
| attributes_list | string | Configure resource attributes. Entries have lower priority than entries from .resource.attributes.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_RESOURCE_ATTRIBUTES. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>If omitted or null, no resource attributes are added.<br> |  | | | | | | | | | | |
| detection/development | <a href="#ExperimentalResourceDetection">ExperimentalResourceDetection</a> | Configure resource detection.<br>This type is in development and subject to breaking changes in minor versions.<br>If omitted or null, resource detection is disabled.<br> |  | | | | | | | | | | |
| schema_url | string | Configure resource schema URL.<br>If omitted or null, no schema URL is used.<br> |  | | | | | | | | | | |

### Sampler <a id="Sampler"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| always_off | <a href="#AlwaysOffSampler">AlwaysOffSampler</a> | Configure sampler to be always_off. |  | | | | | | | | | | |
| always_on | <a href="#AlwaysOnSampler">AlwaysOnSampler</a> | Configure sampler to be always_on. |  | | | | | | | | | | |
| jaeger_remote | <a href="#JaegerRemoteSampler">JaegerRemoteSampler</a> | unknown |  | | | | | | | | | | |
| parent_based | <a href="#ParentBasedSampler">ParentBasedSampler</a> | Configure sampler to be parent_based. |  | | | | | | | | | | |
| trace_id_ratio_based | <a href="#TraceIdRatioBasedSampler">TraceIdRatioBasedSampler</a> | Configure sampler to be trace_id_ratio_based. |  | | | | | | | | | | |

### SimpleLogRecordProcessor <a id="SimpleLogRecordProcessor"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| exporter | <a href="#LogRecordExporter">LogRecordExporter</a> | Configure exporter. |  | | | | | | | | | | |

### SimpleSpanProcessor <a id="SimpleSpanProcessor"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| exporter | <a href="#SpanExporter">SpanExporter</a> | Configure exporter. |  | | | | | | | | | | |

### SpanExporter <a id="SpanExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| console | <a href="#ConsoleExporter">ConsoleExporter</a> | Configure exporter to be console. |  | | | | | | | | | | |
| otlp_file/development | <a href="#ExperimentalOtlpFileExporter">ExperimentalOtlpFileExporter</a> | Configure exporter to be OTLP with file transport.<br>This type is in development and subject to breaking changes in minor versions.<br> |  | | | | | | | | | | |
| otlp_grpc | <a href="#OtlpGrpcExporter">OtlpGrpcExporter</a> | Configure exporter to be OTLP with gRPC transport. |  | | | | | | | | | | |
| otlp_http | <a href="#OtlpHttpExporter">OtlpHttpExporter</a> | Configure exporter to be OTLP with HTTP transport. |  | | | | | | | | | | |
| zipkin | <a href="#ZipkinSpanExporter">ZipkinSpanExporter</a> | Configure exporter to be zipkin. |  | | | | | | | | | | |

### SpanLimits <a id="SpanLimits"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_count_limit | integer | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |  | | | | | | | | | | |
| attribute_value_length_limit | integer | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> |  | | | | | | | | | | |
| event_attribute_count_limit | integer | Configure max attributes per span event. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |  | | | | | | | | | | |
| event_count_limit | integer | Configure max span event count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |  | | | | | | | | | | |
| link_attribute_count_limit | integer | Configure max attributes per span link. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |  | | | | | | | | | | |
| link_count_limit | integer | Configure max span link count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |  | | | | | | | | | | |

### SpanProcessor <a id="SpanProcessor"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| batch | <a href="#BatchSpanProcessor">BatchSpanProcessor</a> | Configure a batch span processor. |  | | | | | | | | | | |
| simple | <a href="#SimpleSpanProcessor">SimpleSpanProcessor</a> | Configure a simple span processor. |  | | | | | | | | | | |

### SumAggregation <a id="SumAggregation"></a>

No properties

### TextMapPropagator <a id="TextMapPropagator"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| b3 | <a href="#B3Propagator">B3Propagator</a> | Include the zipkin b3 propagator. |  | | | | | | | | | | |
| b3multi | <a href="#B3MultiPropagator">B3MultiPropagator</a> | Include the zipkin b3 multi propagator. |  | | | | | | | | | | |
| baggage | <a href="#BaggagePropagator">BaggagePropagator</a> | Include the w3c baggage propagator. |  | | | | | | | | | | |
| jaeger | <a href="#JaegerPropagator">JaegerPropagator</a> | Include the jaeger propagator. |  | | | | | | | | | | |
| ottrace | <a href="#OpenTracingPropagator">OpenTracingPropagator</a> | Include the opentracing propagator. |  | | | | | | | | | | |
| tracecontext | <a href="#TraceContextPropagator">TraceContextPropagator</a> | Include the w3c trace context propagator. |  | | | | | | | | | | |

### TraceContextPropagator <a id="TraceContextPropagator"></a>

No properties

### TraceIdRatioBasedSampler <a id="TraceIdRatioBasedSampler"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ratio | number | unknown |  | | | | | | | | | | |

### TracerProvider <a id="TracerProvider"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| limits | <a href="#SpanLimits">SpanLimits</a> | Configure span limits. See also attribute_limits. |  | | | | | | | | | | |
| processors | <a href="#SpanProcessor">SpanProcessor</a>[] | Configure span processors. |  | | | | | | | | | | |
| sampler | <a href="#Sampler">Sampler</a> | Configure the sampler.<br>If omitted, parent based sampler with a root of always_on is used.<br> |  | | | | | | | | | | |
| tracer_configurator/development | <a href="#ExperimentalTracerConfigurator">ExperimentalTracerConfigurator</a> | Configure tracers.<br>This type is in development and subject to breaking changes in minor versions.<br> |  | | | | | | | | | | |

### View <a id="View"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| selector | <a href="#ViewSelector">ViewSelector</a> | Configure view selector. <br>Selection criteria is additive as described in https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#instrument-selection-criteria.<br> |  | | | | | | | | | | |
| stream | <a href="#ViewStream">ViewStream</a> | Configure view stream. |  | | | | | | | | | | |

### ViewSelector <a id="ViewSelector"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| instrument_name | string | Configure instrument name selection criteria.<br>If omitted or null, all instrument names match.<br> |  | | | | | | | | | | |
| instrument_type | <a href="#InstrumentType">InstrumentType</a> | Configure instrument type selection criteria.<br>Values include: counter, gauge, histogram, observable_counter, observable_gauge, observable_up_down_counter, up_down_counter.<br>If omitted or null, all instrument types match.<br> |  | | | | | | | | | | |
| meter_name | string | Configure meter name selection criteria.<br>If omitted or null, all meter names match.<br> |  | | | | | | | | | | |
| meter_schema_url | string | Configure meter schema url selection criteria.<br>If omitted or null, all meter schema URLs match.<br> |  | | | | | | | | | | |
| meter_version | string | Configure meter version selection criteria.<br>If omitted or null, all meter versions match.<br> |  | | | | | | | | | | |
| unit | string | Configure the instrument unit selection criteria.<br>If omitted or null, all instrument units match.<br> |  | | | | | | | | | | |

### ViewStream <a id="ViewStream"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| aggregation | <a href="#Aggregation">Aggregation</a> | Configure aggregation of the resulting stream(s). <br>Values include: default, drop, explicit_bucket_histogram, base2_exponential_bucket_histogram, last_value, sum. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#aggregation.<br>If omitted, default is used.<br> |  | | | | | | | | | | |
| aggregation_cardinality_limit | integer | Configure the aggregation cardinality limit.<br>If omitted or null, the metric reader's default cardinality limit is used.<br> |  | | | | | | | | | | |
| attribute_keys | <a href="#IncludeExclude">IncludeExclude</a> | Configure attribute keys retained in the resulting stream(s).<br> |  | | | | | | | | | | |
| description | string | Configure metric description of the resulting stream(s).<br>If omitted or null, the instrument's origin description is used.<br> |  | | | | | | | | | | |
| name | string | Configure metric name of the resulting stream(s).<br>If omitted or null, the instrument's original name is used.<br> |  | | | | | | | | | | |

### ZipkinSpanExporter <a id="ZipkinSpanExporter"></a>

| Property | Type | Description |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint | string | Configure endpoint.<br>If omitted or null, http://localhost:9411/api/v2/spans is used.<br> |  | | | | | | | | | | |
| timeout | integer | Configure max time (in milliseconds) to wait for each export. <br>Value must be non-negative. A value of 0 indicates indefinite.<br>If omitted or null, 10000 is used.<br> |  | | | | | | | | | | |

