# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## ExplicitBucketHistogramAggregation Type

`object` ([Details](meter_provider-defs-explicitbuckethistogramaggregation.md))

# ExplicitBucketHistogramAggregation Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                           |
| :---------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [boundaries](#boundaries)           | `array`   | Optional | cannot be null | [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation-properties-boundaries.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation/properties/boundaries")         |
| [record\_min\_max](#record_min_max) | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation-properties-record_min_max.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation/properties/record_min_max") |

## boundaries



`boundaries`

* is optional

* Type: `number[]`

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation-properties-boundaries.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation/properties/boundaries")

### boundaries Type

`number[]`

## record\_min\_max



`record_min_max`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation-properties-record_min_max.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation/properties/record_min_max")

### record\_min\_max Type

`boolean`
