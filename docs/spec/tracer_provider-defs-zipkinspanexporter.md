# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## ZipkinSpanExporter Type

`object` ([Details](tracer_provider-defs-zipkinspanexporter.md))

# ZipkinSpanExporter Properties

| Property              | Type      | Required | Nullable    | Defined by                                                                                                                                                                                 |
| :-------------------- | :-------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint) | `string`  | Optional | can be null | [Untitled schema](tracer_provider-defs-zipkinspanexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter/properties/endpoint") |
| [timeout](#timeout)   | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-zipkinspanexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter/properties/timeout")   |

## endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-zipkinspanexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter/properties/endpoint")

### endpoint Type

`string`

## timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-zipkinspanexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter/properties/timeout")

### timeout Type

`integer`

### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`
