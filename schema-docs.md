<!-- This file is generated using "make generate-markdown". Do not edit directly. -->

* [Overview](#overview)
* [Types](#types)
  * [Aggregation](#aggregation)
  * [AlwaysOffSampler](#alwaysoffsampler)
  * [AlwaysOnSampler](#alwaysonsampler)
  * [AttributeLimits](#attributelimits)
  * [AttributeNameValue](#attributenamevalue)
  * [AttributeType](#attributetype)
  * [B3MultiPropagator](#b3multipropagator)
  * [B3Propagator](#b3propagator)
  * [BaggagePropagator](#baggagepropagator)
  * [Base2ExponentialBucketHistogramAggregation](#base2exponentialbuckethistogramaggregation)
  * [BatchLogRecordProcessor](#batchlogrecordprocessor)
  * [BatchSpanProcessor](#batchspanprocessor)
  * [CardinalityLimits](#cardinalitylimits)
  * [ConsoleExporter](#consoleexporter)
  * [DefaultAggregation](#defaultaggregation)
  * [DropAggregation](#dropaggregation)
  * [ExemplarFilter](#exemplarfilter)
  * [ExperimentalContainerResourceDetector](#experimentalcontainerresourcedetector)
  * [ExperimentalGeneralInstrumentation](#experimentalgeneralinstrumentation)
  * [ExperimentalHostResourceDetector](#experimentalhostresourcedetector)
  * [ExperimentalHttpClientInstrumentation](#experimentalhttpclientinstrumentation)
  * [ExperimentalHttpInstrumentation](#experimentalhttpinstrumentation)
  * [ExperimentalHttpServerInstrumentation](#experimentalhttpserverinstrumentation)
  * [ExperimentalInstrumentation](#experimentalinstrumentation)
  * [ExperimentalLanguageSpecificInstrumentation](#experimentallanguagespecificinstrumentation)
  * [ExperimentalLoggerConfig](#experimentalloggerconfig)
  * [ExperimentalLoggerConfigurator](#experimentalloggerconfigurator)
  * [ExperimentalLoggerMatcherAndConfig](#experimentalloggermatcherandconfig)
  * [ExperimentalMeterConfig](#experimentalmeterconfig)
  * [ExperimentalMeterConfigurator](#experimentalmeterconfigurator)
  * [ExperimentalMeterMatcherAndConfig](#experimentalmetermatcherandconfig)
  * [ExperimentalOtlpFileExporter](#experimentalotlpfileexporter)
  * [ExperimentalOtlpFileMetricExporter](#experimentalotlpfilemetricexporter)
  * [ExperimentalPeerInstrumentation](#experimentalpeerinstrumentation)
  * [ExperimentalPeerServiceMapping](#experimentalpeerservicemapping)
  * [ExperimentalProcessResourceDetector](#experimentalprocessresourcedetector)
  * [ExperimentalPrometheusMetricExporter](#experimentalprometheusmetricexporter)
  * [ExperimentalResourceDetection](#experimentalresourcedetection)
  * [ExperimentalResourceDetector](#experimentalresourcedetector)
  * [ExperimentalServiceResourceDetector](#experimentalserviceresourcedetector)
  * [ExperimentalTracerConfig](#experimentaltracerconfig)
  * [ExperimentalTracerConfigurator](#experimentaltracerconfigurator)
  * [ExperimentalTracerMatcherAndConfig](#experimentaltracermatcherandconfig)
  * [ExplicitBucketHistogramAggregation](#explicitbuckethistogramaggregation)
  * [ExporterDefaultHistogramAggregation](#exporterdefaulthistogramaggregation)
  * [ExporterTemporalityPreference](#exportertemporalitypreference)
  * [IncludeExclude](#includeexclude)
  * [InstrumentType](#instrumenttype)
  * [JaegerPropagator](#jaegerpropagator)
  * [JaegerRemoteSampler](#jaegerremotesampler)
  * [LastValueAggregation](#lastvalueaggregation)
  * [LoggerProvider](#loggerprovider)
  * [LogRecordExporter](#logrecordexporter)
  * [LogRecordLimits](#logrecordlimits)
  * [LogRecordProcessor](#logrecordprocessor)
  * [MeterProvider](#meterprovider)
  * [MetricProducer](#metricproducer)
  * [MetricReader](#metricreader)
  * [NameStringValuePair](#namestringvaluepair)
  * [OpenCensusMetricProducer](#opencensusmetricproducer)
  * [OpentelemetryConfiguration](#opentelemetryconfiguration)
  * [OpenTracingPropagator](#opentracingpropagator)
  * [OtlpGrpcExporter](#otlpgrpcexporter)
  * [OtlpGrpcMetricExporter](#otlpgrpcmetricexporter)
  * [OtlpHttpEncoding](#otlphttpencoding)
  * [OtlpHttpExporter](#otlphttpexporter)
  * [OtlpHttpMetricExporter](#otlphttpmetricexporter)
  * [ParentBasedSampler](#parentbasedsampler)
  * [PeriodicMetricReader](#periodicmetricreader)
  * [Propagator](#propagator)
  * [PullMetricExporter](#pullmetricexporter)
  * [PullMetricReader](#pullmetricreader)
  * [PushMetricExporter](#pushmetricexporter)
  * [Resource](#resource)
  * [Sampler](#sampler)
  * [SimpleLogRecordProcessor](#simplelogrecordprocessor)
  * [SimpleSpanProcessor](#simplespanprocessor)
  * [SpanExporter](#spanexporter)
  * [SpanLimits](#spanlimits)
  * [SpanProcessor](#spanprocessor)
  * [SumAggregation](#sumaggregation)
  * [TextMapPropagator](#textmappropagator)
  * [TraceContextPropagator](#tracecontextpropagator)
  * [TraceIdRatioBasedSampler](#traceidratiobasedsampler)
  * [TracerProvider](#tracerprovider)
  * [View](#view)
  * [ViewSelector](#viewselector)
  * [ViewStream](#viewstream)
  * [ZipkinSpanExporter](#zipkinspanexporter)
* [SDK Extension Plugins](#sdk-extension-plugins)


# Overview <a id="overview"></a>

TODO
# Types <a id="types"></a>

## Aggregation <a id="aggregation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default` | TODO | [`DefaultAggregation`](#defaultaggregation) | `false` |
| `drop` | TODO | [`DropAggregation`](#dropaggregation) | `false` |
| `explicit_bucket_histogram` | Configure aggregation to be explicit_bucket_histogram. | [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | `false` |
| `base2_exponential_bucket_histogram` | TODO | [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | `false` |
| `last_value` | TODO | [`LastValueAggregation`](#lastvalueaggregation) | `false` |
| `sum` | TODO | [`SumAggregation`](#sumaggregation) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "default": {
      "$ref": "#/$defs/DefaultAggregation"
    },
    "drop": {
      "$ref": "#/$defs/DropAggregation"
    },
    "explicit_bucket_histogram": {
      "$ref": "#/$defs/ExplicitBucketHistogramAggregation"
    },
    "base2_exponential_bucket_histogram": {
      "$ref": "#/$defs/Base2ExponentialBucketHistogramAggregation"
    },
    "last_value": {
      "$ref": "#/$defs/LastValueAggregation"
    },
    "sum": {
      "$ref": "#/$defs/SumAggregation"
    }
  }
}</pre>
</details>

## AlwaysOffSampler <a id="alwaysoffsampler"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## AlwaysOnSampler <a id="alwaysonsampler"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## AttributeLimits <a id="attributelimits"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attribute_value_length_limit` | Configure max attribute value size. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `attribute_count_limit` | Configure max attribute count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "properties": {
    "attribute_value_length_limit": {
      "type": [
        "integer",
        "null"
      ]
    },
    "attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ]
    }
  }
}</pre>
</details>

## AttributeNameValue <a id="attributenamevalue"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | The attribute name.<br> | `string` | `true` |
| `value` | The attribute value.<br>The type of value must match .type.<br> | `oneOf` | `true` |
| `type` | The attribute type.<br>Values include: string, bool, int, double, string_array, bool_array, int_array, double_array.<br>If omitted or null, string is used.<br> | [`AttributeType`](#attributetype) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": "string"
    },
    "value": {
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "number"
        },
        {
          "type": "boolean"
        },
        {
          "type": "null"
        },
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        {
          "type": "array",
          "items": {
            "type": "boolean"
          }
        },
        {
          "type": "array",
          "items": {
            "type": "number"
          }
        }
      ]
    },
    "type": {
      "$ref": "#/$defs/AttributeType"
    }
  },
  "required": [
    "name",
    "value"
  ]
}</pre>
</details>

## AttributeType <a id="attributetype"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    null,
    "string",
    "bool",
    "int",
    "double",
    "string_array",
    "bool_array",
    "int_array",
    "double_array"
  ]
}</pre>
</details>

## B3MultiPropagator <a id="b3multipropagator"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## B3Propagator <a id="b3propagator"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## BaggagePropagator <a id="baggagepropagator"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## Base2ExponentialBucketHistogramAggregation <a id="base2exponentialbuckethistogramaggregation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `max_scale` | TODO | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `max_size` | TODO | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `record_min_max` | TODO | one of:<br>* `boolean`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "max_scale": {
      "type": [
        "integer",
        "null"
      ]
    },
    "max_size": {
      "type": [
        "integer",
        "null"
      ]
    },
    "record_min_max": {
      "type": [
        "boolean",
        "null"
      ]
    }
  }
}</pre>
</details>

## BatchLogRecordProcessor <a id="batchlogrecordprocessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `schedule_delay` | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 1000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `export_timeout` | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `max_queue_size` | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `max_export_batch_size` | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `exporter` | Configure exporter. | [`LogRecordExporter`](#logrecordexporter) | `true` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "schedule_delay": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "export_timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "max_queue_size": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "max_export_batch_size": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "exporter": {
      "$ref": "#/$defs/LogRecordExporter"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## BatchSpanProcessor <a id="batchspanprocessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `schedule_delay` | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 5000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `export_timeout` | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `max_queue_size` | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `max_export_batch_size` | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `exporter` | Configure exporter. | [`SpanExporter`](#spanexporter) | `true` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "schedule_delay": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "export_timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "max_queue_size": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "max_export_batch_size": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "exporter": {
      "$ref": "#/$defs/SpanExporter"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## CardinalityLimits <a id="cardinalitylimits"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default` | Configure default cardinality limit for all instrument types.<br>Instrument-specific cardinality limits take priority. <br>If omitted or null, 2000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `counter` | Configure default cardinality limit for counter instruments.<br>If omitted or null, the value from .default is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `gauge` | Configure default cardinality limit for gauge instruments.<br>If omitted or null, the value from .default is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `histogram` | Configure default cardinality limit for histogram instruments.<br>If omitted or null, the value from .default is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `observable_counter` | Configure default cardinality limit for observable_counter instruments.<br>If omitted or null, the value from .default is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `observable_gauge` | Configure default cardinality limit for observable_gauge instruments.<br>If omitted or null, the value from .default is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `observable_up_down_counter` | Configure default cardinality limit for observable_up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `up_down_counter` | Configure default cardinality limit for up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "default": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "counter": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "gauge": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "histogram": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "observable_counter": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "observable_gauge": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "observable_up_down_counter": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "up_down_counter": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    }
  }
}</pre>
</details>

## ConsoleExporter <a id="consoleexporter"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## DefaultAggregation <a id="defaultaggregation"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## DropAggregation <a id="dropaggregation"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExemplarFilter <a id="exemplarfilter"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "always_on",
    "always_off",
    "trace_based"
  ]
}</pre>
</details>

## ExperimentalContainerResourceDetector <a id="experimentalcontainerresourcedetector"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalGeneralInstrumentation <a id="experimentalgeneralinstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `peer` | Configure instrumentations following the peer semantic conventions.<br>See peer semantic conventions: https://opentelemetry.io/docs/specs/semconv/attributes-registry/peer/<br> | [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | `false` |
| `http` | Configure instrumentations following the http semantic conventions.<br>See http semantic conventions: https://opentelemetry.io/docs/specs/semconv/http/<br> | [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "peer": {
      "$ref": "#/$defs/ExperimentalPeerInstrumentation"
    },
    "http": {
      "$ref": "#/$defs/ExperimentalHttpInstrumentation"
    }
  }
}</pre>
</details>

## ExperimentalHostResourceDetector <a id="experimentalhostresourcedetector"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalHttpClientInstrumentation <a id="experimentalhttpclientinstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `request_captured_headers` | Configure headers to capture for outbound http requests.<br> | `array` of `string` | `false` |
| `response_captured_headers` | Configure headers to capture for inbound http responses.<br> | `array` of `string` | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "request_captured_headers": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "response_captured_headers": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}</pre>
</details>

## ExperimentalHttpInstrumentation <a id="experimentalhttpinstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `client` | Configure instrumentations following the http client semantic conventions. | [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | `false` |
| `server` | Configure instrumentations following the http server semantic conventions. | [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "client": {
      "$ref": "#/$defs/ExperimentalHttpClientInstrumentation"
    },
    "server": {
      "$ref": "#/$defs/ExperimentalHttpServerInstrumentation"
    }
  }
}</pre>
</details>

## ExperimentalHttpServerInstrumentation <a id="experimentalhttpserverinstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `request_captured_headers` | Configure headers to capture for inbound http requests.<br> | `array` of `string` | `false` |
| `response_captured_headers` | Configure headers to capture for outbound http responses.<br> | `array` of `string` | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "request_captured_headers": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "response_captured_headers": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}</pre>
</details>

## ExperimentalInstrumentation <a id="experimentalinstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `general` | Configure general SemConv options that may apply to multiple languages and instrumentations.<br>Instrumenation may merge general config options with the language specific configuration at .instrumentation.<language>.<br> | [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | `false` |
| `cpp` | Configure C++ language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `dotnet` | Configure .NET language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `erlang` | Configure Erlang language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `go` | Configure Go language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `java` | Configure Java language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `js` | Configure JavaScript language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `php` | Configure PHP language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `python` | Configure Python language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `ruby` | Configure Ruby language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `rust` | Configure Rust language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |
| `swift` | Configure Swift language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/instrumentation.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "general": {
      "$ref": "#/$defs/ExperimentalGeneralInstrumentation"
    },
    "cpp": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "dotnet": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "erlang": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "go": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "java": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "js": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "php": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "python": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "ruby": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "rust": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    },
    "swift": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    }
  },
  "patternProperties": {
    ".*": {
      "$ref": "#/$defs/ExperimentalLanguageSpecificInstrumentation"
    }
  },
  "$defs": {
    "ExperimentalGeneralInstrumentation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "peer": {
          "$ref": "#/$defs/ExperimentalPeerInstrumentation"
        },
        "http": {
          "$ref": "#/$defs/ExperimentalHttpInstrumentation"
        }
      }
    },
    "ExperimentalPeerInstrumentation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "service_mapping": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/ExperimentalPeerServiceMapping"
          }
        }
      }
    },
    "ExperimentalPeerServiceMapping": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "peer": {
          "type": "string"
        },
        "service": {
          "type": "string"
        }
      },
      "required": [
        "peer",
        "service"
      ]
    },
    "ExperimentalHttpClientInstrumentation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "request_captured_headers": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "response_captured_headers": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "ExperimentalHttpServerInstrumentation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "request_captured_headers": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "response_captured_headers": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "ExperimentalHttpInstrumentation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "client": {
          "$ref": "#/$defs/ExperimentalHttpClientInstrumentation"
        },
        "server": {
          "$ref": "#/$defs/ExperimentalHttpServerInstrumentation"
        }
      }
    },
    "ExperimentalLanguageSpecificInstrumentation": {
      "type": "object",
      "additionalProperties": true,
      "patternProperties": {
        ".*": {
          "type": "object"
        }
      }
    }
  }
}</pre>
</details>

## ExperimentalLanguageSpecificInstrumentation <a id="experimentallanguagespecificinstrumentation"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "patternProperties": {
    ".*": {
      "type": "object"
    }
  }
}</pre>
</details>

## ExperimentalLoggerConfig <a id="experimentalloggerconfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `disabled` | Configure if the logger is enabled or not. | `boolean` | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "disabled": {
      "type": [
        "boolean"
      ]
    }
  }
}</pre>
</details>

## ExperimentalLoggerConfigurator <a id="experimentalloggerconfigurator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default_config` | Configure the default logger config used there is no matching entry in .logger_configurator/development.loggers. | [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | `false` |
| `loggers` | Configure loggers. | `array` of [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "default_config": {
      "$ref": "#/$defs/ExperimentalLoggerConfig"
    },
    "loggers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/ExperimentalLoggerMatcherAndConfig"
      }
    }
  }
}</pre>
</details>

## ExperimentalLoggerMatcherAndConfig <a id="experimentalloggermatcherandconfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | Configure logger names to match, evaluated as follows:<br><br> * If the logger name exactly matches.<br> * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> | `string` | `false` |
| `config` | The logger config. | [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": [
        "string"
      ]
    },
    "config": {
      "$ref": "#/$defs/ExperimentalLoggerConfig"
    }
  }
}</pre>
</details>

## ExperimentalMeterConfig <a id="experimentalmeterconfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `disabled` | Configure if the meter is enabled or not. | `boolean` | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "disabled": {
      "type": [
        "boolean"
      ]
    }
  }
}</pre>
</details>

## ExperimentalMeterConfigurator <a id="experimentalmeterconfigurator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default_config` | Configure the default meter config used there is no matching entry in .meter_configurator/development.meters. | [`ExperimentalMeterConfig`](#experimentalmeterconfig) | `false` |
| `meters` | Configure meters. | `array` of [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "default_config": {
      "$ref": "#/$defs/ExperimentalMeterConfig"
    },
    "meters": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/ExperimentalMeterMatcherAndConfig"
      }
    }
  }
}</pre>
</details>

## ExperimentalMeterMatcherAndConfig <a id="experimentalmetermatcherandconfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | Configure meter names to match, evaluated as follows:<br><br> * If the meter name exactly matches.<br> * If the meter name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> | `string` | `false` |
| `config` | The meter config. | [`ExperimentalMeterConfig`](#experimentalmeterconfig) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": [
        "string"
      ]
    },
    "config": {
      "$ref": "#/$defs/ExperimentalMeterConfig"
    }
  }
}</pre>
</details>

## ExperimentalOtlpFileExporter <a id="experimentalotlpfileexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `output_stream` | Configure output stream. <br>Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br>If omitted or null, stdout is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "output_stream": {
      "type": [
        "string",
        "null"
      ]
    }
  }
}</pre>
</details>

## ExperimentalOtlpFileMetricExporter <a id="experimentalotlpfilemetricexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `output_stream` | Configure output stream. <br>Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br>If omitted or null, stdout is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `temporality_preference` | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` |
| `default_histogram_aggregation` | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "output_stream": {
      "type": [
        "string",
        "null"
      ]
    },
    "temporality_preference": {
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
    }
  }
}</pre>
</details>

## ExperimentalPeerInstrumentation <a id="experimentalpeerinstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `service_mapping` | Configure the service mapping for instrumentations following peer.service semantic conventions.<br>See peer.service semantic conventions: https://opentelemetry.io/docs/specs/semconv/general/attributes/#general-remote-service-attributes<br> | `array` of [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "service_mapping": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/ExperimentalPeerServiceMapping"
      }
    }
  }
}</pre>
</details>

## ExperimentalPeerServiceMapping <a id="experimentalpeerservicemapping"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `peer` | The IP address to map.<br> | `string` | `true` |
| `service` | The logical name corresponding to the IP address of .peer.<br> | `string` | `true` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "peer": {
      "type": "string"
    },
    "service": {
      "type": "string"
    }
  },
  "required": [
    "peer",
    "service"
  ]
}</pre>
</details>

## ExperimentalProcessResourceDetector <a id="experimentalprocessresourcedetector"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalPrometheusMetricExporter <a id="experimentalprometheusmetricexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `host` | Configure host.<br>If omitted or null, localhost is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `port` | Configure port.<br>If omitted or null, 9464 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `without_scope_info` | Configure Prometheus Exporter to produce metrics without a scope info metric.<br>If omitted or null, false is used.<br> | one of:<br>* `boolean`<br>* `null`<br> | `false` |
| `with_resource_constant_labels` | Configure Prometheus Exporter to add resource attributes as metrics attributes, where the resource attribute keys match the patterns. | [`IncludeExclude`](#includeexclude) | `false` |
| `translation_strategy` | Configure how Prometheus metrics are exposed. Values include:<br><br> * UnderscoreEscapingWithSuffixes, the default. This fully escapes metric names for classic Prometheus metric name compatibility, and includes appending type and unit suffixes.<br> * UnderscoreEscapingWithoutSuffixes, metric names will continue to escape special characters to _, but suffixes won't be attached.<br> * NoUTF8EscapingWithSuffixes will disable changing special characters to _. Special suffixes like units and _total for counters will be attached.<br> * NoTranslation. This strategy bypasses all metric and label name translation, passing them through unaltered.<br><br>If omitted or null, UnderscoreEscapingWithSuffixes is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "host": {
      "type": [
        "string",
        "null"
      ]
    },
    "port": {
      "type": [
        "integer",
        "null"
      ]
    },
    "without_scope_info": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "with_resource_constant_labels": {
      "$ref": "common.json#/$defs/IncludeExclude"
    },
    "translation_strategy": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        "UnderscoreEscapingWithSuffixes",
        "UnderscoreEscapingWithoutSuffixes",
        "NoUTF8EscapingWithSuffixes",
        "NoTranslation"
      ]
    }
  }
}</pre>
</details>

## ExperimentalResourceDetection <a id="experimentalresourcedetection"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attributes` | Configure attributes provided by resource detectors. | [`IncludeExclude`](#includeexclude) | `false` |
| `detectors` | Configure resource detectors.<br>Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language. <br>If omitted or null, no resource detectors are enabled.<br> | `array` of [`ExperimentalResourceDetector`](#experimentalresourcedetector) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attributes": {
      "$ref": "common.json#/$defs/IncludeExclude"
    },
    "detectors": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/ExperimentalResourceDetector"
      }
    }
  }
}</pre>
</details>

## ExperimentalResourceDetector <a id="experimentalresourcedetector"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `container` | Enable the container resource detector, which populates container.* attributes.<br> | [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | `false` |
| `host` | Enable the host resource detector, which populates host.* and os.* attributes.<br> | [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | `false` |
| `process` | Enable the process resource detector, which populates process.* attributes.<br> | [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | `false` |
| `service` | Enable the service detector, which populates service.name based on the OTEL_SERVICE_NAME environment variable and service.instance.id.<br> | [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "container": {
      "$ref": "#/$defs/ExperimentalContainerResourceDetector"
    },
    "host": {
      "$ref": "#/$defs/ExperimentalHostResourceDetector"
    },
    "process": {
      "$ref": "#/$defs/ExperimentalProcessResourceDetector"
    },
    "service": {
      "$ref": "#/$defs/ExperimentalServiceResourceDetector"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre>
</details>

## ExperimentalServiceResourceDetector <a id="experimentalserviceresourcedetector"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalTracerConfig <a id="experimentaltracerconfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `disabled` | Configure if the tracer is enabled or not. | `boolean` | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "disabled": {
      "type": [
        "boolean"
      ]
    }
  }
}</pre>
</details>

## ExperimentalTracerConfigurator <a id="experimentaltracerconfigurator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default_config` | Configure the default tracer config used there is no matching entry in .tracer_configurator/development.tracers. | [`ExperimentalTracerConfig`](#experimentaltracerconfig) | `false` |
| `tracers` | Configure tracers. | `array` of [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "default_config": {
      "$ref": "#/$defs/ExperimentalTracerConfig"
    },
    "tracers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/ExperimentalTracerMatcherAndConfig"
      }
    }
  }
}</pre>
</details>

## ExperimentalTracerMatcherAndConfig <a id="experimentaltracermatcherandconfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | Configure tracer names to match, evaluated as follows:<br><br> * If the tracer name exactly matches.<br> * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> | `string` | `false` |
| `config` | The tracer config. | [`ExperimentalTracerConfig`](#experimentaltracerconfig) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": [
        "string"
      ]
    },
    "config": {
      "$ref": "#/$defs/ExperimentalTracerConfig"
    }
  }
}</pre>
</details>

## ExplicitBucketHistogramAggregation <a id="explicitbuckethistogramaggregation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `boundaries` | Configure bucket boundaries.<br>If omitted, [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 10000] is used.<br> | `array` of `number` | `false` |
| `record_min_max` | Configure record min and max.<br>If omitted or null, true is used.<br> | one of:<br>* `boolean`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "boundaries": {
      "type": "array",
      "items": {
        "type": "number"
      }
    },
    "record_min_max": {
      "type": [
        "boolean",
        "null"
      ]
    }
  }
}</pre>
</details>

## ExporterDefaultHistogramAggregation <a id="exporterdefaulthistogramaggregation"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "explicit_bucket_histogram",
    "base2_exponential_bucket_histogram"
  ]
}</pre>
</details>

## ExporterTemporalityPreference <a id="exportertemporalitypreference"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "cumulative",
    "delta",
    "low_memory"
  ]
}</pre>
</details>

## IncludeExclude <a id="includeexclude"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `included` | Configure list of value patterns to include.<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, all values are included.<br> | `array` of `string` | `false` |
| `excluded` | Configure list of value patterns to exclude. Applies after .included (i.e. excluded has higher priority than included).<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, .included attributes are included.<br> | `array` of `string` | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "included": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "excluded": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}</pre>
</details>

## InstrumentType <a id="instrumenttype"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "counter",
    "gauge",
    "histogram",
    "observable_counter",
    "observable_gauge",
    "observable_up_down_counter",
    "up_down_counter"
  ]
}</pre>
</details>

## JaegerPropagator <a id="jaegerpropagator"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## JaegerRemoteSampler <a id="jaegerremotesampler"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | TODO | one of:<br>* `string`<br>* `null`<br> | `false` |
| `interval` | TODO | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `initial_sampler` | TODO | [`Sampler`](#sampler) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "interval": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "initial_sampler": {
      "$ref": "#/$defs/Sampler"
    }
  }
}</pre>
</details>

## LastValueAggregation <a id="lastvalueaggregation"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## LoggerProvider <a id="loggerprovider"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `processors` | Configure log record processors. | `array` of [`LogRecordProcessor`](#logrecordprocessor) | `true` |
| `limits` | Configure log record limits. See also attribute_limits. | [`LogRecordLimits`](#logrecordlimits) | `false` |
| `logger_configurator/development` | Configure loggers.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/logger_provider.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "processors": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/LogRecordProcessor"
      }
    },
    "limits": {
      "$ref": "#/$defs/LogRecordLimits"
    },
    "logger_configurator/development": {
      "$ref": "#/$defs/ExperimentalLoggerConfigurator"
    }
  },
  "required": [
    "processors"
  ],
  "$defs": {
    "SimpleLogRecordProcessor": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "exporter": {
          "$ref": "#/$defs/LogRecordExporter"
        }
      },
      "required": [
        "exporter"
      ]
    },
    "BatchLogRecordProcessor": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "schedule_delay": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "export_timeout": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "max_queue_size": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "max_export_batch_size": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "exporter": {
          "$ref": "#/$defs/LogRecordExporter"
        }
      },
      "required": [
        "exporter"
      ]
    },
    "LogRecordExporter": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "otlp_http": {
          "$ref": "common.json#/$defs/OtlpHttpExporter"
        },
        "otlp_grpc": {
          "$ref": "common.json#/$defs/OtlpGrpcExporter"
        },
        "otlp_file/development": {
          "$ref": "common.json#/$defs/ExperimentalOtlpFileExporter"
        },
        "console": {
          "$ref": "common.json#/$defs/ConsoleExporter"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "LogRecordLimits": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "attribute_value_length_limit": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "attribute_count_limit": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        }
      }
    },
    "LogRecordProcessor": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "batch": {
          "$ref": "#/$defs/BatchLogRecordProcessor"
        },
        "simple": {
          "$ref": "#/$defs/SimpleLogRecordProcessor"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object"
          ]
        }
      }
    },
    "ExperimentalLoggerConfigurator": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "default_config": {
          "$ref": "#/$defs/ExperimentalLoggerConfig"
        },
        "loggers": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/ExperimentalLoggerMatcherAndConfig"
          }
        }
      }
    },
    "ExperimentalLoggerMatcherAndConfig": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": [
            "string"
          ]
        },
        "config": {
          "$ref": "#/$defs/ExperimentalLoggerConfig"
        }
      }
    },
    "ExperimentalLoggerConfig": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": [
            "boolean"
          ]
        }
      }
    }
  }
}</pre>
</details>

