# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/common.json
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                  |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [common.json](../schema/common.json "open original schema") |

## Untitled schema Type

unknown

# Untitled schema Definitions

## Definitions group IncludeExclude

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/common.json#/$defs/IncludeExclude"}
```

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------------- | :------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [included](#included) | `array` | Optional | cannot be null | [Untitled schema](common-defs-includeexclude-properties-included.md "https://opentelemetry.io/otelconfig/common.json#/$defs/IncludeExclude/properties/included") |
| [excluded](#excluded) | `array` | Optional | cannot be null | [Untitled schema](common-defs-includeexclude-properties-excluded.md "https://opentelemetry.io/otelconfig/common.json#/$defs/IncludeExclude/properties/excluded") |

### included



`included`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Untitled schema](common-defs-includeexclude-properties-included.md "https://opentelemetry.io/otelconfig/common.json#/$defs/IncludeExclude/properties/included")

#### included Type

`string[]`

### excluded



`excluded`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Untitled schema](common-defs-includeexclude-properties-excluded.md "https://opentelemetry.io/otelconfig/common.json#/$defs/IncludeExclude/properties/excluded")

#### excluded Type

`string[]`

## Definitions group NameStringValuePair

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/common.json#/$defs/NameStringValuePair"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                           |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)   | `string` | Required | cannot be null | [Untitled schema](common-defs-namestringvaluepair-properties-name.md "https://opentelemetry.io/otelconfig/common.json#/$defs/NameStringValuePair/properties/name")   |
| [value](#value) | `string` | Required | can be null    | [Untitled schema](common-defs-namestringvaluepair-properties-value.md "https://opentelemetry.io/otelconfig/common.json#/$defs/NameStringValuePair/properties/value") |

### name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Untitled schema](common-defs-namestringvaluepair-properties-name.md "https://opentelemetry.io/otelconfig/common.json#/$defs/NameStringValuePair/properties/name")

#### name Type

`string`

### value



`value`

* is required

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-namestringvaluepair-properties-value.md "https://opentelemetry.io/otelconfig/common.json#/$defs/NameStringValuePair/properties/value")

#### value Type

`string`

## Definitions group OtlpHttpExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter"}
```

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
| [encoding](#encoding)                                 | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpexporter-properties-encoding.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/encoding")                               |

### endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/endpoint")

#### endpoint Type

`string`

### certificate\_file



`certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/certificate_file")

#### certificate\_file Type

`string`

### client\_key\_file



`client_key_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/client_key_file")

#### client\_key\_file Type

`string`

### client\_certificate\_file



`client_certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/client_certificate_file")

#### client\_certificate\_file Type

`string`

### headers



`headers`

* is optional

* Type: `object[]` ([Details](common-defs-namestringvaluepair.md))

* cannot be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-headers.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/headers")

#### headers Type

`object[]` ([Details](common-defs-namestringvaluepair.md))

### headers\_list



`headers_list`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/headers_list")

#### headers\_list Type

`string`

### compression



`compression`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-compression.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/compression")

#### compression Type

`string`

### timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/timeout")

#### timeout Type

`integer`

#### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### encoding



`encoding`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter-properties-encoding.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpExporter/properties/encoding")

#### encoding Type

`string`

#### encoding Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"protobuf"` |             |
| `"json"`     |             |

## Definitions group OtlpHttpEncoding

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpHttpEncoding"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group OtlpGrpcExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter"}
```

| Property                                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                         |
| :------------------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint-1)                                 | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlpgrpcexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/endpoint")                               |
| [certificate\_file](#certificate_file-1)                | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlpgrpcexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/certificate_file")               |
| [client\_key\_file](#client_key_file-1)                 | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlpgrpcexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/client_key_file")                 |
| [client\_certificate\_file](#client_certificate_file-1) | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlpgrpcexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/client_certificate_file") |
| [headers](#headers-1)                                   | `array`   | Optional | cannot be null | [Untitled schema](common-defs-otlpgrpcexporter-properties-headers.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/headers")                                 |
| [headers\_list](#headers_list-1)                        | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlpgrpcexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/headers_list")                       |
| [compression](#compression-1)                           | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlpgrpcexporter-properties-compression.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/compression")                         |
| [timeout](#timeout-1)                                   | `integer` | Optional | can be null    | [Untitled schema](common-defs-otlpgrpcexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/timeout")                                 |
| [insecure](#insecure)                                   | `boolean` | Optional | can be null    | [Untitled schema](common-defs-otlpgrpcexporter-properties-insecure.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/insecure")                               |

### endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/endpoint")

#### endpoint Type

`string`

### certificate\_file



`certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/certificate_file")

#### certificate\_file Type

`string`

### client\_key\_file



`client_key_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/client_key_file")

#### client\_key\_file Type

`string`

### client\_certificate\_file



`client_certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/client_certificate_file")

#### client\_certificate\_file Type

`string`

### headers



`headers`

* is optional

* Type: `object[]` ([Details](common-defs-namestringvaluepair.md))

* cannot be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter-properties-headers.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/headers")

#### headers Type

`object[]` ([Details](common-defs-namestringvaluepair.md))

### headers\_list



`headers_list`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/headers_list")

#### headers\_list Type

`string`

### compression



`compression`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter-properties-compression.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/compression")

#### compression Type

`string`

### timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/timeout")

#### timeout Type

`integer`

#### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### insecure



`insecure`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter-properties-insecure.md "https://opentelemetry.io/otelconfig/common.json#/$defs/OtlpGrpcExporter/properties/insecure")

#### insecure Type

`boolean`

## Definitions group ExperimentalOtlpFileExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/common.json#/$defs/ExperimentalOtlpFileExporter"}
```

| Property                         | Type     | Required | Nullable    | Defined by                                                                                                                                                                                             |
| :------------------------------- | :------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [output\_stream](#output_stream) | `string` | Optional | can be null | [Untitled schema](common-defs-experimentalotlpfileexporter-properties-output_stream.md "https://opentelemetry.io/otelconfig/common.json#/$defs/ExperimentalOtlpFileExporter/properties/output_stream") |

### output\_stream



`output_stream`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-experimentalotlpfileexporter-properties-output_stream.md "https://opentelemetry.io/otelconfig/common.json#/$defs/ExperimentalOtlpFileExporter/properties/output_stream")

#### output\_stream Type

`string`

## Definitions group ConsoleExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/common.json#/$defs/ConsoleExporter"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |
