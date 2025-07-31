# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/temporality_preference
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## temporality\_preference Type

`string`

## temporality\_preference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"cumulative"` |             |
| `"delta"`      |             |
| `"low_memory"` |             |
