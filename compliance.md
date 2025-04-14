### Aggregation <a id="Aggregation"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| default | <a href="#DefaultAggregation">DefaultAggregation</a> |  | | | | | | | | | | |
| drop | <a href="#DropAggregation">DropAggregation</a> |  | | | | | | | | | | |
| explicit_bucket_histogram | <a href="#ExplicitBucketHistogramAggregation">ExplicitBucketHistogramAggregation</a> |  | | | | | | | | | | |
| base2_exponential_bucket_histogram | <a href="#Base2ExponentialBucketHistogramAggregation">Base2ExponentialBucketHistogramAggregation</a> |  | | | | | | | | | | |
| last_value | <a href="#LastValueAggregation">LastValueAggregation</a> |  | | | | | | | | | | |
| sum | <a href="#SumAggregation">SumAggregation</a> |  | | | | | | | | | | |

### AlwaysOffSampler <a id="AlwaysOffSampler"></a>

### AlwaysOnSampler <a id="AlwaysOnSampler"></a>

### AttributeLimits <a id="AttributeLimits"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_value_length_limit | [integer, null] |  | | | | | | | | | | |
| attribute_count_limit | [integer, null] |  | | | | | | | | | | |

### AttributeNameValue <a id="AttributeNameValue"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| name | string |  | | | | | | | | | | |
| value | unknown |  | | | | | | | | | | |
| type | <a href="#AttributeType">AttributeType</a> |  | | | | | | | | | | |

### AttributeType <a id="AttributeType"></a>

### B3MultiPropagator <a id="B3MultiPropagator"></a>

### B3Propagator <a id="B3Propagator"></a>

### BaggagePropagator <a id="BaggagePropagator"></a>

### Base2ExponentialBucketHistogramAggregation <a id="Base2ExponentialBucketHistogramAggregation"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| max_scale | [integer, null] |  | | | | | | | | | | |
| max_size | [integer, null] |  | | | | | | | | | | |
| record_min_max | [boolean, null] |  | | | | | | | | | | |

### BatchLogRecordProcessor <a id="BatchLogRecordProcessor"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| schedule_delay | [integer, null] |  | | | | | | | | | | |
| export_timeout | [integer, null] |  | | | | | | | | | | |
| max_queue_size | [integer, null] |  | | | | | | | | | | |
| max_export_batch_size | [integer, null] |  | | | | | | | | | | |
| exporter | <a href="#LogRecordExporter">LogRecordExporter</a> |  | | | | | | | | | | |

### BatchSpanProcessor <a id="BatchSpanProcessor"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| schedule_delay | [integer, null] |  | | | | | | | | | | |
| export_timeout | [integer, null] |  | | | | | | | | | | |
| max_queue_size | [integer, null] |  | | | | | | | | | | |
| max_export_batch_size | [integer, null] |  | | | | | | | | | | |
| exporter | <a href="#SpanExporter">SpanExporter</a> |  | | | | | | | | | | |

### CardinalityLimits <a id="CardinalityLimits"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| default | [integer, null] |  | | | | | | | | | | |
| counter | [integer, null] |  | | | | | | | | | | |
| gauge | [integer, null] |  | | | | | | | | | | |
| histogram | [integer, null] |  | | | | | | | | | | |
| observable_counter | [integer, null] |  | | | | | | | | | | |
| observable_gauge | [integer, null] |  | | | | | | | | | | |
| observable_up_down_counter | [integer, null] |  | | | | | | | | | | |
| up_down_counter | [integer, null] |  | | | | | | | | | | |

### ConsoleExporter <a id="ConsoleExporter"></a>

### DefaultAggregation <a id="DefaultAggregation"></a>

### DropAggregation <a id="DropAggregation"></a>

### ExemplarFilter <a id="ExemplarFilter"></a>

### ExperimentalGeneralInstrumentation <a id="ExperimentalGeneralInstrumentation"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| peer | <a href="#ExperimentalPeerInstrumentation">ExperimentalPeerInstrumentation</a> |  | | | | | | | | | | |
| http | <a href="#ExperimentalHttpInstrumentation">ExperimentalHttpInstrumentation</a> |  | | | | | | | | | | |

### ExperimentalHttpInstrumentation <a id="ExperimentalHttpInstrumentation"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| client | object |  | | | | | | | | | | |
| server | object |  | | | | | | | | | | |

