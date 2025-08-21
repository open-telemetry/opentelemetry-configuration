# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## SpanExporter Type

`object` ([Details](tracer_provider-defs-spanexporter.md))

## SpanExporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# SpanExporter Properties

| Property                                        | Type     | Required | Nullable    | Defined by                                                                                                                                                                     |
| :---------------------------------------------- | :------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [otlp\_http](#otlp_http)                        | `object` | Optional | can be null | [Untitled schema](common-defs-otlphttpexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_http")                         |
| [otlp\_grpc](#otlp_grpc)                        | `object` | Optional | can be null | [Untitled schema](common-defs-otlpgrpcexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_grpc")                         |
| [otlp\_file/development](#otlp_filedevelopment) | `object` | Optional | can be null | [Untitled schema](common-defs-experimentalotlpfileexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_file/development") |
| [console](#console)                             | `object` | Optional | can be null | [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/console")                            |
| [zipkin](#zipkin)                               | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-zipkinspanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/zipkin")                 |
| `.*`                                            | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/patternProperties/.*") |
| Additional Properties                           | Any      | Optional | can be null |                                                                                                                                                                                |

## otlp\_http



`otlp_http`

* is optional

* Type: `object` ([Details](common-defs-otlphttpexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_http")

### otlp\_http Type

`object` ([Details](common-defs-otlphttpexporter.md))

## otlp\_grpc



`otlp_grpc`

* is optional

* Type: `object` ([Details](common-defs-otlpgrpcexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_grpc")

### otlp\_grpc Type

`object` ([Details](common-defs-otlpgrpcexporter.md))

## otlp\_file/development



`otlp_file/development`

* is optional

* Type: `object` ([Details](common-defs-experimentalotlpfileexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-experimentalotlpfileexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_file/development")

### development Type

`object` ([Details](common-defs-experimentalotlpfileexporter.md))

## console



`console`

* is optional

* Type: `object` ([Details](common-defs-consoleexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/console")

### console Type

`object` ([Details](common-defs-consoleexporter.md))

## zipkin



`zipkin`

* is optional

* Type: `object` ([Details](tracer_provider-defs-zipkinspanexporter.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-zipkinspanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/zipkin")

### zipkin Type

`object` ([Details](tracer_provider-defs-zipkinspanexporter.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](tracer_provider-defs-spanexporter-patternproperties-.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/patternProperties/.*")

### .\* Type

`object` ([Details](tracer_provider-defs-spanexporter-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
