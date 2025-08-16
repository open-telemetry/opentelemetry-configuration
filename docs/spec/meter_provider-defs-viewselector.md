# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## ViewSelector Type

`object` ([Details](meter_provider-defs-viewselector.md))

# ViewSelector Properties

| Property                                | Type     | Required | Nullable    | Defined by                                                                                                                                                                                   |
| :-------------------------------------- | :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [instrument\_name](#instrument_name)    | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-instrument_name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/instrument_name")   |
| [instrument\_type](#instrument_type)    | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-instrument_type.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/instrument_type")   |
| [unit](#unit)                           | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-unit.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/unit")                         |
| [meter\_name](#meter_name)              | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-meter_name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_name")             |
| [meter\_version](#meter_version)        | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-meter_version.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_version")       |
| [meter\_schema\_url](#meter_schema_url) | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-meter_schema_url.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_schema_url") |

## instrument\_name



`instrument_name`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-instrument_name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/instrument_name")

### instrument\_name Type

`string`

## instrument\_type



`instrument_type`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-instrument_type.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/instrument_type")

### instrument\_type Type

`string`

### instrument\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"counter"`                    |             |
| `"gauge"`                      |             |
| `"histogram"`                  |             |
| `"observable_counter"`         |             |
| `"observable_gauge"`           |             |
| `"observable_up_down_counter"` |             |
| `"up_down_counter"`            |             |

## unit



`unit`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-unit.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/unit")

### unit Type

`string`

## meter\_name



`meter_name`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-meter_name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_name")

### meter\_name Type

`string`

## meter\_version



`meter_version`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-meter_version.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_version")

### meter\_version Type

`string`

## meter\_schema\_url



`meter_schema_url`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-meter_schema_url.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_schema_url")

### meter\_schema\_url Type

`string`
