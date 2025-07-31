# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/default_histogram_aggregation
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## default\_histogram\_aggregation Type

`string`

## default\_histogram\_aggregation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"explicit_bucket_histogram"`          |             |
| `"base2_exponential_bucket_histogram"` |             |
