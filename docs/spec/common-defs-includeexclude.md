# Untitled object in Declaritive Config - Resource Schema

```txt
https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection/properties/attributes
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [resource.json\*](../schema/resource.json "open original schema") |

## attributes Type

`object` ([Details](common-defs-includeexclude.md))

# attributes Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------------- | :------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [included](#included) | `array` | Optional | cannot be null | [Untitled schema](common-defs-includeexclude-properties-included.md "https://opentelemetry.io/otelconfig/common.json#/$defs/IncludeExclude/properties/included") |
| [excluded](#excluded) | `array` | Optional | cannot be null | [Untitled schema](common-defs-includeexclude-properties-excluded.md "https://opentelemetry.io/otelconfig/common.json#/$defs/IncludeExclude/properties/excluded") |

## included



`included`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Untitled schema](common-defs-includeexclude-properties-included.md "https://opentelemetry.io/otelconfig/common.json#/$defs/IncludeExclude/properties/included")

### included Type

`string[]`

## excluded



`excluded`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Untitled schema](common-defs-includeexclude-properties-excluded.md "https://opentelemetry.io/otelconfig/common.json#/$defs/IncludeExclude/properties/excluded")

### excluded Type

`string[]`
