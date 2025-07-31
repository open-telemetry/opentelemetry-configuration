# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [logger\_provider.json\*](../schema/logger_provider.json "open original schema") |

## ExperimentalLoggerConfigurator Type

`object` ([Details](logger_provider-defs-experimentalloggerconfigurator.md))

# ExperimentalLoggerConfigurator Properties

| Property                           | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :--------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [default\_config](#default_config) | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-experimentalloggerconfig.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator/properties/default_config")                   |
| [loggers](#loggers)                | `array`  | Optional | cannot be null | [Untitled schema](logger_provider-defs-experimentalloggerconfigurator-properties-loggers.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator/properties/loggers") |

## default\_config



`default_config`

* is optional

* Type: `object` ([Details](logger_provider-defs-experimentalloggerconfig.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-experimentalloggerconfig.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator/properties/default_config")

### default\_config Type

`object` ([Details](logger_provider-defs-experimentalloggerconfig.md))

## loggers



`loggers`

* is optional

* Type: `object[]` ([Details](logger_provider-defs-experimentalloggermatcherandconfig.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-experimentalloggerconfigurator-properties-loggers.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator/properties/loggers")

### loggers Type

`object[]` ([Details](logger_provider-defs-experimentalloggermatcherandconfig.md))
