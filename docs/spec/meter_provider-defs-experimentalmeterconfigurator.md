# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## ExperimentalMeterConfigurator Type

`object` ([Details](meter_provider-defs-experimentalmeterconfigurator.md))

# ExperimentalMeterConfigurator Properties

| Property                           | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                 |
| :--------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [default\_config](#default_config) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-experimentalmeterconfig.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator/properties/default_config")                 |
| [meters](#meters)                  | `array`  | Optional | cannot be null | [Untitled schema](meter_provider-defs-experimentalmeterconfigurator-properties-meters.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator/properties/meters") |

## default\_config



`default_config`

* is optional

* Type: `object` ([Details](meter_provider-defs-experimentalmeterconfig.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-experimentalmeterconfig.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator/properties/default_config")

### default\_config Type

`object` ([Details](meter_provider-defs-experimentalmeterconfig.md))

## meters



`meters`

* is optional

* Type: `object[]` ([Details](meter_provider-defs-experimentalmetermatcherandconfig.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-experimentalmeterconfigurator-properties-meters.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator/properties/meters")

### meters Type

`object[]` ([Details](meter_provider-defs-experimentalmetermatcherandconfig.md))
