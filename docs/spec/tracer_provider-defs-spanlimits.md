# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [tracer\_provider.json\*](../schema/tracer_provider.json "open original schema") |

## SpanLimits Type

`object` ([Details](tracer_provider-defs-spanlimits.md))

# SpanLimits Properties

| Property                                                         | Type      | Required | Nullable    | Defined by                                                                                                                                                                                                         |
| :--------------------------------------------------------------- | :-------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attribute\_value\_length\_limit](#attribute_value_length_limit) | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/attribute_value_length_limit") |
| [attribute\_count\_limit](#attribute_count_limit)                | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/attribute_count_limit")               |
| [event\_count\_limit](#event_count_limit)                        | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-event_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/event_count_limit")                       |
| [link\_count\_limit](#link_count_limit)                          | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-link_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/link_count_limit")                         |
| [event\_attribute\_count\_limit](#event_attribute_count_limit)   | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-event_attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/event_attribute_count_limit")   |
| [link\_attribute\_count\_limit](#link_attribute_count_limit)     | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-link_attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/link_attribute_count_limit")     |

## attribute\_value\_length\_limit



`attribute_value_length_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/attribute_value_length_limit")

### attribute\_value\_length\_limit Type

`integer`

### attribute\_value\_length\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## attribute\_count\_limit



`attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/attribute_count_limit")

### attribute\_count\_limit Type

`integer`

### attribute\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## event\_count\_limit



`event_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-event_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/event_count_limit")

### event\_count\_limit Type

`integer`

### event\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## link\_count\_limit



`link_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-link_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/link_count_limit")

### link\_count\_limit Type

`integer`

### link\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## event\_attribute\_count\_limit



`event_attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-event_attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/event_attribute_count_limit")

### event\_attribute\_count\_limit Type

`integer`

### event\_attribute\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## link\_attribute\_count\_limit



`link_attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-link_attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/link_attribute_count_limit")

### link\_attribute\_count\_limit Type

`integer`

### link\_attribute\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`
