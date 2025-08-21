# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [logger\_provider.json\*](../schema/logger_provider.json "open original schema") |

## LogRecordLimits Type

`object` ([Details](logger_provider-defs-logrecordlimits.md))

# LogRecordLimits Properties

| Property                                                         | Type      | Required | Nullable    | Defined by                                                                                                                                                                                                                   |
| :--------------------------------------------------------------- | :-------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attribute\_value\_length\_limit](#attribute_value_length_limit) | `integer` | Optional | can be null | [Untitled schema](logger_provider-defs-logrecordlimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits/properties/attribute_value_length_limit") |
| [attribute\_count\_limit](#attribute_count_limit)                | `integer` | Optional | can be null | [Untitled schema](logger_provider-defs-logrecordlimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits/properties/attribute_count_limit")               |

## attribute\_value\_length\_limit



`attribute_value_length_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-logrecordlimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits/properties/attribute_value_length_limit")

### attribute\_value\_length\_limit Type

`integer`

### attribute\_value\_length\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## attribute\_count\_limit



`attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-logrecordlimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits/properties/attribute_count_limit")

### attribute\_count\_limit Type

`integer`

### attribute\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`
