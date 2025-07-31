# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExporterDefaultHistogramAggregation
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## ExporterDefaultHistogramAggregation Type

`string`

## ExporterDefaultHistogramAggregation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"explicit_bucket_histogram"`          |             |
| `"base2_exponential_bucket_histogram"` |             |
