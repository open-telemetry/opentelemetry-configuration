# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## OtlpGrpcMetricExporter Type

`object` ([Details](meter_provider-defs-otlpgrpcmetricexporter.md))

# OtlpGrpcMetricExporter Properties

| Property                                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                     |
| :---------------------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint)                                             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/endpoint")                               |
| [certificate\_file](#certificate_file)                            | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/certificate_file")               |
| [client\_key\_file](#client_key_file)                             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/client_key_file")                 |
| [client\_certificate\_file](#client_certificate_file)             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/client_certificate_file") |
| [headers](#headers)                                               | `array`   | Optional | cannot be null | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-headers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/headers")                                 |
| [headers\_list](#headers_list)                                    | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/headers_list")                       |
| [compression](#compression)                                       | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-compression.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/compression")                         |
| [timeout](#timeout)                                               | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/timeout")                                 |
| [insecure](#insecure)                                             | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-insecure.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/insecure")                               |
| [temporality\_preference](#temporality_preference)                | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-exportertemporalitypreference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/temporality_preference")                              |
| [default\_histogram\_aggregation](#default_histogram_aggregation) | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-exporterdefaulthistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/default_histogram_aggregation")                 |

## endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/endpoint")

### endpoint Type

`string`

## certificate\_file



`certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/certificate_file")

### certificate\_file Type

`string`

## client\_key\_file



`client_key_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/client_key_file")

### client\_key\_file Type

`string`

## client\_certificate\_file



`client_certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/client_certificate_file")

### client\_certificate\_file Type

`string`

## headers



`headers`

* is optional

* Type: `object[]` ([Details](common-defs-namestringvaluepair.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-headers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/headers")

### headers Type

`object[]` ([Details](common-defs-namestringvaluepair.md))

## headers\_list



`headers_list`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/headers_list")

### headers\_list Type

`string`

## compression



`compression`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-compression.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/compression")

### compression Type

`string`

## timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/timeout")

### timeout Type

`integer`

### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## insecure



`insecure`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-insecure.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/insecure")

### insecure Type

`boolean`

## temporality\_preference



`temporality_preference`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-exportertemporalitypreference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/temporality_preference")

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

* defined in: [Untitled schema](meter_provider-defs-exporterdefaulthistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/default_histogram_aggregation")

### default\_histogram\_aggregation Type

`string`

### default\_histogram\_aggregation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"explicit_bucket_histogram"`          |             |
| `"base2_exponential_bucket_histogram"` |             |
