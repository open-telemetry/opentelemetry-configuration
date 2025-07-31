# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## OtlpHttpMetricExporter Type

`object` ([Details](meter_provider-defs-otlphttpmetricexporter.md))

# OtlpHttpMetricExporter Properties

| Property                                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                     |
| :---------------------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint)                                             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/endpoint")                               |
| [certificate\_file](#certificate_file)                            | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/certificate_file")               |
| [client\_key\_file](#client_key_file)                             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/client_key_file")                 |
| [client\_certificate\_file](#client_certificate_file)             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/client_certificate_file") |
| [headers](#headers)                                               | `array`   | Optional | cannot be null | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-headers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/headers")                                 |
| [headers\_list](#headers_list)                                    | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/headers_list")                       |
| [compression](#compression)                                       | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-compression.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/compression")                         |
| [timeout](#timeout)                                               | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/timeout")                                 |
| [encoding](#encoding)                                             | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpencoding.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/encoding")                                                                 |
| [temporality\_preference](#temporality_preference)                | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-exportertemporalitypreference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/temporality_preference")                              |
| [default\_histogram\_aggregation](#default_histogram_aggregation) | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-exporterdefaulthistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/default_histogram_aggregation")                 |

## endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/endpoint")

### endpoint Type

`string`

## certificate\_file



`certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/certificate_file")

### certificate\_file Type

`string`

## client\_key\_file



`client_key_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/client_key_file")

### client\_key\_file Type

`string`

## client\_certificate\_file



`client_certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/client_certificate_file")

### client\_certificate\_file Type

`string`

## headers



`headers`

* is optional

* Type: `object[]` ([Details](common-defs-namestringvaluepair.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-headers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/headers")

### headers Type

`object[]` ([Details](common-defs-namestringvaluepair.md))

## headers\_list



`headers_list`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/headers_list")

### headers\_list Type

`string`

## compression



`compression`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-compression.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/compression")

### compression Type

`string`

## timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/timeout")

### timeout Type

`integer`

### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## encoding



`encoding`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpencoding.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/encoding")

### encoding Type

`string`

### encoding Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"protobuf"` |             |
| `"json"`     |             |

## temporality\_preference



`temporality_preference`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-exportertemporalitypreference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/temporality_preference")

### temporality\_preference Type

`string`

### temporality\_preference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"cumulative"` |             |
| `"delta"`      |             |
| `"low_memory"` |             |

## default\_histogram\_aggregation



`default_histogram_aggregation`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-exporterdefaulthistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/default_histogram_aggregation")

### default\_histogram\_aggregation Type

`string`

### default\_histogram\_aggregation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"explicit_bucket_histogram"`          |             |
| `"base2_exponential_bucket_histogram"` |             |
