# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## PullMetricReader Type

`object` ([Details](meter_provider-defs-pullmetricreader.md))

# PullMetricReader Properties

| Property                                   | Type     | Required | Nullable       | Defined by                                                                                                                                                                             |
| :----------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [exporter](#exporter)                      | `object` | Required | cannot be null | [Untitled schema](meter_provider-defs-pullmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/exporter")                     |
| [producers](#producers)                    | `array`  | Optional | cannot be null | [Untitled schema](meter_provider-defs-pullmetricreader-properties-producers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/producers") |
| [cardinality\_limits](#cardinality_limits) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-cardinalitylimits.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/cardinality_limits")            |

## exporter



`exporter`

* is required

* Type: `object` ([Details](meter_provider-defs-pullmetricexporter.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-pullmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/exporter")

### exporter Type

`object` ([Details](meter_provider-defs-pullmetricexporter.md))

### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## producers



`producers`

* is optional

* Type: `object[]` ([Details](meter_provider-defs-metricproducer.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-pullmetricreader-properties-producers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/producers")

### producers Type

`object[]` ([Details](meter_provider-defs-metricproducer.md))

## cardinality\_limits



`cardinality_limits`

* is optional

* Type: `object` ([Details](meter_provider-defs-cardinalitylimits.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/cardinality_limits")

### cardinality\_limits Type

`object` ([Details](meter_provider-defs-cardinalitylimits.md))
