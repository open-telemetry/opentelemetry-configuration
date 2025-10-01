### Aggregation <a id="Aggregation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default` | TODO | [`DefaultAggregation`](#DefaultAggregation) | `false` |
| `drop` | TODO | [`DropAggregation`](#DropAggregation) | `false` |
| `explicit_bucket_histogram` | Configure aggregation to be explicit_bucket_histogram. | [`ExplicitBucketHistogramAggregation`](#ExplicitBucketHistogramAggregation) | `false` |
| `base2_exponential_bucket_histogram` | TODO | [`Base2ExponentialBucketHistogramAggregation`](#Base2ExponentialBucketHistogramAggregation) | `false` |
| `last_value` | TODO | [`LastValueAggregation`](#LastValueAggregation) | `false` |
| `sum` | TODO | [`SumAggregation`](#SumAggregation) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `default` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `drop` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `explicit_bucket_histogram` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `base2_exponential_bucket_histogram` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `last_value` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `sum` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].stream.aggregation`</details>
### AlwaysOffSampler <a id="AlwaysOffSampler"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.sampler.always_off`</details>
### AlwaysOnSampler <a id="AlwaysOnSampler"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.sampler.always_on`</details>
### AttributeLimits <a id="AttributeLimits"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attribute_value_length_limit` | Configure max attribute value size. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> | * `integer`<br>* `null`<br> | `false` |
| `attribute_count_limit` | Configure max attribute count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | * `integer`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `attribute_value_length_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `attribute_count_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.attribute_limits`</details>
### AttributeNameValue <a id="AttributeNameValue"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | TODO | `string` | `true` |
| `value` | TODO | `oneOf` (see JSON schema for details) | `true` |
| `type` | TODO | [`AttributeType`](#AttributeType) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `name` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `value` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `type` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.resource.attributes[]`</details>
### AttributeType <a id="AttributeType"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.resource.attributes[].type`</details>
### B3MultiPropagator <a id="B3MultiPropagator"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.propagator.composite[].b3multi`</details>
### B3Propagator <a id="B3Propagator"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.propagator.composite[].b3`</details>
### BaggagePropagator <a id="BaggagePropagator"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.propagator.composite[].baggage`</details>
### Base2ExponentialBucketHistogramAggregation <a id="Base2ExponentialBucketHistogramAggregation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `max_scale` | TODO | * `integer`<br>* `null`<br> | `false` |
| `max_size` | TODO | * `integer`<br>* `null`<br> | `false` |
| `record_min_max` | TODO | * `boolean`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `max_scale` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `max_size` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `record_min_max` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].stream.aggregation.base2_exponential_bucket_histogram`</details>
### BatchLogRecordProcessor <a id="BatchLogRecordProcessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `schedule_delay` | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 1000 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `export_timeout` | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `max_queue_size` | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `max_export_batch_size` | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `exporter` | Configure exporter. | [`LogRecordExporter`](#LogRecordExporter) | `true` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `schedule_delay` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `export_timeout` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `max_queue_size` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `max_export_batch_size` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `exporter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[].batch`</details>
### BatchSpanProcessor <a id="BatchSpanProcessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `schedule_delay` | Configure delay interval (in milliseconds) between two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 5000 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `export_timeout` | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `max_queue_size` | Configure maximum queue size. Value must be positive.<br>If omitted or null, 2048 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `max_export_batch_size` | Configure maximum batch size. Value must be positive.<br>If omitted or null, 512 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `exporter` | Configure exporter. | [`SpanExporter`](#SpanExporter) | `true` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `schedule_delay` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `export_timeout` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `max_queue_size` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `max_export_batch_size` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `exporter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.processors[].batch`</details>
### CardinalityLimits <a id="CardinalityLimits"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default` | Configure default cardinality limit for all instrument types.<br>Instrument-specific cardinality limits take priority. <br>If omitted or null, 2000 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `counter` | Configure default cardinality limit for counter instruments.<br>If omitted or null, the value from .default is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `gauge` | Configure default cardinality limit for gauge instruments.<br>If omitted or null, the value from .default is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `histogram` | Configure default cardinality limit for histogram instruments.<br>If omitted or null, the value from .default is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `observable_counter` | Configure default cardinality limit for observable_counter instruments.<br>If omitted or null, the value from .default is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `observable_gauge` | Configure default cardinality limit for observable_gauge instruments.<br>If omitted or null, the value from .default is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `observable_up_down_counter` | Configure default cardinality limit for observable_up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `up_down_counter` | Configure default cardinality limit for up_down_counter instruments.<br>If omitted or null, the value from .default is used.<br> | * `integer`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `default` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `counter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `gauge` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `histogram` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `observable_counter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `observable_gauge` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `observable_up_down_counter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `up_down_counter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic.cardinality_limits`* `.meter_provider.readers[].pull.cardinality_limits`</details>
### ConsoleExporter <a id="ConsoleExporter"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[].batch.exporter.console`* `.logger_provider.processors[].simple.exporter.console`* `.meter_provider.readers[].periodic.exporter.console`* `.tracer_provider.processors[].batch.exporter.console`* `.tracer_provider.processors[].simple.exporter.console`</details>
### DefaultAggregation <a id="DefaultAggregation"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].stream.aggregation.default`</details>
### DropAggregation <a id="DropAggregation"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].stream.aggregation.drop`</details>
### ExemplarFilter <a id="ExemplarFilter"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.exemplar_filter`</details>
### ExperimentalGeneralInstrumentation <a id="ExperimentalGeneralInstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `peer` | Configure instrumentations following the peer semantic conventions.<br>See peer semantic conventions: https://opentelemetry.io/docs/specs/semconv/attributes-registry/peer/<br> | [`ExperimentalPeerInstrumentation`](#ExperimentalPeerInstrumentation) | `false` |
| `http` | Configure instrumentations following the http semantic conventions.<br>See http semantic conventions: https://opentelemetry.io/docs/specs/semconv/http/<br> | [`ExperimentalHttpInstrumentation`](#ExperimentalHttpInstrumentation) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `peer` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `http` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.instrumentation/development.general`</details>
### ExperimentalHttpInstrumentation <a id="ExperimentalHttpInstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `client` | Configure instrumentations following the http client semantic conventions. | `object` | `false` |
| `server` | Configure instrumentations following the http server semantic conventions. | `object` | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `client` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `server` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/instrumentation.json)
<pre>{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "client": {
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
    "server": {
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
    }
  }
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.instrumentation/development.general.http`</details>
### ExperimentalInstrumentation <a id="ExperimentalInstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `general` | Configure general SemConv options that may apply to multiple languages and instrumentations.<br>Instrumenation may merge general config options with the language specific configuration at .instrumentation.<language>.<br> | [`ExperimentalGeneralInstrumentation`](#ExperimentalGeneralInstrumentation) | `false` |
| `cpp` | Configure C++ language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `dotnet` | Configure .NET language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `erlang` | Configure Erlang language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `go` | Configure Go language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `java` | Configure Java language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `js` | Configure JavaScript language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `php` | Configure PHP language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `python` | Configure Python language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `ruby` | Configure Ruby language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `rust` | Configure Rust language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |
| `swift` | Configure Swift language-specific instrumentation libraries. | [`ExperimentalLanguageSpecificInstrumentation`](#ExperimentalLanguageSpecificInstrumentation) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `general` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `cpp` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `dotnet` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `erlang` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `go` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `java` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `js` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `php` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `python` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `ruby` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `rust` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `swift` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
          }
        }
      }
    },
    "ExperimentalHttpInstrumentation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "client": {
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
        "server": {
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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.instrumentation/development`</details>
### ExperimentalLanguageSpecificInstrumentation <a id="ExperimentalLanguageSpecificInstrumentation"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.instrumentation/development.cpp`* `.instrumentation/development.dotnet`* `.instrumentation/development.erlang`* `.instrumentation/development.go`* `.instrumentation/development.java`* `.instrumentation/development.js`* `.instrumentation/development.php`* `.instrumentation/development.python`* `.instrumentation/development.ruby`* `.instrumentation/development.rust`* `.instrumentation/development.swift`</details>
### ExperimentalLoggerConfig <a id="ExperimentalLoggerConfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `disabled` | Configure if the logger is enabled or not. | `boolean` | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `disabled` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.logger_configurator/development.default_config`* `.logger_provider.logger_configurator/development.loggers[].config`</details>
### ExperimentalLoggerConfigurator <a id="ExperimentalLoggerConfigurator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default_config` | Configure the default logger config used there is no matching entry in .logger_configurator/development.loggers. | [`ExperimentalLoggerConfig`](#ExperimentalLoggerConfig) | `false` |
| `loggers` | Configure loggers. | `array` of [`ExperimentalLoggerMatcherAndConfig`](#ExperimentalLoggerMatcherAndConfig) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `default_config` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `loggers` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.logger_configurator/development`</details>
### ExperimentalLoggerMatcherAndConfig <a id="ExperimentalLoggerMatcherAndConfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | Configure logger names to match, evaluated as follows:<br><br> * If the logger name exactly matches.<br> * If the logger name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> | `string` | `false` |
| `config` | The logger config. | [`ExperimentalLoggerConfig`](#ExperimentalLoggerConfig) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `name` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `config` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.logger_configurator/development.loggers[]`</details>
### ExperimentalMeterConfig <a id="ExperimentalMeterConfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `disabled` | Configure if the meter is enabled or not. | `boolean` | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `disabled` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.meter_configurator/development.default_config`* `.meter_provider.meter_configurator/development.meters[].config`</details>
### ExperimentalMeterConfigurator <a id="ExperimentalMeterConfigurator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default_config` | Configure the default meter config used there is no matching entry in .meter_configurator/development.meters. | [`ExperimentalMeterConfig`](#ExperimentalMeterConfig) | `false` |
| `meters` | Configure meters. | `array` of [`ExperimentalMeterMatcherAndConfig`](#ExperimentalMeterMatcherAndConfig) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `default_config` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `meters` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.meter_configurator/development`</details>
### ExperimentalMeterMatcherAndConfig <a id="ExperimentalMeterMatcherAndConfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | Configure meter names to match, evaluated as follows:<br><br> * If the meter name exactly matches.<br> * If the meter name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> | `string` | `false` |
| `config` | The meter config. | [`ExperimentalMeterConfig`](#ExperimentalMeterConfig) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `name` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `config` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.meter_configurator/development.meters[]`</details>
### ExperimentalOtlpFileExporter <a id="ExperimentalOtlpFileExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `output_stream` | TODO | * `string`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `output_stream` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[].batch.exporter.otlp_file/development`* `.logger_provider.processors[].simple.exporter.otlp_file/development`* `.tracer_provider.processors[].batch.exporter.otlp_file/development`* `.tracer_provider.processors[].simple.exporter.otlp_file/development`</details>
### ExperimentalOtlpFileMetricExporter <a id="ExperimentalOtlpFileMetricExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `output_stream` | TODO | * `string`<br>* `null`<br> | `false` |
| `temporality_preference` | TODO | [`ExporterTemporalityPreference`](#ExporterTemporalityPreference) | `false` |
| `default_histogram_aggregation` | TODO | [`ExporterDefaultHistogramAggregation`](#ExporterDefaultHistogramAggregation) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `output_stream` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `temporality_preference` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `default_histogram_aggregation` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic.exporter.otlp_file/development`</details>
### ExperimentalPeerInstrumentation <a id="ExperimentalPeerInstrumentation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `service_mapping` | TODO | `array` of `array` | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `service_mapping` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
      }
    }
  }
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.instrumentation/development.general.peer`</details>
### ExperimentalPrometheusMetricExporter <a id="ExperimentalPrometheusMetricExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `host` | Configure host.<br>If omitted or null, localhost is used.<br> | * `string`<br>* `null`<br> | `false` |
| `port` | Configure port.<br>If omitted or null, 9464 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `without_units` | Configure Prometheus Exporter to produce metrics without a unit suffix or UNIT metadata.<br>If omitted or null, false is used.<br> | * `boolean`<br>* `null`<br> | `false` |
| `without_type_suffix` | Configure Prometheus Exporter to produce metrics without a type suffix.<br>If omitted or null, false is used.<br> | * `boolean`<br>* `null`<br> | `false` |
| `without_scope_info` | Configure Prometheus Exporter to produce metrics without a scope info metric.<br>If omitted or null, false is used.<br> | * `boolean`<br>* `null`<br> | `false` |
| `with_resource_constant_labels` | Configure Prometheus Exporter to add resource attributes as metrics attributes. | [`IncludeExclude`](#IncludeExclude) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `host` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `port` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `without_units` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `without_type_suffix` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `without_scope_info` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `with_resource_constant_labels` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
    "without_units": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "without_type_suffix": {
      "type": [
        "boolean",
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
    }
  }
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].pull.exporter.prometheus/development`</details>
### ExperimentalResourceDetection <a id="ExperimentalResourceDetection"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attributes` | Configure attributes provided by resource detectors. | [`IncludeExclude`](#IncludeExclude) | `false` |
| `detectors` | Configure resource detectors.<br>Resource detector names are dependent on the SDK language ecosystem. Please consult documentation for each respective language. <br>If omitted or null, no resource detectors are enabled.<br> | `array` of [`ExperimentalResourceDetector`](#ExperimentalResourceDetector) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `attributes` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `detectors` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.resource.detection/development`</details>
### ExperimentalResourceDetector <a id="ExperimentalResourceDetector"></a>

No properties.

<details>
<summary>JSON Schema</summary>

[JSON Schema Source File](./schema/resource.json)
<pre>{
  "type": "object",
  "additionalProperties": true,
  "minProperties": 1,
  "maxProperties": 1,
  "patternProperties": {
    ".*": {
      "type": [
        "object",
        "null"
      ]
    }
  }
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.resource.detection/development.detectors[]`</details>
### ExperimentalTracerConfig <a id="ExperimentalTracerConfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `disabled` | Configure if the tracer is enabled or not. | `boolean` | `true` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `disabled` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
  },
  "required": [
    "disabled"
  ]
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.tracer_configurator/development.default_config`* `.tracer_provider.tracer_configurator/development.tracers[].config`</details>
### ExperimentalTracerConfigurator <a id="ExperimentalTracerConfigurator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `default_config` | Configure the default tracer config used there is no matching entry in .tracer_configurator/development.tracers. | [`ExperimentalTracerConfig`](#ExperimentalTracerConfig) | `false` |
| `tracers` | Configure tracers. | `array` of [`ExperimentalTracerMatcherAndConfig`](#ExperimentalTracerMatcherAndConfig) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `default_config` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `tracers` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.tracer_configurator/development`</details>
### ExperimentalTracerMatcherAndConfig <a id="ExperimentalTracerMatcherAndConfig"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | Configure tracer names to match, evaluated as follows:<br><br> * If the tracer name exactly matches.<br> * If the tracer name matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br> | `string` | `true` |
| `config` | The tracer config. | [`ExperimentalTracerConfig`](#ExperimentalTracerConfig) | `true` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `name` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `config` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
  },
  "required": [
    "name",
    "config"
  ]
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.tracer_configurator/development.tracers[]`</details>
### ExplicitBucketHistogramAggregation <a id="ExplicitBucketHistogramAggregation"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `boundaries` | Configure bucket boundaries.<br>If omitted, [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 10000] is used.<br> | `array` of `array` | `false` |
| `record_min_max` | Configure record min and max.<br>If omitted or null, true is used.<br> | * `boolean`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `boundaries` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `record_min_max` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].stream.aggregation.explicit_bucket_histogram`</details>
### ExporterDefaultHistogramAggregation <a id="ExporterDefaultHistogramAggregation"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic.exporter.otlp_http.default_histogram_aggregation`* `.meter_provider.readers[].periodic.exporter.otlp_grpc.default_histogram_aggregation`* `.meter_provider.readers[].periodic.exporter.otlp_file/development.default_histogram_aggregation`</details>
### ExporterTemporalityPreference <a id="ExporterTemporalityPreference"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic.exporter.otlp_http.temporality_preference`* `.meter_provider.readers[].periodic.exporter.otlp_grpc.temporality_preference`* `.meter_provider.readers[].periodic.exporter.otlp_file/development.temporality_preference`</details>
### IncludeExclude <a id="IncludeExclude"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `included` | Configure list of attribute key patterns to include from resource detectors.<br>Attribute keys from resource detectors are evaluated to match as follows:<br> * If the value of the attribute key exactly matches.<br> * If the value of the attribute key matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, all attributes are included.<br> | `array` of `array` | `false` |
| `excluded` | Configure list of attribute key patterns to exclude from resource detectors. Applies after .resource.detectors.attributes.included (i.e. excluded has higher priority than included).<br>Attribute keys from resource detectors are evaluated to match as follows:<br> * If the value of the attribute key exactly matches.<br> * If the value of the attribute key matches the wildcard pattern, where '?' matches any single character and '*' matches any number of characters including none.<br>If omitted, .included attributes are included.<br> | `array` of `array` | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `included` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `excluded` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].pull.exporter.prometheus/development.with_resource_constant_labels`* `.meter_provider.views[].stream.attribute_keys`* `.resource.detection/development.attributes`</details>
### InstrumentType <a id="InstrumentType"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].selector.instrument_type`</details>
### JaegerPropagator <a id="JaegerPropagator"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.propagator.composite[].jaeger`</details>
### JaegerRemoteSampler <a id="JaegerRemoteSampler"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | TODO | * `string`<br>* `null`<br> | `false` |
| `interval` | TODO | * `integer`<br>* `null`<br> | `false` |
| `initial_sampler` | TODO | [`Sampler`](#Sampler) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `endpoint` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `interval` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `initial_sampler` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.sampler.jaeger_remote`</details>
### LastValueAggregation <a id="LastValueAggregation"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].stream.aggregation.last_value`</details>
### LoggerProvider <a id="LoggerProvider"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `processors` | Configure log record processors. | `array` of [`LogRecordProcessor`](#LogRecordProcessor) | `true` |
| `limits` | Configure log record limits. See also attribute_limits. | [`LogRecordLimits`](#LogRecordLimits) | `false` |
| `logger_configurator/development` | Configure loggers.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalLoggerConfigurator`](#ExperimentalLoggerConfigurator) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `processors` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `limits` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `logger_configurator/development` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider`</details>
### LogRecordExporter <a id="LogRecordExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `otlp_http` | Configure exporter to be OTLP with HTTP transport. | [`OtlpHttpExporter`](#OtlpHttpExporter) | `false` |
| `otlp_grpc` | Configure exporter to be OTLP with gRPC transport. | [`OtlpGrpcExporter`](#OtlpGrpcExporter) | `false` |
| `otlp_file/development` | Configure exporter to be OTLP with file transport.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalOtlpFileExporter`](#ExperimentalOtlpFileExporter) | `false` |
| `console` | Configure exporter to be console. | [`ConsoleExporter`](#ConsoleExporter) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `otlp_http` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `otlp_grpc` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `otlp_file/development` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `console` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[].batch.exporter`* `.logger_provider.processors[].simple.exporter`</details>
### LogRecordLimits <a id="LogRecordLimits"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attribute_value_length_limit` | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> | * `integer`<br>* `null`<br> | `false` |
| `attribute_count_limit` | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | * `integer`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `attribute_value_length_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `attribute_count_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.limits`</details>
### LogRecordProcessor <a id="LogRecordProcessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `batch` | Configure a batch log record processor. | [`BatchLogRecordProcessor`](#BatchLogRecordProcessor) | `false` |
| `simple` | Configure a simple log record processor. | [`SimpleLogRecordProcessor`](#SimpleLogRecordProcessor) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `batch` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `simple` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[]`</details>
### MeterProvider <a id="MeterProvider"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `readers` | Configure metric readers. | `array` of [`MetricReader`](#MetricReader) | `true` |
| `views` | Configure views. <br>Each view has a selector which determines the instrument(s) it applies to, and a configuration for the resulting stream(s).<br> | `array` of [`View`](#View) | `false` |
| `exemplar_filter` | Configure the exemplar filter. <br>Values include: trace_based, always_on, always_off. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#metrics-sdk-configuration.<br>If omitted or null, trace_based is used.<br> | [`ExemplarFilter`](#ExemplarFilter) | `false` |
| `meter_configurator/development` | Configure meters.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalMeterConfigurator`](#ExperimentalMeterConfigurator) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `readers` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `views` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `exemplar_filter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `meter_configurator/development` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
        "without_units": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "without_type_suffix": {
          "type": [
            "boolean",
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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider`</details>
### MetricProducer <a id="MetricProducer"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `opencensus` | Configure metric producer to be opencensus. | [`OpenCensusMetricProducer`](#OpenCensusMetricProducer) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `opencensus` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic.producers[]`* `.meter_provider.readers[].pull.producers[]`</details>
### MetricReader <a id="MetricReader"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `periodic` | Configure a periodic metric reader. | [`PeriodicMetricReader`](#PeriodicMetricReader) | `false` |
| `pull` | Configure a pull based metric reader. | [`PullMetricReader`](#PullMetricReader) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `periodic` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `pull` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[]`</details>
### NameStringValuePair <a id="NameStringValuePair"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | TODO | `string` | `true` |
| `value` | TODO | * `string`<br>* `null`<br> | `true` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `name` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `value` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[].batch.exporter.otlp_http.headers[]`* `.logger_provider.processors[].batch.exporter.otlp_grpc.headers[]`* `.logger_provider.processors[].simple.exporter.otlp_http.headers[]`* `.logger_provider.processors[].simple.exporter.otlp_grpc.headers[]`* `.meter_provider.readers[].periodic.exporter.otlp_http.headers[]`* `.meter_provider.readers[].periodic.exporter.otlp_grpc.headers[]`* `.tracer_provider.processors[].batch.exporter.otlp_http.headers[]`* `.tracer_provider.processors[].batch.exporter.otlp_grpc.headers[]`* `.tracer_provider.processors[].simple.exporter.otlp_http.headers[]`* `.tracer_provider.processors[].simple.exporter.otlp_grpc.headers[]`</details>
### OpenCensusMetricProducer <a id="OpenCensusMetricProducer"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic.producers[].opencensus`* `.meter_provider.readers[].pull.producers[].opencensus`</details>
### OpentelemetryConfiguration <a id="OpentelemetryConfiguration"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `file_format` | TODO | `string` | `true` |
| `disabled` | TODO | * `boolean`<br>* `null`<br> | `false` |
| `log_level` | TODO | * `string`<br>* `null`<br> | `false` |
| `attribute_limits` | TODO | [`AttributeLimits`](#AttributeLimits) | `false` |
| `logger_provider` | TODO | [`LoggerProvider`](#LoggerProvider) | `false` |
| `meter_provider` | TODO | [`MeterProvider`](#MeterProvider) | `false` |
| `propagator` | TODO | [`Propagator`](#Propagator) | `false` |
| `tracer_provider` | TODO | [`TracerProvider`](#TracerProvider) | `false` |
| `resource` | TODO | [`Resource`](#Resource) | `false` |
| `instrumentation/development` | TODO | [`ExperimentalInstrumentation`](#ExperimentalInstrumentation) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `file_format` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `disabled` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `log_level` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `attribute_limits` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `logger_provider` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `meter_provider` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `propagator` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `tracer_provider` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `resource` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `instrumentation/development` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.`</details>
### OpenTracingPropagator <a id="OpenTracingPropagator"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.propagator.composite[].ottrace`</details>
### OtlpGrpcExporter <a id="OtlpGrpcExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | Configure endpoint.<br>If omitted or null, http://localhost:4317 is used.<br> | * `string`<br>* `null`<br> | `false` |
| `certificate_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `client_key_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `client_certificate_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `headers` | TODO | `array` of [`NameStringValuePair`](#NameStringValuePair) | `false` |
| `headers_list` | TODO | * `string`<br>* `null`<br> | `false` |
| `compression` | TODO | * `string`<br>* `null`<br> | `false` |
| `timeout` | TODO | * `integer`<br>* `null`<br> | `false` |
| `insecure` | Configure client transport security for the exporter's connection. <br>Only applicable when .endpoint is provided without http or https scheme. Implementations may choose to ignore .insecure.<br>If omitted or null, false is used.<br> | * `boolean`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `endpoint` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `certificate_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `client_key_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `client_certificate_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `headers` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `headers_list` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `compression` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `timeout` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `insecure` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[].batch.exporter.otlp_grpc`* `.logger_provider.processors[].simple.exporter.otlp_grpc`* `.tracer_provider.processors[].batch.exporter.otlp_grpc`* `.tracer_provider.processors[].simple.exporter.otlp_grpc`</details>
### OtlpGrpcMetricExporter <a id="OtlpGrpcMetricExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | TODO | * `string`<br>* `null`<br> | `false` |
| `certificate_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `client_key_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `client_certificate_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `headers` | TODO | `array` of [`NameStringValuePair`](#NameStringValuePair) | `false` |
| `headers_list` | TODO | * `string`<br>* `null`<br> | `false` |
| `compression` | TODO | * `string`<br>* `null`<br> | `false` |
| `timeout` | TODO | * `integer`<br>* `null`<br> | `false` |
| `insecure` | TODO | * `boolean`<br>* `null`<br> | `false` |
| `temporality_preference` | TODO | [`ExporterTemporalityPreference`](#ExporterTemporalityPreference) | `false` |
| `default_histogram_aggregation` | TODO | [`ExporterDefaultHistogramAggregation`](#ExporterDefaultHistogramAggregation) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `endpoint` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `certificate_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `client_key_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `client_certificate_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `headers` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `headers_list` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `compression` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `timeout` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `insecure` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `temporality_preference` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `default_histogram_aggregation` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic.exporter.otlp_grpc`</details>
### OtlpHttpEncoding <a id="OtlpHttpEncoding"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[].batch.exporter.otlp_http.encoding`* `.logger_provider.processors[].simple.exporter.otlp_http.encoding`* `.meter_provider.readers[].periodic.exporter.otlp_http.encoding`* `.tracer_provider.processors[].batch.exporter.otlp_http.encoding`* `.tracer_provider.processors[].simple.exporter.otlp_http.encoding`</details>
### OtlpHttpExporter <a id="OtlpHttpExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | TODO | * `string`<br>* `null`<br> | `false` |
| `certificate_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `client_key_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `client_certificate_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `headers` | TODO | `array` of [`NameStringValuePair`](#NameStringValuePair) | `false` |
| `headers_list` | TODO | * `string`<br>* `null`<br> | `false` |
| `compression` | TODO | * `string`<br>* `null`<br> | `false` |
| `timeout` | TODO | * `integer`<br>* `null`<br> | `false` |
| `encoding` | Configure the encoding used for messages. <br>Values include: protobuf, json. Implementations may not support json.<br>If omitted or null, protobuf is used.<br> | [`OtlpHttpEncoding`](#OtlpHttpEncoding) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `endpoint` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `certificate_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `client_key_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `client_certificate_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `headers` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `headers_list` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `compression` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `timeout` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `encoding` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[].batch.exporter.otlp_http`* `.logger_provider.processors[].simple.exporter.otlp_http`* `.tracer_provider.processors[].batch.exporter.otlp_http`* `.tracer_provider.processors[].simple.exporter.otlp_http`</details>
### OtlpHttpMetricExporter <a id="OtlpHttpMetricExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | Configure endpoint, including the metric specific path.<br>If omitted or null, http://localhost:4318/v1/metrics is used.<br> | * `string`<br>* `null`<br> | `false` |
| `certificate_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `client_key_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `client_certificate_file` | TODO | * `string`<br>* `null`<br> | `false` |
| `headers` | TODO | `array` of [`NameStringValuePair`](#NameStringValuePair) | `false` |
| `headers_list` | TODO | * `string`<br>* `null`<br> | `false` |
| `compression` | TODO | * `string`<br>* `null`<br> | `false` |
| `timeout` | TODO | * `integer`<br>* `null`<br> | `false` |
| `encoding` | TODO | [`OtlpHttpEncoding`](#OtlpHttpEncoding) | `false` |
| `temporality_preference` | TODO | [`ExporterTemporalityPreference`](#ExporterTemporalityPreference) | `false` |
| `default_histogram_aggregation` | TODO | [`ExporterDefaultHistogramAggregation`](#ExporterDefaultHistogramAggregation) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `endpoint` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `certificate_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `client_key_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `client_certificate_file` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `headers` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `headers_list` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `compression` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `timeout` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `encoding` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `temporality_preference` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `default_histogram_aggregation` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic.exporter.otlp_http`</details>
### ParentBasedSampler <a id="ParentBasedSampler"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `root` | TODO | [`Sampler`](#Sampler) | `false` |
| `remote_parent_sampled` | TODO | [`Sampler`](#Sampler) | `false` |
| `remote_parent_not_sampled` | TODO | [`Sampler`](#Sampler) | `false` |
| `local_parent_sampled` | TODO | [`Sampler`](#Sampler) | `false` |
| `local_parent_not_sampled` | TODO | [`Sampler`](#Sampler) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `root` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `remote_parent_sampled` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `remote_parent_not_sampled` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `local_parent_sampled` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `local_parent_not_sampled` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.sampler.parent_based`</details>
### PeriodicMetricReader <a id="PeriodicMetricReader"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `interval` | Configure delay interval (in milliseconds) between start of two consecutive exports. <br>Value must be non-negative.<br>If omitted or null, 60000 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `timeout` | Configure maximum allowed time (in milliseconds) to export data. <br>Value must be non-negative. A value of 0 indicates no limit (infinity).<br>If omitted or null, 30000 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `exporter` | Configure exporter. | [`PushMetricExporter`](#PushMetricExporter) | `true` |
| `producers` | Configure metric producers. | `array` of [`MetricProducer`](#MetricProducer) | `false` |
| `cardinality_limits` | Configure cardinality limits. | [`CardinalityLimits`](#CardinalityLimits) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `interval` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `timeout` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `exporter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `producers` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `cardinality_limits` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic`</details>
### Propagator <a id="Propagator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `composite` | Configure the propagators in the composite text map propagator. Entries from .composite_list are appended to the list here with duplicates filtered out.<br>Built-in propagator keys include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party keys include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> | `array` of [`TextMapPropagator`](#TextMapPropagator) | `false` |
| `composite_list` | Configure the propagators in the composite text map propagator. Entries are appended to .composite with duplicates filtered out.<br>The value is a comma separated list of propagator identifiers matching the format of OTEL_PROPAGATORS. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>Built-in propagator identifiers include: tracecontext, baggage, b3, b3multi, jaeger, ottrace. Known third party identifiers include: xray. <br>If the resolved list of propagators (from .composite and .composite_list) is empty, a noop propagator is used.<br> | * `string`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `composite` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `composite_list` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.propagator`</details>
### PullMetricExporter <a id="PullMetricExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `prometheus/development` | TODO | [`ExperimentalPrometheusMetricExporter`](#ExperimentalPrometheusMetricExporter) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `prometheus/development` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].pull.exporter`</details>
### PullMetricReader <a id="PullMetricReader"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `exporter` | Configure exporter. | [`PullMetricExporter`](#PullMetricExporter) | `true` |
| `producers` | Configure metric producers. | `array` of [`MetricProducer`](#MetricProducer) | `false` |
| `cardinality_limits` | Configure cardinality limits. | [`CardinalityLimits`](#CardinalityLimits) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `exporter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `producers` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `cardinality_limits` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].pull`</details>
### PushMetricExporter <a id="PushMetricExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `otlp_http` | TODO | [`OtlpHttpMetricExporter`](#OtlpHttpMetricExporter) | `false` |
| `otlp_grpc` | TODO | [`OtlpGrpcMetricExporter`](#OtlpGrpcMetricExporter) | `false` |
| `otlp_file/development` | TODO | [`ExperimentalOtlpFileMetricExporter`](#ExperimentalOtlpFileMetricExporter) | `false` |
| `console` | TODO | [`ConsoleExporter`](#ConsoleExporter) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `otlp_http` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `otlp_grpc` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `otlp_file/development` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `console` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.readers[].periodic.exporter`</details>
### Resource <a id="Resource"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attributes` | Configure resource attributes. Entries have higher priority than entries from .resource.attributes_list.<br>Entries must contain .name and .value, and may optionally include .type. If an entry's .type omitted or null, string is used.<br>The .value's type must match the .type. Values for .type include: string, bool, int, double, string_array, bool_array, int_array, double_array.<br> | `array` of [`AttributeNameValue`](#AttributeNameValue) | `false` |
| `detection/development` | Configure resource detection.<br>This type is in development and subject to breaking changes in minor versions.<br>If omitted or null, resource detection is disabled.<br> | [`ExperimentalResourceDetection`](#ExperimentalResourceDetection) | `false` |
| `schema_url` | Configure resource schema URL.<br>If omitted or null, no schema URL is used.<br> | * `string`<br>* `null`<br> | `false` |
| `attributes_list` | Configure resource attributes. Entries have lower priority than entries from .resource.attributes.<br>The value is a list of comma separated key-value pairs matching the format of OTEL_RESOURCE_ATTRIBUTES. See https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/sdk-environment-variables.md#general-sdk-configuration for details.<br>If omitted or null, no resource attributes are added.<br> | * `string`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `attributes` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `detection/development` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `schema_url` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `attributes_list` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
      "patternProperties": {
        ".*": {
          "type": [
            "object",
            "null"
          ]
        }
      }
    }
  }
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.resource`</details>
### Sampler <a id="Sampler"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `always_off` | Configure sampler to be always_off. | [`AlwaysOffSampler`](#AlwaysOffSampler) | `false` |
| `always_on` | Configure sampler to be always_on. | [`AlwaysOnSampler`](#AlwaysOnSampler) | `false` |
| `jaeger_remote` | TODO | [`JaegerRemoteSampler`](#JaegerRemoteSampler) | `false` |
| `parent_based` | Configure sampler to be parent_based. | [`ParentBasedSampler`](#ParentBasedSampler) | `false` |
| `trace_id_ratio_based` | Configure sampler to be trace_id_ratio_based. | [`TraceIdRatioBasedSampler`](#TraceIdRatioBasedSampler) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `always_off` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `always_on` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `jaeger_remote` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `parent_based` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `trace_id_ratio_based` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.sampler`</details>
### SimpleLogRecordProcessor <a id="SimpleLogRecordProcessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `exporter` | Configure exporter. | [`LogRecordExporter`](#LogRecordExporter) | `true` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `exporter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.logger_provider.processors[].simple`</details>
### SimpleSpanProcessor <a id="SimpleSpanProcessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `exporter` | Configure exporter. | [`SpanExporter`](#SpanExporter) | `true` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `exporter` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.processors[].simple`</details>
### SpanExporter <a id="SpanExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `otlp_http` | Configure exporter to be OTLP with HTTP transport. | [`OtlpHttpExporter`](#OtlpHttpExporter) | `false` |
| `otlp_grpc` | Configure exporter to be OTLP with gRPC transport. | [`OtlpGrpcExporter`](#OtlpGrpcExporter) | `false` |
| `otlp_file/development` | Configure exporter to be OTLP with file transport.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalOtlpFileExporter`](#ExperimentalOtlpFileExporter) | `false` |
| `console` | Configure exporter to be console. | [`ConsoleExporter`](#ConsoleExporter) | `false` |
| `zipkin` | Configure exporter to be zipkin. | [`ZipkinSpanExporter`](#ZipkinSpanExporter) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `otlp_http` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `otlp_grpc` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `otlp_file/development` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `console` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `zipkin` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.processors[].batch.exporter`* `.tracer_provider.processors[].simple.exporter`</details>
### SpanLimits <a id="SpanLimits"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `attribute_value_length_limit` | Configure max attribute value size. Overrides .attribute_limits.attribute_value_length_limit. <br>Value must be non-negative.<br>If omitted or null, there is no limit.<br> | * `integer`<br>* `null`<br> | `false` |
| `attribute_count_limit` | Configure max attribute count. Overrides .attribute_limits.attribute_count_limit. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `event_count_limit` | Configure max span event count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `link_count_limit` | Configure max span link count. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `event_attribute_count_limit` | Configure max attributes per span event. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `link_attribute_count_limit` | Configure max attributes per span link. <br>Value must be non-negative.<br>If omitted or null, 128 is used.<br> | * `integer`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `attribute_value_length_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `attribute_count_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `event_count_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `link_count_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `event_attribute_count_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `link_attribute_count_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.limits`</details>
### SpanProcessor <a id="SpanProcessor"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `batch` | Configure a batch span processor. | [`BatchSpanProcessor`](#BatchSpanProcessor) | `false` |
| `simple` | Configure a simple span processor. | [`SimpleSpanProcessor`](#SimpleSpanProcessor) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `batch` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `simple` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.processors[]`</details>
### SumAggregation <a id="SumAggregation"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].stream.aggregation.sum`</details>
### TextMapPropagator <a id="TextMapPropagator"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `tracecontext` | Include the w3c trace context propagator. | [`TraceContextPropagator`](#TraceContextPropagator) | `false` |
| `baggage` | Include the w3c baggage propagator. | [`BaggagePropagator`](#BaggagePropagator) | `false` |
| `b3` | Include the zipkin b3 propagator. | [`B3Propagator`](#B3Propagator) | `false` |
| `b3multi` | Include the zipkin b3 multi propagator. | [`B3MultiPropagator`](#B3MultiPropagator) | `false` |
| `jaeger` | Include the jaeger propagator. | [`JaegerPropagator`](#JaegerPropagator) | `false` |
| `ottrace` | Include the opentracing propagator. | [`OpenTracingPropagator`](#OpenTracingPropagator) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `tracecontext` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `baggage` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `b3` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `b3multi` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `jaeger` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `ottrace` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.propagator.composite[]`</details>
### TraceContextPropagator <a id="TraceContextPropagator"></a>

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.propagator.composite[].tracecontext`</details>
### TraceIdRatioBasedSampler <a id="TraceIdRatioBasedSampler"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `ratio` | TODO | * `number`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `ratio` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.sampler.trace_id_ratio_based`</details>
### TracerProvider <a id="TracerProvider"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `processors` | Configure span processors. | `array` of [`SpanProcessor`](#SpanProcessor) | `true` |
| `limits` | Configure span limits. See also attribute_limits. | [`SpanLimits`](#SpanLimits) | `false` |
| `sampler` | Configure the sampler.<br>If omitted, parent based sampler with a root of always_on is used.<br> | [`Sampler`](#Sampler) | `false` |
| `tracer_configurator/development` | Configure tracers.<br>This type is in development and subject to breaking changes in minor versions.<br> | [`ExperimentalTracerConfigurator`](#ExperimentalTracerConfigurator) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `processors` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `limits` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `sampler` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `tracer_configurator/development` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
      },
      "required": [
        "disabled"
      ]
    }
  }
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider`</details>
### View <a id="View"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `selector` | Configure view selector. <br>Selection criteria is additive as described in https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#instrument-selection-criteria.<br> | [`ViewSelector`](#ViewSelector) | `false` |
| `stream` | Configure view stream. | [`ViewStream`](#ViewStream) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `selector` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `stream` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[]`</details>
### ViewSelector <a id="ViewSelector"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `instrument_name` | Configure instrument name selection criteria.<br>If omitted or null, all instrument names match.<br> | * `string`<br>* `null`<br> | `false` |
| `instrument_type` | Configure instrument type selection criteria.<br>Values include: counter, gauge, histogram, observable_counter, observable_gauge, observable_up_down_counter, up_down_counter.<br>If omitted or null, all instrument types match.<br> | [`InstrumentType`](#InstrumentType) | `false` |
| `unit` | Configure the instrument unit selection criteria.<br>If omitted or null, all instrument units match.<br> | * `string`<br>* `null`<br> | `false` |
| `meter_name` | Configure meter name selection criteria.<br>If omitted or null, all meter names match.<br> | * `string`<br>* `null`<br> | `false` |
| `meter_version` | Configure meter version selection criteria.<br>If omitted or null, all meter versions match.<br> | * `string`<br>* `null`<br> | `false` |
| `meter_schema_url` | Configure meter schema url selection criteria.<br>If omitted or null, all meter schema URLs match.<br> | * `string`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `instrument_name` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `instrument_type` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `unit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `meter_name` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `meter_version` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `meter_schema_url` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].selector`</details>
### ViewStream <a id="ViewStream"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `name` | Configure metric name of the resulting stream(s).<br>If omitted or null, the instrument's original name is used.<br> | * `string`<br>* `null`<br> | `false` |
| `description` | Configure metric description of the resulting stream(s).<br>If omitted or null, the instrument's origin description is used.<br> | * `string`<br>* `null`<br> | `false` |
| `aggregation` | Configure aggregation of the resulting stream(s). <br>Values include: default, drop, explicit_bucket_histogram, base2_exponential_bucket_histogram, last_value, sum. For behavior of values see https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/sdk.md#aggregation.<br>If omitted, default is used.<br> | [`Aggregation`](#Aggregation) | `false` |
| `aggregation_cardinality_limit` | Configure the aggregation cardinality limit.<br>If omitted or null, the metric reader's default cardinality limit is used.<br> | * `integer`<br>* `null`<br> | `false` |
| `attribute_keys` | Configure attribute keys retained in the resulting stream(s).<br> | [`IncludeExclude`](#IncludeExclude) | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `name` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `description` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `aggregation` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `aggregation_cardinality_limit` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `attribute_keys` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.meter_provider.views[].stream`</details>
### ZipkinSpanExporter <a id="ZipkinSpanExporter"></a>

| Property | Description | Type | Required? |
|---|---|---|---|
| `endpoint` | Configure endpoint.<br>If omitted or null, http://localhost:9411/api/v2/spans is used.<br> | * `string`<br>* `null`<br> | `false` |
| `timeout` | Configure max time (in milliseconds) to wait for each export. <br>Value must be non-negative. A value of 0 indicates indefinite.<br>If omitted or null, 10000 is used.<br> | * `integer`<br>* `null`<br> | `false` |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `endpoint` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |
| `timeout` |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |unknown |

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
}</pre></details>
<details>
<summary>Path patterns</summary>

* `.tracer_provider.processors[].batch.exporter.zipkin`* `.tracer_provider.processors[].simple.exporter.zipkin`</details>
