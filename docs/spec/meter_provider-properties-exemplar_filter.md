# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/properties/exemplar_filter
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## exemplar\_filter Type

`string`

## exemplar\_filter Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"always_on"`   |             |
| `"always_off"`  |             |
| `"trace_based"` |             |
