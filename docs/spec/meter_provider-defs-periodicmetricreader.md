# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## PeriodicMetricReader Type

`object` ([Details](meter_provider-defs-periodicmetricreader.md))

# PeriodicMetricReader Properties

| Property                                   | Type      | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :----------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [interval](#interval)                      | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-periodicmetricreader-properties-interval.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/interval")   |
| [timeout](#timeout)                        | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-periodicmetricreader-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/timeout")     |
| [exporter](#exporter)                      | `object`  | Required | cannot be null | [Untitled schema](meter_provider-defs-pushmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/exporter")                         |
| [producers](#producers)                    | `array`   | Optional | cannot be null | [Untitled schema](meter_provider-defs-periodicmetricreader-properties-producers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/producers") |
| [cardinality\_limits](#cardinality_limits) | `object`  | Optional | cannot be null | [Untitled schema](meter_provider-defs-cardinalitylimits.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/cardinality_limits")                |

## interval



`interval`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-periodicmetricreader-properties-interval.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/interval")

### interval Type

`integer`

### interval Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-periodicmetricreader-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/timeout")

### timeout Type

`integer`

### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## exporter



`exporter`

* is required

* Type: `object` ([Details](meter_provider-defs-pushmetricexporter.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-pushmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/exporter")

### exporter Type

`object` ([Details](meter_provider-defs-pushmetricexporter.md))

### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## producers



`producers`

* is optional

* Type: `object[]` ([Details](meter_provider-defs-metricproducer.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-periodicmetricreader-properties-producers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/producers")

### producers Type

`object[]` ([Details](meter_provider-defs-metricproducer.md))

## cardinality\_limits



`cardinality_limits`

* is optional

* Type: `object` ([Details](meter_provider-defs-cardinalitylimits.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/cardinality_limits")

### cardinality\_limits Type

`object` ([Details](meter_provider-defs-cardinalitylimits.md))
