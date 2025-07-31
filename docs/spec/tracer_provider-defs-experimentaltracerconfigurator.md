# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## ExperimentalTracerConfigurator Type

`object` ([Details](tracer_provider-defs-experimentaltracerconfigurator.md))

# ExperimentalTracerConfigurator Properties

| Property                           | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :--------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [default\_config](#default_config) | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-experimentaltracerconfig.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator/properties/default_config")                   |
| [tracers](#tracers)                | `array`  | Optional | cannot be null | [Untitled schema](tracer_provider-defs-experimentaltracerconfigurator-properties-tracers.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator/properties/tracers") |

## default\_config



`default_config`

* is optional

* Type: `object` ([Details](tracer_provider-defs-experimentaltracerconfig.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-experimentaltracerconfig.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator/properties/default_config")

### default\_config Type

`object` ([Details](tracer_provider-defs-experimentaltracerconfig.md))

## tracers



`tracers`

* is optional

* Type: `object[]` ([Details](tracer_provider-defs-experimentaltracermatcherandconfig.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-experimentaltracerconfigurator-properties-tracers.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator/properties/tracers")

### tracers Type

`object[]` ([Details](tracer_provider-defs-experimentaltracermatcherandconfig.md))
