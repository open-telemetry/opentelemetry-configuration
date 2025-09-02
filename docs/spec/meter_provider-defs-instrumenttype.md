# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/InstrumentType
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## InstrumentType Type

`string`

## InstrumentType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"counter"`                    |             |
| `"gauge"`                      |             |
| `"histogram"`                  |             |
| `"observable_counter"`         |             |
| `"observable_gauge"`           |             |
| `"observable_up_down_counter"` |             |
| `"up_down_counter"`            |             |
