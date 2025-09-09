# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [logger\_provider.json\*](../schema/logger_provider.json "open original schema") |

## LogRecordProcessor Type

`object` ([Details](logger_provider-defs-logrecordprocessor.md))

## LogRecordProcessor Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# LogRecordProcessor Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                 |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [batch](#batch)       | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-batchlogrecordprocessor.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/properties/batch")                   |
| [simple](#simple)     | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-simplelogrecordprocessor.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/properties/simple")                 |
| `.*`                  | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-logrecordprocessor-patternproperties-.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/patternProperties/.*") |
| Additional Properties | Any      | Optional | can be null    |                                                                                                                                                                                            |

## batch



`batch`

* is optional

* Type: `object` ([Details](logger_provider-defs-batchlogrecordprocessor.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/properties/batch")

### batch Type

`object` ([Details](logger_provider-defs-batchlogrecordprocessor.md))

## simple



`simple`

* is optional

* Type: `object` ([Details](logger_provider-defs-simplelogrecordprocessor.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-simplelogrecordprocessor.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/properties/simple")

### simple Type

`object` ([Details](logger_provider-defs-simplelogrecordprocessor.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](logger_provider-defs-logrecordprocessor-patternproperties-.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-logrecordprocessor-patternproperties-.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/patternProperties/.*")

### .\* Type

`object` ([Details](logger_provider-defs-logrecordprocessor-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
