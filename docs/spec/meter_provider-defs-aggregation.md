# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## Aggregation Type

`object` ([Details](meter_provider-defs-aggregation.md))

## Aggregation Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# Aggregation Properties

| Property                                                                     | Type     | Required | Nullable    | Defined by                                                                                                                                                                                                      |
| :--------------------------------------------------------------------------- | :------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [default](#default)                                                          | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-aggregation-properties-default.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/default")                                        |
| [drop](#drop)                                                                | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-aggregation-properties-drop.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/drop")                                              |
| [explicit\_bucket\_histogram](#explicit_bucket_histogram)                    | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/explicit_bucket_histogram")                  |
| [base2\_exponential\_bucket\_histogram](#base2_exponential_bucket_histogram) | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-base2exponentialbuckethistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/base2_exponential_bucket_histogram") |
| [last\_value](#last_value)                                                   | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-aggregation-properties-last_value.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/last_value")                                  |
| [sum](#sum)                                                                  | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-aggregation-properties-sum.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/sum")                                                |

## default



`default`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation-properties-default.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-aggregation-properties-default.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/default")

### default Type

`object` ([Details](meter_provider-defs-aggregation-properties-default.md))

## drop



`drop`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation-properties-drop.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-aggregation-properties-drop.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/drop")

### drop Type

`object` ([Details](meter_provider-defs-aggregation-properties-drop.md))

## explicit\_bucket\_histogram



`explicit_bucket_histogram`

* is optional

* Type: `object` ([Details](meter_provider-defs-explicitbuckethistogramaggregation.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/explicit_bucket_histogram")

### explicit\_bucket\_histogram Type

`object` ([Details](meter_provider-defs-explicitbuckethistogramaggregation.md))

## base2\_exponential\_bucket\_histogram



`base2_exponential_bucket_histogram`

* is optional

* Type: `object` ([Details](meter_provider-defs-base2exponentialbuckethistogramaggregation.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-base2exponentialbuckethistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/base2_exponential_bucket_histogram")

### base2\_exponential\_bucket\_histogram Type

`object` ([Details](meter_provider-defs-base2exponentialbuckethistogramaggregation.md))

## last\_value



`last_value`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation-properties-last_value.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-aggregation-properties-last_value.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/last_value")

### last\_value Type

`object` ([Details](meter_provider-defs-aggregation-properties-last_value.md))

## sum



`sum`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation-properties-sum.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-aggregation-properties-sum.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/sum")

### sum Type

`object` ([Details](meter_provider-defs-aggregation-properties-sum.md))
