# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## Sampler Type

`object` ([Details](tracer_provider-defs-sampler.md))

## Sampler Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# Sampler Properties

| Property                                         | Type     | Required | Nullable    | Defined by                                                                                                                                                                    |
| :----------------------------------------------- | :------- | :------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [always\_off](#always_off)                       | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-sampler-properties-always_off.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/always_off")      |
| [always\_on](#always_on)                         | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-sampler-properties-always_on.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/always_on")        |
| [jaeger\_remote](#jaeger_remote)                 | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-jaegerremotesampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/jaeger_remote")             |
| [parent\_based](#parent_based)                   | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-parentbasedsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/parent_based")               |
| [trace\_id\_ratio\_based](#trace_id_ratio_based) | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-traceidratiobasedsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/trace_id_ratio_based") |
| `.*`                                             | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-sampler-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/patternProperties/.*")          |
| Additional Properties                            | Any      | Optional | can be null |                                                                                                                                                                               |

## always\_off



`always_off`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler-properties-always_off.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-sampler-properties-always_off.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/always_off")

### always\_off Type

`object` ([Details](tracer_provider-defs-sampler-properties-always_off.md))

## always\_on



`always_on`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler-properties-always_on.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-sampler-properties-always_on.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/always_on")

### always\_on Type

`object` ([Details](tracer_provider-defs-sampler-properties-always_on.md))

## jaeger\_remote



`jaeger_remote`

* is optional

* Type: `object` ([Details](tracer_provider-defs-jaegerremotesampler.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-jaegerremotesampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/jaeger_remote")

### jaeger\_remote Type

`object` ([Details](tracer_provider-defs-jaegerremotesampler.md))

## parent\_based



`parent_based`

* is optional

* Type: `object` ([Details](tracer_provider-defs-parentbasedsampler.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-parentbasedsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/parent_based")

### parent\_based Type

`object` ([Details](tracer_provider-defs-parentbasedsampler.md))

## trace\_id\_ratio\_based



`trace_id_ratio_based`

* is optional

* Type: `object` ([Details](tracer_provider-defs-traceidratiobasedsampler.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-traceidratiobasedsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/trace_id_ratio_based")

### trace\_id\_ratio\_based Type

`object` ([Details](tracer_provider-defs-traceidratiobasedsampler.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler-patternproperties-.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-sampler-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/patternProperties/.*")

### .\* Type

`object` ([Details](tracer_provider-defs-sampler-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