### ExperimentalInstrumentation <a id="ExperimentalInstrumentation"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| general | <a href="#ExperimentalGeneralInstrumentation">ExperimentalGeneralInstrumentation</a> |  | | | | | | | | | | |
| cpp | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| dotnet | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| erlang | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| go | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| java | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| js | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| php | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| python | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| ruby | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| rust | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |
| swift | <a href="#ExperimentalLanguageSpecificInstrumentation">ExperimentalLanguageSpecificInstrumentation</a> |  | | | | | | | | | | |

### ExperimentalLanguageSpecificInstrumentation <a id="ExperimentalLanguageSpecificInstrumentation"></a>

### ExperimentalLoggerConfig <a id="ExperimentalLoggerConfig"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| disabled | [boolean] |  | | | | | | | | | | |

### ExperimentalLoggerConfigurator <a id="ExperimentalLoggerConfigurator"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| default_config | <a href="#ExperimentalLoggerConfig">ExperimentalLoggerConfig</a> |  | | | | | | | | | | |
| loggers | <a href="#ExperimentalLoggerMatcherAndConfig">ExperimentalLoggerMatcherAndConfig</a>[] |  | | | | | | | | | | |

### ExperimentalLoggerMatcherAndConfig <a id="ExperimentalLoggerMatcherAndConfig"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| name | [string] |  | | | | | | | | | | |
| config | <a href="#ExperimentalLoggerConfig">ExperimentalLoggerConfig</a> |  | | | | | | | | | | |

### ExperimentalMeterConfig <a id="ExperimentalMeterConfig"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| disabled | [boolean] |  | | | | | | | | | | |

### ExperimentalMeterConfigurator <a id="ExperimentalMeterConfigurator"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| default_config | <a href="#ExperimentalMeterConfig">ExperimentalMeterConfig</a> |  | | | | | | | | | | |
| meters | <a href="#ExperimentalMeterMatcherAndConfig">ExperimentalMeterMatcherAndConfig</a>[] |  | | | | | | | | | | |

### ExperimentalMeterMatcherAndConfig <a id="ExperimentalMeterMatcherAndConfig"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| name | [string] |  | | | | | | | | | | |
| config | <a href="#ExperimentalMeterConfig">ExperimentalMeterConfig</a> |  | | | | | | | | | | |

### ExperimentalOtlpFileExporter <a id="ExperimentalOtlpFileExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| output_stream | [string, null] |  | | | | | | | | | | |

### ExperimentalOtlpFileMetricExporter <a id="ExperimentalOtlpFileMetricExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| output_stream | [string, null] |  | | | | | | | | | | |
| temporality_preference | <a href="#ExporterTemporalityPreference">ExporterTemporalityPreference</a> |  | | | | | | | | | | |
| default_histogram_aggregation | <a href="#ExporterDefaultHistogramAggregation">ExporterDefaultHistogramAggregation</a> |  | | | | | | | | | | |

### ExperimentalPeerInstrumentation <a id="ExperimentalPeerInstrumentation"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| service_mapping | object[] |  | | | | | | | | | | |

### ExperimentalPrometheusMetricExporter <a id="ExperimentalPrometheusMetricExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| host | [string, null] |  | | | | | | | | | | |
| port | [integer, null] |  | | | | | | | | | | |
| without_units | [boolean, null] |  | | | | | | | | | | |
| without_type_suffix | [boolean, null] |  | | | | | | | | | | |
| without_scope_info | [boolean, null] |  | | | | | | | | | | |
| with_resource_constant_labels | <a href="#IncludeExclude">IncludeExclude</a> |  | | | | | | | | | | |

### ExperimentalResourceDetection <a id="ExperimentalResourceDetection"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attributes | <a href="#IncludeExclude">IncludeExclude</a> |  | | | | | | | | | | |
| detectors | <a href="#ExperimentalResourceDetector">ExperimentalResourceDetector</a>[] |  | | | | | | | | | | |

### ExperimentalResourceDetector <a id="ExperimentalResourceDetector"></a>

### ExperimentalTracerConfig <a id="ExperimentalTracerConfig"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| disabled | [boolean] |  | | | | | | | | | | |

