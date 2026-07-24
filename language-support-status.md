<!-- This file is generated using "make generate-markdown". Do not edit directly. -->

# Language Support Status <a id="language-support-status"></a>

This page provides comprehensive language implementation status for each type in the declarative configuration schema. For type definitions and descriptions, see the [schema types reference](https://opentelemetry.io/docs/specs/otel-config/types/).

* [cpp](#cpp)
* [go](#go)
* [java](#java)
* [js](#js)
* [php](#php)
* [python](#python)

## cpp <a id="cpp"></a>

Latest supported file format: `1.0.0`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| `Aggregation` | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| `AlwaysOffSampler` | supported |  |  |
| `AlwaysOnSampler` | supported |  |  |
| `AttributeLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `AttributeNameValue` | supported |  | * `name`: supported<br>* `type`: supported<br>* `value`: supported<br> |
| `AttributeType` | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| `B3MultiPropagator` | supported |  |  |
| `B3Propagator` | supported |  |  |
| `BaggagePropagator` | supported |  |  |
| `Base2ExponentialBucketHistogramAggregation` | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: supported<br> |
| `BatchLogRecordProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `BatchSpanProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `CardinalityLimits` | ignored |  | * `counter`: ignored<br>* `default`: ignored<br>* `gauge`: ignored<br>* `histogram`: ignored<br>* `observable_counter`: ignored<br>* `observable_gauge`: ignored<br>* `observable_up_down_counter`: ignored<br>* `up_down_counter`: ignored<br> |
| `ConsoleExporter` | supported |  |  |
| `ConsoleMetricExporter` | supported |  | * `default_histogram_aggregation`: supported<br>* `temporality_preference`: supported<br> |
| `DefaultAggregation` | supported |  |  |
| `Distribution` | supported |  |  |
| `DropAggregation` | supported |  |  |
| `ExemplarFilter` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `trace_based`: supported<br> |
| `ExplicitBucketHistogramAggregation` | supported |  | * `boundaries`: supported<br>* `record_min_max`: supported<br> |
| `ExporterDefaultHistogramAggregation` | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| `ExporterTemporalityPreference` | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| `GrpcTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `insecure`: supported<br>* `key_file`: supported<br> |
| `HttpTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `key_file`: supported<br> |
| `IdGenerator` | unknown |  | * `random`: unknown<br> |
| `IncludeExclude` | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| `InstrumentType` | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| `LastValueAggregation` | supported |  |  |
| `LoggerProvider` | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: supported<br> |
| `LogRecordExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `LogRecordLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `LogRecordProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br>* `event_to_span_event_bridge/development`: unknown<br> |
| `MeterProvider` | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| `MetricProducer` | supported |  | * `opencensus`: supported<br> |
| `MetricReader` | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| `NameStringValuePair` | supported |  | * `name`: supported<br>* `value`: supported<br> |
| `OpenCensusMetricProducer` | supported |  |  |
| `OpenTelemetryConfiguration` | supported |  | * `attribute_limits`: supported<br>* `disabled`: supported<br>* `distribution`: supported<br>* `file_format`: supported<br>* `log_level`: supported<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `resource`: supported<br>* `tracer_provider`: supported<br>* `instrumentation/development`: supported<br> |
| `OtlpGrpcExporter` | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpGrpcMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpEncoding` | supported |  | * `json`: supported<br>* `protobuf`: supported<br> |
| `OtlpHttpExporter` | supported |  | * `compression`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `ParentBasedSampler` | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| `PeriodicMetricReader` | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `interval`: supported<br>* `producers`: supported<br>* `timeout`: supported<br>* `max_export_batch_size/development`: not_implemented<br> |
| `Propagator` | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| `PullMetricExporter` | supported |  | * `prometheus/development`: supported<br> |
| `PullMetricReader` | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `producers`: supported<br> |
| `PushMetricExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `RandomIdGenerator` | unknown |  |  |
| `Resource` | supported |  | * `attributes`: supported<br>* `attributes_list`: supported<br>* `schema_url`: supported<br>* `detection/development`: supported<br> |
| `Sampler` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: supported<br>* `jaeger_remote/development`: supported<br>* `probability/development`: supported<br> |
| `SeverityNumber` | supported |  | * `debug`: supported<br>* `debug2`: supported<br>* `debug3`: supported<br>* `debug4`: supported<br>* `error`: supported<br>* `error2`: supported<br>* `error3`: supported<br>* `error4`: supported<br>* `fatal`: supported<br>* `fatal2`: supported<br>* `fatal3`: supported<br>* `fatal4`: supported<br>* `info`: supported<br>* `info2`: supported<br>* `info3`: supported<br>* `info4`: supported<br>* `trace`: supported<br>* `trace2`: supported<br>* `trace3`: supported<br>* `trace4`: supported<br>* `warn`: supported<br>* `warn2`: supported<br>* `warn3`: supported<br>* `warn4`: supported<br> |
| `SimpleLogRecordProcessor` | supported |  | * `exporter`: supported<br> |
| `SimpleSpanProcessor` | supported |  | * `exporter`: supported<br> |
| `SpanExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `SpanKind` | not_implemented |  | * `client`: not_implemented<br>* `consumer`: not_implemented<br>* `internal`: not_implemented<br>* `producer`: not_implemented<br>* `server`: not_implemented<br> |
| `SpanLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br>* `link_count_limit`: supported<br> |
| `SpanProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| `SumAggregation` | supported |  |  |
| `TextMapPropagator` | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `tracecontext`: supported<br> |
| `TraceContextPropagator` | supported |  |  |
| `TraceIdRatioBasedSampler` | supported |  | * `ratio`: supported<br> |
| `TracerProvider` | supported |  | * `id_generator`: supported<br>* `limits`: supported<br>* `processors`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| `View` | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| `ViewSelector` | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `meter_name`: supported<br>* `meter_schema_url`: supported<br>* `meter_version`: supported<br>* `unit`: supported<br> |
| `ViewStream` | supported |  | * `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br>* `description`: supported<br>* `name`: supported<br> |
| `ExperimentalCodeInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalComposableAlwaysOffSampler` | ignored |  |  |
| `ExperimentalComposableAlwaysOnSampler` | ignored |  |  |
| `ExperimentalComposableParentThresholdSampler` | ignored |  | * `root`: ignored<br> |
| `ExperimentalComposableProbabilitySampler` | ignored |  | * `ratio`: ignored<br> |
| `ExperimentalComposableRuleBasedSampler` | ignored |  | * `rules`: ignored<br> |
| `ExperimentalComposableRuleBasedSamplerRule` | ignored |  | * `attribute_patterns`: ignored<br>* `attribute_values`: ignored<br>* `parent`: ignored<br>* `sampler`: ignored<br>* `span_kinds`: ignored<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributePatterns` | ignored |  | * `excluded`: ignored<br>* `included`: ignored<br>* `key`: ignored<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributeValues` | ignored |  | * `key`: ignored<br>* `values`: ignored<br> |
| `ExperimentalComposableSampler` | ignored |  | * `always_off`: ignored<br>* `always_on`: ignored<br>* `parent_threshold`: ignored<br>* `probability`: ignored<br>* `rule_based`: ignored<br> |
| `ExperimentalContainerResourceDetector` | not_implemented |  |  |
| `ExperimentalDbInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalEventToSpanEventBridgeLogRecordProcessor` | not_implemented |  |  |
| `ExperimentalGenAiInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalGeneralInstrumentation` | not_applicable |  | * `code`: not_applicable<br>* `db`: not_applicable<br>* `gen_ai`: not_applicable<br>* `http`: not_applicable<br>* `messaging`: not_applicable<br>* `rpc`: not_applicable<br>* `sanitization`: not_applicable<br>* `stability_opt_in_list`: not_applicable<br> |
| `ExperimentalHostResourceDetector` | not_implemented |  |  |
| `ExperimentalHttpClientInstrumentation` | not_applicable |  | * `known_methods`: not_applicable<br>* `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| `ExperimentalHttpInstrumentation` | not_applicable |  | * `client`: not_applicable<br>* `semconv`: not_applicable<br>* `server`: not_applicable<br> |
| `ExperimentalHttpServerInstrumentation` | not_applicable |  | * `known_methods`: not_applicable<br>* `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| `ExperimentalInstrumentation` | not_applicable |  | * `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `general`: not_applicable<br>* `go`: not_applicable<br>* `java`: not_applicable<br>* `js`: not_applicable<br>* `php`: not_applicable<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| `ExperimentalJaegerRemoteSampler` | not_implemented |  | * `endpoint`: not_implemented<br>* `initial_sampler`: not_implemented<br>* `interval`: not_implemented<br> |
| `ExperimentalLanguageSpecificInstrumentation` | not_applicable |  |  |
| `ExperimentalLoggerConfig` | not_implemented |  | * `enabled`: not_implemented<br>* `minimum_severity`: not_implemented<br>* `trace_based`: not_implemented<br> |
| `ExperimentalLoggerConfigurator` | supported |  | * `default_config`: supported<br>* `loggers`: supported<br> |
| `ExperimentalLoggerMatcherAndConfig` | supported |  | * `config`: supported<br>* `name`: supported<br> |
| `ExperimentalMessagingInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalMeterConfig` | supported |  | * `enabled`: supported<br> |
| `ExperimentalMeterConfigurator` | supported |  | * `default_config`: supported<br>* `meters`: supported<br> |
| `ExperimentalMeterMatcherAndConfig` | supported |  | * `config`: supported<br>* `name`: supported<br> |
| `ExperimentalOtlpFileExporter` | supported |  | * `output_stream`: supported<br> |
| `ExperimentalOtlpFileMetricExporter` | supported |  | * `default_histogram_aggregation`: supported<br>* `output_stream`: supported<br>* `temporality_preference`: supported<br> |
| `ExperimentalProbabilitySampler` | ignored |  | * `ratio`: ignored<br> |
| `ExperimentalProcessResourceDetector` | not_implemented |  |  |
| `ExperimentalPrometheusMetricExporter` | supported |  | * `host`: supported<br>* `port`: supported<br>* `resource_constant_labels`: supported<br>* `scope_info_enabled`: supported<br>* `translation_strategy`: supported<br>* `target_info_enabled/development`: supported<br> |
| `ExperimentalPrometheusTranslationStrategy` | supported |  | * `no_translation/development`: not_implemented<br>* `no_utf8_escaping_with_suffixes/development`: not_implemented<br>* `underscore_escaping_with_suffixes`: supported<br>* `underscore_escaping_without_suffixes/development`: supported<br> |
| `ExperimentalResourceDetection` | not_implemented |  | * `attributes`: not_implemented<br>* `detectors`: not_implemented<br> |
| `ExperimentalResourceDetector` | not_implemented |  | * `container`: not_implemented<br>* `host`: not_implemented<br>* `process`: not_implemented<br>* `service`: not_implemented<br> |
| `ExperimentalRpcInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalSanitization` | unknown |  | * `url`: unknown<br> |
| `ExperimentalSemconvConfig` | unknown |  | * `dual_emit`: unknown<br>* `experimental`: unknown<br>* `version`: unknown<br> |
| `ExperimentalServiceResourceDetector` | not_implemented |  |  |
| `ExperimentalSpanParent` | not_implemented |  | * `local`: not_implemented<br>* `none`: not_implemented<br>* `remote`: not_implemented<br> |
| `ExperimentalTracerConfig` | supported |  | * `enabled`: supported<br> |
| `ExperimentalTracerConfigurator` | supported |  | * `default_config`: supported<br>* `tracers`: supported<br> |
| `ExperimentalTracerMatcherAndConfig` | supported |  | * `config`: supported<br>* `name`: supported<br> |
| `ExperimentalUrlSanitization` | unknown |  | * `sensitive_query_parameters`: unknown<br> |


## go <a id="go"></a>

Latest supported file format: `1.0.0`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| `Aggregation` | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| `AlwaysOffSampler` | supported |  |  |
| `AlwaysOnSampler` | supported |  |  |
| `AttributeLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `AttributeNameValue` | supported |  | * `name`: supported<br>* `type`: supported<br>* `value`: supported<br> |
| `AttributeType` | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| `B3MultiPropagator` | supported |  |  |
| `B3Propagator` | supported |  |  |
| `BaggagePropagator` | supported |  |  |
| `Base2ExponentialBucketHistogramAggregation` | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| `BatchLogRecordProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `BatchSpanProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `CardinalityLimits` | unknown |  | * `counter`: unknown<br>* `default`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| `ConsoleExporter` | supported |  |  |
| `ConsoleMetricExporter` | supported |  | * `default_histogram_aggregation`: not_implemented<br>* `temporality_preference`: not_implemented<br> |
| `DefaultAggregation` | unknown |  |  |
| `Distribution` | unknown |  |  |
| `DropAggregation` | unknown |  |  |
| `ExemplarFilter` | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| `ExplicitBucketHistogramAggregation` | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| `ExporterDefaultHistogramAggregation` | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| `ExporterTemporalityPreference` | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| `GrpcTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `insecure`: supported<br>* `key_file`: supported<br> |
| `HttpTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `key_file`: supported<br> |
| `IdGenerator` | unknown |  | * `random`: unknown<br> |
| `IncludeExclude` | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| `InstrumentType` | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| `LastValueAggregation` | supported |  |  |
| `LoggerProvider` | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: not_implemented<br> |
| `LogRecordExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: not_implemented<br> |
| `LogRecordLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `LogRecordProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br>* `event_to_span_event_bridge/development`: unknown<br> |
| `MeterProvider` | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| `MetricProducer` | unknown |  | * `opencensus`: unknown<br> |
| `MetricReader` | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| `NameStringValuePair` | supported |  | * `name`: supported<br>* `value`: supported<br> |
| `OpenCensusMetricProducer` | unknown |  |  |
| `OpenTelemetryConfiguration` | unknown |  | * `attribute_limits`: unknown<br>* `disabled`: unknown<br>* `distribution`: unknown<br>* `file_format`: unknown<br>* `log_level`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `resource`: unknown<br>* `tracer_provider`: unknown<br>* `instrumentation/development`: unknown<br> |
| `OtlpGrpcExporter` | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpGrpcMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpEncoding` | not_implemented |  | * `json`: not_implemented<br>* `protobuf`: not_implemented<br> |
| `OtlpHttpExporter` | supported |  | * `compression`: supported<br>* `encoding`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: not_implemented<br>* `encoding`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `ParentBasedSampler` | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| `PeriodicMetricReader` | supported |  | * `cardinality_limits`: not_implemented<br>* `exporter`: supported<br>* `interval`: supported<br>* `producers`: not_implemented<br>* `timeout`: supported<br>* `max_export_batch_size/development`: not_implemented<br> |
| `Propagator` | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| `PullMetricExporter` | unknown |  | * `prometheus/development`: unknown<br> |
| `PullMetricReader` | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br> |
| `PushMetricExporter` | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| `RandomIdGenerator` | unknown |  |  |
| `Resource` | unknown |  | * `attributes`: unknown<br>* `attributes_list`: unknown<br>* `schema_url`: unknown<br>* `detection/development`: unknown<br> |
| `Sampler` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: not_implemented<br>* `jaeger_remote/development`: not_implemented<br>* `probability/development`: not_implemented<br> |
| `SeverityNumber` | unknown |  | * `debug`: unknown<br>* `debug2`: unknown<br>* `debug3`: unknown<br>* `debug4`: unknown<br>* `error`: unknown<br>* `error2`: unknown<br>* `error3`: unknown<br>* `error4`: unknown<br>* `fatal`: unknown<br>* `fatal2`: unknown<br>* `fatal3`: unknown<br>* `fatal4`: unknown<br>* `info`: unknown<br>* `info2`: unknown<br>* `info3`: unknown<br>* `info4`: unknown<br>* `trace`: unknown<br>* `trace2`: unknown<br>* `trace3`: unknown<br>* `trace4`: unknown<br>* `warn`: unknown<br>* `warn2`: unknown<br>* `warn3`: unknown<br>* `warn4`: unknown<br> |
| `SimpleLogRecordProcessor` | unknown |  | * `exporter`: unknown<br> |
| `SimpleSpanProcessor` | supported |  | * `exporter`: supported<br> |
| `SpanExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: not_implemented<br> |
| `SpanKind` | unknown |  | * `client`: unknown<br>* `consumer`: unknown<br>* `internal`: unknown<br>* `producer`: unknown<br>* `server`: unknown<br> |
| `SpanLimits` | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br>* `link_count_limit`: unknown<br> |
| `SpanProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| `SumAggregation` | unknown |  |  |
| `TextMapPropagator` | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `tracecontext`: supported<br> |
| `TraceContextPropagator` | supported |  |  |
| `TraceIdRatioBasedSampler` | supported |  | * `ratio`: supported<br> |
| `TracerProvider` | unknown |  | * `id_generator`: unknown<br>* `limits`: unknown<br>* `processors`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| `View` | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| `ViewSelector` | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `meter_name`: unknown<br>* `meter_schema_url`: unknown<br>* `meter_version`: unknown<br>* `unit`: unknown<br> |
| `ViewStream` | unknown |  | * `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br>* `description`: unknown<br>* `name`: unknown<br> |
| `ExperimentalCodeInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalComposableAlwaysOffSampler` | not_implemented |  |  |
| `ExperimentalComposableAlwaysOnSampler` | not_implemented |  |  |
| `ExperimentalComposableParentThresholdSampler` | not_implemented |  | * `root`: not_implemented<br> |
| `ExperimentalComposableProbabilitySampler` | not_implemented |  | * `ratio`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSampler` | not_implemented |  | * `rules`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSamplerRule` | not_implemented |  | * `attribute_patterns`: not_implemented<br>* `attribute_values`: not_implemented<br>* `parent`: not_implemented<br>* `sampler`: not_implemented<br>* `span_kinds`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributePatterns` | not_implemented |  | * `excluded`: not_implemented<br>* `included`: not_implemented<br>* `key`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributeValues` | not_implemented |  | * `key`: not_implemented<br>* `values`: not_implemented<br> |
| `ExperimentalComposableSampler` | not_implemented |  | * `always_off`: not_implemented<br>* `always_on`: not_implemented<br>* `parent_threshold`: not_implemented<br>* `probability`: not_implemented<br>* `rule_based`: not_implemented<br> |
| `ExperimentalContainerResourceDetector` | supported |  |  |
| `ExperimentalDbInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalEventToSpanEventBridgeLogRecordProcessor` | not_implemented |  |  |
| `ExperimentalGenAiInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalGeneralInstrumentation` | not_implemented |  | * `code`: not_implemented<br>* `db`: not_implemented<br>* `gen_ai`: not_implemented<br>* `http`: not_implemented<br>* `messaging`: not_implemented<br>* `rpc`: not_implemented<br>* `sanitization`: not_implemented<br>* `stability_opt_in_list`: not_implemented<br> |
| `ExperimentalHostResourceDetector` | supported |  |  |
| `ExperimentalHttpClientInstrumentation` | not_implemented |  | * `known_methods`: not_implemented<br>* `request_captured_headers`: not_implemented<br>* `response_captured_headers`: not_implemented<br> |
| `ExperimentalHttpInstrumentation` | not_implemented |  | * `client`: not_implemented<br>* `semconv`: not_implemented<br>* `server`: not_implemented<br> |
| `ExperimentalHttpServerInstrumentation` | not_implemented |  | * `known_methods`: not_implemented<br>* `request_captured_headers`: not_implemented<br>* `response_captured_headers`: not_implemented<br> |
| `ExperimentalInstrumentation` | not_implemented |  | * `cpp`: not_implemented<br>* `dotnet`: not_implemented<br>* `erlang`: not_implemented<br>* `general`: not_implemented<br>* `go`: not_implemented<br>* `java`: not_implemented<br>* `js`: not_implemented<br>* `php`: not_implemented<br>* `python`: not_implemented<br>* `ruby`: not_implemented<br>* `rust`: not_implemented<br>* `swift`: not_implemented<br> |
| `ExperimentalJaegerRemoteSampler` | not_implemented |  | * `endpoint`: not_implemented<br>* `initial_sampler`: not_implemented<br>* `interval`: not_implemented<br> |
| `ExperimentalLanguageSpecificInstrumentation` | not_implemented |  |  |
| `ExperimentalLoggerConfig` | unknown |  | * `enabled`: unknown<br>* `minimum_severity`: unknown<br>* `trace_based`: unknown<br> |
| `ExperimentalLoggerConfigurator` | not_implemented |  | * `default_config`: not_implemented<br>* `loggers`: not_implemented<br> |
| `ExperimentalLoggerMatcherAndConfig` | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| `ExperimentalMessagingInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalMeterConfig` | unknown |  | * `enabled`: unknown<br> |
| `ExperimentalMeterConfigurator` | not_implemented |  | * `default_config`: not_implemented<br>* `meters`: not_implemented<br> |
| `ExperimentalMeterMatcherAndConfig` | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| `ExperimentalOtlpFileExporter` | not_implemented |  | * `output_stream`: not_implemented<br> |
| `ExperimentalOtlpFileMetricExporter` | not_implemented |  | * `default_histogram_aggregation`: not_implemented<br>* `output_stream`: not_implemented<br>* `temporality_preference`: not_implemented<br> |
| `ExperimentalProbabilitySampler` | not_implemented |  | * `ratio`: not_implemented<br> |
| `ExperimentalProcessResourceDetector` | supported |  |  |
| `ExperimentalPrometheusMetricExporter` | supported |  | * `host`: supported<br>* `port`: supported<br>* `resource_constant_labels`: supported<br>* `scope_info_enabled`: supported<br>* `translation_strategy`: supported<br>* `target_info_enabled/development`: supported<br> |
| `ExperimentalPrometheusTranslationStrategy` | supported |  | * `no_translation/development`: supported<br>* `no_utf8_escaping_with_suffixes/development`: supported<br>* `underscore_escaping_with_suffixes`: supported<br>* `underscore_escaping_without_suffixes/development`: supported<br> |
| `ExperimentalResourceDetection` | supported |  | * `attributes`: supported<br>* `detectors`: supported<br> |
| `ExperimentalResourceDetector` | supported |  | * `container`: supported<br>* `host`: supported<br>* `process`: supported<br>* `service`: supported<br> |
| `ExperimentalRpcInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalSanitization` | unknown |  | * `url`: unknown<br> |
| `ExperimentalSemconvConfig` | unknown |  | * `dual_emit`: unknown<br>* `experimental`: unknown<br>* `version`: unknown<br> |
| `ExperimentalServiceResourceDetector` | supported |  |  |
| `ExperimentalSpanParent` | unknown |  | * `local`: unknown<br>* `none`: unknown<br>* `remote`: unknown<br> |
| `ExperimentalTracerConfig` | unknown |  | * `enabled`: unknown<br> |
| `ExperimentalTracerConfigurator` | not_implemented |  | * `default_config`: not_implemented<br>* `tracers`: not_implemented<br> |
| `ExperimentalTracerMatcherAndConfig` | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| `ExperimentalUrlSanitization` | unknown |  | * `sensitive_query_parameters`: unknown<br> |


## java <a id="java"></a>

Latest supported file format: `1.0.0-rc.3`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| `Aggregation` | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| `AlwaysOffSampler` | supported |  |  |
| `AlwaysOnSampler` | supported |  |  |
| `AttributeLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `AttributeNameValue` | supported |  | * `name`: supported<br>* `type`: supported<br>* `value`: supported<br> |
| `AttributeType` | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| `B3MultiPropagator` | supported |  |  |
| `B3Propagator` | supported |  |  |
| `BaggagePropagator` | supported |  |  |
| `Base2ExponentialBucketHistogramAggregation` | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: supported<br> |
| `BatchLogRecordProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `BatchSpanProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `CardinalityLimits` | supported |  | * `counter`: supported<br>* `default`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| `ConsoleExporter` | supported |  |  |
| `ConsoleMetricExporter` | supported |  | * `default_histogram_aggregation`: not_implemented<br>* `temporality_preference`: ignored<br> |
| `DefaultAggregation` | supported |  |  |
| `Distribution` | supported |  |  |
| `DropAggregation` | supported |  |  |
| `ExemplarFilter` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `trace_based`: supported<br> |
| `ExplicitBucketHistogramAggregation` | supported |  | * `boundaries`: supported<br>* `record_min_max`: supported<br> |
| `ExporterDefaultHistogramAggregation` | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| `ExporterTemporalityPreference` | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| `GrpcTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `insecure`: not_implemented<br>* `key_file`: supported<br> |
| `HttpTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `key_file`: supported<br> |
| `IdGenerator` | unknown |  | * `random`: unknown<br> |
| `IncludeExclude` | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| `InstrumentType` | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| `LastValueAggregation` | supported |  |  |
| `LoggerProvider` | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: supported<br> |
| `LogRecordExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `LogRecordLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `LogRecordProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br>* `event_to_span_event_bridge/development`: unknown<br> |
| `MeterProvider` | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| `MetricProducer` | ignored |  | * `opencensus`: ignored<br> |
| `MetricReader` | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| `NameStringValuePair` | supported |  | * `name`: supported<br>* `value`: supported<br> |
| `OpenCensusMetricProducer` | ignored |  |  |
| `OpenTelemetryConfiguration` | supported |  | * `attribute_limits`: supported<br>* `disabled`: supported<br>* `distribution`: supported<br>* `file_format`: supported<br>* `log_level`: not_implemented<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `resource`: supported<br>* `tracer_provider`: supported<br>* `instrumentation/development`: supported<br> |
| `OtlpGrpcExporter` | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpGrpcMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpEncoding` | not_implemented |  | * `json`: not_implemented<br>* `protobuf`: not_implemented<br> |
| `OtlpHttpExporter` | supported |  | * `compression`: supported<br>* `encoding`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `encoding`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `ParentBasedSampler` | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| `PeriodicMetricReader` | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `interval`: supported<br>* `producers`: not_implemented<br>* `timeout`: supported<br>* `max_export_batch_size/development`: not_implemented<br> |
| `Propagator` | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| `PullMetricExporter` | supported |  | * `prometheus/development`: supported<br> |
| `PullMetricReader` | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `producers`: not_implemented<br> |
| `PushMetricExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `RandomIdGenerator` | unknown |  |  |
| `Resource` | supported |  | * `attributes`: supported<br>* `attributes_list`: supported<br>* `schema_url`: supported<br>* `detection/development`: supported<br> |
| `Sampler` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: supported<br>* `jaeger_remote/development`: supported<br>* `probability/development`: supported<br> |
| `SeverityNumber` | supported |  | * `debug`: supported<br>* `debug2`: supported<br>* `debug3`: supported<br>* `debug4`: supported<br>* `error`: supported<br>* `error2`: supported<br>* `error3`: supported<br>* `error4`: supported<br>* `fatal`: supported<br>* `fatal2`: supported<br>* `fatal3`: supported<br>* `fatal4`: supported<br>* `info`: supported<br>* `info2`: supported<br>* `info3`: supported<br>* `info4`: supported<br>* `trace`: supported<br>* `trace2`: supported<br>* `trace3`: supported<br>* `trace4`: supported<br>* `warn`: supported<br>* `warn2`: supported<br>* `warn3`: supported<br>* `warn4`: supported<br> |
| `SimpleLogRecordProcessor` | supported |  | * `exporter`: supported<br> |
| `SimpleSpanProcessor` | supported |  | * `exporter`: supported<br> |
| `SpanExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `SpanKind` | supported |  | * `client`: supported<br>* `consumer`: supported<br>* `internal`: supported<br>* `producer`: supported<br>* `server`: supported<br> |
| `SpanLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br>* `link_count_limit`: supported<br> |
| `SpanProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| `SumAggregation` | supported |  |  |
| `TextMapPropagator` | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `tracecontext`: supported<br> |
| `TraceContextPropagator` | supported |  |  |
| `TraceIdRatioBasedSampler` | supported |  | * `ratio`: supported<br> |
| `TracerProvider` | supported |  | * `id_generator`: supported<br>* `limits`: supported<br>* `processors`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| `View` | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| `ViewSelector` | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `meter_name`: supported<br>* `meter_schema_url`: supported<br>* `meter_version`: supported<br>* `unit`: supported<br> |
| `ViewStream` | supported |  | * `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br>* `description`: supported<br>* `name`: supported<br> |
| `ExperimentalCodeInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalComposableAlwaysOffSampler` | supported |  |  |
| `ExperimentalComposableAlwaysOnSampler` | supported |  |  |
| `ExperimentalComposableParentThresholdSampler` | supported |  | * `root`: supported<br> |
| `ExperimentalComposableProbabilitySampler` | supported |  | * `ratio`: supported<br> |
| `ExperimentalComposableRuleBasedSampler` | supported |  | * `rules`: supported<br> |
| `ExperimentalComposableRuleBasedSamplerRule` | supported |  | * `attribute_patterns`: supported<br>* `attribute_values`: supported<br>* `parent`: supported<br>* `sampler`: supported<br>* `span_kinds`: supported<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributePatterns` | supported |  | * `excluded`: supported<br>* `included`: supported<br>* `key`: supported<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributeValues` | supported |  | * `key`: supported<br>* `values`: supported<br> |
| `ExperimentalComposableSampler` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_threshold`: supported<br>* `probability`: supported<br>* `rule_based`: supported<br> |
| `ExperimentalContainerResourceDetector` | supported |  |  |
| `ExperimentalDbInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalEventToSpanEventBridgeLogRecordProcessor` | supported |  |  |
| `ExperimentalGenAiInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalGeneralInstrumentation` | supported |  | * `code`: supported<br>* `db`: supported<br>* `gen_ai`: supported<br>* `http`: supported<br>* `messaging`: supported<br>* `rpc`: supported<br>* `sanitization`: supported<br>* `stability_opt_in_list`: supported<br> |
| `ExperimentalHostResourceDetector` | supported |  |  |
| `ExperimentalHttpClientInstrumentation` | supported |  | * `known_methods`: supported<br>* `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| `ExperimentalHttpInstrumentation` | supported |  | * `client`: supported<br>* `semconv`: supported<br>* `server`: supported<br> |
| `ExperimentalHttpServerInstrumentation` | supported |  | * `known_methods`: supported<br>* `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| `ExperimentalInstrumentation` | supported |  | * `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `general`: supported<br>* `go`: not_applicable<br>* `java`: supported<br>* `js`: not_applicable<br>* `php`: not_applicable<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| `ExperimentalJaegerRemoteSampler` | supported |  | * `endpoint`: supported<br>* `initial_sampler`: supported<br>* `interval`: supported<br> |
| `ExperimentalLanguageSpecificInstrumentation` | supported |  |  |
| `ExperimentalLoggerConfig` | supported |  | * `enabled`: supported<br>* `minimum_severity`: supported<br>* `trace_based`: supported<br> |
| `ExperimentalLoggerConfigurator` | supported |  | * `default_config`: supported<br>* `loggers`: supported<br> |
| `ExperimentalLoggerMatcherAndConfig` | supported |  | * `config`: supported<br>* `name`: supported<br> |
| `ExperimentalMessagingInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalMeterConfig` | supported |  | * `enabled`: supported<br> |
| `ExperimentalMeterConfigurator` | supported |  | * `default_config`: supported<br>* `meters`: supported<br> |
| `ExperimentalMeterMatcherAndConfig` | supported |  | * `config`: supported<br>* `name`: supported<br> |
| `ExperimentalOtlpFileExporter` | supported |  | * `output_stream`: not_implemented<br> |
| `ExperimentalOtlpFileMetricExporter` | supported |  | * `default_histogram_aggregation`: supported<br>* `output_stream`: not_implemented<br>* `temporality_preference`: supported<br> |
| `ExperimentalProbabilitySampler` | supported |  | * `ratio`: supported<br> |
| `ExperimentalProcessResourceDetector` | supported |  |  |
| `ExperimentalPrometheusMetricExporter` | supported |  | * `host`: supported<br>* `port`: supported<br>* `resource_constant_labels`: supported<br>* `scope_info_enabled`: supported<br>* `translation_strategy`: not_implemented<br>* `target_info_enabled/development`: supported<br> |
| `ExperimentalPrometheusTranslationStrategy` | not_implemented |  | * `no_translation/development`: not_implemented<br>* `no_utf8_escaping_with_suffixes/development`: not_implemented<br>* `underscore_escaping_with_suffixes`: not_implemented<br>* `underscore_escaping_without_suffixes/development`: not_implemented<br> |
| `ExperimentalResourceDetection` | supported |  | * `attributes`: supported<br>* `detectors`: supported<br> |
| `ExperimentalResourceDetector` | supported |  | * `container`: supported<br>* `host`: supported<br>* `process`: supported<br>* `service`: supported<br> |
| `ExperimentalRpcInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalSanitization` | unknown |  | * `url`: unknown<br> |
| `ExperimentalSemconvConfig` | unknown |  | * `dual_emit`: unknown<br>* `experimental`: unknown<br>* `version`: unknown<br> |
| `ExperimentalServiceResourceDetector` | supported |  |  |
| `ExperimentalSpanParent` | supported |  | * `local`: supported<br>* `none`: supported<br>* `remote`: supported<br> |
| `ExperimentalTracerConfig` | supported |  | * `enabled`: supported<br> |
| `ExperimentalTracerConfigurator` | supported |  | * `default_config`: supported<br>* `tracers`: supported<br> |
| `ExperimentalTracerMatcherAndConfig` | supported |  | * `config`: supported<br>* `name`: supported<br> |
| `ExperimentalUrlSanitization` | unknown |  | * `sensitive_query_parameters`: unknown<br> |


## js <a id="js"></a>

Latest supported file format: `1.0.0-rc.3`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| `Aggregation` | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| `AlwaysOffSampler` | supported |  |  |
| `AlwaysOnSampler` | supported |  |  |
| `AttributeLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `AttributeNameValue` | supported |  | * `name`: supported<br>* `type`: supported<br>* `value`: supported<br> |
| `AttributeType` | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| `B3MultiPropagator` | supported |  |  |
| `B3Propagator` | supported |  |  |
| `BaggagePropagator` | supported |  |  |
| `Base2ExponentialBucketHistogramAggregation` | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: supported<br> |
| `BatchLogRecordProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `BatchSpanProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `CardinalityLimits` | not_implemented |  | * `counter`: not_implemented<br>* `default`: not_implemented<br>* `gauge`: not_implemented<br>* `histogram`: not_implemented<br>* `observable_counter`: not_implemented<br>* `observable_gauge`: not_implemented<br>* `observable_up_down_counter`: not_implemented<br>* `up_down_counter`: not_implemented<br> |
| `ConsoleExporter` | supported |  |  |
| `ConsoleMetricExporter` | supported |  | * `default_histogram_aggregation`: not_implemented<br>* `temporality_preference`: not_implemented<br> |
| `DefaultAggregation` | supported |  |  |
| `Distribution` | not_implemented |  |  |
| `DropAggregation` | supported |  |  |
| `ExemplarFilter` | not_implemented |  | * `always_off`: not_implemented<br>* `always_on`: not_implemented<br>* `trace_based`: not_implemented<br> |
| `ExplicitBucketHistogramAggregation` | supported |  | * `boundaries`: supported<br>* `record_min_max`: supported<br> |
| `ExporterDefaultHistogramAggregation` | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| `ExporterTemporalityPreference` | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| `GrpcTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `insecure`: supported<br>* `key_file`: supported<br> |
| `HttpTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `key_file`: supported<br> |
| `IdGenerator` | supported |  | * `random`: supported<br> |
| `IncludeExclude` | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| `InstrumentType` | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| `LastValueAggregation` | supported |  |  |
| `LoggerProvider` | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: supported<br> |
| `LogRecordExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `LogRecordLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `LogRecordProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br>* `event_to_span_event_bridge/development`: supported<br> |
| `MeterProvider` | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| `MetricProducer` | supported |  | * `opencensus`: supported<br> |
| `MetricReader` | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| `NameStringValuePair` | supported |  | * `name`: supported<br>* `value`: supported<br> |
| `OpenCensusMetricProducer` | not_implemented |  |  |
| `OpenTelemetryConfiguration` | supported |  | * `attribute_limits`: supported<br>* `disabled`: supported<br>* `distribution`: supported<br>* `file_format`: supported<br>* `log_level`: supported<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `resource`: supported<br>* `tracer_provider`: supported<br>* `instrumentation/development`: supported<br> |
| `OtlpGrpcExporter` | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpGrpcMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpEncoding` | supported |  | * `json`: supported<br>* `protobuf`: supported<br> |
| `OtlpHttpExporter` | supported |  | * `compression`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `ParentBasedSampler` | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| `PeriodicMetricReader` | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `interval`: supported<br>* `producers`: supported<br>* `timeout`: supported<br>* `max_export_batch_size/development`: not_implemented<br> |
| `Propagator` | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| `PullMetricExporter` | not_implemented |  | * `prometheus/development`: not_implemented<br> |
| `PullMetricReader` | not_implemented |  | * `cardinality_limits`: not_implemented<br>* `exporter`: not_implemented<br>* `producers`: not_implemented<br> |
| `PushMetricExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `RandomIdGenerator` | supported |  |  |
| `Resource` | supported |  | * `attributes`: supported<br>* `attributes_list`: supported<br>* `schema_url`: supported<br>* `detection/development`: supported<br> |
| `Sampler` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: supported<br>* `jaeger_remote/development`: supported<br>* `probability/development`: supported<br> |
| `SeverityNumber` | supported |  | * `debug`: supported<br>* `debug2`: supported<br>* `debug3`: supported<br>* `debug4`: supported<br>* `error`: supported<br>* `error2`: supported<br>* `error3`: supported<br>* `error4`: supported<br>* `fatal`: supported<br>* `fatal2`: supported<br>* `fatal3`: supported<br>* `fatal4`: supported<br>* `info`: supported<br>* `info2`: supported<br>* `info3`: supported<br>* `info4`: supported<br>* `trace`: supported<br>* `trace2`: supported<br>* `trace3`: supported<br>* `trace4`: supported<br>* `warn`: supported<br>* `warn2`: supported<br>* `warn3`: supported<br>* `warn4`: supported<br> |
| `SimpleLogRecordProcessor` | supported |  | * `exporter`: supported<br> |
| `SimpleSpanProcessor` | supported |  | * `exporter`: supported<br> |
| `SpanExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `SpanKind` | supported |  | * `client`: supported<br>* `consumer`: supported<br>* `internal`: supported<br>* `producer`: supported<br>* `server`: supported<br> |
| `SpanLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br>* `link_count_limit`: supported<br> |
| `SpanProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| `SumAggregation` | supported |  |  |
| `TextMapPropagator` | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `tracecontext`: supported<br> |
| `TraceContextPropagator` | supported |  |  |
| `TraceIdRatioBasedSampler` | supported |  | * `ratio`: supported<br> |
| `TracerProvider` | supported |  | * `id_generator`: supported<br>* `limits`: supported<br>* `processors`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| `View` | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| `ViewSelector` | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `meter_name`: supported<br>* `meter_schema_url`: supported<br>* `meter_version`: supported<br>* `unit`: supported<br> |
| `ViewStream` | supported |  | * `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br>* `description`: supported<br>* `name`: supported<br> |
| `ExperimentalCodeInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalComposableAlwaysOffSampler` | not_implemented |  |  |
| `ExperimentalComposableAlwaysOnSampler` | not_implemented |  |  |
| `ExperimentalComposableParentThresholdSampler` | not_implemented |  | * `root`: not_implemented<br> |
| `ExperimentalComposableProbabilitySampler` | not_implemented |  | * `ratio`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSampler` | not_implemented |  | * `rules`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSamplerRule` | not_implemented |  | * `attribute_patterns`: not_implemented<br>* `attribute_values`: not_implemented<br>* `parent`: not_implemented<br>* `sampler`: not_implemented<br>* `span_kinds`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributePatterns` | not_implemented |  | * `excluded`: not_implemented<br>* `included`: not_implemented<br>* `key`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributeValues` | not_implemented |  | * `key`: not_implemented<br>* `values`: not_implemented<br> |
| `ExperimentalComposableSampler` | not_implemented |  | * `always_off`: not_implemented<br>* `always_on`: not_implemented<br>* `parent_threshold`: not_implemented<br>* `probability`: not_implemented<br>* `rule_based`: not_implemented<br> |
| `ExperimentalContainerResourceDetector` | not_implemented |  |  |
| `ExperimentalDbInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalEventToSpanEventBridgeLogRecordProcessor` | not_implemented |  |  |
| `ExperimentalGenAiInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalGeneralInstrumentation` | not_implemented |  | * `code`: not_implemented<br>* `db`: not_implemented<br>* `gen_ai`: not_implemented<br>* `http`: not_implemented<br>* `messaging`: not_implemented<br>* `rpc`: not_implemented<br>* `sanitization`: not_implemented<br>* `stability_opt_in_list`: not_implemented<br> |
| `ExperimentalHostResourceDetector` | supported |  |  |
| `ExperimentalHttpClientInstrumentation` | not_implemented |  | * `known_methods`: not_implemented<br>* `request_captured_headers`: not_implemented<br>* `response_captured_headers`: not_implemented<br> |
| `ExperimentalHttpInstrumentation` | not_implemented |  | * `client`: not_implemented<br>* `semconv`: not_implemented<br>* `server`: not_implemented<br> |
| `ExperimentalHttpServerInstrumentation` | not_implemented |  | * `known_methods`: not_implemented<br>* `request_captured_headers`: not_implemented<br>* `response_captured_headers`: not_implemented<br> |
| `ExperimentalInstrumentation` | not_implemented |  | * `cpp`: not_implemented<br>* `dotnet`: not_implemented<br>* `erlang`: not_implemented<br>* `general`: not_implemented<br>* `go`: not_implemented<br>* `java`: not_implemented<br>* `js`: not_implemented<br>* `php`: not_implemented<br>* `python`: not_implemented<br>* `ruby`: not_implemented<br>* `rust`: not_implemented<br>* `swift`: not_implemented<br> |
| `ExperimentalJaegerRemoteSampler` | not_implemented |  | * `endpoint`: not_implemented<br>* `initial_sampler`: not_implemented<br>* `interval`: not_implemented<br> |
| `ExperimentalLanguageSpecificInstrumentation` | not_implemented |  |  |
| `ExperimentalLoggerConfig` | not_implemented |  | * `enabled`: not_implemented<br>* `minimum_severity`: not_implemented<br>* `trace_based`: not_implemented<br> |
| `ExperimentalLoggerConfigurator` | not_implemented |  | * `default_config`: not_implemented<br>* `loggers`: not_implemented<br> |
| `ExperimentalLoggerMatcherAndConfig` | not_implemented |  | * `config`: not_implemented<br>* `name`: not_implemented<br> |
| `ExperimentalMessagingInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalMeterConfig` | not_implemented |  | * `enabled`: not_implemented<br> |
| `ExperimentalMeterConfigurator` | not_implemented |  | * `default_config`: not_implemented<br>* `meters`: not_implemented<br> |
| `ExperimentalMeterMatcherAndConfig` | not_implemented |  | * `config`: not_implemented<br>* `name`: not_implemented<br> |
| `ExperimentalOtlpFileExporter` | not_implemented |  | * `output_stream`: not_implemented<br> |
| `ExperimentalOtlpFileMetricExporter` | not_implemented |  | * `default_histogram_aggregation`: not_implemented<br>* `output_stream`: not_implemented<br>* `temporality_preference`: not_implemented<br> |
| `ExperimentalProbabilitySampler` | not_implemented |  | * `ratio`: not_implemented<br> |
| `ExperimentalProcessResourceDetector` | supported |  |  |
| `ExperimentalPrometheusMetricExporter` | not_implemented |  | * `host`: not_implemented<br>* `port`: not_implemented<br>* `resource_constant_labels`: not_implemented<br>* `scope_info_enabled`: not_implemented<br>* `translation_strategy`: not_implemented<br>* `target_info_enabled/development`: not_implemented<br> |
| `ExperimentalPrometheusTranslationStrategy` | not_implemented |  | * `no_translation/development`: not_implemented<br>* `no_utf8_escaping_with_suffixes/development`: not_implemented<br>* `underscore_escaping_with_suffixes`: not_implemented<br>* `underscore_escaping_without_suffixes/development`: not_implemented<br> |
| `ExperimentalResourceDetection` | supported |  | * `attributes`: supported<br>* `detectors`: supported<br> |
| `ExperimentalResourceDetector` | supported |  | * `container`: supported<br>* `host`: supported<br>* `process`: supported<br>* `service`: supported<br> |
| `ExperimentalRpcInstrumentation` | not_implemented |  | * `semconv`: not_implemented<br> |
| `ExperimentalSanitization` | not_implemented |  | * `url`: not_implemented<br> |
| `ExperimentalSemconvConfig` | not_implemented |  | * `dual_emit`: not_implemented<br>* `experimental`: not_implemented<br>* `version`: not_implemented<br> |
| `ExperimentalServiceResourceDetector` | supported |  |  |
| `ExperimentalSpanParent` | not_implemented |  | * `local`: not_implemented<br>* `none`: not_implemented<br>* `remote`: not_implemented<br> |
| `ExperimentalTracerConfig` | not_implemented |  | * `enabled`: not_implemented<br> |
| `ExperimentalTracerConfigurator` | not_implemented |  | * `default_config`: not_implemented<br>* `tracers`: not_implemented<br> |
| `ExperimentalTracerMatcherAndConfig` | not_implemented |  | * `config`: not_implemented<br>* `name`: not_implemented<br> |
| `ExperimentalUrlSanitization` | not_implemented |  | * `sensitive_query_parameters`: not_implemented<br> |


## php <a id="php"></a>

Latest supported file format: `1.0.0-rc.2`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| `Aggregation` | ignored |  | * `base2_exponential_bucket_histogram`: ignored<br>* `default`: ignored<br>* `drop`: ignored<br>* `explicit_bucket_histogram`: ignored<br>* `last_value`: ignored<br>* `sum`: ignored<br> |
| `AlwaysOffSampler` | supported |  |  |
| `AlwaysOnSampler` | supported |  |  |
| `AttributeLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `AttributeNameValue` | supported |  | * `name`: supported<br>* `type`: not_implemented<br>* `value`: supported<br> |
| `AttributeType` | not_implemented |  | * `bool`: not_implemented<br>* `bool_array`: not_implemented<br>* `double`: not_implemented<br>* `double_array`: not_implemented<br>* `int`: not_implemented<br>* `int_array`: not_implemented<br>* `string`: not_implemented<br>* `string_array`: not_implemented<br> |
| `B3MultiPropagator` | supported |  |  |
| `B3Propagator` | supported |  |  |
| `BaggagePropagator` | supported |  |  |
| `Base2ExponentialBucketHistogramAggregation` | not_implemented |  | * `max_scale`: not_implemented<br>* `max_size`: not_implemented<br>* `record_min_max`: not_implemented<br> |
| `BatchLogRecordProcessor` | supported | `schedule_delay` is only checked on `::onEmit()`. | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `BatchSpanProcessor` | supported | `schedule_delay` is only checked on `::onEnd()`. | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `CardinalityLimits` | not_implemented |  | * `counter`: not_implemented<br>* `default`: not_implemented<br>* `gauge`: not_implemented<br>* `histogram`: not_implemented<br>* `observable_counter`: not_implemented<br>* `observable_gauge`: not_implemented<br>* `observable_up_down_counter`: not_implemented<br>* `up_down_counter`: not_implemented<br> |
| `ConsoleExporter` | supported |  |  |
| `ConsoleMetricExporter` | supported |  | * `default_histogram_aggregation`: not_implemented<br>* `temporality_preference`: ignored<br> |
| `DefaultAggregation` | ignored |  |  |
| `Distribution` | not_implemented |  |  |
| `DropAggregation` | ignored |  |  |
| `ExemplarFilter` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `trace_based`: supported<br> |
| `ExplicitBucketHistogramAggregation` | ignored |  | * `boundaries`: ignored<br>* `record_min_max`: ignored<br> |
| `ExporterDefaultHistogramAggregation` | ignored |  | * `base2_exponential_bucket_histogram`: ignored<br>* `explicit_bucket_histogram`: ignored<br> |
| `ExporterTemporalityPreference` | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| `GrpcTls` | ignored |  | * `ca_file`: ignored<br>* `cert_file`: ignored<br>* `insecure`: ignored<br>* `key_file`: ignored<br> |
| `HttpTls` | ignored |  | * `ca_file`: ignored<br>* `cert_file`: ignored<br>* `key_file`: ignored<br> |
| `IdGenerator` | unknown |  | * `random`: unknown<br> |
| `IncludeExclude` | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| `InstrumentType` | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| `LastValueAggregation` | ignored |  |  |
| `LoggerProvider` | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: supported<br> |
| `LogRecordExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `LogRecordLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| `LogRecordProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br>* `event_to_span_event_bridge/development`: unknown<br> |
| `MeterProvider` | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| `MetricProducer` | not_implemented |  | * `opencensus`: not_implemented<br> |
| `MetricReader` | supported |  | * `periodic`: supported<br>* `pull`: not_implemented<br> |
| `NameStringValuePair` | supported |  | * `name`: supported<br>* `value`: supported<br> |
| `OpenCensusMetricProducer` | not_implemented |  |  |
| `OpenTelemetryConfiguration` | supported |  | * `attribute_limits`: supported<br>* `disabled`: supported<br>* `distribution`: not_implemented<br>* `file_format`: supported<br>* `log_level`: not_implemented<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `resource`: supported<br>* `tracer_provider`: supported<br>* `instrumentation/development`: supported<br> |
| `OtlpGrpcExporter` | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| `OtlpGrpcMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| `OtlpHttpEncoding` | supported |  | * `json`: supported<br>* `protobuf`: supported<br> |
| `OtlpHttpExporter` | supported |  | * `compression`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| `OtlpHttpMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: not_implemented<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| `ParentBasedSampler` | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| `PeriodicMetricReader` | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `interval`: not_implemented<br>* `producers`: not_implemented<br>* `timeout`: supported<br>* `max_export_batch_size/development`: not_implemented<br> |
| `Propagator` | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| `PullMetricExporter` | not_implemented |  | * `prometheus/development`: not_implemented<br> |
| `PullMetricReader` | not_implemented |  | * `cardinality_limits`: not_implemented<br>* `exporter`: not_implemented<br>* `producers`: not_implemented<br> |
| `PushMetricExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `RandomIdGenerator` | unknown |  |  |
| `Resource` | supported |  | * `attributes`: supported<br>* `attributes_list`: supported<br>* `schema_url`: supported<br>* `detection/development`: supported<br> |
| `Sampler` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: not_implemented<br>* `jaeger_remote/development`: not_implemented<br>* `probability/development`: not_implemented<br> |
| `SeverityNumber` | supported |  | * `debug`: supported<br>* `debug2`: supported<br>* `debug3`: supported<br>* `debug4`: supported<br>* `error`: supported<br>* `error2`: supported<br>* `error3`: supported<br>* `error4`: supported<br>* `fatal`: supported<br>* `fatal2`: supported<br>* `fatal3`: supported<br>* `fatal4`: supported<br>* `info`: supported<br>* `info2`: supported<br>* `info3`: supported<br>* `info4`: supported<br>* `trace`: supported<br>* `trace2`: supported<br>* `trace3`: supported<br>* `trace4`: supported<br>* `warn`: supported<br>* `warn2`: supported<br>* `warn3`: supported<br>* `warn4`: supported<br> |
| `SimpleLogRecordProcessor` | supported |  | * `exporter`: supported<br> |
| `SimpleSpanProcessor` | supported |  | * `exporter`: supported<br> |
| `SpanExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `SpanKind` | not_implemented |  | * `client`: not_implemented<br>* `consumer`: not_implemented<br>* `internal`: not_implemented<br>* `producer`: not_implemented<br>* `server`: not_implemented<br> |
| `SpanLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br>* `link_count_limit`: supported<br> |
| `SpanProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| `SumAggregation` | ignored |  |  |
| `TextMapPropagator` | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `tracecontext`: supported<br> |
| `TraceContextPropagator` | supported |  |  |
| `TraceIdRatioBasedSampler` | supported |  | * `ratio`: supported<br> |
| `TracerProvider` | supported |  | * `id_generator`: supported<br>* `limits`: supported<br>* `processors`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| `View` | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| `ViewSelector` | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `meter_name`: supported<br>* `meter_schema_url`: supported<br>* `meter_version`: supported<br>* `unit`: not_implemented<br> |
| `ViewStream` | supported | `attribute_keys.excluded` is not implemented, only `attribute_keys.included` is supported. | * `aggregation`: ignored<br>* `aggregation_cardinality_limit`: not_implemented<br>* `attribute_keys`: supported<br>* `description`: supported<br>* `name`: supported<br> |
| `ExperimentalCodeInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalComposableAlwaysOffSampler` | not_implemented |  |  |
| `ExperimentalComposableAlwaysOnSampler` | not_implemented |  |  |
| `ExperimentalComposableParentThresholdSampler` | not_implemented |  | * `root`: not_implemented<br> |
| `ExperimentalComposableProbabilitySampler` | not_implemented |  | * `ratio`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSampler` | not_implemented |  | * `rules`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSamplerRule` | not_implemented |  | * `attribute_patterns`: not_implemented<br>* `attribute_values`: not_implemented<br>* `parent`: not_implemented<br>* `sampler`: not_implemented<br>* `span_kinds`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributePatterns` | not_implemented |  | * `excluded`: not_implemented<br>* `included`: not_implemented<br>* `key`: not_implemented<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributeValues` | not_implemented |  | * `key`: not_implemented<br>* `values`: not_implemented<br> |
| `ExperimentalComposableSampler` | not_implemented |  | * `always_off`: not_implemented<br>* `always_on`: not_implemented<br>* `parent_threshold`: not_implemented<br>* `probability`: not_implemented<br>* `rule_based`: not_implemented<br> |
| `ExperimentalContainerResourceDetector` | ignored |  |  |
| `ExperimentalDbInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalEventToSpanEventBridgeLogRecordProcessor` | not_implemented |  |  |
| `ExperimentalGenAiInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalGeneralInstrumentation` | supported |  | * `code`: supported<br>* `db`: supported<br>* `gen_ai`: supported<br>* `http`: supported<br>* `messaging`: supported<br>* `rpc`: supported<br>* `sanitization`: supported<br>* `stability_opt_in_list`: supported<br> |
| `ExperimentalHostResourceDetector` | supported |  |  |
| `ExperimentalHttpClientInstrumentation` | supported |  | * `known_methods`: supported<br>* `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| `ExperimentalHttpInstrumentation` | supported |  | * `client`: supported<br>* `semconv`: supported<br>* `server`: supported<br> |
| `ExperimentalHttpServerInstrumentation` | supported |  | * `known_methods`: supported<br>* `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| `ExperimentalInstrumentation` | supported |  | * `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `general`: supported<br>* `go`: not_applicable<br>* `java`: not_applicable<br>* `js`: not_applicable<br>* `php`: supported<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| `ExperimentalJaegerRemoteSampler` | not_implemented |  | * `endpoint`: not_implemented<br>* `initial_sampler`: not_implemented<br>* `interval`: not_implemented<br> |
| `ExperimentalLanguageSpecificInstrumentation` | supported |  |  |
| `ExperimentalLoggerConfig` | supported |  | * `enabled`: supported<br>* `minimum_severity`: not_implemented<br>* `trace_based`: not_implemented<br> |
| `ExperimentalLoggerConfigurator` | supported |  | * `default_config`: supported<br>* `loggers`: supported<br> |
| `ExperimentalLoggerMatcherAndConfig` | supported |  | * `config`: supported<br>* `name`: supported<br> |
| `ExperimentalMessagingInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalMeterConfig` | supported |  | * `enabled`: supported<br> |
| `ExperimentalMeterConfigurator` | supported |  | * `default_config`: supported<br>* `meters`: supported<br> |
| `ExperimentalMeterMatcherAndConfig` | supported |  | * `config`: supported<br>* `name`: supported<br> |
| `ExperimentalOtlpFileExporter` | supported |  | * `output_stream`: supported<br> |
| `ExperimentalOtlpFileMetricExporter` | supported |  | * `default_histogram_aggregation`: not_implemented<br>* `output_stream`: supported<br>* `temporality_preference`: supported<br> |
| `ExperimentalProbabilitySampler` | not_implemented |  | * `ratio`: not_implemented<br> |
| `ExperimentalProcessResourceDetector` | supported |  |  |
| `ExperimentalPrometheusMetricExporter` | not_implemented |  | * `host`: not_implemented<br>* `port`: not_implemented<br>* `resource_constant_labels`: not_implemented<br>* `scope_info_enabled`: not_implemented<br>* `translation_strategy`: not_implemented<br>* `target_info_enabled/development`: not_implemented<br> |
| `ExperimentalPrometheusTranslationStrategy` | not_implemented |  | * `no_translation/development`: not_implemented<br>* `no_utf8_escaping_with_suffixes/development`: not_implemented<br>* `underscore_escaping_with_suffixes`: not_implemented<br>* `underscore_escaping_without_suffixes/development`: not_implemented<br> |
| `ExperimentalResourceDetection` | supported |  | * `attributes`: supported<br>* `detectors`: supported<br> |
| `ExperimentalResourceDetector` | supported |  | * `container`: ignored<br>* `host`: supported<br>* `process`: supported<br>* `service`: supported<br> |
| `ExperimentalRpcInstrumentation` | unknown |  | * `semconv`: unknown<br> |
| `ExperimentalSanitization` | unknown |  | * `url`: unknown<br> |
| `ExperimentalSemconvConfig` | unknown |  | * `dual_emit`: unknown<br>* `experimental`: unknown<br>* `version`: unknown<br> |
| `ExperimentalServiceResourceDetector` | supported |  |  |
| `ExperimentalSpanParent` | not_implemented |  | * `local`: not_implemented<br>* `none`: not_implemented<br>* `remote`: not_implemented<br> |
| `ExperimentalTracerConfig` | supported |  | * `enabled`: supported<br> |
| `ExperimentalTracerConfigurator` | supported |  | * `default_config`: supported<br>* `tracers`: supported<br> |
| `ExperimentalTracerMatcherAndConfig` | supported |  | * `config`: supported<br>* `name`: supported<br> |
| `ExperimentalUrlSanitization` | unknown |  | * `sensitive_query_parameters`: unknown<br> |


## python <a id="python"></a>

Latest supported file format: `1.0.0`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| `Aggregation` | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| `AlwaysOffSampler` | supported |  |  |
| `AlwaysOnSampler` | supported |  |  |
| `AttributeLimits` | ignored |  | * `attribute_count_limit`: ignored<br>* `attribute_value_length_limit`: ignored<br> |
| `AttributeNameValue` | supported |  | * `name`: supported<br>* `type`: supported<br>* `value`: supported<br> |
| `AttributeType` | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| `B3MultiPropagator` | supported |  |  |
| `B3Propagator` | supported |  |  |
| `BaggagePropagator` | supported |  |  |
| `Base2ExponentialBucketHistogramAggregation` | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: supported<br> |
| `BatchLogRecordProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `BatchSpanProcessor` | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| `CardinalityLimits` | supported |  | * `counter`: supported<br>* `default`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| `ConsoleExporter` | supported |  |  |
| `ConsoleMetricExporter` | supported |  | * `default_histogram_aggregation`: supported<br>* `temporality_preference`: supported<br> |
| `DefaultAggregation` | supported |  |  |
| `Distribution` | ignored |  |  |
| `DropAggregation` | supported |  |  |
| `ExemplarFilter` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `trace_based`: supported<br> |
| `ExplicitBucketHistogramAggregation` | supported |  | * `boundaries`: supported<br>* `record_min_max`: supported<br> |
| `ExporterDefaultHistogramAggregation` | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| `ExporterTemporalityPreference` | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| `GrpcTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `insecure`: supported<br>* `key_file`: supported<br> |
| `HttpTls` | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `key_file`: supported<br> |
| `IdGenerator` | ignored |  | * `random`: ignored<br> |
| `IncludeExclude` | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| `InstrumentType` | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| `LastValueAggregation` | supported |  |  |
| `LoggerProvider` | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: supported<br> |
| `LogRecordExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `LogRecordLimits` | ignored |  | * `attribute_count_limit`: ignored<br>* `attribute_value_length_limit`: ignored<br> |
| `LogRecordProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br>* `event_to_span_event_bridge/development`: supported<br> |
| `MeterProvider` | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| `MetricProducer` | ignored |  | * `opencensus`: ignored<br> |
| `MetricReader` | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| `NameStringValuePair` | supported |  | * `name`: supported<br>* `value`: supported<br> |
| `OpenCensusMetricProducer` | ignored |  |  |
| `OpenTelemetryConfiguration` | supported |  | * `attribute_limits`: supported<br>* `disabled`: supported<br>* `distribution`: supported<br>* `file_format`: supported<br>* `log_level`: supported<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `resource`: supported<br>* `tracer_provider`: supported<br>* `instrumentation/development`: supported<br> |
| `OtlpGrpcExporter` | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpGrpcMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpEncoding` | supported |  | * `json`: supported<br>* `protobuf`: supported<br> |
| `OtlpHttpExporter` | supported |  | * `compression`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `OtlpHttpMetricExporter` | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `max_request_size`: not_implemented<br>* `max_response_size`: not_implemented<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| `ParentBasedSampler` | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| `PeriodicMetricReader` | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `interval`: supported<br>* `producers`: supported<br>* `timeout`: supported<br>* `max_export_batch_size/development`: supported<br> |
| `Propagator` | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| `PullMetricExporter` | supported |  | * `prometheus/development`: supported<br> |
| `PullMetricReader` | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `producers`: supported<br> |
| `PushMetricExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `RandomIdGenerator` | ignored |  |  |
| `Resource` | supported |  | * `attributes`: supported<br>* `attributes_list`: supported<br>* `schema_url`: supported<br>* `detection/development`: supported<br> |
| `Sampler` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: supported<br>* `jaeger_remote/development`: supported<br>* `probability/development`: supported<br> |
| `SeverityNumber` | supported |  | * `debug`: supported<br>* `debug2`: supported<br>* `debug3`: supported<br>* `debug4`: supported<br>* `error`: supported<br>* `error2`: supported<br>* `error3`: supported<br>* `error4`: supported<br>* `fatal`: supported<br>* `fatal2`: supported<br>* `fatal3`: supported<br>* `fatal4`: supported<br>* `info`: supported<br>* `info2`: supported<br>* `info3`: supported<br>* `info4`: supported<br>* `trace`: supported<br>* `trace2`: supported<br>* `trace3`: supported<br>* `trace4`: supported<br>* `warn`: supported<br>* `warn2`: supported<br>* `warn3`: supported<br>* `warn4`: supported<br> |
| `SimpleLogRecordProcessor` | supported |  | * `exporter`: supported<br> |
| `SimpleSpanProcessor` | supported |  | * `exporter`: supported<br> |
| `SpanExporter` | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| `SpanKind` | supported |  | * `client`: supported<br>* `consumer`: supported<br>* `internal`: supported<br>* `producer`: supported<br>* `server`: supported<br> |
| `SpanLimits` | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br>* `link_count_limit`: supported<br> |
| `SpanProcessor` | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| `SumAggregation` | supported |  |  |
| `TextMapPropagator` | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `tracecontext`: supported<br> |
| `TraceContextPropagator` | supported |  |  |
| `TraceIdRatioBasedSampler` | supported |  | * `ratio`: supported<br> |
| `TracerProvider` | supported |  | * `id_generator`: supported<br>* `limits`: supported<br>* `processors`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| `View` | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| `ViewSelector` | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `meter_name`: supported<br>* `meter_schema_url`: supported<br>* `meter_version`: supported<br>* `unit`: supported<br> |
| `ViewStream` | supported |  | * `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br>* `description`: supported<br>* `name`: supported<br> |
| `ExperimentalCodeInstrumentation` | ignored |  | * `semconv`: ignored<br> |
| `ExperimentalComposableAlwaysOffSampler` | supported |  |  |
| `ExperimentalComposableAlwaysOnSampler` | supported |  |  |
| `ExperimentalComposableParentThresholdSampler` | supported |  | * `root`: supported<br> |
| `ExperimentalComposableProbabilitySampler` | supported |  | * `ratio`: supported<br> |
| `ExperimentalComposableRuleBasedSampler` | supported |  | * `rules`: supported<br> |
| `ExperimentalComposableRuleBasedSamplerRule` | supported |  | * `attribute_patterns`: supported<br>* `attribute_values`: supported<br>* `parent`: supported<br>* `sampler`: supported<br>* `span_kinds`: supported<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributePatterns` | supported |  | * `excluded`: supported<br>* `included`: supported<br>* `key`: supported<br> |
| `ExperimentalComposableRuleBasedSamplerRuleAttributeValues` | supported |  | * `key`: supported<br>* `values`: supported<br> |
| `ExperimentalComposableSampler` | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_threshold`: supported<br>* `probability`: supported<br>* `rule_based`: supported<br> |
| `ExperimentalContainerResourceDetector` | ignored |  |  |
| `ExperimentalDbInstrumentation` | ignored |  | * `semconv`: ignored<br> |
| `ExperimentalEventToSpanEventBridgeLogRecordProcessor` | ignored |  |  |
| `ExperimentalGenAiInstrumentation` | ignored |  | * `semconv`: ignored<br> |
| `ExperimentalGeneralInstrumentation` | ignored |  | * `code`: ignored<br>* `db`: ignored<br>* `gen_ai`: ignored<br>* `http`: ignored<br>* `messaging`: ignored<br>* `rpc`: ignored<br>* `sanitization`: ignored<br>* `stability_opt_in_list`: ignored<br> |
| `ExperimentalHostResourceDetector` | supported |  |  |
| `ExperimentalHttpClientInstrumentation` | ignored |  | * `known_methods`: ignored<br>* `request_captured_headers`: ignored<br>* `response_captured_headers`: ignored<br> |
| `ExperimentalHttpInstrumentation` | ignored |  | * `client`: ignored<br>* `semconv`: ignored<br>* `server`: ignored<br> |
| `ExperimentalHttpServerInstrumentation` | ignored |  | * `known_methods`: ignored<br>* `request_captured_headers`: ignored<br>* `response_captured_headers`: ignored<br> |
| `ExperimentalInstrumentation` | ignored |  | * `cpp`: ignored<br>* `dotnet`: ignored<br>* `erlang`: ignored<br>* `general`: ignored<br>* `go`: ignored<br>* `java`: ignored<br>* `js`: ignored<br>* `php`: ignored<br>* `python`: ignored<br>* `ruby`: ignored<br>* `rust`: ignored<br>* `swift`: ignored<br> |
| `ExperimentalJaegerRemoteSampler` | ignored |  | * `endpoint`: ignored<br>* `initial_sampler`: ignored<br>* `interval`: ignored<br> |
| `ExperimentalLanguageSpecificInstrumentation` | ignored |  |  |
| `ExperimentalLoggerConfig` | ignored |  | * `enabled`: ignored<br>* `minimum_severity`: ignored<br>* `trace_based`: ignored<br> |
| `ExperimentalLoggerConfigurator` | ignored |  | * `default_config`: ignored<br>* `loggers`: ignored<br> |
| `ExperimentalLoggerMatcherAndConfig` | ignored |  | * `config`: ignored<br>* `name`: ignored<br> |
| `ExperimentalMessagingInstrumentation` | ignored |  | * `semconv`: ignored<br> |
| `ExperimentalMeterConfig` | ignored |  | * `enabled`: ignored<br> |
| `ExperimentalMeterConfigurator` | ignored |  | * `default_config`: ignored<br>* `meters`: ignored<br> |
| `ExperimentalMeterMatcherAndConfig` | ignored |  | * `config`: ignored<br>* `name`: ignored<br> |
| `ExperimentalOtlpFileExporter` | ignored |  | * `output_stream`: ignored<br> |
| `ExperimentalOtlpFileMetricExporter` | ignored |  | * `default_histogram_aggregation`: ignored<br>* `output_stream`: ignored<br>* `temporality_preference`: ignored<br> |
| `ExperimentalProbabilitySampler` | ignored |  | * `ratio`: ignored<br> |
| `ExperimentalProcessResourceDetector` | supported |  |  |
| `ExperimentalPrometheusMetricExporter` | ignored |  | * `host`: ignored<br>* `port`: ignored<br>* `resource_constant_labels`: ignored<br>* `scope_info_enabled`: ignored<br>* `translation_strategy`: ignored<br>* `target_info_enabled/development`: ignored<br> |
| `ExperimentalPrometheusTranslationStrategy` | ignored |  | * `no_translation/development`: ignored<br>* `no_utf8_escaping_with_suffixes/development`: ignored<br>* `underscore_escaping_with_suffixes`: ignored<br>* `underscore_escaping_without_suffixes/development`: ignored<br> |
| `ExperimentalResourceDetection` | supported |  | * `attributes`: supported<br>* `detectors`: supported<br> |
| `ExperimentalResourceDetector` | supported |  | * `container`: supported<br>* `host`: supported<br>* `process`: supported<br>* `service`: supported<br> |
| `ExperimentalRpcInstrumentation` | ignored |  | * `semconv`: ignored<br> |
| `ExperimentalSanitization` | ignored |  | * `url`: ignored<br> |
| `ExperimentalSemconvConfig` | ignored |  | * `dual_emit`: ignored<br>* `experimental`: ignored<br>* `version`: ignored<br> |
| `ExperimentalServiceResourceDetector` | supported |  |  |
| `ExperimentalSpanParent` | supported |  | * `local`: supported<br>* `none`: supported<br>* `remote`: supported<br> |
| `ExperimentalTracerConfig` | ignored |  | * `enabled`: ignored<br> |
| `ExperimentalTracerConfigurator` | ignored |  | * `default_config`: ignored<br>* `tracers`: ignored<br> |
| `ExperimentalTracerMatcherAndConfig` | ignored |  | * `config`: ignored<br>* `name`: ignored<br> |
| `ExperimentalUrlSanitization` | ignored |  | * `sensitive_query_parameters`: ignored<br> |


