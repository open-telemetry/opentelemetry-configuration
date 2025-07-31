# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [propagator.json\*](../schema/propagator.json "open original schema") |

## TextMapPropagator Type

`object` ([Details](propagator-defs-textmappropagator.md))

## TextMapPropagator Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# TextMapPropagator Properties

| Property                      | Type     | Required | Nullable    | Defined by                                                                                                                                                                             |
| :---------------------------- | :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tracecontext](#tracecontext) | `object` | Optional | can be null | [Untitled schema](propagator-defs-textmappropagator-properties-tracecontext.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/tracecontext") |
| [baggage](#baggage)           | `object` | Optional | can be null | [Untitled schema](propagator-defs-textmappropagator-properties-baggage.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/baggage")           |
| [b3](#b3)                     | `object` | Optional | can be null | [Untitled schema](propagator-defs-textmappropagator-properties-b3.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/b3")                     |
| [b3multi](#b3multi)           | `object` | Optional | can be null | [Untitled schema](propagator-defs-textmappropagator-properties-b3multi.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/b3multi")           |
| [jaeger](#jaeger)             | `object` | Optional | can be null | [Untitled schema](propagator-defs-textmappropagator-properties-jaeger.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/jaeger")             |
| [ottrace](#ottrace)           | `object` | Optional | can be null | [Untitled schema](propagator-defs-textmappropagator-properties-ottrace.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/ottrace")           |
| `.*`                          | `object` | Optional | can be null | [Untitled schema](propagator-defs-textmappropagator-patternproperties-.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/patternProperties/.*")         |
| Additional Properties         | Any      | Optional | can be null |                                                                                                                                                                                        |

## tracecontext



`tracecontext`

* is optional

* Type: `object` ([Details](propagator-defs-textmappropagator-properties-tracecontext.md))

* can be null

* defined in: [Untitled schema](propagator-defs-textmappropagator-properties-tracecontext.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/tracecontext")

### tracecontext Type

`object` ([Details](propagator-defs-textmappropagator-properties-tracecontext.md))

## baggage



`baggage`

* is optional

* Type: `object` ([Details](propagator-defs-textmappropagator-properties-baggage.md))

* can be null

* defined in: [Untitled schema](propagator-defs-textmappropagator-properties-baggage.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/baggage")

### baggage Type

`object` ([Details](propagator-defs-textmappropagator-properties-baggage.md))

## b3



`b3`

* is optional

* Type: `object` ([Details](propagator-defs-textmappropagator-properties-b3.md))

* can be null

* defined in: [Untitled schema](propagator-defs-textmappropagator-properties-b3.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/b3")

### b3 Type

`object` ([Details](propagator-defs-textmappropagator-properties-b3.md))

## b3multi



`b3multi`

* is optional

* Type: `object` ([Details](propagator-defs-textmappropagator-properties-b3multi.md))

* can be null

* defined in: [Untitled schema](propagator-defs-textmappropagator-properties-b3multi.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/b3multi")

### b3multi Type

`object` ([Details](propagator-defs-textmappropagator-properties-b3multi.md))

## jaeger



`jaeger`

* is optional

* Type: `object` ([Details](propagator-defs-textmappropagator-properties-jaeger.md))

* can be null

* defined in: [Untitled schema](propagator-defs-textmappropagator-properties-jaeger.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/jaeger")

### jaeger Type

`object` ([Details](propagator-defs-textmappropagator-properties-jaeger.md))

## ottrace



`ottrace`

* is optional

* Type: `object` ([Details](propagator-defs-textmappropagator-properties-ottrace.md))

* can be null

* defined in: [Untitled schema](propagator-defs-textmappropagator-properties-ottrace.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/ottrace")

### ottrace Type

`object` ([Details](propagator-defs-textmappropagator-properties-ottrace.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](propagator-defs-textmappropagator-patternproperties-.md))

* can be null

* defined in: [Untitled schema](propagator-defs-textmappropagator-patternproperties-.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/patternProperties/.*")

### .\* Type

`object` ([Details](propagator-defs-textmappropagator-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
