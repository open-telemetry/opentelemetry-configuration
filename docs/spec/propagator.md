# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/propagator.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [propagator.json](../schema/propagator.json "open original schema") |

## Untitled object in undefined Type

`object` ([Details](propagator.md))

# Untitled object in undefined Properties

| Property                           | Type     | Required | Nullable       | Defined by                                                                                                                                  |
| :--------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [composite](#composite)            | `array`  | Optional | cannot be null | [Untitled schema](propagator-properties-composite.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/composite")           |
| [composite\_list](#composite_list) | `string` | Optional | can be null    | [Untitled schema](propagator-properties-composite_list.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/composite_list") |

## composite



`composite`

* is optional

* Type: `object[]` ([Details](propagator-defs-textmappropagator.md))

* cannot be null

* defined in: [Untitled schema](propagator-properties-composite.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/composite")

### composite Type

`object[]` ([Details](propagator-defs-textmappropagator.md))

## composite\_list



`composite_list`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](propagator-properties-composite_list.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/composite_list")

### composite\_list Type

`string`

# Untitled object in undefined Definitions

## Definitions group TextMapPropagator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator"}
```

| Property                      | Type     | Required | Nullable    | Defined by                                                                                                                                                                     |
| :---------------------------- | :------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tracecontext](#tracecontext) | `object` | Optional | can be null | [Untitled schema](propagator-defs-tracecontextpropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/tracecontext")            |
| [baggage](#baggage)           | `object` | Optional | can be null | [Untitled schema](propagator-defs-baggagepropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/baggage")                      |
| [b3](#b3)                     | `object` | Optional | can be null | [Untitled schema](propagator-defs-b3propagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/b3")                                |
| [b3multi](#b3multi)           | `object` | Optional | can be null | [Untitled schema](propagator-defs-b3multipropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/b3multi")                      |
| [jaeger](#jaeger)             | `object` | Optional | can be null | [Untitled schema](propagator-defs-jaegerpropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/jaeger")                        |
| [ottrace](#ottrace)           | `object` | Optional | can be null | [Untitled schema](propagator-defs-opentracingpropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/ottrace")                  |
| `.*`                          | `object` | Optional | can be null | [Untitled schema](propagator-defs-textmappropagator-patternproperties-.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/patternProperties/.*") |
| Additional Properties         | Any      | Optional | can be null |                                                                                                                                                                                |

### tracecontext



`tracecontext`

* is optional

* Type: `object` ([Details](propagator-defs-tracecontextpropagator.md))

* can be null

* defined in: [Untitled schema](propagator-defs-tracecontextpropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/tracecontext")

#### tracecontext Type

`object` ([Details](propagator-defs-tracecontextpropagator.md))

### baggage



`baggage`

* is optional

* Type: `object` ([Details](propagator-defs-baggagepropagator.md))

* can be null

* defined in: [Untitled schema](propagator-defs-baggagepropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/baggage")

#### baggage Type

`object` ([Details](propagator-defs-baggagepropagator.md))

### b3



`b3`

* is optional

* Type: `object` ([Details](propagator-defs-b3propagator.md))

* can be null

* defined in: [Untitled schema](propagator-defs-b3propagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/b3")

#### b3 Type

`object` ([Details](propagator-defs-b3propagator.md))

### b3multi



`b3multi`

* is optional

* Type: `object` ([Details](propagator-defs-b3multipropagator.md))

* can be null

* defined in: [Untitled schema](propagator-defs-b3multipropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/b3multi")

#### b3multi Type

`object` ([Details](propagator-defs-b3multipropagator.md))

### jaeger



`jaeger`

* is optional

* Type: `object` ([Details](propagator-defs-jaegerpropagator.md))

* can be null

* defined in: [Untitled schema](propagator-defs-jaegerpropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/jaeger")

#### jaeger Type

`object` ([Details](propagator-defs-jaegerpropagator.md))

### ottrace



`ottrace`

* is optional

* Type: `object` ([Details](propagator-defs-opentracingpropagator.md))

* can be null

* defined in: [Untitled schema](propagator-defs-opentracingpropagator.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/properties/ottrace")

#### ottrace Type

`object` ([Details](propagator-defs-opentracingpropagator.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](propagator-defs-textmappropagator-patternproperties-.md))

* can be null

* defined in: [Untitled schema](propagator-defs-textmappropagator-patternproperties-.md "https://opentelemetry.io/otelconfig/propagator.json#/$defs/TextMapPropagator/patternProperties/.*")

#### .\* Type

`object` ([Details](propagator-defs-textmappropagator-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group TraceContextPropagator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/propagator.json#/$defs/TraceContextPropagator"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group BaggagePropagator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/propagator.json#/$defs/BaggagePropagator"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group B3Propagator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/propagator.json#/$defs/B3Propagator"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group B3MultiPropagator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/propagator.json#/$defs/B3MultiPropagator"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group JaegerPropagator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/propagator.json#/$defs/JaegerPropagator"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group OpenTracingPropagator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/propagator.json#/$defs/OpenTracingPropagator"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |
