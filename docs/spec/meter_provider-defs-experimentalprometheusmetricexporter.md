# Untitled schema Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json\*](../schema/meter_provider.json "open original schema") |

## ExperimentalPrometheusMetricExporter Type

`object` ([Details](meter_provider-defs-experimentalprometheusmetricexporter.md))

# ExperimentalPrometheusMetricExporter Properties

| Property                                                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                         |
| :----------------------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [host](#host)                                                      | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-host.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/host")                               |
| [port](#port)                                                      | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-port.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/port")                               |
| [without\_units](#without_units)                                   | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_units.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_units")             |
| [without\_type\_suffix](#without_type_suffix)                      | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_type_suffix.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_type_suffix") |
| [without\_scope\_info](#without_scope_info)                        | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_scope_info.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_scope_info")   |
| [with\_resource\_constant\_labels](#with_resource_constant_labels) | `object`  | Optional | cannot be null | [Untitled schema](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/with_resource_constant_labels")                                                    |

## host



`host`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-host.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/host")

### host Type

`string`

## port



`port`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-port.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/port")

### port Type

`integer`

## without\_units



`without_units`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_units.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_units")

### without\_units Type

`boolean`

## without\_type\_suffix



`without_type_suffix`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_type_suffix.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_type_suffix")

### without\_type\_suffix Type

`boolean`

## without\_scope\_info



`without_scope_info`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_scope_info.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_scope_info")

### without\_scope\_info Type

`boolean`

## with\_resource\_constant\_labels



`with_resource_constant_labels`

* is optional

* Type: `object` ([Details](common-defs-includeexclude.md))

* cannot be null

* defined in: [Untitled schema](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/with_resource_constant_labels")

### with\_resource\_constant\_labels Type

`object` ([Details](common-defs-includeexclude.md))
