<!-- This file is generated using "make generate-markdown". Do not edit directly. -->

# Overview <a id="overview"></a>


This document is an auto-generated view of the declarative configuration JSON schema and meta schema meant for improved consumability by humans.

* [Types](#types) contains descriptions of all types and properties, with convenient linking between type references. [OpenTelemetryConfiguration](#opentelemetryconfiguration) is the root type and is a good starting point.
* [Experimental Types](#experimental-types) same as [Types](#types) but for experimental types subject to breaking changes.
* [SDK Extension Plugins](#sdk-extension-plugins) lists all the SDK extension plugin points.

See also [language support status](language-support-status.md) for all details about each language's support in a single place.

# Types <a id="types"></a>

## Aggregation <a id="aggregation"></a>

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `base2_exponential_bucket_histogram` | [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | `false` | If omitted, ignore. | No constraints. | Configures the stream to collect data for the exponential histogram metric point, which uses a base-2 exponential formula to determine bucket boundaries and an integer scale parameter to control resolution. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#base2-exponential-bucket-histogram-aggregation for details. |
| `default` | [`DefaultAggregation`](#defaultaggregation) | `false` | If omitted, ignore. | No constraints. | Configures the stream to use the instrument kind to select an aggregation and advisory parameters to influence aggregation configuration parameters. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#default-aggregation for details. |
| `drop` | [`DropAggregation`](#dropaggregation) | `false` | If omitted, ignore. | No constraints. | Configures the stream to ignore/drop all instrument measurements. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#drop-aggregation for details. |
| `explicit_bucket_histogram` | [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | `false` | If omitted, ignore. | No constraints. | Configures the stream to collect data for the histogram metric point using a set of explicit boundary values for histogram bucketing. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#explicit-bucket-histogram-aggregation for details |
| `last_value` | [`LastValueAggregation`](#lastvalueaggregation) | `false` | If omitted, ignore. | No constraints. | Configures the stream to collect data using the last measurement. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#last-value-aggregation for details. |
| `sum` | [`SumAggregation`](#sumaggregation) | `false` | If omitted, ignore. | No constraints. | Configures the stream to collect the arithmetic sum of measurement values. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#sum-aggregation for details. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `base2_exponential_bucket_histogram` | supported | unknown | supported | unknown |
| `default` | supported | unknown | supported | unknown |
| `drop` | supported | unknown | supported | unknown |
| `explicit_bucket_histogram` | supported | unknown | supported | unknown |
| `last_value` | supported | unknown | supported | unknown |
| `sum` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`ViewStream.aggregation`](#viewstream)

No snippets.

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

No snippets.

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

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 128 is used. | * `minimum`: `0`<br> | Configure max attribute count. <br>Value must be non-negative.<br> |
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, there is no limit. | * `minimum`: `0`<br> | Configure max attribute value size. <br>Value must be non-negative.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `attribute_count_limit` | supported | unknown | supported | unknown |
| `attribute_value_length_limit` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.attribute_limits`](#opentelemetryconfiguration)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `name` | `string` | `true` | Property is required and must be non-null. | No constraints. | The attribute name.<br> |
| `type` | [`AttributeType`](#attributetype) | `false` | If omitted, string is used. | No constraints. | The attribute type.<br> |
| `value` | `oneOf` | `true` | Property is required and must be non-null. | No constraints. | The attribute value.<br>The type of value must match .type.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `name` | supported | unknown | supported | unknown |
| `type` | supported | unknown | supported | unknown |
| `value` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","value"]`

Usages:

* [`Resource.attributes`](#resource)

No snippets.

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
| `bool` | Boolean attribute value. |
| `bool_array` | Boolean array attribute value. |
| `double` | Double attribute value. |
| `double_array` | Double array attribute value. |
| `int` | Integer attribute value. |
| `int_array` | Integer array attribute value. |
| `string` | String attribute value. |
| `string_array` | String array attribute value. |

<details>
<summary>Language support status</summary>

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `bool` | supported | unknown | supported | unknown |
| `bool_array` | supported | unknown | supported | unknown |
| `double` | supported | unknown | supported | unknown |
| `double_array` | supported | unknown | supported | unknown |
| `int` | supported | unknown | supported | unknown |
| `int_array` | supported | unknown | supported | unknown |
| `string` | supported | unknown | supported | unknown |
| `string_array` | supported | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`AttributeNameValue.type`](#attributenamevalue)

No snippets.

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

No snippets.

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

No snippets.

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

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `max_scale` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 20 is used. | * `minimum`: `-10`<br>* `maximum`: `20`<br> | Configure the max scale factor. |
| `max_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 160 is used. | * `minimum`: `2`<br> | Configure the maximum number of buckets in each of the positive and negative ranges, not counting the special zero bucket. |
| `record_min_max` | one of:<br>* `boolean`<br>* `null`<br> | `false` | If omitted or null, true is used. | No constraints. | Configure whether or not to record min and max. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `max_scale` | supported | unknown | supported | unknown |
| `max_size` | supported | unknown | supported | unknown |
| `record_min_max` | supported | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.base2_exponential_bucket_histogram`](#aggregation)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `export_timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 30000 is used. | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br> |
| `exporter` | [`LogRecordExporter`](#logrecordexporter) | `true` | Property is required and must be non-null. | No constraints. | Configure exporter. |
| `max_export_batch_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 512 is used. | * `exclusiveMinimum`: `0`<br> | Configure maximum batch size. Value must be positive.<br> |
| `max_queue_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 2048 is used. | * `exclusiveMinimum`: `0`<br> | Configure maximum queue size. Value must be positive.<br> |
| `schedule_delay` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 1000 is used. | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `export_timeout` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
| `max_export_batch_size` | supported | unknown | supported | unknown |
| `max_queue_size` | supported | unknown | supported | unknown |
| `schedule_delay` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`LogRecordProcessor.batch`](#logrecordprocessor)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `export_timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 30000 is used. | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br> |
| `exporter` | [`SpanExporter`](#spanexporter) | `true` | Property is required and must be non-null. | No constraints. | Configure exporter. |
| `max_export_batch_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 512 is used. | * `exclusiveMinimum`: `0`<br> | Configure maximum batch size. Value must be positive.<br> |
| `max_queue_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 2048 is used. | * `exclusiveMinimum`: `0`<br> | Configure maximum queue size. Value must be positive.<br> |
| `schedule_delay` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 5000 is used. | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `export_timeout` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
| `max_export_batch_size` | supported | unknown | supported | unknown |
| `max_queue_size` | supported | unknown | supported | unknown |
| `schedule_delay` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`SpanProcessor.batch`](#spanprocessor)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, the value from .default is used. | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for counter instruments.<br> |
| `default` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 2000 is used. | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for all instrument types.<br>Instrument-specific cardinality limits take priority.<br> |
| `gauge` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, the value from .default is used. | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for gauge instruments.<br> |
| `histogram` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, the value from .default is used. | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for histogram instruments.<br> |
| `observable_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, the value from .default is used. | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_counter instruments.<br> |
| `observable_gauge` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, the value from .default is used. | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_gauge instruments.<br> |
| `observable_up_down_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, the value from .default is used. | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_up_down_counter instruments.<br> |
| `up_down_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, the value from .default is used. | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for up_down_counter instruments.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `counter` | not_implemented | unknown | supported | unknown |
| `default` | not_implemented | unknown | supported | unknown |
| `gauge` | not_implemented | unknown | supported | unknown |
| `histogram` | not_implemented | unknown | supported | unknown |
| `observable_counter` | not_implemented | unknown | supported | unknown |
| `observable_gauge` | not_implemented | unknown | supported | unknown |
| `observable_up_down_counter` | not_implemented | unknown | supported | unknown |
| `up_down_counter` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PeriodicMetricReader.cardinality_limits`](#periodicmetricreader)
* [`PullMetricReader.cardinality_limits`](#pullmetricreader)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/CardinalityLimits_kitchen_sink.yaml)
```yaml
# specify .default to set cardinality limits for all instruments, or specify instrument-specific limits. Instrument-specific limits take priority over .default.
default: 2000
counter: 2000
gauge: 2000
histogram: 2000
observable_counter: 2000
observable_gauge: 2000
observable_up_down_counter: 2000
up_down_counter: 2000
```
</details>

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

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | If omitted, explicit_bucket_histogram is used. | No constraints. | Configure default histogram aggregation.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | If omitted, cumulative is used. | No constraints. | Configure temporality preference.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `default_histogram_aggregation` | supported | unknown | not_implemented | unknown |
| `temporality_preference` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.console`](#pushmetricexporter)

No snippets.

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

No snippets.

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

## Distribution <a id="distribution"></a>

No properties.

Constraints: 

* `additionalProperties`: `{"type":"object"}`
* `minProperties`: `1`

Usages:

* [`OpenTelemetryConfiguration.distribution`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.yaml)
<pre>{
  "type": "object",
  "additionalProperties": {
    "type": "object"
  },
  "minProperties": 1
}</pre>
</details>

## DropAggregation <a id="dropaggregation"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.drop`](#aggregation)

No snippets.

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
| `always_off` | ExemplarFilter which makes no measurements eligible for being an Exemplar. |
| `always_on` | ExemplarFilter which makes all measurements eligible for being an Exemplar. |
| `trace_based` | ExemplarFilter which makes measurements recorded in the context of a sampled parent span eligible for being an Exemplar. |

<details>
<summary>Language support status</summary>

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `always_off` | not_implemented | unknown | supported | unknown |
| `always_on` | not_implemented | unknown | supported | unknown |
| `trace_based` | not_implemented | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`MeterProvider.exemplar_filter`](#meterprovider)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `boundaries` | `array` of `number` | `false` | If omitted, [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 10000] is used. | * `minItems`: `0`<br> | Configure bucket boundaries.<br> |
| `record_min_max` | one of:<br>* `boolean`<br>* `null`<br> | `false` | If omitted or null, true is used. | No constraints. | Configure record min and max.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `boundaries` | supported | unknown | supported | unknown |
| `record_min_max` | supported | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Aggregation.explicit_bucket_histogram`](#aggregation)

No snippets.

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
| `base2_exponential_bucket_histogram` | Use base2 exponential histogram as the default aggregation for histogram instruments. |
| `explicit_bucket_histogram` | Use explicit bucket histogram as the default aggregation for histogram instruments. |

<details>
<summary>Language support status</summary>

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `base2_exponential_bucket_histogram` | supported | unknown | supported | unknown |
| `explicit_bucket_histogram` | supported | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`OtlpHttpMetricExporter.default_histogram_aggregation`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.default_histogram_aggregation`](#otlpgrpcmetricexporter)
* [`ExperimentalOtlpFileMetricExporter.default_histogram_aggregation`](#experimentalotlpfilemetricexporter)
* [`ConsoleMetricExporter.default_histogram_aggregation`](#consolemetricexporter)

No snippets.

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
| `cumulative` | Use cumulative aggregation temporality for all instrument types. |
| `delta` | Use delta aggregation for all instrument types except up down counter and asynchronous up down counter. |
| `low_memory` | Use delta aggregation temporality for counter and histogram instrument types. Use cumulative aggregation temporality for all other instrument types. |

<details>
<summary>Language support status</summary>

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `cumulative` | supported | unknown | supported | unknown |
| `delta` | supported | unknown | supported | unknown |
| `low_memory` | supported | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`OtlpHttpMetricExporter.temporality_preference`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.temporality_preference`](#otlpgrpcmetricexporter)
* [`ExperimentalOtlpFileMetricExporter.temporality_preference`](#experimentalotlpfilemetricexporter)
* [`ConsoleMetricExporter.temporality_preference`](#consolemetricexporter)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `ca_file` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, system default certificate verification is used for secure connections. | No constraints. | Configure certificate used to verify a server's TLS credentials. <br>Absolute path to certificate file in PEM format.<br> |
| `cert_file` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, mTLS is not used. | No constraints. | Configure mTLS client certificate. <br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br> |
| `insecure` | one of:<br>* `boolean`<br>* `null`<br> | `false` | If omitted or null, false is used. | No constraints. | Configure client transport security for the exporter's connection. <br>Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.<br> |
| `key_file` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, mTLS is not used. | No constraints. | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `ca_file` | unknown | unknown | not_implemented | unknown |
| `cert_file` | unknown | unknown | not_implemented | unknown |
| `insecure` | unknown | unknown | not_implemented | unknown |
| `key_file` | unknown | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OtlpGrpcExporter.tls`](#otlpgrpcexporter)
* [`OtlpGrpcMetricExporter.tls`](#otlpgrpcmetricexporter)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `ca_file` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, system default certificate verification is used for secure connections. | No constraints. | Configure certificate used to verify a server's TLS credentials. <br>Absolute path to certificate file in PEM format.<br> |
| `cert_file` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, mTLS is not used. | No constraints. | Configure mTLS client certificate. <br>Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br> |
| `key_file` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, mTLS is not used. | No constraints. | Configure mTLS private client key. <br>Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `ca_file` | unknown | unknown | not_implemented | unknown |
| `cert_file` | unknown | unknown | not_implemented | unknown |
| `key_file` | unknown | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OtlpHttpExporter.tls`](#otlphttpexporter)
* [`OtlpHttpMetricExporter.tls`](#otlphttpmetricexporter)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `excluded` | `array` of `string` | `false` | If omitted, .included attributes are included. | * `minItems`: `1`<br> | Configure list of value patterns to exclude. Applies after .included (i.e. excluded has higher priority than included).<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |
| `included` | `array` of `string` | `false` | If omitted, all values are included. | * `minItems`: `1`<br> | Configure list of value patterns to include.<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `excluded` | supported | unknown | supported | unknown |
| `included` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalPrometheusMetricExporter.with_resource_constant_labels`](#experimentalprometheusmetricexporter)
* [`ViewStream.attribute_keys`](#viewstream)
* [`ExperimentalResourceDetection.attributes`](#experimentalresourcedetection)

No snippets.

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
| `counter` | Synchronous counter instruments. |
| `gauge` | Synchronous gauge instruments. |
| `histogram` | Synchronous histogram instruments. |
| `observable_counter` | Asynchronous counter instruments. |
| `observable_gauge` | Asynchronous gauge instruments. |
| `observable_up_down_counter` | Asynchronous up down counter instruments. |
| `up_down_counter` | Synchronous up down counter instruments. |

<details>
<summary>Language support status</summary>

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `counter` | supported | unknown | supported | unknown |
| `gauge` | supported | unknown | supported | unknown |
| `histogram` | supported | unknown | supported | unknown |
| `observable_counter` | supported | unknown | supported | unknown |
| `observable_gauge` | supported | unknown | supported | unknown |
| `observable_up_down_counter` | supported | unknown | supported | unknown |
| `up_down_counter` | supported | unknown | supported | unknown |
</details>

No constraints.

Usages:

* [`ViewSelector.instrument_type`](#viewselector)

No snippets.

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

No snippets.

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

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `limits` | [`LogRecordLimits`](#logrecordlimits) | `false` | If omitted, default values as described in LogRecordLimits are used. | No constraints. | Configure log record limits. See also attribute_limits. |
| `processors` | `array` of [`LogRecordProcessor`](#logrecordprocessor) | `true` | Property is required and must be non-null. | * `minItems`: `1`<br> | Configure log record processors. |
| `logger_configurator/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | `false` | If omitted, all loggers use default values as described in ExperimentalLoggerConfig. | No constraints. | Configure loggers.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `limits` | supported | unknown | supported | unknown |
| `processors` | supported | unknown | supported | unknown |
| `logger_configurator/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["processors"]`

Usages:

* [`OpenTelemetryConfiguration.logger_provider`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/logger_provider.yaml)
<pre>{
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
  ]
}</pre>
</details>

## LogRecordExporter <a id="logrecordexporter"></a>

`LogRecordExporter` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `console` | [`ConsoleExporter`](#consoleexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be console. |
| `otlp_grpc` | [`OtlpGrpcExporter`](#otlpgrpcexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be OTLP with gRPC transport. |
| `otlp_http` | [`OtlpHttpExporter`](#otlphttpexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be OTLP with HTTP transport. |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be OTLP with file transport.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `console` | supported | unknown | supported | unknown |
| `otlp_grpc` | supported | unknown | supported | unknown |
| `otlp_http` | supported | unknown | supported | unknown |
| `otlp_file/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`SimpleLogRecordProcessor.exporter`](#simplelogrecordprocessor)
* [`BatchLogRecordProcessor.exporter`](#batchlogrecordprocessor)

No snippets.

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
      "$ref": "#/$defs/OtlpHttpExporter"
    },
    "otlp_grpc": {
      "$ref": "#/$defs/OtlpGrpcExporter"
    },
    "otlp_file/development": {
      "$ref": "#/$defs/ExperimentalOtlpFileExporter"
    },
    "console": {
      "$ref": "#/$defs/ConsoleExporter"
    }
  }
}</pre>
</details>

## LogRecordLimits <a id="logrecordlimits"></a>

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 128 is used. | * `minimum`: `0`<br> | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br> |
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, there is no limit. | * `minimum`: `0`<br> | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `attribute_count_limit` | supported | unknown | supported | unknown |
| `attribute_value_length_limit` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LoggerProvider.limits`](#loggerprovider)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/LogRecordLimits_kitchen_sink.yaml)
```yaml
# .logger_provider.limits take priority over general .attribute_limits
attribute_count_limit: 128
attribute_value_length_limit: 4096
```
</details>

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `batch` | [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | `false` | If omitted, ignore. | No constraints. | Configure a batch log record processor. |
| `simple` | [`SimpleLogRecordProcessor`](#simplelogrecordprocessor) | `false` | If omitted, ignore. | No constraints. | Configure a simple log record processor. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `batch` | supported | unknown | supported | unknown |
| `simple` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`LoggerProvider.processors`](#loggerprovider)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `exemplar_filter` | [`ExemplarFilter`](#exemplarfilter) | `false` | If omitted, trace_based is used. | No constraints. | Configure the exemplar filter.<br> |
| `readers` | `array` of [`MetricReader`](#metricreader) | `true` | Property is required and must be non-null. | * `minItems`: `1`<br> | Configure metric readers. |
| `views` | `array` of [`View`](#view) | `false` | If omitted, no views are registered. | * `minItems`: `1`<br> | Configure views. <br>Each view has a selector which determines the instrument(s) it applies to, and a configuration for the resulting stream(s).<br> |
| `meter_configurator/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | `false` | If omitted, all meters use default values as described in ExperimentalMeterConfig. | No constraints. | Configure meters.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `exemplar_filter` | supported | unknown | supported | unknown |
| `readers` | supported | unknown | supported | unknown |
| `views` | supported | unknown | supported | unknown |
| `meter_configurator/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["readers"]`

Usages:

* [`OpenTelemetryConfiguration.meter_provider`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
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
  ]
}</pre>
</details>

## MetricProducer <a id="metricproducer"></a>

`MetricProducer` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `opencensus` | [`OpenCensusMetricProducer`](#opencensusmetricproducer) | `false` | If omitted, ignore. | No constraints. | Configure metric producer to be opencensus. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `opencensus` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PeriodicMetricReader.producers`](#periodicmetricreader)
* [`PullMetricReader.producers`](#pullmetricreader)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `periodic` | [`PeriodicMetricReader`](#periodicmetricreader) | `false` | If omitted, ignore. | No constraints. | Configure a periodic metric reader. |
| `pull` | [`PullMetricReader`](#pullmetricreader) | `false` | If omitted, ignore. | No constraints. | Configure a pull based metric reader. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `periodic` | supported | unknown | supported | unknown |
| `pull` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`MeterProvider.readers`](#meterprovider)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `name` | `string` | `true` | Property is required and must be non-null. | No constraints. | The name of the pair. |
| `value` | one of:<br>* `string`<br>* `null`<br> | `true` | Property must be present, but if null the behavior is dependent on usage context. | No constraints. | The value of the pair. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `name` | supported | unknown | supported | unknown |
| `value` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","value"]`

Usages:

* [`OtlpHttpExporter.headers`](#otlphttpexporter)
* [`OtlpGrpcExporter.headers`](#otlpgrpcexporter)
* [`OtlpHttpMetricExporter.headers`](#otlphttpmetricexporter)
* [`OtlpGrpcMetricExporter.headers`](#otlpgrpcmetricexporter)

No snippets.

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

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `attribute_limits` | [`AttributeLimits`](#attributelimits) | `false` | If omitted, default values as described in AttributeLimits are used. | No constraints. | Configure general attribute limits. See also tracer_provider.limits, logger_provider.limits.<br> |
| `disabled` | one of:<br>* `boolean`<br>* `null`<br> | `false` | If omitted or null, false is used. | No constraints. | Configure if the SDK is disabled or not.<br> |
| `distribution` | [`Distribution`](#distribution) | `false` | If omitted, distribution defaults are used. | No constraints. | Defines configuration parameters specific to a particular OpenTelemetry distribution or vendor.<br>This section provides a standardized location for distribution-specific settings<br>that are not part of the OpenTelemetry configuration model.<br>It allows vendors to expose their own extensions and general configuration options.<br> |
| `file_format` | `string` | `true` | Property is required and must be non-null. | No constraints. | The file format version.<br>Represented as a string including the semver major, minor version numbers (and optionally the meta tag). For example: "0.4", "1.0-rc.2", "1.0" (after stable release).<br>See https://github.com/open-telemetry/opentelemetry-configuration/blob/main/VERSIONING.md for more details.<br>The yaml format is documented at https://github.com/open-telemetry/opentelemetry-configuration/tree/main/schema<br> |
| `log_level` | [`SeverityNumber`](#severitynumber) | `false` | If omitted, INFO is used. | No constraints. | Configure the log level of the internal logger used by the SDK.<br> |
| `logger_provider` | [`LoggerProvider`](#loggerprovider) | `false` | If omitted, a noop logger provider is used. | No constraints. | Configure logger provider.<br> |
| `meter_provider` | [`MeterProvider`](#meterprovider) | `false` | If omitted, a noop meter provider is used. | No constraints. | Configure meter provider.<br> |
| `propagator` | [`Propagator`](#propagator) | `false` | If omitted, a noop propagator is used. | No constraints. | Configure text map context propagators.<br> |
| `resource` | [`Resource`](#resource) | `false` | If omitted, the default resource is used. | No constraints. | Configure resource for all signals.<br> |
| `tracer_provider` | [`TracerProvider`](#tracerprovider) | `false` | If omitted, a noop tracer provider is used. | No constraints. | Configure tracer provider.<br> |
| `instrumentation/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalInstrumentation`](#experimentalinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure instrumentation.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `attribute_limits` | supported | unknown | supported | unknown |
| `disabled` | supported | unknown | supported | unknown |
| `distribution` | supported | unknown | supported | unknown |
| `file_format` | supported | unknown | supported | unknown |
| `log_level` | supported | unknown | not_implemented | unknown |
| `logger_provider` | supported | unknown | supported | unknown |
| `meter_provider` | supported | unknown | supported | unknown |
| `propagator` | supported | unknown | supported | unknown |
| `resource` | supported | unknown | supported | unknown |
| `tracer_provider` | supported | unknown | supported | unknown |
| `instrumentation/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `true`
* `required`: `["file_format"]`

No usages.

No snippets.

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
      "$ref": "#/$defs/SeverityNumber"
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
    },
    "distribution": {
      "$ref": "#/$defs/Distribution"
    }
  },
  "required": [
    "file_format"
  ]
}</pre>
</details>

## OpenTracingPropagator <a id="opentracingpropagator"></a>

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TextMapPropagator.ottrace`](#textmappropagator)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, none is used. | No constraints. | Configure compression.<br>Known values include: gzip, none. Implementations may support other compression algorithms.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, http://localhost:4317 is used. | No constraints. | Configure endpoint.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | If omitted, no headers are added. | * `minItems`: `1`<br> | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, no headers are added. | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 10000 is used. | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br> |
| `tls` | [`GrpcTls`](#grpctls) | `false` | If omitted, system default TLS settings are used. | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `compression` | supported | unknown | supported | unknown |
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_grpc`](#logrecordexporter)
* [`SpanExporter.otlp_grpc`](#spanexporter)

Snippets:

<details>
<summary>Logs Kitchen Sink</summary>

[Snippet Source File](./snippets/OtlpGrpcExporter_logs_kitchen_sink.yaml)
```yaml
endpoint: http://localhost:4318
tls:
  ca_file: /app/cert.pem
  key_file: /app/cert.pem
  cert_file: /app/cert.pem
  insecure: false
headers:
  - name: api-key
    value: "1234"
headers_list: "api-key=1234"
compression: gzip
timeout: 10000
```
</details>

<details>
<summary>Traces Kitchen Sink</summary>

[Snippet Source File](./snippets/OtlpGrpcExporter_traces_kitchen_sink.yaml)
```yaml
endpoint: http://localhost:4318
tls:
  ca_file: /app/cert.pem
  key_file: /app/cert.pem
  cert_file: /app/cert.pem
  insecure: false
headers:
  - name: api-key
    value: "1234"
headers_list: "api-key=1234"
compression: gzip
timeout: 10000
```
</details>

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, none is used. | No constraints. | Configure compression.<br>Known values include: gzip, none. Implementations may support other compression algorithms.<br> |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | If omitted, explicit_bucket_histogram is used. | No constraints. | Configure default histogram aggregation.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, http://localhost:4317 is used. | No constraints. | Configure endpoint.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | If omitted, no headers are added. | * `minItems`: `1`<br> | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, no headers are added. | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | If omitted, cumulative is used. | No constraints. | Configure temporality preference.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 10000 is used. | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br> |
| `tls` | [`GrpcTls`](#grpctls) | `false` | If omitted, system default TLS settings are used. | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `compression` | supported | unknown | supported | unknown |
| `default_histogram_aggregation` | supported | unknown | supported | unknown |
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `temporality_preference` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_grpc`](#pushmetricexporter)

Snippets:

<details>
<summary>Metrics Kitchen Sink</summary>

[Snippet Source File](./snippets/OtlpGrpcMetricExporter_metrics_kitchen_sink.yaml)
```yaml
endpoint: http://localhost:4318
tls:
  ca_file: /app/cert.pem
  key_file: /app/cert.pem
  cert_file: /app/cert.pem
  insecure: false
headers:
  - name: api-key
    value: "1234"
headers_list: "api-key=1234"
compression: gzip
timeout: 10000
```
</details>

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

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `json` | supported | unknown | not_implemented | unknown |
| `protobuf` | supported | unknown | not_implemented | unknown |
</details>

No constraints.

Usages:

* [`OtlpHttpExporter.encoding`](#otlphttpexporter)
* [`OtlpHttpMetricExporter.encoding`](#otlphttpmetricexporter)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, none is used. | No constraints. | Configure compression.<br>Known values include: gzip, none. Implementations may support other compression algorithms.<br> |
| `encoding` | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` | If omitted, protobuf is used. | No constraints. | Configure the encoding used for messages. <br>Implementations may not support json.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used. | No constraints. | Configure endpoint, including the signal specific path.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | If omitted, no headers are added. | * `minItems`: `1`<br> | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, no headers are added. | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 10000 is used. | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br> |
| `tls` | [`HttpTls`](#httptls) | `false` | If omitted, system default TLS settings are used. | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `compression` | supported | unknown | supported | unknown |
| `encoding` | supported | unknown | not_implemented | unknown |
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_http`](#logrecordexporter)
* [`SpanExporter.otlp_http`](#spanexporter)

Snippets:

<details>
<summary>Logs Kitchen Sink</summary>

[Snippet Source File](./snippets/OtlpHttpExporter_logs_kitchen_sink.yaml)
```yaml
endpoint: http://localhost:4318/v1/logs
tls:
  ca_file: /app/cert.pem
  key_file: /app/cert.pem
  cert_file: /app/cert.pem
headers:
  - name: api-key
    value: "1234"
headers_list: "api-key=1234"
compression: gzip
timeout: 10000
encoding: protobuf
```
</details>

<details>
<summary>Traces Kitchen Sink</summary>

[Snippet Source File](./snippets/OtlpHttpExporter_traces_kitchen_sink.yaml)
```yaml
endpoint: http://localhost:4318/v1/traces
tls:
  ca_file: /app/cert.pem
  key_file: /app/cert.pem
  cert_file: /app/cert.pem
headers:
  - name: api-key
    value: "1234"
headers_list: "api-key=1234"
compression: gzip
timeout: 10000
encoding: protobuf
```
</details>

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, none is used. | No constraints. | Configure compression.<br>Known values include: gzip, none. Implementations may support other compression algorithms.<br> |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | If omitted, explicit_bucket_histogram is used. | No constraints. | Configure default histogram aggregation.<br> |
| `encoding` | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` | If omitted, protobuf is used. | No constraints. | Configure the encoding used for messages. <br>Implementations may not support json.<br> |
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, http://localhost:4318/v1/metrics is used. | No constraints. | Configure endpoint.<br> |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | If omitted, no headers are added. | * `minItems`: `1`<br> | Configure headers. Entries have higher priority than entries from .headers_list.<br>If an entry's .value is null, the entry is ignored.<br> |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, no headers are added. | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | If omitted, cumulative is used. | No constraints. | Configure temporality preference.<br> |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 10000 is used. | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br> |
| `tls` | [`HttpTls`](#httptls) | `false` | If omitted, system default TLS settings are used. | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `compression` | supported | unknown | supported | unknown |
| `default_histogram_aggregation` | supported | unknown | supported | unknown |
| `encoding` | supported | unknown | not_implemented | unknown |
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `temporality_preference` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_http`](#pushmetricexporter)

Snippets:

<details>
<summary>Metrics Kitchen Sink</summary>

[Snippet Source File](./snippets/OtlpHttpMetricExporter_metrics_kitchen_sink.yaml)
```yaml
endpoint: http://localhost:4318/v1/metrics
tls:
  ca_file: /app/cert.pem
  key_file: /app/cert.pem
  cert_file: /app/cert.pem
headers:
  - name: api-key
    value: "1234"
headers_list: "api-key=1234"
compression: gzip
timeout: 10000
encoding: protobuf
temporality_preference: cumulative
default_histogram_aggregation: explicit_bucket_histogram
```
</details>

<details>
<summary>Use Base2 Exponential Histogram</summary>

[Snippet Source File](./snippets/OtlpHttpMetricExporter_use_base2_exponential_histogram.yaml)
```yaml
endpoint: http://localhost:4317
default_histogram_aggregation: base2_exponential_bucket_histogram
```
</details>

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `local_parent_not_sampled` | [`Sampler`](#sampler) | `false` | If omitted, always_off is used. | No constraints. | Configure local_parent_not_sampled sampler.<br> |
| `local_parent_sampled` | [`Sampler`](#sampler) | `false` | If omitted, always_on is used. | No constraints. | Configure local_parent_sampled sampler.<br> |
| `remote_parent_not_sampled` | [`Sampler`](#sampler) | `false` | If omitted, always_off is used. | No constraints. | Configure remote_parent_not_sampled sampler.<br> |
| `remote_parent_sampled` | [`Sampler`](#sampler) | `false` | If omitted, always_on is used. | No constraints. | Configure remote_parent_sampled sampler.<br> |
| `root` | [`Sampler`](#sampler) | `false` | If omitted, always_on is used. | No constraints. | Configure root sampler.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `local_parent_not_sampled` | supported | unknown | supported | unknown |
| `local_parent_sampled` | supported | unknown | supported | unknown |
| `remote_parent_not_sampled` | supported | unknown | supported | unknown |
| `remote_parent_sampled` | supported | unknown | supported | unknown |
| `root` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.parent_based`](#sampler)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `cardinality_limits` | [`CardinalityLimits`](#cardinalitylimits) | `false` | If omitted, default values as described in CardinalityLimits are used. | No constraints. | Configure cardinality limits. |
| `exporter` | [`PushMetricExporter`](#pushmetricexporter) | `true` | Property is required and must be non-null. | No constraints. | Configure exporter. |
| `interval` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 60000 is used. | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between start of two consecutive exports. <br>Value must be non-negative.<br> |
| `producers` | `array` of [`MetricProducer`](#metricproducer) | `false` | If omitted, no metric producers are added. | * `minItems`: `1`<br> | Configure metric producers. |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 30000 is used. | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `cardinality_limits` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
| `interval` | supported | unknown | supported | unknown |
| `producers` | supported | unknown | not_implemented | unknown |
| `timeout` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`MetricReader.periodic`](#metricreader)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `composite` | `array` of [`TextMapPropagator`](#textmappropagator) | `false` | If omitted, and .composite_list is omitted or null, a noop propagator is used. | * `minItems`: `1`<br> | Configure the propagators in the composite text map propagator. Entries from .composite_list are appended to the list here with duplicates filtered out.<br>Built-in propagator keys include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party keys include: xray. <br> |
| `composite_list` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, and .composite is omitted or null, a noop propagator is used. | No constraints. | Configure the propagators in the composite text map propagator. Entries are appended to .composite with duplicates filtered out.<br>The value is a comma separated list of propagator identifiers matching the format of OTEL_PROPAGATORS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>Built-in propagator identifiers include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party identifiers include: xray. <br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `composite` | supported | unknown | supported | unknown |
| `composite_list` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.propagator`](#opentelemetryconfiguration)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/Propagator_kitchen_sink.yaml)
```yaml
# .composite and .composite_list are merged and deduplicated.
composite:
  - tracecontext:
  - baggage:
  - b3:
  - b3multi:
  - jaeger:
composite_list: "ottrace,xray"
```
</details>

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/propagator.yaml)
<pre>{
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
  }
}</pre>
</details>

## PullMetricExporter <a id="pullmetricexporter"></a>

`PullMetricExporter` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `prometheus/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be prometheus.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `prometheus/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PullMetricReader.exporter`](#pullmetricreader)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `cardinality_limits` | [`CardinalityLimits`](#cardinalitylimits) | `false` | If omitted, default values as described in CardinalityLimits are used. | No constraints. | Configure cardinality limits. |
| `exporter` | [`PullMetricExporter`](#pullmetricexporter) | `true` | Property is required and must be non-null. | No constraints. | Configure exporter. |
| `producers` | `array` of [`MetricProducer`](#metricproducer) | `false` | If omitted, no metric producers are added. | * `minItems`: `1`<br> | Configure metric producers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `cardinality_limits` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
| `producers` | supported | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`MetricReader.pull`](#metricreader)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `console` | [`ConsoleMetricExporter`](#consolemetricexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be console.<br> |
| `otlp_grpc` | [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be OTLP with gRPC transport.<br> |
| `otlp_http` | [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be OTLP with HTTP transport.<br> |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be OTLP with file transport.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `console` | supported | unknown | supported | unknown |
| `otlp_grpc` | supported | unknown | supported | unknown |
| `otlp_http` | supported | unknown | supported | unknown |
| `otlp_file/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`PeriodicMetricReader.exporter`](#periodicmetricreader)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `attributes` | `array` of [`AttributeNameValue`](#attributenamevalue) | `false` | If omitted, no resource attributes are added. | * `minItems`: `1`<br> | Configure resource attributes. Entries have higher priority than entries from .resource.attributes_list.<br> |
| `attributes_list` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, no resource attributes are added. | No constraints. | Configure resource attributes. Entries have lower priority than entries from .resource.attributes.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_RESOURCE_ATTRIBUTES. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br> |
| `schema_url` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, no schema URL is used. | No constraints. | Configure resource schema URL.<br> |
| `detection/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalResourceDetection`](#experimentalresourcedetection) | `false` | If omitted, resource detection is disabled. | No constraints. | Configure resource detection.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `attributes` | supported | unknown | supported | unknown |
| `attributes_list` | supported | unknown | supported | unknown |
| `schema_url` | supported | unknown | ignored | unknown |
| `detection/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.resource`](#opentelemetryconfiguration)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/Resource_kitchen_sink.yaml)
```yaml
attributes:
  - name: service.name
    value: unknown_service
  - name: string_key
    value: value
    type: string
  - name: bool_key
    value: true
    type: bool
  - name: int_key
    value: 1
    type: int
  - name: double_key
    value: 1.1
    type: double
  - name: string_array_key
    value: [ "value1", "value2" ]
    type: string_array
  - name: bool_array_key
    value: [ true, false ]
    type: bool_array
  - name: int_array_key
    value: [ 1, 2 ]
    type: int_array
  - name: double_array_key
    value: [ 1.1, 2.2 ]
    type: double_array
attributes_list: "service.namespace=my-namespace,service.version=1.0.0"
detection/development:
  attributes:
    included:
      - process.*
    excluded:
      - process.command_args
  detectors:
    - container:
    - host:
    - process:
    - service:
schema_url: https://opentelemetry.io/schemas/1.16.0
```
</details>

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
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
  }
}</pre>
</details>

## Sampler <a id="sampler"></a>

`Sampler` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `always_off` | [`AlwaysOffSampler`](#alwaysoffsampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be always_off. |
| `always_on` | [`AlwaysOnSampler`](#alwaysonsampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be always_on. |
| `parent_based` | [`ParentBasedSampler`](#parentbasedsampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be parent_based. |
| `trace_id_ratio_based` | [`TraceIdRatioBasedSampler`](#traceidratiobasedsampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be trace_id_ratio_based. |
| `composite/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be composite. |
| `jaeger_remote/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be jaeger_remote. |
| `probability/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be probability. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `always_off` | supported | unknown | supported | unknown |
| `always_on` | supported | unknown | supported | unknown |
| `parent_based` | supported | unknown | supported | unknown |
| `trace_id_ratio_based` | supported | unknown | supported | unknown |
| `composite/development` | supported | unknown | supported | unknown |
| `jaeger_remote/development` | supported | unknown | supported | unknown |
| `probability/development` | supported | unknown | ignored | unknown |
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

Snippets:

<details>
<summary>Parent Based Typical</summary>

[Snippet Source File](./snippets/Sampler_parent_based_typical.yaml)
```yaml
# configure the parent based sampler to sample 1% of root spans, and follow the sampling decision of parent spans
parent_based:
  root:
    trace_id_ratio_based:
      ratio: 0.01
  remote_parent_sampled:
    always_on:
  remote_parent_not_sampled:
    always_off:
  local_parent_sampled:
    always_on:
  local_parent_not_sampled:
    always_off:
```
</details>

<details>
<summary>Probability Kitchen Sink</summary>

[Snippet Source File](./snippets/Sampler_probability_kitchen_sink.yaml)
```yaml
probability/development:
  ratio: 0.001
```
</details>

<details>
<summary>Rule Based Kitchen Sink</summary>

[Snippet Source File](./snippets/Sampler_rule_based_kitchen_sink.yaml)
```yaml
composite/development:
  rule_based:
    # The rules for the sampler, matched in order. Each rule can have multiple match conditions - the sampler will be applied if all match.
    # If no conditions are specified, the rule matches all spans that reach it. If no rules match, the span is not sampled.
    # The rules of this sampler, in plain english:
    # - If http.route = /healthz or /livez, do not sample the span.
    # - If http.path starts with /internal/ and not /internal/special/, sample the span.
    # - If there is no parent and the sppan kind is client, sample the span 5% of the time.
    # - Else, sample the span .1% of the time.
    rules:
      - attribute_values:
          key: http.route
          values:
            - /healthz
            - /livez
        # Configure sampler when matched.
        sampler:
          # Configure sampler to be always_off if matched.
          always_off:
      # Configure a sampling rule matching http.path attribute patterns.
      - attribute_patterns:
          key: http.path
          included:
            - /internal/*
          excluded:
            - /internal/special/*
        # Configure sampler when matched.
        sampler:
          # Configure sampler to be always_on if matched.
          always_on:
      # Configure a sampling rule matching root spans with CLIENT span kind.
      - parent:
          - none
        span_kinds:
          - client
        sampler:
          # Configure sampler to be probability if matched.
          probability:
            ratio: 0.05
      - sampler:
          probability:
            # Configure ratio.
            # If omitted or null, 1.0 is used.
            ratio: 0.001
```
</details>

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

## SeverityNumber <a id="severitynumber"></a>

This is a enum type.

| Value | Description |
|---|---|
| `debug` | debug, severity number 5. |
| `debug2` | debug2, severity number 6. |
| `debug3` | debug3, severity number 7. |
| `debug4` | debug4, severity number 8. |
| `error` | error, severity number 17. |
| `error2` | error2, severity number 18. |
| `error3` | error3, severity number 19. |
| `error4` | error4, severity number 20. |
| `fatal` | fatal, severity number 21. |
| `fatal2` | fatal2, severity number 22. |
| `fatal3` | fatal3, severity number 23. |
| `fatal4` | fatal4, severity number 24. |
| `info` | info, severity number 9. |
| `info2` | info2, severity number 10. |
| `info3` | info3, severity number 11. |
| `info4` | info4, severity number 12. |
| `trace` | trace, severity number 1. |
| `trace2` | trace2, severity number 2. |
| `trace3` | trace3, severity number 3. |
| `trace4` | trace4, severity number 4. |
| `warn` | warn, severity number 13. |
| `warn2` | warn2, severity number 14. |
| `warn3` | warn3, severity number 15. |
| `warn4` | warn4, severity number 16. |

<details>
<summary>Language support status</summary>

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `debug` | unknown | unknown | unknown | unknown |
| `debug2` | unknown | unknown | unknown | unknown |
| `debug3` | unknown | unknown | unknown | unknown |
| `debug4` | unknown | unknown | unknown | unknown |
| `error` | unknown | unknown | unknown | unknown |
| `error2` | unknown | unknown | unknown | unknown |
| `error3` | unknown | unknown | unknown | unknown |
| `error4` | unknown | unknown | unknown | unknown |
| `fatal` | unknown | unknown | unknown | unknown |
| `fatal2` | unknown | unknown | unknown | unknown |
| `fatal3` | unknown | unknown | unknown | unknown |
| `fatal4` | unknown | unknown | unknown | unknown |
| `info` | unknown | unknown | unknown | unknown |
| `info2` | unknown | unknown | unknown | unknown |
| `info3` | unknown | unknown | unknown | unknown |
| `info4` | unknown | unknown | unknown | unknown |
| `trace` | unknown | unknown | unknown | unknown |
| `trace2` | unknown | unknown | unknown | unknown |
| `trace3` | unknown | unknown | unknown | unknown |
| `trace4` | unknown | unknown | unknown | unknown |
| `warn` | unknown | unknown | unknown | unknown |
| `warn2` | unknown | unknown | unknown | unknown |
| `warn3` | unknown | unknown | unknown | unknown |
| `warn4` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalLoggerConfig.minimum_severity`](#experimentalloggerconfig)
* [`OpenTelemetryConfiguration.log_level`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "trace",
    "trace2",
    "trace3",
    "trace4",
    "debug",
    "debug2",
    "debug3",
    "debug4",
    "info",
    "info2",
    "info3",
    "info4",
    "warn",
    "warn2",
    "warn3",
    "warn4",
    "error",
    "error2",
    "error3",
    "error4",
    "fatal",
    "fatal2",
    "fatal3",
    "fatal4"
  ]
}</pre>
</details>

## SimpleLogRecordProcessor <a id="simplelogrecordprocessor"></a>

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `exporter` | [`LogRecordExporter`](#logrecordexporter) | `true` | Property is required and must be non-null. | No constraints. | Configure exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `exporter` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`LogRecordProcessor.simple`](#logrecordprocessor)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `exporter` | [`SpanExporter`](#spanexporter) | `true` | Property is required and must be non-null. | No constraints. | Configure exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `exporter` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["exporter"]`

Usages:

* [`SpanProcessor.simple`](#spanprocessor)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `console` | [`ConsoleExporter`](#consoleexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be console. |
| `otlp_grpc` | [`OtlpGrpcExporter`](#otlpgrpcexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be OTLP with gRPC transport. |
| `otlp_http` | [`OtlpHttpExporter`](#otlphttpexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be OTLP with HTTP transport. |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` | If omitted, ignore. | No constraints. | Configure exporter to be OTLP with file transport.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `console` | supported | unknown | supported | unknown |
| `otlp_grpc` | supported | unknown | supported | unknown |
| `otlp_http` | supported | unknown | supported | unknown |
| `otlp_file/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`BatchSpanProcessor.exporter`](#batchspanprocessor)
* [`SimpleSpanProcessor.exporter`](#simplespanprocessor)

No snippets.

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
      "$ref": "#/$defs/OtlpHttpExporter"
    },
    "otlp_grpc": {
      "$ref": "#/$defs/OtlpGrpcExporter"
    },
    "otlp_file/development": {
      "$ref": "#/$defs/ExperimentalOtlpFileExporter"
    },
    "console": {
      "$ref": "#/$defs/ConsoleExporter"
    }
  }
}</pre>
</details>

## SpanKind <a id="spankind"></a>

This is a enum type.

| Value | Description |
|---|---|
| `client` | client, a client span. |
| `consumer` | consumer, a consumer span. |
| `internal` | internal, an internal span. |
| `producer` | producer, a producer span. |
| `server` | server, a server span. |

<details>
<summary>Language support status</summary>

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `client` | unknown | unknown | unknown | unknown |
| `consumer` | unknown | unknown | unknown | unknown |
| `internal` | unknown | unknown | unknown | unknown |
| `producer` | unknown | unknown | unknown | unknown |
| `server` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.span_kinds`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "internal",
    "server",
    "client",
    "producer",
    "consumer"
  ]
}</pre>
</details>

## SpanLimits <a id="spanlimits"></a>

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 128 is used. | * `minimum`: `0`<br> | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br> |
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, there is no limit. | * `minimum`: `0`<br> | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br> |
| `event_attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 128 is used. | * `minimum`: `0`<br> | Configure max attributes per span event. <br>Value must be non-negative.<br> |
| `event_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 128 is used. | * `minimum`: `0`<br> | Configure max span event count. <br>Value must be non-negative.<br> |
| `link_attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 128 is used. | * `minimum`: `0`<br> | Configure max attributes per span link. <br>Value must be non-negative.<br> |
| `link_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 128 is used. | * `minimum`: `0`<br> | Configure max span link count. <br>Value must be non-negative.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `attribute_count_limit` | supported | unknown | supported | unknown |
| `attribute_value_length_limit` | supported | unknown | supported | unknown |
| `event_attribute_count_limit` | supported | unknown | supported | unknown |
| `event_count_limit` | supported | unknown | supported | unknown |
| `link_attribute_count_limit` | supported | unknown | supported | unknown |
| `link_count_limit` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TracerProvider.limits`](#tracerprovider)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/SpanLimits_kitchen_sink.yaml)
```yaml
# .tracer_provider.limits take priority over general .attribute_limits
attribute_count_limit: 128
attribute_value_length_limit: 4096
event_attribute_count_limit: 128
event_count_limit: 128
link_attribute_count_limit: 128
link_count_limit: 128
```
</details>

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `batch` | [`BatchSpanProcessor`](#batchspanprocessor) | `false` | If omitted, ignore. | No constraints. | Configure a batch span processor. |
| `simple` | [`SimpleSpanProcessor`](#simplespanprocessor) | `false` | If omitted, ignore. | No constraints. | Configure a simple span processor. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `batch` | supported | unknown | supported | unknown |
| `simple` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`TracerProvider.processors`](#tracerprovider)

No snippets.

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

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `b3` | [`B3Propagator`](#b3propagator) | `false` | If omitted, ignore. | No constraints. | Include the zipkin b3 propagator. |
| `b3multi` | [`B3MultiPropagator`](#b3multipropagator) | `false` | If omitted, ignore. | No constraints. | Include the zipkin b3 multi propagator. |
| `baggage` | [`BaggagePropagator`](#baggagepropagator) | `false` | If omitted, ignore. | No constraints. | Include the w3c baggage propagator. |
| `jaeger` | [`JaegerPropagator`](#jaegerpropagator) | `false` | If omitted, ignore. | No constraints. | Include the jaeger propagator. |
| `ottrace` | [`OpenTracingPropagator`](#opentracingpropagator) | `false` | If omitted, ignore. | No constraints. | Include the opentracing propagator. |
| `tracecontext` | [`TraceContextPropagator`](#tracecontextpropagator) | `false` | If omitted, ignore. | No constraints. | Include the w3c trace context propagator. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `b3` | supported | unknown | supported | unknown |
| `b3multi` | supported | unknown | supported | unknown |
| `baggage` | supported | unknown | supported | unknown |
| `jaeger` | supported | unknown | supported | unknown |
| `ottrace` | supported | unknown | supported | unknown |
| `tracecontext` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`Propagator.composite`](#propagator)

No snippets.

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

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `ratio` | one of:<br>* `number`<br>* `null`<br> | `false` | If omitted or null, 1.0 is used. | * `minimum`: `0`<br>* `maximum`: `1`<br> | Configure trace_id_ratio.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `ratio` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.trace_id_ratio_based`](#sampler)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `limits` | [`SpanLimits`](#spanlimits) | `false` | If omitted, default values as described in SpanLimits are used. | No constraints. | Configure span limits. See also attribute_limits. |
| `processors` | `array` of [`SpanProcessor`](#spanprocessor) | `true` | Property is required and must be non-null. | * `minItems`: `1`<br> | Configure span processors. |
| `sampler` | [`Sampler`](#sampler) | `false` | If omitted, parent based sampler with a root of always_on is used. | No constraints. | Configure the sampler.<br> |
| `tracer_configurator/development`<br>**WARNING:** This property is [experimental](VERSIONING.md#experimental-features). | [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | `false` | If omitted, all tracers use default values as described in ExperimentalTracerConfig. | No constraints. | Configure tracers.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `limits` | supported | unknown | supported | unknown |
| `processors` | supported | unknown | supported | unknown |
| `sampler` | supported | unknown | supported | unknown |
| `tracer_configurator/development` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["processors"]`

Usages:

* [`OpenTelemetryConfiguration.tracer_provider`](#opentelemetryconfiguration)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
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
  ]
}</pre>
</details>

## View <a id="view"></a>

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `selector` | [`ViewSelector`](#viewselector) | `true` | Property is required and must be non-null. | No constraints. | Configure view selector. <br>Selection criteria is additive as described in https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#instrument-selection-criteria.<br> |
| `stream` | [`ViewStream`](#viewstream) | `true` | Property is required and must be non-null. | No constraints. | Configure view stream. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `selector` | supported | unknown | supported | unknown |
| `stream` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["selector","stream"]`

Usages:

* [`MeterProvider.views`](#meterprovider)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/View_kitchen_sink.yaml)
```yaml
selector:
  instrument_name: my_instrument
  instrument_type: histogram
  unit: ms
  meter_name: my-meter
  meter_version: 1.0.0
  meter_schema_url: https://opentelemetry.io/schemas/1.16.0
stream:
  name: new_instrument_name
  description: new_description
  aggregation:
    explicit_bucket_histogram:
      boundaries:
        - 0.0
        - 5.0
        - 10.0
        - 25.0
        - 50.0
        - 75.0
        - 100.0
        - 250.0
        - 500.0
        - 750.0
        - 1000.0
        - 2500.0
        - 5000.0
        - 7500.0
        - 10000.0
      record_min_max: true
  aggregation_cardinality_limit: 2000
  attribute_keys:
    included:
      - foo.*
    excluded:
      - foo.bar
```
</details>

<details>
<summary>Override Default Histogram Buckets</summary>

[Snippet Source File](./snippets/View_override_default_histogram_buckets.yaml)
```yaml
# select a specific histogram instrument and override the default buckets
selector:
  instrument_name: my.instrument.name
  instrument_type: histogram
stream:
  aggregation:
    explicit_bucket_histogram:
      boundaries:
        - 0
        - 5.0
        - 10.0
```
</details>

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `instrument_name` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, all instrument names match. | No constraints. | Configure instrument name selection criteria.<br> |
| `instrument_type` | [`InstrumentType`](#instrumenttype) | `false` | If omitted, all instrument types match. | No constraints. | Configure instrument type selection criteria.<br> |
| `meter_name` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, all meter names match. | No constraints. | Configure meter name selection criteria.<br> |
| `meter_schema_url` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, all meter schema URLs match. | No constraints. | Configure meter schema url selection criteria.<br> |
| `meter_version` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, all meter versions match. | No constraints. | Configure meter version selection criteria.<br> |
| `unit` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, all instrument units match. | No constraints. | Configure the instrument unit selection criteria.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `instrument_name` | supported | unknown | supported | unknown |
| `instrument_type` | supported | unknown | supported | unknown |
| `meter_name` | supported | unknown | supported | unknown |
| `meter_schema_url` | supported | unknown | supported | unknown |
| `meter_version` | supported | unknown | supported | unknown |
| `unit` | supported | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`View.selector`](#view)

No snippets.

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

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `aggregation` | [`Aggregation`](#aggregation) | `false` | If omitted, default is used. | No constraints. | Configure aggregation of the resulting stream(s).<br> |
| `aggregation_cardinality_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, the metric reader's default cardinality limit is used. | * `exclusiveMinimum`: `0`<br> | Configure the aggregation cardinality limit.<br> |
| `attribute_keys` | [`IncludeExclude`](#includeexclude) | `false` | If omitted, all attribute keys are retained. | No constraints. | Configure attribute keys retained in the resulting stream(s).<br> |
| `description` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, the instrument's origin description is used. | No constraints. | Configure metric description of the resulting stream(s).<br> |
| `name` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, the instrument's original name is used. | No constraints. | Configure metric name of the resulting stream(s).<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `aggregation` | supported | unknown | supported | unknown |
| `aggregation_cardinality_limit` | supported | unknown | supported | unknown |
| `attribute_keys` | supported | unknown | supported | unknown |
| `description` | supported | unknown | supported | unknown |
| `name` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`View.stream`](#view)

No snippets.

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
      "$ref": "#/$defs/IncludeExclude"
    }
  }
}</pre>
</details>

# Experimental Types <a id="experimental-types"></a>

## ExperimentalComposableAlwaysOffSampler <a id="experimentalcomposablealwaysoffsampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.always_off`](#experimentalcomposablesampler)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.always_on`](#experimentalcomposablesampler)

No snippets.

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

## ExperimentalComposableParentThresholdSampler <a id="experimentalcomposableparentthresholdsampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `root` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `true` | Property is required and must be non-null. | No constraints. | Sampler to use when there is no parent. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `root` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["root"]`

Usages:

* [`ExperimentalComposableSampler.parent_threshold`](#experimentalcomposablesampler)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "object"
  ],
  "additionalProperties": false,
  "properties": {
    "root": {
      "$ref": "#/$defs/ExperimentalComposableSampler"
    }
  },
  "required": [
    "root"
  ]
}</pre>
</details>

## ExperimentalComposableProbabilitySampler <a id="experimentalcomposableprobabilitysampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `ratio` | one of:<br>* `number`<br>* `null`<br> | `false` | If omitted or null, 1.0 is used. | * `minimum`: `0`<br>* `maximum`: `1`<br> | Configure ratio.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `ratio` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.probability`](#experimentalcomposablesampler)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `rules` | one of:<br>* `array`<br>* `null`<br> | `false` | If omitted or null, no span is sampled. | No constraints. | The rules for the sampler, matched in order. If no rules match, the span is not sampled.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `rules` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.rule_based`](#experimentalcomposablesampler)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `attribute_patterns` | [`ExperimentalComposableRuleBasedSamplerRuleAttributePatterns`](#experimentalcomposablerulebasedsamplerruleattributepatterns) | `false` | If omitted, ignore. | No constraints. | Patterns to match against a single attribute. Non-string attributes are matched using their string representation:<br>for example, a pattern of "4*" would match any http.response.status_code in 400-499. For array attributes, if any<br>item matches, it is considered a match.<br> |
| `attribute_values` | [`ExperimentalComposableRuleBasedSamplerRuleAttributeValues`](#experimentalcomposablerulebasedsamplerruleattributevalues) | `false` | If omitted, ignore. | No constraints. | Values to match against a single attribute. Non-string attributes are matched using their string representation:<br>for example, a value of "404" would match the http.response.status_code 404. For array attributes, if any<br>item matches, it is considered a match.<br> |
| `parent` | `array` of [`ExperimentalSpanParent`](#experimentalspanparent) | `false` | If omitted, ignore. | * `minItems`: `1`<br> | The parent span types to match. |
| `sampler` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `true` | Property is required and must be non-null. | No constraints. | The sampler to use for matching spans. |
| `span_kinds` | `array` of [`SpanKind`](#spankind) | `false` | If omitted, ignore. | * `minItems`: `1`<br> | The span kinds to match. If the span's kind matches any of these, it matches. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `attribute_patterns` | unknown | unknown | unknown | unknown |
| `attribute_values` | unknown | unknown | unknown | unknown |
| `parent` | unknown | unknown | unknown | unknown |
| `sampler` | unknown | unknown | unknown | unknown |
| `span_kinds` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["sampler"]`

No usages.

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": "object",
  "description": "A rule for ExperimentalComposableRuleBasedSampler. A rule can have multiple match conditions - the sampler will be applied if all match. \nIf no conditions are specified, the rule matches all spans that reach it.\n",
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
        "$ref": "#/$defs/SpanKind"
      }
    },
    "parent": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/ExperimentalSpanParent"
      }
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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `excluded` | `array` of `string` | `false` | If omitted, .included attributes are included. | * `minItems`: `1`<br> | Configure list of value patterns to exclude. Applies after .included (i.e. excluded has higher priority than included).<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |
| `included` | `array` of `string` | `false` | If omitted, all values are included. | * `minItems`: `1`<br> | Configure list of value patterns to include.<br>Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |
| `key` | `string` | `true` | Property is required and must be non-null. | No constraints. | The attribute key to match against. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `excluded` | unknown | unknown | unknown | unknown |
| `included` | unknown | unknown | unknown | unknown |
| `key` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["key"]`

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.attribute_patterns`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

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
  },
  "required": [
    "key"
  ]
}</pre>
</details>

## ExperimentalComposableRuleBasedSamplerRuleAttributeValues <a id="experimentalcomposablerulebasedsamplerruleattributevalues"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `key` | `string` | `true` | Property is required and must be non-null. | No constraints. | The attribute key to match against. |
| `values` | `array` of `string` | `true` | Property is required and must be non-null. | * `minItems`: `1`<br> | The attribute values to match against. If the attribute's value matches any of these, it matches. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `key` | unknown | unknown | unknown | unknown |
| `values` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["key","values"]`

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.attribute_values`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `always_off` | [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be always_off. |
| `always_on` | [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be always_on. |
| `parent_threshold` | [`ExperimentalComposableParentThresholdSampler`](#experimentalcomposableparentthresholdsampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be parent_threshold.<br> |
| `probability` | [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be probability. |
| `rule_based` | [`ExperimentalComposableRuleBasedSampler`](#experimentalcomposablerulebasedsampler) | `false` | If omitted, ignore. | No constraints. | Configure sampler to be rule_based. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `always_off` | unknown | unknown | unknown | unknown |
| `always_on` | unknown | unknown | unknown | unknown |
| `parent_threshold` | unknown | unknown | unknown | unknown |
| `probability` | unknown | unknown | unknown | unknown |
| `rule_based` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`Sampler.composite/development`](#sampler)
* [`ExperimentalComposableParentThresholdSampler.root`](#experimentalcomposableparentthresholdsampler)
* [`ExperimentalComposableRuleBasedSamplerRule.sampler`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

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
    "parent_threshold": {
      "$ref": "#/$defs/ExperimentalComposableParentThresholdSampler"
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
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.container`](#experimentalresourcedetector)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `http` | [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | `false` | If omitted, defaults as described in ExperimentalHttpInstrumentation are used. | No constraints. | Configure instrumentations following the http semantic conventions.<br>See http semantic conventions: https://opentelemetry.io/docs/specs/semconv/http/<br> |
| `peer` | [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | `false` | If omitted, defaults as described in ExperimentalPeerInstrumentation are used. | No constraints. | Configure instrumentations following the peer semantic conventions.<br>See peer semantic conventions: https://opentelemetry.io/docs/specs/semconv/attributes-registry/peer/<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `http` | not_applicable | unknown | supported | unknown |
| `peer` | not_applicable | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalInstrumentation.general`](#experimentalinstrumentation)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.host`](#experimentalresourcedetector)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `request_captured_headers` | `array` of `string` | `false` | If omitted, no outbound request headers are captured. | * `minItems`: `1`<br> | Configure headers to capture for outbound http requests.<br> |
| `response_captured_headers` | `array` of `string` | `false` | If omitted, no inbound response headers are captured. | * `minItems`: `1`<br> | Configure headers to capture for inbound http responses.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `request_captured_headers` | not_applicable | unknown | supported | unknown |
| `response_captured_headers` | not_applicable | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalHttpInstrumentation.client`](#experimentalhttpinstrumentation)

No snippets.

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

## ExperimentalHttpInstrumentation <a id="experimentalhttpinstrumentation"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `client` | [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | `false` | If omitted, defaults as described in ExperimentalHttpClientInstrumentation are used. | No constraints. | Configure instrumentations following the http client semantic conventions. |
| `server` | [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | `false` | If omitted, defaults as described in ExperimentalHttpServerInstrumentation are used. | No constraints. | Configure instrumentations following the http server semantic conventions. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `client` | not_applicable | unknown | supported | unknown |
| `server` | not_applicable | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalGeneralInstrumentation.http`](#experimentalgeneralinstrumentation)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `request_captured_headers` | `array` of `string` | `false` | If omitted, no request headers are captured. | * `minItems`: `1`<br> | Configure headers to capture for inbound http requests.<br> |
| `response_captured_headers` | `array` of `string` | `false` | If omitted, no response headers are captures. | * `minItems`: `1`<br> | Configure headers to capture for outbound http responses.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `request_captured_headers` | not_applicable | unknown | supported | unknown |
| `response_captured_headers` | not_applicable | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalHttpInstrumentation.server`](#experimentalhttpinstrumentation)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `cpp` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure C++ language-specific instrumentation libraries. |
| `dotnet` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure .NET language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `erlang` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure Erlang language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `general` | [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | `false` | If omitted, default values as described in ExperimentalGeneralInstrumentation are used. | No constraints. | Configure general SemConv options that may apply to multiple languages and instrumentations.<br>Instrumenation may merge general config options with the language specific configuration at .instrumentation.<language>.<br> |
| `go` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure Go language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `java` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure Java language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `js` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure JavaScript language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `php` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure PHP language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `python` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure Python language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `ruby` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure Ruby language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `rust` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure Rust language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |
| `swift` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | If omitted, instrumentation defaults are used. | No constraints. | Configure Swift language-specific instrumentation libraries.<br>Each entry's key identifies a particular instrumentation library. The corresponding value configures it.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `cpp` | not_applicable | unknown | not_applicable | unknown |
| `dotnet` | not_applicable | unknown | not_applicable | unknown |
| `erlang` | not_applicable | unknown | not_applicable | unknown |
| `general` | not_applicable | unknown | supported | unknown |
| `go` | not_applicable | unknown | not_applicable | unknown |
| `java` | not_applicable | unknown | supported | unknown |
| `js` | not_applicable | unknown | not_applicable | unknown |
| `php` | not_applicable | unknown | not_applicable | unknown |
| `python` | not_applicable | unknown | not_applicable | unknown |
| `ruby` | not_applicable | unknown | not_applicable | unknown |
| `rust` | not_applicable | unknown | not_applicable | unknown |
| `swift` | not_applicable | unknown | not_applicable | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.instrumentation/development`](#opentelemetryconfiguration)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/ExperimentalInstrumentation_kitchen_sink.yaml)
```yaml
general:
  peer:
    service_mapping:
      - peer: 1.2.3.4
        service: FooService
      - peer: 2.3.4.5
        service: BarService
  http:
    client:
      request_captured_headers:
        - Content-Type
        - Accept
      response_captured_headers:
        - Content-Type
        - Content-Encoding
    server:
      request_captured_headers:
        - Content-Type
        - Accept
      response_captured_headers:
        - Content-Type
        - Content-Encoding
cpp:
  example:
    property: "value"
dotnet:
  example:
    property: "value"
erlang:
  example:
    property: "value"
go:
  example:
    property: "value"
java:
  example:
    property: "value"
js:
  example:
    property: "value"
php:
  example:
    property: "value"
python:
  example:
    property: "value"
ruby:
  example:
    property: "value"
rust:
  example:
    property: "value"
swift:
  example:
    property: "value"
```
</details>

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.yaml)
<pre>{
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
  }
}</pre>
</details>

## ExperimentalJaegerRemoteSampler <a id="experimentaljaegerremotesampler"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `endpoint` | `string` | `true` | Property is required and must be non-null. | No constraints. | Configure the endpoint of the jaeger remote sampling service. |
| `initial_sampler` | [`Sampler`](#sampler) | `true` | Property is required and must be non-null. | No constraints. | Configure the initial sampler used before first configuration is fetched. |
| `interval` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 60000 is used. | * `minimum`: `0`<br> | Configure the polling interval (in milliseconds) to fetch from the remote sampling service. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `endpoint` | not_implemented | unknown | ignored | unknown |
| `initial_sampler` | not_implemented | unknown | ignored | unknown |
| `interval` | not_implemented | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["endpoint","initial_sampler"]`

Usages:

* [`Sampler.jaeger_remote/development`](#sampler)

No snippets.

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
        "string"
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
  },
  "required": [
    "endpoint",
    "initial_sampler"
  ]
}</pre>
</details>

## ExperimentalLanguageSpecificInstrumentation <a id="experimentallanguagespecificinstrumentation"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

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

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `disabled` | one of:<br>* `boolean`<br>* `null`<br> | `false` | If omitted or null, false is used. | No constraints. | Configure if the logger is enabled or not.<br> |
| `minimum_severity` | [`SeverityNumber`](#severitynumber) | `false` | If omitted, severity filtering is not applied. | No constraints. | Configure severity filtering.<br>Log records with an non-zero (i.e. unspecified) severity number which is less than minimum_severity are not processed.<br> |
| `trace_based` | one of:<br>* `boolean`<br>* `null`<br> | `false` | If omitted or null, trace based filtering is not applied. | No constraints. | Configure trace based filtering.<br>If true, log records associated with unsampled trace contexts traces are not processed. If false, or if a log record is not associated with a trace context, trace based filtering is not applied.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `disabled` | not_implemented | unknown | supported | unknown |
| `minimum_severity` | not_implemented | unknown | not_implemented | unknown |
| `trace_based` | not_implemented | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalLoggerConfigurator.default_config`](#experimentalloggerconfigurator)
* [`ExperimentalLoggerMatcherAndConfig.config`](#experimentalloggermatcherandconfig)

No snippets.

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
      "$ref": "#/$defs/SeverityNumber"
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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `default_config` | [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | `false` | If omitted, unmatched .loggers use default values as described in ExperimentalLoggerConfig. | No constraints. | Configure the default logger config used there is no matching entry in .logger_configurator/development.loggers. |
| `loggers` | `array` of [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | `false` | If omitted, all loggers use .default_config. | * `minItems`: `1`<br> | Configure loggers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `default_config` | not_implemented | unknown | supported | unknown |
| `loggers` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LoggerProvider.logger_configurator/development`](#loggerprovider)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/ExperimentalLoggerConfigurator_kitchen_sink.yaml)
```yaml
default_config:
  disabled: true
loggers:
  - name: io.opentelemetry.contrib.*
    config:
      disabled: false
      minimum_severity: info
      trace_based: true
```
</details>

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `config` | [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | `true` | Property is required and must be non-null. | No constraints. | The logger config. |
| `name` | `string` | `true` | Property is required and must be non-null. | No constraints. | Configure logger names to match, evaluated as follows:<br><br> * If the logger name exactly matches.<br> * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `config` | not_implemented | unknown | supported | unknown |
| `name` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","config"]`

Usages:

* [`ExperimentalLoggerConfigurator.loggers`](#experimentalloggerconfigurator)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `disabled` | `boolean` | `false` | If omitted, false is used. | No constraints. | Configure if the meter is enabled or not. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `disabled` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalMeterConfigurator.default_config`](#experimentalmeterconfigurator)
* [`ExperimentalMeterMatcherAndConfig.config`](#experimentalmetermatcherandconfig)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `default_config` | [`ExperimentalMeterConfig`](#experimentalmeterconfig) | `false` | If omitted, unmatched .meters use default values as described in ExperimentalMeterConfig. | No constraints. | Configure the default meter config used there is no matching entry in .meter_configurator/development.meters. |
| `meters` | `array` of [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | `false` | If omitted, all meters used .default_config. | * `minItems`: `1`<br> | Configure meters. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `default_config` | not_implemented | unknown | supported | unknown |
| `meters` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`MeterProvider.meter_configurator/development`](#meterprovider)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/ExperimentalMeterConfigurator_kitchen_sink.yaml)
```yaml
default_config:
  disabled: true
meters:
  - name: io.opentelemetry.contrib.*
    config:
      disabled: false
```
</details>

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `config` | [`ExperimentalMeterConfig`](#experimentalmeterconfig) | `true` | Property is required and must be non-null. | No constraints. | The meter config. |
| `name` | `string` | `true` | Property is required and must be non-null. | No constraints. | Configure meter names to match, evaluated as follows:<br><br> * If the meter name exactly matches.<br> * If the meter name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `config` | not_implemented | unknown | supported | unknown |
| `name` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","config"]`

Usages:

* [`ExperimentalMeterConfigurator.meters`](#experimentalmeterconfigurator)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `output_stream` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, stdout is used. | No constraints. | Configure output stream. <br>Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `output_stream` | supported | unknown | not_implemented | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`LogRecordExporter.otlp_file/development`](#logrecordexporter)
* [`SpanExporter.otlp_file/development`](#spanexporter)

Snippets:

<details>
<summary>Logs File</summary>

[Snippet Source File](./snippets/ExperimentalOtlpFileExporter_logs_file.yaml)
```yaml
output_stream: file:///var/log/logs.jsonl
```
</details>

<details>
<summary>Logs Stdout</summary>

[Snippet Source File](./snippets/ExperimentalOtlpFileExporter_logs_stdout.yaml)
```yaml
output_stream: stdout
```
</details>

<details>
<summary>Traces File</summary>

[Snippet Source File](./snippets/ExperimentalOtlpFileExporter_traces_file.yaml)
```yaml
output_stream: file:///var/log/traces.jsonl
```
</details>

<details>
<summary>Traces Stdout</summary>

[Snippet Source File](./snippets/ExperimentalOtlpFileExporter_traces_stdout.yaml)
```yaml
output_stream: stdout
```
</details>

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | If omitted, explicit_bucket_histogram is used. | No constraints. | Configure default histogram aggregation.<br> |
| `output_stream` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, stdout is used. | No constraints. | Configure output stream. <br>Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br> |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | If omitted, cumulative is used. | No constraints. | Configure temporality preference.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `default_histogram_aggregation` | supported | unknown | supported | unknown |
| `output_stream` | supported | unknown | not_implemented | unknown |
| `temporality_preference` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PushMetricExporter.otlp_file/development`](#pushmetricexporter)

Snippets:

<details>
<summary>Metrics File</summary>

[Snippet Source File](./snippets/ExperimentalOtlpFileMetricExporter_metrics_file.yaml)
```yaml
output_stream: file:///var/log/metrics.jsonl
temporality_preference: cumulative
default_histogram_aggregation: explicit_bucket_histogram
```
</details>

<details>
<summary>Metrics Stdout</summary>

[Snippet Source File](./snippets/ExperimentalOtlpFileMetricExporter_metrics_stdout.yaml)
```yaml
output_stream: stdout
temporality_preference: cumulative
default_histogram_aggregation: explicit_bucket_histogram
```
</details>

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `service_mapping` | `array` of [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | `false` | If omitted, no peer service mappings are used. | * `minItems`: `1`<br> | Configure the service mapping for instrumentations following peer.service semantic conventions.<br>See peer.service semantic conventions: https://opentelemetry.io/docs/specs/semconv/general/attributes/#general-remote-service-attributes<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `service_mapping` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalGeneralInstrumentation.peer`](#experimentalgeneralinstrumentation)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `peer` | `string` | `true` | Property is required and must be non-null. | No constraints. | The IP address to map.<br> |
| `service` | `string` | `true` | Property is required and must be non-null. | No constraints. | The logical name corresponding to the IP address of .peer.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `peer` | not_implemented | unknown | supported | unknown |
| `service` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["peer","service"]`

Usages:

* [`ExperimentalPeerInstrumentation.service_mapping`](#experimentalpeerinstrumentation)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `ratio` | one of:<br>* `number`<br>* `null`<br> | `false` | If omitted or null, 1.0 is used. | * `minimum`: `0`<br>* `maximum`: `1`<br> | Configure ratio.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `ratio` | not_implemented | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.probability/development`](#sampler)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.process`](#experimentalresourcedetector)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `host` | one of:<br>* `string`<br>* `null`<br> | `false` | If omitted or null, localhost is used. | No constraints. | Configure host.<br> |
| `port` | one of:<br>* `integer`<br>* `null`<br> | `false` | If omitted or null, 9464 is used. | No constraints. | Configure port.<br> |
| `translation_strategy` | [`ExperimentalPrometheusTranslationStrategy`](#experimentalprometheustranslationstrategy) | `false` | If omitted, underscore_escaping_with_suffixes is used. | No constraints. | Configure how metric names are translated to Prometheus metric names. |
| `with_resource_constant_labels` | [`IncludeExclude`](#includeexclude) | `false` | If omitted, no resource attributes are added. | No constraints. | Configure Prometheus Exporter to add resource attributes as metrics attributes, where the resource attribute keys match the patterns. |
| `without_scope_info` | one of:<br>* `boolean`<br>* `null`<br> | `false` | If omitted or null, false is used. | No constraints. | Configure Prometheus Exporter to produce metrics without scope info labels.<br> |
| `without_target_info` | one of:<br>* `boolean`<br>* `null`<br> | `false` | If omitted or null, false is used. | No constraints. | Configure Prometheus Exporter to produce metrics without a target info metric for the resource.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `host` | supported | unknown | supported | unknown |
| `port` | supported | unknown | supported | unknown |
| `translation_strategy` | supported | unknown | not_implemented | unknown |
| `with_resource_constant_labels` | supported | unknown | supported | unknown |
| `without_scope_info` | unknown | unknown | ignored | unknown |
| `without_target_info` | unknown | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`PullMetricExporter.prometheus/development`](#pullmetricexporter)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/ExperimentalPrometheusMetricExporter_kitchen_sink.yaml)
```yaml
host: localhost
port: 9464
without_scope_info: false
without_target_info: false
with_resource_constant_labels:
  included:
    - "service*"
  excluded:
    - "service.attr1"
translation_strategy: underscore_escaping_with_suffixes
```
</details>

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
      "$ref": "#/$defs/IncludeExclude"
    },
    "translation_strategy": {
      "$ref": "#/$defs/ExperimentalPrometheusTranslationStrategy"
    }
  }
}</pre>
</details>

## ExperimentalPrometheusTranslationStrategy <a id="experimentalprometheustranslationstrategy"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

This is a enum type.

| Value | Description |
|---|---|
| `no_translation` | Special character escaping is disabled. Type and unit suffixes are disabled. Metric names are unaltered. |
| `no_utf8_escaping_with_suffixes` | Special character escaping is disabled. Type and unit suffixes are enabled. |
| `underscore_escaping_with_suffixes` | Special character escaping is enabled. Type and unit suffixes are enabled. |
| `underscore_escaping_without_suffixes` | Special character escaping is enabled. Type and unit suffixes are disabled. This represents classic Prometheus metric name compatibility. |

<details>
<summary>Language support status</summary>

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `no_translation` | unknown | unknown | unknown | unknown |
| `no_utf8_escaping_with_suffixes` | unknown | unknown | unknown | unknown |
| `underscore_escaping_with_suffixes` | unknown | unknown | unknown | unknown |
| `underscore_escaping_without_suffixes` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalPrometheusMetricExporter.translation_strategy`](#experimentalprometheusmetricexporter)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "underscore_escaping_with_suffixes",
    "underscore_escaping_without_suffixes",
    "no_utf8_escaping_with_suffixes",
    "no_translation"
  ]
}</pre>
</details>

## ExperimentalResourceDetection <a id="experimentalresourcedetection"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `attributes` | [`IncludeExclude`](#includeexclude) | `false` | If omitted, all attributes from resource detectors are added. | No constraints. | Configure attributes provided by resource detectors. |
| `detectors` | `array` of [`ExperimentalResourceDetector`](#experimentalresourcedetector) | `false` | If omitted, no resource detectors are enabled. | * `minItems`: `1`<br> | Configure resource detectors.<br>Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language. <br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `attributes` | not_implemented | unknown | supported | unknown |
| `detectors` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Resource.detection/development`](#resource)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.yaml)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attributes": {
      "$ref": "#/$defs/IncludeExclude"
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
> This type is [experimental](VERSIONING.md#experimental-features).

`ExperimentalResourceDetector` is an [SDK extension plugin](#sdk-extension-plugins).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `container` | [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | `false` | If omitted, ignore. | No constraints. | Enable the container resource detector, which populates container.* attributes.<br> |
| `host` | [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | `false` | If omitted, ignore. | No constraints. | Enable the host resource detector, which populates host.* and os.* attributes.<br> |
| `process` | [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | `false` | If omitted, ignore. | No constraints. | Enable the process resource detector, which populates process.* attributes.<br> |
| `service` | [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | `false` | If omitted, ignore. | No constraints. | Enable the service detector, which populates service.name based on the OTEL_SERVICE_NAME environment variable and service.instance.id.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `container` | not_implemented | unknown | supported | unknown |
| `host` | not_implemented | unknown | supported | unknown |
| `process` | not_implemented | unknown | supported | unknown |
| `service` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
* `minProperties`: `1`
* `maxProperties`: `1`

Usages:

* [`ExperimentalResourceDetection.detectors`](#experimentalresourcedetection)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

No properties.

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalResourceDetector.service`](#experimentalresourcedetector)

No snippets.

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

## ExperimentalSpanParent <a id="experimentalspanparent"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

This is a enum type.

| Value | Description |
|---|---|
| `local` | local, a local parent. |
| `none` | none, no parent, i.e., the trace root. |
| `remote` | remote, a remote parent. |

<details>
<summary>Language support status</summary>

| Value | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `local` | unknown | unknown | unknown | unknown |
| `none` | unknown | unknown | unknown | unknown |
| `remote` | unknown | unknown | unknown | unknown |
</details>

No constraints.

Usages:

* [`ExperimentalComposableRuleBasedSamplerRule.parent`](#experimentalcomposablerulebasedsamplerrule)

No snippets.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/tracer_provider.yaml)
<pre>{
  "type": [
    "string",
    "null"
  ],
  "enum": [
    "none",
    "remote",
    "local"
  ]
}</pre>
</details>

## ExperimentalTracerConfig <a id="experimentaltracerconfig"></a>

> [!WARNING]
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `disabled` | `boolean` | `false` | If omitted, false is used. | No constraints. | Configure if the tracer is enabled or not. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `disabled` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalTracerConfigurator.default_config`](#experimentaltracerconfigurator)
* [`ExperimentalTracerMatcherAndConfig.config`](#experimentaltracermatcherandconfig)

No snippets.

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `default_config` | [`ExperimentalTracerConfig`](#experimentaltracerconfig) | `false` | If omitted, unmatched .tracers use default values as described in ExperimentalTracerConfig. | No constraints. | Configure the default tracer config used there is no matching entry in .tracer_configurator/development.tracers. |
| `tracers` | `array` of [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | `false` | If omitted, all tracers use .default_config. | * `minItems`: `1`<br> | Configure tracers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `default_config` | not_implemented | unknown | supported | unknown |
| `tracers` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`TracerProvider.tracer_configurator/development`](#tracerprovider)

Snippets:

<details>
<summary>Kitchen Sink</summary>

[Snippet Source File](./snippets/ExperimentalTracerConfigurator_kitchen_sink.yaml)
```yaml
default_config:
  disabled: true
tracers:
  - name: io.opentelemetry.contrib.*
    config:
      disabled: false
```
</details>

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
> This type is [experimental](VERSIONING.md#experimental-features).

| Property | Type | Required? | Default and Null Behavior | Constraints | Description |
|---|---|---|---|---|---|
| `config` | [`ExperimentalTracerConfig`](#experimentaltracerconfig) | `true` | Property is required and must be non-null. | No constraints. | The tracer config. |
| `name` | `string` | `true` | Property is required and must be non-null. | No constraints. | Configure tracer names to match, evaluated as follows:<br><br> * If the tracer name exactly matches.<br> * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> |

<details>
<summary>Language support status</summary>

| Property | [cpp](language-support-status.md#cpp) | [go](language-support-status.md#go) | [java](language-support-status.md#java) | [js](language-support-status.md#js) |
|---|---|---|---|---|
| `config` | not_implemented | unknown | supported | unknown |
| `name` | not_implemented | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["name","config"]`

Usages:

* [`ExperimentalTracerConfigurator.tracers`](#experimentaltracerconfigurator)

No snippets.

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
