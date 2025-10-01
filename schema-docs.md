### Aggregation <a id="Aggregation"></a>

| Property | Type | Description |
|---|---|---|
| default | TODO | TODO |
| drop | TODO | TODO |
| explicit_bucket_histogram | TODO | TODO |
| base2_exponential_bucket_histogram | TODO | TODO |
| last_value | TODO | TODO |
| sum | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| default |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| drop |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| explicit_bucket_histogram |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| base2_exponential_bucket_histogram |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| last_value |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| sum |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| attribute_value_length_limit | TODO | TODO |
| attribute_count_limit | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_value_length_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| attribute_count_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| name | TODO | TODO |
| value | TODO | TODO |
| type | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| name |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| value |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| type |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| max_scale | TODO | TODO |
| max_size | TODO | TODO |
| record_min_max | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| max_scale |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| max_size |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| record_min_max |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| schedule_delay | TODO | TODO |
| export_timeout | TODO | TODO |
| max_queue_size | TODO | TODO |
| max_export_batch_size | TODO | TODO |
| exporter | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| schedule_delay |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| export_timeout |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| max_queue_size |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| max_export_batch_size |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| exporter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| schedule_delay | TODO | TODO |
| export_timeout | TODO | TODO |
| max_queue_size | TODO | TODO |
| max_export_batch_size | TODO | TODO |
| exporter | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| schedule_delay |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| export_timeout |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| max_queue_size |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| max_export_batch_size |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| exporter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| default | TODO | TODO |
| counter | TODO | TODO |
| gauge | TODO | TODO |
| histogram | TODO | TODO |
| observable_counter | TODO | TODO |
| observable_gauge | TODO | TODO |
| observable_up_down_counter | TODO | TODO |
| up_down_counter | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| default |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| counter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| gauge |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| histogram |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| observable_counter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| observable_gauge |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| observable_up_down_counter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| up_down_counter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| peer | TODO | TODO |
| http | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| peer |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| http |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| client | TODO | TODO |
| server | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| client |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| server |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| general | TODO | TODO |
| cpp | TODO | TODO |
| dotnet | TODO | TODO |
| erlang | TODO | TODO |
| go | TODO | TODO |
| java | TODO | TODO |
| js | TODO | TODO |
| php | TODO | TODO |
| python | TODO | TODO |
| ruby | TODO | TODO |
| rust | TODO | TODO |
| swift | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| general |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| cpp |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| dotnet |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| erlang |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| go |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| java |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| js |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| php |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| python |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| ruby |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| rust |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| swift |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| disabled | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| disabled |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| default_config | TODO | TODO |
| loggers | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| default_config |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| loggers |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| name | TODO | TODO |
| config | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| name |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| config |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| disabled | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| disabled |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| default_config | TODO | TODO |
| meters | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| default_config |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| meters |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| name | TODO | TODO |
| config | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| name |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| config |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| output_stream | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| output_stream |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| output_stream | TODO | TODO |
| temporality_preference | TODO | TODO |
| default_histogram_aggregation | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| output_stream |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| temporality_preference |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| default_histogram_aggregation |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| service_mapping | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| service_mapping |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| host | TODO | TODO |
| port | TODO | TODO |
| without_units | TODO | TODO |
| without_type_suffix | TODO | TODO |
| without_scope_info | TODO | TODO |
| with_resource_constant_labels | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| host |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| port |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| without_units |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| without_type_suffix |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| without_scope_info |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| with_resource_constant_labels |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| attributes | TODO | TODO |
| detectors | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| attributes |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| detectors |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| disabled | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| disabled |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| default_config | TODO | TODO |
| tracers | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| default_config |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| tracers |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| name | TODO | TODO |
| config | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| name |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| config |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| boundaries | TODO | TODO |
| record_min_max | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| boundaries |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| record_min_max |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| included | TODO | TODO |
| excluded | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| included |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| excluded |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| endpoint | TODO | TODO |
| interval | TODO | TODO |
| initial_sampler | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| interval |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| initial_sampler |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| processors | TODO | TODO |
| limits | TODO | TODO |
| logger_configurator/development | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| processors |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| limits |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| logger_configurator/development |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| otlp_http | TODO | TODO |
| otlp_grpc | TODO | TODO |
| otlp_file/development | TODO | TODO |
| console | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| otlp_http |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| otlp_grpc |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| otlp_file/development |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| console |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| attribute_value_length_limit | TODO | TODO |
| attribute_count_limit | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_value_length_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| attribute_count_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| batch | TODO | TODO |
| simple | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| batch |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| simple |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| readers | TODO | TODO |
| views | TODO | TODO |
| exemplar_filter | TODO | TODO |
| meter_configurator/development | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| readers |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| views |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| exemplar_filter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| meter_configurator/development |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| opencensus | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| opencensus |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| periodic | TODO | TODO |
| pull | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| periodic |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| pull |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| name | TODO | TODO |
| value | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| name |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| value |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| file_format | TODO | TODO |
| disabled | TODO | TODO |
| log_level | TODO | TODO |
| attribute_limits | TODO | TODO |
| logger_provider | TODO | TODO |
| meter_provider | TODO | TODO |
| propagator | TODO | TODO |
| tracer_provider | TODO | TODO |
| resource | TODO | TODO |
| instrumentation/development | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| file_format |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| disabled |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| log_level |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| attribute_limits |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| logger_provider |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| meter_provider |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| propagator |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| tracer_provider |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| resource |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| instrumentation/development |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| endpoint | TODO | TODO |
| certificate_file | TODO | TODO |
| client_key_file | TODO | TODO |
| client_certificate_file | TODO | TODO |
| headers | TODO | TODO |
| headers_list | TODO | TODO |
| compression | TODO | TODO |
| timeout | TODO | TODO |
| insecure | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| certificate_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| client_key_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| client_certificate_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| headers |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| headers_list |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| compression |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| timeout |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| insecure |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| endpoint | TODO | TODO |
| certificate_file | TODO | TODO |
| client_key_file | TODO | TODO |
| client_certificate_file | TODO | TODO |
| headers | TODO | TODO |
| headers_list | TODO | TODO |
| compression | TODO | TODO |
| timeout | TODO | TODO |
| insecure | TODO | TODO |
| temporality_preference | TODO | TODO |
| default_histogram_aggregation | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| certificate_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| client_key_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| client_certificate_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| headers |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| headers_list |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| compression |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| timeout |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| insecure |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| temporality_preference |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| default_histogram_aggregation |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| endpoint | TODO | TODO |
| certificate_file | TODO | TODO |
| client_key_file | TODO | TODO |
| client_certificate_file | TODO | TODO |
| headers | TODO | TODO |
| headers_list | TODO | TODO |
| compression | TODO | TODO |
| timeout | TODO | TODO |
| encoding | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| certificate_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| client_key_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| client_certificate_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| headers |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| headers_list |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| compression |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| timeout |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| encoding |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| endpoint | TODO | TODO |
| certificate_file | TODO | TODO |
| client_key_file | TODO | TODO |
| client_certificate_file | TODO | TODO |
| headers | TODO | TODO |
| headers_list | TODO | TODO |
| compression | TODO | TODO |
| timeout | TODO | TODO |
| encoding | TODO | TODO |
| temporality_preference | TODO | TODO |
| default_histogram_aggregation | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| certificate_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| client_key_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| client_certificate_file |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| headers |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| headers_list |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| compression |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| timeout |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| encoding |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| temporality_preference |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| default_histogram_aggregation |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| root | TODO | TODO |
| remote_parent_sampled | TODO | TODO |
| remote_parent_not_sampled | TODO | TODO |
| local_parent_sampled | TODO | TODO |
| local_parent_not_sampled | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| root |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| remote_parent_sampled |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| remote_parent_not_sampled |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| local_parent_sampled |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| local_parent_not_sampled |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| interval | TODO | TODO |
| timeout | TODO | TODO |
| exporter | TODO | TODO |
| producers | TODO | TODO |
| cardinality_limits | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| interval |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| timeout |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| exporter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| producers |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| cardinality_limits |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| composite | TODO | TODO |
| composite_list | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| composite |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| composite_list |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| prometheus/development | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| prometheus/development |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| exporter | TODO | TODO |
| producers | TODO | TODO |
| cardinality_limits | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| exporter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| producers |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| cardinality_limits |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| otlp_http | TODO | TODO |
| otlp_grpc | TODO | TODO |
| otlp_file/development | TODO | TODO |
| console | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| otlp_http |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| otlp_grpc |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| otlp_file/development |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| console |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| attributes | TODO | TODO |
| detection/development | TODO | TODO |
| schema_url | TODO | TODO |
| attributes_list | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| attributes |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| detection/development |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| schema_url |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| attributes_list |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| always_off | TODO | TODO |
| always_on | TODO | TODO |
| jaeger_remote | TODO | TODO |
| parent_based | TODO | TODO |
| trace_id_ratio_based | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| always_off |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| always_on |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| jaeger_remote |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| parent_based |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| trace_id_ratio_based |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| exporter | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| exporter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| exporter | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| exporter |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| otlp_http | TODO | TODO |
| otlp_grpc | TODO | TODO |
| otlp_file/development | TODO | TODO |
| console | TODO | TODO |
| zipkin | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| otlp_http |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| otlp_grpc |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| otlp_file/development |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| console |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| zipkin |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| attribute_value_length_limit | TODO | TODO |
| attribute_count_limit | TODO | TODO |
| event_count_limit | TODO | TODO |
| link_count_limit | TODO | TODO |
| event_attribute_count_limit | TODO | TODO |
| link_attribute_count_limit | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| attribute_value_length_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| attribute_count_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| event_count_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| link_count_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| event_attribute_count_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| link_attribute_count_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| batch | TODO | TODO |
| simple | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| batch |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| simple |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| tracecontext | TODO | TODO |
| baggage | TODO | TODO |
| b3 | TODO | TODO |
| b3multi | TODO | TODO |
| jaeger | TODO | TODO |
| ottrace | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| tracecontext |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| baggage |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| b3 |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| b3multi |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| jaeger |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| ottrace |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| ratio | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ratio |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| processors | TODO | TODO |
| limits | TODO | TODO |
| sampler | TODO | TODO |
| tracer_configurator/development | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| processors |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| limits |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| sampler |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| tracer_configurator/development |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| selector | TODO | TODO |
| stream | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| selector |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| stream |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| instrument_name | TODO | TODO |
| instrument_type | TODO | TODO |
| unit | TODO | TODO |
| meter_name | TODO | TODO |
| meter_version | TODO | TODO |
| meter_schema_url | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| instrument_name |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| instrument_type |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| unit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| meter_name |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| meter_version |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| meter_schema_url |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| name | TODO | TODO |
| description | TODO | TODO |
| aggregation | TODO | TODO |
| aggregation_cardinality_limit | TODO | TODO |
| attribute_keys | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| name |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| description |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| aggregation |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| aggregation_cardinality_limit |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| attribute_keys |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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

| Property | Type | Description |
|---|---|---|
| endpoint | TODO | TODO |
| timeout | TODO | TODO |

| Property |c++ |c# |erlang |go |java |js |php |python |ruby |rust |swift |
|---|---|---|---|---|---|---|---|---|---|---|---|
| endpoint |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |
| timeout |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |TODO |

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
