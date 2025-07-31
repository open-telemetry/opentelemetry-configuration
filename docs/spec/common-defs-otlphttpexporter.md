# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_http
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## otlp\_http Type

`object` ([Details](common-defs-otlphttpexporter.md))

# otlp\_http Properties

| Property                                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                         |
| :---------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint)                                 | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/endpoint")                               |
| [certificate\_file](#certificate_file)                | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/certificate_file")               |
| [client\_key\_file](#client_key_file)                 | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/client_key_file")                 |
| [client\_certificate\_file](#client_certificate_file) | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/client_certificate_file") |
| [headers](#headers)                                   | `array`   | Optional | cannot be null | [Untitled schema](common-defs-otlphttpexporter-properties-headers.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/headers")                                 |
| [headers\_list](#headers_list)                        | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/headers_list")                       |
| [compression](#compression)                           | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpexporter-properties-compression.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/compression")                         |
| [timeout](#timeout)                                   | `integer` | Optional | can be null    | [Untitled schema](common-defs-otlphttpexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/timeout")                                 |
| [encoding](#encoding)                                 | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpencoding.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/encoding")                                                   |

## endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/endpoint")

### endpoint Type

`string`

## certificate\_file



`certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/certificate_file")

### certificate\_file Type

`string`

## client\_key\_file



`client_key_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/client_key_file")

### client\_key\_file Type

`string`

## client\_certificate\_file



`client_certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/client_certificate_file")

### client\_certificate\_file Type

`string`

## headers



`headers`

* is optional

* Type: `object[]` ([Details](common-defs-namestringvaluepair.md))

* cannot be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-headers.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/headers")

### headers Type

`object[]` ([Details](common-defs-namestringvaluepair.md))

## headers\_list



`headers_list`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/headers_list")

### headers\_list Type

`string`

## compression



`compression`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-compression.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/compression")

### compression Type

`string`

## timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/timeout")

### timeout Type

`integer`

### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## encoding



`encoding`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpencoding.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/encoding")

### encoding Type

`string`

### encoding Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"protobuf"` |             |
| `"json"`     |             |
