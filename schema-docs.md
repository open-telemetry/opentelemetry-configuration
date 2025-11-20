<!-- This file is generated using "make generate-markdown". Do not edit directly. -->

# Overview <a id="overview"></a>


This document is an auto-generated view of the declarative configuration JSON schema and meta schema meant for improved consumability by humans.

* [Types](#types) contains descriptions of all types and properties, with convenient linking between type references. [OpenTelemetryConfiguration](#opentelemetryconfiguration) is the root type and is a good starting point.
* [Experimental Types](#experimental-types) same as [Types](#types) but for experimental types subject to breaking changes.
* [Language Support Status](#language-support-status) provides all the details about each language's support in a single place. (Alternatively, each type definition has a table showing support status across languages.)
* [SDK Extension Plugins](#sdk-extension-plugins) lists all the SDK extension plugin points.

# Types <a id="types"></a>

## Aggregation <a id="aggregation"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `base2_exponential_bucket_histogram` | [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | `false` | No constraints. | TODO |
| `default` | [`DefaultAggregation`](#defaultaggregation) | `false` | No constraints. | TODO |
| `drop` | [`DropAggregation`](#dropaggregation) | `false` | No constraints. | TODO |
| `explicit_bucket_histogram` | [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | `false` | No constraints. | Configure aggregation to be explicit_bucket_histogram. |
| `last_value` | [`LastValueAggregation`](#lastvalueaggregation) | `false` | No constraints. | TODO |
| `sum` | [`SumAggregation`](#sumaggregation) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `base2_exponential_bucket_histogram` | unknown | unknown | unknown | unknown |
| `default` | unknown | unknown | unknown | unknown |
| `drop` | unknown | unknown | unknown | unknown |
| `explicit_bucket_histogram` | unknown | unknown | unknown | unknown |
| `last_value` | unknown | unknown | unknown | unknown |
| `sum` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`ViewStream.aggregation`](#viewstream)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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

[JSON Schema Source File](./schema/tracer_provider.yaml)
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

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute value size. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_count_limit` | unknown | unknown | unknown | unknown |
| `attribute_value_length_limit` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.attribute_limits`](#opentelemetryconfiguration)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
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

## AttributeNameValue <a id="attributenamevalue"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `name` | `string` | `true` | No constraints. | The attribute name.<br> |
| `type` | [`AttributeType`](#attributetype) | `false` | No constraints. | The attribute type.<br>Values include: string, bool, int, double, string_array, bool_array, int_array, double_array.<br>If omitted or null, string is used.<br> |
| `value` | `oneOf` | `true` | No constraints. | The attribute value.<br>The type of value must match .type.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `name` | unknown | unknown | unknown | unknown |
| `type` | unknown | unknown | unknown | unknown |
| `value` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","value"]`

Usages:

* [`Resource.attributes`](#resource)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
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
          },
          "minItems": 1
        },
        {
          "type": "array",
          "items": {
            "type": "boolean"
          },
          "minItems": 1
        },
        {
          "type": "array",
          "items": {
            "type": "number"
          },
          "minItems": 1
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

This is a enum type.

| Value | Description |
|---|---|
| `bool` | TODO |
| `bool_array` | TODO |
| `double` | TODO |
| `double_array` | TODO |
| `int` | TODO |
| `int_array` | TODO |
| `string` | TODO |
| `string_array` | TODO |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `bool` | unknown | unknown | unknown | unknown |
| `bool_array` | unknown | unknown | unknown | unknown |
| `double` | unknown | unknown | unknown | unknown |
| `double_array` | unknown | unknown | unknown | unknown |
| `int` | unknown | unknown | unknown | unknown |
| `int_array` | unknown | unknown | unknown | unknown |
| `string` | unknown | unknown | unknown | unknown |
| `string_array` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`AttributeNameValue.type`](#attributenamevalue)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
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

[JSON Schema Source File](./schema/propagator.yaml)
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

[JSON Schema Source File](./schema/propagator.yaml)
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

[JSON Schema Source File](./schema/propagator.yaml)
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
| `max_scale` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `-10`<br>* `maximum`: `20`<br> | TODO |
| `max_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `2`<br> | TODO |
| `record_min_max` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `max_scale` | unknown | unknown | unknown | unknown |
| `max_size` | unknown | unknown | unknown | unknown |
| `record_min_max` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.base2_exponential_bucket_histogram`](#aggregation)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
      ],
      "minimum": -10,
      "maximum": 20
    },
    "max_size": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 2
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
| `export_timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> |
| `exporter` | [`LogRecordExporter`](#logrecordexporter) | `true` | No constraints. | Configure exporter. |
| `max_export_batch_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> |
| `max_queue_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> |
| `schedule_delay` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 1000 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `export_timeout` | unknown | unknown | unknown | unknown |
| `exporter` | unknown | unknown | unknown | unknown |
| `max_export_batch_size` | unknown | unknown | unknown | unknown |
| `max_queue_size` | unknown | unknown | unknown | unknown |
| `schedule_delay` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`LogRecordProcessor.batch`](#logrecordprocessor)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
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
| `export_timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> |
| `exporter` | [`SpanExporter`](#spanexporter) | `true` | No constraints. | Configure exporter. |
| `max_export_batch_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> |
| `max_queue_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> |
| `schedule_delay` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 5000 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `export_timeout` | unknown | unknown | unknown | unknown |
| `exporter` | unknown | unknown | unknown | unknown |
| `max_export_batch_size` | unknown | unknown | unknown | unknown |
| `max_queue_size` | unknown | unknown | unknown | unknown |
| `schedule_delay` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`SpanProcessor.batch`](#spanprocessor)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
| `counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for counter instruments.<br>If omitted or null, the value from .default is used.<br> |
| `default` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for all instrument types.<br>Instrument-specific cardinality limits take priority. <br>If omitted or null, 2000 is used.<br> |
| `gauge` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for gauge instruments.<br>If omitted or null, the value from .default is used.<br> |
| `histogram` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for histogram instruments.<br>If omitted or null, the value from .default is used.<br> |
| `observable_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_counter instruments.<br>If omitted or null, the value from .default is used.<br> |
| `observable_gauge` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_gauge instruments.<br>If omitted or null, the value from .default is used.<br> |
| `observable_up_down_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> |
| `up_down_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `counter` | unknown | unknown | unknown | unknown |
| `default` | unknown | unknown | unknown | unknown |
| `gauge` | unknown | unknown | unknown | unknown |
| `histogram` | unknown | unknown | unknown | unknown |
| `observable_counter` | unknown | unknown | unknown | unknown |
| `observable_gauge` | unknown | unknown | unknown | unknown |
| `observable_up_down_counter` | unknown | unknown | unknown | unknown |
| `up_down_counter` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PeriodicMetricReader.cardinality_limits`](#periodicmetricreader)
* [`PullMetricReader.cardinality_limits`](#pullmetricreader)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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

[JSON Schema Source File](./schema/common.yaml)
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
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_histogram_aggregation` | unknown | unknown | unknown | unknown |
| `temporality_preference` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.console`](#pushmetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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

[JSON Schema Source File](./schema/meter_provider.yaml)
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

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExemplarFilter <a id="exemplarfilter"></a>

This is a enum type.

| Value | Description |
|---|---|
| `always_off` | TODO |
| `always_on` | TODO |
| `trace_based` | TODO |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `always_off` | unknown | unknown | unknown | unknown |
| `always_on` | unknown | unknown | unknown | unknown |
| `trace_based` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`MeterProvider.exemplar_filter`](#meterprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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

## ExplicitBucketHistogramAggregation <a id="explicitbuckethistogramaggregation"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `boundaries` | `array` of `number` | `false` | * `minItems`: `0`<br> | Configure bucket boundaries.<br>If omitted, [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 10000] is used.<br> |
| `record_min_max` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure record min and max.<br>If omitted or null, true is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `boundaries` | unknown | unknown | unknown | unknown |
| `record_min_max` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.explicit_bucket_histogram`](#aggregation)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "boundaries": {
      "type": "array",
      "minItems": 0,
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

This is a enum type.

| Value | Description |
|---|---|
| `base2_exponential_bucket_histogram` | TODO |
| `explicit_bucket_histogram` | TODO |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `base2_exponential_bucket_histogram` | unknown | unknown | unknown | unknown |
| `explicit_bucket_histogram` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`OtlpHttpMetricExporter.default_histogram_aggregation`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.default_histogram_aggregation`](#otlpgrpcmetricexporter)
* [`ExperimentalOtlpFileMetricExporter.default_histogram_aggregation`](#experimentalotlpfilemetricexporter)
* [`ConsoleMetricExporter.default_histogram_aggregation`](#consolemetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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

This is a enum type.

| Value | Description |
|---|---|
| `cumulative` | TODO |
| `delta` | TODO |
| `low_memory` | TODO |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `cumulative` | unknown | unknown | unknown | unknown |
| `delta` | unknown | unknown | unknown | unknown |
| `low_memory` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`OtlpHttpMetricExporter.temporality_preference`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.temporality_preference`](#otlpgrpcmetricexporter)
* [`ExperimentalOtlpFileMetricExporter.temporality_preference`](#experimentalotlpfilemetricexporter)
* [`ConsoleMetricExporter.temporality_preference`](#consolemetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
| `ca_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure certificate used to verify a server's TLS credentials. <br>Absolute path to certificate file in PEM format.<br>If omitted or null, system default certificate verification is used for secure connections.<br> |
| `cert_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS client certificate. <br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br>If omitted or null, mTLS is not used.<br> |
| `insecure` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure client transport security for the exporter's connection. <br>Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.<br>If omitted or null, false is used.<br> |
| `key_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br>If omitted or null, mTLS is not used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ca_file` | unknown | unknown | unknown | unknown |
| `cert_file` | unknown | unknown | unknown | unknown |
| `insecure` | unknown | unknown | unknown | unknown |
| `key_file` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OtlpGrpcExporter.tls`](#otlpgrpcexporter)
* [`OtlpGrpcMetricExporter.tls`](#otlpgrpcmetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "ca_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "key_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "cert_file": {
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
| `ca_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure certificate used to verify a server's TLS credentials. <br>Absolute path to certificate file in PEM format.<br>If omitted or null, system default certificate verification is used for secure connections.<br> |
| `cert_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS client certificate. <br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br>If omitted or null, mTLS is not used.<br> |
| `key_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br>If omitted or null, mTLS is not used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ca_file` | unknown | unknown | unknown | unknown |
| `cert_file` | unknown | unknown | unknown | unknown |
| `key_file` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OtlpHttpExporter.tls`](#otlphttpexporter)
* [`OtlpHttpMetricExporter.tls`](#otlphttpmetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "ca_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "key_file": {
      "type": [
        "string",
        "null"
      ]
    },
    "cert_file": {
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
| `excluded` | `array` of `string` | `false` | * `minItems`: `1`<br> | Configure list of value patterns to exclude. Applies after .included (i.e. excluded has higher priority than included).<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, .included attributes are included.<br> |
| `included` | `array` of `string` | `false` | * `minItems`: `1`<br> | Configure list of value patterns to include.<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, all values are included.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `excluded` | unknown | unknown | unknown | unknown |
| `included` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalPrometheusMetricExporter.with_resource_constant_labels`](#experimentalprometheusmetricexporter)
* [`ViewStream.attribute_keys`](#viewstream)
* [`ExperimentalResourceDetection.attributes`](#experimentalresourcedetection)
* [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns.patterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "included": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    },
    "excluded": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    }
  }
}</pre>
</details>

## InstrumentType <a id="instrumenttype"></a>

This is a enum type.

| Value | Description |
|---|---|
| `counter` | TODO |
| `gauge` | TODO |
| `histogram` | TODO |
| `observable_counter` | TODO |
| `observable_gauge` | TODO |
| `observable_up_down_counter` | TODO |
| `up_down_counter` | TODO |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `counter` | unknown | unknown | unknown | unknown |
| `gauge` | unknown | unknown | unknown | unknown |
| `histogram` | unknown | unknown | unknown | unknown |
| `observable_counter` | unknown | unknown | unknown | unknown |
| `observable_gauge` | unknown | unknown | unknown | unknown |
| `observable_up_down_counter` | unknown | unknown | unknown | unknown |
| `up_down_counter` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ViewSelector.instrument_type`](#viewselector)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
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

[JSON Schema Source File](./schema/meter_provider.yaml)
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
| `limits` | [`LogRecordLimits`](#logrecordlimits) | `false` | No constraints. | Configure log record limits. See also attribute_limits. |
| `processors` | `array` of [`LogRecordProcessor`](#logrecordprocessor) | `true` | * `minItems`: `1`<br> | Configure log record processors. |
| `logger_configurator/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | `false` | No constraints. | Configure loggers.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `limits` | unknown | unknown | unknown | unknown |
| `processors` | unknown | unknown | unknown | unknown |
| `logger_configurator/development` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["processors"]`

Usages:

* [`OpenTelemetryConfiguration.logger_provider`](#opentelemetryconfiguration)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
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
          "object",
          "null"
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
          "minItems": 1,
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
      },
      "required": [
        "name",
        "config"
      ]
    },
    "ExperimentalLoggerConfig": {
      "type": [
        "object"
      ],
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "minimum_severity": {
          "$ref": "#/$defs/ExperimentalSeverityNumber"
        },
        "trace_based": {
          "type": [
            "boolean",
            "null"
          ]
        }
      }
    },
    "ExperimentalSeverityNumber": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        "TRACE",
        "TRACE2",
        "TRACE3",
        "TRACE4",
        "DEBUG",
        "DEBUG2",
        "DEBUG3",
        "DEBUG4",
        "INFO",
        "INFO2",
        "INFO3",
        "INFO4",
        "WARN",
        "WARN2",
        "WARN3",
        "WARN4",
        "ERROR",
        "ERROR2",
        "ERROR3",
        "ERROR4",
        "FATAL",
        "FATAL2",
        "FATAL3",
        "FATAL4"
      ]
    }
  }
}</pre>
</details>

## LogRecordExporter <a id="logrecordexporter"></a>

`LogRecordExporter` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `console` | [`ConsoleExporter`](#consoleexporter) | `false` | No constraints. | Configure exporter to be console. |
| `otlp_grpc` | [`OtlpGrpcExporter`](#otlpgrpcexporter) | `false` | No constraints. | Configure exporter to be OTLP with gRPC transport. |
| `otlp_http` | [`OtlpHttpExporter`](#otlphttpexporter) | `false` | No constraints. | Configure exporter to be OTLP with HTTP transport. |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` | No constraints. | Configure exporter to be OTLP with file transport.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `console` | unknown | unknown | unknown | unknown |
| `otlp_grpc` | unknown | unknown | unknown | unknown |
| `otlp_http` | unknown | unknown | unknown | unknown |
| `otlp_file/development` | unknown | unknown | unknown | unknown |
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

[JSON Schema Source File](./schema/logger_provider.yaml)
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
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_count_limit` | unknown | unknown | unknown | unknown |
| `attribute_value_length_limit` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LoggerProvider.limits`](#loggerprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `batch` | unknown | unknown | unknown | unknown |
| `simple` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`LoggerProvider.processors`](#loggerprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
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
| `exemplar_filter` | [`ExemplarFilter`](#exemplarfilter) | `false` | No constraints. | Configure the exemplar filter. <br>Values include: trace_based, always_on, always_off. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#metrics-sdk-configuration.<br>If omitted or null, trace_based is used.<br> |
| `readers` | `array` of [`MetricReader`](#metricreader) | `true` | * `minItems`: `1`<br> | Configure metric readers. |
| `views` | `array` of [`View`](#view) | `false` | * `minItems`: `1`<br> | Configure views. <br>Each view has a selector which determines the instrument(s) it applies to, and a configuration for the resulting stream(s).<br> |
| `meter_configurator/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | `false` | No constraints. | Configure meters.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `exemplar_filter` | unknown | unknown | unknown | unknown |
| `readers` | unknown | unknown | unknown | unknown |
| `views` | unknown | unknown | unknown | unknown |
| `meter_configurator/development` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["readers"]`

Usages:

* [`OpenTelemetryConfiguration.meter_provider`](#opentelemetryconfiguration)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
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
      "minItems": 1,
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
          "minItems": 1,
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
          "minItems": 1,
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
        "without_target_info": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "with_resource_constant_labels": {
          "$ref": "common.json#/$defs/IncludeExclude"
        },
        "translation_strategy": {
          "$ref": "#/$defs/ExperimentalPrometheusTranslationStrategy"
        }
      }
    },
    "ExperimentalPrometheusTranslationStrategy": {
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
          "minItems": 1,
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
          "minItems": 1,
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
      },
      "required": [
        "selector",
        "stream"
      ]
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
          "minItems": 0,
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
          ],
          "minimum": -10,
          "maximum": 20
        },
        "max_size": {
          "type": [
            "integer",
            "null"
          ],
          "minimum": 2
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
          "minItems": 1,
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
      },
      "required": [
        "name",
        "config"
      ]
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `opencensus` | unknown | unknown | unknown | unknown |
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

[JSON Schema Source File](./schema/meter_provider.yaml)
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `periodic` | unknown | unknown | unknown | unknown |
| `pull` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`MeterProvider.readers`](#meterprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `name` | unknown | unknown | unknown | unknown |
| `value` | unknown | unknown | unknown | unknown |
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

[JSON Schema Source File](./schema/common.yaml)
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

[JSON Schema Source File](./schema/meter_provider.yaml)
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
| `attribute_limits` | [`AttributeLimits`](#attributelimits) | `false` | No constraints. | Configure general attribute limits. See also tracer_provider.limits, logger_provider.limits.<br> |
| `disabled` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure if the SDK is disabled or not.<br>If omitted or null, false is used.<br> |
| `file_format` | `string` | `true` | No constraints. | The file format version.<br>The yaml format is documented at<br>https://github.com/open-telemetry/opentelemetry-configuration/tree/main/schema<br> |
| `log_level` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure the log level of the internal logger used by the SDK.<br>If omitted, info is used.<br> |
| `logger_provider` | [`LoggerProvider`](#loggerprovider) | `false` | No constraints. | Configure logger provider.<br>If omitted, a noop logger provider is used.<br> |
| `meter_provider` | [`MeterProvider`](#meterprovider) | `false` | No constraints. | Configure meter provider.<br>If omitted, a noop meter provider is used.<br> |
| `propagator` | [`Propagator`](#propagator) | `false` | No constraints. | Configure text map context propagators.<br>If omitted, a noop propagator is used.<br> |
| `resource` | [`Resource`](#resource) | `false` | No constraints. | Configure resource for all signals.<br>If omitted, the default resource is used.<br> |
| `tracer_provider` | [`TracerProvider`](#tracerprovider) | `false` | No constraints. | Configure tracer provider.<br>If omitted, a noop tracer provider is used.<br> |
| `instrumentation/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalInstrumentation`](#experimentalinstrumentation) | `false` | No constraints. | Configure instrumentation.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_limits` | unknown | unknown | unknown | unknown |
| `disabled` | unknown | unknown | unknown | unknown |
| `file_format` | unknown | unknown | unknown | unknown |
| `log_level` | unknown | unknown | unknown | unknown |
| `logger_provider` | unknown | unknown | unknown | unknown |
| `meter_provider` | unknown | unknown | unknown | unknown |
| `propagator` | unknown | unknown | unknown | unknown |
| `resource` | unknown | unknown | unknown | unknown |
| `tracer_provider` | unknown | unknown | unknown | unknown |
| `instrumentation/development` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `true`
* `required`: `["file_format"]`

No usages.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
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

[JSON Schema Source File](./schema/propagator.yaml)
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
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | * `minItems`: `1`<br> | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> |
| `tls` | [`GrpcTls`](#grpctls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `compression` | unknown | unknown | unknown | unknown |
| `endpoint` | unknown | unknown | unknown | unknown |
| `headers` | unknown | unknown | unknown | unknown |
| `headers_list` | unknown | unknown | unknown | unknown |
| `timeout` | unknown | unknown | unknown | unknown |
| `tls` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_grpc`](#logrecordexporter)
* [`SpanExporter.otlp_grpc`](#spanexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
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
      "minItems": 1,
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
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | * `minItems`: `1`<br> | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> |
| `tls` | [`GrpcTls`](#grpctls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `compression` | unknown | unknown | unknown | unknown |
| `default_histogram_aggregation` | unknown | unknown | unknown | unknown |
| `endpoint` | unknown | unknown | unknown | unknown |
| `headers` | unknown | unknown | unknown | unknown |
| `headers_list` | unknown | unknown | unknown | unknown |
| `temporality_preference` | unknown | unknown | unknown | unknown |
| `timeout` | unknown | unknown | unknown | unknown |
| `tls` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_grpc`](#pushmetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
      "minItems": 1,
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

This is a enum type.

| Value | Description |
|---|---|
| `json` | Protobuf JSON encoding. |
| `protobuf` | Protobuf binary encoding. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `json` | unknown | unknown | unknown | unknown |
| `protobuf` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`OtlpHttpExporter.encoding`](#otlphttpexporter)
* [`OtlpHttpMetricExporter.encoding`](#otlphttpmetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
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
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> |
| `encoding` | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` | No constraints. | Configure the encoding used for messages. <br>Values include: protobuf, json. Implementations may not support json.<br>If omitted or null, protobuf is used.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint, including the signal specific path.<br>If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | * `minItems`: `1`<br> | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> |
| `tls` | [`HttpTls`](#httptls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `compression` | unknown | unknown | unknown | unknown |
| `encoding` | unknown | unknown | unknown | unknown |
| `endpoint` | unknown | unknown | unknown | unknown |
| `headers` | unknown | unknown | unknown | unknown |
| `headers_list` | unknown | unknown | unknown | unknown |
| `timeout` | unknown | unknown | unknown | unknown |
| `tls` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_http`](#logrecordexporter)
* [`SpanExporter.otlp_http`](#spanexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
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
      "minItems": 1,
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
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br>Values include: gzip, none. Implementations may support other compression algorithms.<br>If omitted or null, none is used.<br> |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> |
| `encoding` | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` | No constraints. | Configure the encoding used for messages. <br>Values include: protobuf, json. Implementations may not support json.<br>If omitted or null, protobuf is used.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint, including the signal specific path.<br>If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | * `minItems`: `1`<br> | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br>If omitted or null, no headers are added.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 10000 is used.<br> |
| `tls` | [`HttpTls`](#httptls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `compression` | unknown | unknown | unknown | unknown |
| `default_histogram_aggregation` | unknown | unknown | unknown | unknown |
| `encoding` | unknown | unknown | unknown | unknown |
| `endpoint` | unknown | unknown | unknown | unknown |
| `endpoint` | unknown | unknown | unknown | unknown |
| `headers` | unknown | unknown | unknown | unknown |
| `headers_list` | unknown | unknown | unknown | unknown |
| `temporality_preference` | unknown | unknown | unknown | unknown |
| `timeout` | unknown | unknown | unknown | unknown |
| `tls` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_http`](#pushmetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
      "minItems": 1,
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
| `local_parent_not_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure local_parent_not_sampled sampler.<br>If omitted or null, always_off is used.<br> |
| `local_parent_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure local_parent_sampled sampler.<br>If omitted or null, always_on is used.<br> |
| `remote_parent_not_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure remote_parent_not_sampled sampler.<br>If omitted or null, always_off is used.<br> |
| `remote_parent_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure remote_parent_sampled sampler.<br>If omitted or null, always_on is used.<br> |
| `root` | [`Sampler`](#sampler) | `false` | No constraints. | Configure root sampler.<br>If omitted or null, always_on is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `local_parent_not_sampled` | unknown | unknown | unknown | unknown |
| `local_parent_sampled` | unknown | unknown | unknown | unknown |
| `remote_parent_not_sampled` | unknown | unknown | unknown | unknown |
| `remote_parent_sampled` | unknown | unknown | unknown | unknown |
| `root` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.parent_based`](#sampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
| `cardinality_limits` | [`CardinalityLimits`](#cardinalitylimits) | `false` | No constraints. | Configure cardinality limits. |
| `exporter` | [`PushMetricExporter`](#pushmetricexporter) | `true` | No constraints. | Configure exporter. |
| `interval` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between start of two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 60000 is used.<br> |
| `producers` | `array` of [`MetricProducer`](#metricproducer) | `false` | * `minItems`: `1`<br> | Configure metric producers. |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `cardinality_limits` | unknown | unknown | unknown | unknown |
| `exporter` | unknown | unknown | unknown | unknown |
| `interval` | unknown | unknown | unknown | unknown |
| `producers` | unknown | unknown | unknown | unknown |
| `timeout` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`MetricReader.periodic`](#metricreader)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
      "minItems": 1,
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
| `composite` | `array` of [`TextMapPropagator`](#textmappropagator) | `false` | * `minItems`: `1`<br> | Configure the propagators in the composite text map propagator. Entries from .composite_list are appended to the list here with duplicates filtered out.<br>Built-in propagator keys include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party keys include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> |
| `composite_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure the propagators in the composite text map propagator. Entries are appended to .composite with duplicates filtered out.<br>The value is a comma separated list of propagator identifiers matching the format of OTEL_PROPAGATORS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>Built-in propagator identifiers include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party identifiers include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `composite` | unknown | unknown | unknown | unknown |
| `composite_list` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.propagator`](#opentelemetryconfiguration)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/propagator.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "composite": {
      "type": "array",
      "minItems": 1,
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `prometheus/development` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PullMetricReader.exporter`](#pullmetricreader)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
    "prometheus/development": {
      "$ref": "#/$defs/ExperimentalPrometheusMetricExporter"
    }
  }
}</pre>
</details>

## PullMetricReader <a id="pullmetricreader"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `cardinality_limits` | [`CardinalityLimits`](#cardinalitylimits) | `false` | No constraints. | Configure cardinality limits. |
| `exporter` | [`PullMetricExporter`](#pullmetricexporter) | `true` | No constraints. | Configure exporter. |
| `producers` | `array` of [`MetricProducer`](#metricproducer) | `false` | * `minItems`: `1`<br> | Configure metric producers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `cardinality_limits` | unknown | unknown | unknown | unknown |
| `exporter` | unknown | unknown | unknown | unknown |
| `producers` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`MetricReader.pull`](#metricreader)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "exporter": {
      "$ref": "#/$defs/PullMetricExporter"
    },
    "producers": {
      "type": "array",
      "minItems": 1,
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
| `console` | [`ConsoleMetricExporter`](#consolemetricexporter) | `false` | No constraints. | Configure exporter to be console.<br> |
| `otlp_grpc` | [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | `false` | No constraints. | Configure exporter to be OTLP with gRPC transport.<br> |
| `otlp_http` | [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | `false` | No constraints. | Configure exporter to be OTLP with HTTP transport.<br> |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | `false` | No constraints. | Configure exporter to be OTLP with file transport.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `console` | unknown | unknown | unknown | unknown |
| `otlp_grpc` | unknown | unknown | unknown | unknown |
| `otlp_http` | unknown | unknown | unknown | unknown |
| `otlp_file/development` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PeriodicMetricReader.exporter`](#periodicmetricreader)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
| `attributes` | `array` of [`AttributeNameValue`](#attributenamevalue) | `false` | * `minItems`: `1`<br> | Configure resource attributes. Entries have higher priority than entries from .resource.attributes_list.<br> |
| `attributes_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure resource attributes. Entries have lower priority than entries from .resource.attributes.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_RESOURCE_ATTRIBUTES. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>If omitted or null, no resource attributes are added.<br> |
| `schema_url` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure resource schema URL.<br>If omitted or null, no schema URL is used.<br> |
| `detection/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalResourceDetection`](#experimentalresourcedetection) | `false` | No constraints. | Configure resource detection.<br>If omitted or null, resource detection is disabled.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attributes` | unknown | unknown | unknown | unknown |
| `attributes_list` | unknown | unknown | unknown | unknown |
| `schema_url` | unknown | unknown | unknown | unknown |
| `detection/development` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.resource`](#opentelemetryconfiguration)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
<pre>{
  "$id": "https://opentelemetry.io/otelconfig/resource.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attributes": {
      "type": "array",
      "minItems": 1,
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
              },
              "minItems": 1
            },
            {
              "type": "array",
              "items": {
                "type": "boolean"
              },
              "minItems": 1
            },
            {
              "type": "array",
              "items": {
                "type": "number"
              },
              "minItems": 1
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
          "minItems": 1,
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
| `parent_based` | [`ParentBasedSampler`](#parentbasedsampler) | `false` | No constraints. | Configure sampler to be parent_based. |
| `trace_id_ratio_based` | [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | `false` | No constraints. | Configure sampler to be trace_id_ratio_based. |
| `composite/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | Configure sampler to be composite. |
| `jaeger_remote/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | `false` | No constraints. | TODO |
| `probability/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | `false` | No constraints. | Configure sampler to be probability. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `always_off` | unknown | unknown | unknown | unknown |
| `always_on` | unknown | unknown | unknown | unknown |
| `parent_based` | unknown | unknown | unknown | unknown |
| `trace_id_ratio_based` | unknown | unknown | unknown | unknown |
| `composite/development` | unknown | unknown | unknown | unknown |
| `jaeger_remote/development` | unknown | unknown | unknown | unknown |
| `probability/development` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`TracerProvider.sampler`](#tracerprovider)
* [`ExperimentalJaegerRemoteSampler.initial_sampler`](#experimentaljaegerremotesampler)
* [`ParentBasedSampler.root`](#parentbasedsampler)
* [`ParentBasedSampler.remote_parent_sampled`](#parentbasedsampler)
* [`ParentBasedSampler.remote_parent_not_sampled`](#parentbasedsampler)
* [`ParentBasedSampler.local_parent_sampled`](#parentbasedsampler)
* [`ParentBasedSampler.local_parent_not_sampled`](#parentbasedsampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
    "composite/development": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    },
    "jaeger_remote/development": {
      "$ref": "#/$defs/ExperimentalJaegerRemoteSampler"
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `exporter` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`LogRecordProcessor.simple`](#logrecordprocessor)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `exporter` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`SpanProcessor.simple`](#spanprocessor)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
| `console` | [`ConsoleExporter`](#consoleexporter) | `false` | No constraints. | Configure exporter to be console. |
| `otlp_grpc` | [`OtlpGrpcExporter`](#otlpgrpcexporter) | `false` | No constraints. | Configure exporter to be OTLP with gRPC transport. |
| `otlp_http` | [`OtlpHttpExporter`](#otlphttpexporter) | `false` | No constraints. | Configure exporter to be OTLP with HTTP transport. |
| `zipkin` | [`ZipkinSpanExporter`](#zipkinspanexporter) | `false` | No constraints. | Configure exporter to be zipkin. |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` | No constraints. | Configure exporter to be OTLP with file transport.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `console` | unknown | unknown | unknown | unknown |
| `otlp_grpc` | unknown | unknown | unknown | unknown |
| `otlp_http` | unknown | unknown | unknown | unknown |
| `zipkin` | unknown | unknown | unknown | unknown |
| `otlp_file/development` | unknown | unknown | unknown | unknown |
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

[JSON Schema Source File](./schema/tracer_provider.yaml)
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

## SpanKind <a id="spankind"></a>

This is a enum type.

| Value | Description |
|---|---|
| `CLIENT` | CLIENT, a client span. |
| `CONSUMER` | CONSUMER, a consumer span. |
| `INTERNAL` | INTERNAL, an internal span. |
| `PRODUCER` | PRODUCER, a producer span. |
| `SERVER` | SERVER, a server span. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `CLIENT` | unknown | unknown | unknown | unknown |
| `CONSUMER` | unknown | unknown | unknown | unknown |
| `INTERNAL` | unknown | unknown | unknown | unknown |
| `PRODUCER` | unknown | unknown | unknown | unknown |
| `SERVER` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.span_kinds`](#experimentalcomposablerulebasedsamplerrule)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "INTERNAL",
    "SERVER",
    "CLIENT",
    "PRODUCER",
    "CONSUMER"
  ]
}</pre>
</details>

## SpanLimits <a id="spanlimits"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> |
| `event_attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attributes per span event. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `event_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max span event count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `link_attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attributes per span link. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |
| `link_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max span link count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_count_limit` | unknown | unknown | unknown | unknown |
| `attribute_value_length_limit` | unknown | unknown | unknown | unknown |
| `event_attribute_count_limit` | unknown | unknown | unknown | unknown |
| `event_count_limit` | unknown | unknown | unknown | unknown |
| `link_attribute_count_limit` | unknown | unknown | unknown | unknown |
| `link_count_limit` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TracerProvider.limits`](#tracerprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `batch` | unknown | unknown | unknown | unknown |
| `simple` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`TracerProvider.processors`](#tracerprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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

[JSON Schema Source File](./schema/meter_provider.yaml)
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
| `b3` | [`B3Propagator`](#b3propagator) | `false` | No constraints. | Include the zipkin b3 propagator. |
| `b3multi` | [`B3MultiPropagator`](#b3multipropagator) | `false` | No constraints. | Include the zipkin b3 multi propagator. |
| `baggage` | [`BaggagePropagator`](#baggagepropagator) | `false` | No constraints. | Include the w3c baggage propagator. |
| `jaeger` | [`JaegerPropagator`](#jaegerpropagator) | `false` | No constraints. | Include the jaeger propagator. |
| `ottrace` | [`OpenTracingPropagator`](#opentracingpropagator) | `false` | No constraints. | Include the opentracing propagator. |
| `tracecontext` | [`TraceContextPropagator`](#tracecontextpropagator) | `false` | No constraints. | Include the w3c trace context propagator. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `b3` | unknown | unknown | unknown | unknown |
| `b3multi` | unknown | unknown | unknown | unknown |
| `baggage` | unknown | unknown | unknown | unknown |
| `jaeger` | unknown | unknown | unknown | unknown |
| `ottrace` | unknown | unknown | unknown | unknown |
| `tracecontext` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`Propagator.composite`](#propagator)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
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

[JSON Schema Source File](./schema/propagator.yaml)
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ratio` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.trace_id_ratio_based`](#sampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
| `limits` | [`SpanLimits`](#spanlimits) | `false` | No constraints. | Configure span limits. See also attribute_limits. |
| `processors` | `array` of [`SpanProcessor`](#spanprocessor) | `true` | * `minItems`: `1`<br> | Configure span processors. |
| `sampler` | [`Sampler`](#sampler) | `false` | No constraints. | Configure the sampler.<br>If omitted, parent based sampler with a root of always_on is used.<br> |
| `tracer_configurator/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | `false` | No constraints. | Configure tracers.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `limits` | unknown | unknown | unknown | unknown |
| `processors` | unknown | unknown | unknown | unknown |
| `sampler` | unknown | unknown | unknown | unknown |
| `tracer_configurator/development` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["processors"]`

Usages:

* [`OpenTelemetryConfiguration.tracer_provider`](#opentelemetryconfiguration)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
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
        "composite/development": {
          "$ref": "#/$defs/ExperimentalComposableSampler"
        },
        "jaeger_remote/development": {
          "$ref": "#/$defs/ExperimentalJaegerRemoteSampler"
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
    "ExperimentalJaegerRemoteSampler": {
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
    "ExperimentalComposableAlwaysOffSampler": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "ExperimentalComposableAlwaysOnSampler": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false
    },
    "ExperimentalComposableParentBasedSampler": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "root": {
          "$ref": "#/$defs/ExperimentalComposableSampler"
        },
        "remote_parent_sampled": {
          "$ref": "#/$defs/ExperimentalComposableSampler"
        },
        "remote_parent_not_sampled": {
          "$ref": "#/$defs/ExperimentalComposableSampler"
        },
        "local_parent_sampled": {
          "$ref": "#/$defs/ExperimentalComposableSampler"
        },
        "local_parent_not_sampled": {
          "$ref": "#/$defs/ExperimentalComposableSampler"
        }
      }
    },
    "ExperimentalComposableProbabilitySampler": {
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
    "ExperimentalComposableRuleBasedSampler": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": false,
      "properties": {
        "rules": {
          "type": [
            "array",
            "null"
          ],
          "items": {
            "$ref": "#/$defs/ExperimentalComposableRuleBasedSamplerRule"
          }
        }
      }
    },
    "ExperimentalComposableRuleBasedSamplerRule": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "attribute_values": {
          "$ref": "#/$defs/ExperimentalComposableRuleBasedSamplerRuleAttributeValues"
        },
        "attribute_patterns": {
          "$ref": "#/$defs/ExperimentalComposableRuleBasedSamplerRuleAttributePatterns"
        },
        "span_kinds": {
          "type": "array",
          "minItems": 1,
          "items": {
            "$ref": "common.json#/$defs/SpanKind"
          }
        },
        "is_trace_root": {
          "type": "boolean"
        },
        "sampler": {
          "$ref": "#/$defs/ExperimentalComposableSampler"
        }
      },
      "required": [
        "sampler"
      ]
    },
    "ExperimentalComposableRuleBasedSamplerRuleAttributeValues": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "key": {
          "type": "string"
        },
        "values": {
          "type": "array",
          "minItems": 1,
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "key",
        "values"
      ]
    },
    "ExperimentalComposableRuleBasedSamplerRuleAttributePatterns": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "key": {
          "type": "string"
        },
        "patterns": {
          "$ref": "common.json#/$defs/IncludeExclude"
        }
      },
      "required": [
        "key",
        "patterns"
      ]
    },
    "ExperimentalComposableSampler": {
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
          "$ref": "#/$defs/ExperimentalComposableAlwaysOffSampler"
        },
        "always_on": {
          "$ref": "#/$defs/ExperimentalComposableAlwaysOnSampler"
        },
        "parent_based": {
          "$ref": "#/$defs/ExperimentalComposableParentBasedSampler"
        },
        "probability": {
          "$ref": "#/$defs/ExperimentalComposableProbabilitySampler"
        },
        "rule_based": {
          "$ref": "#/$defs/ExperimentalComposableRuleBasedSampler"
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
          "minItems": 1,
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
      },
      "required": [
        "name",
        "config"
      ]
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
| `selector` | [`ViewSelector`](#viewselector) | `true` | No constraints. | Configure view selector. <br>Selection criteria is additive as described in https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#instrument-selection-criteria.<br> |
| `stream` | [`ViewStream`](#viewstream) | `true` | No constraints. | Configure view stream. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `selector` | unknown | unknown | unknown | unknown |
| `stream` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["selector","stream"]`

Usages:

* [`MeterProvider.views`](#meterprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
  },
  "required": [
    "selector",
    "stream"
  ]
}</pre>
</details>

## ViewSelector <a id="viewselector"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `instrument_name` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure instrument name selection criteria.<br>If omitted or null, all instrument names match.<br> |
| `instrument_type` | [`InstrumentType`](#instrumenttype) | `false` | No constraints. | Configure instrument type selection criteria.<br>Values include: counter, gauge, histogram, observable_counter, observable_gauge, observable_up_down_counter, up_down_counter.<br>If omitted or null, all instrument types match.<br> |
| `meter_name` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure meter name selection criteria.<br>If omitted or null, all meter names match.<br> |
| `meter_schema_url` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure meter schema url selection criteria.<br>If omitted or null, all meter schema URLs match.<br> |
| `meter_version` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure meter version selection criteria.<br>If omitted or null, all meter versions match.<br> |
| `unit` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure the instrument unit selection criteria.<br>If omitted or null, all instrument units match.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `instrument_name` | unknown | unknown | unknown | unknown |
| `instrument_type` | unknown | unknown | unknown | unknown |
| `meter_name` | unknown | unknown | unknown | unknown |
| `meter_schema_url` | unknown | unknown | unknown | unknown |
| `meter_version` | unknown | unknown | unknown | unknown |
| `unit` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`View.selector`](#view)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
| `aggregation` | [`Aggregation`](#aggregation) | `false` | No constraints. | Configure aggregation of the resulting stream(s). <br>Values include: default, drop, explicit_bucket_histogram, base2_exponential_bucket_histogram, last_value, sum. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#aggregation.<br>If omitted, default is used.<br> |
| `aggregation_cardinality_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure the aggregation cardinality limit.<br>If omitted or null, the metric reader's default cardinality limit is used.<br> |
| `attribute_keys` | [`IncludeExclude`](#includeexclude) | `false` | No constraints. | Configure attribute keys retained in the resulting stream(s).<br> |
| `description` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure metric description of the resulting stream(s).<br>If omitted or null, the instrument's origin description is used.<br> |
| `name` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure metric name of the resulting stream(s).<br>If omitted or null, the instrument's original name is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `aggregation` | unknown | unknown | unknown | unknown |
| `aggregation_cardinality_limit` | unknown | unknown | unknown | unknown |
| `attribute_keys` | unknown | unknown | unknown | unknown |
| `description` | unknown | unknown | unknown | unknown |
| `name` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`View.stream`](#view)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `endpoint` | unknown | unknown | unknown | unknown |
| `timeout` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`SpanExporter.zipkin`](#spanexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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

# Experimental Types <a id="experimental-types"></a>

## ExperimentalComposableAlwaysOffSampler <a id="experimentalcomposablealwaysoffsampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.always_off`](#experimentalcomposablesampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalComposableAlwaysOnSampler <a id="experimentalcomposablealwaysonsampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.always_on`](#experimentalcomposablesampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalComposableParentBasedSampler <a id="experimentalcomposableparentbasedsampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `local_parent_not_sampled` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | Configures the sampler for spans with a local parent that is not sampled. |
| `local_parent_sampled` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | Configures the sampler for spans with a local parent that is sampled. |
| `remote_parent_not_sampled` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | Configures the sampler for spans with a remote parent that is not sampled. |
| `remote_parent_sampled` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | Configures the sampler for spans with a remote parent that is sampled. |
| `root` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | Configures the sampler for spans with no parent. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `local_parent_not_sampled` | unknown | unknown | unknown | unknown |
| `local_parent_sampled` | unknown | unknown | unknown | unknown |
| `remote_parent_not_sampled` | unknown | unknown | unknown | unknown |
| `remote_parent_sampled` | unknown | unknown | unknown | unknown |
| `root` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.parent_based`](#experimentalcomposablesampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "root": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    },
    "remote_parent_sampled": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    },
    "remote_parent_not_sampled": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    },
    "local_parent_sampled": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    },
    "local_parent_not_sampled": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    }
  }
}</pre>
</details>

## ExperimentalComposableProbabilitySampler <a id="experimentalcomposableprobabilitysampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `ratio` | one of:<br>* `number`<br>* `null`<br> | `false` | * `minimum`: `0`<br>* `maximum`: `1`<br> | Configure ratio.<br>If omitted or null, 1.0 is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ratio` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.probability`](#experimentalcomposablesampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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

## ExperimentalComposableRuleBasedSampler <a id="experimentalcomposablerulebasedsampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `rules` | one of:<br>* `array`<br>* `null`<br> | `false` | No constraints. | The rules for the sampler, matched in order. Each rule can have multiple match conditions - the sampler will be applied if all match. <br>If no conditions are specified, the rule matches all spans that reach it. If no rules match, the span is not sampled.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `rules` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.rule_based`](#experimentalcomposablesampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false,
  "properties": {
    "rules": {
      "type": [
        "array",
        "null"
      ],
      "items": {
        "$ref": "#/$defs/ExperimentalComposableRuleBasedSamplerRule"
      }
    }
  }
}</pre>
</details>

## ExperimentalComposableRuleBasedSamplerRule <a id="experimentalcomposablerulebasedsamplerrule"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attribute_patterns` | [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | `false` | No constraints. | Patterns to match against a single attribute. Non-string attributes are matched using their string representation:<br>for example, a pattern of "4*" would match any http.response.status_code in 400-499. For array attributes, if any<br>item matches, it is considered a match.<br> |
| `attribute_values` | [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | `false` | No constraints. | Values to match against a single attribute. Non-string attributes are matched using their string representation:<br>for example, a value of "404" would match the http.response.status_code 404. For array attributes, if any<br>item matches, it is considered a match.<br> |
| `is_trace_root` | `boolean` | `false` | No constraints. | Whether to match only trace root spans, those without any parent. |
| `sampler` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `true` | No constraints. | The sampler to use for matching spans. |
| `span_kinds` | `array` of [`SpanKind`](#spankind) | `false` | * `minItems`: `1`<br> | The span kinds to match. If the span's kind matches any of these, it matches. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_patterns` | unknown | unknown | unknown | unknown |
| `attribute_values` | unknown | unknown | unknown | unknown |
| `is_trace_root` | unknown | unknown | unknown | unknown |
| `sampler` | unknown | unknown | unknown | unknown |
| `span_kinds` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["sampler"]`

No usages.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attribute_values": {
      "$ref": "#/$defs/ExperimentalComposableRuleBasedSamplerRuleAttributeValues"
    },
    "attribute_patterns": {
      "$ref": "#/$defs/ExperimentalComposableRuleBasedSamplerRuleAttributePatterns"
    },
    "span_kinds": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "common.json#/$defs/SpanKind"
      }
    },
    "is_trace_root": {
      "type": "boolean"
    },
    "sampler": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    }
  },
  "required": [
    "sampler"
  ]
}</pre>
</details>

## ExperimentalComposableRuleBasedSamplerRuleAttributePatterns <a id="experimentalcomposablerulebasedsamplerruleattributepatterns"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `key` | `string` | `true` | No constraints. | The attribute key to match against. |
| `patterns` | [`IncludeExclude`](#includeexclude) | `true` | No constraints. | The include and exclude patterns to match. If a pattern satisfies any include and doesn't satisfy any exclude, it matches. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `key` | unknown | unknown | unknown | unknown |
| `patterns` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["key","patterns"]`

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.attribute_patterns`](#experimentalcomposablerulebasedsamplerrule)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "key": {
      "type": "string"
    },
    "patterns": {
      "$ref": "common.json#/$defs/IncludeExclude"
    }
  },
  "required": [
    "key",
    "patterns"
  ]
}</pre>
</details>

## ExperimentalComposableRuleBasedSamplerRuleAttributeValues <a id="experimentalcomposablerulebasedsamplerruleattributevalues"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `key` | `string` | `true` | No constraints. | The attribute key to match against. |
| `values` | `array` of `string` | `true` | * `minItems`: `1`<br> | The attribute values to match against. If the attribute's value matches any of these, it matches. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `key` | unknown | unknown | unknown | unknown |
| `values` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["key","values"]`

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.attribute_values`](#experimentalcomposablerulebasedsamplerrule)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "key": {
      "type": "string"
    },
    "values": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "key",
    "values"
  ]
}</pre>
</details>

## ExperimentalComposableSampler <a id="experimentalcomposablesampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `always_off` | [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | `false` | No constraints. | Configure sampler to be always_off. |
| `always_on` | [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | `false` | No constraints. | Configure sampler to be always_on. |
| `parent_based` | [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | `false` | No constraints. | Configure sampler to be parent_based. |
| `probability` | [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | `false` | No constraints. | Configure sampler to be probability. |
| `rule_based` | [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | `false` | No constraints. | Configure sampler to be rule_based. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `always_off` | unknown | unknown | unknown | unknown |
| `always_on` | unknown | unknown | unknown | unknown |
| `parent_based` | unknown | unknown | unknown | unknown |
| `probability` | unknown | unknown | unknown | unknown |
| `rule_based` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`Sampler.composite/development`](#sampler)
* [`ExperimentalComposableParentBasedSampler.root`](#experimentalcomposableparentbasedsampler)
* [`ExperimentalComposableParentBasedSampler.remote_parent_sampled`](#experimentalcomposableparentbasedsampler)
* [`ExperimentalComposableParentBasedSampler.remote_parent_not_sampled`](#experimentalcomposableparentbasedsampler)
* [`ExperimentalComposableParentBasedSampler.local_parent_sampled`](#experimentalcomposableparentbasedsampler)
* [`ExperimentalComposableParentBasedSampler.local_parent_not_sampled`](#experimentalcomposableparentbasedsampler)
* [`ExperimentalComposableRuleBasedSamplerRule.sampler`](#experimentalcomposablerulebasedsamplerrule)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
      "$ref": "#/$defs/ExperimentalComposableAlwaysOffSampler"
    },
    "always_on": {
      "$ref": "#/$defs/ExperimentalComposableAlwaysOnSampler"
    },
    "parent_based": {
      "$ref": "#/$defs/ExperimentalComposableParentBasedSampler"
    },
    "probability": {
      "$ref": "#/$defs/ExperimentalComposableProbabilitySampler"
    },
    "rule_based": {
      "$ref": "#/$defs/ExperimentalComposableRuleBasedSampler"
    }
  }
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

[JSON Schema Source File](./schema/resource.yaml)
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
| `http` | [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | `false` | No constraints. | Configure instrumentations following the http semantic conventions.<br>See http semantic conventions: https://opentelemetry.io/docs/specs/semconv/http/<br> |
| `peer` | [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | `false` | No constraints. | Configure instrumentations following the peer semantic conventions.<br>See peer semantic conventions: https://opentelemetry.io/docs/specs/semconv/attributes-registry/peer/<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `http` | unknown | unknown | unknown | unknown |
| `peer` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalInstrumentation.general`](#experimentalinstrumentation)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
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

[JSON Schema Source File](./schema/resource.yaml)
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
| `request_captured_headers` | `array` of `string` | `false` | * `minItems`: `1`<br> | Configure headers to capture for outbound http requests.<br> |
| `response_captured_headers` | `array` of `string` | `false` | No constraints. | Configure headers to capture for inbound http responses.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `request_captured_headers` | unknown | unknown | unknown | unknown |
| `response_captured_headers` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalHttpInstrumentation.client`](#experimentalhttpinstrumentation)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "request_captured_headers": {
      "type": "array",
      "minItems": 1,
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `client` | unknown | unknown | unknown | unknown |
| `server` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalGeneralInstrumentation.http`](#experimentalgeneralinstrumentation)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
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
| `request_captured_headers` | `array` of `string` | `false` | * `minItems`: `1`<br> | Configure headers to capture for inbound http requests.<br> |
| `response_captured_headers` | `array` of `string` | `false` | * `minItems`: `1`<br> | Configure headers to capture for outbound http responses.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `request_captured_headers` | unknown | unknown | unknown | unknown |
| `response_captured_headers` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalHttpInstrumentation.server`](#experimentalhttpinstrumentation)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "request_captured_headers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    },
    "response_captured_headers": {
      "type": "array",
      "minItems": 1,
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
| `cpp` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure C++ language-specific instrumentation libraries. |
| `dotnet` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure .NET language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `erlang` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | Configure Erlang language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `general` | [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | `false` | No constraints. | Configure general SemConv options that may apply to multiple languages and instrumentations.<br>Instrumenation may merge general config options with the language specific configuration at .instrumentation.<language>.<br> |
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `cpp` | unknown | unknown | unknown | unknown |
| `dotnet` | unknown | unknown | unknown | unknown |
| `erlang` | unknown | unknown | unknown | unknown |
| `general` | unknown | unknown | unknown | unknown |
| `go` | unknown | unknown | unknown | unknown |
| `java` | unknown | unknown | unknown | unknown |
| `js` | unknown | unknown | unknown | unknown |
| `php` | unknown | unknown | unknown | unknown |
| `python` | unknown | unknown | unknown | unknown |
| `ruby` | unknown | unknown | unknown | unknown |
| `rust` | unknown | unknown | unknown | unknown |
| `swift` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.instrumentation/development`](#opentelemetryconfiguration)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
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
          "minItems": 1,
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
          "minItems": 1,
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
          "minItems": 1,
          "items": {
            "type": "string"
          }
        },
        "response_captured_headers": {
          "type": "array",
          "minItems": 1,
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

## ExperimentalJaegerRemoteSampler <a id="experimentaljaegerremotesampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `initial_sampler` | [`Sampler`](#sampler) | `false` | No constraints. | TODO |
| `interval` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `endpoint` | unknown | unknown | unknown | unknown |
| `initial_sampler` | unknown | unknown | unknown | unknown |
| `interval` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.jaeger_remote/development`](#sampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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

[JSON Schema Source File](./schema/instrumentation.yaml)
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
| `disabled` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure if the logger is enabled or not.<br>If omitted or null, false is used.<br> |
| `minimum_severity` | [`ExperimentalSeverityNumber`](#experimentalseveritynumber) | `false` | No constraints. | Configure severity filtering.<br>Log records with an non-zero (i.e. unspecified) severity number which is less than minimum_severity are not processed.<br>Values include: TRACE, TRACE2, TRACE3, TRACE4, DEBUG, DEBUG2, DEBUG3, DEBUG4, INFO, INFO2, INFO3, INFO4, WARN, WARN2, WARN3, WARN4, ERROR, ERROR2, ERROR3, ERROR4, FATAL, FATAL2, FATAL3, FATAL4.<br>If omitted or null, severity filtering is not applied.<br> |
| `trace_based` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure trace based filtering.<br>If true, log records associated with unsampled trace contexts traces are not processed. If false, or if a log record is not associated with a trace context, trace based filtering is not applied.<br>If omitted or null, trace based filtering is not applied.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `disabled` | unknown | unknown | unknown | unknown |
| `minimum_severity` | unknown | unknown | unknown | unknown |
| `trace_based` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalLoggerConfigurator.default_config`](#experimentalloggerconfigurator)
* [`ExperimentalLoggerMatcherAndConfig.config`](#experimentalloggermatcherandconfig)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "disabled": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "minimum_severity": {
      "$ref": "#/$defs/ExperimentalSeverityNumber"
    },
    "trace_based": {
      "type": [
        "boolean",
        "null"
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
| `loggers` | `array` of [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | `false` | * `minItems`: `1`<br> | Configure loggers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_config` | unknown | unknown | unknown | unknown |
| `loggers` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LoggerProvider.logger_configurator/development`](#loggerprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
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
      "minItems": 1,
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
| `config` | [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | `true` | No constraints. | The logger config. |
| `name` | `string` | `true` | No constraints. | Configure logger names to match, evaluated as follows:<br><br> * If the logger name exactly matches.<br> * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `config` | unknown | unknown | unknown | unknown |
| `name` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","config"]`

Usages:

* [`ExperimentalLoggerConfigurator.loggers`](#experimentalloggerconfigurator)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
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
  },
  "required": [
    "name",
    "config"
  ]
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `disabled` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalMeterConfigurator.default_config`](#experimentalmeterconfigurator)
* [`ExperimentalMeterMatcherAndConfig.config`](#experimentalmetermatcherandconfig)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
| `meters` | `array` of [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | `false` | * `minItems`: `1`<br> | Configure meters. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_config` | unknown | unknown | unknown | unknown |
| `meters` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`MeterProvider.meter_configurator/development`](#meterprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
      "minItems": 1,
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
| `config` | [`ExperimentalMeterConfig`](#experimentalmeterconfig) | `true` | No constraints. | The meter config. |
| `name` | `string` | `true` | No constraints. | Configure meter names to match, evaluated as follows:<br><br> * If the meter name exactly matches.<br> * If the meter name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `config` | unknown | unknown | unknown | unknown |
| `name` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","config"]`

Usages:

* [`ExperimentalMeterConfigurator.meters`](#experimentalmeterconfigurator)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
  },
  "required": [
    "name",
    "config"
  ]
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `output_stream` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_file/development`](#logrecordexporter)
* [`SpanExporter.otlp_file/development`](#spanexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
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
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br>Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, explicit_bucket_histogram is used.<br> |
| `output_stream` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure output stream. <br>Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br>If omitted or null, stdout is used.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br>Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br>If omitted or null, cumulative is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_histogram_aggregation` | unknown | unknown | unknown | unknown |
| `output_stream` | unknown | unknown | unknown | unknown |
| `temporality_preference` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_file/development`](#pushmetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
| `service_mapping` | `array` of [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | `false` | * `minItems`: `1`<br> | Configure the service mapping for instrumentations following peer.service semantic conventions.<br>See peer.service semantic conventions: https://opentelemetry.io/docs/specs/semconv/general/attributes/#general-remote-service-attributes<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `service_mapping` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalGeneralInstrumentation.peer`](#experimentalgeneralinstrumentation)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "service_mapping": {
      "type": "array",
      "minItems": 1,
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `peer` | unknown | unknown | unknown | unknown |
| `service` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["peer","service"]`

Usages:

* [`ExperimentalPeerInstrumentation.service_mapping`](#experimentalpeerinstrumentation)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ratio` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.probability/development`](#sampler)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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

[JSON Schema Source File](./schema/resource.yaml)
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
| `translation_strategy` | [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | `false` | No constraints. | Configure how Prometheus metrics are exposed. Values include:<br><br> * UnderscoreEscapingWithSuffixes, the default. This fully escapes metric names for classic Prometheus metric name compatibility, and includes appending type and unit suffixes.<br> * UnderscoreEscapingWithoutSuffixes, metric names will continue to escape special characters to _, but suffixes won't be attached.<br> * NoUTF8EscapingWithSuffixes will disable changing special characters to _. Special suffixes like units and _total for counters will be attached.<br> * NoTranslation. This strategy bypasses all metric and label name translation, passing them through unaltered.<br><br>If omitted or null, UnderscoreEscapingWithSuffixes is used.<br> |
| `with_resource_constant_labels` | [`IncludeExclude`](#includeexclude) | `false` | No constraints. | Configure Prometheus Exporter to add resource attributes as metrics attributes, where the resource attribute keys match the patterns. |
| `without_scope_info` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure Prometheus Exporter to produce metrics without a scope info metric.<br>If omitted or null, false is used.<br> |
| `without_target_info` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure Prometheus Exporter to produce metrics without a target info metric for the resource.<br>If omitted or null, false is used.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `host` | unknown | unknown | unknown | unknown |
| `port` | unknown | unknown | unknown | unknown |
| `translation_strategy` | unknown | unknown | unknown | unknown |
| `with_resource_constant_labels` | unknown | unknown | unknown | unknown |
| `without_scope_info` | unknown | unknown | unknown | unknown |
| `without_target_info` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PullMetricExporter.prometheus/development`](#pullmetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
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
    "without_target_info": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "with_resource_constant_labels": {
      "$ref": "common.json#/$defs/IncludeExclude"
    },
    "translation_strategy": {
      "$ref": "#/$defs/ExperimentalPrometheusTranslationStrategy"
    }
  }
}</pre>
</details>

## ExperimentalPrometheusTranslationStrategy <a id="experimentalprometheustranslationstrategy"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

This is a enum type.

| Value | Description |
|---|---|
| `NoTranslation` | Special character escaping is disabled. Type and unit suffixes are disabled. Metric names are unaltered. |
| `NoUTF8EscapingWithSuffixes` | Special character escaping is disabled. Type and unit suffixes are enabled. |
| `UnderscoreEscapingWithoutSuffixes` | Special character escaping is enabled. Type and unit suffixes are disabled. This represents classic Prometheus metric name compatibility. |
| `UnderscoreEscapingWithSuffixes` | Special character escaping is enabled. Type and unit suffixes are enabled. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `NoTranslation` | unknown | unknown | unknown | unknown |
| `NoUTF8EscapingWithSuffixes` | unknown | unknown | unknown | unknown |
| `UnderscoreEscapingWithoutSuffixes` | unknown | unknown | unknown | unknown |
| `UnderscoreEscapingWithSuffixes` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalPrometheusMetricExporter.translation_strategy`](#experimentalprometheusmetricexporter)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
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
}</pre>
</details>

## ExperimentalResourceDetection <a id="experimentalresourcedetection"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attributes` | [`IncludeExclude`](#includeexclude) | `false` | No constraints. | Configure attributes provided by resource detectors. |
| `detectors` | `array` of [`ExperimentalResourceDetector`](#experimentalresourcedetector) | `false` | * `minItems`: `1`<br> | Configure resource detectors.<br>Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language. <br>If omitted or null, no resource detectors are enabled.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attributes` | unknown | unknown | unknown | unknown |
| `detectors` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Resource.detection/development`](#resource)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attributes": {
      "$ref": "common.json#/$defs/IncludeExclude"
    },
    "detectors": {
      "type": "array",
      "minItems": 1,
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `container` | unknown | unknown | unknown | unknown |
| `host` | unknown | unknown | unknown | unknown |
| `process` | unknown | unknown | unknown | unknown |
| `service` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`ExperimentalResourceDetection.detectors`](#experimentalresourcedetection)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
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

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": [
    "object",
    "null"
  ],
  "additionalProperties": false
}</pre>
</details>

## ExperimentalSeverityNumber <a id="experimentalseveritynumber"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

This is a enum type.

| Value | Description |
|---|---|
| `DEBUG` | DEBUG, severity number 5. |
| `DEBUG2` | DEBUG2, severity number 6. |
| `DEBUG3` | DEBUG3, severity number 7. |
| `DEBUG4` | DEBUG4, severity number 8. |
| `ERROR` | ERROR, severity number 17. |
| `ERROR2` | ERROR2, severity number 18. |
| `ERROR3` | ERROR3, severity number 19. |
| `ERROR4` | ERROR4, severity number 20. |
| `FATAL` | FATAL, severity number 21. |
| `FATAL2` | FATAL2, severity number 22. |
| `FATAL3` | FATAL3, severity number 23. |
| `FATAL4` | FATAL4, severity number 24. |
| `INFO` | INFO, severity number 9. |
| `INFO2` | INFO2, severity number 10. |
| `INFO3` | INFO3, severity number 11. |
| `INFO4` | INFO4, severity number 12. |
| `TRACE` | TRACE, severity number 1. |
| `TRACE2` | TRACE2, severity number 2. |
| `TRACE3` | TRACE3, severity number 3. |
| `TRACE4` | TRACE4, severity number 4. |
| `WARN` | WARN, severity number 13. |
| `WARN2` | WARN2, severity number 14. |
| `WARN3` | WARN3, severity number 15. |
| `WARN4` | WARN4, severity number 16. |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `DEBUG` | unknown | unknown | unknown | unknown |
| `DEBUG2` | unknown | unknown | unknown | unknown |
| `DEBUG3` | unknown | unknown | unknown | unknown |
| `DEBUG4` | unknown | unknown | unknown | unknown |
| `ERROR` | unknown | unknown | unknown | unknown |
| `ERROR2` | unknown | unknown | unknown | unknown |
| `ERROR3` | unknown | unknown | unknown | unknown |
| `ERROR4` | unknown | unknown | unknown | unknown |
| `FATAL` | unknown | unknown | unknown | unknown |
| `FATAL2` | unknown | unknown | unknown | unknown |
| `FATAL3` | unknown | unknown | unknown | unknown |
| `FATAL4` | unknown | unknown | unknown | unknown |
| `INFO` | unknown | unknown | unknown | unknown |
| `INFO2` | unknown | unknown | unknown | unknown |
| `INFO3` | unknown | unknown | unknown | unknown |
| `INFO4` | unknown | unknown | unknown | unknown |
| `TRACE` | unknown | unknown | unknown | unknown |
| `TRACE2` | unknown | unknown | unknown | unknown |
| `TRACE3` | unknown | unknown | unknown | unknown |
| `TRACE4` | unknown | unknown | unknown | unknown |
| `WARN` | unknown | unknown | unknown | unknown |
| `WARN2` | unknown | unknown | unknown | unknown |
| `WARN3` | unknown | unknown | unknown | unknown |
| `WARN4` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalLoggerConfig.minimum_severity`](#experimentalloggerconfig)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "TRACE",
    "TRACE2",
    "TRACE3",
    "TRACE4",
    "DEBUG",
    "DEBUG2",
    "DEBUG3",
    "DEBUG4",
    "INFO",
    "INFO2",
    "INFO3",
    "INFO4",
    "WARN",
    "WARN2",
    "WARN3",
    "WARN4",
    "ERROR",
    "ERROR2",
    "ERROR3",
    "ERROR4",
    "FATAL",
    "FATAL2",
    "FATAL3",
    "FATAL4"
  ]
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `disabled` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalTracerConfigurator.default_config`](#experimentaltracerconfigurator)
* [`ExperimentalTracerMatcherAndConfig.config`](#experimentaltracermatcherandconfig)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
| `tracers` | `array` of [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | `false` | * `minItems`: `1`<br> | Configure tracers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_config` | unknown | unknown | unknown | unknown |
| `tracers` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TracerProvider.tracer_configurator/development`](#tracerprovider)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
      "minItems": 1,
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
| `config` | [`ExperimentalTracerConfig`](#experimentaltracerconfig) | `true` | No constraints. | The tracer config. |
| `name` | `string` | `true` | No constraints. | Configure tracer names to match, evaluated as follows:<br><br> * If the tracer name exactly matches.<br> * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `config` | unknown | unknown | unknown | unknown |
| `name` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","config"]`

Usages:

* [`ExperimentalTracerConfigurator.tracers`](#experimentaltracerconfigurator)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
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
  },
  "required": [
    "name",
    "config"
  ]
}</pre>
</details>

# Language Support Status <a id="language-support-status"></a>

## cpp <a id="cpp"></a>

Latest supported file format: `1.0.0-rc.2`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](#attributelimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`AttributeNameValue`](#attributenamevalue) | unknown |  | * `name`: unknown<br>* `type`: unknown<br>* `value`: unknown<br> |
| [`AttributeType`](#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
| [`B3MultiPropagator`](#b3multipropagator) | unknown |  |  |
| [`B3Propagator`](#b3propagator) | unknown |  |  |
| [`BaggagePropagator`](#baggagepropagator) | unknown |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`CardinalityLimits`](#cardinalitylimits) | unknown |  | * `counter`: unknown<br>* `default`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`ConsoleExporter`](#consoleexporter) | unknown |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `temporality_preference`: unknown<br> |
| [`DefaultAggregation`](#defaultaggregation) | unknown |  |  |
| [`DropAggregation`](#dropaggregation) | unknown |  |  |
| [`ExemplarFilter`](#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `insecure`: unknown<br>* `key_file`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `key_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br> |
| [`InstrumentType`](#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](#jaegerpropagator) | unknown |  |  |
| [`LastValueAggregation`](#lastvalueaggregation) | unknown |  |  |
| [`LoggerProvider`](#loggerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `logger_configurator/development`: unknown<br> |
| [`LogRecordExporter`](#logrecordexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`LogRecordLimits`](#logrecordlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`MeterProvider`](#meterprovider) | unknown |  | * `exemplar_filter`: unknown<br>* `readers`: unknown<br>* `views`: unknown<br>* `meter_configurator/development`: unknown<br> |
| [`MetricProducer`](#metricproducer) | unknown |  | * `opencensus`: unknown<br> |
| [`MetricReader`](#metricreader) | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| [`NameStringValuePair`](#namestringvaluepair) | unknown |  | * `name`: unknown<br>* `value`: unknown<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | unknown |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | unknown |  | * `attribute_limits`: unknown<br>* `disabled`: unknown<br>* `file_format`: unknown<br>* `log_level`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `resource`: unknown<br>* `tracer_provider`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | unknown |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | unknown |  | * `compression`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | unknown |  | * `compression`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `interval`: unknown<br>* `producers`: unknown<br>* `timeout`: unknown<br> |
| [`Propagator`](#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](#pullmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br> |
| [`PushMetricExporter`](#pushmetricexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`Resource`](#resource) | unknown |  | * `attributes`: unknown<br>* `attributes_list`: unknown<br>* `schema_url`: unknown<br>* `detection/development`: unknown<br> |
| [`Sampler`](#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `composite/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `probability/development`: unknown<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SpanExporter`](#spanexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `zipkin`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`SpanKind`](#spankind) | unknown |  | * `CLIENT`: unknown<br>* `CONSUMER`: unknown<br>* `INTERNAL`: unknown<br>* `PRODUCER`: unknown<br>* `SERVER`: unknown<br> |
| [`SpanLimits`](#spanlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br>* `link_count_limit`: unknown<br> |
| [`SpanProcessor`](#spanprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`SumAggregation`](#sumaggregation) | unknown |  |  |
| [`TextMapPropagator`](#textmappropagator) | unknown |  | * `b3`: unknown<br>* `b3multi`: unknown<br>* `baggage`: unknown<br>* `jaeger`: unknown<br>* `ottrace`: unknown<br>* `tracecontext`: unknown<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | unknown |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | unknown |  | * `ratio`: unknown<br> |
| [`TracerProvider`](#tracerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| [`View`](#view) | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| [`ViewSelector`](#viewselector) | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `meter_name`: unknown<br>* `meter_schema_url`: unknown<br>* `meter_version`: unknown<br>* `unit`: unknown<br> |
| [`ViewStream`](#viewstream) | unknown |  | * `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br>* `description`: unknown<br>* `name`: unknown<br> |
| [`ZipkinSpanExporter`](#zipkinspanexporter) | unknown |  | * `endpoint`: unknown<br>* `timeout`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `is_trace_root`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `key`: unknown<br>* `patterns`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | unknown |  | * `http`: unknown<br>* `peer`: unknown<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | unknown |  | * `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `general`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `initial_sampler`: unknown<br>* `interval`: unknown<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | unknown |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | unknown |  | * `disabled`: unknown<br>* `minimum_severity`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | unknown |  | * `default_config`: unknown<br>* `loggers`: unknown<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | unknown |  | * `default_config`: unknown<br>* `meters`: unknown<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | unknown |  | * `output_stream`: unknown<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `output_stream`: unknown<br>* `temporality_preference`: unknown<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | unknown |  | * `service_mapping`: unknown<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | unknown |  | * `peer`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | unknown |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | unknown |  | * `host`: unknown<br>* `port`: unknown<br>* `translation_strategy`: unknown<br>* `with_resource_constant_labels`: unknown<br>* `without_scope_info`: unknown<br>* `without_target_info`: unknown<br> |
| [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | unknown |  | * `NoTranslation`: unknown<br>* `NoUTF8EscapingWithSuffixes`: unknown<br>* `UnderscoreEscapingWithoutSuffixes`: unknown<br>* `UnderscoreEscapingWithSuffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | unknown |  | * `attributes`: unknown<br>* `detectors`: unknown<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | unknown |  | * `container`: unknown<br>* `host`: unknown<br>* `process`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | unknown |  |  |
| [`ExperimentalSeverityNumber`](#experimentalseveritynumber) | unknown |  | * `DEBUG`: unknown<br>* `DEBUG2`: unknown<br>* `DEBUG3`: unknown<br>* `DEBUG4`: unknown<br>* `ERROR`: unknown<br>* `ERROR2`: unknown<br>* `ERROR3`: unknown<br>* `ERROR4`: unknown<br>* `FATAL`: unknown<br>* `FATAL2`: unknown<br>* `FATAL3`: unknown<br>* `FATAL4`: unknown<br>* `INFO`: unknown<br>* `INFO2`: unknown<br>* `INFO3`: unknown<br>* `INFO4`: unknown<br>* `TRACE`: unknown<br>* `TRACE2`: unknown<br>* `TRACE3`: unknown<br>* `TRACE4`: unknown<br>* `WARN`: unknown<br>* `WARN2`: unknown<br>* `WARN3`: unknown<br>* `WARN4`: unknown<br> |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | unknown |  | * `default_config`: unknown<br>* `tracers`: unknown<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |


## go <a id="go"></a>

Latest supported file format: `0.3.0`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](#attributelimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`AttributeNameValue`](#attributenamevalue) | unknown |  | * `name`: unknown<br>* `type`: unknown<br>* `value`: unknown<br> |
| [`AttributeType`](#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
| [`B3MultiPropagator`](#b3multipropagator) | unknown |  |  |
| [`B3Propagator`](#b3propagator) | unknown |  |  |
| [`BaggagePropagator`](#baggagepropagator) | unknown |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`CardinalityLimits`](#cardinalitylimits) | unknown |  | * `counter`: unknown<br>* `default`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`ConsoleExporter`](#consoleexporter) | unknown |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `temporality_preference`: unknown<br> |
| [`DefaultAggregation`](#defaultaggregation) | unknown |  |  |
| [`DropAggregation`](#dropaggregation) | unknown |  |  |
| [`ExemplarFilter`](#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `insecure`: unknown<br>* `key_file`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `key_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br> |
| [`InstrumentType`](#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](#jaegerpropagator) | unknown |  |  |
| [`LastValueAggregation`](#lastvalueaggregation) | unknown |  |  |
| [`LoggerProvider`](#loggerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `logger_configurator/development`: unknown<br> |
| [`LogRecordExporter`](#logrecordexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`LogRecordLimits`](#logrecordlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`MeterProvider`](#meterprovider) | unknown |  | * `exemplar_filter`: unknown<br>* `readers`: unknown<br>* `views`: unknown<br>* `meter_configurator/development`: unknown<br> |
| [`MetricProducer`](#metricproducer) | unknown |  | * `opencensus`: unknown<br> |
| [`MetricReader`](#metricreader) | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| [`NameStringValuePair`](#namestringvaluepair) | unknown |  | * `name`: unknown<br>* `value`: unknown<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | unknown |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | unknown |  | * `attribute_limits`: unknown<br>* `disabled`: unknown<br>* `file_format`: unknown<br>* `log_level`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `resource`: unknown<br>* `tracer_provider`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | unknown |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | unknown |  | * `compression`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | unknown |  | * `compression`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `interval`: unknown<br>* `producers`: unknown<br>* `timeout`: unknown<br> |
| [`Propagator`](#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](#pullmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br> |
| [`PushMetricExporter`](#pushmetricexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`Resource`](#resource) | unknown |  | * `attributes`: unknown<br>* `attributes_list`: unknown<br>* `schema_url`: unknown<br>* `detection/development`: unknown<br> |
| [`Sampler`](#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `composite/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `probability/development`: unknown<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SpanExporter`](#spanexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `zipkin`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`SpanKind`](#spankind) | unknown |  | * `CLIENT`: unknown<br>* `CONSUMER`: unknown<br>* `INTERNAL`: unknown<br>* `PRODUCER`: unknown<br>* `SERVER`: unknown<br> |
| [`SpanLimits`](#spanlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br>* `link_count_limit`: unknown<br> |
| [`SpanProcessor`](#spanprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`SumAggregation`](#sumaggregation) | unknown |  |  |
| [`TextMapPropagator`](#textmappropagator) | unknown |  | * `b3`: unknown<br>* `b3multi`: unknown<br>* `baggage`: unknown<br>* `jaeger`: unknown<br>* `ottrace`: unknown<br>* `tracecontext`: unknown<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | unknown |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | unknown |  | * `ratio`: unknown<br> |
| [`TracerProvider`](#tracerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| [`View`](#view) | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| [`ViewSelector`](#viewselector) | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `meter_name`: unknown<br>* `meter_schema_url`: unknown<br>* `meter_version`: unknown<br>* `unit`: unknown<br> |
| [`ViewStream`](#viewstream) | unknown |  | * `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br>* `description`: unknown<br>* `name`: unknown<br> |
| [`ZipkinSpanExporter`](#zipkinspanexporter) | unknown |  | * `endpoint`: unknown<br>* `timeout`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `is_trace_root`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `key`: unknown<br>* `patterns`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | unknown |  | * `http`: unknown<br>* `peer`: unknown<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | unknown |  | * `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `general`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `initial_sampler`: unknown<br>* `interval`: unknown<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | unknown |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | unknown |  | * `disabled`: unknown<br>* `minimum_severity`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | unknown |  | * `default_config`: unknown<br>* `loggers`: unknown<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | unknown |  | * `default_config`: unknown<br>* `meters`: unknown<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | unknown |  | * `output_stream`: unknown<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `output_stream`: unknown<br>* `temporality_preference`: unknown<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | unknown |  | * `service_mapping`: unknown<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | unknown |  | * `peer`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | unknown |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | unknown |  | * `host`: unknown<br>* `port`: unknown<br>* `translation_strategy`: unknown<br>* `with_resource_constant_labels`: unknown<br>* `without_scope_info`: unknown<br>* `without_target_info`: unknown<br> |
| [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | unknown |  | * `NoTranslation`: unknown<br>* `NoUTF8EscapingWithSuffixes`: unknown<br>* `UnderscoreEscapingWithoutSuffixes`: unknown<br>* `UnderscoreEscapingWithSuffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | unknown |  | * `attributes`: unknown<br>* `detectors`: unknown<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | unknown |  | * `container`: unknown<br>* `host`: unknown<br>* `process`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | unknown |  |  |
| [`ExperimentalSeverityNumber`](#experimentalseveritynumber) | unknown |  | * `DEBUG`: unknown<br>* `DEBUG2`: unknown<br>* `DEBUG3`: unknown<br>* `DEBUG4`: unknown<br>* `ERROR`: unknown<br>* `ERROR2`: unknown<br>* `ERROR3`: unknown<br>* `ERROR4`: unknown<br>* `FATAL`: unknown<br>* `FATAL2`: unknown<br>* `FATAL3`: unknown<br>* `FATAL4`: unknown<br>* `INFO`: unknown<br>* `INFO2`: unknown<br>* `INFO3`: unknown<br>* `INFO4`: unknown<br>* `TRACE`: unknown<br>* `TRACE2`: unknown<br>* `TRACE3`: unknown<br>* `TRACE4`: unknown<br>* `WARN`: unknown<br>* `WARN2`: unknown<br>* `WARN3`: unknown<br>* `WARN4`: unknown<br> |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | unknown |  | * `default_config`: unknown<br>* `tracers`: unknown<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |


## java <a id="java"></a>

Latest supported file format: `1.0.0-rc.1`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](#attributelimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`AttributeNameValue`](#attributenamevalue) | unknown |  | * `name`: unknown<br>* `type`: unknown<br>* `value`: unknown<br> |
| [`AttributeType`](#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
| [`B3MultiPropagator`](#b3multipropagator) | unknown |  |  |
| [`B3Propagator`](#b3propagator) | unknown |  |  |
| [`BaggagePropagator`](#baggagepropagator) | unknown |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`CardinalityLimits`](#cardinalitylimits) | unknown |  | * `counter`: unknown<br>* `default`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`ConsoleExporter`](#consoleexporter) | unknown |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `temporality_preference`: unknown<br> |
| [`DefaultAggregation`](#defaultaggregation) | unknown |  |  |
| [`DropAggregation`](#dropaggregation) | unknown |  |  |
| [`ExemplarFilter`](#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `insecure`: unknown<br>* `key_file`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `key_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br> |
| [`InstrumentType`](#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](#jaegerpropagator) | unknown |  |  |
| [`LastValueAggregation`](#lastvalueaggregation) | unknown |  |  |
| [`LoggerProvider`](#loggerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `logger_configurator/development`: unknown<br> |
| [`LogRecordExporter`](#logrecordexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`LogRecordLimits`](#logrecordlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`MeterProvider`](#meterprovider) | unknown |  | * `exemplar_filter`: unknown<br>* `readers`: unknown<br>* `views`: unknown<br>* `meter_configurator/development`: unknown<br> |
| [`MetricProducer`](#metricproducer) | unknown |  | * `opencensus`: unknown<br> |
| [`MetricReader`](#metricreader) | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| [`NameStringValuePair`](#namestringvaluepair) | unknown |  | * `name`: unknown<br>* `value`: unknown<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | unknown |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | unknown |  | * `attribute_limits`: unknown<br>* `disabled`: unknown<br>* `file_format`: unknown<br>* `log_level`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `resource`: unknown<br>* `tracer_provider`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | unknown |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | unknown |  | * `compression`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | unknown |  | * `compression`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `interval`: unknown<br>* `producers`: unknown<br>* `timeout`: unknown<br> |
| [`Propagator`](#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](#pullmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br> |
| [`PushMetricExporter`](#pushmetricexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`Resource`](#resource) | unknown |  | * `attributes`: unknown<br>* `attributes_list`: unknown<br>* `schema_url`: unknown<br>* `detection/development`: unknown<br> |
| [`Sampler`](#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `composite/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `probability/development`: unknown<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SpanExporter`](#spanexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `zipkin`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`SpanKind`](#spankind) | unknown |  | * `CLIENT`: unknown<br>* `CONSUMER`: unknown<br>* `INTERNAL`: unknown<br>* `PRODUCER`: unknown<br>* `SERVER`: unknown<br> |
| [`SpanLimits`](#spanlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br>* `link_count_limit`: unknown<br> |
| [`SpanProcessor`](#spanprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`SumAggregation`](#sumaggregation) | unknown |  |  |
| [`TextMapPropagator`](#textmappropagator) | unknown |  | * `b3`: unknown<br>* `b3multi`: unknown<br>* `baggage`: unknown<br>* `jaeger`: unknown<br>* `ottrace`: unknown<br>* `tracecontext`: unknown<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | unknown |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | unknown |  | * `ratio`: unknown<br> |
| [`TracerProvider`](#tracerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| [`View`](#view) | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| [`ViewSelector`](#viewselector) | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `meter_name`: unknown<br>* `meter_schema_url`: unknown<br>* `meter_version`: unknown<br>* `unit`: unknown<br> |
| [`ViewStream`](#viewstream) | unknown |  | * `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br>* `description`: unknown<br>* `name`: unknown<br> |
| [`ZipkinSpanExporter`](#zipkinspanexporter) | unknown |  | * `endpoint`: unknown<br>* `timeout`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `is_trace_root`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `key`: unknown<br>* `patterns`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | unknown |  | * `http`: unknown<br>* `peer`: unknown<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | unknown |  | * `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `general`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `initial_sampler`: unknown<br>* `interval`: unknown<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | unknown |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | unknown |  | * `disabled`: unknown<br>* `minimum_severity`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | unknown |  | * `default_config`: unknown<br>* `loggers`: unknown<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | unknown |  | * `default_config`: unknown<br>* `meters`: unknown<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | unknown |  | * `output_stream`: unknown<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `output_stream`: unknown<br>* `temporality_preference`: unknown<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | unknown |  | * `service_mapping`: unknown<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | unknown |  | * `peer`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | unknown |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | unknown |  | * `host`: unknown<br>* `port`: unknown<br>* `translation_strategy`: unknown<br>* `with_resource_constant_labels`: unknown<br>* `without_scope_info`: unknown<br>* `without_target_info`: unknown<br> |
| [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | unknown |  | * `NoTranslation`: unknown<br>* `NoUTF8EscapingWithSuffixes`: unknown<br>* `UnderscoreEscapingWithoutSuffixes`: unknown<br>* `UnderscoreEscapingWithSuffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | unknown |  | * `attributes`: unknown<br>* `detectors`: unknown<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | unknown |  | * `container`: unknown<br>* `host`: unknown<br>* `process`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | unknown |  |  |
| [`ExperimentalSeverityNumber`](#experimentalseveritynumber) | unknown |  | * `DEBUG`: unknown<br>* `DEBUG2`: unknown<br>* `DEBUG3`: unknown<br>* `DEBUG4`: unknown<br>* `ERROR`: unknown<br>* `ERROR2`: unknown<br>* `ERROR3`: unknown<br>* `ERROR4`: unknown<br>* `FATAL`: unknown<br>* `FATAL2`: unknown<br>* `FATAL3`: unknown<br>* `FATAL4`: unknown<br>* `INFO`: unknown<br>* `INFO2`: unknown<br>* `INFO3`: unknown<br>* `INFO4`: unknown<br>* `TRACE`: unknown<br>* `TRACE2`: unknown<br>* `TRACE3`: unknown<br>* `TRACE4`: unknown<br>* `WARN`: unknown<br>* `WARN2`: unknown<br>* `WARN3`: unknown<br>* `WARN4`: unknown<br> |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | unknown |  | * `default_config`: unknown<br>* `tracers`: unknown<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |


## js <a id="js"></a>

Latest supported file format: `1.0.0-rc.2`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](#attributelimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`AttributeNameValue`](#attributenamevalue) | unknown |  | * `name`: unknown<br>* `type`: unknown<br>* `value`: unknown<br> |
| [`AttributeType`](#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
| [`B3MultiPropagator`](#b3multipropagator) | unknown |  |  |
| [`B3Propagator`](#b3propagator) | unknown |  |  |
| [`BaggagePropagator`](#baggagepropagator) | unknown |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | unknown |  | * `max_scale`: unknown<br>* `max_size`: unknown<br>* `record_min_max`: unknown<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | unknown |  | * `export_timeout`: unknown<br>* `exporter`: unknown<br>* `max_export_batch_size`: unknown<br>* `max_queue_size`: unknown<br>* `schedule_delay`: unknown<br> |
| [`CardinalityLimits`](#cardinalitylimits) | unknown |  | * `counter`: unknown<br>* `default`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`ConsoleExporter`](#consoleexporter) | unknown |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `temporality_preference`: unknown<br> |
| [`DefaultAggregation`](#defaultaggregation) | unknown |  |  |
| [`DropAggregation`](#dropaggregation) | unknown |  |  |
| [`ExemplarFilter`](#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | unknown |  | * `boundaries`: unknown<br>* `record_min_max`: unknown<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `insecure`: unknown<br>* `key_file`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `ca_file`: unknown<br>* `cert_file`: unknown<br>* `key_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | unknown |  | * `excluded`: unknown<br>* `included`: unknown<br> |
| [`InstrumentType`](#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](#jaegerpropagator) | unknown |  |  |
| [`LastValueAggregation`](#lastvalueaggregation) | unknown |  |  |
| [`LoggerProvider`](#loggerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `logger_configurator/development`: unknown<br> |
| [`LogRecordExporter`](#logrecordexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`LogRecordLimits`](#logrecordlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`MeterProvider`](#meterprovider) | unknown |  | * `exemplar_filter`: unknown<br>* `readers`: unknown<br>* `views`: unknown<br>* `meter_configurator/development`: unknown<br> |
| [`MetricProducer`](#metricproducer) | unknown |  | * `opencensus`: unknown<br> |
| [`MetricReader`](#metricreader) | unknown |  | * `periodic`: unknown<br>* `pull`: unknown<br> |
| [`NameStringValuePair`](#namestringvaluepair) | unknown |  | * `name`: unknown<br>* `value`: unknown<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | unknown |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | unknown |  | * `attribute_limits`: unknown<br>* `disabled`: unknown<br>* `file_format`: unknown<br>* `log_level`: unknown<br>* `logger_provider`: unknown<br>* `meter_provider`: unknown<br>* `propagator`: unknown<br>* `resource`: unknown<br>* `tracer_provider`: unknown<br>* `instrumentation/development`: unknown<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | unknown |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | unknown |  | * `compression`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | unknown |  | * `compression`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | unknown |  | * `compression`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `encoding`: unknown<br>* `endpoint`: unknown<br>* `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `temporality_preference`: unknown<br>* `timeout`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `interval`: unknown<br>* `producers`: unknown<br>* `timeout`: unknown<br> |
| [`Propagator`](#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](#pullmetricreader) | unknown |  | * `cardinality_limits`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br> |
| [`PushMetricExporter`](#pushmetricexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`Resource`](#resource) | unknown |  | * `attributes`: unknown<br>* `attributes_list`: unknown<br>* `schema_url`: unknown<br>* `detection/development`: unknown<br> |
| [`Sampler`](#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `composite/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `probability/development`: unknown<br> |
| [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SimpleSpanProcessor`](#simplespanprocessor) | unknown |  | * `exporter`: unknown<br> |
| [`SpanExporter`](#spanexporter) | unknown |  | * `console`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_http`: unknown<br>* `zipkin`: unknown<br>* `otlp_file/development`: unknown<br> |
| [`SpanKind`](#spankind) | unknown |  | * `CLIENT`: unknown<br>* `CONSUMER`: unknown<br>* `INTERNAL`: unknown<br>* `PRODUCER`: unknown<br>* `SERVER`: unknown<br> |
| [`SpanLimits`](#spanlimits) | unknown |  | * `attribute_count_limit`: unknown<br>* `attribute_value_length_limit`: unknown<br>* `event_attribute_count_limit`: unknown<br>* `event_count_limit`: unknown<br>* `link_attribute_count_limit`: unknown<br>* `link_count_limit`: unknown<br> |
| [`SpanProcessor`](#spanprocessor) | unknown |  | * `batch`: unknown<br>* `simple`: unknown<br> |
| [`SumAggregation`](#sumaggregation) | unknown |  |  |
| [`TextMapPropagator`](#textmappropagator) | unknown |  | * `b3`: unknown<br>* `b3multi`: unknown<br>* `baggage`: unknown<br>* `jaeger`: unknown<br>* `ottrace`: unknown<br>* `tracecontext`: unknown<br> |
| [`TraceContextPropagator`](#tracecontextpropagator) | unknown |  |  |
| [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | unknown |  | * `ratio`: unknown<br> |
| [`TracerProvider`](#tracerprovider) | unknown |  | * `limits`: unknown<br>* `processors`: unknown<br>* `sampler`: unknown<br>* `tracer_configurator/development`: unknown<br> |
| [`View`](#view) | unknown |  | * `selector`: unknown<br>* `stream`: unknown<br> |
| [`ViewSelector`](#viewselector) | unknown |  | * `instrument_name`: unknown<br>* `instrument_type`: unknown<br>* `meter_name`: unknown<br>* `meter_schema_url`: unknown<br>* `meter_version`: unknown<br>* `unit`: unknown<br> |
| [`ViewStream`](#viewstream) | unknown |  | * `aggregation`: unknown<br>* `aggregation_cardinality_limit`: unknown<br>* `attribute_keys`: unknown<br>* `description`: unknown<br>* `name`: unknown<br> |
| [`ZipkinSpanExporter`](#zipkinspanexporter) | unknown |  | * `endpoint`: unknown<br>* `timeout`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | unknown |  | * `local_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `remote_parent_sampled`: unknown<br>* `root`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | unknown |  | * `rules`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRule`](#experimentalcomposablerulebasedsamplerrule) | unknown |  | * `attribute_patterns`: unknown<br>* `attribute_values`: unknown<br>* `is_trace_root`: unknown<br>* `sampler`: unknown<br>* `span_kinds`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | unknown |  | * `key`: unknown<br>* `patterns`: unknown<br> |
| [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | unknown |  | * `key`: unknown<br>* `values`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `probability`: unknown<br>* `rule_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | unknown |  | * `http`: unknown<br>* `peer`: unknown<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | unknown |  | * `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `general`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `initial_sampler`: unknown<br>* `interval`: unknown<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | unknown |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | unknown |  | * `disabled`: unknown<br>* `minimum_severity`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | unknown |  | * `default_config`: unknown<br>* `loggers`: unknown<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | unknown |  | * `default_config`: unknown<br>* `meters`: unknown<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | unknown |  | * `output_stream`: unknown<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | unknown |  | * `default_histogram_aggregation`: unknown<br>* `output_stream`: unknown<br>* `temporality_preference`: unknown<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | unknown |  | * `service_mapping`: unknown<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | unknown |  | * `peer`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | unknown |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | unknown |  | * `host`: unknown<br>* `port`: unknown<br>* `translation_strategy`: unknown<br>* `with_resource_constant_labels`: unknown<br>* `without_scope_info`: unknown<br>* `without_target_info`: unknown<br> |
| [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | unknown |  | * `NoTranslation`: unknown<br>* `NoUTF8EscapingWithSuffixes`: unknown<br>* `UnderscoreEscapingWithoutSuffixes`: unknown<br>* `UnderscoreEscapingWithSuffixes`: unknown<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | unknown |  | * `attributes`: unknown<br>* `detectors`: unknown<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | unknown |  | * `container`: unknown<br>* `host`: unknown<br>* `process`: unknown<br>* `service`: unknown<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | unknown |  |  |
| [`ExperimentalSeverityNumber`](#experimentalseveritynumber) | unknown |  | * `DEBUG`: unknown<br>* `DEBUG2`: unknown<br>* `DEBUG3`: unknown<br>* `DEBUG4`: unknown<br>* `ERROR`: unknown<br>* `ERROR2`: unknown<br>* `ERROR3`: unknown<br>* `ERROR4`: unknown<br>* `FATAL`: unknown<br>* `FATAL2`: unknown<br>* `FATAL3`: unknown<br>* `FATAL4`: unknown<br>* `INFO`: unknown<br>* `INFO2`: unknown<br>* `INFO3`: unknown<br>* `INFO4`: unknown<br>* `TRACE`: unknown<br>* `TRACE2`: unknown<br>* `TRACE3`: unknown<br>* `TRACE4`: unknown<br>* `WARN`: unknown<br>* `WARN2`: unknown<br>* `WARN3`: unknown<br>* `WARN4`: unknown<br> |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | unknown |  | * `disabled`: unknown<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | unknown |  | * `default_config`: unknown<br>* `tracers`: unknown<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | unknown |  | * `config`: unknown<br>* `name`: unknown<br> |


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
