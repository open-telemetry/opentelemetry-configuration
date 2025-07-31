# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## ViewStream Type

`object` ([Details](meter_provider-defs-viewstream.md))

# ViewStream Properties

| Property                                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :---------------------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                                     | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-viewstream-properties-name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/name")                                                   |
| [description](#description)                                       | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-viewstream-properties-description.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/description")                                     |
| [aggregation](#aggregation)                                       | `object`  | Optional | cannot be null | [Untitled schema](meter_provider-defs-aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/aggregation")                                                           |
| [aggregation\_cardinality\_limit](#aggregation_cardinality_limit) | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-viewstream-properties-aggregation_cardinality_limit.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/aggregation_cardinality_limit") |
| [attribute\_keys](#attribute_keys)                                | `object`  | Optional | cannot be null | [Untitled schema](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/attribute_keys")                                                             |

## name



`name`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewstream-properties-name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/name")

### name Type

`string`

## description



`description`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewstream-properties-description.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/description")

### description Type

`string`

## aggregation



`aggregation`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/aggregation")

### aggregation Type

`object` ([Details](meter_provider-defs-aggregation.md))

### aggregation Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## aggregation\_cardinality\_limit



`aggregation_cardinality_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewstream-properties-aggregation_cardinality_limit.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/aggregation_cardinality_limit")

### aggregation\_cardinality\_limit Type

`integer`

### aggregation\_cardinality\_limit Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## attribute\_keys



`attribute_keys`

* is optional

* Type: `object` ([Details](common-defs-includeexclude.md))

* cannot be null

* defined in: [Untitled schema](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/attribute_keys")

### attribute\_keys Type

`object` ([Details](common-defs-includeexclude.md))
