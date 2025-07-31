# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## MetricProducer Type

`object` ([Details](meter_provider-defs-metricproducer.md))

## MetricProducer Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

# MetricProducer Properties

| Property                  | Type     | Required | Nullable    | Defined by                                                                                                                                                                           |
| :------------------------ | :------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [opencensus](#opencensus) | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-metricproducer-properties-opencensus.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer/properties/opencensus") |
| `.*`                      | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-metricproducer-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer/patternProperties/.*")     |
| Additional Properties     | Any      | Optional | can be null |                                                                                                                                                                                      |

## opencensus



`opencensus`

* is optional

* Type: `object` ([Details](meter_provider-defs-metricproducer-properties-opencensus.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-metricproducer-properties-opencensus.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer/properties/opencensus")

### opencensus Type

`object` ([Details](meter_provider-defs-metricproducer-properties-opencensus.md))

## Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](meter_provider-defs-metricproducer-patternproperties-.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-metricproducer-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer/patternProperties/.*")

### .\* Type

`object` ([Details](meter_provider-defs-metricproducer-patternproperties-.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
