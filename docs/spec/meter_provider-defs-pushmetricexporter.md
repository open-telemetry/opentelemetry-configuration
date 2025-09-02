# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## PushMetricExporter Type

`object` ([Details](meter_provider-defs-pushmetricexporter.md))

## PushMetricExporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# PushMetricExporter Properties

| Property                                        | Type     | Required | Nullable    | Defined by                                                                                                                                                                                        |
| :---------------------------------------------- | :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [otlp\_http](#otlp_http)                        | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-otlphttpmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_http")                         |
| [otlp\_grpc](#otlp_grpc)                        | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_grpc")                         |
| [otlp\_file/development](#otlp_filedevelopment) | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_file/development") |
| [console](#console)                             | `object` | Optional | can be null | [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/console")                                          |
| `.*`                                            | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-pushmetricexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/patternProperties/.*")          |
| Additional Properties                           | Any      | Optional | can be null |                                                                                                                                                                                                   |

## otlp\_http



`otlp_http`

* is optional

* Type: `object` ([Details](meter_provider-defs-otlphttpmetricexporter.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_http")

### otlp\_http Type

`object` ([Details](meter_provider-defs-otlphttpmetricexporter.md))

## otlp\_grpc



`otlp_grpc`

* is optional

* Type: `object` ([Details](meter_provider-defs-otlpgrpcmetricexporter.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_grpc")

### otlp\_grpc Type

`object` ([Details](meter_provider-defs-otlpgrpcmetricexporter.md))

## otlp\_file/development



`otlp_file/development`

* is optional

* Type: `object` ([Details](meter_provider-defs-experimentalotlpfilemetricexporter.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_file/development")

### development Type

`object` ([Details](meter_provider-defs-experimentalotlpfilemetricexporter.md))

## console



`console`

* is optional

* Type: `object` ([Details](common-defs-consoleexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/console")

### console Type

`object` ([Details](common-defs-consoleexporter.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](meter_provider-defs-pushmetricexporter-patternproperties-.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-pushmetricexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/patternProperties/.*")

### .\* Type

`object` ([Details](meter_provider-defs-pushmetricexporter-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
