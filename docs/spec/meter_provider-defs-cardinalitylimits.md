# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## CardinalityLimits Type

`object` ([Details](meter_provider-defs-cardinalitylimits.md))

# CardinalityLimits Properties

| Property                                                     | Type      | Required | Nullable    | Defined by                                                                                                                                                                                                                 |
| :----------------------------------------------------------- | :-------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [default](#default)                                          | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-cardinalitylimits-properties-default.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/default")                                       |
| [counter](#counter)                                          | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-cardinalitylimits-properties-counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/counter")                                       |
| [gauge](#gauge)                                              | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-cardinalitylimits-properties-gauge.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/gauge")                                           |
| [histogram](#histogram)                                      | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-cardinalitylimits-properties-histogram.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/histogram")                                   |
| [observable\_counter](#observable_counter)                   | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-cardinalitylimits-properties-observable_counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/observable_counter")                 |
| [observable\_gauge](#observable_gauge)                       | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-cardinalitylimits-properties-observable_gauge.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/observable_gauge")                     |
| [observable\_up\_down\_counter](#observable_up_down_counter) | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-cardinalitylimits-properties-observable_up_down_counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/observable_up_down_counter") |
| [up\_down\_counter](#up_down_counter)                        | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-cardinalitylimits-properties-up_down_counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/up_down_counter")                       |

## default



`default`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-default.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/default")

### default Type

`integer`

### default Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## counter



`counter`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/counter")

### counter Type

`integer`

### counter Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## gauge



`gauge`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-gauge.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/gauge")

### gauge Type

`integer`

### gauge Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## histogram



`histogram`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-histogram.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/histogram")

### histogram Type

`integer`

### histogram Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## observable\_counter



`observable_counter`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-observable_counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/observable_counter")

### observable\_counter Type

`integer`

### observable\_counter Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## observable\_gauge



`observable_gauge`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-observable_gauge.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/observable_gauge")

### observable\_gauge Type

`integer`

### observable\_gauge Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## observable\_up\_down\_counter



`observable_up_down_counter`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-observable_up_down_counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/observable_up_down_counter")

### observable\_up\_down\_counter Type

`integer`

### observable\_up\_down\_counter Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## up\_down\_counter



`up_down_counter`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-up_down_counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/up_down_counter")

### up\_down\_counter Type

`integer`

### up\_down\_counter Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`