### ExperimentalTracerConfigurator <a id="ExperimentalTracerConfigurator"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| default_config | <a href="#ExperimentalTracerConfig">ExperimentalTracerConfig</a> |  | | | | | | | | | | |
| tracers | <a href="#ExperimentalTracerMatcherAndConfig">ExperimentalTracerMatcherAndConfig</a>[] |  | | | | | | | | | | |

### ExperimentalTracerMatcherAndConfig <a id="ExperimentalTracerMatcherAndConfig"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| name | [string] |  | | | | | | | | | | |
| config | <a href="#ExperimentalTracerConfig">ExperimentalTracerConfig</a> |  | | | | | | | | | | |

### ExplicitBucketHistogramAggregation <a id="ExplicitBucketHistogramAggregation"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| boundaries | number[] |  | | | | | | | | | | |
| record_min_max | [boolean, null] |  | | | | | | | | | | |

### ExporterDefaultHistogramAggregation <a id="ExporterDefaultHistogramAggregation"></a>

### ExporterTemporalityPreference <a id="ExporterTemporalityPreference"></a>

### IncludeExclude <a id="IncludeExclude"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| included | string[] |  | | | | | | | | | | |
| excluded | string[] |  | | | | | | | | | | |

### InstrumentType <a id="InstrumentType"></a>

### JaegerPropagator <a id="JaegerPropagator"></a>

### JaegerRemoteSampler <a id="JaegerRemoteSampler"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint | [string, null] |  | | | | | | | | | | |
| interval | [integer, null] |  | | | | | | | | | | |
| initial_sampler | <a href="#Sampler">Sampler</a> |  | | | | | | | | | | |

### LastValueAggregation <a id="LastValueAggregation"></a>

### LogRecordExporter <a id="LogRecordExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| otlp_http | <a href="#OtlpHttpExporter">OtlpHttpExporter</a> |  | | | | | | | | | | |
| otlp_grpc | <a href="#OtlpGrpcExporter">OtlpGrpcExporter</a> |  | | | | | | | | | | |
| otlp_file/development | <a href="#ExperimentalOtlpFileExporter">ExperimentalOtlpFileExporter</a> |  | | | | | | | | | | |
| console | <a href="#ConsoleExporter">ConsoleExporter</a> |  | | | | | | | | | | |

### LogRecordLimits <a id="LogRecordLimits"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_value_length_limit | [integer, null] |  | | | | | | | | | | |
| attribute_count_limit | [integer, null] |  | | | | | | | | | | |

### LogRecordProcessor <a id="LogRecordProcessor"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| batch | <a href="#BatchLogRecordProcessor">BatchLogRecordProcessor</a> |  | | | | | | | | | | |
| simple | <a href="#SimpleLogRecordProcessor">SimpleLogRecordProcessor</a> |  | | | | | | | | | | |

### LoggerProvider <a id="LoggerProvider"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| processors | <a href="#LogRecordProcessor">LogRecordProcessor</a>[] |  | | | | | | | | | | |
| limits | <a href="#LogRecordLimits">LogRecordLimits</a> |  | | | | | | | | | | |
| logger_configurator/development | <a href="#ExperimentalLoggerConfigurator">ExperimentalLoggerConfigurator</a> |  | | | | | | | | | | |

### MeterProvider <a id="MeterProvider"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| readers | <a href="#MetricReader">MetricReader</a>[] |  | | | | | | | | | | |
| views | <a href="#View">View</a>[] |  | | | | | | | | | | |
| exemplar_filter | <a href="#ExemplarFilter">ExemplarFilter</a> |  | | | | | | | | | | |
| meter_configurator/development | <a href="#ExperimentalMeterConfigurator">ExperimentalMeterConfigurator</a> |  | | | | | | | | | | |

### MetricProducer <a id="MetricProducer"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| opencensus | <a href="#OpenCensusMetricProducer">OpenCensusMetricProducer</a> |  | | | | | | | | | | |

### MetricReader <a id="MetricReader"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| periodic | <a href="#PeriodicMetricReader">PeriodicMetricReader</a> |  | | | | | | | | | | |
| pull | <a href="#PullMetricReader">PullMetricReader</a> |  | | | | | | | | | | |

### NameStringValuePair <a id="NameStringValuePair"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| name | string |  | | | | | | | | | | |
| value | [string, null] |  | | | | | | | | | | |

### OpenCensusMetricProducer <a id="OpenCensusMetricProducer"></a>

