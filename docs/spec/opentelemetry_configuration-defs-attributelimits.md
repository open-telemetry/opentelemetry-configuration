# Untitled object in OpenTelemetryConfiguration Schema

```txt
https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [opentelemetry\_configuration.json\*](../schema/opentelemetry_configuration.json "open original schema") |

## AttributeLimits Type

`object` ([Details](opentelemetry_configuration-defs-attributelimits.md))

# AttributeLimits Properties

| Property                                                         | Type      | Required | Nullable    | Defined by                                                                                                                                                                                                                                                      |
| :--------------------------------------------------------------- | :-------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attribute\_value\_length\_limit](#attribute_value_length_limit) | `integer` | Optional | can be null | [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits/properties/attribute_value_length_limit") |
| [attribute\_count\_limit](#attribute_count_limit)                | `integer` | Optional | can be null | [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits/properties/attribute_count_limit")               |
| Additional Properties                                            | Any       | Optional | can be null |                                                                                                                                                                                                                                                                 |

## attribute\_value\_length\_limit



`attribute_value_length_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits/properties/attribute_value_length_limit")

### attribute\_value\_length\_limit Type

`integer`

## attribute\_count\_limit



`attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits/properties/attribute_count_limit")

### attribute\_count\_limit Type

`integer`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
