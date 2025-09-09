# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## PullMetricExporter Type

`object` ([Details](meter_provider-defs-pullmetricexporter.md))

## PullMetricExporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# PullMetricExporter Properties

| Property                                         | Type     | Required | Nullable    | Defined by                                                                                                                                                                                           |
| :----------------------------------------------- | :------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [prometheus/development](#prometheusdevelopment) | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter/properties/prometheus/development") |
| `.*`                                             | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-pullmetricexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter/patternProperties/.*")             |
| Additional Properties                            | Any      | Optional | can be null |                                                                                                                                                                                                      |

## prometheus/development



`prometheus/development`

* is optional

* Type: `object` ([Details](meter_provider-defs-experimentalprometheusmetricexporter.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter/properties/prometheus/development")

### development Type

`object` ([Details](meter_provider-defs-experimentalprometheusmetricexporter.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](meter_provider-defs-pullmetricexporter-patternproperties-.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-pullmetricexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter/patternProperties/.*")

### .\* Type

`object` ([Details](meter_provider-defs-pullmetricexporter-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