## LogRecordExporter <a id="logrecordexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `otlp_http` | Configure exporter to be OTLP with HTTP transport. | [`OtlpHttpExporter`](#otlphttpexporter) | `false` |
| `otlp_grpc` | Configure exporter to be OTLP with gRPC transport. | [`OtlpGrpcExporter`](#otlpgrpcexporter) | `false` |
| `otlp_file/development` | Configure exporter to be OTLP with file transport.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` |
| `console` | Configure exporter to be console. | [`ConsoleExporter`](#consoleexporter) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "otlp_http": {
      "$ref": "common.json#/$defs/OtlpHttpExporter"
    },
    "otlp_grpc": {
      "$ref": "common.json#/$defs/OtlpGrpcExporter"
    },
    "otlp_file/development": {
      "$ref": "common.json#/$defs/ExperimentalOtlpFileExporter"
    },
    "console": {
      "$ref": "common.json#/$defs/ConsoleExporter"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre>
</details>

## LogRecordLimits <a id="logrecordlimits"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attribute_value_length_limit` | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `attribute_count_limit` | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attribute_value_length_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    }
  }
}</pre>
</details>

## LogRecordProcessor <a id="logrecordprocessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `batch` | Configure a batch log record processor. | [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | `false` |
| `simple` | Configure a simple log record processor. | [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "batch": {
      "$ref": "#/$defs/BatchLogRecordProcessor"
    },
    "simple": {
      "$ref": "#/$defs/SimpleLogRecordProcessor"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object"
      ]
    }
  }
}</pre>
</details>

