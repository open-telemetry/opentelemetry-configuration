# Untitled object in Declaritive Config - Resource Schema

```txt
https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [resource.json\*](../schema/resource.json "open original schema") |

## ExperimentalResourceDetection Type

`object` ([Details](resource-defs-experimentalresourcedetection.md))

# ExperimentalResourceDetection Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attributes](#attributes) | `object` | Optional | cannot be null | [Declaritive Config - Resource](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection/properties/attributes")                                      |
| [detectors](#detectors)   | `array`  | Optional | cannot be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetection-properties-detectors.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection/properties/detectors") |

## attributes



`attributes`

* is optional

* Type: `object` ([Details](common-defs-includeexclude.md))

* cannot be null

* defined in: [Declaritive Config - Resource](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection/properties/attributes")

### attributes Type

`object` ([Details](common-defs-includeexclude.md))

## detectors



`detectors`

* is optional

* Type: `object[]` ([Details](resource-defs-experimentalresourcedetector.md))

* cannot be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetection-properties-detectors.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection/properties/detectors")

### detectors Type

`object[]` ([Details](resource-defs-experimentalresourcedetector.md))
