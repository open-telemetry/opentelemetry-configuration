# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## ExperimentalOtlpFileMetricExporter Type

`object` ([Details](meter_provider-defs-experimentalotlpfilemetricexporter.md))

# ExperimentalOtlpFileMetricExporter Properties

| Property                                                          | Type     | Required | Nullable    | Defined by                                                                                                                                                                                                                         |
| :---------------------------------------------------------------- | :------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [output\_stream](#output_stream)                                  | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter-properties-output_stream.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/output_stream") |
| [temporality\_preference](#temporality_preference)                | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-exportertemporalitypreference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/temporality_preference")                      |
| [default\_histogram\_aggregation](#default_histogram_aggregation) | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-exporterdefaulthistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/default_histogram_aggregation")         |

## output\_stream



`output_stream`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter-properties-output_stream.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/output_stream")

### output\_stream Type

`string`

## temporality\_preference



`temporality_preference`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-exportertemporalitypreference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/temporality_preference")

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

* defined in: [Untitled schema](meter_provider-defs-exporterdefaulthistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/default_histogram_aggregation")

### default\_histogram\_aggregation Type

`string`

### default\_histogram\_aggregation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"explicit_bucket_histogram"`          |             |
| `"base2_exponential_bucket_histogram"` |             |
