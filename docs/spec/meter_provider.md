# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/meter_provider.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meter\_provider.json](../schema/meter_provider.json "open original schema") |

## Untitled object in undefined Type

`object` ([Details](meter_provider.md))

# Untitled object in undefined Properties

| Property                                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                   |
| :---------------------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [readers](#readers)                                               | `array`  | Required | cannot be null | [Untitled schema](meter_provider-properties-readers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/readers")                                        |
| [views](#views)                                                   | `array`  | Optional | cannot be null | [Untitled schema](meter_provider-properties-views.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/views")                                            |
| [exemplar\_filter](#exemplar_filter)                              | `string` | Optional | can be null    | [Untitled schema](meter_provider-properties-exemplar_filter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/exemplar_filter")                        |
| [meter\_configurator/development](#meter_configuratordevelopment) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-experimentalmeterconfigurator.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/meter_configurator/development") |

## readers



`readers`

* is required

* Type: `object[]` ([Details](meter_provider-defs-metricreader.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-properties-readers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/readers")

### readers Type

`object[]` ([Details](meter_provider-defs-metricreader.md))

### readers Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## views



`views`

* is optional

* Type: `object[]` ([Details](meter_provider-defs-view.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-properties-views.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/views")

### views Type

`object[]` ([Details](meter_provider-defs-view.md))

## exemplar\_filter



`exemplar_filter`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-properties-exemplar_filter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/exemplar_filter")

### exemplar\_filter Type

`string`

### exemplar\_filter Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"always_on"`   |             |
| `"always_off"`  |             |
| `"trace_based"` |             |

## meter\_configurator/development



`meter_configurator/development`

* is optional

* Type: `object` ([Details](meter_provider-defs-experimentalmeterconfigurator.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-experimentalmeterconfigurator.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/meter_configurator/development")

### development Type

`object` ([Details](meter_provider-defs-experimentalmeterconfigurator.md))

# Untitled object in undefined Definitions

## Definitions group ExemplarFilter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExemplarFilter"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group PeriodicMetricReader

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader"}
```

| Property                                   | Type      | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :----------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [interval](#interval)                      | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-periodicmetricreader-properties-interval.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/interval")   |
| [timeout](#timeout)                        | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-periodicmetricreader-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/timeout")     |
| [exporter](#exporter)                      | `object`  | Required | cannot be null | [Untitled schema](meter_provider-defs-pushmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/exporter")                         |
| [producers](#producers)                    | `array`   | Optional | cannot be null | [Untitled schema](meter_provider-defs-periodicmetricreader-properties-producers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/producers") |
| [cardinality\_limits](#cardinality_limits) | `object`  | Optional | cannot be null | [Untitled schema](meter_provider-defs-cardinalitylimits.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/cardinality_limits")                |

### interval



`interval`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-periodicmetricreader-properties-interval.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/interval")

#### interval Type

`integer`

#### interval Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-periodicmetricreader-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/timeout")

#### timeout Type

`integer`

#### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### exporter



`exporter`

* is required

* Type: `object` ([Details](meter_provider-defs-pushmetricexporter.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-pushmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/exporter")

#### exporter Type

`object` ([Details](meter_provider-defs-pushmetricexporter.md))

#### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

### producers



`producers`

* is optional

* Type: `object[]` ([Details](meter_provider-defs-metricproducer.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-periodicmetricreader-properties-producers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/producers")

#### producers Type

`object[]` ([Details](meter_provider-defs-metricproducer.md))

### cardinality\_limits



`cardinality_limits`

* is optional

* Type: `object` ([Details](meter_provider-defs-cardinalitylimits.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PeriodicMetricReader/properties/cardinality_limits")

#### cardinality\_limits Type

`object` ([Details](meter_provider-defs-cardinalitylimits.md))

## Definitions group PullMetricReader

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader"}
```

| Property                                     | Type     | Required | Nullable       | Defined by                                                                                                                                                                             |
| :------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [exporter](#exporter-1)                      | `object` | Required | cannot be null | [Untitled schema](meter_provider-defs-pullmetricreader-properties-exporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/exporter")   |
| [producers](#producers-1)                    | `array`  | Optional | cannot be null | [Untitled schema](meter_provider-defs-pullmetricreader-properties-producers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/producers") |
| [cardinality\_limits](#cardinality_limits-1) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-cardinalitylimits.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/cardinality_limits")            |

### exporter



`exporter`

* is required

* Type: `object` ([Details](meter_provider-defs-pullmetricreader-properties-exporter.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-pullmetricreader-properties-exporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/exporter")

#### exporter Type

`object` ([Details](meter_provider-defs-pullmetricreader-properties-exporter.md))

#### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

### producers



`producers`

* is optional

* Type: `object[]` ([Details](meter_provider-defs-metricproducer.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-pullmetricreader-properties-producers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/producers")

#### producers Type

`object[]` ([Details](meter_provider-defs-metricproducer.md))

### cardinality\_limits



`cardinality_limits`

* is optional

* Type: `object` ([Details](meter_provider-defs-cardinalitylimits.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricReader/properties/cardinality_limits")

#### cardinality\_limits Type

`object` ([Details](meter_provider-defs-cardinalitylimits.md))

## Definitions group CardinalityLimits

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits"}
```

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

### default



`default`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-default.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/default")

#### default Type

`integer`

#### default Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### counter



`counter`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/counter")

#### counter Type

`integer`

#### counter Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### gauge



`gauge`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-gauge.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/gauge")

#### gauge Type

`integer`

#### gauge Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### histogram



`histogram`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-histogram.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/histogram")

#### histogram Type

`integer`

#### histogram Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### observable\_counter



`observable_counter`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-observable_counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/observable_counter")

#### observable\_counter Type

`integer`

#### observable\_counter Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### observable\_gauge



`observable_gauge`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-observable_gauge.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/observable_gauge")

#### observable\_gauge Type

`integer`

#### observable\_gauge Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### observable\_up\_down\_counter



`observable_up_down_counter`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-observable_up_down_counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/observable_up_down_counter")

#### observable\_up\_down\_counter Type

`integer`

#### observable\_up\_down\_counter Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### up\_down\_counter



`up_down_counter`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-cardinalitylimits-properties-up_down_counter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/CardinalityLimits/properties/up_down_counter")

#### up\_down\_counter Type

`integer`

#### up\_down\_counter Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

## Definitions group PushMetricExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter"}
```

| Property                                        | Type     | Required | Nullable    | Defined by                                                                                                                                                                                               |
| :---------------------------------------------- | :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [otlp\_http](#otlp_http)                        | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-otlphttpmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_http")                                |
| [otlp\_grpc](#otlp_grpc)                        | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_grpc")                                |
| [otlp\_file/development](#otlp_filedevelopment) | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-pushmetricexporter-properties-development.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_file/development") |
| [console](#console)                             | `object` | Optional | can be null | [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/console")                                                 |
| `.*`                                            | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-pushmetricexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/patternProperties/.*")                 |
| Additional Properties                           | Any      | Optional | can be null |                                                                                                                                                                                                          |

### otlp\_http



`otlp_http`

* is optional

* Type: `object` ([Details](meter_provider-defs-otlphttpmetricexporter.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_http")

#### otlp\_http Type

`object` ([Details](meter_provider-defs-otlphttpmetricexporter.md))

### otlp\_grpc



`otlp_grpc`

* is optional

* Type: `object` ([Details](meter_provider-defs-otlpgrpcmetricexporter.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_grpc")

#### otlp\_grpc Type

`object` ([Details](meter_provider-defs-otlpgrpcmetricexporter.md))

### otlp\_file/development



`otlp_file/development`

* is optional

* Type: `object` ([Details](meter_provider-defs-pushmetricexporter-properties-development.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-pushmetricexporter-properties-development.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/otlp_file/development")

#### development Type

`object` ([Details](meter_provider-defs-pushmetricexporter-properties-development.md))

### console



`console`

* is optional

* Type: `object` ([Details](common-defs-consoleexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/properties/console")

#### console Type

`object` ([Details](common-defs-consoleexporter.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](meter_provider-defs-pushmetricexporter-patternproperties-.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-pushmetricexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PushMetricExporter/patternProperties/.*")

#### .\* Type

`object` ([Details](meter_provider-defs-pushmetricexporter-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group PullMetricExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter"}
```

| Property                                         | Type     | Required | Nullable    | Defined by                                                                                                                                                                                                |
| :----------------------------------------------- | :------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [prometheus/development](#prometheusdevelopment) | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-pullmetricexporter-properties-development.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter/properties/prometheus/development") |
| `.*`                                             | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-pullmetricexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter/patternProperties/.*")                  |
| Additional Properties                            | Any      | Optional | can be null |                                                                                                                                                                                                           |

### prometheus/development



`prometheus/development`

* is optional

* Type: `object` ([Details](meter_provider-defs-pullmetricexporter-properties-development.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-pullmetricexporter-properties-development.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter/properties/prometheus/development")

#### development Type

`object` ([Details](meter_provider-defs-pullmetricexporter-properties-development.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](meter_provider-defs-pullmetricexporter-patternproperties-.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-pullmetricexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/PullMetricExporter/patternProperties/.*")

#### .\* Type

`object` ([Details](meter_provider-defs-pullmetricexporter-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group MetricProducer

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer"}
```

| Property                  | Type     | Required | Nullable    | Defined by                                                                                                                                                                           |
| :------------------------ | :------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [opencensus](#opencensus) | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-metricproducer-properties-opencensus.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer/properties/opencensus") |
| `.*`                      | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-metricproducer-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer/patternProperties/.*")     |
| Additional Properties     | Any      | Optional | can be null |                                                                                                                                                                                      |

### opencensus



`opencensus`

* is optional

* Type: `object` ([Details](meter_provider-defs-metricproducer-properties-opencensus.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-metricproducer-properties-opencensus.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer/properties/opencensus")

#### opencensus Type

`object` ([Details](meter_provider-defs-metricproducer-properties-opencensus.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](meter_provider-defs-metricproducer-patternproperties-.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-metricproducer-patternproperties-.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricProducer/patternProperties/.*")

#### .\* Type

`object` ([Details](meter_provider-defs-metricproducer-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group OpenCensusMetricProducer

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OpenCensusMetricProducer"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ExperimentalPrometheusMetricExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter"}
```

| Property                                                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                         |
| :----------------------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [host](#host)                                                      | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-host.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/host")                               |
| [port](#port)                                                      | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-port.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/port")                               |
| [without\_units](#without_units)                                   | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_units.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_units")             |
| [without\_type\_suffix](#without_type_suffix)                      | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_type_suffix.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_type_suffix") |
| [without\_scope\_info](#without_scope_info)                        | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_scope_info.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_scope_info")   |
| [with\_resource\_constant\_labels](#with_resource_constant_labels) | `object`  | Optional | cannot be null | [Untitled schema](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/with_resource_constant_labels")                                                    |

### host



`host`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-host.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/host")

#### host Type

`string`

### port



`port`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-port.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/port")

#### port Type

`integer`

### without\_units



`without_units`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_units.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_units")

#### without\_units Type

`boolean`

### without\_type\_suffix



`without_type_suffix`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_type_suffix.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_type_suffix")

#### without\_type\_suffix Type

`boolean`

### without\_scope\_info



`without_scope_info`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalprometheusmetricexporter-properties-without_scope_info.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/without_scope_info")

#### without\_scope\_info Type

`boolean`

### with\_resource\_constant\_labels



`with_resource_constant_labels`

* is optional

* Type: `object` ([Details](common-defs-includeexclude.md))

* cannot be null

* defined in: [Untitled schema](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalPrometheusMetricExporter/properties/with_resource_constant_labels")

#### with\_resource\_constant\_labels Type

`object` ([Details](common-defs-includeexclude.md))

## Definitions group MetricReader

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [periodic](#periodic) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-periodicmetricreader.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader/properties/periodic") |
| [pull](#pull)         | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-pullmetricreader.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader/properties/pull")         |

### periodic



`periodic`

* is optional

* Type: `object` ([Details](meter_provider-defs-periodicmetricreader.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-periodicmetricreader.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader/properties/periodic")

#### periodic Type

`object` ([Details](meter_provider-defs-periodicmetricreader.md))

### pull



`pull`

* is optional

* Type: `object` ([Details](meter_provider-defs-pullmetricreader.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-pullmetricreader.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MetricReader/properties/pull")

#### pull Type

`object` ([Details](meter_provider-defs-pullmetricreader.md))

## Definitions group ExporterTemporalityPreference

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExporterTemporalityPreference"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ExporterDefaultHistogramAggregation

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExporterDefaultHistogramAggregation"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group OtlpHttpMetricExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter"}
```

| Property                                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                 |
| :---------------------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint)                                             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/endpoint")                                           |
| [certificate\_file](#certificate_file)                            | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/certificate_file")                           |
| [client\_key\_file](#client_key_file)                             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/client_key_file")                             |
| [client\_certificate\_file](#client_certificate_file)             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/client_certificate_file")             |
| [headers](#headers)                                               | `array`   | Optional | cannot be null | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-headers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/headers")                                             |
| [headers\_list](#headers_list)                                    | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/headers_list")                                   |
| [compression](#compression)                                       | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-compression.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/compression")                                     |
| [timeout](#timeout-1)                                             | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/timeout")                                             |
| [encoding](#encoding)                                             | `string`  | Optional | can be null    | [Untitled schema](common-defs-otlphttpencoding.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/encoding")                                                                             |
| [temporality\_preference](#temporality_preference)                | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-temporality_preference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/temporality_preference")               |
| [default\_histogram\_aggregation](#default_histogram_aggregation) | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-default_histogram_aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/default_histogram_aggregation") |

### endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/endpoint")

#### endpoint Type

`string`

### certificate\_file



`certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/certificate_file")

#### certificate\_file Type

`string`

### client\_key\_file



`client_key_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/client_key_file")

#### client\_key\_file Type

`string`

### client\_certificate\_file



`client_certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/client_certificate_file")

#### client\_certificate\_file Type

`string`

### headers



`headers`

* is optional

* Type: `object[]` ([Details](common-defs-namestringvaluepair.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-headers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/headers")

#### headers Type

`object[]` ([Details](common-defs-namestringvaluepair.md))

### headers\_list



`headers_list`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/headers_list")

#### headers\_list Type

`string`

### compression



`compression`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-compression.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/compression")

#### compression Type

`string`

### timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/timeout")

#### timeout Type

`integer`

#### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### encoding



`encoding`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](common-defs-otlphttpencoding.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/encoding")

#### encoding Type

`string`

#### encoding Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"protobuf"` |             |
| `"json"`     |             |

### temporality\_preference



`temporality_preference`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-temporality_preference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/temporality_preference")

#### temporality\_preference Type

`string`

#### temporality\_preference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"cumulative"` |             |
| `"delta"`      |             |
| `"low_memory"` |             |

### default\_histogram\_aggregation



`default_histogram_aggregation`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlphttpmetricexporter-properties-default_histogram_aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpHttpMetricExporter/properties/default_histogram_aggregation")

#### default\_histogram\_aggregation Type

`string`

#### default\_histogram\_aggregation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"explicit_bucket_histogram"`          |             |
| `"base2_exponential_bucket_histogram"` |             |

## Definitions group OtlpGrpcMetricExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter"}
```

| Property                                                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                 |
| :------------------------------------------------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint-1)                                             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/endpoint")                                           |
| [certificate\_file](#certificate_file-1)                            | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/certificate_file")                           |
| [client\_key\_file](#client_key_file-1)                             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/client_key_file")                             |
| [client\_certificate\_file](#client_certificate_file-1)             | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/client_certificate_file")             |
| [headers](#headers-1)                                               | `array`   | Optional | cannot be null | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-headers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/headers")                                             |
| [headers\_list](#headers_list-1)                                    | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/headers_list")                                   |
| [compression](#compression-1)                                       | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-compression.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/compression")                                     |
| [timeout](#timeout-2)                                               | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/timeout")                                             |
| [insecure](#insecure)                                               | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-insecure.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/insecure")                                           |
| [temporality\_preference](#temporality_preference-1)                | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-temporality_preference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/temporality_preference")               |
| [default\_histogram\_aggregation](#default_histogram_aggregation-1) | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-default_histogram_aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/default_histogram_aggregation") |

### endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/endpoint")

#### endpoint Type

`string`

### certificate\_file



`certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/certificate_file")

#### certificate\_file Type

`string`

### client\_key\_file



`client_key_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-client_key_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/client_key_file")

#### client\_key\_file Type

`string`

### client\_certificate\_file



`client_certificate_file`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-client_certificate_file.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/client_certificate_file")

#### client\_certificate\_file Type

`string`

### headers



`headers`

* is optional

* Type: `object[]` ([Details](common-defs-namestringvaluepair.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-headers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/headers")

#### headers Type

`object[]` ([Details](common-defs-namestringvaluepair.md))

### headers\_list



`headers_list`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-headers_list.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/headers_list")

#### headers\_list Type

`string`

### compression



`compression`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-compression.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/compression")

#### compression Type

`string`

### timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/timeout")

#### timeout Type

`integer`

#### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### insecure



`insecure`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-insecure.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/insecure")

#### insecure Type

`boolean`

### temporality\_preference



`temporality_preference`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-temporality_preference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/temporality_preference")

#### temporality\_preference Type

`string`

#### temporality\_preference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"cumulative"` |             |
| `"delta"`      |             |
| `"low_memory"` |             |

### default\_histogram\_aggregation



`default_histogram_aggregation`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-otlpgrpcmetricexporter-properties-default_histogram_aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/OtlpGrpcMetricExporter/properties/default_histogram_aggregation")

#### default\_histogram\_aggregation Type

`string`

#### default\_histogram\_aggregation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"explicit_bucket_histogram"`          |             |
| `"base2_exponential_bucket_histogram"` |             |

## Definitions group ExperimentalOtlpFileMetricExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter"}
```

| Property                                                            | Type     | Required | Nullable    | Defined by                                                                                                                                                                                                                                                         |
| :------------------------------------------------------------------ | :------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [output\_stream](#output_stream)                                    | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter-properties-output_stream.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/output_stream")                                 |
| [temporality\_preference](#temporality_preference-2)                | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter-properties-temporality_preference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/temporality_preference")               |
| [default\_histogram\_aggregation](#default_histogram_aggregation-2) | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter-properties-default_histogram_aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/default_histogram_aggregation") |

### output\_stream



`output_stream`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter-properties-output_stream.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/output_stream")

#### output\_stream Type

`string`

### temporality\_preference



`temporality_preference`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter-properties-temporality_preference.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/temporality_preference")

#### temporality\_preference Type

`string`

#### temporality\_preference Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"cumulative"` |             |
| `"delta"`      |             |
| `"low_memory"` |             |

### default\_histogram\_aggregation



`default_histogram_aggregation`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-experimentalotlpfilemetricexporter-properties-default_histogram_aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalOtlpFileMetricExporter/properties/default_histogram_aggregation")

#### default\_histogram\_aggregation Type

`string`

#### default\_histogram\_aggregation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"explicit_bucket_histogram"`          |             |
| `"base2_exponential_bucket_histogram"` |             |

## Definitions group View

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/View"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [selector](#selector) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-viewselector.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/View/properties/selector") |
| [stream](#stream)     | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-viewstream.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/View/properties/stream")     |

### selector



`selector`

* is optional

* Type: `object` ([Details](meter_provider-defs-viewselector.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-viewselector.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/View/properties/selector")

#### selector Type

`object` ([Details](meter_provider-defs-viewselector.md))

### stream



`stream`

* is optional

* Type: `object` ([Details](meter_provider-defs-viewstream.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-viewstream.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/View/properties/stream")

#### stream Type

`object` ([Details](meter_provider-defs-viewstream.md))

## Definitions group ViewSelector

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector"}
```

| Property                                | Type     | Required | Nullable    | Defined by                                                                                                                                                                                   |
| :-------------------------------------- | :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [instrument\_name](#instrument_name)    | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-instrument_name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/instrument_name")   |
| [instrument\_type](#instrument_type)    | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-instrument_type.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/instrument_type")   |
| [unit](#unit)                           | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-unit.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/unit")                         |
| [meter\_name](#meter_name)              | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-meter_name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_name")             |
| [meter\_version](#meter_version)        | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-meter_version.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_version")       |
| [meter\_schema\_url](#meter_schema_url) | `string` | Optional | can be null | [Untitled schema](meter_provider-defs-viewselector-properties-meter_schema_url.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_schema_url") |

### instrument\_name



`instrument_name`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-instrument_name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/instrument_name")

#### instrument\_name Type

`string`

### instrument\_type



`instrument_type`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-instrument_type.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/instrument_type")

#### instrument\_type Type

`string`

#### instrument\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"counter"`                    |             |
| `"gauge"`                      |             |
| `"histogram"`                  |             |
| `"observable_counter"`         |             |
| `"observable_gauge"`           |             |
| `"observable_up_down_counter"` |             |
| `"up_down_counter"`            |             |

### unit



`unit`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-unit.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/unit")

#### unit Type

`string`

### meter\_name



`meter_name`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-meter_name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_name")

#### meter\_name Type

`string`

### meter\_version



`meter_version`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-meter_version.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_version")

#### meter\_version Type

`string`

### meter\_schema\_url



`meter_schema_url`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewselector-properties-meter_schema_url.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewSelector/properties/meter_schema_url")

#### meter\_schema\_url Type

`string`

## Definitions group InstrumentType

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/InstrumentType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ViewStream

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream"}
```

| Property                                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :---------------------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                                     | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-viewstream-properties-name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/name")                                                   |
| [description](#description)                                       | `string`  | Optional | can be null    | [Untitled schema](meter_provider-defs-viewstream-properties-description.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/description")                                     |
| [aggregation](#aggregation)                                       | `object`  | Optional | cannot be null | [Untitled schema](meter_provider-defs-aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/aggregation")                                                           |
| [aggregation\_cardinality\_limit](#aggregation_cardinality_limit) | `integer` | Optional | can be null    | [Untitled schema](meter_provider-defs-viewstream-properties-aggregation_cardinality_limit.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/aggregation_cardinality_limit") |
| [attribute\_keys](#attribute_keys)                                | `object`  | Optional | cannot be null | [Untitled schema](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/attribute_keys")                                                             |

### name



`name`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewstream-properties-name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/name")

#### name Type

`string`

### description



`description`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewstream-properties-description.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/description")

#### description Type

`string`

### aggregation



`aggregation`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-aggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/aggregation")

#### aggregation Type

`object` ([Details](meter_provider-defs-aggregation.md))

#### aggregation Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

### aggregation\_cardinality\_limit



`aggregation_cardinality_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-viewstream-properties-aggregation_cardinality_limit.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/aggregation_cardinality_limit")

#### aggregation\_cardinality\_limit Type

`integer`

#### aggregation\_cardinality\_limit Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### attribute\_keys



`attribute_keys`

* is optional

* Type: `object` ([Details](common-defs-includeexclude.md))

* cannot be null

* defined in: [Untitled schema](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ViewStream/properties/attribute_keys")

#### attribute\_keys Type

`object` ([Details](common-defs-includeexclude.md))

## Definitions group Aggregation

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation"}
```

| Property                                                                     | Type     | Required | Nullable    | Defined by                                                                                                                                                                                                                     |
| :--------------------------------------------------------------------------- | :------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [default](#default-1)                                                        | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-aggregation-properties-default.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/default")                                                       |
| [drop](#drop)                                                                | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-aggregation-properties-drop.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/drop")                                                             |
| [explicit\_bucket\_histogram](#explicit_bucket_histogram)                    | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/explicit_bucket_histogram")                                 |
| [base2\_exponential\_bucket\_histogram](#base2_exponential_bucket_histogram) | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-aggregation-properties-base2_exponential_bucket_histogram.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/base2_exponential_bucket_histogram") |
| [last\_value](#last_value)                                                   | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-aggregation-properties-last_value.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/last_value")                                                 |
| [sum](#sum)                                                                  | `object` | Optional | can be null | [Untitled schema](meter_provider-defs-aggregation-properties-sum.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/sum")                                                               |

### default



`default`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation-properties-default.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-aggregation-properties-default.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/default")

#### default Type

`object` ([Details](meter_provider-defs-aggregation-properties-default.md))

### drop



`drop`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation-properties-drop.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-aggregation-properties-drop.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/drop")

#### drop Type

`object` ([Details](meter_provider-defs-aggregation-properties-drop.md))

### explicit\_bucket\_histogram



`explicit_bucket_histogram`

* is optional

* Type: `object` ([Details](meter_provider-defs-explicitbuckethistogramaggregation.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/explicit_bucket_histogram")

#### explicit\_bucket\_histogram Type

`object` ([Details](meter_provider-defs-explicitbuckethistogramaggregation.md))

### base2\_exponential\_bucket\_histogram



`base2_exponential_bucket_histogram`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation-properties-base2_exponential_bucket_histogram.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-aggregation-properties-base2_exponential_bucket_histogram.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/base2_exponential_bucket_histogram")

#### base2\_exponential\_bucket\_histogram Type

`object` ([Details](meter_provider-defs-aggregation-properties-base2_exponential_bucket_histogram.md))

### last\_value



`last_value`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation-properties-last_value.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-aggregation-properties-last_value.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/last_value")

#### last\_value Type

`object` ([Details](meter_provider-defs-aggregation-properties-last_value.md))

### sum



`sum`

* is optional

* Type: `object` ([Details](meter_provider-defs-aggregation-properties-sum.md))

* can be null

* defined in: [Untitled schema](meter_provider-defs-aggregation-properties-sum.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Aggregation/properties/sum")

#### sum Type

`object` ([Details](meter_provider-defs-aggregation-properties-sum.md))

## Definitions group DefaultAggregation

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/DefaultAggregation"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group DropAggregation

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/DropAggregation"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ExplicitBucketHistogramAggregation

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation"}
```

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                           |
| :---------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [boundaries](#boundaries)           | `array`   | Optional | cannot be null | [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation-properties-boundaries.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation/properties/boundaries")         |
| [record\_min\_max](#record_min_max) | `boolean` | Optional | can be null    | [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation-properties-record_min_max.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation/properties/record_min_max") |

### boundaries



`boundaries`

* is optional

* Type: `number[]`

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation-properties-boundaries.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation/properties/boundaries")

#### boundaries Type

`number[]`

### record\_min\_max



`record_min_max`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-explicitbuckethistogramaggregation-properties-record_min_max.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExplicitBucketHistogramAggregation/properties/record_min_max")

#### record\_min\_max Type

`boolean`

## Definitions group Base2ExponentialBucketHistogramAggregation

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Base2ExponentialBucketHistogramAggregation"}
```

| Property                              | Type      | Required | Nullable    | Defined by                                                                                                                                                                                                                                           |
| :------------------------------------ | :-------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [max\_scale](#max_scale)              | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-base2exponentialbuckethistogramaggregation-properties-max_scale.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Base2ExponentialBucketHistogramAggregation/properties/max_scale")           |
| [max\_size](#max_size)                | `integer` | Optional | can be null | [Untitled schema](meter_provider-defs-base2exponentialbuckethistogramaggregation-properties-max_size.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Base2ExponentialBucketHistogramAggregation/properties/max_size")             |
| [record\_min\_max](#record_min_max-1) | `boolean` | Optional | can be null | [Untitled schema](meter_provider-defs-base2exponentialbuckethistogramaggregation-properties-record_min_max.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Base2ExponentialBucketHistogramAggregation/properties/record_min_max") |

### max\_scale



`max_scale`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-base2exponentialbuckethistogramaggregation-properties-max_scale.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Base2ExponentialBucketHistogramAggregation/properties/max_scale")

#### max\_scale Type

`integer`

### max\_size



`max_size`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](meter_provider-defs-base2exponentialbuckethistogramaggregation-properties-max_size.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Base2ExponentialBucketHistogramAggregation/properties/max_size")

#### max\_size Type

`integer`

### record\_min\_max



`record_min_max`

* is optional

* Type: `boolean`

* can be null

* defined in: [Untitled schema](meter_provider-defs-base2exponentialbuckethistogramaggregation-properties-record_min_max.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/Base2ExponentialBucketHistogramAggregation/properties/record_min_max")

#### record\_min\_max Type

`boolean`

## Definitions group LastValueAggregation

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/LastValueAggregation"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group SumAggregation

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/SumAggregation"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ExperimentalMeterConfigurator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator"}
```

| Property                           | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                 |
| :--------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [default\_config](#default_config) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-experimentalmeterconfigurator-properties-default_config.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator/properties/default_config") |
| [meters](#meters)                  | `array`  | Optional | cannot be null | [Untitled schema](meter_provider-defs-experimentalmeterconfigurator-properties-meters.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator/properties/meters")                 |

### default\_config



`default_config`

* is optional

* Type: `object` ([Details](meter_provider-defs-experimentalmeterconfigurator-properties-default_config.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-experimentalmeterconfigurator-properties-default_config.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator/properties/default_config")

#### default\_config Type

`object` ([Details](meter_provider-defs-experimentalmeterconfigurator-properties-default_config.md))

### meters



`meters`

* is optional

* Type: `object[]` ([Details](meter_provider-defs-experimentalmeterconfigurator-properties-meters-items.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-experimentalmeterconfigurator-properties-meters.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfigurator/properties/meters")

#### meters Type

`object[]` ([Details](meter_provider-defs-experimentalmeterconfigurator-properties-meters-items.md))

## Definitions group ExperimentalMeterMatcherAndConfig

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterMatcherAndConfig"}
```

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :---------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1)   | `string` | Optional | cannot be null | [Untitled schema](meter_provider-defs-experimentalmetermatcherandconfig-properties-name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterMatcherAndConfig/properties/name")     |
| [config](#config) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-experimentalmetermatcherandconfig-properties-config.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterMatcherAndConfig/properties/config") |

### name



`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-experimentalmetermatcherandconfig-properties-name.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterMatcherAndConfig/properties/name")

#### name Type

`string`

### config



`config`

* is optional

* Type: `object` ([Details](meter_provider-defs-experimentalmetermatcherandconfig-properties-config.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-experimentalmetermatcherandconfig-properties-config.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterMatcherAndConfig/properties/config")

#### config Type

`object` ([Details](meter_provider-defs-experimentalmetermatcherandconfig-properties-config.md))

## Definitions group ExperimentalMeterConfig

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfig"}
```

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                         |
| :-------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [disabled](#disabled) | `boolean` | Optional | cannot be null | [Untitled schema](meter_provider-defs-experimentalmeterconfig-properties-disabled.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfig/properties/disabled") |

### disabled



`disabled`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-experimentalmeterconfig-properties-disabled.md "https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/ExperimentalMeterConfig/properties/disabled")

#### disabled Type

`boolean`