## MeterProvider <a id="meterprovider"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `readers` | Configure metric readers. | `array` of [`MetricReader`](#metricreader) | `true` |
| `views` | Configure views. <br>Each view has a selector which determines the instrument(s) it applies to, and a configuration for the resulting stream(s).<br> | `array` of [`View`](#view) | `false` |
| `exemplar_filter` | Configure the exemplar filter. <br>Values include: trace_based, always_on, always_off. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#metrics-sdk-configuration.<br>If omitted or null, trace_based is used.<br> | [`ExemplarFilter`](#exemplarfilter) | `false` |
| `meter_configurator/development` | Configure meters.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/meter_provider.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "readers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/MetricReader"
      }
    },
    "views": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/View"
      }
    },
    "exemplar_filter": {
      "$ref": "#/$defs/ExemplarFilter"
    },
    "meter_configurator/development": {
      "$ref": "#/$defs/ExperimentalMeterConfigurator"
    }
  },
  "required": [
    "readers"
  ],
  "$defs": {
    "ExemplarFilter": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        "always_on",
        "always_off",
        "trace_based"
      ]
    },
    "PeriodicMetricReader": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "interval": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "timeout": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "exporter": {
          "$ref": "#/$defs/PushMetricExporter"
        },
        "producers": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/MetricProducer"
          }
        },
        "cardinality_limits": {
          "$ref": "#/$defs/CardinalityLimits"
        }
      },
      "required": [
        "exporter"
      ]
    },
    "PullMetricReader": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "exporter": {
          "$ref": "#/$defs/PullMetricExporter"
        },
        "producers": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/MetricProducer"
          }
        },
        "cardinality_limits": {
          "$ref": "#/$defs/CardinalityLimits"
        }
      },
      "required": [
        "exporter"
      ]
    },
    "CardinalityLimits": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "default": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "counter": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "gauge": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "histogram": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "observable_counter": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "observable_gauge": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "observable_up_down_counter": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "up_down_counter": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        }
      }
    },
    "PushMetricExporter": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "otlp_http": {
          "$ref": "#/$defs/OtlpHttpMetricExporter"
        },
        "otlp_grpc": {
          "$ref": "#/$defs/OtlpGrpcMetricExporter"
        },
        "otlp_file/development": {
          "$ref": "#/$defs/ExperimentalOtlpFileMetricExporter"
        },
        "console": {
          "$ref": "common.json#/$defs/ConsoleExporter"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "PullMetricExporter": {
      "type": [
        "object"
      ],
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "prometheus/development": {
          "$ref": "#/$defs/ExperimentalPrometheusMetricExporter"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "MetricProducer": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "opencensus": {
          "$ref": "#/$defs/OpenCensusMetricProducer"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "OpenCensusMetricProducer": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "ExperimentalPrometheusMetricExporter": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "host": {
          "type": [
            "string",
            "null"
          ]
        },
        "port": {
          "type": [
            "integer",
            "null"
          ]
        },
        "without_scope_info": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "with_resource_constant_labels": {
          "$ref": "common.json#/$defs/IncludeExclude"
        },
        "translation_strategy": {
          "type": [
            "string",
            "null"
          ],
          "enum": [
            "UnderscoreEscapingWithSuffixes",
            "UnderscoreEscapingWithoutSuffixes",
            "NoUTF8EscapingWithSuffixes",
            "NoTranslation"
          ]
        }
      }
    },
    "MetricReader": {
      "type": "object",
      "additionalProperties": false,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "periodic": {
          "$ref": "#/$defs/PeriodicMetricReader"
        },
        "pull": {
          "$ref": "#/$defs/PullMetricReader"
        }
      }
    },
    "ExporterTemporalityPreference": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        "cumulative",
        "delta",
        "low_memory"
      ]
    },
    "ExporterDefaultHistogramAggregation": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        "explicit_bucket_histogram",
        "base2_exponential_bucket_histogram"
      ]
    },
    "OtlpHttpMetricExporter": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "endpoint": {
          "type": [
            "string",
            "null"
          ]
        },
        "certificate_file": {
          "type": [
            "string",
            "null"
          ]
        },
        "client_key_file": {
          "type": [
            "string",
            "null"
          ]
        },
        "client_certificate_file": {
          "type": [
            "string",
            "null"
          ]
        },
        "headers": {
          "type": "array",
          "items": {
            "$ref": "common.json#/$defs/NameStringValuePair"
          }
        },
        "headers_list": {
          "type": [
            "string",
            "null"
          ]
        },
        "compression": {
          "type": [
            "string",
            "null"
          ]
        },
        "timeout": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "encoding": {
          "$ref": "common.json#/$defs/OtlpHttpEncoding"
        },
        "temporality_preference": {
          "$ref": "#/$defs/ExporterTemporalityPreference"
        },
        "default_histogram_aggregation": {
          "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
        }
      }
    },
    "OtlpGrpcMetricExporter": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "endpoint": {
          "type": [
            "string",
            "null"
          ]
        },
        "certificate_file": {
          "type": [
            "string",
            "null"
          ]
        },
        "client_key_file": {
          "type": [
            "string",
            "null"
          ]
        },
        "client_certificate_file": {
          "type": [
            "string",
            "null"
          ]
        },
        "headers": {
          "type": "array",
          "items": {
            "$ref": "common.json#/$defs/NameStringValuePair"
          }
        },
        "headers_list": {
          "type": [
            "string",
            "null"
          ]
        },
        "compression": {
          "type": [
            "string",
            "null"
          ]
        },
        "timeout": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "insecure": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "temporality_preference": {
          "$ref": "#/$defs/ExporterTemporalityPreference"
        },
        "default_histogram_aggregation": {
          "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
        }
      }
    },
    "ExperimentalOtlpFileMetricExporter": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "output_stream": {
          "type": [
            "string",
            "null"
          ]
        },
        "temporality_preference": {
          "$ref": "#/$defs/ExporterTemporalityPreference"
        },
        "default_histogram_aggregation": {
          "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
        }
      }
    },
    "View": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "selector": {
          "$ref": "#/$defs/ViewSelector"
        },
        "stream": {
          "$ref": "#/$defs/ViewStream"
        }
      }
    },
    "ViewSelector": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "instrument_name": {
          "type": [
            "string",
            "null"
          ]
        },
        "instrument_type": {
          "$ref": "#/$defs/InstrumentType"
        },
        "unit": {
          "type": [
            "string",
            "null"
          ]
        },
        "meter_name": {
          "type": [
            "string",
            "null"
          ]
        },
        "meter_version": {
          "type": [
            "string",
            "null"
          ]
        },
        "meter_schema_url": {
          "type": [
            "string",
            "null"
          ]
        }
      }
    },
    "InstrumentType": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        "counter",
        "gauge",
        "histogram",
        "observable_counter",
        "observable_gauge",
        "observable_up_down_counter",
        "up_down_counter"
      ]
    },
    "ViewStream": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": [
            "string",
            "null"
          ]
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        },
        "aggregation": {
          "$ref": "#/$defs/Aggregation"
        },
        "aggregation_cardinality_limit": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "attribute_keys": {
          "$ref": "common.json#/$defs/IncludeExclude"
        }
      }
    },
    "Aggregation": {
      "type": "object",
      "additionalProperties": false,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "default": {
          "$ref": "#/$defs/DefaultAggregation"
        },
        "drop": {
          "$ref": "#/$defs/DropAggregation"
        },
        "explicit_bucket_histogram": {
          "$ref": "#/$defs/ExplicitBucketHistogramAggregation"
        },
        "base2_exponential_bucket_histogram": {
          "$ref": "#/$defs/Base2ExponentialBucketHistogramAggregation"
        },
        "last_value": {
          "$ref": "#/$defs/LastValueAggregation"
        },
        "sum": {
          "$ref": "#/$defs/SumAggregation"
        }
      }
    },
    "DefaultAggregation": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "DropAggregation": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "ExplicitBucketHistogramAggregation": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "boundaries": {
          "type": "array",
          "items": {
            "type": "number"
          }
        },
        "record_min_max": {
          "type": [
            "boolean",
            "null"
          ]
        }
      }
    },
    "Base2ExponentialBucketHistogramAggregation": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "max_scale": {
          "type": [
            "integer",
            "null"
          ]
        },
        "max_size": {
          "type": [
            "integer",
            "null"
          ]
        },
        "record_min_max": {
          "type": [
            "boolean",
            "null"
          ]
        }
      }
    },
    "LastValueAggregation": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "SumAggregation": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "ExperimentalMeterConfigurator": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "default_config": {
          "$ref": "#/$defs/ExperimentalMeterConfig"
        },
        "meters": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/ExperimentalMeterMatcherAndConfig"
          }
        }
      }
    },
    "ExperimentalMeterMatcherAndConfig": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": [
            "string"
          ]
        },
        "config": {
          "$ref": "#/$defs/ExperimentalMeterConfig"
        }
      }
    },
    "ExperimentalMeterConfig": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": [
            "boolean"
          ]
        }
      }
    }
  }
}</pre>
</details>

