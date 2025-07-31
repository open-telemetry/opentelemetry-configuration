# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/SimpleLogRecordProcessor
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [logger\_provider.json\*](../schema/logger_provider.json "open original schema") |

## SimpleLogRecordProcessor Type

`object` ([Details](logger_provider-defs-simplelogrecordprocessor.md))

# SimpleLogRecordProcessor Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                  |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [exporter](#exporter) | `object` | Required | cannot be null | [Untitled schema](logger_provider-defs-logrecordexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/SimpleLogRecordProcessor/properties/exporter") |

## exporter



`exporter`

* is required

* Type: `object` ([Details](logger_provider-defs-logrecordexporter.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-logrecordexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/SimpleLogRecordProcessor/properties/exporter")

### exporter Type

`object` ([Details](logger_provider-defs-logrecordexporter.md))

### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`
