# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## JaegerRemoteSampler Type

`object` ([Details](tracer_provider-defs-jaegerremotesampler.md))

# JaegerRemoteSampler Properties

| Property                             | Type      | Required | Nullable       | Defined by                                                                                                                                                                                   |
| :----------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint)                | `string`  | Optional | can be null    | [Untitled schema](tracer_provider-defs-jaegerremotesampler-properties-endpoint.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/endpoint") |
| [interval](#interval)                | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-jaegerremotesampler-properties-interval.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/interval") |
| [initial\_sampler](#initial_sampler) | `object`  | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/initial_sampler")                          |

## endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-jaegerremotesampler-properties-endpoint.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/endpoint")

### endpoint Type

`string`

## interval



`interval`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-jaegerremotesampler-properties-interval.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/interval")

### interval Type

`integer`

### interval Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## initial\_sampler



`initial_sampler`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/initial_sampler")

### initial\_sampler Type

`object` ([Details](tracer_provider-defs-sampler.md))

### initial\_sampler Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`