## MetricProducer <a id="metricproducer"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `opencensus` | Configure metric producer to be opencensus. | [`OpenCensusMetricProducer`](#opencensusmetricproducer) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "opencensus": {
      "$ref": "#/$defs/OpenCensusMetricProducer"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre>
</details>

## MetricReader <a id="metricreader"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `periodic` | Configure a periodic metric reader. | [`PeriodicMetricReader`](#periodicmetricreader) | `false` |
| `pull` | Configure a pull based metric reader. | [`PullMetricReader`](#pullmetricreader) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "periodic": {
      "$ref": "#/$defs/PeriodicMetricReader"
    },
    "pull": {
      "$ref": "#/$defs/PullMetricReader"
    }
  }
}</pre>
</details>

## NameStringValuePair <a id="namestringvaluepair"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | The name of the pair. | `string` | `true` |
| `value` | The value of the pair. | one of:<br>* `string`<br>* `null`<br> | `true` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": "string"
    },
    "value": {
      "type": [
        "string",
        "null"
      ]
    }
  },
  "required": [
    "name",
    "value"
  ]
}</pre>
</details>

## OpenCensusMetricProducer <a id="opencensusmetricproducer"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## OpentelemetryConfiguration <a id="opentelemetryconfiguration"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `file_format` | The file format version.<br>The yaml format is documented at<br>https://github.com/open-telemetry/opentelemetry-configuration/tree/main/schema<br> | `string` | `true` |
| `disabled` | Configure if the SDK is disabled or not.<br>If omitted or null, false is used.<br> | one of:<br>* `boolean`<br>* `null`<br> | `false` |
| `log_level` | Configure the log level of the internal logger used by the SDK.<br>If omitted, info is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `attribute_limits` | Configure general attribute limits. See also tracer_provider.limits, logger_provider.limits.<br> | [`AttributeLimits`](#attributelimits) | `false` |
| `logger_provider` | Configure logger provider.<br>If omitted, a noop logger provider is used.<br> | [`LoggerProvider`](#loggerprovider) | `false` |
| `meter_provider` | Configure meter provider.<br>If omitted, a noop meter provider is used.<br> | [`MeterProvider`](#meterprovider) | `false` |
| `propagator` | Configure text map context propagators.<br>If omitted, a noop propagator is used.<br> | [`Propagator`](#propagator) | `false` |
| `tracer_provider` | Configure tracer provider.<br>If omitted, a noop tracer provider is used.<br> | [`TracerProvider`](#tracerprovider) | `false` |
| `resource` | Configure resource for all signals.<br>If omitted, the default resource is used.<br> | [`Resource`](#resource) | `false` |
| `instrumentation/development` | Configure instrumentation.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalInstrumentation`](#experimentalinstrumentation) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.json)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "OpenTelemetryConfiguration",
  "type": "object",
  "additionalProperties": true,
  "properties": {
    "file_format": {
      "type": "string"
    },
    "disabled": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "log_level": {
      "type": [
        "string",
        "null"
      ]
    },
    "attribute_limits": {
      "$ref": "#/$defs/AttributeLimits"
    },
    "logger_provider": {
      "$ref": "#/$defs/LoggerProvider"
    },
    "meter_provider": {
      "$ref": "#/$defs/MeterProvider"
    },
    "propagator": {
      "$ref": "#/$defs/Propagator"
    },
    "tracer_provider": {
      "$ref": "#/$defs/TracerProvider"
    },
    "resource": {
      "$ref": "#/$defs/Resource"
    },
    "instrumentation/development": {
      "$ref": "#/$defs/ExperimentalInstrumentation"
    }
  },
  "required": [
    "file_format"
  ],
  "$defs": {
    "AttributeLimits": {
      "type": "object",
      "additionalProperties": true,
      "properties": {
        "attribute_value_length_limit": {
          "type": [
            "integer",
            "null"
          ]
        },
        "attribute_count_limit": {
          "type": [
            "integer",
            "null"
          ]
        }
      }
    },
    "LoggerProvider": {
      "$ref": "logger_provider.json"
    },
    "MeterProvider": {
      "$ref": "meter_provider.json"
    },
    "TracerProvider": {
      "$ref": "tracer_provider.json"
    },
    "Propagator": {
      "$ref": "propagator.json"
    },
    "Resource": {
      "$ref": "resource.json"
    },
    "ExperimentalInstrumentation": {
      "$ref": "instrumentation.json"
    }
  }
}</pre>
</details>

## OpenTracingPropagator <a id="opentracingpropagator"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## OtlpGrpcExporter <a id="otlpgrpcexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `certificate_file` | Configure certificate used to verify a server's TLS credentials.<br>Absolute path to certificate file in PEM format.<br>If omitted or null, system default certificate verification is used for secure connections.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `client_key_file` | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br>If omitted or null, mTLS is not used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `client_certificate_file` | Configure mTLS client certificate.<br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br>If omitted or null, mTLS is not used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `headers` | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` |
| `headers_list` | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `compression` | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `timeout` | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `insecure` | Configure client transport security for the exporter's connection. <br>Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.<br>If omitted or null, false is used.<br> | one of:<br>* `boolean`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "certificate_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "client_key_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "client_certificate_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "headers": {
      "type": "array",
      "items": {
        "$ref": "common.json#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "insecure": {
      "type": [
        "boolean",
        "null"
      ]
    }
  }
}</pre>
</details>

## OtlpGrpcMetricExporter <a id="otlpgrpcmetricexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `certificate_file` | Configure certificate used to verify a server's TLS credentials.<br>Absolute path to certificate file in PEM format.<br>If omitted or null, system default certificate verification is used for secure connections.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `client_key_file` | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br>If omitted or null, mTLS is not used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `client_certificate_file` | Configure mTLS client certificate.<br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br>If omitted or null, mTLS is not used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `headers` | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` |
| `headers_list` | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `compression` | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `timeout` | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `insecure` | Configure client transport security for the exporter's connection. <br>Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.<br>If omitted or null, false is used.<br> | one of:<br>* `boolean`<br>* `null`<br> | `false` |
| `temporality_preference` | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` |
| `default_histogram_aggregation` | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "certificate_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "client_key_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "client_certificate_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "headers": {
      "type": "array",
      "items": {
        "$ref": "common.json#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "insecure": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "temporality_preference": {
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
    }
  }
}</pre>
</details>

## OtlpHttpEncoding <a id="otlphttpencoding"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.json)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "protobuf",
    "json"
  ]
}</pre>
</details>

## OtlpHttpExporter <a id="otlphttpexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | Configure endpoint, including the signal specific path.<br>If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `certificate_file` | Configure certificate used to verify a server's TLS credentials.<br>Absolute path to certificate file in PEM format.<br>If omitted or null, system default certificate verification is used for secure connections.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `client_key_file` | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br>If omitted or null, mTLS is not used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `client_certificate_file` | Configure mTLS client certificate.<br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br>If omitted or null, mTLS is not used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `headers` | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` |
| `headers_list` | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `compression` | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `timeout` | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `encoding` | Configure the encoding used for messages. <br>Values include: protobuf, json. Implementations may not support json.<br>If omitted or null, protobuf is used.<br> | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "certificate_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "client_key_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "client_certificate_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "headers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "encoding": {
      "$ref": "#/$defs/OtlpHttpEncoding"
    }
  }
}</pre>
</details>

## OtlpHttpMetricExporter <a id="otlphttpmetricexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | Configure endpoint, including the signal specific path.<br>If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `endpoint` | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `certificate_file` | Configure certificate used to verify a server's TLS credentials.<br>Absolute path to certificate file in PEM format.<br>If omitted or null, system default certificate verification is used for secure connections.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `client_key_file` | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br>If omitted or null, mTLS is not used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `client_certificate_file` | Configure mTLS client certificate.<br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br>If omitted or null, mTLS is not used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `headers` | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` |
| `headers_list` | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `compression` | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `timeout` | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `encoding` | Configure the encoding used for messages. <br>Values include: protobuf, json. Implementations may not support json.<br>If omitted or null, protobuf is used.<br> | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` |
| `temporality_preference` | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` |
| `default_histogram_aggregation` | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "certificate_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "client_key_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "client_certificate_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "headers": {
      "type": "array",
      "items": {
        "$ref": "common.json#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "encoding": {
      "$ref": "common.json#/$defs/OtlpHttpEncoding"
    },
    "temporality_preference": {
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
    }
  }
}</pre>
</details>

