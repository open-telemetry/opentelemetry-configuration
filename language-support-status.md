<!-- This file is generated using "make generate-markdown". Do not edit directly. -->

# Language Support Status <a id="language-support-status"></a>

This page provides comprehensive language implementation status for each type in the declarative configuration schema. For type definitions and descriptions, see [schema-docs.md](schema-docs.md).

## cpp <a id="cpp"></a>

Latest supported file format: `1.0.0-rc.3`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](schema-docs.md#aggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| [`AlwaysOffSampler`](schema-docs.md#alwaysoffsampler) | supported |  |  |
| [`AlwaysOnSampler`](schema-docs.md#alwaysonsampler) | supported |  |  |
| [`AttributeLimits`](schema-docs.md#attributelimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| [`AttributeNameValue`](schema-docs.md#attributenamevalue) | supported |  | * `name`: supported<br>* `type`: supported<br>* `value`: supported<br> |
| [`AttributeType`](schema-docs.md#attributetype) | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| [`B3MultiPropagator`](schema-docs.md#b3multipropagator) | supported |  |  |
| [`B3Propagator`](schema-docs.md#b3propagator) | supported |  |  |
| [`BaggagePropagator`](schema-docs.md#baggagepropagator) | supported |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](schema-docs.md#base2exponentialbuckethistogramaggregation) | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: supported<br> |
| [`BatchLogRecordProcessor`](schema-docs.md#batchlogrecordprocessor) | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| [`BatchSpanProcessor`](schema-docs.md#batchspanprocessor) | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| [`CardinalityLimits`](schema-docs.md#cardinalitylimits) | not_implemented |  | * `counter`: not_implemented<br>* `default`: not_implemented<br>* `gauge`: not_implemented<br>* `histogram`: not_implemented<br>* `observable_counter`: not_implemented<br>* `observable_gauge`: not_implemented<br>* `observable_up_down_counter`: not_implemented<br>* `up_down_counter`: not_implemented<br> |
| [`ConsoleExporter`](schema-docs.md#consoleexporter) | supported |  |  |
| [`ConsoleMetricExporter`](schema-docs.md#consolemetricexporter) | supported |  | * `default_histogram_aggregation`: supported<br>* `temporality_preference`: supported<br> |
| [`DefaultAggregation`](schema-docs.md#defaultaggregation) | supported |  |  |
| [`Distribution`](schema-docs.md#distribution) | not_implemented |  |  |
| [`DropAggregation`](schema-docs.md#dropaggregation) | supported |  |  |
| [`ExemplarFilter`](schema-docs.md#exemplarfilter) | not_implemented |  | * `always_off`: not_implemented<br>* `always_on`: not_implemented<br>* `trace_based`: not_implemented<br> |
| [`ExplicitBucketHistogramAggregation`](schema-docs.md#explicitbuckethistogramaggregation) | supported |  | * `boundaries`: supported<br>* `record_min_max`: supported<br> |
| [`ExporterDefaultHistogramAggregation`](schema-docs.md#exporterdefaulthistogramaggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| [`ExporterTemporalityPreference`](schema-docs.md#exportertemporalitypreference) | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| [`GrpcTls`](schema-docs.md#grpctls) | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `insecure`: supported<br>* `key_file`: supported<br> |
| [`HttpTls`](schema-docs.md#httptls) | supported |  | * `ca_file`: supported<br>* `cert_file`: supported<br>* `key_file`: supported<br> |
| [`IncludeExclude`](schema-docs.md#includeexclude) | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| [`InstrumentType`](schema-docs.md#instrumenttype) | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`JaegerPropagator`](schema-docs.md#jaegerpropagator) | supported |  |  |
| [`LastValueAggregation`](schema-docs.md#lastvalueaggregation) | supported |  |  |
| [`LoggerProvider`](schema-docs.md#loggerprovider) | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: supported<br> |
| [`LogRecordExporter`](schema-docs.md#logrecordexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`LogRecordLimits`](schema-docs.md#logrecordlimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| [`LogRecordProcessor`](schema-docs.md#logrecordprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`MeterProvider`](schema-docs.md#meterprovider) | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| [`MetricProducer`](schema-docs.md#metricproducer) | supported |  | * `opencensus`: supported<br> |
| [`MetricReader`](schema-docs.md#metricreader) | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| [`NameStringValuePair`](schema-docs.md#namestringvaluepair) | supported |  | * `name`: supported<br>* `value`: supported<br> |
| [`OpenCensusMetricProducer`](schema-docs.md#opencensusmetricproducer) | supported |  |  |
| [`OpenTelemetryConfiguration`](schema-docs.md#opentelemetryconfiguration) | supported |  | * `attribute_limits`: supported<br>* `disabled`: supported<br>* `distribution`: supported<br>* `file_format`: supported<br>* `log_level`: supported<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `resource`: supported<br>* `tracer_provider`: supported<br>* `instrumentation/development`: supported<br> |
| [`OpenTracingPropagator`](schema-docs.md#opentracingpropagator) | not_implemented |  |  |
| [`OtlpGrpcExporter`](schema-docs.md#otlpgrpcexporter) | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`OtlpGrpcMetricExporter`](schema-docs.md#otlpgrpcmetricexporter) | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpEncoding`](schema-docs.md#otlphttpencoding) | supported |  | * `json`: supported<br>* `protobuf`: supported<br> |
| [`OtlpHttpExporter`](schema-docs.md#otlphttpexporter) | supported |  | * `compression`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpMetricExporter`](schema-docs.md#otlphttpmetricexporter) | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `encoding`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`ParentBasedSampler`](schema-docs.md#parentbasedsampler) | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| [`PeriodicMetricReader`](schema-docs.md#periodicmetricreader) | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `interval`: supported<br>* `producers`: supported<br>* `timeout`: supported<br> |
| [`Propagator`](schema-docs.md#propagator) | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| [`PullMetricExporter`](schema-docs.md#pullmetricexporter) | supported |  | * `prometheus/development`: supported<br> |
| [`PullMetricReader`](schema-docs.md#pullmetricreader) | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `producers`: supported<br> |
| [`PushMetricExporter`](schema-docs.md#pushmetricexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`Resource`](schema-docs.md#resource) | supported |  | * `attributes`: supported<br>* `attributes_list`: supported<br>* `schema_url`: supported<br>* `detection/development`: supported<br> |
| [`Sampler`](schema-docs.md#sampler) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: supported<br>* `jaeger_remote/development`: supported<br>* `probability/development`: supported<br> |
| [`SeverityNumber`](schema-docs.md#severitynumber) | not_implemented |  | * `debug`: not_implemented<br>* `debug2`: not_implemented<br>* `debug3`: not_implemented<br>* `debug4`: not_implemented<br>* `error`: not_implemented<br>* `error2`: not_implemented<br>* `error3`: not_implemented<br>* `error4`: not_implemented<br>* `fatal`: not_implemented<br>* `fatal2`: not_implemented<br>* `fatal3`: not_implemented<br>* `fatal4`: not_implemented<br>* `info`: not_implemented<br>* `info2`: not_implemented<br>* `info3`: not_implemented<br>* `info4`: not_implemented<br>* `trace`: not_implemented<br>* `trace2`: not_implemented<br>* `trace3`: not_implemented<br>* `trace4`: not_implemented<br>* `warn`: not_implemented<br>* `warn2`: not_implemented<br>* `warn3`: not_implemented<br>* `warn4`: not_implemented<br> |
| [`SimpleLogRecordProcessor`](schema-docs.md#simplelogrecordprocessor) | supported |  | * `exporter`: supported<br> |
| [`SimpleSpanProcessor`](schema-docs.md#simplespanprocessor) | supported |  | * `exporter`: supported<br> |
| [`SpanExporter`](schema-docs.md#spanexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`SpanKind`](schema-docs.md#spankind) | not_implemented |  | * `client`: not_implemented<br>* `consumer`: not_implemented<br>* `internal`: not_implemented<br>* `producer`: not_implemented<br>* `server`: not_implemented<br> |
| [`SpanLimits`](schema-docs.md#spanlimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br>* `link_count_limit`: supported<br> |
| [`SpanProcessor`](schema-docs.md#spanprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`SumAggregation`](schema-docs.md#sumaggregation) | supported |  |  |
| [`TextMapPropagator`](schema-docs.md#textmappropagator) | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `jaeger`: supported<br>* `ottrace`: supported<br>* `tracecontext`: supported<br> |
| [`TraceContextPropagator`](schema-docs.md#tracecontextpropagator) | supported |  |  |
| [`TraceIdRatioBasedSampler`](schema-docs.md#traceidratiobasedsampler) | supported |  | * `ratio`: supported<br> |
| [`TracerProvider`](schema-docs.md#tracerprovider) | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| [`View`](schema-docs.md#view) | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| [`ViewSelector`](schema-docs.md#viewselector) | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `meter_name`: supported<br>* `meter_schema_url`: supported<br>* `meter_version`: supported<br>* `unit`: supported<br> |
| [`ViewStream`](schema-docs.md#viewstream) | supported |  | * `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br>* `description`: supported<br>* `name`: supported<br> |
| [`ExperimentalComposableAlwaysOffSampler`](schema-docs.md#experimentalcomposablealwaysoffsampler) | not_implemented |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](schema-docs.md#experimentalcomposablealwaysonsampler) | not_implemented |  |  |
| [`ExperimentalComposableParentThresholdSampler`](schema-docs.md#experimentalcomposableparentthresholdsampler) | not_implemented |  | * `root`: not_implemented<br> |
| [`ExperimentalComposableProbabilitySampler`](schema-docs.md#experimentalcomposableprobabilitysampler) | not_implemented |  | * `ratio`: not_implemented<br> |
| [`ExperimentalComposableRuleBasedSampler`](schema-docs.md#experimentalcomposablerulebasedsampler) | not_implemented |  | * `rules`: not_implemented<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](schema-docs.md#experimentalcomposablerulebasedsamplerrule) | not_implemented |  | * `attribute_patterns`: not_implemented<br>* `attribute_values`: not_implemented<br>* `parent`: not_implemented<br>* `sampler`: not_implemented<br>* `span_kinds`: not_implemented<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](schema-docs.md#experimentalcomposablerulebasedsamplerruleattributepatterns) | not_implemented |  | * `excluded`: not_implemented<br>* `included`: not_implemented<br>* `key`: not_implemented<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](schema-docs.md#experimentalcomposablerulebasedsamplerruleattributevalues) | not_implemented |  | * `key`: not_implemented<br>* `values`: not_implemented<br> |
| [`ExperimentalComposableSampler`](schema-docs.md#experimentalcomposablesampler) | not_implemented |  | * `always_off`: not_implemented<br>* `always_on`: not_implemented<br>* `parent_threshold`: not_implemented<br>* `probability`: not_implemented<br>* `rule_based`: not_implemented<br> |
| [`ExperimentalContainerResourceDetector`](schema-docs.md#experimentalcontainerresourcedetector) | not_implemented |  |  |
| [`ExperimentalGeneralInstrumentation`](schema-docs.md#experimentalgeneralinstrumentation) | not_applicable |  | * `http`: not_applicable<br>* `peer`: not_applicable<br> |
| [`ExperimentalHostResourceDetector`](schema-docs.md#experimentalhostresourcedetector) | not_implemented |  |  |
| [`ExperimentalHttpClientInstrumentation`](schema-docs.md#experimentalhttpclientinstrumentation) | not_applicable |  | * `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| [`ExperimentalHttpInstrumentation`](schema-docs.md#experimentalhttpinstrumentation) | not_applicable |  | * `client`: not_applicable<br>* `server`: not_applicable<br> |
| [`ExperimentalHttpServerInstrumentation`](schema-docs.md#experimentalhttpserverinstrumentation) | not_applicable |  | * `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| [`ExperimentalInstrumentation`](schema-docs.md#experimentalinstrumentation) | not_applicable |  | * `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `general`: not_applicable<br>* `go`: not_applicable<br>* `java`: not_applicable<br>* `js`: not_applicable<br>* `php`: not_applicable<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| [`ExperimentalJaegerRemoteSampler`](schema-docs.md#experimentaljaegerremotesampler) | not_implemented |  | * `endpoint`: not_implemented<br>* `initial_sampler`: not_implemented<br>* `interval`: not_implemented<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](schema-docs.md#experimentallanguagespecificinstrumentation) | not_applicable |  |  |
| [`ExperimentalLoggerConfig`](schema-docs.md#experimentalloggerconfig) | not_implemented |  | * `enabled`: not_implemented<br>* `minimum_severity`: not_implemented<br>* `trace_based`: not_implemented<br> |
| [`ExperimentalLoggerConfigurator`](schema-docs.md#experimentalloggerconfigurator) | not_implemented |  | * `default_config`: not_implemented<br>* `loggers`: not_implemented<br> |
| [`ExperimentalLoggerMatcherAndConfig`](schema-docs.md#experimentalloggermatcherandconfig) | not_implemented |  | * `config`: not_implemented<br>* `name`: not_implemented<br> |
| [`ExperimentalMeterConfig`](schema-docs.md#experimentalmeterconfig) | not_implemented |  | * `enabled`: not_implemented<br> |
| [`ExperimentalMeterConfigurator`](schema-docs.md#experimentalmeterconfigurator) | not_implemented |  | * `default_config`: not_implemented<br>* `meters`: not_implemented<br> |
| [`ExperimentalMeterMatcherAndConfig`](schema-docs.md#experimentalmetermatcherandconfig) | not_implemented |  | * `config`: not_implemented<br>* `name`: not_implemented<br> |
| [`ExperimentalOtlpFileExporter`](schema-docs.md#experimentalotlpfileexporter) | supported |  | * `output_stream`: supported<br> |
| [`ExperimentalOtlpFileMetricExporter`](schema-docs.md#experimentalotlpfilemetricexporter) | supported |  | * `default_histogram_aggregation`: supported<br>* `output_stream`: supported<br>* `temporality_preference`: supported<br> |
| [`ExperimentalPeerInstrumentation`](schema-docs.md#experimentalpeerinstrumentation) | not_implemented |  | * `service_mapping`: not_implemented<br> |
| [`ExperimentalPeerServiceMapping`](schema-docs.md#experimentalpeerservicemapping) | not_implemented |  | * `peer`: not_implemented<br>* `service`: not_implemented<br> |
| [`ExperimentalProbabilitySampler`](schema-docs.md#experimentalprobabilitysampler) | not_implemented |  | * `ratio`: not_implemented<br> |
| [`ExperimentalProcessResourceDetector`](schema-docs.md#experimentalprocessresourcedetector) | not_implemented |  |  |
| [`ExperimentalPrometheusMetricExporter`](schema-docs.md#experimentalprometheusmetricexporter) | supported |  | * `host`: supported<br>* `port`: supported<br>* `translation_strategy`: supported<br>* `with_resource_constant_labels`: supported<br>* `without_scope_info`: supported<br>* `without_target_info`: not_implemented<br> |
| [`ExperimentalPrometheusTranslationStrategy`](schema-docs.md#experimentalprometheustranslationstrategy) | supported |  | * `no_translation`: not_implemented<br>* `no_utf8_escaping_with_suffixes`: not_implemented<br>* `underscore_escaping_with_suffixes`: supported<br>* `underscore_escaping_without_suffixes`: supported<br> |
| [`ExperimentalResourceDetection`](schema-docs.md#experimentalresourcedetection) | not_implemented |  | * `attributes`: not_implemented<br>* `detectors`: not_implemented<br> |
| [`ExperimentalResourceDetector`](schema-docs.md#experimentalresourcedetector) | not_implemented |  | * `container`: not_implemented<br>* `host`: not_implemented<br>* `process`: not_implemented<br>* `service`: not_implemented<br> |
| [`ExperimentalServiceResourceDetector`](schema-docs.md#experimentalserviceresourcedetector) | not_implemented |  |  |
| [`ExperimentalSpanParent`](schema-docs.md#experimentalspanparent) | not_implemented |  | * `local`: not_implemented<br>* `none`: not_implemented<br>* `remote`: not_implemented<br> |
| [`ExperimentalTracerConfig`](schema-docs.md#experimentaltracerconfig) | not_implemented |  | * `enabled`: not_implemented<br> |
| [`ExperimentalTracerConfigurator`](schema-docs.md#experimentaltracerconfigurator) | not_implemented |  | * `default_config`: not_implemented<br>* `tracers`: not_implemented<br> |
| [`ExperimentalTracerMatcherAndConfig`](schema-docs.md#experimentaltracermatcherandconfig) | not_implemented |  | * `config`: not_implemented<br>* `name`: not_implemented<br> |


## go <a id="go"></a>

Latest supported file format: `0.3.0`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](schema-docs.md#aggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](schema-docs.md#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](schema-docs.md#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](schema-docs.md#attributelimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`AttributeNameValue`](schema-docs.md#attributenamevalue) | unknown |  | * `name`: unknown<br>* `type`: unknown<br>* `value`: unknown<br> |
| [`AttributeType`](schema-docs.md#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
| [`B3MultiPropagator`](schema-docs.md#b3multipropagator) | unknown |  |  |
| [`B3Propagator`](schema-docs.md#b3propagator) | unknown |  |  |
| [`BaggagePropagator`](schema-docs.md#baggagepropagator) | unknown |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](schema-docs.md#base2exponentialbuckethistogramaggregation) | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| [`BatchLogRecordProcessor`](schema-docs.md#batchlogrecordprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`BatchSpanProcessor`](schema-docs.md#batchspanprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`CardinalityLimits`](schema-docs.md#cardinalitylimits) | unknown |  | * `counter`: unknown<br>* `default`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`ConsoleExporter`](schema-docs.md#consoleexporter) | unknown |  |  |
| [`ConsoleMetricExporter`](schema-docs.md#consolemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `temporality_preference`: unknown<br> |
| [`DefaultAggregation`](schema-docs.md#defaultaggregation) | unknown |  |  |
| [`Distribution`](schema-docs.md#distribution) | unknown |  |  |
| [`DropAggregation`](schema-docs.md#dropaggregation) | unknown |  |  |
| [`ExemplarFilter`](schema-docs.md#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExplicitBucketHistogramAggregation`](schema-docs.md#explicitbuckethistogramaggregation) | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| [`ExporterDefaultHistogramAggregation`](schema-docs.md#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](schema-docs.md#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](schema-docs.md#grpctls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `insecure`: unknown<br>* `key_file`: unknown<br> |
| [`HttpTls`](schema-docs.md#httptls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `key_file`: unknown<br> |
| [`IncludeExclude`](schema-docs.md#includeexclude) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br> |
| [`InstrumentType`](schema-docs.md#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](schema-docs.md#jaegerpropagator) | unknown |  |  |
| [`LastValueAggregation`](schema-docs.md#lastvalueaggregation) | unknown |  |  |
| [`LoggerProvider`](schema-docs.md#loggerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `logger_configurator/development`: unknown<br> |
| [`LogRecordExporter`](schema-docs.md#logrecordexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`LogRecordLimits`](schema-docs.md#logrecordlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`LogRecordProcessor`](schema-docs.md#logrecordprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`MeterProvider`](schema-docs.md#meterprovider) | unknown |  | * `exemplar_filter`: unknown<br>* `readers`: unknown<br>* `views`: unknown<br>* `meter_configurator/development`: unknown<br> |
| [`MetricProducer`](schema-docs.md#metricproducer) | unknown |  | * `opencensus`: unknown<br> |
| [`MetricReader`](schema-docs.md#metricreader) | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| [`NameStringValuePair`](schema-docs.md#namestringvaluepair) | unknown |  | * `name`: unknown<br>* `value`: unknown<br> |
| [`OpenCensusMetricProducer`](schema-docs.md#opencensusmetricproducer) | unknown |  |  |
| [`OpenTelemetryConfiguration`](schema-docs.md#opentelemetryconfiguration) | unknown |  | * `attribute_limits`: unknown<br>* `disabled`: unknown<br>* `distribution`: unknown<br>* `file_format`: unknown<br>* `log_level`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `resource`: unknown<br>* `tracer_provider`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](schema-docs.md#opentracingpropagator) | unknown |  |  |
| [`OtlpGrpcExporter`](schema-docs.md#otlpgrpcexporter) | unknown |  | * `compression`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpGrpcMetricExporter`](schema-docs.md#otlpgrpcmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpEncoding`](schema-docs.md#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](schema-docs.md#otlphttpexporter) | unknown |  | * `compression`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](schema-docs.md#otlphttpmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](schema-docs.md#parentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`PeriodicMetricReader`](schema-docs.md#periodicmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `interval`: unknown<br>* `producers`: unknown<br>* `timeout`: unknown<br> |
| [`Propagator`](schema-docs.md#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](schema-docs.md#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](schema-docs.md#pullmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br> |
| [`PushMetricExporter`](schema-docs.md#pushmetricexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`Resource`](schema-docs.md#resource) | unknown |  | * `attributes`: unknown<br>* `attributes_list`: unknown<br>* `schema_url`: unknown<br>* `detection/development`: unknown<br> |
| [`Sampler`](schema-docs.md#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `composite/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `probability/development`: unknown<br> |
| [`SeverityNumber`](schema-docs.md#severitynumber) | unknown |  | * `debug`: unknown<br>* `debug2`: unknown<br>* `debug3`: unknown<br>* `debug4`: unknown<br>* `error`: unknown<br>* `error2`: unknown<br>* `error3`: unknown<br>* `error4`: unknown<br>* `fatal`: unknown<br>* `fatal2`: unknown<br>* `fatal3`: unknown<br>* `fatal4`: unknown<br>* `info`: unknown<br>* `info2`: unknown<br>* `info3`: unknown<br>* `info4`: unknown<br>* `trace`: unknown<br>* `trace2`: unknown<br>* `trace3`: unknown<br>* `trace4`: unknown<br>* `warn`: unknown<br>* `warn2`: unknown<br>* `warn3`: unknown<br>* `warn4`: unknown<br> |
| [`SimpleLogRecordProcessor`](schema-docs.md#simplelogrecordprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SimpleSpanProcessor`](schema-docs.md#simplespanprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SpanExporter`](schema-docs.md#spanexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`SpanKind`](schema-docs.md#spankind) | unknown |  | * `client`: unknown<br>* `consumer`: unknown<br>* `internal`: unknown<br>* `producer`: unknown<br>* `server`: unknown<br> |
| [`SpanLimits`](schema-docs.md#spanlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br>* `link_count_limit`: unknown<br> |
| [`SpanProcessor`](schema-docs.md#spanprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`SumAggregation`](schema-docs.md#sumaggregation) | unknown |  |  |
| [`TextMapPropagator`](schema-docs.md#textmappropagator) | unknown |  | * `b3`: unknown<br>* `b3multi`: unknown<br>* `baggage`: unknown<br>* `jaeger`: unknown<br>* `ottrace`: unknown<br>* `tracecontext`: unknown<br> |
| [`TraceContextPropagator`](schema-docs.md#tracecontextpropagator) | unknown |  |  |
| [`TraceIdRatioBasedSampler`](schema-docs.md#traceidratiobasedsampler) | unknown |  | * `ratio`: unknown<br> |
| [`TracerProvider`](schema-docs.md#tracerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| [`View`](schema-docs.md#view) | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| [`ViewSelector`](schema-docs.md#viewselector) | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `meter_name`: unknown<br>* `meter_schema_url`: unknown<br>* `meter_version`: unknown<br>* `unit`: unknown<br> |
| [`ViewStream`](schema-docs.md#viewstream) | unknown |  | * `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br>* `description`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](schema-docs.md#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](schema-docs.md#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentThresholdSampler`](schema-docs.md#experimentalcomposableparentthresholdsampler) | unknown |  | * `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](schema-docs.md#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](schema-docs.md#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](schema-docs.md#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `parent`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](schema-docs.md#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br>* `key`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](schema-docs.md#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](schema-docs.md#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_threshold`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](schema-docs.md#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](schema-docs.md#experimentalgeneralinstrumentation) | unknown |  | * `http`: unknown<br>* `peer`: unknown<br> |
| [`ExperimentalHostResourceDetector`](schema-docs.md#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](schema-docs.md#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](schema-docs.md#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](schema-docs.md#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](schema-docs.md#experimentalinstrumentation) | unknown |  | * `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `general`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](schema-docs.md#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `initial_sampler`: unknown<br>* `interval`: unknown<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](schema-docs.md#experimentallanguagespecificinstrumentation) | unknown |  |  |
| [`ExperimentalLoggerConfig`](schema-docs.md#experimentalloggerconfig) | unknown |  | * `enabled`: unknown<br>* `minimum_severity`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalLoggerConfigurator`](schema-docs.md#experimentalloggerconfigurator) | unknown |  | * `default_config`: unknown<br>* `loggers`: unknown<br> |
| [`ExperimentalLoggerMatcherAndConfig`](schema-docs.md#experimentalloggermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalMeterConfig`](schema-docs.md#experimentalmeterconfig) | unknown |  | * `enabled`: unknown<br> |
| [`ExperimentalMeterConfigurator`](schema-docs.md#experimentalmeterconfigurator) | unknown |  | * `default_config`: unknown<br>* `meters`: unknown<br> |
| [`ExperimentalMeterMatcherAndConfig`](schema-docs.md#experimentalmetermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalOtlpFileExporter`](schema-docs.md#experimentalotlpfileexporter) | unknown |  | * `output_stream`: unknown<br> |
| [`ExperimentalOtlpFileMetricExporter`](schema-docs.md#experimentalotlpfilemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `output_stream`: unknown<br>* `temporality_preference`: unknown<br> |
| [`ExperimentalPeerInstrumentation`](schema-docs.md#experimentalpeerinstrumentation) | unknown |  | * `service_mapping`: unknown<br> |
| [`ExperimentalPeerServiceMapping`](schema-docs.md#experimentalpeerservicemapping) | unknown |  | * `peer`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalProbabilitySampler`](schema-docs.md#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](schema-docs.md#experimentalprocessresourcedetector) | unknown |  |  |
| [`ExperimentalPrometheusMetricExporter`](schema-docs.md#experimentalprometheusmetricexporter) | unknown |  | * `host`: unknown<br>* `port`: unknown<br>* `translation_strategy`: unknown<br>* `with_resource_constant_labels`: unknown<br>* `without_scope_info`: unknown<br>* `without_target_info`: unknown<br> |
| [`ExperimentalPrometheusTranslationStrategy`](schema-docs.md#experimentalprometheustranslationstrategy) | unknown |  | * `no_translation`: unknown<br>* `no_utf8_escaping_with_suffixes`: unknown<br>* `underscore_escaping_with_suffixes`: unknown<br>* `underscore_escaping_without_suffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](schema-docs.md#experimentalresourcedetection) | unknown |  | * `attributes`: unknown<br>* `detectors`: unknown<br> |
| [`ExperimentalResourceDetector`](schema-docs.md#experimentalresourcedetector) | unknown |  | * `container`: unknown<br>* `host`: unknown<br>* `process`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalServiceResourceDetector`](schema-docs.md#experimentalserviceresourcedetector) | unknown |  |  |
| [`ExperimentalSpanParent`](schema-docs.md#experimentalspanparent) | unknown |  | * `local`: unknown<br>* `none`: unknown<br>* `remote`: unknown<br> |
| [`ExperimentalTracerConfig`](schema-docs.md#experimentaltracerconfig) | unknown |  | * `enabled`: unknown<br> |
| [`ExperimentalTracerConfigurator`](schema-docs.md#experimentaltracerconfigurator) | unknown |  | * `default_config`: unknown<br>* `tracers`: unknown<br> |
| [`ExperimentalTracerMatcherAndConfig`](schema-docs.md#experimentaltracermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |


## java <a id="java"></a>

Latest supported file format: `1.0.0-rc.1`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](schema-docs.md#aggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| [`AlwaysOffSampler`](schema-docs.md#alwaysoffsampler) | supported |  |  |
| [`AlwaysOnSampler`](schema-docs.md#alwaysonsampler) | supported |  |  |
| [`AttributeLimits`](schema-docs.md#attributelimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| [`AttributeNameValue`](schema-docs.md#attributenamevalue) | supported |  | * `name`: supported<br>* `type`: supported<br>* `value`: supported<br> |
| [`AttributeType`](schema-docs.md#attributetype) | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| [`B3MultiPropagator`](schema-docs.md#b3multipropagator) | supported |  |  |
| [`B3Propagator`](schema-docs.md#b3propagator) | supported |  |  |
| [`BaggagePropagator`](schema-docs.md#baggagepropagator) | supported |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](schema-docs.md#base2exponentialbuckethistogramaggregation) | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: not_implemented<br> |
| [`BatchLogRecordProcessor`](schema-docs.md#batchlogrecordprocessor) | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| [`BatchSpanProcessor`](schema-docs.md#batchspanprocessor) | supported |  | * `export_timeout`: supported<br>* `exporter`: supported<br>* `max_export_batch_size`: supported<br>* `max_queue_size`: supported<br>* `schedule_delay`: supported<br> |
| [`CardinalityLimits`](schema-docs.md#cardinalitylimits) | supported |  | * `counter`: supported<br>* `default`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`ConsoleExporter`](schema-docs.md#consoleexporter) | supported |  |  |
| [`ConsoleMetricExporter`](schema-docs.md#consolemetricexporter) | supported |  | * `default_histogram_aggregation`: not_implemented<br>* `temporality_preference`: ignored<br> |
| [`DefaultAggregation`](schema-docs.md#defaultaggregation) | supported |  |  |
| [`Distribution`](schema-docs.md#distribution) | unknown |  |  |
| [`DropAggregation`](schema-docs.md#dropaggregation) | supported |  |  |
| [`ExemplarFilter`](schema-docs.md#exemplarfilter) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `trace_based`: supported<br> |
| [`ExplicitBucketHistogramAggregation`](schema-docs.md#explicitbuckethistogramaggregation) | supported |  | * `boundaries`: supported<br>* `record_min_max`: not_implemented<br> |
| [`ExporterDefaultHistogramAggregation`](schema-docs.md#exporterdefaulthistogramaggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| [`ExporterTemporalityPreference`](schema-docs.md#exportertemporalitypreference) | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| [`GrpcTls`](schema-docs.md#grpctls) | not_implemented |  | * `ca_file`: not_implemented<br>* `cert_file`: not_implemented<br>* `insecure`: not_implemented<br>* `key_file`: not_implemented<br> |
| [`HttpTls`](schema-docs.md#httptls) | not_implemented |  | * `ca_file`: not_implemented<br>* `cert_file`: not_implemented<br>* `key_file`: not_implemented<br> |
| [`IncludeExclude`](schema-docs.md#includeexclude) | supported |  | * `excluded`: supported<br>* `included`: supported<br> |
| [`InstrumentType`](schema-docs.md#instrumenttype) | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`JaegerPropagator`](schema-docs.md#jaegerpropagator) | supported |  |  |
| [`LastValueAggregation`](schema-docs.md#lastvalueaggregation) | supported |  |  |
| [`LoggerProvider`](schema-docs.md#loggerprovider) | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `logger_configurator/development`: supported<br> |
| [`LogRecordExporter`](schema-docs.md#logrecordexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`LogRecordLimits`](schema-docs.md#logrecordlimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br> |
| [`LogRecordProcessor`](schema-docs.md#logrecordprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`MeterProvider`](schema-docs.md#meterprovider) | supported |  | * `exemplar_filter`: supported<br>* `readers`: supported<br>* `views`: supported<br>* `meter_configurator/development`: supported<br> |
| [`MetricProducer`](schema-docs.md#metricproducer) | ignored |  | * `opencensus`: ignored<br> |
| [`MetricReader`](schema-docs.md#metricreader) | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| [`NameStringValuePair`](schema-docs.md#namestringvaluepair) | supported |  | * `name`: supported<br>* `value`: supported<br> |
| [`OpenCensusMetricProducer`](schema-docs.md#opencensusmetricproducer) | ignored |  |  |
| [`OpenTelemetryConfiguration`](schema-docs.md#opentelemetryconfiguration) | supported |  | * `attribute_limits`: supported<br>* `disabled`: supported<br>* `distribution`: supported<br>* `file_format`: supported<br>* `log_level`: not_implemented<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `resource`: supported<br>* `tracer_provider`: supported<br>* `instrumentation/development`: supported<br> |
| [`OpenTracingPropagator`](schema-docs.md#opentracingpropagator) | supported |  |  |
| [`OtlpGrpcExporter`](schema-docs.md#otlpgrpcexporter) | supported |  | * `compression`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| [`OtlpGrpcMetricExporter`](schema-docs.md#otlpgrpcmetricexporter) | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| [`OtlpHttpEncoding`](schema-docs.md#otlphttpencoding) | not_implemented |  | * `json`: not_implemented<br>* `protobuf`: not_implemented<br> |
| [`OtlpHttpExporter`](schema-docs.md#otlphttpexporter) | supported |  | * `compression`: supported<br>* `encoding`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| [`OtlpHttpMetricExporter`](schema-docs.md#otlphttpmetricexporter) | supported |  | * `compression`: supported<br>* `default_histogram_aggregation`: supported<br>* `encoding`: not_implemented<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `temporality_preference`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| [`ParentBasedSampler`](schema-docs.md#parentbasedsampler) | supported |  | * `local_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `remote_parent_sampled`: supported<br>* `root`: supported<br> |
| [`PeriodicMetricReader`](schema-docs.md#periodicmetricreader) | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `interval`: supported<br>* `producers`: not_implemented<br>* `timeout`: supported<br> |
| [`Propagator`](schema-docs.md#propagator) | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| [`PullMetricExporter`](schema-docs.md#pullmetricexporter) | supported |  | * `prometheus/development`: supported<br> |
| [`PullMetricReader`](schema-docs.md#pullmetricreader) | supported |  | * `cardinality_limits`: supported<br>* `exporter`: supported<br>* `producers`: not_implemented<br> |
| [`PushMetricExporter`](schema-docs.md#pushmetricexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`Resource`](schema-docs.md#resource) | supported |  | * `attributes`: supported<br>* `attributes_list`: supported<br>* `schema_url`: ignored<br>* `detection/development`: supported<br> |
| [`Sampler`](schema-docs.md#sampler) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `composite/development`: supported<br>* `jaeger_remote/development`: supported<br>* `probability/development`: ignored<br> |
| [`SeverityNumber`](schema-docs.md#severitynumber) | unknown |  | * `debug`: unknown<br>* `debug2`: unknown<br>* `debug3`: unknown<br>* `debug4`: unknown<br>* `error`: unknown<br>* `error2`: unknown<br>* `error3`: unknown<br>* `error4`: unknown<br>* `fatal`: unknown<br>* `fatal2`: unknown<br>* `fatal3`: unknown<br>* `fatal4`: unknown<br>* `info`: unknown<br>* `info2`: unknown<br>* `info3`: unknown<br>* `info4`: unknown<br>* `trace`: unknown<br>* `trace2`: unknown<br>* `trace3`: unknown<br>* `trace4`: unknown<br>* `warn`: unknown<br>* `warn2`: unknown<br>* `warn3`: unknown<br>* `warn4`: unknown<br> |
| [`SimpleLogRecordProcessor`](schema-docs.md#simplelogrecordprocessor) | supported |  | * `exporter`: supported<br> |
| [`SimpleSpanProcessor`](schema-docs.md#simplespanprocessor) | supported |  | * `exporter`: supported<br> |
| [`SpanExporter`](schema-docs.md#spanexporter) | supported |  | * `console`: supported<br>* `otlp_grpc`: supported<br>* `otlp_http`: supported<br>* `otlp_file/development`: supported<br> |
| [`SpanKind`](schema-docs.md#spankind) | unknown |  | * `client`: unknown<br>* `consumer`: unknown<br>* `internal`: unknown<br>* `producer`: unknown<br>* `server`: unknown<br> |
| [`SpanLimits`](schema-docs.md#spanlimits) | supported |  | * `attribute_count_limit`: supported<br>* `attribute_value_length_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br>* `link_count_limit`: supported<br> |
| [`SpanProcessor`](schema-docs.md#spanprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`SumAggregation`](schema-docs.md#sumaggregation) | supported |  |  |
| [`TextMapPropagator`](schema-docs.md#textmappropagator) | supported |  | * `b3`: supported<br>* `b3multi`: supported<br>* `baggage`: supported<br>* `jaeger`: supported<br>* `ottrace`: supported<br>* `tracecontext`: supported<br> |
| [`TraceContextPropagator`](schema-docs.md#tracecontextpropagator) | supported |  |  |
| [`TraceIdRatioBasedSampler`](schema-docs.md#traceidratiobasedsampler) | supported |  | * `ratio`: supported<br> |
| [`TracerProvider`](schema-docs.md#tracerprovider) | supported |  | * `limits`: supported<br>* `processors`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| [`View`](schema-docs.md#view) | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| [`ViewSelector`](schema-docs.md#viewselector) | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `meter_name`: supported<br>* `meter_schema_url`: supported<br>* `meter_version`: supported<br>* `unit`: ignored<br> |
| [`ViewStream`](schema-docs.md#viewstream) | supported |  | * `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br>* `description`: supported<br>* `name`: supported<br> |
| [`ExperimentalComposableAlwaysOffSampler`](schema-docs.md#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](schema-docs.md#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentThresholdSampler`](schema-docs.md#experimentalcomposableparentthresholdsampler) | unknown |  | * `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](schema-docs.md#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](schema-docs.md#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](schema-docs.md#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `parent`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](schema-docs.md#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br>* `key`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](schema-docs.md#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](schema-docs.md#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_threshold`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](schema-docs.md#experimentalcontainerresourcedetector) | supported |  |  |
| [`ExperimentalGeneralInstrumentation`](schema-docs.md#experimentalgeneralinstrumentation) | supported |  | * `http`: supported<br>* `peer`: supported<br> |
| [`ExperimentalHostResourceDetector`](schema-docs.md#experimentalhostresourcedetector) | supported |  |  |
| [`ExperimentalHttpClientInstrumentation`](schema-docs.md#experimentalhttpclientinstrumentation) | supported |  | * `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| [`ExperimentalHttpInstrumentation`](schema-docs.md#experimentalhttpinstrumentation) | supported |  | * `client`: supported<br>* `server`: supported<br> |
| [`ExperimentalHttpServerInstrumentation`](schema-docs.md#experimentalhttpserverinstrumentation) | supported |  | * `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| [`ExperimentalInstrumentation`](schema-docs.md#experimentalinstrumentation) | supported |  | * `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `general`: supported<br>* `go`: not_applicable<br>* `java`: supported<br>* `js`: not_applicable<br>* `php`: not_applicable<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| [`ExperimentalJaegerRemoteSampler`](schema-docs.md#experimentaljaegerremotesampler) | ignored |  | * `endpoint`: ignored<br>* `initial_sampler`: ignored<br>* `interval`: ignored<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](schema-docs.md#experimentallanguagespecificinstrumentation) | supported |  |  |
| [`ExperimentalLoggerConfig`](schema-docs.md#experimentalloggerconfig) | supported |  | * `enabled`: supported<br>* `minimum_severity`: not_implemented<br>* `trace_based`: not_implemented<br> |
| [`ExperimentalLoggerConfigurator`](schema-docs.md#experimentalloggerconfigurator) | supported |  | * `default_config`: supported<br>* `loggers`: supported<br> |
| [`ExperimentalLoggerMatcherAndConfig`](schema-docs.md#experimentalloggermatcherandconfig) | supported |  | * `config`: supported<br>* `name`: supported<br> |
| [`ExperimentalMeterConfig`](schema-docs.md#experimentalmeterconfig) | supported |  | * `enabled`: supported<br> |
| [`ExperimentalMeterConfigurator`](schema-docs.md#experimentalmeterconfigurator) | supported |  | * `default_config`: supported<br>* `meters`: supported<br> |
| [`ExperimentalMeterMatcherAndConfig`](schema-docs.md#experimentalmetermatcherandconfig) | supported |  | * `config`: supported<br>* `name`: supported<br> |
| [`ExperimentalOtlpFileExporter`](schema-docs.md#experimentalotlpfileexporter) | supported |  | * `output_stream`: not_implemented<br> |
| [`ExperimentalOtlpFileMetricExporter`](schema-docs.md#experimentalotlpfilemetricexporter) | supported |  | * `default_histogram_aggregation`: supported<br>* `output_stream`: not_implemented<br>* `temporality_preference`: supported<br> |
| [`ExperimentalPeerInstrumentation`](schema-docs.md#experimentalpeerinstrumentation) | supported |  | * `service_mapping`: supported<br> |
| [`ExperimentalPeerServiceMapping`](schema-docs.md#experimentalpeerservicemapping) | supported |  | * `peer`: supported<br>* `service`: supported<br> |
| [`ExperimentalProbabilitySampler`](schema-docs.md#experimentalprobabilitysampler) | ignored |  | * `ratio`: ignored<br> |
| [`ExperimentalProcessResourceDetector`](schema-docs.md#experimentalprocessresourcedetector) | supported |  |  |
| [`ExperimentalPrometheusMetricExporter`](schema-docs.md#experimentalprometheusmetricexporter) | supported |  | * `host`: supported<br>* `port`: supported<br>* `translation_strategy`: not_implemented<br>* `with_resource_constant_labels`: supported<br>* `without_scope_info`: ignored<br>* `without_target_info`: ignored<br> |
| [`ExperimentalPrometheusTranslationStrategy`](schema-docs.md#experimentalprometheustranslationstrategy) | unknown |  | * `no_translation`: unknown<br>* `no_utf8_escaping_with_suffixes`: unknown<br>* `underscore_escaping_with_suffixes`: unknown<br>* `underscore_escaping_without_suffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](schema-docs.md#experimentalresourcedetection) | supported |  | * `attributes`: supported<br>* `detectors`: supported<br> |
| [`ExperimentalResourceDetector`](schema-docs.md#experimentalresourcedetector) | supported |  | * `container`: supported<br>* `host`: supported<br>* `process`: supported<br>* `service`: supported<br> |
| [`ExperimentalServiceResourceDetector`](schema-docs.md#experimentalserviceresourcedetector) | supported |  |  |
| [`ExperimentalSpanParent`](schema-docs.md#experimentalspanparent) | unknown |  | * `local`: unknown<br>* `none`: unknown<br>* `remote`: unknown<br> |
| [`ExperimentalTracerConfig`](schema-docs.md#experimentaltracerconfig) | supported |  | * `enabled`: supported<br> |
| [`ExperimentalTracerConfigurator`](schema-docs.md#experimentaltracerconfigurator) | supported |  | * `default_config`: supported<br>* `tracers`: supported<br> |
| [`ExperimentalTracerMatcherAndConfig`](schema-docs.md#experimentaltracermatcherandconfig) | supported |  | * `config`: supported<br>* `name`: supported<br> |


## js <a id="js"></a>

Latest supported file format: `1.0.0-rc.2`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](schema-docs.md#aggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](schema-docs.md#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](schema-docs.md#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](schema-docs.md#attributelimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`AttributeNameValue`](schema-docs.md#attributenamevalue) | unknown |  | * `name`: unknown<br>* `type`: unknown<br>* `value`: unknown<br> |
| [`AttributeType`](schema-docs.md#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
| [`B3MultiPropagator`](schema-docs.md#b3multipropagator) | unknown |  |  |
| [`B3Propagator`](schema-docs.md#b3propagator) | unknown |  |  |
| [`BaggagePropagator`](schema-docs.md#baggagepropagator) | unknown |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](schema-docs.md#base2exponentialbuckethistogramaggregation) | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| [`BatchLogRecordProcessor`](schema-docs.md#batchlogrecordprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`BatchSpanProcessor`](schema-docs.md#batchspanprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`CardinalityLimits`](schema-docs.md#cardinalitylimits) | unknown |  | * `counter`: unknown<br>* `default`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`ConsoleExporter`](schema-docs.md#consoleexporter) | unknown |  |  |
| [`ConsoleMetricExporter`](schema-docs.md#consolemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `temporality_preference`: unknown<br> |
| [`DefaultAggregation`](schema-docs.md#defaultaggregation) | unknown |  |  |
| [`Distribution`](schema-docs.md#distribution) | unknown |  |  |
| [`DropAggregation`](schema-docs.md#dropaggregation) | unknown |  |  |
| [`ExemplarFilter`](schema-docs.md#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExplicitBucketHistogramAggregation`](schema-docs.md#explicitbuckethistogramaggregation) | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| [`ExporterDefaultHistogramAggregation`](schema-docs.md#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](schema-docs.md#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](schema-docs.md#grpctls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `insecure`: unknown<br>* `key_file`: unknown<br> |
| [`HttpTls`](schema-docs.md#httptls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `key_file`: unknown<br> |
| [`IncludeExclude`](schema-docs.md#includeexclude) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br> |
| [`InstrumentType`](schema-docs.md#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](schema-docs.md#jaegerpropagator) | unknown |  |  |
| [`LastValueAggregation`](schema-docs.md#lastvalueaggregation) | unknown |  |  |
| [`LoggerProvider`](schema-docs.md#loggerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `logger_configurator/development`: unknown<br> |
| [`LogRecordExporter`](schema-docs.md#logrecordexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`LogRecordLimits`](schema-docs.md#logrecordlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`LogRecordProcessor`](schema-docs.md#logrecordprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`MeterProvider`](schema-docs.md#meterprovider) | unknown |  | * `exemplar_filter`: unknown<br>* `readers`: unknown<br>* `views`: unknown<br>* `meter_configurator/development`: unknown<br> |
| [`MetricProducer`](schema-docs.md#metricproducer) | unknown |  | * `opencensus`: unknown<br> |
| [`MetricReader`](schema-docs.md#metricreader) | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| [`NameStringValuePair`](schema-docs.md#namestringvaluepair) | unknown |  | * `name`: unknown<br>* `value`: unknown<br> |
| [`OpenCensusMetricProducer`](schema-docs.md#opencensusmetricproducer) | unknown |  |  |
| [`OpenTelemetryConfiguration`](schema-docs.md#opentelemetryconfiguration) | unknown |  | * `attribute_limits`: unknown<br>* `disabled`: unknown<br>* `distribution`: unknown<br>* `file_format`: unknown<br>* `log_level`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `resource`: unknown<br>* `tracer_provider`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](schema-docs.md#opentracingpropagator) | unknown |  |  |
| [`OtlpGrpcExporter`](schema-docs.md#otlpgrpcexporter) | unknown |  | * `compression`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpGrpcMetricExporter`](schema-docs.md#otlpgrpcmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpEncoding`](schema-docs.md#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](schema-docs.md#otlphttpexporter) | unknown |  | * `compression`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](schema-docs.md#otlphttpmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](schema-docs.md#parentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`PeriodicMetricReader`](schema-docs.md#periodicmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `interval`: unknown<br>* `producers`: unknown<br>* `timeout`: unknown<br> |
| [`Propagator`](schema-docs.md#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](schema-docs.md#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](schema-docs.md#pullmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br> |
| [`PushMetricExporter`](schema-docs.md#pushmetricexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`Resource`](schema-docs.md#resource) | unknown |  | * `attributes`: unknown<br>* `attributes_list`: unknown<br>* `schema_url`: unknown<br>* `detection/development`: unknown<br> |
| [`Sampler`](schema-docs.md#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `composite/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `probability/development`: unknown<br> |
| [`SeverityNumber`](schema-docs.md#severitynumber) | unknown |  | * `debug`: unknown<br>* `debug2`: unknown<br>* `debug3`: unknown<br>* `debug4`: unknown<br>* `error`: unknown<br>* `error2`: unknown<br>* `error3`: unknown<br>* `error4`: unknown<br>* `fatal`: unknown<br>* `fatal2`: unknown<br>* `fatal3`: unknown<br>* `fatal4`: unknown<br>* `info`: unknown<br>* `info2`: unknown<br>* `info3`: unknown<br>* `info4`: unknown<br>* `trace`: unknown<br>* `trace2`: unknown<br>* `trace3`: unknown<br>* `trace4`: unknown<br>* `warn`: unknown<br>* `warn2`: unknown<br>* `warn3`: unknown<br>* `warn4`: unknown<br> |
| [`SimpleLogRecordProcessor`](schema-docs.md#simplelogrecordprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SimpleSpanProcessor`](schema-docs.md#simplespanprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SpanExporter`](schema-docs.md#spanexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`SpanKind`](schema-docs.md#spankind) | unknown |  | * `client`: unknown<br>* `consumer`: unknown<br>* `internal`: unknown<br>* `producer`: unknown<br>* `server`: unknown<br> |
| [`SpanLimits`](schema-docs.md#spanlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br>* `link_count_limit`: unknown<br> |
| [`SpanProcessor`](schema-docs.md#spanprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`SumAggregation`](schema-docs.md#sumaggregation) | unknown |  |  |
| [`TextMapPropagator`](schema-docs.md#textmappropagator) | unknown |  | * `b3`: unknown<br>* `b3multi`: unknown<br>* `baggage`: unknown<br>* `jaeger`: unknown<br>* `ottrace`: unknown<br>* `tracecontext`: unknown<br> |
| [`TraceContextPropagator`](schema-docs.md#tracecontextpropagator) | unknown |  |  |
| [`TraceIdRatioBasedSampler`](schema-docs.md#traceidratiobasedsampler) | unknown |  | * `ratio`: unknown<br> |
| [`TracerProvider`](schema-docs.md#tracerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| [`View`](schema-docs.md#view) | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| [`ViewSelector`](schema-docs.md#viewselector) | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `meter_name`: unknown<br>* `meter_schema_url`: unknown<br>* `meter_version`: unknown<br>* `unit`: unknown<br> |
| [`ViewStream`](schema-docs.md#viewstream) | unknown |  | * `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br>* `description`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](schema-docs.md#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](schema-docs.md#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentThresholdSampler`](schema-docs.md#experimentalcomposableparentthresholdsampler) | unknown |  | * `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](schema-docs.md#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](schema-docs.md#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](schema-docs.md#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `parent`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](schema-docs.md#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br>* `key`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](schema-docs.md#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](schema-docs.md#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_threshold`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](schema-docs.md#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](schema-docs.md#experimentalgeneralinstrumentation) | unknown |  | * `http`: unknown<br>* `peer`: unknown<br> |
| [`ExperimentalHostResourceDetector`](schema-docs.md#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](schema-docs.md#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](schema-docs.md#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](schema-docs.md#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](schema-docs.md#experimentalinstrumentation) | unknown |  | * `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `general`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](schema-docs.md#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `initial_sampler`: unknown<br>* `interval`: unknown<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](schema-docs.md#experimentallanguagespecificinstrumentation) | unknown |  |  |
| [`ExperimentalLoggerConfig`](schema-docs.md#experimentalloggerconfig) | unknown |  | * `enabled`: unknown<br>* `minimum_severity`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalLoggerConfigurator`](schema-docs.md#experimentalloggerconfigurator) | unknown |  | * `default_config`: unknown<br>* `loggers`: unknown<br> |
| [`ExperimentalLoggerMatcherAndConfig`](schema-docs.md#experimentalloggermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalMeterConfig`](schema-docs.md#experimentalmeterconfig) | unknown |  | * `enabled`: unknown<br> |
| [`ExperimentalMeterConfigurator`](schema-docs.md#experimentalmeterconfigurator) | unknown |  | * `default_config`: unknown<br>* `meters`: unknown<br> |
| [`ExperimentalMeterMatcherAndConfig`](schema-docs.md#experimentalmetermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalOtlpFileExporter`](schema-docs.md#experimentalotlpfileexporter) | unknown |  | * `output_stream`: unknown<br> |
| [`ExperimentalOtlpFileMetricExporter`](schema-docs.md#experimentalotlpfilemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `output_stream`: unknown<br>* `temporality_preference`: unknown<br> |
| [`ExperimentalPeerInstrumentation`](schema-docs.md#experimentalpeerinstrumentation) | unknown |  | * `service_mapping`: unknown<br> |
| [`ExperimentalPeerServiceMapping`](schema-docs.md#experimentalpeerservicemapping) | unknown |  | * `peer`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalProbabilitySampler`](schema-docs.md#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](schema-docs.md#experimentalprocessresourcedetector) | unknown |  |  |
| [`ExperimentalPrometheusMetricExporter`](schema-docs.md#experimentalprometheusmetricexporter) | unknown |  | * `host`: unknown<br>* `port`: unknown<br>* `translation_strategy`: unknown<br>* `with_resource_constant_labels`: unknown<br>* `without_scope_info`: unknown<br>* `without_target_info`: unknown<br> |
| [`ExperimentalPrometheusTranslationStrategy`](schema-docs.md#experimentalprometheustranslationstrategy) | unknown |  | * `no_translation`: unknown<br>* `no_utf8_escaping_with_suffixes`: unknown<br>* `underscore_escaping_with_suffixes`: unknown<br>* `underscore_escaping_without_suffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](schema-docs.md#experimentalresourcedetection) | unknown |  | * `attributes`: unknown<br>* `detectors`: unknown<br> |
| [`ExperimentalResourceDetector`](schema-docs.md#experimentalresourcedetector) | unknown |  | * `container`: unknown<br>* `host`: unknown<br>* `process`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalServiceResourceDetector`](schema-docs.md#experimentalserviceresourcedetector) | unknown |  |  |
| [`ExperimentalSpanParent`](schema-docs.md#experimentalspanparent) | unknown |  | * `local`: unknown<br>* `none`: unknown<br>* `remote`: unknown<br> |
| [`ExperimentalTracerConfig`](schema-docs.md#experimentaltracerconfig) | unknown |  | * `enabled`: unknown<br> |
| [`ExperimentalTracerConfigurator`](schema-docs.md#experimentaltracerconfigurator) | unknown |  | * `default_config`: unknown<br>* `tracers`: unknown<br> |
| [`ExperimentalTracerMatcherAndConfig`](schema-docs.md#experimentaltracermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |


