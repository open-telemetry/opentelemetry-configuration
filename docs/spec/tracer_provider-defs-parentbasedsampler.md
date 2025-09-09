# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## ParentBasedSampler Type

`object` ([Details](tracer_provider-defs-parentbasedsampler.md))

# ParentBasedSampler Properties

| Property                                                   | Type     | Required | Nullable       | Defined by                                                                                                                                                                   |
| :--------------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [root](#root)                                              | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/root")                      |
| [remote\_parent\_sampled](#remote_parent_sampled)          | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/remote_parent_sampled")     |
| [remote\_parent\_not\_sampled](#remote_parent_not_sampled) | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/remote_parent_not_sampled") |
| [local\_parent\_sampled](#local_parent_sampled)            | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/local_parent_sampled")      |
| [local\_parent\_not\_sampled](#local_parent_not_sampled)   | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/local_parent_not_sampled")  |

## root



`root`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/root")

### root Type

`object` ([Details](tracer_provider-defs-sampler.md))

### root Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## remote\_parent\_sampled



`remote_parent_sampled`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/remote_parent_sampled")

### remote\_parent\_sampled Type

`object` ([Details](tracer_provider-defs-sampler.md))

### remote\_parent\_sampled Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## remote\_parent\_not\_sampled



`remote_parent_not_sampled`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/remote_parent_not_sampled")

### remote\_parent\_not\_sampled Type

`object` ([Details](tracer_provider-defs-sampler.md))

### remote\_parent\_not\_sampled Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## local\_parent\_sampled



`local_parent_sampled`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/local_parent_sampled")

### local\_parent\_sampled Type

`object` ([Details](tracer_provider-defs-sampler.md))

### local\_parent\_sampled Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## local\_parent\_not\_sampled



`local_parent_not_sampled`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/local_parent_not_sampled")

### local\_parent\_not\_sampled Type

`object` ([Details](tracer_provider-defs-sampler.md))

### local\_parent\_not\_sampled Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`