### OpenTelemetryConfiguration <a id="OpenTelemetryConfiguration"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| file_format | string |  | | | | | | | | | | |
| disabled | [boolean, null] |  | | | | | | | | | | |
| log_level | [string, null] |  | | | | | | | | | | |
| attribute_limits | <a href="#AttributeLimits">AttributeLimits</a> |  | | | | | | | | | | |
| logger_provider | <a href="#LoggerProvider">LoggerProvider</a> |  | | | | | | | | | | |
| meter_provider | <a href="#MeterProvider">MeterProvider</a> |  | | | | | | | | | | |
| propagator | <a href="#Propagator">Propagator</a> |  | | | | | | | | | | |
| tracer_provider | <a href="#TracerProvider">TracerProvider</a> |  | | | | | | | | | | |
| resource | <a href="#Resource">Resource</a> |  | | | | | | | | | | |
| instrumentation/development | <a href="#ExperimentalInstrumentation">ExperimentalInstrumentation</a> |  | | | | | | | | | | |

### OpenTracingPropagator <a id="OpenTracingPropagator"></a>

### OtlpGrpcExporter <a id="OtlpGrpcExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint | [string, null] |  | | | | | | | | | | |
| certificate_file | [string, null] |  | | | | | | | | | | |
| client_key_file | [string, null] |  | | | | | | | | | | |
| client_certificate_file | [string, null] |  | | | | | | | | | | |
| headers | <a href="#NameStringValuePair">NameStringValuePair</a>[] |  | | | | | | | | | | |
| headers_list | [string, null] |  | | | | | | | | | | |
| compression | [string, null] |  | | | | | | | | | | |
| timeout | [integer, null] |  | | | | | | | | | | |
| insecure | [boolean, null] |  | | | | | | | | | | |

### OtlpGrpcMetricExporter <a id="OtlpGrpcMetricExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint | [string, null] |  | | | | | | | | | | |
| certificate_file | [string, null] |  | | | | | | | | | | |
| client_key_file | [string, null] |  | | | | | | | | | | |
| client_certificate_file | [string, null] |  | | | | | | | | | | |
| headers | <a href="#NameStringValuePair">NameStringValuePair</a>[] |  | | | | | | | | | | |
| headers_list | [string, null] |  | | | | | | | | | | |
| compression | [string, null] |  | | | | | | | | | | |
| timeout | [integer, null] |  | | | | | | | | | | |
| insecure | [boolean, null] |  | | | | | | | | | | |
| temporality_preference | <a href="#ExporterTemporalityPreference">ExporterTemporalityPreference</a> |  | | | | | | | | | | |
| default_histogram_aggregation | <a href="#ExporterDefaultHistogramAggregation">ExporterDefaultHistogramAggregation</a> |  | | | | | | | | | | |

### OtlpHttpEncoding <a id="OtlpHttpEncoding"></a>

### OtlpHttpExporter <a id="OtlpHttpExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint | [string, null] |  | | | | | | | | | | |
| certificate_file | [string, null] |  | | | | | | | | | | |
| client_key_file | [string, null] |  | | | | | | | | | | |
| client_certificate_file | [string, null] |  | | | | | | | | | | |
| headers | <a href="#NameStringValuePair">NameStringValuePair</a>[] |  | | | | | | | | | | |
| headers_list | [string, null] |  | | | | | | | | | | |
| compression | [string, null] |  | | | | | | | | | | |
| timeout | [integer, null] |  | | | | | | | | | | |
| encoding | <a href="#OtlpHttpEncoding">OtlpHttpEncoding</a> |  | | | | | | | | | | |

### OtlpHttpMetricExporter <a id="OtlpHttpMetricExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint | [string, null] |  | | | | | | | | | | |
| certificate_file | [string, null] |  | | | | | | | | | | |
| client_key_file | [string, null] |  | | | | | | | | | | |
| client_certificate_file | [string, null] |  | | | | | | | | | | |
| headers | <a href="#NameStringValuePair">NameStringValuePair</a>[] |  | | | | | | | | | | |
| headers_list | [string, null] |  | | | | | | | | | | |
| compression | [string, null] |  | | | | | | | | | | |
| timeout | [integer, null] |  | | | | | | | | | | |
| encoding | <a href="#OtlpHttpEncoding">OtlpHttpEncoding</a> |  | | | | | | | | | | |
| temporality_preference | <a href="#ExporterTemporalityPreference">ExporterTemporalityPreference</a> |  | | | | | | | | | | |
| default_histogram_aggregation | <a href="#ExporterDefaultHistogramAggregation">ExporterDefaultHistogramAggregation</a> |  | | | | | | | | | | |

