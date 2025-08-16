# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## SpanProcessor Type

`object` ([Details](tracer_provider-defs-spanprocessor.md))

## SpanProcessor Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# SpanProcessor Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [batch](#batch)       | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-batchspanprocessor.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/properties/batch")                   |
| [simple](#simple)     | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-simplespanprocessor.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/properties/simple")                 |
| `.*`                  | `object` | Optional | can be null    | [Untitled schema](tracer_provider-defs-spanprocessor-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/patternProperties/.*") |
| Additional Properties | Any      | Optional | can be null    |                                                                                                                                                                                  |

## batch



`batch`

* is optional

* Type: `object` ([Details](tracer_provider-defs-batchspanprocessor.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/properties/batch")

### batch Type

`object` ([Details](tracer_provider-defs-batchspanprocessor.md))

## simple



`simple`

* is optional

* Type: `object` ([Details](tracer_provider-defs-simplespanprocessor.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-simplespanprocessor.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/properties/simple")

### simple Type

`object` ([Details](tracer_provider-defs-simplespanprocessor.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](tracer_provider-defs-spanprocessor-patternproperties-.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanprocessor-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/patternProperties/.*")

### .\* Type

`object` ([Details](tracer_provider-defs-spanprocessor-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
