# Untitled object in Declaritive Config - Resource Schema

```txt
https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [resource.json\*](../schema/resource.json "open original schema") |

## AttributeNameValue Type

`object` ([Details](resource-defs-attributenamevalue.md))

# AttributeNameValue Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                           |
| :-------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)   | `string` | Required | cannot be null | [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-name.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/name")   |
| [value](#value) | Merged   | Required | cannot be null | [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/value") |
| [type](#type)   | `string` | Optional | can be null    | [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-type.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/type")   |

## name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-name.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/name")

### name Type

`string`

## value



`value`

* is required

* Type: merged type ([Details](resource-defs-attributenamevalue-properties-value.md))

* cannot be null

* defined in: [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/value")

### value Type

merged type ([Details](resource-defs-attributenamevalue-properties-value.md))

one (and only one) of

* [Untitled string in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-0.md "check type definition")

* [Untitled number in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-1.md "check type definition")

* [Untitled boolean in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-2.md "check type definition")

* [Untitled null in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-3.md "check type definition")

* [Untitled array in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-4.md "check type definition")

* [Untitled array in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-5.md "check type definition")

* [Untitled array in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-6.md "check type definition")

## type



`type`

* is optional

* Type: `string`

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-type.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `null`           |             |
| `"string"`       |             |
| `"bool"`         |             |
| `"int"`          |             |
| `"double"`       |             |
| `"string_array"` |             |
| `"bool_array"`   |             |
| `"int_array"`    |             |
| `"double_array"` |             |
