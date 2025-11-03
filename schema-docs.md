<!-- This file is generated using "make generate-markdown". Do not edit directly. -->

# Overview <a id="overview"></a>


This document is an auto-generated view of the declarative configuration JSON schema and meta schema meant for improved consumability by humans.

* [Types](#types) contains descriptions of all types and properties, with convenient linking between type references. [OpenTelemetryConfiguration](#opentelemetryconfiguration) is the root type and is a good starting point.
* [Language Support Status](#language-support-status) provides all the details about each language's support in a single place. (Alternatively, each type definition has a table showing support status across languages.)
* [SDK Extension Plugins](#sdk-extension-plugins) lists all the SDK extension plugin points.

# Types <a id="types"></a>

## Aggregation <a id="aggregation"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `default` | [`DefaultAggregation`](#defaultaggregation) | `false` | No constraints. | TODO |
| `drop` | [`DropAggregation`](#dropaggregation) | `false` | No constraints. | TODO |
| `explicit_bucket_histogram` | [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | `false` | No constraints. | Configure aggregation to be explicit_bucket_histogram. |
| `base2_exponential_bucket_histogram` | [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | `false` | No constraints. | TODO |
| `last_value` | [`LastValueAggregation`](#lastvalueaggregation) | `false` | No constraints. | TODO |
| `sum` | [`SumAggregation`](#sumaggregation) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `default` | supported | supported | unknown |
| `drop` | supported | supported | unknown |
| `explicit_bucket_histogram` | supported | supported | unknown |
| `base2_exponential_bucket_histogram` | supported | supported | unknown |
| `last_value` | supported | supported | unknown |
| `sum` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`ViewStream.aggregation`](#viewstream)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.always_off`](#sampler)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.always_on`](#sampler)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | No constraints. | Configure max attribute value size. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> |
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | No constraints. | Configure max attribute count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `attribute_value_length_limit` | supported | supported | unknown |
| `attribute_count_limit` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `true`

Usages:

* [`OpenTelemetryConfiguration.attribute_limits`](#opentelemetryconfiguration)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `name` | `string` | `true` | No constraints. | The attribute name.<br> |
| `value` | `oneOf` | `true` | No constraints. | The attribute value.<br>The type of value must match .type.<br> |
| `type` | [`AttributeType`](#attributetype) | `false` | No constraints. | The attribute type.<br>Values include: string, bool, int, double, string_array, bool_array, int_array, double_array.<br>If omitted or null, string is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `name` | supported | supported | unknown |
| `value` | supported | supported | unknown |
| `type` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","value"]`

Usages:

* [`Resource.attributes`](#resource)

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

Constraints: 

* `enum`: `[null,"string","bool","int","double","string_array","bool_array","int_array","double_array"]`

Usages:

* [`AttributeNameValue.type`](#attributenamevalue)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.b3multi`](#textmappropagator)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.b3`](#textmappropagator)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.baggage`](#textmappropagator)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `max_scale` | one of:<br>* `integer`<br>* `null`<br> | `false` | No constraints. | TODO |
| `max_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | No constraints. | TODO |
| `record_min_max` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `max_scale` | supported | supported | unknown |
| `max_size` | supported | supported | unknown |
| `record_min_max` | supported | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.base2_exponential_bucket_histogram`](#aggregation)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `schedule_delay` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 1000 is used.<br> |
| `export_timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> |
| `max_queue_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> |
| `max_export_batch_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> |
| `exporter` | [`LogRecordExporter`](#logrecordexporter) | `true` | No constraints. | Configure exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `schedule_delay` | supported | supported | unknown |
| `export_timeout` | supported | supported | unknown |
| `max_queue_size` | supported | supported | unknown |
| `max_export_batch_size` | supported | supported | unknown |
| `exporter` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`LogRecordProcessor.batch`](#logrecordprocessor)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `schedule_delay` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 5000 is used.<br> |
| `export_timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> |
| `max_queue_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> |
| `max_export_batch_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> |
| `exporter` | [`SpanExporter`](#spanexporter) | `true` | No constraints. | Configure exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `schedule_delay` | supported | supported | unknown |
| `export_timeout` | supported | supported | unknown |
| `max_queue_size` | supported | supported | unknown |
| `max_export_batch_size` | supported | supported | unknown |
| `exporter` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`SpanProcessor.batch`](#spanprocessor)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `default` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for all instrument types.<br>Instrument-specific cardinality limits take priority. <br>If omitted or null, 2000 is used.<br> |
| `counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for counter instruments.<br>If omitted or null, the value from .default is used.<br> |
| `gauge` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for gauge instruments.<br>If omitted or null, the value from .default is used.<br> |
| `histogram` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for histogram instruments.<br>If omitted or null, the value from .default is used.<br> |
| `observable_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_counter instruments.<br>If omitted or null, the value from .default is used.<br> |
| `observable_gauge` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_gauge instruments.<br>If omitted or null, the value from .default is used.<br> |
| `observable_up_down_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> |
| `up_down_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `default` | not_implemented | supported | unknown |
| `counter` | not_implemented | supported | unknown |
| `gauge` | not_implemented | supported | unknown |
| `histogram` | not_implemented | supported | unknown |
| `observable_counter` | not_implemented | supported | unknown |
| `observable_gauge` | not_implemented | supported | unknown |
| `observable_up_down_counter` | not_implemented | supported | unknown |
| `up_down_counter` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PeriodicMetricReader.cardinality_limits`](#periodicmetricreader)
* [`PullMetricReader.cardinality_limits`](#pullmetricreader)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.console`](#logrecordexporter)
* [`SpanExporter.console`](#spanexporter)

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

## ConsoleMetricExporter <a id="consolemetricexporter"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `temporality_preference` | supported | unknown | unknown |
| `default_histogram_aggregation` | supported | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.console`](#pushmetricexporter)

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
    "temporality_preference": {
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
    }
  }
}</pre>
</details>

## DefaultAggregation <a id="defaultaggregation"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.default`](#aggregation)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.drop`](#aggregation)

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

Constraints: 

* `enum`: `["always_on","always_off","trace_based"]`

Usages:

* [`MeterProvider.exemplar_filter`](#meterprovider)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.container`](#experimentalresourcedetector)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `peer` | [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | `false` | No constraints. | Configure instrumentations following the peer semantic conventions.<br>See peer semantic conventions: https://opentelemetry.io/docs/specs/semconv/attributes-registry/peer/<br> |
| `http` | [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | `false` | No constraints. | Configure instrumentations following the http semantic conventions.<br>See http semantic conventions: https://opentelemetry.io/docs/specs/semconv/http/<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `peer` | not_applicable | supported | unknown |
| `http` | not_applicable | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalInstrumentation.general`](#experimentalinstrumentation)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.host`](#experimentalresourcedetector)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `request_captured_headers` | `array` of `string` | `false` | No constraints. | Configure headers to capture for outbound http requests.<br> |
| `response_captured_headers` | `array` of `string` | `false` | No constraints. | Configure headers to capture for inbound http responses.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `request_captured_headers` | not_applicable | supported | unknown |
| `response_captured_headers` | not_applicable | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalHttpInstrumentation.client`](#experimentalhttpinstrumentation)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `client` | [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | `false` | No constraints. | Configure instrumentations following the http client semantic conventions. |
| `server` | [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | `false` | No constraints. | Configure instrumentations following the http server semantic conventions. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `client` | not_applicable | supported | unknown |
| `server` | not_applicable | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalGeneralInstrumentation.http`](#experimentalgeneralinstrumentation)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `request_captured_headers` | `array` of `string` | `false` | No constraints. | Configure headers to capture for inbound http requests.<br> |
| `response_captured_headers` | `array` of `string` | `false` | No constraints. | Configure headers to capture for outbound http responses.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `request_captured_headers` | not_applicable | supported | unknown |
| `response_captured_headers` | not_applicable | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalHttpInstrumentation.server`](#experimentalhttpinstrumentation)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `general` | [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | `false` | No constraints. | Configure general SemConv options that may apply to multiple languages and instrumentations.<br>Instrumenation may merge general config options with the language specific configuration at .instrumentation.<language>.<br> |
| `cpp` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure C++ language-specific instrumentation libraries. |
| `dotnet` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure .NET language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `erlang` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure Erlang language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `go` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure Go language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `java` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure Java language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `js` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure JavaScript language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `php` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure PHP language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `python` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure Python language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `ruby` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure Ruby language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `rust` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure Rust language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `swift` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure Swift language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `general` | not_applicable | supported | unknown |
| `cpp` | not_applicable | supported | unknown |
| `dotnet` | not_applicable | supported | unknown |
| `erlang` | not_applicable | supported | unknown |
| `go` | not_applicable | supported | unknown |
| `java` | not_applicable | supported | unknown |
| `js` | not_applicable | supported | unknown |
| `php` | not_applicable | supported | unknown |
| `python` | not_applicable | supported | unknown |
| `ruby` | not_applicable | supported | unknown |
| `rust` | not_applicable | supported | unknown |
| `swift` | not_applicable | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.instrumentation/development`](#opentelemetryconfiguration)

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
      "additionalProperties": {
        "type": "object"
      }
    }
  }
}</pre>
</details>

## ExperimentalLanguageSpecificInstrumentation <a id="experimentallanguagespecificinstrumentation"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `{"type":"object"}`

Usages:

* [`ExperimentalInstrumentation.cpp`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.dotnet`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.erlang`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.go`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.java`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.js`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.php`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.python`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.ruby`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.rust`](#experimentalinstrumentation)
* [`ExperimentalInstrumentation.swift`](#experimentalinstrumentation)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": "object"
  }
}</pre>
</details>

## ExperimentalLoggerConfig <a id="experimentalloggerconfig"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `disabled` | `boolean` | `false` | No constraints. | Configure if the logger is enabled or not. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `disabled` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalLoggerConfigurator.default_config`](#experimentalloggerconfigurator)
* [`ExperimentalLoggerMatcherAndConfig.config`](#experimentalloggermatcherandconfig)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `default_config` | [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | `false` | No constraints. | Configure the default logger config used there is no matching entry in .logger_configurator/development.loggers. |
| `loggers` | `array` of [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | `false` | No constraints. | Configure loggers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `default_config` | not_implemented | supported | unknown |
| `loggers` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LoggerProvider.logger_configurator/development`](#loggerprovider)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `name` | `string` | `false` | No constraints. | Configure logger names to match, evaluated as follows:<br><br> * If the logger name exactly matches.<br> * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |
| `config` | [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | `false` | No constraints. | The logger config. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `name` | not_implemented | supported | unknown |
| `config` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalLoggerConfigurator.loggers`](#experimentalloggerconfigurator)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `disabled` | `boolean` | `false` | No constraints. | Configure if the meter is enabled or not. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `disabled` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalMeterConfigurator.default_config`](#experimentalmeterconfigurator)
* [`ExperimentalMeterMatcherAndConfig.config`](#experimentalmetermatcherandconfig)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `default_config` | [`ExperimentalMeterConfig`](#experimentalmeterconfig) | `false` | No constraints. | Configure the default meter config used there is no matching entry in .meter_configurator/development.meters. |
| `meters` | `array` of [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | `false` | No constraints. | Configure meters. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `default_config` | not_implemented | supported | unknown |
| `meters` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`MeterProvider.meter_configurator/development`](#meterprovider)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `name` | `string` | `false` | No constraints. | Configure meter names to match, evaluated as follows:<br><br> * If the meter name exactly matches.<br> * If the meter name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |
| `config` | [`ExperimentalMeterConfig`](#experimentalmeterconfig) | `false` | No constraints. | The meter config. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `name` | not_implemented | supported | unknown |
| `config` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalMeterConfigurator.meters`](#experimentalmeterconfigurator)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `output_stream` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure output stream. <br>Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br>If omitted or null, stdout is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `output_stream` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_file/development`](#logrecordexporter)
* [`SpanExporter.otlp_file/development`](#spanexporter)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `output_stream` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure output stream. <br>Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br>If omitted or null, stdout is used.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `output_stream` | supported | supported | unknown |
| `temporality_preference` | supported | supported | unknown |
| `default_histogram_aggregation` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_file/development`](#pushmetricexporter)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `service_mapping` | `array` of [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | `false` | No constraints. | Configure the service mapping for instrumentations following peer.service semantic conventions.<br>See peer.service semantic conventions: https://opentelemetry.io/docs/specs/semconv/general/attributes/#general-remote-service-attributes<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `service_mapping` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalGeneralInstrumentation.peer`](#experimentalgeneralinstrumentation)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `peer` | `string` | `true` | No constraints. | The IP address to map.<br> |
| `service` | `string` | `true` | No constraints. | The logical name corresponding to the IP address of .peer.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `peer` | not_implemented | supported | unknown |
| `service` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["peer","service"]`

Usages:

* [`ExperimentalPeerInstrumentation.service_mapping`](#experimentalpeerinstrumentation)

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

## ExperimentalProbabilitySampler <a id="experimentalprobabilitysampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `ratio` | one of:<br>* `number`<br>* `null`<br> | `false` | * `minimum`: `0`<br>* `maximum`: `1`<br> | Configure ratio.<br>If omitted or null, 1.0 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `ratio` | not_implemented | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.probability/development`](#sampler)

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
      ],
      "minimum": 0,
      "maximum": 1
    }
  }
}</pre>
</details>

## ExperimentalProcessResourceDetector <a id="experimentalprocessresourcedetector"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.process`](#experimentalresourcedetector)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `host` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure host.<br>If omitted or null, localhost is used.<br> |
| `port` | one of:<br>* `integer`<br>* `null`<br> | `false` | No constraints. | Configure port.<br>If omitted or null, 9464 is used.<br> |
| `without_scope_info` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure Prometheus Exporter to produce metrics without a scope info metric.<br>If omitted or null, false is used.<br> |
| `with_resource_constant_labels` | [`IncludeExclude`](#includeexclude) | `false` | No constraints. | Configure Prometheus Exporter to add resource attributes as metrics attributes, where the resource attribute keys match the patterns. |
| `translation_strategy` | one of:<br>* `string`<br>* `null`<br> | `false` | * `enum`: `["UnderscoreEscapingWithSuffixes","UnderscoreEscapingWithoutSuffixes","NoUTF8EscapingWithSuffixes","NoTranslation"]`<br> | Configure how Prometheus metrics are exposed. Values include:<br><br> * UnderscoreEscapingWithSuffixes, the default. This fully escapes metric names for classic Prometheus metric name compatibility, and includes appending type and unit suffixes.<br> * UnderscoreEscapingWithoutSuffixes, metric names will continue to escape special characters to _, but suffixes won't be attached.<br> * NoUTF8EscapingWithSuffixes will disable changing special characters to _. Special suffixes like units and _total for counters will be attached.<br> * NoTranslation. This strategy bypasses all metric and label name translation, passing them through unaltered.<br><br>If omitted or null, UnderscoreEscapingWithSuffixes is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `host` | supported | supported | unknown |
| `port` | supported | supported | unknown |
| `without_scope_info` | supported | ignored | unknown |
| `with_resource_constant_labels` | supported | supported | unknown |
| `translation_strategy` | supported | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PullMetricExporter.prometheus/development`](#pullmetricexporter)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attributes` | [`IncludeExclude`](#includeexclude) | `false` | No constraints. | Configure attributes provided by resource detectors. |
| `detectors` | `array` of [`ExperimentalResourceDetector`](#experimentalresourcedetector) | `false` | No constraints. | Configure resource detectors.<br>Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language. <br>If omitted or null, no resource detectors are enabled.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `attributes` | not_implemented | supported | unknown |
| `detectors` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Resource.detection/development`](#resource)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

`ExperimentalResourceDetector` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `container` | [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | `false` | No constraints. | Enable the container resource detector, which populates container.* attributes.<br> |
| `host` | [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | `false` | No constraints. | Enable the host resource detector, which populates host.* and os.* attributes.<br> |
| `process` | [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | `false` | No constraints. | Enable the process resource detector, which populates process.* attributes.<br> |
| `service` | [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | `false` | No constraints. | Enable the service detector, which populates service.name based on the OTEL_SERVICE_NAME environment variable and service.instance.id.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `container` | not_implemented | supported | unknown |
| `host` | not_implemented | supported | unknown |
| `process` | not_implemented | supported | unknown |
| `service` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`ExperimentalResourceDetection.detectors`](#experimentalresourcedetection)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
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
  }
}</pre>
</details>

## ExperimentalServiceResourceDetector <a id="experimentalserviceresourcedetector"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.service`](#experimentalresourcedetector)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `disabled` | `boolean` | `false` | No constraints. | Configure if the tracer is enabled or not. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `disabled` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalTracerConfigurator.default_config`](#experimentaltracerconfigurator)
* [`ExperimentalTracerMatcherAndConfig.config`](#experimentaltracermatcherandconfig)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `default_config` | [`ExperimentalTracerConfig`](#experimentaltracerconfig) | `false` | No constraints. | Configure the default tracer config used there is no matching entry in .tracer_configurator/development.tracers. |
| `tracers` | `array` of [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | `false` | No constraints. | Configure tracers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `default_config` | not_implemented | supported | unknown |
| `tracers` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TracerProvider.tracer_configurator/development`](#tracerprovider)

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

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `name` | `string` | `false` | No constraints. | Configure tracer names to match, evaluated as follows:<br><br> * If the tracer name exactly matches.<br> * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |
| `config` | [`ExperimentalTracerConfig`](#experimentaltracerconfig) | `false` | No constraints. | The tracer config. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `name` | not_implemented | supported | unknown |
| `config` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalTracerConfigurator.tracers`](#experimentaltracerconfigurator)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `boundaries` | `array` of `number` | `false` | No constraints. | Configure bucket boundaries.<br>If omitted, [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 10000] is used.<br> |
| `record_min_max` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure record min and max.<br>If omitted or null, true is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `boundaries` | supported | supported | unknown |
| `record_min_max` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.explicit_bucket_histogram`](#aggregation)

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

Constraints: 

* `enum`: `["explicit_bucket_histogram","base2_exponential_bucket_histogram"]`

Usages:

* [`OtlpHttpMetricExporter.default_histogram_aggregation`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.default_histogram_aggregation`](#otlpgrpcmetricexporter)
* [`ExperimentalOtlpFileMetricExporter.default_histogram_aggregation`](#experimentalotlpfilemetricexporter)
* [`ConsoleMetricExporter.default_histogram_aggregation`](#consolemetricexporter)

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

Constraints: 

* `enum`: `["cumulative","delta","low_memory"]`

Usages:

* [`OtlpHttpMetricExporter.temporality_preference`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.temporality_preference`](#otlpgrpcmetricexporter)
* [`ExperimentalOtlpFileMetricExporter.temporality_preference`](#experimentalotlpfilemetricexporter)
* [`ConsoleMetricExporter.temporality_preference`](#consolemetricexporter)

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

## GrpcTls <a id="grpctls"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `certificate_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure certificate used to verify a server's TLS credentials. <br>Absolute path to certificate file in PEM format.<br>If omitted or null, system default certificate verification is used for secure connections.<br> |
| `client_key_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br>If omitted or null, mTLS is not used.<br> |
| `client_certificate_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS client certificate. <br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br>If omitted or null, mTLS is not used.<br> |
| `insecure` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure client transport security for the exporter's connection. <br>Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.<br>If omitted or null, false is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `certificate_file` | unknown | unknown | unknown |
| `client_key_file` | unknown | unknown | unknown |
| `client_certificate_file` | unknown | unknown | unknown |
| `insecure` | unknown | not_applicable | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OtlpGrpcExporter.tls`](#otlpgrpcexporter)
* [`OtlpGrpcMetricExporter.tls`](#otlpgrpcmetricexporter)

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
    "insecure": {
      "type": [
        "boolean",
        "null"
      ]
    }
  }
}</pre>
</details>

## HttpTls <a id="httptls"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `certificate_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure certificate used to verify a server's TLS credentials. <br>Absolute path to certificate file in PEM format.<br>If omitted or null, system default certificate verification is used for secure connections.<br> |
| `client_key_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br>If omitted or null, mTLS is not used.<br> |
| `client_certificate_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS client certificate. <br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br>If omitted or null, mTLS is not used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `certificate_file` | unknown | unknown | unknown |
| `client_key_file` | unknown | unknown | unknown |
| `client_certificate_file` | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OtlpHttpExporter.tls`](#otlphttpexporter)
* [`OtlpHttpMetricExporter.tls`](#otlphttpmetricexporter)

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
    }
  }
}</pre>
</details>

## IncludeExclude <a id="includeexclude"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `included` | `array` of `string` | `false` | No constraints. | Configure list of value patterns to include.<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, all values are included.<br> |
| `excluded` | `array` of `string` | `false` | No constraints. | Configure list of value patterns to exclude. Applies after .included (i.e. excluded has higher priority than included).<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, .included attributes are included.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `included` | supported | supported | unknown |
| `excluded` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalPrometheusMetricExporter.with_resource_constant_labels`](#experimentalprometheusmetricexporter)
* [`ViewStream.attribute_keys`](#viewstream)
* [`ExperimentalResourceDetection.attributes`](#experimentalresourcedetection)

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

Constraints: 

* `enum`: `["counter","gauge","histogram","observable_counter","observable_gauge","observable_up_down_counter","up_down_counter"]`

Usages:

* [`ViewSelector.instrument_type`](#viewselector)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.jaeger`](#textmappropagator)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `interval` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | TODO |
| `initial_sampler` | [`Sampler`](#sampler) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `endpoint` | not_implemented | supported | unknown |
| `interval` | not_implemented | supported | unknown |
| `initial_sampler` | not_implemented | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.jaeger_remote`](#sampler)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.last_value`](#aggregation)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `processors` | `array` of [`LogRecordProcessor`](#logrecordprocessor) | `true` | No constraints. | Configure log record processors. |
| `limits` | [`LogRecordLimits`](#logrecordlimits) | `false` | No constraints. | Configure log record limits. See also attribute_limits. |
| `logger_configurator/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | `false` | No constraints. | Configure loggers.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `processors` | supported | supported | unknown |
| `limits` | supported | supported | unknown |
| `logger_configurator/development` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["processors"]`

Usages:

* [`OpenTelemetryConfiguration.logger_provider`](#opentelemetryconfiguration)

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
      "additionalProperties": {
        "type": [
          "object",
          "null"
        ]
      },
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
      "additionalProperties": {
        "type": [
          "object"
        ]
      },
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "batch": {
          "$ref": "#/$defs/BatchLogRecordProcessor"
        },
        "simple": {
          "$ref": "#/$defs/SimpleLogRecordProcessor"
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

`LogRecordExporter` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `otlp_http` | [`OtlpHttpExporter`](#otlphttpexporter) | `false` | No constraints. | Configure exporter to be OTLP with HTTP transport. |
| `otlp_grpc` | [`OtlpGrpcExporter`](#otlpgrpcexporter) | `false` | No constraints. | Configure exporter to be OTLP with gRPC transport. |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` | No constraints. | Configure exporter to be OTLP with file transport.<br> |
| `console` | [`ConsoleExporter`](#consoleexporter) | `false` | No constraints. | Configure exporter to be console. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `otlp_http` | supported | supported | unknown |
| `otlp_grpc` | supported | supported | unknown |
| `otlp_file/development` | supported | supported | unknown |
| `console` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`SimpleLogRecordProcessor.exporter`](#simplelogrecordprocessor)
* [`BatchLogRecordProcessor.exporter`](#batchlogrecordprocessor)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
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
  }
}</pre>
</details>

## LogRecordLimits <a id="logrecordlimits"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> |
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `attribute_value_length_limit` | supported | supported | unknown |
| `attribute_count_limit` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LoggerProvider.limits`](#loggerprovider)

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

`LogRecordProcessor` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `batch` | [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | `false` | No constraints. | Configure a batch log record processor. |
| `simple` | [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | `false` | No constraints. | Configure a simple log record processor. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `batch` | supported | supported | unknown |
| `simple` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`LoggerProvider.processors`](#loggerprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "batch": {
      "$ref": "#/$defs/BatchLogRecordProcessor"
    },
    "simple": {
      "$ref": "#/$defs/SimpleLogRecordProcessor"
    }
  }
}</pre>
</details>

## MeterProvider <a id="meterprovider"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `readers` | `array` of [`MetricReader`](#metricreader) | `true` | No constraints. | Configure metric readers. |
| `views` | `array` of [`View`](#view) | `false` | No constraints. | Configure views. <br>Each view has a selector which determines the instrument(s) it applies to, and a configuration for the resulting stream(s).<br> |
| `exemplar_filter` | [`ExemplarFilter`](#exemplarfilter) | `false` | No constraints. | Configure the exemplar filter. <br>Values include: trace_based, always_on, always_off. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#metrics-sdk-configuration.<br>If omitted or null, trace_based is used.<br> |
| `meter_configurator/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | `false` | No constraints. | Configure meters.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `readers` | supported | supported | unknown |
| `views` | supported | supported | unknown |
| `exemplar_filter` | supported | supported | unknown |
| `meter_configurator/development` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["readers"]`

Usages:

* [`OpenTelemetryConfiguration.meter_provider`](#opentelemetryconfiguration)

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
      "additionalProperties": {
        "type": [
          "object",
          "null"
        ]
      },
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
          "$ref": "#/$defs/ConsoleMetricExporter"
        }
      }
    },
    "PullMetricExporter": {
      "type": [
        "object"
      ],
      "additionalProperties": {
        "type": [
          "object",
          "null"
        ]
      },
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "prometheus/development": {
          "$ref": "#/$defs/ExperimentalPrometheusMetricExporter"
        }
      }
    },
    "MetricProducer": {
      "type": "object",
      "additionalProperties": {
        "type": [
          "object",
          "null"
        ]
      },
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "opencensus": {
          "$ref": "#/$defs/OpenCensusMetricProducer"
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
        "tls": {
          "$ref": "common.json#/$defs/HttpTls"
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
        "tls": {
          "$ref": "common.json#/$defs/GrpcTls"
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
    "ConsoleMetricExporter": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
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

`MetricProducer` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `opencensus` | [`OpenCensusMetricProducer`](#opencensusmetricproducer) | `false` | No constraints. | Configure metric producer to be opencensus. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `opencensus` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PeriodicMetricReader.producers`](#periodicmetricreader)
* [`PullMetricReader.producers`](#pullmetricreader)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "opencensus": {
      "$ref": "#/$defs/OpenCensusMetricProducer"
    }
  }
}</pre>
</details>

## MetricReader <a id="metricreader"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `periodic` | [`PeriodicMetricReader`](#periodicmetricreader) | `false` | No constraints. | Configure a periodic metric reader. |
| `pull` | [`PullMetricReader`](#pullmetricreader) | `false` | No constraints. | Configure a pull based metric reader. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `periodic` | supported | supported | unknown |
| `pull` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`MeterProvider.readers`](#meterprovider)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `name` | `string` | `true` | No constraints. | The name of the pair. |
| `value` | one of:<br>* `string`<br>* `null`<br> | `true` | No constraints. | The value of the pair. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `name` | supported | supported | unknown |
| `value` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","value"]`

Usages:

* [`OtlpHttpExporter.headers`](#otlphttpexporter)
* [`OtlpGrpcExporter.headers`](#otlpgrpcexporter)
* [`OtlpHttpMetricExporter.headers`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.headers`](#otlpgrpcmetricexporter)

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`MetricProducer.opencensus`](#metricproducer)

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

## OpenTelemetryConfiguration <a id="opentelemetryconfiguration"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `file_format` | `string` | `true` | No constraints. | TODO |
| `disabled` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | TODO |
| `log_level` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `attribute_limits` | [`AttributeLimits`](#attributelimits) | `false` | No constraints. | TODO |
| `logger_provider` | [`LoggerProvider`](#loggerprovider) | `false` | No constraints. | TODO |
| `meter_provider` | [`MeterProvider`](#meterprovider) | `false` | No constraints. | TODO |
| `propagator` | [`Propagator`](#propagator) | `false` | No constraints. | TODO |
| `tracer_provider` | [`TracerProvider`](#tracerprovider) | `false` | No constraints. | TODO |
| `resource` | [`Resource`](#resource) | `false` | No constraints. | TODO |
| `instrumentation/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalInstrumentation`](#experimentalinstrumentation) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `file_format` | unknown | unknown | unknown |
| `disabled` | unknown | unknown | unknown |
| `log_level` | unknown | unknown | unknown |
| `attribute_limits` | unknown | unknown | unknown |
| `logger_provider` | unknown | unknown | unknown |
| `meter_provider` | unknown | unknown | unknown |
| `propagator` | unknown | unknown | unknown |
| `tracer_provider` | unknown | unknown | unknown |
| `resource` | unknown | unknown | unknown |
| `instrumentation/development` | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `true`
* `required`: `["file_format"]`

No usages.

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

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.ottrace`](#textmappropagator)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | No constraints. | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> |
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> |
| `tls` | [`GrpcTls`](#grpctls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `endpoint` | supported | supported | unknown |
| `headers` | supported | supported | unknown |
| `headers_list` | supported | supported | unknown |
| `compression` | supported | supported | unknown |
| `timeout` | supported | supported | unknown |
| `tls` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_grpc`](#logrecordexporter)
* [`SpanExporter.otlp_grpc`](#spanexporter)

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
    "tls": {
      "$ref": "#/$defs/GrpcTls"
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
    }
  }
}</pre>
</details>

## OtlpGrpcMetricExporter <a id="otlpgrpcmetricexporter"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | No constraints. | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> |
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> |
| `tls` | [`GrpcTls`](#grpctls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `endpoint` | supported | supported | unknown |
| `headers` | supported | supported | unknown |
| `headers_list` | supported | supported | unknown |
| `compression` | supported | supported | unknown |
| `timeout` | supported | supported | unknown |
| `temporality_preference` | supported | supported | unknown |
| `default_histogram_aggregation` | supported | supported | unknown |
| `tls` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_grpc`](#pushmetricexporter)

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
    "tls": {
      "$ref": "common.json#/$defs/GrpcTls"
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

Constraints: 

* `enum`: `["protobuf","json"]`

Usages:

* [`OtlpHttpExporter.encoding`](#otlphttpexporter)
* [`OtlpHttpMetricExporter.encoding`](#otlphttpmetricexporter)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint, including the signal specific path.<br>If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | No constraints. | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> |
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> |
| `encoding` | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` | No constraints. | Configure the encoding used for messages. <br>Values include: protobuf, json. Implementations may not support json.<br>If omitted or null, protobuf is used.<br> |
| `tls` | [`HttpTls`](#httptls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `endpoint` | supported | supported | unknown |
| `headers` | supported | supported | unknown |
| `headers_list` | supported | supported | unknown |
| `compression` | supported | supported | unknown |
| `timeout` | supported | supported | unknown |
| `encoding` | supported | supported | unknown |
| `tls` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_http`](#logrecordexporter)
* [`SpanExporter.otlp_http`](#spanexporter)

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
    "tls": {
      "$ref": "#/$defs/HttpTls"
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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint, including the signal specific path.<br>If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | No constraints. | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> |
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> |
| `encoding` | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` | No constraints. | Configure the encoding used for messages. <br>Values include: protobuf, json. Implementations may not support json.<br>If omitted or null, protobuf is used.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> |
| `tls` | [`HttpTls`](#httptls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `endpoint` | supported | supported | unknown |
| `endpoint` | supported | supported | unknown |
| `headers` | supported | supported | unknown |
| `headers_list` | supported | supported | unknown |
| `compression` | supported | supported | unknown |
| `timeout` | supported | supported | unknown |
| `encoding` | supported | supported | unknown |
| `temporality_preference` | supported | supported | unknown |
| `default_histogram_aggregation` | supported | supported | unknown |
| `tls` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_http`](#pushmetricexporter)

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
    "tls": {
      "$ref": "common.json#/$defs/HttpTls"
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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `root` | [`Sampler`](#sampler) | `false` | No constraints. | Configure root sampler.<br>If omitted or null, always_on is used.<br> |
| `remote_parent_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure remote_parent_sampled sampler.<br>If omitted or null, always_on is used.<br> |
| `remote_parent_not_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure remote_parent_not_sampled sampler.<br>If omitted or null, always_off is used.<br> |
| `local_parent_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure local_parent_sampled sampler.<br>If omitted or null, always_on is used.<br> |
| `local_parent_not_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure local_parent_not_sampled sampler.<br>If omitted or null, always_off is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `root` | supported | supported | unknown |
| `remote_parent_sampled` | supported | supported | unknown |
| `remote_parent_not_sampled` | supported | supported | unknown |
| `local_parent_sampled` | supported | supported | unknown |
| `local_parent_not_sampled` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.parent_based`](#sampler)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `interval` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between start of two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 60000 is used.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> |
| `exporter` | [`PushMetricExporter`](#pushmetricexporter) | `true` | No constraints. | Configure exporter. |
| `producers` | `array` of [`MetricProducer`](#metricproducer) | `false` | No constraints. | Configure metric producers. |
| `cardinality_limits` | [`CardinalityLimits`](#cardinalitylimits) | `false` | No constraints. | Configure cardinality limits. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `interval` | supported | supported | unknown |
| `timeout` | supported | supported | unknown |
| `exporter` | supported | supported | unknown |
| `producers` | supported | supported | unknown |
| `cardinality_limits` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`MetricReader.periodic`](#metricreader)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `composite` | `array` of [`TextMapPropagator`](#textmappropagator) | `false` | No constraints. | Configure the propagators in the composite text map propagator. Entries from .composite_list are appended to the list here with duplicates filtered out.<br>Built-in propagator keys include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party keys include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> |
| `composite_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure the propagators in the composite text map propagator. Entries are appended to .composite with duplicates filtered out.<br>The value is a comma separated list of propagator identifiers matching the format of OTEL_PROPAGATORS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>Built-in propagator identifiers include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party identifiers include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `composite` | supported | supported | unknown |
| `composite_list` | supported | supported | unknown |
</details>

No constraints.

Usages:

* [`OpenTelemetryConfiguration.propagator`](#opentelemetryconfiguration)

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
      "additionalProperties": {
        "type": [
          "object",
          "null"
        ]
      },
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

`PullMetricExporter` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `prometheus/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | `false` | No constraints. | Configure exporter to be prometheus.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `prometheus/development` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PullMetricReader.exporter`](#pullmetricreader)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "prometheus/development": {
      "$ref": "#/$defs/ExperimentalPrometheusMetricExporter"
    }
  }
}</pre>
</details>

## PullMetricReader <a id="pullmetricreader"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `exporter` | [`PullMetricExporter`](#pullmetricexporter) | `true` | No constraints. | Configure exporter. |
| `producers` | `array` of [`MetricProducer`](#metricproducer) | `false` | No constraints. | Configure metric producers. |
| `cardinality_limits` | [`CardinalityLimits`](#cardinalitylimits) | `false` | No constraints. | Configure cardinality limits. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `exporter` | supported | supported | unknown |
| `producers` | supported | supported | unknown |
| `cardinality_limits` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`MetricReader.pull`](#metricreader)

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

`PushMetricExporter` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `otlp_http` | [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | `false` | No constraints. | Configure exporter to be OTLP with HTTP transport.<br> |
| `otlp_grpc` | [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | `false` | No constraints. | Configure exporter to be OTLP with gRPC transport.<br> |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | `false` | No constraints. | Configure exporter to be OTLP with file transport.<br> |
| `console` | [`ConsoleMetricExporter`](#consolemetricexporter) | `false` | No constraints. | Configure exporter to be console.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `otlp_http` | supported | supported | unknown |
| `otlp_grpc` | supported | supported | unknown |
| `otlp_file/development` | supported | supported | unknown |
| `console` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PeriodicMetricReader.exporter`](#periodicmetricreader)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
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
      "$ref": "#/$defs/ConsoleMetricExporter"
    }
  }
}</pre>
</details>

## Resource <a id="resource"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attributes` | `array` of [`AttributeNameValue`](#attributenamevalue) | `false` | No constraints. | Configure resource attributes. Entries have higher priority than entries from .resource.attributes_list.<br> |
| `detection/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalResourceDetection`](#experimentalresourcedetection) | `false` | No constraints. | Configure resource detection.<br>If omitted or null, resource detection is disabled.<br> |
| `schema_url` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure resource schema URL.<br>If omitted or null, no schema URL is used.<br> |
| `attributes_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure resource attributes. Entries have lower priority than entries from .resource.attributes.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_RESOURCE_ATTRIBUTES. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>If omitted or null, no resource attributes are added.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `attributes` | supported | supported | unknown |
| `detection/development` | supported | supported | unknown |
| `schema_url` | supported | supported | unknown |
| `attributes_list` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.resource`](#opentelemetryconfiguration)

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
      "additionalProperties": {
        "type": [
          "object",
          "null"
        ]
      },
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

`Sampler` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `always_off` | [`AlwaysOffSampler`](#alwaysoffsampler) | `false` | No constraints. | Configure sampler to be always_off. |
| `always_on` | [`AlwaysOnSampler`](#alwaysonsampler) | `false` | No constraints. | Configure sampler to be always_on. |
| `jaeger_remote` | [`JaegerRemoteSampler`](#jaegerremotesampler) | `false` | No constraints. | TODO |
| `parent_based` | [`ParentBasedSampler`](#parentbasedsampler) | `false` | No constraints. | Configure sampler to be parent_based. |
| `trace_id_ratio_based` | [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | `false` | No constraints. | Configure sampler to be trace_id_ratio_based. |
| `probability/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | `false` | No constraints. | Configure sampler to be probability. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `always_off` | supported | supported | unknown |
| `always_on` | supported | supported | unknown |
| `jaeger_remote` | supported | supported | unknown |
| `parent_based` | supported | supported | unknown |
| `trace_id_ratio_based` | supported | supported | unknown |
| `probability/development` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`TracerProvider.sampler`](#tracerprovider)
* [`JaegerRemoteSampler.initial_sampler`](#jaegerremotesampler)
* [`ParentBasedSampler.root`](#parentbasedsampler)
* [`ParentBasedSampler.remote_parent_sampled`](#parentbasedsampler)
* [`ParentBasedSampler.remote_parent_not_sampled`](#parentbasedsampler)
* [`ParentBasedSampler.local_parent_sampled`](#parentbasedsampler)
* [`ParentBasedSampler.local_parent_not_sampled`](#parentbasedsampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
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
    "probability/development": {
      "$ref": "#/$defs/ExperimentalProbabilitySampler"
    },
    "trace_id_ratio_based": {
      "$ref": "#/$defs/TraceIdRatioBasedSampler"
    }
  }
}</pre>
</details>

## SimpleLogRecordProcessor <a id="simplelogrecordprocessor"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `exporter` | [`LogRecordExporter`](#logrecordexporter) | `true` | No constraints. | Configure exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `exporter` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`LogRecordProcessor.simple`](#logrecordprocessor)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `exporter` | [`SpanExporter`](#spanexporter) | `true` | No constraints. | Configure exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `exporter` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`SpanProcessor.simple`](#spanprocessor)

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

`SpanExporter` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `otlp_http` | [`OtlpHttpExporter`](#otlphttpexporter) | `false` | No constraints. | Configure exporter to be OTLP with HTTP transport. |
| `otlp_grpc` | [`OtlpGrpcExporter`](#otlpgrpcexporter) | `false` | No constraints. | Configure exporter to be OTLP with gRPC transport. |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` | No constraints. | Configure exporter to be OTLP with file transport.<br> |
| `console` | [`ConsoleExporter`](#consoleexporter) | `false` | No constraints. | Configure exporter to be console. |
| `zipkin` | [`ZipkinSpanExporter`](#zipkinspanexporter) | `false` | No constraints. | Configure exporter to be zipkin. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `otlp_http` | supported | supported | unknown |
| `otlp_grpc` | supported | supported | unknown |
| `otlp_file/development` | supported | supported | unknown |
| `console` | supported | supported | unknown |
| `zipkin` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`BatchSpanProcessor.exporter`](#batchspanprocessor)
* [`SimpleSpanProcessor.exporter`](#simplespanprocessor)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
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
  }
}</pre>
</details>

## SpanLimits <a id="spanlimits"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> |
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `event_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max span event count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `link_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max span link count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `event_attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attributes per span event. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `link_attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attributes per span link. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `attribute_value_length_limit` | supported | supported | unknown |
| `attribute_count_limit` | supported | supported | unknown |
| `event_count_limit` | supported | supported | unknown |
| `link_count_limit` | supported | supported | unknown |
| `event_attribute_count_limit` | supported | supported | unknown |
| `link_attribute_count_limit` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TracerProvider.limits`](#tracerprovider)

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

`SpanProcessor` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `batch` | [`BatchSpanProcessor`](#batchspanprocessor) | `false` | No constraints. | Configure a batch span processor. |
| `simple` | [`SimpleSpanProcessor`](#simplespanprocessor) | `false` | No constraints. | Configure a simple span processor. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `batch` | supported | supported | unknown |
| `simple` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`TracerProvider.processors`](#tracerprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "batch": {
      "$ref": "#/$defs/BatchSpanProcessor"
    },
    "simple": {
      "$ref": "#/$defs/SimpleSpanProcessor"
    }
  }
}</pre>
</details>

## SumAggregation <a id="sumaggregation"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.sum`](#aggregation)

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

`TextMapPropagator` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `tracecontext` | [`TraceContextPropagator`](#tracecontextpropagator) | `false` | No constraints. | Include the w3c trace context propagator. |
| `baggage` | [`BaggagePropagator`](#baggagepropagator) | `false` | No constraints. | Include the w3c baggage propagator. |
| `b3` | [`B3Propagator`](#b3propagator) | `false` | No constraints. | Include the zipkin b3 propagator. |
| `b3multi` | [`B3MultiPropagator`](#b3multipropagator) | `false` | No constraints. | Include the zipkin b3 multi propagator. |
| `jaeger` | [`JaegerPropagator`](#jaegerpropagator) | `false` | No constraints. | Include the jaeger propagator. |
| `ottrace` | [`OpenTracingPropagator`](#opentracingpropagator) | `false` | No constraints. | Include the opentracing propagator. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `tracecontext` | supported | supported | unknown |
| `baggage` | supported | supported | unknown |
| `b3` | supported | supported | unknown |
| `b3multi` | supported | supported | unknown |
| `jaeger` | supported | supported | unknown |
| `ottrace` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`Propagator.composite`](#propagator)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.json)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": [
      "object",
      "null"
    ]
  },
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
  }
}</pre>
</details>

## TraceContextPropagator <a id="tracecontextpropagator"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.tracecontext`](#textmappropagator)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `ratio` | one of:<br>* `number`<br>* `null`<br> | `false` | * `minimum`: `0`<br>* `maximum`: `1`<br> | Configure trace_id_ratio.<br>If omitted or null, 1.0 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `ratio` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.trace_id_ratio_based`](#sampler)

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
      ],
      "minimum": 0,
      "maximum": 1
    }
  }
}</pre>
</details>

## TracerProvider <a id="tracerprovider"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `processors` | `array` of [`SpanProcessor`](#spanprocessor) | `true` | No constraints. | Configure span processors. |
| `limits` | [`SpanLimits`](#spanlimits) | `false` | No constraints. | Configure span limits. See also attribute_limits. |
| `sampler` | [`Sampler`](#sampler) | `false` | No constraints. | Configure the sampler.<br>If omitted, parent based sampler with a root of always_on is used.<br> |
| `tracer_configurator/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | `false` | No constraints. | Configure tracers.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `processors` | supported | supported | unknown |
| `limits` | supported | supported | unknown |
| `sampler` | supported | supported | unknown |
| `tracer_configurator/development` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["processors"]`

Usages:

* [`OpenTelemetryConfiguration.tracer_provider`](#opentelemetryconfiguration)

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
      "additionalProperties": {
        "type": [
          "object",
          "null"
        ]
      },
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
        "probability/development": {
          "$ref": "#/$defs/ExperimentalProbabilitySampler"
        },
        "trace_id_ratio_based": {
          "$ref": "#/$defs/TraceIdRatioBasedSampler"
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
    "ExperimentalProbabilitySampler": {
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
          ],
          "minimum": 0,
          "maximum": 1
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
          ],
          "minimum": 0,
          "maximum": 1
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
      "additionalProperties": {
        "type": [
          "object",
          "null"
        ]
      },
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
      "additionalProperties": {
        "type": [
          "object",
          "null"
        ]
      },
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "batch": {
          "$ref": "#/$defs/BatchSpanProcessor"
        },
        "simple": {
          "$ref": "#/$defs/SimpleSpanProcessor"
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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `selector` | [`ViewSelector`](#viewselector) | `false` | No constraints. | Configure view selector. <br>Selection criteria is additive as described in https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#instrument-selection-criteria.<br> |
| `stream` | [`ViewStream`](#viewstream) | `false` | No constraints. | Configure view stream. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `selector` | supported | supported | unknown |
| `stream` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`MeterProvider.views`](#meterprovider)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `instrument_name` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure instrument name selection criteria.<br>If omitted or null, all instrument names match.<br> |
| `instrument_type` | [`InstrumentType`](#instrumenttype) | `false` | No constraints. | Configure instrument type selection criteria.<br>Values include: counter, gauge, histogram, observable_counter, observable_gauge, observable_up_down_counter, up_down_counter.<br>If omitted or null, all instrument types match.<br> |
| `unit` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure the instrument unit selection criteria.<br>If omitted or null, all instrument units match.<br> |
| `meter_name` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure meter name selection criteria.<br>If omitted or null, all meter names match.<br> |
| `meter_version` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure meter version selection criteria.<br>If omitted or null, all meter versions match.<br> |
| `meter_schema_url` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure meter schema url selection criteria.<br>If omitted or null, all meter schema URLs match.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `instrument_name` | supported | supported | unknown |
| `instrument_type` | supported | supported | unknown |
| `unit` | supported | supported | unknown |
| `meter_name` | supported | supported | unknown |
| `meter_version` | supported | supported | unknown |
| `meter_schema_url` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`View.selector`](#view)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `name` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure metric name of the resulting stream(s).<br>If omitted or null, the instrument's original name is used.<br> |
| `description` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure metric description of the resulting stream(s).<br>If omitted or null, the instrument's origin description is used.<br> |
| `aggregation` | [`Aggregation`](#aggregation) | `false` | No constraints. | Configure aggregation of the resulting stream(s). <br>Values include: default, drop, explicit_bucket_histogram, base2_exponential_bucket_histogram, last_value, sum. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#aggregation.<br>If omitted, default is used.<br> |
| `aggregation_cardinality_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure the aggregation cardinality limit.<br>If omitted or null, the metric reader's default cardinality limit is used.<br> |
| `attribute_keys` | [`IncludeExclude`](#includeexclude) | `false` | No constraints. | Configure attribute keys retained in the resulting stream(s).<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `name` | supported | supported | unknown |
| `description` | supported | supported | unknown |
| `aggregation` | supported | supported | unknown |
| `aggregation_cardinality_limit` | supported | supported | unknown |
| `attribute_keys` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`View.stream`](#view)

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

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint.<br>If omitted or null, http://localhost:9411/api/v2/spans is used.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export. <br>Value must be non-negative. A value of 0 indicates indefinite.<br>If omitted or null, 10000 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [java](#java) | [js](#js) |
|---|---|---|---|
| `endpoint` | supported | supported | unknown |
| `timeout` | supported | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`SpanExporter.zipkin`](#spanexporter)

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

# Language Support Status <a id="language-support-status"></a>

## cpp <a id="cpp"></a>

Latest supported file format: `1.0.0-rc.2`

| Type | Status | Notes | Property Support Status |
|---|---|---|---|
| [`Aggregation`](#aggregation) | supported |  | * `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `base2_exponential_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | supported |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | supported |  |  |
| [`AttributeLimits`](#attributelimits) | supported |  | * `attribute_value_length_limit`: supported<br>* `attribute_count_limit`: supported<br> |
| [`AttributeNameValue`](#attributenamevalue) | supported |  | * `name`: supported<br>* `value`: supported<br>* `type`: supported<br> |
| [`AttributeType`](#attributetype) | supported |  |  |
| [`B3MultiPropagator`](#b3multipropagator) | supported |  |  |
| [`B3Propagator`](#b3propagator) | supported |  |  |
| [`BaggagePropagator`](#baggagepropagator) | supported |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: supported<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | supported |  | * `schedule_delay`: supported<br>* `export_timeout`: supported<br>* `max_queue_size`: supported<br>* `max_export_batch_size`: supported<br>* `exporter`: supported<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | supported |  | * `schedule_delay`: supported<br>* `export_timeout`: supported<br>* `max_queue_size`: supported<br>* `max_export_batch_size`: supported<br>* `exporter`: supported<br> |
| [`CardinalityLimits`](#cardinalitylimits) | not_implemented |  | * `default`: not_implemented<br>* `counter`: not_implemented<br>* `gauge`: not_implemented<br>* `histogram`: not_implemented<br>* `observable_counter`: not_implemented<br>* `observable_gauge`: not_implemented<br>* `observable_up_down_counter`: not_implemented<br>* `up_down_counter`: not_implemented<br> |
| [`ConsoleExporter`](#consoleexporter) | supported |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | supported |  | * `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br> |
| [`DefaultAggregation`](#defaultaggregation) | supported |  |  |
| [`DropAggregation`](#dropaggregation) | supported |  |  |
| [`ExemplarFilter`](#exemplarfilter) | not_implemented |  |  |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | not_implemented |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | not_applicable |  | * `peer`: not_applicable<br>* `http`: not_applicable<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | not_implemented |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | not_applicable |  | * `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | not_applicable |  | * `client`: not_applicable<br>* `server`: not_applicable<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | not_applicable |  | * `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | not_applicable |  | * `general`: not_applicable<br>* `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `go`: not_applicable<br>* `java`: not_applicable<br>* `js`: not_applicable<br>* `php`: not_applicable<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | not_applicable |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | not_implemented |  | * `disabled`: not_implemented<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | not_implemented |  | * `default_config`: not_implemented<br>* `loggers`: not_implemented<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | not_implemented |  | * `name`: not_implemented<br>* `config`: not_implemented<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | not_implemented |  | * `disabled`: not_implemented<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | not_implemented |  | * `default_config`: not_implemented<br>* `meters`: not_implemented<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | not_implemented |  | * `name`: not_implemented<br>* `config`: not_implemented<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | supported |  | * `output_stream`: supported<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | supported |  | * `output_stream`: supported<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | not_implemented |  | * `service_mapping`: not_implemented<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | not_implemented |  | * `peer`: not_implemented<br>* `service`: not_implemented<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | not_implemented |  | * `ratio`: not_implemented<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | not_implemented |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | supported |  | * `host`: supported<br>* `port`: supported<br>* `without_scope_info`: supported<br>* `with_resource_constant_labels`: supported<br>* `translation_strategy`: supported<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | not_implemented |  | * `attributes`: not_implemented<br>* `detectors`: not_implemented<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | not_implemented |  | * `container`: not_implemented<br>* `host`: not_implemented<br>* `process`: not_implemented<br>* `service`: not_implemented<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | not_implemented |  |  |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | not_implemented |  | * `disabled`: not_implemented<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | not_implemented |  | * `default_config`: not_implemented<br>* `tracers`: not_implemented<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | not_implemented |  | * `name`: not_implemented<br>* `config`: not_implemented<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | supported |  | * `boundaries`: supported<br>* `record_min_max`: supported<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | supported |  |  |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | supported |  |  |
| [`GrpcTls`](#grpctls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br>* `insecure`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | supported |  | * `included`: supported<br>* `excluded`: supported<br> |
| [`InstrumentType`](#instrumenttype) | supported |  |  |
| [`JaegerPropagator`](#jaegerpropagator) | supported |  |  |
| [`JaegerRemoteSampler`](#jaegerremotesampler) | not_implemented |  | * `endpoint`: not_implemented<br>* `interval`: not_implemented<br>* `initial_sampler`: not_implemented<br> |
| [`LastValueAggregation`](#lastvalueaggregation) | supported |  |  |
| [`LoggerProvider`](#loggerprovider) | supported |  | * `processors`: supported<br>* `limits`: supported<br>* `logger_configurator/development`: supported<br> |
| [`LogRecordExporter`](#logrecordexporter) | supported |  | * `otlp_http`: supported<br>* `otlp_grpc`: supported<br>* `otlp_file/development`: supported<br>* `console`: supported<br> |
| [`LogRecordLimits`](#logrecordlimits) | supported |  | * `attribute_value_length_limit`: supported<br>* `attribute_count_limit`: supported<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`MeterProvider`](#meterprovider) | supported |  | * `readers`: supported<br>* `views`: supported<br>* `exemplar_filter`: supported<br>* `meter_configurator/development`: supported<br> |
| [`MetricProducer`](#metricproducer) | supported |  | * `opencensus`: supported<br> |
| [`MetricReader`](#metricreader) | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| [`NameStringValuePair`](#namestringvaluepair) | supported |  | * `name`: supported<br>* `value`: supported<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | supported |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | unknown |  | * `file_format`: unknown<br>* `disabled`: unknown<br>* `log_level`: unknown<br>* `attribute_limits`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `tracer_provider`: unknown<br>* `resource`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | not_implemented |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | supported |  |  |
| [`OtlpHttpExporter`](#otlphttpexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `encoding`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | supported |  | * `endpoint`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `encoding`: supported<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br>* `tls`: supported<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | supported |  | * `root`: supported<br>* `remote_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `local_parent_not_sampled`: supported<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | supported |  | * `interval`: supported<br>* `timeout`: supported<br>* `exporter`: supported<br>* `producers`: supported<br>* `cardinality_limits`: supported<br> |
| [`Propagator`](#propagator) | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| [`PullMetricExporter`](#pullmetricexporter) | supported |  | * `prometheus/development`: supported<br> |
| [`PullMetricReader`](#pullmetricreader) | supported |  | * `exporter`: supported<br>* `producers`: supported<br>* `cardinality_limits`: supported<br> |
| [`PushMetricExporter`](#pushmetricexporter) | supported |  | * `otlp_http`: supported<br>* `otlp_grpc`: supported<br>* `otlp_file/development`: supported<br>* `console`: supported<br> |
| [`Resource`](#resource) | supported |  | * `attributes`: supported<br>* `detection/development`: supported<br>* `schema_url`: supported<br>* `attributes_list`: supported<br> |
| [`Sampler`](#sampler) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `jaeger_remote`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `probability/development`: supported<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | supported |  | * `exporter`: supported<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | supported |  | * `exporter`: supported<br> |
| [`SpanExporter`](#spanexporter) | supported |  | * `otlp_http`: supported<br>* `otlp_grpc`: supported<br>* `otlp_file/development`: supported<br>* `console`: supported<br>* `zipkin`: supported<br> |
| [`SpanLimits`](#spanlimits) | supported |  | * `attribute_value_length_limit`: supported<br>* `attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_count_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br> |
| [`SpanProcessor`](#spanprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`SumAggregation`](#sumaggregation) | supported |  |  |
| [`TextMapPropagator`](#textmappropagator) | supported |  | * `tracecontext`: supported<br>* `baggage`: supported<br>* `b3`: supported<br>* `b3multi`: supported<br>* `jaeger`: supported<br>* `ottrace`: supported<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | supported |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | supported |  | * `ratio`: supported<br> |
| [`TracerProvider`](#tracerprovider) | supported |  | * `processors`: supported<br>* `limits`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| [`View`](#view) | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| [`ViewSelector`](#viewselector) | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `unit`: supported<br>* `meter_name`: supported<br>* `meter_version`: supported<br>* `meter_schema_url`: supported<br> |
| [`ViewStream`](#viewstream) | supported |  | * `name`: supported<br>* `description`: supported<br>* `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br> |
| [`ZipkinSpanExporter`](#zipkinspanexporter) | supported |  | * `endpoint`: supported<br>* `timeout`: supported<br> |


## java <a id="java"></a>

Latest supported file format: `1.0.0-rc.1`

| Type | Status | Notes | Property Support Status |
|---|---|---|---|
| [`Aggregation`](#aggregation) | supported |  | * `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `base2_exponential_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | supported |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | supported |  |  |
| [`AttributeLimits`](#attributelimits) | supported |  | * `attribute_value_length_limit`: supported<br>* `attribute_count_limit`: supported<br> |
| [`AttributeNameValue`](#attributenamevalue) | supported |  | * `name`: supported<br>* `value`: supported<br>* `type`: supported<br> |
| [`AttributeType`](#attributetype) | supported |  |  |
| [`B3MultiPropagator`](#b3multipropagator) | supported |  |  |
| [`B3Propagator`](#b3propagator) | supported |  |  |
| [`BaggagePropagator`](#baggagepropagator) | supported |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: ignored<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | supported |  | * `schedule_delay`: supported<br>* `export_timeout`: supported<br>* `max_queue_size`: supported<br>* `max_export_batch_size`: supported<br>* `exporter`: supported<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | supported |  | * `schedule_delay`: supported<br>* `export_timeout`: supported<br>* `max_queue_size`: supported<br>* `max_export_batch_size`: supported<br>* `exporter`: supported<br> |
| [`CardinalityLimits`](#cardinalitylimits) | supported |  | * `default`: supported<br>* `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`ConsoleExporter`](#consoleexporter) | supported |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | unknown |  | * `temporality_preference`: unknown<br>* `default_histogram_aggregation`: unknown<br> |
| [`DefaultAggregation`](#defaultaggregation) | supported |  |  |
| [`DropAggregation`](#dropaggregation) | supported |  |  |
| [`ExemplarFilter`](#exemplarfilter) | supported |  |  |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | supported |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | supported |  | * `peer`: supported<br>* `http`: supported<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | supported |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | supported |  | * `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | supported |  | * `client`: supported<br>* `server`: supported<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | supported |  | * `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | supported |  | * `general`: supported<br>* `cpp`: supported<br>* `dotnet`: supported<br>* `erlang`: supported<br>* `go`: supported<br>* `java`: supported<br>* `js`: supported<br>* `php`: supported<br>* `python`: supported<br>* `ruby`: supported<br>* `rust`: supported<br>* `swift`: supported<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | supported |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | supported |  | * `disabled`: supported<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | supported |  | * `default_config`: supported<br>* `loggers`: supported<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | supported |  | * `name`: supported<br>* `config`: supported<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | supported |  | * `disabled`: supported<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | supported |  | * `default_config`: supported<br>* `meters`: supported<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | supported |  | * `name`: supported<br>* `config`: supported<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | supported |  | * `output_stream`: supported<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | supported |  | * `output_stream`: supported<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | supported |  | * `service_mapping`: supported<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | supported |  | * `peer`: supported<br>* `service`: supported<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | supported |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | supported |  | * `host`: supported<br>* `port`: supported<br>* `without_scope_info`: ignored<br>* `with_resource_constant_labels`: supported<br>* `translation_strategy`: not_implemented<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | supported |  | * `attributes`: supported<br>* `detectors`: supported<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | supported |  | * `container`: supported<br>* `host`: supported<br>* `process`: supported<br>* `service`: supported<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | supported |  |  |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | supported |  | * `disabled`: supported<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | supported |  | * `default_config`: supported<br>* `tracers`: supported<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | supported |  | * `name`: supported<br>* `config`: supported<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | supported |  | * `boundaries`: supported<br>* `record_min_max`: supported<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | supported |  |  |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | supported |  |  |
| [`GrpcTls`](#grpctls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br>* `insecure`: not_applicable<br> |
| [`HttpTls`](#httptls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | supported |  | * `included`: supported<br>* `excluded`: supported<br> |
| [`InstrumentType`](#instrumenttype) | supported |  |  |
| [`JaegerPropagator`](#jaegerpropagator) | supported |  |  |
| [`JaegerRemoteSampler`](#jaegerremotesampler) | supported |  | * `endpoint`: supported<br>* `interval`: supported<br>* `initial_sampler`: supported<br> |
| [`LastValueAggregation`](#lastvalueaggregation) | supported |  |  |
| [`LoggerProvider`](#loggerprovider) | supported |  | * `processors`: supported<br>* `limits`: supported<br>* `logger_configurator/development`: supported<br> |
| [`LogRecordExporter`](#logrecordexporter) | supported |  | * `otlp_http`: supported<br>* `otlp_grpc`: supported<br>* `otlp_file/development`: supported<br>* `console`: supported<br> |
| [`LogRecordLimits`](#logrecordlimits) | supported |  | * `attribute_value_length_limit`: supported<br>* `attribute_count_limit`: supported<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`MeterProvider`](#meterprovider) | supported |  | * `readers`: supported<br>* `views`: supported<br>* `exemplar_filter`: supported<br>* `meter_configurator/development`: supported<br> |
| [`MetricProducer`](#metricproducer) | supported |  | * `opencensus`: supported<br> |
| [`MetricReader`](#metricreader) | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| [`NameStringValuePair`](#namestringvaluepair) | supported |  | * `name`: supported<br>* `value`: supported<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | supported |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | unknown |  | * `file_format`: unknown<br>* `disabled`: unknown<br>* `log_level`: unknown<br>* `attribute_limits`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `tracer_provider`: unknown<br>* `resource`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | supported |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | supported |  |  |
| [`OtlpHttpExporter`](#otlphttpexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `encoding`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | supported |  | * `endpoint`: supported<br>* `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `encoding`: supported<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br>* `tls`: supported<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | supported |  | * `root`: supported<br>* `remote_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `local_parent_not_sampled`: supported<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | supported |  | * `interval`: supported<br>* `timeout`: supported<br>* `exporter`: supported<br>* `producers`: supported<br>* `cardinality_limits`: supported<br> |
| [`Propagator`](#propagator) | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| [`PullMetricExporter`](#pullmetricexporter) | supported |  | * `prometheus/development`: supported<br> |
| [`PullMetricReader`](#pullmetricreader) | supported |  | * `exporter`: supported<br>* `producers`: supported<br>* `cardinality_limits`: supported<br> |
| [`PushMetricExporter`](#pushmetricexporter) | supported |  | * `otlp_http`: supported<br>* `otlp_grpc`: supported<br>* `otlp_file/development`: supported<br>* `console`: supported<br> |
| [`Resource`](#resource) | supported |  | * `attributes`: supported<br>* `detection/development`: supported<br>* `schema_url`: supported<br>* `attributes_list`: supported<br> |
| [`Sampler`](#sampler) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `jaeger_remote`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `probability/development`: supported<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | supported |  | * `exporter`: supported<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | supported |  | * `exporter`: supported<br> |
| [`SpanExporter`](#spanexporter) | supported |  | * `otlp_http`: supported<br>* `otlp_grpc`: supported<br>* `otlp_file/development`: supported<br>* `console`: supported<br>* `zipkin`: supported<br> |
| [`SpanLimits`](#spanlimits) | supported |  | * `attribute_value_length_limit`: supported<br>* `attribute_count_limit`: supported<br>* `event_count_limit`: supported<br>* `link_count_limit`: supported<br>* `event_attribute_count_limit`: supported<br>* `link_attribute_count_limit`: supported<br> |
| [`SpanProcessor`](#spanprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`SumAggregation`](#sumaggregation) | supported |  |  |
| [`TextMapPropagator`](#textmappropagator) | supported |  | * `tracecontext`: supported<br>* `baggage`: supported<br>* `b3`: supported<br>* `b3multi`: supported<br>* `jaeger`: supported<br>* `ottrace`: supported<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | supported |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | supported |  | * `ratio`: supported<br> |
| [`TracerProvider`](#tracerprovider) | supported |  | * `processors`: supported<br>* `limits`: supported<br>* `sampler`: supported<br>* `tracer_configurator/development`: supported<br> |
| [`View`](#view) | supported |  | * `selector`: supported<br>* `stream`: supported<br> |
| [`ViewSelector`](#viewselector) | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `unit`: supported<br>* `meter_name`: supported<br>* `meter_version`: supported<br>* `meter_schema_url`: supported<br> |
| [`ViewStream`](#viewstream) | supported |  | * `name`: supported<br>* `description`: supported<br>* `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br> |
| [`ZipkinSpanExporter`](#zipkinspanexporter) | supported |  | * `endpoint`: supported<br>* `timeout`: supported<br> |


## js <a id="js"></a>

Latest supported file format: `1.0.0-rc.2`

| Type | Status | Notes | Property Support Status |
|---|---|---|---|
| [`Aggregation`](#aggregation) | unknown |  | * `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `base2_exponential_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](#attributelimits) | unknown |  | * `attribute_value_length_limit`: unknown<br>* `attribute_count_limit`: unknown<br> |
| [`AttributeNameValue`](#attributenamevalue) | unknown |  | * `name`: unknown<br>* `value`: unknown<br>* `type`: unknown<br> |
| [`AttributeType`](#attributetype) | unknown |  |  |
| [`B3MultiPropagator`](#b3multipropagator) | unknown |  |  |
| [`B3Propagator`](#b3propagator) | unknown |  |  |
| [`BaggagePropagator`](#baggagepropagator) | unknown |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | unknown |  | * `schedule_delay`: unknown<br>* `export_timeout`: unknown<br>* `max_queue_size`: unknown<br>* `max_export_batch_size`: unknown<br>* `exporter`: unknown<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | unknown |  | * `schedule_delay`: unknown<br>* `export_timeout`: unknown<br>* `max_queue_size`: unknown<br>* `max_export_batch_size`: unknown<br>* `exporter`: unknown<br> |
| [`CardinalityLimits`](#cardinalitylimits) | unknown |  | * `default`: unknown<br>* `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`ConsoleExporter`](#consoleexporter) | unknown |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | unknown |  | * `temporality_preference`: unknown<br>* `default_histogram_aggregation`: unknown<br> |
| [`DefaultAggregation`](#defaultaggregation) | unknown |  |  |
| [`DropAggregation`](#dropaggregation) | unknown |  |  |
| [`ExemplarFilter`](#exemplarfilter) | unknown |  |  |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | unknown |  | * `peer`: unknown<br>* `http`: unknown<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | unknown |  | * `general`: unknown<br>* `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | unknown |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | unknown |  | * `default_config`: unknown<br>* `loggers`: unknown<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | unknown |  | * `name`: unknown<br>* `config`: unknown<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | unknown |  | * `default_config`: unknown<br>* `meters`: unknown<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | unknown |  | * `name`: unknown<br>* `config`: unknown<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | unknown |  | * `output_stream`: unknown<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | unknown |  | * `output_stream`: unknown<br>* `temporality_preference`: unknown<br>* `default_histogram_aggregation`: unknown<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | unknown |  | * `service_mapping`: unknown<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | unknown |  | * `peer`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | unknown |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | unknown |  | * `host`: unknown<br>* `port`: unknown<br>* `without_scope_info`: unknown<br>* `with_resource_constant_labels`: unknown<br>* `translation_strategy`: unknown<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | unknown |  | * `attributes`: unknown<br>* `detectors`: unknown<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | unknown |  | * `container`: unknown<br>* `host`: unknown<br>* `process`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | unknown |  |  |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | unknown |  | * `default_config`: unknown<br>* `tracers`: unknown<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | unknown |  | * `name`: unknown<br>* `config`: unknown<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | unknown |  |  |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | unknown |  |  |
| [`GrpcTls`](#grpctls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br>* `insecure`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | unknown |  | * `included`: unknown<br>* `excluded`: unknown<br> |
| [`InstrumentType`](#instrumenttype) | unknown |  |  |
| [`JaegerPropagator`](#jaegerpropagator) | unknown |  |  |
| [`JaegerRemoteSampler`](#jaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `interval`: unknown<br>* `initial_sampler`: unknown<br> |
| [`LastValueAggregation`](#lastvalueaggregation) | unknown |  |  |
| [`LoggerProvider`](#loggerprovider) | unknown |  | * `processors`: unknown<br>* `limits`: unknown<br>* `logger_configurator/development`: unknown<br> |
| [`LogRecordExporter`](#logrecordexporter) | unknown |  | * `otlp_http`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_file/development`: unknown<br>* `console`: unknown<br> |
| [`LogRecordLimits`](#logrecordlimits) | unknown |  | * `attribute_value_length_limit`: unknown<br>* `attribute_count_limit`: unknown<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`MeterProvider`](#meterprovider) | unknown |  | * `readers`: unknown<br>* `views`: unknown<br>* `exemplar_filter`: unknown<br>* `meter_configurator/development`: unknown<br> |
| [`MetricProducer`](#metricproducer) | unknown |  | * `opencensus`: unknown<br> |
| [`MetricReader`](#metricreader) | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| [`NameStringValuePair`](#namestringvaluepair) | unknown |  | * `name`: unknown<br>* `value`: unknown<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | unknown |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | unknown |  | * `file_format`: unknown<br>* `disabled`: unknown<br>* `log_level`: unknown<br>* `attribute_limits`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `tracer_provider`: unknown<br>* `resource`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | unknown |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | unknown |  | * `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `compression`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | unknown |  | * `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `compression`: unknown<br>* `timeout`: unknown<br>* `temporality_preference`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | unknown |  |  |
| [`OtlpHttpExporter`](#otlphttpexporter) | unknown |  | * `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `compression`: unknown<br>* `timeout`: unknown<br>* `encoding`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | unknown |  | * `endpoint`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `compression`: unknown<br>* `timeout`: unknown<br>* `encoding`: unknown<br>* `temporality_preference`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | unknown |  | * `root`: unknown<br>* `remote_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `local_parent_not_sampled`: unknown<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | unknown |  | * `interval`: unknown<br>* `timeout`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br>* `cardinality_limits`: unknown<br> |
| [`Propagator`](#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](#pullmetricreader) | unknown |  | * `exporter`: unknown<br>* `producers`: unknown<br>* `cardinality_limits`: unknown<br> |
| [`PushMetricExporter`](#pushmetricexporter) | unknown |  | * `otlp_http`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_file/development`: unknown<br>* `console`: unknown<br> |
| [`Resource`](#resource) | unknown |  | * `attributes`: unknown<br>* `detection/development`: unknown<br>* `schema_url`: unknown<br>* `attributes_list`: unknown<br> |
| [`Sampler`](#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `jaeger_remote`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `probability/development`: unknown<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SpanExporter`](#spanexporter) | unknown |  | * `otlp_http`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_file/development`: unknown<br>* `console`: unknown<br>* `zipkin`: unknown<br> |
| [`SpanLimits`](#spanlimits) | unknown |  | * `attribute_value_length_limit`: unknown<br>* `attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_count_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br> |
| [`SpanProcessor`](#spanprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`SumAggregation`](#sumaggregation) | unknown |  |  |
| [`TextMapPropagator`](#textmappropagator) | unknown |  | * `tracecontext`: unknown<br>* `baggage`: unknown<br>* `b3`: unknown<br>* `b3multi`: unknown<br>* `jaeger`: unknown<br>* `ottrace`: unknown<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | unknown |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | unknown |  | * `ratio`: unknown<br> |
| [`TracerProvider`](#tracerprovider) | unknown |  | * `processors`: unknown<br>* `limits`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| [`View`](#view) | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| [`ViewSelector`](#viewselector) | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `unit`: unknown<br>* `meter_name`: unknown<br>* `meter_version`: unknown<br>* `meter_schema_url`: unknown<br> |
| [`ViewStream`](#viewstream) | unknown |  | * `name`: unknown<br>* `description`: unknown<br>* `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br> |
| [`ZipkinSpanExporter`](#zipkinspanexporter) | unknown |  | * `endpoint`: unknown<br>* `timeout`: unknown<br> |


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
