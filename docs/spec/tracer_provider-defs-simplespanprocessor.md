# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SimpleSpanProcessor
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## SimpleSpanProcessor Type

`object` ([Details](tracer_provider-defs-simplespanprocessor.md))

# SimpleSpanProcessor Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [exporter](#exporter) | `object` | Required | cannot be null | [Untitled schema](tracer_provider-defs-spanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SimpleSpanProcessor/properties/exporter") |

## exporter



`exporter`

* is required

* Type: `object` ([Details](tracer_provider-defs-spanexporter.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-spanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SimpleSpanProcessor/properties/exporter")

### exporter Type

`object` ([Details](tracer_provider-defs-spanexporter.md))

### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`