## ParentBasedSampler <a id="parentbasedsampler"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `root` | Configure root sampler.<br>If omitted or null, always_on is used.<br> | [`Sampler`](#sampler) | `false` |
| `remote_parent_sampled` | Configure remote_parent_sampled sampler.<br>If omitted or null, always_on is used.<br> | [`Sampler`](#sampler) | `false` |
| `remote_parent_not_sampled` | Configure remote_parent_not_sampled sampler.<br>If omitted or null, always_off is used.<br> | [`Sampler`](#sampler) | `false` |
| `local_parent_sampled` | Configure local_parent_sampled sampler.<br>If omitted or null, always_on is used.<br> | [`Sampler`](#sampler) | `false` |
| `local_parent_not_sampled` | Configure local_parent_not_sampled sampler.<br>If omitted or null, always_off is used.<br> | [`Sampler`](#sampler) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "root": {
      "$ref": "#/$defs/Sampler"
    },
    "remote_parent_sampled": {
      "$ref": "#/$defs/Sampler"
    },
    "remote_parent_not_sampled": {
      "$ref": "#/$defs/Sampler"
    },
    "local_parent_sampled": {
      "$ref": "#/$defs/Sampler"
    },
    "local_parent_not_sampled": {
      "$ref": "#/$defs/Sampler"
    }
  }
}</pre>
</details>

## PeriodicMetricReader <a id="periodicmetricreader"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `interval` | Configure delay interval (in milliseconds) between start of two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 60000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `timeout` | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `exporter` | Configure exporter. | [`PushMetricExporter`](#pushmetricexporter) | `true` |
| `producers` | Configure metric producers. | `array` of [`MetricProducer`](#metricproducer) | `false` |
| `cardinality_limits` | Configure cardinality limits. | [`CardinalityLimits`](#cardinalitylimits) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "interval": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "exporter": {
      "$ref": "#/$defs/PushMetricExporter"
    },
    "producers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/MetricProducer"
      }
    },
    "cardinality_limits": {
      "$ref": "#/$defs/CardinalityLimits"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## Propagator <a id="propagator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `composite` | Configure the propagators in the composite text map propagator. Entries from .composite_list are appended to the list here with duplicates filtered out.<br>Built-in propagator keys include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party keys include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> | `array` of [`TextMapPropagator`](#textmappropagator) | `false` |
| `composite_list` | Configure the propagators in the composite text map propagator. Entries are appended to .composite with duplicates filtered out.<br>The value is a comma separated list of propagator identifiers matching the format of OTEL_PROPAGATORS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>Built-in propagator identifiers include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party identifiers include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.json)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/propagator.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "composite": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/TextMapPropagator"
      }
    },
    "composite_list": {
      "type": [
        "string",
        "null"
      ]
    }
  },
  "$defs": {
    "TextMapPropagator": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "tracecontext": {
          "$ref": "#/$defs/TraceContextPropagator"
        },
        "baggage": {
          "$ref": "#/$defs/BaggagePropagator"
        },
        "b3": {
          "$ref": "#/$defs/B3Propagator"
        },
        "b3multi": {
          "$ref": "#/$defs/B3MultiPropagator"
        },
        "jaeger": {
          "$ref": "#/$defs/JaegerPropagator"
        },
        "ottrace": {
          "$ref": "#/$defs/OpenTracingPropagator"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "TraceContextPropagator": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "BaggagePropagator": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "B3Propagator": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "B3MultiPropagator": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "JaegerPropagator": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "OpenTracingPropagator": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    }
  }
}</pre>
</details>

