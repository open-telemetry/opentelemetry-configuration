# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## BatchSpanProcessor Type

`object` ([Details](tracer_provider-defs-batchspanprocessor.md))

# BatchSpanProcessor Properties

| Property                                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                           |
| :------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [schedule\_delay](#schedule_delay)                 | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-schedule_delay.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/schedule_delay")               |
| [export\_timeout](#export_timeout)                 | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-export_timeout.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/export_timeout")               |
| [max\_queue\_size](#max_queue_size)                | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-max_queue_size.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/max_queue_size")               |
| [max\_export\_batch\_size](#max_export_batch_size) | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-max_export_batch_size.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/max_export_batch_size") |
| [exporter](#exporter)                              | `object`  | Required | cannot be null | [Untitled schema](tracer_provider-defs-spanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/exporter")                                                     |

## schedule\_delay



`schedule_delay`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-schedule_delay.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/schedule_delay")

### schedule\_delay Type

`integer`

### schedule\_delay Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## export\_timeout



`export_timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-export_timeout.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/export_timeout")

### export\_timeout Type

`integer`

### export\_timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## max\_queue\_size



`max_queue_size`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-max_queue_size.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/max_queue_size")

### max\_queue\_size Type

`integer`

### max\_queue\_size Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## max\_export\_batch\_size



`max_export_batch_size`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-max_export_batch_size.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/max_export_batch_size")

### max\_export\_batch\_size Type

`integer`

### max\_export\_batch\_size Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## exporter



`exporter`

* is required

* Type: `object` ([Details](tracer_provider-defs-spanexporter.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-spanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/exporter")

### exporter Type

`object` ([Details](tracer_provider-defs-spanexporter.md))

### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`
