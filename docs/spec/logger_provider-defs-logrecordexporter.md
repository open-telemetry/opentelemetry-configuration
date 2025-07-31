# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [logger\_provider.json\*](../schema/logger_provider.json "open original schema") |

## LogRecordExporter Type

`object` ([Details](logger_provider-defs-logrecordexporter.md))

## LogRecordExporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# LogRecordExporter Properties

| Property                                        | Type     | Required | Nullable    | Defined by                                                                                                                                                                               |
| :---------------------------------------------- | :------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [otlp\_http](#otlp_http)                        | `object` | Optional | can be null | [Untitled schema](common-defs-otlphttpexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_http")                              |
| [otlp\_grpc](#otlp_grpc)                        | `object` | Optional | can be null | [Untitled schema](common-defs-otlpgrpcexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_grpc")                              |
| [otlp\_file/development](#otlp_filedevelopment) | `object` | Optional | can be null | [Untitled schema](common-defs-experimentalotlpfileexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_file/development")      |
| [console](#console)                             | `object` | Optional | can be null | [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/console")                                 |
| `.*`                                            | `object` | Optional | can be null | [Untitled schema](logger_provider-defs-logrecordexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/patternProperties/.*") |
| Additional Properties                           | Any      | Optional | can be null |                                                                                                                                                                                          |

## otlp\_http



`otlp_http`

* is optional

* Type: `object` ([Details](common-defs-otlphttpexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_http")

### otlp\_http Type

`object` ([Details](common-defs-otlphttpexporter.md))

## otlp\_grpc



`otlp_grpc`

* is optional

* Type: `object` ([Details](common-defs-otlpgrpcexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_grpc")

### otlp\_grpc Type

`object` ([Details](common-defs-otlpgrpcexporter.md))

## otlp\_file/development



`otlp_file/development`

* is optional

* Type: `object` ([Details](common-defs-experimentalotlpfileexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-experimentalotlpfileexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_file/development")

### development Type

`object` ([Details](common-defs-experimentalotlpfileexporter.md))

## console



`console`

* is optional

* Type: `object` ([Details](common-defs-consoleexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/console")

### console Type

`object` ([Details](common-defs-consoleexporter.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](logger_provider-defs-logrecordexporter-patternproperties-.md))

* can be null

* defined in: [Untitled schema](logger_provider-defs-logrecordexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/patternProperties/.*")

### .\* Type

`object` ([Details](logger_provider-defs-logrecordexporter-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
