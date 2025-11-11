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
| `explicit_bucket_histogram` | [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | `false` | No constraints. | TODO |
| `base2_exponential_bucket_histogram` | [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | `false` | No constraints. | TODO |
| `last_value` | [`LastValueAggregation`](#lastvalueaggregation) | `false` | No constraints. | TODO |
| `sum` | [`SumAggregation`](#sumaggregation) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default` | supported | unknown | supported | unknown |
| `drop` | supported | unknown | supported | unknown |
| `explicit_bucket_histogram` | supported | unknown | supported | unknown |
| `base2_exponential_bucket_histogram` | supported | unknown | supported | unknown |
| `last_value` | supported | unknown | supported | unknown |
| `sum` | supported | unknown | supported | unknown |
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
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute value size.<br> Value must be non-negative.<br> If omitted or null, there is no limit. |
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute count.<br> Value must be non-negative.<br> If omitted or null, 128 is used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_value_length_limit` | supported | unknown | supported | unknown |
| `attribute_count_limit` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`OpenTelemetryConfiguration.attribute_limits`](#opentelemetryconfiguration)

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/opentelemetry_configuration.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "attribute_value_length_limit": {
      "description": "Configure max attribute value size.\n Value must be non-negative.\n If omitted or null, there is no limit.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "attribute_count_limit": {
      "description": "Configure max attribute count.\n Value must be non-negative.\n If omitted or null, 128 is used.",
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
| `name` | `string` | `true` | No constraints. | The attribute name. |
| `value` | `oneOf` | `true` | No constraints. | The attribute value.<br> The type of value must match .type. |
| `type` | [`AttributeType`](#attributetype) | `false` | No constraints. | The attribute type.<br> Values include: string, bool, int, double, string_array, bool_array, int_array, double_array.<br> If omitted or null, string is used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `name` | supported | unknown | supported | unknown |
| `value` | supported | unknown | supported | unknown |
| `type` | supported | unknown | supported | unknown |
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
      "description": "The attribute name.",
      "type": "string"
    },
    "value": {
      "description": "The attribute value.\n The type of value must match .type.",
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
      "description": "The attribute type.\n Values include: string, bool, int, double, string_array, bool_array, int_array, double_array.\n If omitted or null, string is used.",
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

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `max_scale` | supported | unknown | supported | unknown |
| `max_size` | supported | unknown | supported | unknown |
| `record_min_max` | supported | unknown | not_implemented | unknown |
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
| `schedule_delay` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between two consecutive exports. <br> Value must be non-negative.<br> If omitted or null, 1000 is used. |
| `export_timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data. <br> Value must be non-negative. A value of 0 indicates no limit (infinity).<br> If omitted or null, 30000 is used. |
| `max_queue_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum queue size. Value must be positive.<br> If omitted or null, 2048 is used. |
| `max_export_batch_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum batch size. Value must be positive.<br> If omitted or null, 512 is used. |
| `exporter` | [`LogRecordExporter`](#logrecordexporter) | `true` | No constraints. | Configure exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `schedule_delay` | supported | unknown | supported | unknown |
| `export_timeout` | supported | unknown | supported | unknown |
| `max_queue_size` | supported | unknown | supported | unknown |
| `max_export_batch_size` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
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
      "description": "Configure delay interval (in milliseconds) between two consecutive exports. \n Value must be non-negative.\n If omitted or null, 1000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "export_timeout": {
      "description": "Configure maximum allowed time (in milliseconds) to export data. \n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 30000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "max_queue_size": {
      "description": "Configure maximum queue size. Value must be positive.\n If omitted or null, 2048 is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "max_export_batch_size": {
      "description": "Configure maximum batch size. Value must be positive.\n If omitted or null, 512 is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "exporter": {
      "description": "Configure exporter.",
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
| `schedule_delay` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between two consecutive exports.<br> Value must be non-negative.<br> If omitted or null, 5000 is used. |
| `export_timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data.<br> Value must be non-negative. A value of 0 indicates no limit (infinity).<br> If omitted or null, 30000 is used. |
| `max_queue_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum queue size. Value must be positive.<br> If omitted or null, 2048 is used. |
| `max_export_batch_size` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure maximum batch size. Value must be positive.<br> If omitted or null, 512 is used. |
| `exporter` | [`SpanExporter`](#spanexporter) | `true` | No constraints. | Configure exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `schedule_delay` | supported | unknown | supported | unknown |
| `export_timeout` | supported | unknown | supported | unknown |
| `max_queue_size` | supported | unknown | supported | unknown |
| `max_export_batch_size` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
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
      "description": "Configure delay interval (in milliseconds) between two consecutive exports.\n Value must be non-negative.\n If omitted or null, 5000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "export_timeout": {
      "description": "Configure maximum allowed time (in milliseconds) to export data.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 30000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "max_queue_size": {
      "description": "Configure maximum queue size. Value must be positive.\n If omitted or null, 2048 is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "max_export_batch_size": {
      "description": "Configure maximum batch size. Value must be positive.\n If omitted or null, 512 is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "exporter": {
      "description": "Configure exporter.",
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
| `default` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for all instrument types.<br> Instrument-specific cardinality limits take priority.<br> If omitted or null, 2000 is used. |
| `counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for counter instruments.<br> If omitted or null, the value from .default is used. |
| `gauge` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for gauge instruments.<br> If omitted or null, the value from .default is used. |
| `histogram` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for histogram instruments.<br> If omitted or null, the value from .default is used. |
| `observable_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_counter instruments.<br> If omitted or null, the value from .default is used. |
| `observable_gauge` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_gauge instruments.<br> If omitted or null, the value from .default is used. |
| `observable_up_down_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for observable_up_down_counter instruments.<br> If omitted or null, the value from .default is used. |
| `up_down_counter` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | Configure default cardinality limit for up_down_counter instruments.<br> If omitted or null, the value from .default is used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default` | not_implemented | unknown | supported | unknown |
| `counter` | not_implemented | unknown | supported | unknown |
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

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/meter_provider.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "default": {
      "description": "Configure default cardinality limit for all instrument types.\n Instrument-specific cardinality limits take priority.\n If omitted or null, 2000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "counter": {
      "description": "Configure default cardinality limit for counter instruments.\n If omitted or null, the value from .default is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "gauge": {
      "description": "Configure default cardinality limit for gauge instruments.\n If omitted or null, the value from .default is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "histogram": {
      "description": "Configure default cardinality limit for histogram instruments.\n If omitted or null, the value from .default is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "observable_counter": {
      "description": "Configure default cardinality limit for observable_counter instruments.\n If omitted or null, the value from .default is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "observable_gauge": {
      "description": "Configure default cardinality limit for observable_gauge instruments.\n If omitted or null, the value from .default is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "observable_up_down_counter": {
      "description": "Configure default cardinality limit for observable_up_down_counter instruments.\n If omitted or null, the value from .default is used.",
      "type": [
        "integer",
        "null"
      ],
      "exclusiveMinimum": 0
    },
    "up_down_counter": {
      "description": "Configure default cardinality limit for up_down_counter instruments.\n If omitted or null, the value from .default is used.",
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
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | TODO |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `temporality_preference` | supported | unknown | ignored | unknown |
| `default_histogram_aggregation` | supported | unknown | not_implemented | unknown |
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
| `always_off` | not_implemented | unknown | supported | unknown |
| `always_on` | not_implemented | unknown | supported | unknown |
| `trace_based` | not_implemented | unknown | supported | unknown |
</details>

No constraints.

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

[JSON Schema Source File](./schema/tracer_provider.json)
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

[JSON Schema Source File](./schema/tracer_provider.json)
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
| `root` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | TODO |
| `remote_parent_sampled` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | TODO |
| `remote_parent_not_sampled` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | TODO |
| `local_parent_sampled` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | TODO |
| `local_parent_not_sampled` | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `root` | unknown | unknown | unknown | unknown |
| `remote_parent_sampled` | unknown | unknown | unknown | unknown |
| `remote_parent_not_sampled` | unknown | unknown | unknown | unknown |
| `local_parent_sampled` | unknown | unknown | unknown | unknown |
| `local_parent_not_sampled` | unknown | unknown | unknown | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`ExperimentalComposableSampler.parent_based`](#experimentalcomposablesampler)

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
| `ratio` | one of:<br>* `number`<br>* `null`<br> | `false` | * `minimum`: `0`<br>* `maximum`: `1`<br> | TODO |

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

## ExperimentalComposableSampler <a id="experimentalcomposablesampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `always_off` | [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | `false` | No constraints. | Configure sampler to be always_off. |
| `always_on` | [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | `false` | No constraints. | Configure sampler to be always_on. |
| `probability` | [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | `false` | No constraints. | Configure sampler to be probability. |
| `parent_based` | [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | `false` | No constraints. | Configure sampler to be parent_based. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `always_off` | unknown | unknown | unknown | unknown |
| `always_on` | unknown | unknown | unknown | unknown |
| `probability` | unknown | unknown | unknown | unknown |
| `parent_based` | unknown | unknown | unknown | unknown |
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
      "description": "Configure sampler to be always_off.",
      "$ref": "#/$defs/ExperimentalComposableAlwaysOffSampler"
    },
    "always_on": {
      "description": "Configure sampler to be always_on.",
      "$ref": "#/$defs/ExperimentalComposableAlwaysOnSampler"
    },
    "parent_based": {
      "description": "Configure sampler to be parent_based.",
      "$ref": "#/$defs/ExperimentalComposableParentBasedSampler"
    },
    "probability": {
      "description": "Configure sampler to be probability.",
      "$ref": "#/$defs/ExperimentalComposableProbabilitySampler"
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
| `peer` | [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | `false` | No constraints. | TODO |
| `http` | [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `peer` | not_applicable | unknown | supported | unknown |
| `http` | not_applicable | unknown | supported | unknown |
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
| `request_captured_headers` | `array` of `string` | `false` | No constraints. | TODO |
| `response_captured_headers` | `array` of `string` | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `request_captured_headers` | not_applicable | unknown | supported | unknown |
| `response_captured_headers` | not_applicable | unknown | supported | unknown |
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
| `client` | [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | `false` | No constraints. | TODO |
| `server` | [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `client` | not_applicable | unknown | supported | unknown |
| `server` | not_applicable | unknown | supported | unknown |
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
| `request_captured_headers` | `array` of `string` | `false` | No constraints. | TODO |
| `response_captured_headers` | `array` of `string` | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `request_captured_headers` | not_applicable | unknown | supported | unknown |
| `response_captured_headers` | not_applicable | unknown | supported | unknown |
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
| `general` | [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | `false` | No constraints. | TODO |
| `cpp` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `dotnet` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `erlang` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `go` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `java` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `js` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `php` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `python` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `ruby` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `rust` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |
| `swift` | [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `general` | not_applicable | unknown | supported | unknown |
| `cpp` | not_applicable | unknown | not_applicable | unknown |
| `dotnet` | not_applicable | unknown | not_applicable | unknown |
| `erlang` | not_applicable | unknown | not_applicable | unknown |
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

## ExperimentalJaegerRemoteSampler <a id="experimentaljaegerremotesampler"></a>

> [!WARNING]
> This type is [experimental](README.md#experimental-features).

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `interval` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | TODO |
| `initial_sampler` | [`Sampler`](#sampler) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `endpoint` | not_implemented | unknown | ignored | unknown |
| `interval` | not_implemented | unknown | ignored | unknown |
| `initial_sampler` | not_implemented | unknown | ignored | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`

Usages:

* [`Sampler.jaeger_remote/development`](#sampler)

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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `disabled` | not_implemented | unknown | supported | unknown |
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
      "description": "Configure if the logger is enabled or not.",
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_config` | not_implemented | unknown | supported | unknown |
| `loggers` | not_implemented | unknown | supported | unknown |
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
      "description": "Configure the default logger config used there is no matching entry in .logger_configurator/development.loggers.",
      "$ref": "#/$defs/ExperimentalLoggerConfig"
    },
    "loggers": {
      "description": "Configure loggers.",
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
| `name` | `string` | `false` | No constraints. | Configure logger names to match, evaluated as follows:<br> * If the logger name exactly matches.<br> * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none. |
| `config` | [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | `false` | No constraints. | The logger config. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `name` | not_implemented | unknown | supported | unknown |
| `config` | not_implemented | unknown | supported | unknown |
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
      "description": "Configure logger names to match, evaluated as follows:\n * If the logger name exactly matches.\n * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.",
      "type": [
        "string"
      ]
    },
    "config": {
      "description": "The logger config.",
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
| `disabled` | `boolean` | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `disabled` | not_implemented | unknown | supported | unknown |
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
| `default_config` | [`ExperimentalMeterConfig`](#experimentalmeterconfig) | `false` | No constraints. | TODO |
| `meters` | `array` of [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_config` | not_implemented | unknown | supported | unknown |
| `meters` | not_implemented | unknown | supported | unknown |
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
| `name` | `string` | `false` | No constraints. | TODO |
| `config` | [`ExperimentalMeterConfig`](#experimentalmeterconfig) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `name` | not_implemented | unknown | supported | unknown |
| `config` | not_implemented | unknown | supported | unknown |
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
| `output_stream` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure output stream.<br> Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.<br> If omitted or null, stdout is used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `output_stream` | supported | unknown | not_implemented | unknown |
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
      "description": "Configure output stream.\n Values include stdout, or scheme+destination. For example: file:///path/to/file.jsonl.\n If omitted or null, stdout is used.",
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
| `output_stream` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | TODO |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `output_stream` | supported | unknown | not_implemented | unknown |
| `temporality_preference` | supported | unknown | supported | unknown |
| `default_histogram_aggregation` | supported | unknown | supported | unknown |
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
| `service_mapping` | `array` of [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `service_mapping` | not_implemented | unknown | supported | unknown |
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
| `peer` | `string` | `true` | No constraints. | TODO |
| `service` | `string` | `true` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `peer` | not_implemented | unknown | supported | unknown |
| `service` | not_implemented | unknown | supported | unknown |
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
| `ratio` | one of:<br>* `number`<br>* `null`<br> | `false` | * `minimum`: `0`<br>* `maximum`: `1`<br> | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ratio` | not_implemented | unknown | ignored | unknown |
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
| `host` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `port` | one of:<br>* `integer`<br>* `null`<br> | `false` | No constraints. | TODO |
| `without_scope_info` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | TODO |
| `with_resource_constant_labels` | [`IncludeExclude`](#includeexclude) | `false` | No constraints. | TODO |
| `translation_strategy` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `host` | supported | unknown | supported | unknown |
| `port` | supported | unknown | supported | unknown |
| `without_scope_info` | supported | unknown | ignored | unknown |
| `with_resource_constant_labels` | supported | unknown | supported | unknown |
| `translation_strategy` | supported | unknown | not_implemented | unknown |
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
| `detectors` | `array` of [`ExperimentalResourceDetector`](#experimentalresourcedetector) | `false` | No constraints. | Configure resource detectors.<br> Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language.<br> If omitted or null, no resource detectors are enabled. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attributes` | not_implemented | unknown | supported | unknown |
| `detectors` | not_implemented | unknown | supported | unknown |
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
      "description": "Configure attributes provided by resource detectors.",
      "$ref": "common.json#/$defs/IncludeExclude"
    },
    "detectors": {
      "description": "Configure resource detectors.\n Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language.\n If omitted or null, no resource detectors are enabled.",
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
| `container` | [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | `false` | No constraints. | Enable the container resource detector, which populates container.* attributes. |
| `host` | [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | `false` | No constraints. | Enable the host resource detector, which populates host.* and os.* attributes. |
| `process` | [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | `false` | No constraints. | Enable the process resource detector, which populates process.* attributes. |
| `service` | [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | `false` | No constraints. | Enable the service detector, which populates service.name based on the OTEL_SERVICE_NAME environment variable and service.instance.id. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
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
      "description": "Enable the container resource detector, which populates container.* attributes.",
      "$ref": "#/$defs/ExperimentalContainerResourceDetector"
    },
    "host": {
      "description": "Enable the host resource detector, which populates host.* and os.* attributes.",
      "$ref": "#/$defs/ExperimentalHostResourceDetector"
    },
    "process": {
      "description": "Enable the process resource detector, which populates process.* attributes.",
      "$ref": "#/$defs/ExperimentalProcessResourceDetector"
    },
    "service": {
      "description": "Enable the service detector, which populates service.name based on the OTEL_SERVICE_NAME environment variable and service.instance.id.",
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `disabled` | not_implemented | unknown | supported | unknown |
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
      "description": "Configure if the tracer is enabled or not.",
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `default_config` | not_implemented | unknown | supported | unknown |
| `tracers` | not_implemented | unknown | supported | unknown |
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
      "description": "Configure the default tracer config used there is no matching entry in .tracer_configurator/development.tracers.",
      "$ref": "#/$defs/ExperimentalTracerConfig"
    },
    "tracers": {
      "description": "Configure tracers.",
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
| `name` | `string` | `false` | No constraints. | Configure tracer names to match, evaluated as follows:<br> <br> * If the tracer name exactly matches.<br> * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none. |
| `config` | [`ExperimentalTracerConfig`](#experimentaltracerconfig) | `false` | No constraints. | The tracer config. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `name` | not_implemented | unknown | supported | unknown |
| `config` | not_implemented | unknown | supported | unknown |
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
      "description": "Configure tracer names to match, evaluated as follows:\n \n * If the tracer name exactly matches.\n * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.",
      "type": [
        "string"
      ]
    },
    "config": {
      "description": "The tracer config.",
      "$ref": "#/$defs/ExperimentalTracerConfig"
    }
  }
}</pre>
</details>

## ExplicitBucketHistogramAggregation <a id="explicitbuckethistogramaggregation"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `boundaries` | `array` of `number` | `false` | No constraints. | TODO |
| `record_min_max` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `boundaries` | supported | unknown | supported | unknown |
| `record_min_max` | supported | unknown | not_implemented | unknown |
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

This is a enum type.

| Value | Description |
|---|---|
| `base2_exponential_bucket_histogram` | TODO |
| `explicit_bucket_histogram` | TODO |

<details>
<summary>Language support status</summary>

| Value | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
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
| `certificate_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure certificate used to verify a server's TLS credentials.<br> Absolute path to certificate file in PEM format.<br> If omitted or null, system default certificate verification is used for secure connections. |
| `client_key_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS private client key.<br> Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br> If omitted or null, mTLS is not used. |
| `client_certificate_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS client certificate.<br> Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br> If omitted or null, mTLS is not used. |
| `insecure` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure client transport security for the exporter's connection.<br> Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.<br> If omitted or null, false is used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `certificate_file` | unknown | unknown | not_implemented | unknown |
| `client_key_file` | unknown | unknown | not_implemented | unknown |
| `client_certificate_file` | unknown | unknown | not_implemented | unknown |
| `insecure` | unknown | unknown | not_implemented | unknown |
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
      "description": "Configure certificate used to verify a server's TLS credentials.\n Absolute path to certificate file in PEM format.\n If omitted or null, system default certificate verification is used for secure connections.",
      "type": [
        "string",
        "null"
      ]
    },
    "client_key_file": {
      "description": "Configure mTLS private client key.\n Absolute path to client key file in PEM format. If set, .client_certificate must also be set.\n If omitted or null, mTLS is not used.",
      "type": [
        "string",
        "null"
      ]
    },
    "client_certificate_file": {
      "description": "Configure mTLS client certificate.\n Absolute path to client certificate file in PEM format. If set, .client_key must also be set.\n If omitted or null, mTLS is not used.",
      "type": [
        "string",
        "null"
      ]
    },
    "insecure": {
      "description": "Configure client transport security for the exporter's connection.\n Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.\n If omitted or null, false is used.",
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
| `certificate_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure certificate used to verify a server's TLS credentials.<br> Absolute path to certificate file in PEM format.<br> If omitted or null, system default certificate verification is used for secure connections. |
| `client_key_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS private client key.<br> Absolute path to client key file in PEM format. If set, .client_certificate must also be set.<br> If omitted or null, mTLS is not used. |
| `client_certificate_file` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure mTLS client certificate.<br> Absolute path to client certificate file in PEM format. If set, .client_key must also be set.<br> If omitted or null, mTLS is not used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `certificate_file` | unknown | unknown | not_implemented | unknown |
| `client_key_file` | unknown | unknown | not_implemented | unknown |
| `client_certificate_file` | unknown | unknown | not_implemented | unknown |
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
      "description": "Configure certificate used to verify a server's TLS credentials.\n Absolute path to certificate file in PEM format.\n If omitted or null, system default certificate verification is used for secure connections.",
      "type": [
        "string",
        "null"
      ]
    },
    "client_key_file": {
      "description": "Configure mTLS private client key.\n Absolute path to client key file in PEM format. If set, .client_certificate must also be set.\n If omitted or null, mTLS is not used.",
      "type": [
        "string",
        "null"
      ]
    },
    "client_certificate_file": {
      "description": "Configure mTLS client certificate.\n Absolute path to client certificate file in PEM format. If set, .client_key must also be set.\n If omitted or null, mTLS is not used.",
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
| `included` | `array` of `string` | `false` | No constraints. | Configure list of value patterns to include.<br> Values are evaluated to match as follows:<br>     * If the value exactly matches.<br>     * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> If omitted, all values are included. |
| `excluded` | `array` of `string` | `false` | No constraints. | Configure list of value patterns to exclude. Applies after .included (i.e. excluded has higher priority than included).<br> Values are evaluated to match as follows:<br> * If the value exactly matches.<br> * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> If omitted, .included attributes are included. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `included` | supported | unknown | supported | unknown |
| `excluded` | supported | unknown | supported | unknown |
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
      "description": "Configure list of value patterns to include.\n Values are evaluated to match as follows:\n     * If the value exactly matches.\n     * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.\n If omitted, all values are included.",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "excluded": {
      "description": "Configure list of value patterns to exclude. Applies after .included (i.e. excluded has higher priority than included).\n Values are evaluated to match as follows:\n * If the value exactly matches.\n * If the value matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.\n If omitted, .included attributes are included.",
      "type": "array",
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
| `processors` | `array` of [`LogRecordProcessor`](#logrecordprocessor) | `true` | * `minItems`: `1`<br> | Configure log record processors. |
| `limits` | [`LogRecordLimits`](#logrecordlimits) | `false` | No constraints. | Configure log record limits. See also attribute_limits. |
| `logger_configurator/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | `false` | No constraints. | Configure loggers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `processors` | supported | unknown | supported | unknown |
| `limits` | supported | unknown | supported | unknown |
| `logger_configurator/development` | supported | unknown | supported | unknown |
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
      "description": "Configure log record processors.",
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/LogRecordProcessor"
      }
    },
    "limits": {
      "description": "Configure log record limits. See also attribute_limits.",
      "$ref": "#/$defs/LogRecordLimits"
    },
    "logger_configurator/development": {
      "description": "Configure loggers.",
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
          "description": "Configure exporter.",
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
          "description": "Configure delay interval (in milliseconds) between two consecutive exports. \n Value must be non-negative.\n If omitted or null, 1000 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "export_timeout": {
          "description": "Configure maximum allowed time (in milliseconds) to export data. \n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 30000 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "max_queue_size": {
          "description": "Configure maximum queue size. Value must be positive.\n If omitted or null, 2048 is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "max_export_batch_size": {
          "description": "Configure maximum batch size. Value must be positive.\n If omitted or null, 512 is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "exporter": {
          "description": "Configure exporter.",
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
          "description": "Configure exporter to be OTLP with HTTP transport.",
          "$ref": "common.json#/$defs/OtlpHttpExporter"
        },
        "otlp_grpc": {
          "description": "Configure exporter to be OTLP with gRPC transport.",
          "$ref": "common.json#/$defs/OtlpGrpcExporter"
        },
        "otlp_file/development": {
          "description": "Configure exporter to be OTLP with file transport.",
          "$ref": "common.json#/$defs/ExperimentalOtlpFileExporter"
        },
        "console": {
          "description": "Configure exporter to be console.",
          "$ref": "common.json#/$defs/ConsoleExporter"
        }
      }
    },
    "LogRecordLimits": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "attribute_value_length_limit": {
          "description": "Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit.\n Value must be non-negative.\n If omitted or null, there is no limit.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "attribute_count_limit": {
          "description": "Configure max attribute count. Overrides .attribute_limits.attribute_count_limit.\n Value must be non-negative.\n If omitted or null, 128 is used.",
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
          "description": "Configure a batch log record processor.",
          "$ref": "#/$defs/BatchLogRecordProcessor"
        },
        "simple": {
          "description": "Configure a simple log record processor.",
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
          "description": "Configure the default logger config used there is no matching entry in .logger_configurator/development.loggers.",
          "$ref": "#/$defs/ExperimentalLoggerConfig"
        },
        "loggers": {
          "description": "Configure loggers.",
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
          "description": "Configure logger names to match, evaluated as follows:\n * If the logger name exactly matches.\n * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.",
          "type": [
            "string"
          ]
        },
        "config": {
          "description": "The logger config.",
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
          "description": "Configure if the logger is enabled or not.",
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
| `otlp_file/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` | No constraints. | Configure exporter to be OTLP with file transport. |
| `console` | [`ConsoleExporter`](#consoleexporter) | `false` | No constraints. | Configure exporter to be console. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `otlp_http` | supported | unknown | supported | unknown |
| `otlp_grpc` | supported | unknown | supported | unknown |
| `otlp_file/development` | supported | unknown | supported | unknown |
| `console` | supported | unknown | supported | unknown |
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
      "description": "Configure exporter to be OTLP with HTTP transport.",
      "$ref": "common.json#/$defs/OtlpHttpExporter"
    },
    "otlp_grpc": {
      "description": "Configure exporter to be OTLP with gRPC transport.",
      "$ref": "common.json#/$defs/OtlpGrpcExporter"
    },
    "otlp_file/development": {
      "description": "Configure exporter to be OTLP with file transport.",
      "$ref": "common.json#/$defs/ExperimentalOtlpFileExporter"
    },
    "console": {
      "description": "Configure exporter to be console.",
      "$ref": "common.json#/$defs/ConsoleExporter"
    }
  }
}</pre>
</details>

## LogRecordLimits <a id="logrecordlimits"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit.<br> Value must be non-negative.<br> If omitted or null, there is no limit. |
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit.<br> Value must be non-negative.<br> If omitted or null, 128 is used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_value_length_limit` | supported | unknown | supported | unknown |
| `attribute_count_limit` | supported | unknown | supported | unknown |
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
      "description": "Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit.\n Value must be non-negative.\n If omitted or null, there is no limit.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "attribute_count_limit": {
      "description": "Configure max attribute count. Overrides .attribute_limits.attribute_count_limit.\n Value must be non-negative.\n If omitted or null, 128 is used.",
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
| `batch` | supported | unknown | supported | unknown |
| `simple` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `{"type":["object","null"]}`
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
      "object",
      "null"
    ]
  },
  "minProperties": 1,
  "maxProperties": 1,
  "properties": {
    "batch": {
      "description": "Configure a batch log record processor.",
      "$ref": "#/$defs/BatchLogRecordProcessor"
    },
    "simple": {
      "description": "Configure a simple log record processor.",
      "$ref": "#/$defs/SimpleLogRecordProcessor"
    }
  }
}</pre>
</details>

## MeterProvider <a id="meterprovider"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `readers` | `array` of [`MetricReader`](#metricreader) | `true` | * `minItems`: `1`<br> | Configure metric readers. |
| `views` | `array` of [`View`](#view) | `false` | No constraints. | Configure views.<br> Each view has a selector which determines the instrument(s) it applies to, and a configuration for the resulting stream(s). |
| `exemplar_filter` | [`ExemplarFilter`](#exemplarfilter) | `false` | No constraints. | Configure the exemplar filter.<br> Values include: trace_based, always_on, always_off. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#metrics-sdk-configuration.<br> If omitted or null, trace_based is used. |
| `meter_configurator/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | `false` | No constraints. | Configure meters. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `readers` | supported | unknown | supported | unknown |
| `views` | supported | unknown | supported | unknown |
| `exemplar_filter` | supported | unknown | supported | unknown |
| `meter_configurator/development` | supported | unknown | supported | unknown |
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
      "description": "Configure metric readers.",
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/MetricReader"
      }
    },
    "views": {
      "description": "Configure views.\n Each view has a selector which determines the instrument(s) it applies to, and a configuration for the resulting stream(s).",
      "type": "array",
      "items": {
        "$ref": "#/$defs/View"
      }
    },
    "exemplar_filter": {
      "description": "Configure the exemplar filter.\n Values include: trace_based, always_on, always_off. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#metrics-sdk-configuration.\n If omitted or null, trace_based is used.",
      "$ref": "#/$defs/ExemplarFilter"
    },
    "meter_configurator/development": {
      "description": "Configure meters.",
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
          "description": "Configure delay interval (in milliseconds) between start of two consecutive exports.\n Value must be non-negative.\n If omitted or null, 60000 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "timeout": {
          "description": "Configure maximum allowed time (in milliseconds) to export data.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 30000 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "exporter": {
          "description": "Configure exporter.",
          "$ref": "#/$defs/PushMetricExporter"
        },
        "producers": {
          "description": "Configure metric producers.",
          "type": "array",
          "items": {
            "$ref": "#/$defs/MetricProducer"
          }
        },
        "cardinality_limits": {
          "description": "Configure cardinality limits.",
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
          "description": "Configure exporter.",
          "$ref": "#/$defs/PullMetricExporter"
        },
        "producers": {
          "description": "Configure metric producers.",
          "type": "array",
          "items": {
            "$ref": "#/$defs/MetricProducer"
          }
        },
        "cardinality_limits": {
          "description": "Configure cardinality limits.",
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
          "description": "Configure default cardinality limit for all instrument types.\n Instrument-specific cardinality limits take priority.\n If omitted or null, 2000 is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "counter": {
          "description": "Configure default cardinality limit for counter instruments.\n If omitted or null, the value from .default is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "gauge": {
          "description": "Configure default cardinality limit for gauge instruments.\n If omitted or null, the value from .default is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "histogram": {
          "description": "Configure default cardinality limit for histogram instruments.\n If omitted or null, the value from .default is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "observable_counter": {
          "description": "Configure default cardinality limit for observable_counter instruments.\n If omitted or null, the value from .default is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "observable_gauge": {
          "description": "Configure default cardinality limit for observable_gauge instruments.\n If omitted or null, the value from .default is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "observable_up_down_counter": {
          "description": "Configure default cardinality limit for observable_up_down_counter instruments.\n If omitted or null, the value from .default is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "up_down_counter": {
          "description": "Configure default cardinality limit for up_down_counter instruments.\n If omitted or null, the value from .default is used.",
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
          "description": "Configure exporter to be OTLP with HTTP transport.",
          "$ref": "#/$defs/OtlpHttpMetricExporter"
        },
        "otlp_grpc": {
          "description": "Configure exporter to be OTLP with gRPC transport.",
          "$ref": "#/$defs/OtlpGrpcMetricExporter"
        },
        "otlp_file/development": {
          "description": "Configure exporter to be OTLP with file transport.",
          "$ref": "#/$defs/ExperimentalOtlpFileMetricExporter"
        },
        "console": {
          "description": "Configure exporter to be console.",
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
          "description": "Configure a periodic metric reader.",
          "$ref": "#/$defs/PeriodicMetricReader"
        },
        "pull": {
          "description": "Configure a pull based metric reader.",
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
          "description": "Configure endpoint, including the signal specific path.\n If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.",
          "type": [
            "string",
            "null"
          ]
        },
        "tls": {
          "description": "Configure TLS settings for the exporter.",
          "$ref": "common.json#/$defs/HttpTls"
        },
        "headers": {
          "description": "Configure headers. Entries have higher priority than entries from .headers_list.\n If an entry's .value is null, the entry is ignored.",
          "type": "array",
          "items": {
            "$ref": "common.json#/$defs/NameStringValuePair"
          }
        },
        "headers_list": {
          "description": "Configure headers. Entries have lower priority than entries from .headers.\n The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.\n If omitted or null, no headers are added.",
          "type": [
            "string",
            "null"
          ]
        },
        "compression": {
          "description": "Configure compression.\n Values include: gzip, none. Implementations may support other compression algorithms.\n If omitted or null, none is used.",
          "type": [
            "string",
            "null"
          ]
        },
        "timeout": {
          "description": "Configure max time (in milliseconds) to wait for each export.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 10000 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "encoding": {
          "description": "Configure the encoding used for messages. \n Values include: protobuf, json. Implementations may not support json.\n If omitted or null, protobuf is used.",
          "$ref": "common.json#/$defs/OtlpHttpEncoding"
        },
        "temporality_preference": {
          "description": "Configure temporality preference.\n Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.\n If omitted or null, cumulative is used.",
          "$ref": "#/$defs/ExporterTemporalityPreference"
        },
        "default_histogram_aggregation": {
          "description": "Configure default histogram aggregation.\n Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.\n If omitted or null, explicit_bucket_histogram is used.",
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
          "description": "Configure endpoint.\n If omitted or null, http://localhost:4317 is used.",
          "type": [
            "string",
            "null"
          ]
        },
        "tls": {
          "description": "Configure TLS settings for the exporter.",
          "$ref": "common.json#/$defs/GrpcTls"
        },
        "headers": {
          "description": "Configure headers. Entries have higher priority than entries from .headers_list.\n If an entry's .value is null, the entry is ignored.",
          "type": "array",
          "items": {
            "$ref": "common.json#/$defs/NameStringValuePair"
          }
        },
        "headers_list": {
          "description": "Configure headers. Entries have lower priority than entries from .headers.\n The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.\n If omitted or null, no headers are added.",
          "type": [
            "string",
            "null"
          ]
        },
        "compression": {
          "description": "Configure compression.\n Values include: gzip, none. Implementations may support other compression algorithms.\n If omitted or null, none is used.",
          "type": [
            "string",
            "null"
          ]
        },
        "timeout": {
          "description": "Configure max time (in milliseconds) to wait for each export.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 10000 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "temporality_preference": {
          "description": "Configure temporality preference.\n Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.\n If omitted or null, cumulative is used.",
          "$ref": "#/$defs/ExporterTemporalityPreference"
        },
        "default_histogram_aggregation": {
          "description": "Configure default histogram aggregation.\n Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.\n If omitted or null, explicit_bucket_histogram is used.",
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
| `opencensus` | [`OpenCensusMetricProducer`](#opencensusmetricproducer) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
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
      "description": "Configure a periodic metric reader.",
      "$ref": "#/$defs/PeriodicMetricReader"
    },
    "pull": {
      "description": "Configure a pull based metric reader.",
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

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/common.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "name": {
      "description": "The name of the pair.",
      "type": "string"
    },
    "value": {
      "description": "The value of the pair.",
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
| `file_format` | `string` | `true` | No constraints. | The file format version.<br> The yaml format is documented at<br> https://github.com/open-telemetry/opentelemetry-configuration/tree/main/schema |
| `disabled` | one of:<br>* `boolean`<br>* `null`<br> | `false` | No constraints. | Configure if the SDK is disabled or not.<br> If omitted or null, false is used. |
| `log_level` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure the log level of the internal logger used by the SDK.<br> If omitted, info is used. |
| `attribute_limits` | [`AttributeLimits`](#attributelimits) | `false` | No constraints. | Configure general attribute limits. See also tracer_provider.limits, logger_provider.limits. |
| `logger_provider` | [`LoggerProvider`](#loggerprovider) | `false` | No constraints. | Configure logger provider.<br> If omitted, a noop logger provider is used. |
| `meter_provider` | [`MeterProvider`](#meterprovider) | `false` | No constraints. | Configure meter provider.<br> If omitted, a noop meter provider is used. |
| `propagator` | [`Propagator`](#propagator) | `false` | No constraints. | Configure text map context propagators.<br> If omitted, a noop propagator is used. |
| `tracer_provider` | [`TracerProvider`](#tracerprovider) | `false` | No constraints. | Configure tracer provider.<br> If omitted, a noop tracer provider is used. |
| `resource` | [`Resource`](#resource) | `false` | No constraints. | Configure resource for all signals.<br> If omitted, the default resource is used. |
| `instrumentation/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalInstrumentation`](#experimentalinstrumentation) | `false` | No constraints. | Configure instrumentation. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `file_format` | supported | unknown | supported | unknown |
| `disabled` | supported | unknown | supported | unknown |
| `log_level` | supported | unknown | not_implemented | unknown |
| `attribute_limits` | supported | unknown | supported | unknown |
| `logger_provider` | supported | unknown | supported | unknown |
| `meter_provider` | supported | unknown | supported | unknown |
| `propagator` | supported | unknown | supported | unknown |
| `tracer_provider` | supported | unknown | supported | unknown |
| `resource` | supported | unknown | supported | unknown |
| `instrumentation/development` | supported | unknown | supported | unknown |
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
      "description": "The file format version.\n The yaml format is documented at\n https://github.com/open-telemetry/opentelemetry-configuration/tree/main/schema",
      "type": "string"
    },
    "disabled": {
      "description": "Configure if the SDK is disabled or not.\n If omitted or null, false is used.",
      "type": [
        "boolean",
        "null"
      ]
    },
    "log_level": {
      "description": "Configure the log level of the internal logger used by the SDK.\n If omitted, info is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "attribute_limits": {
      "description": "Configure general attribute limits. See also tracer_provider.limits, logger_provider.limits.",
      "$ref": "#/$defs/AttributeLimits"
    },
    "logger_provider": {
      "description": "Configure logger provider.\n If omitted, a noop logger provider is used.",
      "$ref": "#/$defs/LoggerProvider"
    },
    "meter_provider": {
      "description": "Configure meter provider.\n If omitted, a noop meter provider is used.",
      "$ref": "#/$defs/MeterProvider"
    },
    "propagator": {
      "description": "Configure text map context propagators.\n If omitted, a noop propagator is used.",
      "$ref": "#/$defs/Propagator"
    },
    "tracer_provider": {
      "description": "Configure tracer provider.\n If omitted, a noop tracer provider is used.",
      "$ref": "#/$defs/TracerProvider"
    },
    "resource": {
      "description": "Configure resource for all signals.\n If omitted, the default resource is used.",
      "$ref": "#/$defs/Resource"
    },
    "instrumentation/development": {
      "description": "Configure instrumentation.",
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
          "description": "Configure max attribute value size.\n Value must be non-negative.\n If omitted or null, there is no limit.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "attribute_count_limit": {
          "description": "Configure max attribute count.\n Value must be non-negative.\n If omitted or null, 128 is used.",
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
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint.<br> If omitted or null, http://localhost:4317 is used. |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | No constraints. | Configure headers. Entries have higher priority than entries from .headers_list.<br> If an entry's .value is null, the entry is ignored. |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br> The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br> If omitted or null, no headers are added. |
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br> Values include: gzip, none. Implementations may support other compression algorithms.<br> If omitted or null, none is used. |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br> Value must be non-negative. A value of 0 indicates no limit (infinity).<br> If omitted or null, 10000 is used. |
| `tls` | [`GrpcTls`](#grpctls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `compression` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
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
      "description": "Configure endpoint.\n If omitted or null, http://localhost:4317 is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "tls": {
      "description": "Configure TLS settings for the exporter.",
      "$ref": "#/$defs/GrpcTls"
    },
    "headers": {
      "description": "Configure headers. Entries have higher priority than entries from .headers_list.\n If an entry's .value is null, the entry is ignored.",
      "type": "array",
      "items": {
        "$ref": "#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "description": "Configure headers. Entries have lower priority than entries from .headers.\n The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.\n If omitted or null, no headers are added.",
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "description": "Configure compression.\n Values include: gzip, none. Implementations may support other compression algorithms.\n If omitted or null, none is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "description": "Configure max time (in milliseconds) to wait for each export.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 10000 is used.",
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
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint.<br> If omitted or null, http://localhost:4317 is used. |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | No constraints. | Configure headers. Entries have higher priority than entries from .headers_list.<br> If an entry's .value is null, the entry is ignored. |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br> The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br> If omitted or null, no headers are added. |
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br> Values include: gzip, none. Implementations may support other compression algorithms.<br> If omitted or null, none is used. |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br> Value must be non-negative. A value of 0 indicates no limit (infinity).<br> If omitted or null, 10000 is used. |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br> Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br> If omitted or null, cumulative is used. |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br> Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br> If omitted or null, explicit_bucket_histogram is used. |
| `tls` | [`GrpcTls`](#grpctls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `compression` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `temporality_preference` | supported | unknown | supported | unknown |
| `default_histogram_aggregation` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
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
      "description": "Configure endpoint.\n If omitted or null, http://localhost:4317 is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "tls": {
      "description": "Configure TLS settings for the exporter.",
      "$ref": "common.json#/$defs/GrpcTls"
    },
    "headers": {
      "description": "Configure headers. Entries have higher priority than entries from .headers_list.\n If an entry's .value is null, the entry is ignored.",
      "type": "array",
      "items": {
        "$ref": "common.json#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "description": "Configure headers. Entries have lower priority than entries from .headers.\n The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.\n If omitted or null, no headers are added.",
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "description": "Configure compression.\n Values include: gzip, none. Implementations may support other compression algorithms.\n If omitted or null, none is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "description": "Configure max time (in milliseconds) to wait for each export.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 10000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "temporality_preference": {
      "description": "Configure temporality preference.\n Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.\n If omitted or null, cumulative is used.",
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "description": "Configure default histogram aggregation.\n Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.\n If omitted or null, explicit_bucket_histogram is used.",
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
| `json` | supported | unknown | not_implemented | unknown |
| `protobuf` | supported | unknown | not_implemented | unknown |
</details>

No constraints.

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
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint, including the signal specific path.<br> If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used. |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | No constraints. | Configure headers. Entries have higher priority than entries from .headers_list.<br> If an entry's .value is null, the entry is ignored. |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br> The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br> If omitted or null, no headers are added. |
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br> Values include: gzip, none. Implementations may support other compression algorithms.<br> If omitted or null, none is used. |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br> Value must be non-negative. A value of 0 indicates no limit (infinity).<br> If omitted or null, 10000 is used. |
| `encoding` | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` | No constraints. | Configure the encoding used for messages. <br> Values include: protobuf, json. Implementations may not support json.<br> If omitted or null, protobuf is used. |
| `tls` | [`HttpTls`](#httptls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `compression` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `encoding` | supported | unknown | not_implemented | unknown |
| `tls` | supported | unknown | ignored | unknown |
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
      "description": "Configure endpoint, including the signal specific path.\n If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "tls": {
      "description": "Configure TLS settings for the exporter.",
      "$ref": "#/$defs/HttpTls"
    },
    "headers": {
      "description": "Configure headers. Entries have higher priority than entries from .headers_list.\n If an entry's .value is null, the entry is ignored.",
      "type": "array",
      "items": {
        "$ref": "#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "description": "Configure headers. Entries have lower priority than entries from .headers.\n The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.\n If omitted or null, no headers are added.",
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "description": "Configure compression.\n Values include: gzip, none. Implementations may support other compression algorithms.\n If omitted or null, none is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "description": "Configure max time (in milliseconds) to wait for each export.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 10000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "encoding": {
      "description": "Configure the encoding used for messages. \n Values include: protobuf, json. Implementations may not support json.\n If omitted or null, protobuf is used.",
      "$ref": "#/$defs/OtlpHttpEncoding"
    }
  }
}</pre>
</details>

## OtlpHttpMetricExporter <a id="otlphttpmetricexporter"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure endpoint, including the signal specific path.<br> If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used. |
| `headers` | `array` of [`NameStringValuePair`](#namestringvaluepair) | `false` | No constraints. | Configure headers. Entries have higher priority than entries from .headers_list.<br> If an entry's .value is null, the entry is ignored. |
| `headers_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure headers. Entries have lower priority than entries from .headers.<br> The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.<br> If omitted or null, no headers are added. |
| `compression` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure compression.<br> Values include: gzip, none. Implementations may support other compression algorithms.<br> If omitted or null, none is used. |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max time (in milliseconds) to wait for each export.<br> Value must be non-negative. A value of 0 indicates no limit (infinity).<br> If omitted or null, 10000 is used. |
| `encoding` | [`OtlpHttpEncoding`](#otlphttpencoding) | `false` | No constraints. | Configure the encoding used for messages. <br> Values include: protobuf, json. Implementations may not support json.<br> If omitted or null, protobuf is used. |
| `temporality_preference` | [`ExporterTemporalityPreference`](#exportertemporalitypreference) | `false` | No constraints. | Configure temporality preference.<br> Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br> If omitted or null, cumulative is used. |
| `default_histogram_aggregation` | [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | `false` | No constraints. | Configure default histogram aggregation.<br> Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.<br> If omitted or null, explicit_bucket_histogram is used. |
| `tls` | [`HttpTls`](#httptls) | `false` | No constraints. | Configure TLS settings for the exporter. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `endpoint` | supported | unknown | supported | unknown |
| `headers` | supported | unknown | supported | unknown |
| `headers_list` | supported | unknown | supported | unknown |
| `compression` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `encoding` | supported | unknown | not_implemented | unknown |
| `temporality_preference` | supported | unknown | supported | unknown |
| `default_histogram_aggregation` | supported | unknown | supported | unknown |
| `tls` | supported | unknown | ignored | unknown |
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
      "description": "Configure endpoint, including the signal specific path.\n If omitted or null, the http://localhost:4318/v1/{signal} (where signal is 'traces', 'logs', or 'metrics') is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "tls": {
      "description": "Configure TLS settings for the exporter.",
      "$ref": "common.json#/$defs/HttpTls"
    },
    "headers": {
      "description": "Configure headers. Entries have higher priority than entries from .headers_list.\n If an entry's .value is null, the entry is ignored.",
      "type": "array",
      "items": {
        "$ref": "common.json#/$defs/NameStringValuePair"
      }
    },
    "headers_list": {
      "description": "Configure headers. Entries have lower priority than entries from .headers.\n The value is a list of comma separated key-value pairs matching the format of OTEL_EXPORTER_OTLP_HEADERS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options for details.\n If omitted or null, no headers are added.",
      "type": [
        "string",
        "null"
      ]
    },
    "compression": {
      "description": "Configure compression.\n Values include: gzip, none. Implementations may support other compression algorithms.\n If omitted or null, none is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "timeout": {
      "description": "Configure max time (in milliseconds) to wait for each export.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 10000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "encoding": {
      "description": "Configure the encoding used for messages. \n Values include: protobuf, json. Implementations may not support json.\n If omitted or null, protobuf is used.",
      "$ref": "common.json#/$defs/OtlpHttpEncoding"
    },
    "temporality_preference": {
      "description": "Configure temporality preference.\n Values include: cumulative, delta, low_memory. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.\n If omitted or null, cumulative is used.",
      "$ref": "#/$defs/ExporterTemporalityPreference"
    },
    "default_histogram_aggregation": {
      "description": "Configure default histogram aggregation.\n Values include: explicit_bucket_histogram, base2_exponential_bucket_histogram. For behavior of values, see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk_exporters/otlp.md.\n If omitted or null, explicit_bucket_histogram is used.",
      "$ref": "#/$defs/ExporterDefaultHistogramAggregation"
    }
  }
}</pre>
</details>

## ParentBasedSampler <a id="parentbasedsampler"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `root` | [`Sampler`](#sampler) | `false` | No constraints. | Configure root sampler.<br> If omitted or null, always_on is used. |
| `remote_parent_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure remote_parent_sampled sampler.<br> If omitted or null, always_on is used. |
| `remote_parent_not_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure remote_parent_not_sampled sampler.<br> If omitted or null, always_off is used. |
| `local_parent_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure local_parent_sampled sampler.<br> If omitted or null, always_on is used. |
| `local_parent_not_sampled` | [`Sampler`](#sampler) | `false` | No constraints. | Configure local_parent_not_sampled sampler.<br> If omitted or null, always_off is used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `root` | supported | unknown | supported | unknown |
| `remote_parent_sampled` | supported | unknown | supported | unknown |
| `remote_parent_not_sampled` | supported | unknown | supported | unknown |
| `local_parent_sampled` | supported | unknown | supported | unknown |
| `local_parent_not_sampled` | supported | unknown | supported | unknown |
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
      "description": "Configure root sampler.\n If omitted or null, always_on is used.",
      "$ref": "#/$defs/Sampler"
    },
    "remote_parent_sampled": {
      "description": "Configure remote_parent_sampled sampler.\n If omitted or null, always_on is used.",
      "$ref": "#/$defs/Sampler"
    },
    "remote_parent_not_sampled": {
      "description": "Configure remote_parent_not_sampled sampler.\n If omitted or null, always_off is used.",
      "$ref": "#/$defs/Sampler"
    },
    "local_parent_sampled": {
      "description": "Configure local_parent_sampled sampler.\n If omitted or null, always_on is used.",
      "$ref": "#/$defs/Sampler"
    },
    "local_parent_not_sampled": {
      "description": "Configure local_parent_not_sampled sampler.\n If omitted or null, always_off is used.",
      "$ref": "#/$defs/Sampler"
    }
  }
}</pre>
</details>

## PeriodicMetricReader <a id="periodicmetricreader"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `interval` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure delay interval (in milliseconds) between start of two consecutive exports.<br> Value must be non-negative.<br> If omitted or null, 60000 is used. |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure maximum allowed time (in milliseconds) to export data.<br> Value must be non-negative. A value of 0 indicates no limit (infinity).<br> If omitted or null, 30000 is used. |
| `exporter` | [`PushMetricExporter`](#pushmetricexporter) | `true` | No constraints. | Configure exporter. |
| `producers` | `array` of [`MetricProducer`](#metricproducer) | `false` | No constraints. | Configure metric producers. |
| `cardinality_limits` | [`CardinalityLimits`](#cardinalitylimits) | `false` | No constraints. | Configure cardinality limits. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `interval` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
| `exporter` | supported | unknown | supported | unknown |
| `producers` | supported | unknown | not_implemented | unknown |
| `cardinality_limits` | supported | unknown | supported | unknown |
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
      "description": "Configure delay interval (in milliseconds) between start of two consecutive exports.\n Value must be non-negative.\n If omitted or null, 60000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "timeout": {
      "description": "Configure maximum allowed time (in milliseconds) to export data.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 30000 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "exporter": {
      "description": "Configure exporter.",
      "$ref": "#/$defs/PushMetricExporter"
    },
    "producers": {
      "description": "Configure metric producers.",
      "type": "array",
      "items": {
        "$ref": "#/$defs/MetricProducer"
      }
    },
    "cardinality_limits": {
      "description": "Configure cardinality limits.",
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
| `composite` | `array` of [`TextMapPropagator`](#textmappropagator) | `false` | No constraints. | Configure the propagators in the composite text map propagator. Entries from .composite_list are appended to the list here with duplicates filtered out.<br> Built-in propagator keys include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party keys include: xray.<br> If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used. |
| `composite_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure the propagators in the composite text map propagator. Entries are appended to .composite with duplicates filtered out.<br> The value is a comma separated list of propagator identifiers matching the format of OTEL_PROPAGATORS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br> Built-in propagator identifiers include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party identifiers include: xray.<br> If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `composite` | supported | unknown | supported | unknown |
| `composite_list` | supported | unknown | supported | unknown |
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
      "description": "Configure the propagators in the composite text map propagator. Entries from .composite_list are appended to the list here with duplicates filtered out.\n Built-in propagator keys include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party keys include: xray.\n If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.",
      "type": "array",
      "items": {
        "$ref": "#/$defs/TextMapPropagator"
      }
    },
    "composite_list": {
      "description": "Configure the propagators in the composite text map propagator. Entries are appended to .composite with duplicates filtered out.\n The value is a comma separated list of propagator identifiers matching the format of OTEL_PROPAGATORS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.\n Built-in propagator identifiers include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party identifiers include: xray.\n If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.",
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
          "description": "Include the w3c trace context propagator.",
          "$ref": "#/$defs/TraceContextPropagator"
        },
        "baggage": {
          "description": "Include the w3c baggage propagator.",
          "$ref": "#/$defs/BaggagePropagator"
        },
        "b3": {
          "description": "Include the zipkin b3 propagator.",
          "$ref": "#/$defs/B3Propagator"
        },
        "b3multi": {
          "description": "Include the zipkin b3 multi propagator.",
          "$ref": "#/$defs/B3MultiPropagator"
        },
        "jaeger": {
          "description": "Include the jaeger propagator.",
          "$ref": "#/$defs/JaegerPropagator"
        },
        "ottrace": {
          "description": "Include the opentracing propagator.",
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
| `prometheus/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `prometheus/development` | supported | unknown | supported | unknown |
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
| `exporter` | [`PullMetricExporter`](#pullmetricexporter) | `true` | No constraints. | Configure exporter. |
| `producers` | `array` of [`MetricProducer`](#metricproducer) | `false` | No constraints. | Configure metric producers. |
| `cardinality_limits` | [`CardinalityLimits`](#cardinalitylimits) | `false` | No constraints. | Configure cardinality limits. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `exporter` | supported | unknown | supported | unknown |
| `producers` | supported | unknown | not_implemented | unknown |
| `cardinality_limits` | supported | unknown | supported | unknown |
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
      "description": "Configure exporter.",
      "$ref": "#/$defs/PullMetricExporter"
    },
    "producers": {
      "description": "Configure metric producers.",
      "type": "array",
      "items": {
        "$ref": "#/$defs/MetricProducer"
      }
    },
    "cardinality_limits": {
      "description": "Configure cardinality limits.",
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
| `otlp_http` | [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | `false` | No constraints. | Configure exporter to be OTLP with HTTP transport. |
| `otlp_grpc` | [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | `false` | No constraints. | Configure exporter to be OTLP with gRPC transport. |
| `otlp_file/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | `false` | No constraints. | Configure exporter to be OTLP with file transport. |
| `console` | [`ConsoleMetricExporter`](#consolemetricexporter) | `false` | No constraints. | Configure exporter to be console. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `otlp_http` | supported | unknown | supported | unknown |
| `otlp_grpc` | supported | unknown | supported | unknown |
| `otlp_file/development` | supported | unknown | supported | unknown |
| `console` | supported | unknown | supported | unknown |
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
      "description": "Configure exporter to be OTLP with HTTP transport.",
      "$ref": "#/$defs/OtlpHttpMetricExporter"
    },
    "otlp_grpc": {
      "description": "Configure exporter to be OTLP with gRPC transport.",
      "$ref": "#/$defs/OtlpGrpcMetricExporter"
    },
    "otlp_file/development": {
      "description": "Configure exporter to be OTLP with file transport.",
      "$ref": "#/$defs/ExperimentalOtlpFileMetricExporter"
    },
    "console": {
      "description": "Configure exporter to be console.",
      "$ref": "#/$defs/ConsoleMetricExporter"
    }
  }
}</pre>
</details>

## Resource <a id="resource"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attributes` | `array` of [`AttributeNameValue`](#attributenamevalue) | `false` | No constraints. | Configure resource attributes. Entries have higher priority than entries from .resource.attributes_list. |
| `detection/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalResourceDetection`](#experimentalresourcedetection) | `false` | No constraints. | Configure resource detection.<br> If omitted or null, resource detection is disabled. |
| `schema_url` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure resource schema URL.<br> If omitted or null, no schema URL is used. |
| `attributes_list` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | Configure resource attributes. Entries have lower priority than entries from .resource.attributes.<br> The value is a list of comma separated key-value pairs matching the format of OTEL_RESOURCE_ATTRIBUTES. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br> If omitted or null, no resource attributes are added. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attributes` | supported | unknown | supported | unknown |
| `detection/development` | supported | unknown | supported | unknown |
| `schema_url` | supported | unknown | ignored | unknown |
| `attributes_list` | supported | unknown | supported | unknown |
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
      "description": "Configure resource attributes. Entries have higher priority than entries from .resource.attributes_list.",
      "type": "array",
      "items": {
        "$ref": "#/$defs/AttributeNameValue"
      }
    },
    "detection/development": {
      "description": "Configure resource detection.\n If omitted or null, resource detection is disabled.",
      "$ref": "#/$defs/ExperimentalResourceDetection"
    },
    "schema_url": {
      "description": "Configure resource schema URL.\n If omitted or null, no schema URL is used.",
      "type": [
        "string",
        "null"
      ]
    },
    "attributes_list": {
      "description": "Configure resource attributes. Entries have lower priority than entries from .resource.attributes.\n The value is a list of comma separated key-value pairs matching the format of OTEL_RESOURCE_ATTRIBUTES. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.\n If omitted or null, no resource attributes are added.",
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
          "description": "The attribute name.",
          "type": "string"
        },
        "value": {
          "description": "The attribute value.\n The type of value must match .type.",
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
          "description": "The attribute type.\n Values include: string, bool, int, double, string_array, bool_array, int_array, double_array.\n If omitted or null, string is used.",
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
          "description": "Configure attributes provided by resource detectors.",
          "$ref": "common.json#/$defs/IncludeExclude"
        },
        "detectors": {
          "description": "Configure resource detectors.\n Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language.\n If omitted or null, no resource detectors are enabled.",
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
          "description": "Enable the container resource detector, which populates container.* attributes.",
          "$ref": "#/$defs/ExperimentalContainerResourceDetector"
        },
        "host": {
          "description": "Enable the host resource detector, which populates host.* and os.* attributes.",
          "$ref": "#/$defs/ExperimentalHostResourceDetector"
        },
        "process": {
          "description": "Enable the process resource detector, which populates process.* attributes.",
          "$ref": "#/$defs/ExperimentalProcessResourceDetector"
        },
        "service": {
          "description": "Enable the service detector, which populates service.name based on the OTEL_SERVICE_NAME environment variable and service.instance.id.",
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
| `probability/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | `false` | No constraints. | Configure sampler to be probability. |
| `jaeger_remote/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | `false` | No constraints. | TODO |
| `composite/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | `false` | No constraints. | Configure sampler to be composite. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `always_off` | supported | unknown | supported | unknown |
| `always_on` | supported | unknown | supported | unknown |
| `parent_based` | supported | unknown | supported | unknown |
| `trace_id_ratio_based` | supported | unknown | supported | unknown |
| `probability/development` | supported | unknown | ignored | unknown |
| `jaeger_remote/development` | supported | unknown | supported | unknown |
| `composite/development` | supported | unknown | supported | unknown |
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
      "description": "Configure sampler to be always_off.",
      "$ref": "#/$defs/AlwaysOffSampler"
    },
    "always_on": {
      "description": "Configure sampler to be always_on.",
      "$ref": "#/$defs/AlwaysOnSampler"
    },
    "composite/development": {
      "description": "Configure sampler to be composite.",
      "$ref": "#/$defs/ExperimentalComposableSampler"
    },
    "jaeger_remote/development": {
      "description": "TODO",
      "$ref": "#/$defs/ExperimentalJaegerRemoteSampler"
    },
    "parent_based": {
      "description": "Configure sampler to be parent_based.",
      "$ref": "#/$defs/ParentBasedSampler"
    },
    "probability/development": {
      "description": "Configure sampler to be probability.",
      "$ref": "#/$defs/ExperimentalProbabilitySampler"
    },
    "trace_id_ratio_based": {
      "description": "Configure sampler to be trace_id_ratio_based.",
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
| `exporter` | supported | unknown | supported | unknown |
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
      "description": "Configure exporter.",
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
| `exporter` | [`SpanExporter`](#spanexporter) | `true` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `exporter` | supported | unknown | supported | unknown |
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
| `otlp_file/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | `false` | No constraints. | Configure exporter to be OTLP with file transport. |
| `console` | [`ConsoleExporter`](#consoleexporter) | `false` | No constraints. | Configure exporter to be console. |
| `zipkin` | [`ZipkinSpanExporter`](#zipkinspanexporter) | `false` | No constraints. | Configure exporter to be zipkin. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `otlp_http` | supported | unknown | supported | unknown |
| `otlp_grpc` | supported | unknown | supported | unknown |
| `otlp_file/development` | supported | unknown | supported | unknown |
| `console` | supported | unknown | supported | unknown |
| `zipkin` | supported | unknown | supported | unknown |
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
      "description": "Configure exporter to be OTLP with HTTP transport.",
      "$ref": "common.json#/$defs/OtlpHttpExporter"
    },
    "otlp_grpc": {
      "description": "Configure exporter to be OTLP with gRPC transport.",
      "$ref": "common.json#/$defs/OtlpGrpcExporter"
    },
    "otlp_file/development": {
      "description": "Configure exporter to be OTLP with file transport.",
      "$ref": "common.json#/$defs/ExperimentalOtlpFileExporter"
    },
    "console": {
      "description": "Configure exporter to be console.",
      "$ref": "common.json#/$defs/ConsoleExporter"
    },
    "zipkin": {
      "description": "Configure exporter to be zipkin.",
      "$ref": "#/$defs/ZipkinSpanExporter"
    }
  }
}</pre>
</details>

## SpanLimits <a id="spanlimits"></a>

| Property | Type | Required? | Constraints | Description |
|---|---|---|---|---|
| `attribute_value_length_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br> Value must be non-negative.<br> If omitted or null, there is no limit. |
| `attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br> Value must be non-negative.<br> If omitted or null, 128 is used. |
| `event_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max span event count. <br> Value must be non-negative.<br> If omitted or null, 128 is used. |
| `link_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max span link count. <br> Value must be non-negative.<br> If omitted or null, 128 is used. |
| `event_attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attributes per span event. <br> Value must be non-negative.<br> If omitted or null, 128 is used. |
| `link_attribute_count_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | Configure max attributes per span link. <br> Value must be non-negative.<br> If omitted or null, 128 is used. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `attribute_value_length_limit` | supported | unknown | supported | unknown |
| `attribute_count_limit` | supported | unknown | supported | unknown |
| `event_count_limit` | supported | unknown | supported | unknown |
| `link_count_limit` | supported | unknown | supported | unknown |
| `event_attribute_count_limit` | supported | unknown | supported | unknown |
| `link_attribute_count_limit` | supported | unknown | supported | unknown |
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
      "description": "Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. \n Value must be non-negative.\n If omitted or null, there is no limit.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "attribute_count_limit": {
      "description": "Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. \n Value must be non-negative.\n If omitted or null, 128 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "event_count_limit": {
      "description": "Configure max span event count. \n Value must be non-negative.\n If omitted or null, 128 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "link_count_limit": {
      "description": "Configure max span link count. \n Value must be non-negative.\n If omitted or null, 128 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "event_attribute_count_limit": {
      "description": "Configure max attributes per span event. \n Value must be non-negative.\n If omitted or null, 128 is used.",
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "link_attribute_count_limit": {
      "description": "Configure max attributes per span link. \n Value must be non-negative.\n If omitted or null, 128 is used.",
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
| `batch` | supported | unknown | supported | unknown |
| `simple` | supported | unknown | supported | unknown |
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
      "description": "Configure a batch span processor.",
      "$ref": "#/$defs/BatchSpanProcessor"
    },
    "simple": {
      "description": "Configure a simple span processor.",
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

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `tracecontext` | supported | unknown | supported | unknown |
| `baggage` | supported | unknown | supported | unknown |
| `b3` | supported | unknown | supported | unknown |
| `b3multi` | supported | unknown | supported | unknown |
| `jaeger` | supported | unknown | supported | unknown |
| `ottrace` | supported | unknown | supported | unknown |
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
      "description": "Include the w3c trace context propagator.",
      "$ref": "#/$defs/TraceContextPropagator"
    },
    "baggage": {
      "description": "Include the w3c baggage propagator.",
      "$ref": "#/$defs/BaggagePropagator"
    },
    "b3": {
      "description": "Include the zipkin b3 propagator.",
      "$ref": "#/$defs/B3Propagator"
    },
    "b3multi": {
      "description": "Include the zipkin b3 multi propagator.",
      "$ref": "#/$defs/B3MultiPropagator"
    },
    "jaeger": {
      "description": "Include the jaeger propagator.",
      "$ref": "#/$defs/JaegerPropagator"
    },
    "ottrace": {
      "description": "Include the opentracing propagator.",
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
| `ratio` | one of:<br>* `number`<br>* `null`<br> | `false` | * `minimum`: `0`<br>* `maximum`: `1`<br> | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `ratio` | supported | unknown | supported | unknown |
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
| `processors` | `array` of [`SpanProcessor`](#spanprocessor) | `true` | * `minItems`: `1`<br> | Configure span processors.   |
| `limits` | [`SpanLimits`](#spanlimits) | `false` | No constraints. | Configure span limits. See also attribute_limits. |
| `sampler` | [`Sampler`](#sampler) | `false` | No constraints. | Configure the sampler. <br> If omitted, parent based sampler with a root of always_on is used. |
| `tracer_configurator/development`<br>**WARNING:** This property is [experimental](README.md#experimental-features). | [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | `false` | No constraints. | Configure tracers. |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `processors` | supported | unknown | supported | unknown |
| `limits` | supported | unknown | supported | unknown |
| `sampler` | supported | unknown | supported | unknown |
| `tracer_configurator/development` | supported | unknown | supported | unknown |
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
      "description": "Configure span processors.  ",
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/SpanProcessor"
      }
    },
    "limits": {
      "description": "Configure span limits. See also attribute_limits.",
      "$ref": "#/$defs/SpanLimits"
    },
    "sampler": {
      "description": "Configure the sampler. \n If omitted, parent based sampler with a root of always_on is used.",
      "$ref": "#/$defs/Sampler"
    },
    "tracer_configurator/development": {
      "description": "Configure tracers.",
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
          "description": "Configure delay interval (in milliseconds) between two consecutive exports.\n Value must be non-negative.\n If omitted or null, 5000 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "export_timeout": {
          "description": "Configure maximum allowed time (in milliseconds) to export data.\n Value must be non-negative. A value of 0 indicates no limit (infinity).\n If omitted or null, 30000 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "max_queue_size": {
          "description": "Configure maximum queue size. Value must be positive.\n If omitted or null, 2048 is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "max_export_batch_size": {
          "description": "Configure maximum batch size. Value must be positive.\n If omitted or null, 512 is used.",
          "type": [
            "integer",
            "null"
          ],
          "exclusiveMinimum": 0
        },
        "exporter": {
          "description": "Configure exporter.",
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
          "description": "Configure sampler to be always_off.",
          "$ref": "#/$defs/AlwaysOffSampler"
        },
        "always_on": {
          "description": "Configure sampler to be always_on.",
          "$ref": "#/$defs/AlwaysOnSampler"
        },
        "composite/development": {
          "description": "Configure sampler to be composite.",
          "$ref": "#/$defs/ExperimentalComposableSampler"
        },
        "jaeger_remote/development": {
          "description": "TODO",
          "$ref": "#/$defs/ExperimentalJaegerRemoteSampler"
        },
        "parent_based": {
          "description": "Configure sampler to be parent_based.",
          "$ref": "#/$defs/ParentBasedSampler"
        },
        "probability/development": {
          "description": "Configure sampler to be probability.",
          "$ref": "#/$defs/ExperimentalProbabilitySampler"
        },
        "trace_id_ratio_based": {
          "description": "Configure sampler to be trace_id_ratio_based.",
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
          "description": "Configure root sampler.\n If omitted or null, always_on is used.",
          "$ref": "#/$defs/Sampler"
        },
        "remote_parent_sampled": {
          "description": "Configure remote_parent_sampled sampler.\n If omitted or null, always_on is used.",
          "$ref": "#/$defs/Sampler"
        },
        "remote_parent_not_sampled": {
          "description": "Configure remote_parent_not_sampled sampler.\n If omitted or null, always_off is used.",
          "$ref": "#/$defs/Sampler"
        },
        "local_parent_sampled": {
          "description": "Configure local_parent_sampled sampler.\n If omitted or null, always_on is used.",
          "$ref": "#/$defs/Sampler"
        },
        "local_parent_not_sampled": {
          "description": "Configure local_parent_not_sampled sampler.\n If omitted or null, always_off is used.",
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
          "description": "Configure sampler to be always_off.",
          "$ref": "#/$defs/ExperimentalComposableAlwaysOffSampler"
        },
        "always_on": {
          "description": "Configure sampler to be always_on.",
          "$ref": "#/$defs/ExperimentalComposableAlwaysOnSampler"
        },
        "parent_based": {
          "description": "Configure sampler to be parent_based.",
          "$ref": "#/$defs/ExperimentalComposableParentBasedSampler"
        },
        "probability": {
          "description": "Configure sampler to be probability.",
          "$ref": "#/$defs/ExperimentalComposableProbabilitySampler"
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
          "description": "Configure exporter to be OTLP with HTTP transport.",
          "$ref": "common.json#/$defs/OtlpHttpExporter"
        },
        "otlp_grpc": {
          "description": "Configure exporter to be OTLP with gRPC transport.",
          "$ref": "common.json#/$defs/OtlpGrpcExporter"
        },
        "otlp_file/development": {
          "description": "Configure exporter to be OTLP with file transport.",
          "$ref": "common.json#/$defs/ExperimentalOtlpFileExporter"
        },
        "console": {
          "description": "Configure exporter to be console.",
          "$ref": "common.json#/$defs/ConsoleExporter"
        },
        "zipkin": {
          "description": "Configure exporter to be zipkin.",
          "$ref": "#/$defs/ZipkinSpanExporter"
        }
      }
    },
    "SpanLimits": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "attribute_value_length_limit": {
          "description": "Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. \n Value must be non-negative.\n If omitted or null, there is no limit.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "attribute_count_limit": {
          "description": "Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. \n Value must be non-negative.\n If omitted or null, 128 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "event_count_limit": {
          "description": "Configure max span event count. \n Value must be non-negative.\n If omitted or null, 128 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "link_count_limit": {
          "description": "Configure max span link count. \n Value must be non-negative.\n If omitted or null, 128 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "event_attribute_count_limit": {
          "description": "Configure max attributes per span event. \n Value must be non-negative.\n If omitted or null, 128 is used.",
          "type": [
            "integer",
            "null"
          ],
          "minimum": 0
        },
        "link_attribute_count_limit": {
          "description": "Configure max attributes per span link. \n Value must be non-negative.\n If omitted or null, 128 is used.",
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
          "description": "Configure a batch span processor.",
          "$ref": "#/$defs/BatchSpanProcessor"
        },
        "simple": {
          "description": "Configure a simple span processor.",
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
          "description": "Configure the default tracer config used there is no matching entry in .tracer_configurator/development.tracers.",
          "$ref": "#/$defs/ExperimentalTracerConfig"
        },
        "tracers": {
          "description": "Configure tracers.",
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
          "description": "Configure tracer names to match, evaluated as follows:\n \n * If the tracer name exactly matches.\n * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.",
          "type": [
            "string"
          ]
        },
        "config": {
          "description": "The tracer config.",
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
          "description": "Configure if the tracer is enabled or not.",
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
| `selector` | [`ViewSelector`](#viewselector) | `true` | No constraints. | TODO |
| `stream` | [`ViewStream`](#viewstream) | `true` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `selector` | supported | unknown | supported | unknown |
| `stream` | supported | unknown | supported | unknown |
</details>

Constraints: 

* `additionalProperties`: `false`
* `required`: `["selector","stream"]`

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
| `instrument_name` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `instrument_type` | [`InstrumentType`](#instrumenttype) | `false` | No constraints. | TODO |
| `unit` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `meter_name` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `meter_version` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `meter_schema_url` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `instrument_name` | supported | unknown | supported | unknown |
| `instrument_type` | supported | unknown | supported | unknown |
| `unit` | supported | unknown | ignored | unknown |
| `meter_name` | supported | unknown | supported | unknown |
| `meter_version` | supported | unknown | supported | unknown |
| `meter_schema_url` | supported | unknown | supported | unknown |
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
| `name` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `description` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `aggregation` | [`Aggregation`](#aggregation) | `false` | No constraints. | TODO |
| `aggregation_cardinality_limit` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `exclusiveMinimum`: `0`<br> | TODO |
| `attribute_keys` | [`IncludeExclude`](#includeexclude) | `false` | No constraints. | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `name` | supported | unknown | supported | unknown |
| `description` | supported | unknown | supported | unknown |
| `aggregation` | supported | unknown | supported | unknown |
| `aggregation_cardinality_limit` | supported | unknown | supported | unknown |
| `attribute_keys` | supported | unknown | supported | unknown |
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
| `endpoint` | one of:<br>* `string`<br>* `null`<br> | `false` | No constraints. | TODO |
| `timeout` | one of:<br>* `integer`<br>* `null`<br> | `false` | * `minimum`: `0`<br> | TODO |

<details>
<summary>Language support status</summary>

| Property | [cpp](#cpp) | [go](#go) | [java](#java) | [js](#js) |
|---|---|---|---|---|
| `endpoint` | supported | unknown | supported | unknown |
| `timeout` | supported | unknown | supported | unknown |
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

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | supported |  | * `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `base2_exponential_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | supported |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | supported |  |  |
| [`AttributeLimits`](#attributelimits) | supported |  | * `attribute_value_length_limit`: supported<br>* `attribute_count_limit`: supported<br> |
| [`AttributeNameValue`](#attributenamevalue) | supported |  | * `name`: supported<br>* `value`: supported<br>* `type`: supported<br> |
| [`AttributeType`](#attributetype) | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
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
| [`ExemplarFilter`](#exemplarfilter) | not_implemented |  | * `always_off`: not_implemented<br>* `always_on`: not_implemented<br>* `trace_based`: not_implemented<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | unknown |  | * `root`: unknown<br>* `remote_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `local_parent_not_sampled`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `probability`: unknown<br>* `parent_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | not_implemented |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | not_applicable |  | * `peer`: not_applicable<br>* `http`: not_applicable<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | not_implemented |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | not_applicable |  | * `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | not_applicable |  | * `client`: not_applicable<br>* `server`: not_applicable<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | not_applicable |  | * `request_captured_headers`: not_applicable<br>* `response_captured_headers`: not_applicable<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | not_applicable |  | * `general`: not_applicable<br>* `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `go`: not_applicable<br>* `java`: not_applicable<br>* `js`: not_applicable<br>* `php`: not_applicable<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | not_implemented |  | * `endpoint`: not_implemented<br>* `interval`: not_implemented<br>* `initial_sampler`: not_implemented<br> |
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
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br>* `insecure`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | supported |  | * `included`: supported<br>* `excluded`: supported<br> |
| [`InstrumentType`](#instrumenttype) | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`JaegerPropagator`](#jaegerpropagator) | supported |  |  |
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
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | supported |  | * `file_format`: supported<br>* `disabled`: supported<br>* `log_level`: supported<br>* `attribute_limits`: supported<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `tracer_provider`: supported<br>* `resource`: supported<br>* `instrumentation/development`: supported<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | not_implemented |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `tls`: supported<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | supported |  | * `json`: supported<br>* `protobuf`: supported<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `encoding`: supported<br>* `tls`: supported<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `encoding`: supported<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br>* `tls`: supported<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | supported |  | * `root`: supported<br>* `remote_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `local_parent_not_sampled`: supported<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | supported |  | * `interval`: supported<br>* `timeout`: supported<br>* `exporter`: supported<br>* `producers`: supported<br>* `cardinality_limits`: supported<br> |
| [`Propagator`](#propagator) | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| [`PullMetricExporter`](#pullmetricexporter) | supported |  | * `prometheus/development`: supported<br> |
| [`PullMetricReader`](#pullmetricreader) | supported |  | * `exporter`: supported<br>* `producers`: supported<br>* `cardinality_limits`: supported<br> |
| [`PushMetricExporter`](#pushmetricexporter) | supported |  | * `otlp_http`: supported<br>* `otlp_grpc`: supported<br>* `otlp_file/development`: supported<br>* `console`: supported<br> |
| [`Resource`](#resource) | supported |  | * `attributes`: supported<br>* `detection/development`: supported<br>* `schema_url`: supported<br>* `attributes_list`: supported<br> |
| [`Sampler`](#sampler) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `probability/development`: supported<br>* `jaeger_remote/development`: supported<br>* `composite/development`: supported<br> |
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


## go <a id="go"></a>

Latest supported file format: `0.3.0`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | unknown |  | * `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `base2_exponential_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](#attributelimits) | unknown |  | * `attribute_value_length_limit`: unknown<br>* `attribute_count_limit`: unknown<br> |
| [`AttributeNameValue`](#attributenamevalue) | unknown |  | * `name`: unknown<br>* `value`: unknown<br>* `type`: unknown<br> |
| [`AttributeType`](#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
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
| [`ExemplarFilter`](#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | unknown |  | * `root`: unknown<br>* `remote_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `local_parent_not_sampled`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `probability`: unknown<br>* `parent_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | unknown |  | * `peer`: unknown<br>* `http`: unknown<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | unknown |  | * `general`: unknown<br>* `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `interval`: unknown<br>* `initial_sampler`: unknown<br> |
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
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br>* `insecure`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | unknown |  | * `included`: unknown<br>* `excluded`: unknown<br> |
| [`InstrumentType`](#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](#jaegerpropagator) | unknown |  |  |
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
| [`OtlpHttpEncoding`](#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | unknown |  | * `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `compression`: unknown<br>* `timeout`: unknown<br>* `encoding`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | unknown |  | * `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `compression`: unknown<br>* `timeout`: unknown<br>* `encoding`: unknown<br>* `temporality_preference`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | unknown |  | * `root`: unknown<br>* `remote_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `local_parent_not_sampled`: unknown<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | unknown |  | * `interval`: unknown<br>* `timeout`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br>* `cardinality_limits`: unknown<br> |
| [`Propagator`](#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](#pullmetricreader) | unknown |  | * `exporter`: unknown<br>* `producers`: unknown<br>* `cardinality_limits`: unknown<br> |
| [`PushMetricExporter`](#pushmetricexporter) | unknown |  | * `otlp_http`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_file/development`: unknown<br>* `console`: unknown<br> |
| [`Resource`](#resource) | unknown |  | * `attributes`: unknown<br>* `detection/development`: unknown<br>* `schema_url`: unknown<br>* `attributes_list`: unknown<br> |
| [`Sampler`](#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `probability/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `composite/development`: unknown<br> |
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


## java <a id="java"></a>

Latest supported file format: `1.0.0-rc.1`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | supported |  | * `default`: supported<br>* `drop`: supported<br>* `explicit_bucket_histogram`: supported<br>* `base2_exponential_bucket_histogram`: supported<br>* `last_value`: supported<br>* `sum`: supported<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | supported |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | supported |  |  |
| [`AttributeLimits`](#attributelimits) | supported |  | * `attribute_value_length_limit`: supported<br>* `attribute_count_limit`: supported<br> |
| [`AttributeNameValue`](#attributenamevalue) | supported |  | * `name`: supported<br>* `value`: supported<br>* `type`: supported<br> |
| [`AttributeType`](#attributetype) | supported |  | * `bool`: supported<br>* `bool_array`: supported<br>* `double`: supported<br>* `double_array`: supported<br>* `int`: supported<br>* `int_array`: supported<br>* `string`: supported<br>* `string_array`: supported<br> |
| [`B3MultiPropagator`](#b3multipropagator) | supported |  |  |
| [`B3Propagator`](#b3propagator) | supported |  |  |
| [`BaggagePropagator`](#baggagepropagator) | supported |  |  |
| [`Base2ExponentialBucketHistogramAggregation`](#base2exponentialbuckethistogramaggregation) | supported |  | * `max_scale`: supported<br>* `max_size`: supported<br>* `record_min_max`: not_implemented<br> |
| [`BatchLogRecordProcessor`](#batchlogrecordprocessor) | supported |  | * `schedule_delay`: supported<br>* `export_timeout`: supported<br>* `max_queue_size`: supported<br>* `max_export_batch_size`: supported<br>* `exporter`: supported<br> |
| [`BatchSpanProcessor`](#batchspanprocessor) | supported |  | * `schedule_delay`: supported<br>* `export_timeout`: supported<br>* `max_queue_size`: supported<br>* `max_export_batch_size`: supported<br>* `exporter`: supported<br> |
| [`CardinalityLimits`](#cardinalitylimits) | supported |  | * `default`: supported<br>* `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`ConsoleExporter`](#consoleexporter) | supported |  |  |
| [`ConsoleMetricExporter`](#consolemetricexporter) | supported |  | * `temporality_preference`: ignored<br>* `default_histogram_aggregation`: not_implemented<br> |
| [`DefaultAggregation`](#defaultaggregation) | supported |  |  |
| [`DropAggregation`](#dropaggregation) | supported |  |  |
| [`ExemplarFilter`](#exemplarfilter) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `trace_based`: supported<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | unknown |  | * `root`: unknown<br>* `remote_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `local_parent_not_sampled`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `probability`: unknown<br>* `parent_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | supported |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | supported |  | * `peer`: supported<br>* `http`: supported<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | supported |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | supported |  | * `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | supported |  | * `client`: supported<br>* `server`: supported<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | supported |  | * `request_captured_headers`: supported<br>* `response_captured_headers`: supported<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | supported |  | * `general`: supported<br>* `cpp`: not_applicable<br>* `dotnet`: not_applicable<br>* `erlang`: not_applicable<br>* `go`: not_applicable<br>* `java`: supported<br>* `js`: not_applicable<br>* `php`: not_applicable<br>* `python`: not_applicable<br>* `ruby`: not_applicable<br>* `rust`: not_applicable<br>* `swift`: not_applicable<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | ignored |  | * `endpoint`: ignored<br>* `interval`: ignored<br>* `initial_sampler`: ignored<br> |
| [`ExperimentalLanguageSpecificInstrumentation`](#experimentallanguagespecificinstrumentation) | supported |  |  |
| [`ExperimentalLoggerConfig`](#experimentalloggerconfig) | supported |  | * `disabled`: supported<br> |
| [`ExperimentalLoggerConfigurator`](#experimentalloggerconfigurator) | supported |  | * `default_config`: supported<br>* `loggers`: supported<br> |
| [`ExperimentalLoggerMatcherAndConfig`](#experimentalloggermatcherandconfig) | supported |  | * `name`: supported<br>* `config`: supported<br> |
| [`ExperimentalMeterConfig`](#experimentalmeterconfig) | supported |  | * `disabled`: supported<br> |
| [`ExperimentalMeterConfigurator`](#experimentalmeterconfigurator) | supported |  | * `default_config`: supported<br>* `meters`: supported<br> |
| [`ExperimentalMeterMatcherAndConfig`](#experimentalmetermatcherandconfig) | supported |  | * `name`: supported<br>* `config`: supported<br> |
| [`ExperimentalOtlpFileExporter`](#experimentalotlpfileexporter) | supported |  | * `output_stream`: not_implemented<br> |
| [`ExperimentalOtlpFileMetricExporter`](#experimentalotlpfilemetricexporter) | supported |  | * `output_stream`: not_implemented<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br> |
| [`ExperimentalPeerInstrumentation`](#experimentalpeerinstrumentation) | supported |  | * `service_mapping`: supported<br> |
| [`ExperimentalPeerServiceMapping`](#experimentalpeerservicemapping) | supported |  | * `peer`: supported<br>* `service`: supported<br> |
| [`ExperimentalProbabilitySampler`](#experimentalprobabilitysampler) | ignored |  | * `ratio`: ignored<br> |
| [`ExperimentalProcessResourceDetector`](#experimentalprocessresourcedetector) | supported |  |  |
| [`ExperimentalPrometheusMetricExporter`](#experimentalprometheusmetricexporter) | supported |  | * `host`: supported<br>* `port`: supported<br>* `without_scope_info`: ignored<br>* `with_resource_constant_labels`: supported<br>* `translation_strategy`: not_implemented<br> |
| [`ExperimentalResourceDetection`](#experimentalresourcedetection) | supported |  | * `attributes`: supported<br>* `detectors`: supported<br> |
| [`ExperimentalResourceDetector`](#experimentalresourcedetector) | supported |  | * `container`: supported<br>* `host`: supported<br>* `process`: supported<br>* `service`: supported<br> |
| [`ExperimentalServiceResourceDetector`](#experimentalserviceresourcedetector) | supported |  |  |
| [`ExperimentalTracerConfig`](#experimentaltracerconfig) | supported |  | * `disabled`: supported<br> |
| [`ExperimentalTracerConfigurator`](#experimentaltracerconfigurator) | supported |  | * `default_config`: supported<br>* `tracers`: supported<br> |
| [`ExperimentalTracerMatcherAndConfig`](#experimentaltracermatcherandconfig) | supported |  | * `name`: supported<br>* `config`: supported<br> |
| [`ExplicitBucketHistogramAggregation`](#explicitbuckethistogramaggregation) | supported |  | * `boundaries`: supported<br>* `record_min_max`: not_implemented<br> |
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | supported |  | * `base2_exponential_bucket_histogram`: supported<br>* `explicit_bucket_histogram`: supported<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | supported |  | * `cumulative`: supported<br>* `delta`: supported<br>* `low_memory`: supported<br> |
| [`GrpcTls`](#grpctls) | not_implemented |  | * `certificate_file`: not_implemented<br>* `client_key_file`: not_implemented<br>* `client_certificate_file`: not_implemented<br>* `insecure`: not_implemented<br> |
| [`HttpTls`](#httptls) | not_implemented |  | * `certificate_file`: not_implemented<br>* `client_key_file`: not_implemented<br>* `client_certificate_file`: not_implemented<br> |
| [`IncludeExclude`](#includeexclude) | supported |  | * `included`: supported<br>* `excluded`: supported<br> |
| [`InstrumentType`](#instrumenttype) | supported |  | * `counter`: supported<br>* `gauge`: supported<br>* `histogram`: supported<br>* `observable_counter`: supported<br>* `observable_gauge`: supported<br>* `observable_up_down_counter`: supported<br>* `up_down_counter`: supported<br> |
| [`JaegerPropagator`](#jaegerpropagator) | supported |  |  |
| [`LastValueAggregation`](#lastvalueaggregation) | supported |  |  |
| [`LoggerProvider`](#loggerprovider) | supported |  | * `processors`: supported<br>* `limits`: supported<br>* `logger_configurator/development`: supported<br> |
| [`LogRecordExporter`](#logrecordexporter) | supported |  | * `otlp_http`: supported<br>* `otlp_grpc`: supported<br>* `otlp_file/development`: supported<br>* `console`: supported<br> |
| [`LogRecordLimits`](#logrecordlimits) | supported |  | * `attribute_value_length_limit`: supported<br>* `attribute_count_limit`: supported<br> |
| [`LogRecordProcessor`](#logrecordprocessor) | supported |  | * `batch`: supported<br>* `simple`: supported<br> |
| [`MeterProvider`](#meterprovider) | supported |  | * `readers`: supported<br>* `views`: supported<br>* `exemplar_filter`: supported<br>* `meter_configurator/development`: supported<br> |
| [`MetricProducer`](#metricproducer) | ignored |  | * `opencensus`: ignored<br> |
| [`MetricReader`](#metricreader) | supported |  | * `periodic`: supported<br>* `pull`: supported<br> |
| [`NameStringValuePair`](#namestringvaluepair) | supported |  | * `name`: supported<br>* `value`: supported<br> |
| [`OpenCensusMetricProducer`](#opencensusmetricproducer) | ignored |  |  |
| [`OpenTelemetryConfiguration`](#opentelemetryconfiguration) | supported |  | * `file_format`: supported<br>* `disabled`: supported<br>* `log_level`: not_implemented<br>* `attribute_limits`: supported<br>* `logger_provider`: supported<br>* `meter_provider`: supported<br>* `propagator`: supported<br>* `tracer_provider`: supported<br>* `resource`: supported<br>* `instrumentation/development`: supported<br> |
| [`OpenTracingPropagator`](#opentracingpropagator) | supported |  |  |
| [`OtlpGrpcExporter`](#otlpgrpcexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `tls`: ignored<br> |
| [`OtlpGrpcMetricExporter`](#otlpgrpcmetricexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br>* `tls`: ignored<br> |
| [`OtlpHttpEncoding`](#otlphttpencoding) | not_implemented |  | * `json`: not_implemented<br>* `protobuf`: not_implemented<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `encoding`: not_implemented<br>* `tls`: ignored<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | supported |  | * `endpoint`: supported<br>* `headers`: supported<br>* `headers_list`: supported<br>* `compression`: supported<br>* `timeout`: supported<br>* `encoding`: not_implemented<br>* `temporality_preference`: supported<br>* `default_histogram_aggregation`: supported<br>* `tls`: ignored<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | supported |  | * `root`: supported<br>* `remote_parent_sampled`: supported<br>* `remote_parent_not_sampled`: supported<br>* `local_parent_sampled`: supported<br>* `local_parent_not_sampled`: supported<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | supported |  | * `interval`: supported<br>* `timeout`: supported<br>* `exporter`: supported<br>* `producers`: not_implemented<br>* `cardinality_limits`: supported<br> |
| [`Propagator`](#propagator) | supported |  | * `composite`: supported<br>* `composite_list`: supported<br> |
| [`PullMetricExporter`](#pullmetricexporter) | supported |  | * `prometheus/development`: supported<br> |
| [`PullMetricReader`](#pullmetricreader) | supported |  | * `exporter`: supported<br>* `producers`: not_implemented<br>* `cardinality_limits`: supported<br> |
| [`PushMetricExporter`](#pushmetricexporter) | supported |  | * `otlp_http`: supported<br>* `otlp_grpc`: supported<br>* `otlp_file/development`: supported<br>* `console`: supported<br> |
| [`Resource`](#resource) | supported |  | * `attributes`: supported<br>* `detection/development`: supported<br>* `schema_url`: ignored<br>* `attributes_list`: supported<br> |
| [`Sampler`](#sampler) | supported |  | * `always_off`: supported<br>* `always_on`: supported<br>* `parent_based`: supported<br>* `trace_id_ratio_based`: supported<br>* `probability/development`: ignored<br>* `jaeger_remote/development`: supported<br>* `composite/development`: supported<br> |
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
| [`ViewSelector`](#viewselector) | supported |  | * `instrument_name`: supported<br>* `instrument_type`: supported<br>* `unit`: ignored<br>* `meter_name`: supported<br>* `meter_version`: supported<br>* `meter_schema_url`: supported<br> |
| [`ViewStream`](#viewstream) | supported |  | * `name`: supported<br>* `description`: supported<br>* `aggregation`: supported<br>* `aggregation_cardinality_limit`: supported<br>* `attribute_keys`: supported<br> |
| [`ZipkinSpanExporter`](#zipkinspanexporter) | supported |  | * `endpoint`: supported<br>* `timeout`: supported<br> |


## js <a id="js"></a>

Latest supported file format: `1.0.0-rc.2`

| Type | Status | Notes | Support Status Details |
|---|---|---|---|
| [`Aggregation`](#aggregation) | unknown |  | * `default`: unknown<br>* `drop`: unknown<br>* `explicit_bucket_histogram`: unknown<br>* `base2_exponential_bucket_histogram`: unknown<br>* `last_value`: unknown<br>* `sum`: unknown<br> |
| [`AlwaysOffSampler`](#alwaysoffsampler) | unknown |  |  |
| [`AlwaysOnSampler`](#alwaysonsampler) | unknown |  |  |
| [`AttributeLimits`](#attributelimits) | unknown |  | * `attribute_value_length_limit`: unknown<br>* `attribute_count_limit`: unknown<br> |
| [`AttributeNameValue`](#attributenamevalue) | unknown |  | * `name`: unknown<br>* `value`: unknown<br>* `type`: unknown<br> |
| [`AttributeType`](#attributetype) | unknown |  | * `bool`: unknown<br>* `bool_array`: unknown<br>* `double`: unknown<br>* `double_array`: unknown<br>* `int`: unknown<br>* `int_array`: unknown<br>* `string`: unknown<br>* `string_array`: unknown<br> |
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
| [`ExemplarFilter`](#exemplarfilter) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `trace_based`: unknown<br> |
| [`ExperimentalComposableAlwaysOffSampler`](#experimentalcomposablealwaysoffsampler) | unknown |  |  |
| [`ExperimentalComposableAlwaysOnSampler`](#experimentalcomposablealwaysonsampler) | unknown |  |  |
| [`ExperimentalComposableParentBasedSampler`](#experimentalcomposableparentbasedsampler) | unknown |  | * `root`: unknown<br>* `remote_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `local_parent_not_sampled`: unknown<br> |
| [`ExperimentalComposableProbabilitySampler`](#experimentalcomposableprobabilitysampler) | unknown |  | * `ratio`: unknown<br> |
| [`ExperimentalComposableSampler`](#experimentalcomposablesampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `probability`: unknown<br>* `parent_based`: unknown<br> |
| [`ExperimentalContainerResourceDetector`](#experimentalcontainerresourcedetector) | unknown |  |  |
| [`ExperimentalGeneralInstrumentation`](#experimentalgeneralinstrumentation) | unknown |  | * `peer`: unknown<br>* `http`: unknown<br> |
| [`ExperimentalHostResourceDetector`](#experimentalhostresourcedetector) | unknown |  |  |
| [`ExperimentalHttpClientInstrumentation`](#experimentalhttpclientinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalHttpInstrumentation`](#experimentalhttpinstrumentation) | unknown |  | * `client`: unknown<br>* `server`: unknown<br> |
| [`ExperimentalHttpServerInstrumentation`](#experimentalhttpserverinstrumentation) | unknown |  | * `request_captured_headers`: unknown<br>* `response_captured_headers`: unknown<br> |
| [`ExperimentalInstrumentation`](#experimentalinstrumentation) | unknown |  | * `general`: unknown<br>* `cpp`: unknown<br>* `dotnet`: unknown<br>* `erlang`: unknown<br>* `go`: unknown<br>* `java`: unknown<br>* `js`: unknown<br>* `php`: unknown<br>* `python`: unknown<br>* `ruby`: unknown<br>* `rust`: unknown<br>* `swift`: unknown<br> |
| [`ExperimentalJaegerRemoteSampler`](#experimentaljaegerremotesampler) | unknown |  | * `endpoint`: unknown<br>* `interval`: unknown<br>* `initial_sampler`: unknown<br> |
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
| [`ExporterDefaultHistogramAggregation`](#exporterdefaulthistogramaggregation) | unknown |  | * `base2_exponential_bucket_histogram`: unknown<br>* `explicit_bucket_histogram`: unknown<br> |
| [`ExporterTemporalityPreference`](#exportertemporalitypreference) | unknown |  | * `cumulative`: unknown<br>* `delta`: unknown<br>* `low_memory`: unknown<br> |
| [`GrpcTls`](#grpctls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br>* `insecure`: unknown<br> |
| [`HttpTls`](#httptls) | unknown |  | * `certificate_file`: unknown<br>* `client_key_file`: unknown<br>* `client_certificate_file`: unknown<br> |
| [`IncludeExclude`](#includeexclude) | unknown |  | * `included`: unknown<br>* `excluded`: unknown<br> |
| [`InstrumentType`](#instrumenttype) | unknown |  | * `counter`: unknown<br>* `gauge`: unknown<br>* `histogram`: unknown<br>* `observable_counter`: unknown<br>* `observable_gauge`: unknown<br>* `observable_up_down_counter`: unknown<br>* `up_down_counter`: unknown<br> |
| [`JaegerPropagator`](#jaegerpropagator) | unknown |  |  |
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
| [`OtlpHttpEncoding`](#otlphttpencoding) | unknown |  | * `json`: unknown<br>* `protobuf`: unknown<br> |
| [`OtlpHttpExporter`](#otlphttpexporter) | unknown |  | * `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `compression`: unknown<br>* `timeout`: unknown<br>* `encoding`: unknown<br>* `tls`: unknown<br> |
| [`OtlpHttpMetricExporter`](#otlphttpmetricexporter) | unknown |  | * `endpoint`: unknown<br>* `headers`: unknown<br>* `headers_list`: unknown<br>* `compression`: unknown<br>* `timeout`: unknown<br>* `encoding`: unknown<br>* `temporality_preference`: unknown<br>* `default_histogram_aggregation`: unknown<br>* `tls`: unknown<br> |
| [`ParentBasedSampler`](#parentbasedsampler) | unknown |  | * `root`: unknown<br>* `remote_parent_sampled`: unknown<br>* `remote_parent_not_sampled`: unknown<br>* `local_parent_sampled`: unknown<br>* `local_parent_not_sampled`: unknown<br> |
| [`PeriodicMetricReader`](#periodicmetricreader) | unknown |  | * `interval`: unknown<br>* `timeout`: unknown<br>* `exporter`: unknown<br>* `producers`: unknown<br>* `cardinality_limits`: unknown<br> |
| [`Propagator`](#propagator) | unknown |  | * `composite`: unknown<br>* `composite_list`: unknown<br> |
| [`PullMetricExporter`](#pullmetricexporter) | unknown |  | * `prometheus/development`: unknown<br> |
| [`PullMetricReader`](#pullmetricreader) | unknown |  | * `exporter`: unknown<br>* `producers`: unknown<br>* `cardinality_limits`: unknown<br> |
| [`PushMetricExporter`](#pushmetricexporter) | unknown |  | * `otlp_http`: unknown<br>* `otlp_grpc`: unknown<br>* `otlp_file/development`: unknown<br>* `console`: unknown<br> |
| [`Resource`](#resource) | unknown |  | * `attributes`: unknown<br>* `detection/development`: unknown<br>* `schema_url`: unknown<br>* `attributes_list`: unknown<br> |
| [`Sampler`](#sampler) | unknown |  | * `always_off`: unknown<br>* `always_on`: unknown<br>* `parent_based`: unknown<br>* `trace_id_ratio_based`: unknown<br>* `probability/development`: unknown<br>* `jaeger_remote/development`: unknown<br>* `composite/development`: unknown<br> |
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