### ParentBasedSampler <a id="ParentBasedSampler"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| root | <a href="#Sampler">Sampler</a> |  | | | | | | | | | | |
| remote_parent_sampled | <a href="#Sampler">Sampler</a> |  | | | | | | | | | | |
| remote_parent_not_sampled | <a href="#Sampler">Sampler</a> |  | | | | | | | | | | |
| local_parent_sampled | <a href="#Sampler">Sampler</a> |  | | | | | | | | | | |
| local_parent_not_sampled | <a href="#Sampler">Sampler</a> |  | | | | | | | | | | |

### PeriodicMetricReader <a id="PeriodicMetricReader"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| interval | [integer, null] |  | | | | | | | | | | |
| timeout | [integer, null] |  | | | | | | | | | | |
| exporter | <a href="#PushMetricExporter">PushMetricExporter</a> |  | | | | | | | | | | |
| producers | <a href="#MetricProducer">MetricProducer</a>[] |  | | | | | | | | | | |
| cardinality_limits | <a href="#CardinalityLimits">CardinalityLimits</a> |  | | | | | | | | | | |

### Propagator <a id="Propagator"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| composite | <a href="#TextMapPropagator">TextMapPropagator</a>[] |  | | | | | | | | | | |
| composite_list | [string, null] |  | | | | | | | | | | |

### PullMetricExporter <a id="PullMetricExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| prometheus/development | <a href="#ExperimentalPrometheusMetricExporter">ExperimentalPrometheusMetricExporter</a> |  | | | | | | | | | | |

### PullMetricReader <a id="PullMetricReader"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| exporter | <a href="#PullMetricExporter">PullMetricExporter</a> |  | | | | | | | | | | |
| producers | <a href="#MetricProducer">MetricProducer</a>[] |  | | | | | | | | | | |
| cardinality_limits | <a href="#CardinalityLimits">CardinalityLimits</a> |  | | | | | | | | | | |

### PushMetricExporter <a id="PushMetricExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| otlp_http | <a href="#OtlpHttpMetricExporter">OtlpHttpMetricExporter</a> |  | | | | | | | | | | |
| otlp_grpc | <a href="#OtlpGrpcMetricExporter">OtlpGrpcMetricExporter</a> |  | | | | | | | | | | |
| otlp_file/development | <a href="#ExperimentalOtlpFileMetricExporter">ExperimentalOtlpFileMetricExporter</a> |  | | | | | | | | | | |
| console | <a href="#ConsoleExporter">ConsoleExporter</a> |  | | | | | | | | | | |

### Resource <a id="Resource"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attributes | <a href="#AttributeNameValue">AttributeNameValue</a>[] |  | | | | | | | | | | |
| detection/development | <a href="#ExperimentalResourceDetection">ExperimentalResourceDetection</a> |  | | | | | | | | | | |
| schema_url | [string, null] |  | | | | | | | | | | |
| attributes_list | [string, null] |  | | | | | | | | | | |

### Sampler <a id="Sampler"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| always_off | <a href="#AlwaysOffSampler">AlwaysOffSampler</a> |  | | | | | | | | | | |
| always_on | <a href="#AlwaysOnSampler">AlwaysOnSampler</a> |  | | | | | | | | | | |
| jaeger_remote | <a href="#JaegerRemoteSampler">JaegerRemoteSampler</a> |  | | | | | | | | | | |
| parent_based | <a href="#ParentBasedSampler">ParentBasedSampler</a> |  | | | | | | | | | | |
| trace_id_ratio_based | <a href="#TraceIdRatioBasedSampler">TraceIdRatioBasedSampler</a> |  | | | | | | | | | | |

### SimpleLogRecordProcessor <a id="SimpleLogRecordProcessor"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| exporter | <a href="#LogRecordExporter">LogRecordExporter</a> |  | | | | | | | | | | |

### SimpleSpanProcessor <a id="SimpleSpanProcessor"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| exporter | <a href="#SpanExporter">SpanExporter</a> |  | | | | | | | | | | |

