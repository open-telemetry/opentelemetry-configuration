# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [logger\_provider.json\*](../schema/logger_provider.json "open original schema") |

## BatchLogRecordProcessor Type

`object` ([Details](logger_provider-defs-batchlogrecordprocessor.md))

# BatchLogRecordProcessor Properties

| Property                                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                     |
| :------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [schedule\_delay](#schedule_delay)                 | `integer` | Optional | can be null    | [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-schedule_delay.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/schedule_delay")               |
| [export\_timeout](#export_timeout)                 | `integer` | Optional | can be null    | [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-export_timeout.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/export_timeout")               |
| [max\_queue\_size](#max_queue_size)                | `integer` | Optional | can be null    | [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-max_queue_size.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/max_queue_size")               |
| [max\_export\_batch\_size](#max_export_batch_size) | `integer` | Optional | can be null    | [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-max_export_batch_size.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/max_export_batch_size") |
| [exporter](#exporter)                              | `object`  | Required | cannot be null | [Untitled schema](logger_provider-defs-logrecordexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/exporter")                                                     |

## schedule\_delay



`schedule_delay`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-schedule_delay.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/schedule_delay")

### schedule\_delay Type

`integer`

### schedule\_delay Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## export\_timeout



`export_timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-export_timeout.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/export_timeout")

### export\_timeout Type

`integer`

### export\_timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## max\_queue\_size



`max_queue_size`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-max_queue_size.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/max_queue_size")

### max\_queue\_size Type

`integer`

### max\_queue\_size Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## max\_export\_batch\_size



`max_export_batch_size`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-max_export_batch_size.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/max_export_batch_size")

### max\_export\_batch\_size Type

`integer`

### max\_export\_batch\_size Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## exporter



`exporter`

* is required

* Type: `object` ([Details](logger_provider-defs-logrecordexporter.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-logrecordexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/exporter")

### exporter Type

`object` ([Details](logger_provider-defs-logrecordexporter.md))

### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`