## PullMetricExporter <a id="pullmetricexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `prometheus/development` | Configure exporter to be prometheus.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "prometheus/development": {
      "$ref": "#/$defs/ExperimentalPrometheusMetricExporter"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre>
</details>

## PullMetricReader <a id="pullmetricreader"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `exporter` | Configure exporter. | [`PullMetricExporter`](#pullmetricexporter) | `true` |
| `producers` | Configure metric producers. | `array` of [`MetricProducer`](#metricproducer) | `false` |
| `cardinality_limits` | Configure cardinality limits. | [`CardinalityLimits`](#cardinalitylimits) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "exporter": {
      "$ref": "#/$defs/PullMetricExporter"
    },
    "producers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/MetricProducer"
      }
    },
    "cardinality_limits": {
      "$ref": "#/$defs/CardinalityLimits"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## PushMetricExporter <a id="pushmetricexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `otlp_http` | Configure exporter to be OTLP with HTTP transport.<br> | [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | `false` |
| `otlp_grpc` | Configure exporter to be OTLP with gRPC transport.<br> | [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | `false` |
| `otlp_file/development` | Configure exporter to be OTLP with file transport.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | `false` |
| `console` | Configure exporter to be console.<br> | [`ConsoleExporter`](#consoleexporter) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "otlp_http": {
      "$ref": "#/$defs/OtlpHttpMetricExporter"
    },
    "otlp_grpc": {
      "$ref": "#/$defs/OtlpGrpcMetricExporter"
    },
    "otlp_file/development": {
      "$ref": "#/$defs/ExperimentalOtlpFileMetricExporter"
    },
    "console": {
      "$ref": "common.json#/$defs/ConsoleExporter"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre>
</details>

## Resource <a id="resource"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attributes` | Configure resource attributes. Entries have higher priority than entries from .resource.attributes_list.<br> | `array` of [`AttributeNameValue`](#attributenamevalue) | `false` |
| `detection/development` | Configure resource detection.<br>This type is in development and subject to breaking changes in minor versions.<br>If omitted or null, resource detection is disabled.<br> | [`ExperimentalResourceDetection`](#experimentalresourcedetection) | `false` |
| `schema_url` | Configure resource schema URL.<br>If omitted or null, no schema URL is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `attributes_list` | Configure resource attributes. Entries have lower priority than entries from .resource.attributes.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_RESOURCE_ATTRIBUTES. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>If omitted or null, no resource attributes are added.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/resource.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attributes": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/AttributeNameValue"
      }
    },
    "detection/development": {
      "$ref": "#/$defs/ExperimentalResourceDetection"
    },
    "schema_url": {
      "type": [
        "string",
        "null"
      ]
    },
    "attributes_list": {
      "type": [
        "string",
        "null"
      ]
    }
  },
  "$defs": {
    "AttributeNameValue": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": "string"
        },
        "value": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "number"
            },
            {
              "type": "boolean"
            },
            {
              "type": "null"
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "array",
              "items": {
                "type": "boolean"
              }
            },
            {
              "type": "array",
              "items": {
                "type": "number"
              }
            }
          ]
        },
        "type": {
          "$ref": "#/$defs/AttributeType"
        }
      },
      "required": [
        "name",
        "value"
      ]
    },
    "AttributeType": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        null,
        "string",
        "bool",
        "int",
        "double",
        "string_array",
        "bool_array",
        "int_array",
        "double_array"
      ]
    },
    "ExperimentalResourceDetection": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "attributes": {
          "$ref": "common.json#/$defs/IncludeExclude"
        },
        "detectors": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/ExperimentalResourceDetector"
          }
        }
      }
    },
    "ExperimentalResourceDetector": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "container": {
          "$ref": "#/$defs/ExperimentalContainerResourceDetector"
        },
        "host": {
          "$ref": "#/$defs/ExperimentalHostResourceDetector"
        },
        "process": {
          "$ref": "#/$defs/ExperimentalProcessResourceDetector"
        },
        "service": {
          "$ref": "#/$defs/ExperimentalServiceResourceDetector"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "ExperimentalContainerResourceDetector": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "ExperimentalHostResourceDetector": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "ExperimentalProcessResourceDetector": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "ExperimentalServiceResourceDetector": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    }
  }
}</pre>
</details>