### SpanExporter <a id="SpanExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| otlp_http | <a href="#OtlpHttpExporter">OtlpHttpExporter</a> |  | | | | | | | | | | |
| otlp_grpc | <a href="#OtlpGrpcExporter">OtlpGrpcExporter</a> |  | | | | | | | | | | |
| otlp_file/development | <a href="#ExperimentalOtlpFileExporter">ExperimentalOtlpFileExporter</a> |  | | | | | | | | | | |
| console | <a href="#ConsoleExporter">ConsoleExporter</a> |  | | | | | | | | | | |
| zipkin | <a href="#ZipkinSpanExporter">ZipkinSpanExporter</a> |  | | | | | | | | | | |

### SpanLimits <a id="SpanLimits"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_value_length_limit | [integer, null] |  | | | | | | | | | | |
| attribute_count_limit | [integer, null] |  | | | | | | | | | | |
| event_count_limit | [integer, null] |  | | | | | | | | | | |
| link_count_limit | [integer, null] |  | | | | | | | | | | |
| event_attribute_count_limit | [integer, null] |  | | | | | | | | | | |
| link_attribute_count_limit | [integer, null] |  | | | | | | | | | | |

### SpanProcessor <a id="SpanProcessor"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| batch | <a href="#BatchSpanProcessor">BatchSpanProcessor</a> |  | | | | | | | | | | |
| simple | <a href="#SimpleSpanProcessor">SimpleSpanProcessor</a> |  | | | | | | | | | | |

### SumAggregation <a id="SumAggregation"></a>

### TextMapPropagator <a id="TextMapPropagator"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| tracecontext | <a href="#TraceContextPropagator">TraceContextPropagator</a> |  | | | | | | | | | | |
| baggage | <a href="#BaggagePropagator">BaggagePropagator</a> |  | | | | | | | | | | |
| b3 | <a href="#B3Propagator">B3Propagator</a> |  | | | | | | | | | | |
| b3multi | <a href="#B3MultiPropagator">B3MultiPropagator</a> |  | | | | | | | | | | |
| jaeger | <a href="#JaegerPropagator">JaegerPropagator</a> |  | | | | | | | | | | |
| ottrace | <a href="#OpenTracingPropagator">OpenTracingPropagator</a> |  | | | | | | | | | | |

### TraceContextPropagator <a id="TraceContextPropagator"></a>

### TraceIdRatioBasedSampler <a id="TraceIdRatioBasedSampler"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ratio | [number, null] |  | | | | | | | | | | |

### TracerProvider <a id="TracerProvider"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| processors | <a href="#SpanProcessor">SpanProcessor</a>[] |  | | | | | | | | | | |
| limits | <a href="#SpanLimits">SpanLimits</a> |  | | | | | | | | | | |
| sampler | <a href="#Sampler">Sampler</a> |  | | | | | | | | | | |
| tracer_configurator/development | <a href="#ExperimentalTracerConfigurator">ExperimentalTracerConfigurator</a> |  | | | | | | | | | | |

### View <a id="View"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| selector | <a href="#ViewSelector">ViewSelector</a> |  | | | | | | | | | | |
| stream | <a href="#ViewStream">ViewStream</a> |  | | | | | | | | | | |

### ViewSelector <a id="ViewSelector"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| instrument_name | [string, null] |  | | | | | | | | | | |
| instrument_type | <a href="#InstrumentType">InstrumentType</a> |  | | | | | | | | | | |
| unit | [string, null] |  | | | | | | | | | | |
| meter_name | [string, null] |  | | | | | | | | | | |
| meter_version | [string, null] |  | | | | | | | | | | |
| meter_schema_url | [string, null] |  | | | | | | | | | | |

### ViewStream <a id="ViewStream"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| name | [string, null] |  | | | | | | | | | | |
| description | [string, null] |  | | | | | | | | | | |
| aggregation | <a href="#Aggregation">Aggregation</a> |  | | | | | | | | | | |
| aggregation_cardinality_limit | [integer, null] |  | | | | | | | | | | |
| attribute_keys | <a href="#IncludeExclude">IncludeExclude</a> |  | | | | | | | | | | |

### ZipkinSpanExporter <a id="ZipkinSpanExporter"></a>

| Property | Type | c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint | [string, null] |  | | | | | | | | | | |
| timeout | [integer, null] |  | | | | | | | | | | |

