# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## MetricReader Type

`object` ([Details](meter_provider-defs-metricreader.md))

## MetricReader Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# MetricReader Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [periodic](#periodic) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-periodicmetricreader.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader/properties/periodic") |
| [pull](#pull)         | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-pullmetricreader.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader/properties/pull")         |

## periodic



`periodic`

* is optional

* Type: `object` ([Details](meter_provider-defs-periodicmetricreader.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-periodicmetricreader.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader/properties/periodic")

### periodic Type

`object` ([Details](meter_provider-defs-periodicmetricreader.md))

## pull



`pull`

* is optional

* Type: `object` ([Details](meter_provider-defs-pullmetricreader.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-pullmetricreader.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader/properties/pull")

### pull Type

`object` ([Details](meter_provider-defs-pullmetricreader.md))