## Sampler <a id="sampler"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `always_off` | Configure sampler to be always_off. | [`AlwaysOffSampler`](#alwaysoffsampler) | `false` |
| `always_on` | Configure sampler to be always_on. | [`AlwaysOnSampler`](#alwaysonsampler) | `false` |
| `jaeger_remote` | TODO | [`JaegerRemoteSampler`](#jaegerremotesampler) | `false` |
| `parent_based` | Configure sampler to be parent_based. | [`ParentBasedSampler`](#parentbasedsampler) | `false` |
| `trace_id_ratio_based` | Configure sampler to be trace_id_ratio_based. | [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "always_off": {
      "$ref": "#/$defs/AlwaysOffSampler"
    },
    "always_on": {
      "$ref": "#/$defs/AlwaysOnSampler"
    },
    "jaeger_remote": {
      "$ref": "#/$defs/JaegerRemoteSampler"
    },
    "parent_based": {
      "$ref": "#/$defs/ParentBasedSampler"
    },
    "trace_id_ratio_based": {
      "$ref": "#/$defs/TraceIdRatioBasedSampler"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre>
</details>

## SimpleLogRecordProcessor <a id="simplelogrecordprocessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `exporter` | Configure exporter. | [`LogRecordExporter`](#logrecordexporter) | `true` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "exporter": {
      "$ref": "#/$defs/LogRecordExporter"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## SimpleSpanProcessor <a id="simplespanprocessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `exporter` | Configure exporter. | [`SpanExporter`](#spanexporter) | `true` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "exporter": {
      "$ref": "#/$defs/SpanExporter"
    }
  },
  "required": [
    "exporter"
  ]
}</pre>
</details>

## SpanExporter <a id="spanexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `otlp_http` | Configure exporter to be OTLP with HTTP transport. | [`OtlpHttpExporter`](#otlphttpexporter) | `false` |
| `otlp_grpc` | Configure exporter to be OTLP with gRPC transport. | [`OtlpGrpcExporter`](#otlpgrpcexporter) | `false` |
| `otlp_file/development` | Configure exporter to be OTLP with file transport.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` |
| `console` | Configure exporter to be console. | [`ConsoleExporter`](#consoleexporter) | `false` |
| `zipkin` | Configure exporter to be zipkin. | [`ZipkinSpanExporter`](#zipkinspanexporter) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "otlp_http": {
      "$ref": "common.json#/$defs/OtlpHttpExporter"
    },
    "otlp_grpc": {
      "$ref": "common.json#/$defs/OtlpGrpcExporter"
    },
    "otlp_file/development": {
      "$ref": "common.json#/$defs/ExperimentalOtlpFileExporter"
    },
    "console": {
      "$ref": "common.json#/$defs/ConsoleExporter"
    },
    "zipkin": {
      "$ref": "#/$defs/ZipkinSpanExporter"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre>
</details>

## SpanLimits <a id="spanlimits"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attribute_value_length_limit` | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `attribute_count_limit` | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `event_count_limit` | Configure max span event count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `link_count_limit` | Configure max span link count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `event_attribute_count_limit` | Configure max attributes per span event. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `link_attribute_count_limit` | Configure max attributes per span link. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attribute_value_length_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "event_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "link_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "event_attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "link_attribute_count_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    }
  }
}</pre>
</details>

