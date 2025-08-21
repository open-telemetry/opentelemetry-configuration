# Untitled object in Declaritive Config - Resource Schema

```txt
https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [resource.json\*](../schema/resource.json "open original schema") |

## ExperimentalResourceDetector Type

`object` ([Details](resource-defs-experimentalresourcedetector.md))

## ExperimentalResourceDetector Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# ExperimentalResourceDetector Properties

| Property                | Type     | Required | Nullable    | Defined by                                                                                                                                                                                                       |
| :---------------------- | :------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [container](#container) | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-properties-container.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/container") |
| [host](#host)           | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-properties-host.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/host")           |
| [process](#process)     | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-properties-process.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/process")     |
| [service](#service)     | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-properties-service.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/service")     |
| `.*`                    | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-patternproperties-.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/patternProperties/.*")   |
| Additional Properties   | Any      | Optional | can be null |                                                                                                                                                                                                                  |

## container



`container`

* is optional

* Type: `object` ([Details](resource-defs-experimentalresourcedetector-properties-container.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-properties-container.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/container")

### container Type

`object` ([Details](resource-defs-experimentalresourcedetector-properties-container.md))

## host



`host`

* is optional

* Type: `object` ([Details](resource-defs-experimentalresourcedetector-properties-host.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-properties-host.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/host")

### host Type

`object` ([Details](resource-defs-experimentalresourcedetector-properties-host.md))

## process



`process`

* is optional

* Type: `object` ([Details](resource-defs-experimentalresourcedetector-properties-process.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-properties-process.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/process")

### process Type

`object` ([Details](resource-defs-experimentalresourcedetector-properties-process.md))

## service



`service`

* is optional

* Type: `object` ([Details](resource-defs-experimentalresourcedetector-properties-service.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-properties-service.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/service")

### service Type

`object` ([Details](resource-defs-experimentalresourcedetector-properties-service.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](resource-defs-experimentalresourcedetector-patternproperties-.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-patternproperties-.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/patternProperties/.*")

### .\* Type

`object` ([Details](resource-defs-experimentalresourcedetector-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