## SpanProcessor <a id="spanprocessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `batch` | Configure a batch span processor. | [`BatchSpanProcessor`](#batchspanprocessor) | `false` |
| `simple` | Configure a simple span processor. | [`SimpleSpanProcessor`](#simplespanprocessor) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "batch": {
      "$ref": "#/$defs/BatchSpanProcessor"
    },
    "simple": {
      "$ref": "#/$defs/SimpleSpanProcessor"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre>
</details>

## SumAggregation <a id="sumaggregation"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## TextMapPropagator <a id="textmappropagator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `tracecontext` | Include the w3c trace context propagator. | [`TraceContextPropagator`](#tracecontextpropagator) | `false` |
| `baggage` | Include the w3c baggage propagator. | [`BaggagePropagator`](#baggagepropagator) | `false` |
| `b3` | Include the zipkin b3 propagator. | [`B3Propagator`](#b3propagator) | `false` |
| `b3multi` | Include the zipkin b3 multi propagator. | [`B3MultiPropagator`](#b3multipropagator) | `false` |
| `jaeger` | Include the jaeger propagator. | [`JaegerPropagator`](#jaegerpropagator) | `false` |
| `ottrace` | Include the opentracing propagator. | [`OpenTracingPropagator`](#opentracingpropagator) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "tracecontext": {
      "$ref": "#/$defs/TraceContextPropagator"
    },
    "baggage": {
      "$ref": "#/$defs/BaggagePropagator"
    },
    "b3": {
      "$ref": "#/$defs/B3Propagator"
    },
    "b3multi": {
      "$ref": "#/$defs/B3MultiPropagator"
    },
    "jaeger": {
      "$ref": "#/$defs/JaegerPropagator"
    },
    "ottrace": {
      "$ref": "#/$defs/OpenTracingPropagator"
    }
  },
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre>
</details>

## TraceContextPropagator <a id="tracecontextpropagator"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## TraceIdRatioBasedSampler <a id="traceidratiobasedsampler"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `ratio` | Configure trace_id_ratio.<br>If omitted or null, 1.0 is used.<br> | one of:<br>* `number`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "ratio": {
      "type": [
        "number",
        "null"
      ]
    }
  }
}</pre>
</details>

## TracerProvider <a id="tracerprovider"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `processors` | Configure span processors. | `array` of [`SpanProcessor`](#spanprocessor) | `true` |
| `limits` | Configure span limits. See also attribute_limits. | [`SpanLimits`](#spanlimits) | `false` |
| `sampler` | Configure the sampler.<br>If omitted, parent based sampler with a root of always_on is used.<br> | [`Sampler`](#sampler) | `false` |
| `tracer_configurator/development` | Configure tracers.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/tracer_provider.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "processors": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/SpanProcessor"
      }
    },
    "limits": {
      "$ref": "#/$defs/SpanLimits"
    },
    "sampler": {
      "$ref": "#/$defs/Sampler"
    },
    "tracer_configurator/development": {
      "$ref": "#/$defs/ExperimentalTracerConfigurator"
    }
  },
  "required": [
    "processors"
  ],
  "$defs": {
    "BatchSpanProcessor": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "schedule_delay": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "export_timeout": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "max_queue_size": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "max_export_batch_size": {
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "exporter": {
          "$ref": "#/$defs/SpanExporter"
        }
      },
      "required": [
        "exporter"
      ]
    },
    "Sampler": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "always_off": {
          "$ref": "#/$defs/AlwaysOffSampler"
        },
        "always_on": {
          "$ref": "#/$defs/AlwaysOnSampler"
        },
        "jaeger_remote": {
          "$ref": "#/$defs/JaegerRemoteSampler"
        },
        "parent_based": {
          "$ref": "#/$defs/ParentBasedSampler"
        },
        "trace_id_ratio_based": {
          "$ref": "#/$defs/TraceIdRatioBasedSampler"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "AlwaysOffSampler": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "AlwaysOnSampler": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "JaegerRemoteSampler": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "endpoint": {
          "type": [
            "string",
            "null"
          ]
        },
        "interval": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "initial_sampler": {
          "$ref": "#/$defs/Sampler"
        }
      }
    },
    "ParentBasedSampler": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "root": {
          "$ref": "#/$defs/Sampler"
        },
        "remote_parent_sampled": {
          "$ref": "#/$defs/Sampler"
        },
        "remote_parent_not_sampled": {
          "$ref": "#/$defs/Sampler"
        },
        "local_parent_sampled": {
          "$ref": "#/$defs/Sampler"
        },
        "local_parent_not_sampled": {
          "$ref": "#/$defs/Sampler"
        }
      }
    },
    "TraceIdRatioBasedSampler": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "ratio": {
          "type": [
            "number",
            "null"
          ]
        }
      }
    },
    "SimpleSpanProcessor": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "exporter": {
          "$ref": "#/$defs/SpanExporter"
        }
      },
      "required": [
        "exporter"
      ]
    },
    "SpanExporter": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "otlp_http": {
          "$ref": "common.json#/$defs/OtlpHttpExporter"
        },
        "otlp_grpc": {
          "$ref": "common.json#/$defs/OtlpGrpcExporter"
        },
        "otlp_file/development": {
          "$ref": "common.json#/$defs/ExperimentalOtlpFileExporter"
        },
        "console": {
          "$ref": "common.json#/$defs/ConsoleExporter"
        },
        "zipkin": {
          "$ref": "#/$defs/ZipkinSpanExporter"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "SpanLimits": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "attribute_value_length_limit": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "attribute_count_limit": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "event_count_limit": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "link_count_limit": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "event_attribute_count_limit": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "link_attribute_count_limit": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        }
      }
    },
    "SpanProcessor": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "batch": {
          "$ref": "#/$defs/BatchSpanProcessor"
        },
        "simple": {
          "$ref": "#/$defs/SimpleSpanProcessor"
        }
      },
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    },
    "ZipkinSpanExporter": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "endpoint": {
          "type": [
            "string",
            "null"
          ]
        },
        "timeout": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        }
      }
    },
    "ExperimentalTracerConfigurator": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "default_config": {
          "$ref": "#/$defs/ExperimentalTracerConfig"
        },
        "tracers": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/ExperimentalTracerMatcherAndConfig"
          }
        }
      }
    },
    "ExperimentalTracerMatcherAndConfig": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": [
            "string"
          ]
        },
        "config": {
          "$ref": "#/$defs/ExperimentalTracerConfig"
        }
      }
    },
    "ExperimentalTracerConfig": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": [
            "boolean"
          ]
        }
      }
    }
  }
}</pre>
</details>

## View <a id="view"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `selector` | Configure view selector. <br>Selection criteria is additive as described in https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#instrument-selection-criteria.<br> | [`ViewSelector`](#viewselector) | `false` |
| `stream` | Configure view stream. | [`ViewStream`](#viewstream) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "selector": {
      "$ref": "#/$defs/ViewSelector"
    },
    "stream": {
      "$ref": "#/$defs/ViewStream"
    }
  }
}</pre>
</details>

## ViewSelector <a id="viewselector"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `instrument_name` | Configure instrument name selection criteria.<br>If omitted or null, all instrument names match.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `instrument_type` | Configure instrument type selection criteria.<br>Values include: counter, gauge, histogram, observable_counter, observable_gauge, observable_up_down_counter, up_down_counter.<br>If omitted or null, all instrument types match.<br> | [`InstrumentType`](#instrumenttype) | `false` |
| `unit` | Configure the instrument unit selection criteria.<br>If omitted or null, all instrument units match.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `meter_name` | Configure meter name selection criteria.<br>If omitted or null, all meter names match.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `meter_version` | Configure meter version selection criteria.<br>If omitted or null, all meter versions match.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `meter_schema_url` | Configure meter schema url selection criteria.<br>If omitted or null, all meter schema URLs match.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "instrument_name": {
      "type": [
        "string",
        "null"
      ]
    },
    "instrument_type": {
      "$ref": "#/$defs/InstrumentType"
    },
    "unit": {
      "type": [
        "string",
        "null"
      ]
    },
    "meter_name": {
      "type": [
        "string",
        "null"
      ]
    },
    "meter_version": {
      "type": [
        "string",
        "null"
      ]
    },
    "meter_schema_url": {
      "type": [
        "string",
        "null"
      ]
    }
  }
}</pre>
</details>

## ViewStream <a id="viewstream"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | Configure metric name of the resulting stream(s).<br>If omitted or null, the instrument's original name is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `description` | Configure metric description of the resulting stream(s).<br>If omitted or null, the instrument's origin description is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `aggregation` | Configure aggregation of the resulting stream(s). <br>Values include: default, drop, explicit_bucket_histogram, base2_exponential_bucket_histogram, last_value, sum. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#aggregation.<br>If omitted, default is used.<br> | [`Aggregation`](#aggregation) | `false` |
| `aggregation_cardinality_limit` | Configure the aggregation cardinality limit.<br>If omitted or null, the metric reader's default cardinality limit is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |
| `attribute_keys` | Configure attribute keys retained in the resulting stream(s).<br> | [`IncludeExclude`](#includeexclude) | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": [
        "string",
        "null"
      ]
    },
    "description": {
      "type": [
        "string",
        "null"
      ]
    },
    "aggregation": {
      "$ref": "#/$defs/Aggregation"
    },
    "aggregation_cardinality_limit": {
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "attribute_keys": {
      "$ref": "common.json#/$defs/IncludeExclude"
    }
  }
}</pre>
</details>

## ZipkinSpanExporter <a id="zipkinspanexporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | Configure endpoint.<br>If omitted or null, http://localhost:9411/api/v2/spans is used.<br> | one of:<br>* `string`<br>* `null`<br> | `false` |
| `timeout` | Configure max time (in milliseconds) to wait for each export. <br>Value must be non-negative. A value of 0 indicates indefinite.<br>If omitted or null, 10000 is used.<br> | one of:<br>* `integer`<br>* `null`<br> | `false` |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "endpoint": {
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    }
  }
}</pre>
</details>

# SDK Extension Plugins <a id="sdk-extension-plugins"></a>

[SDK extension plugins](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#supported-sdk-extension-plugins) are places where custom interface implementations can be referenced and configured.

For example, you could write a custom `SpanExporter`, and indicate that it should be paired with a `BatchSpanProcessor`.

Each of the following types support referencing custom interface implementations. Each type is an object type containing exactly one property whose value is type `object` or `null`. The property key refers to the name of the custom implementation, and must be the same as the `name` of a corresponding registered [ComponentProvider](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#register-componentprovider). The value passed as configuration when the [ComponentProvider.create](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk.md#create) is called.

SDK extension plugin types may have properties defined corresponding to built-in implementations of the interface. For example, the `otlp_http` property of `SpanExporter` defines the OTLP http/protobuf exporter.

* [ExperimentalResourceDetector](#ExperimentalResourceDetector)
* [LogRecordExporter](#LogRecordExporter)
* [LogRecordProcessor](#LogRecordProcessor)
* [MetricProducer](#MetricProducer)
* [PullMetricExporter](#PullMetricExporter)
* [PushMetricExporter](#PushMetricExporter)
* [Sampler](#Sampler)
* [SpanExporter](#SpanExporter)
* [SpanProcessor](#SpanProcessor)
* [TextMapPropagator](#TextMapPropagator)
