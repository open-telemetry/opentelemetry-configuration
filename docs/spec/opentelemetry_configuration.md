# OpenTelemetryConfiguration Schema

```txt
https://opentelemetry.io/otelconfig/opentelemetry_configuration.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [opentelemetry\_configuration.json](../schema/opentelemetry_configuration.json "open original schema") |

## OpenTelemetryConfiguration Type

`object` ([OpenTelemetryConfiguration](opentelemetry_configuration.md))

# OpenTelemetryConfiguration Properties

| Property                                                   | Type      | Required | Nullable       | Defined by                                                                                                                                                                            |
| :--------------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [file\_format](#file_format)                               | `string`  | Required | cannot be null | [OpenTelemetryConfiguration](opentelemetry_configuration-properties-file_format.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/properties/file_format")    |
| [disabled](#disabled)                                      | `boolean` | Optional | can be null    | [OpenTelemetryConfiguration](opentelemetry_configuration-properties-disabled.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/properties/disabled")          |
| [log\_level](#log_level)                                   | `string`  | Optional | can be null    | [OpenTelemetryConfiguration](opentelemetry_configuration-properties-log_level.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/properties/log_level")        |
| [attribute\_limits](#attribute_limits)                     | `object`  | Optional | cannot be null | [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/properties/attribute_limits") |
| [logger\_provider](#logger_provider)                       | `object`  | Optional | cannot be null | [OpenTelemetryConfiguration](logger_provider.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/logger_provider")                                               |
| [meter\_provider](#meter_provider)                         | `object`  | Optional | cannot be null | [OpenTelemetryConfiguration](meter_provider.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/meter_provider")                                                  |
| [propagator](#propagator)                                  | `object`  | Optional | cannot be null | [OpenTelemetryConfiguration](propagator.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/propagator")                                                              |
| [tracer\_provider](#tracer_provider)                       | `object`  | Optional | cannot be null | [OpenTelemetryConfiguration](tracer_provider.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/tracer_provider")                                               |
| [resource](#resource)                                      | `object`  | Optional | cannot be null | [OpenTelemetryConfiguration](resource.md "https://opentelemetry.io/otelconfig/resource.json#/properties/resource")                                                                    |
| [instrumentation/development](#instrumentationdevelopment) | `object`  | Optional | cannot be null | [OpenTelemetryConfiguration](instrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/instrumentation/development")                                   |
| Additional Properties                                      | Any       | Optional | can be null    |                                                                                                                                                                                       |

## file\_format



`file_format`

* is required

* Type: `string`

* cannot be null

* defined in: [OpenTelemetryConfiguration](opentelemetry_configuration-properties-file_format.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/properties/file_format")

### file\_format Type

`string`

## disabled



`disabled`

* is optional

* Type: `boolean`

* can be null

* defined in: [OpenTelemetryConfiguration](opentelemetry_configuration-properties-disabled.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/properties/disabled")

### disabled Type

`boolean`

## log\_level



`log_level`

* is optional

* Type: `string`

* can be null

* defined in: [OpenTelemetryConfiguration](opentelemetry_configuration-properties-log_level.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/properties/log_level")

### log\_level Type

`string`

## attribute\_limits



`attribute_limits`

* is optional

* Type: `object` ([Details](opentelemetry_configuration-defs-attributelimits.md))

* cannot be null

* defined in: [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/properties/attribute_limits")

### attribute\_limits Type

`object` ([Details](opentelemetry_configuration-defs-attributelimits.md))

## logger\_provider



`logger_provider`

* is optional

* Type: `object` ([Details](logger_provider.md))

* cannot be null

* defined in: [OpenTelemetryConfiguration](logger_provider.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/logger_provider")

### logger\_provider Type

`object` ([Details](logger_provider.md))

## meter\_provider



`meter_provider`

* is optional

* Type: `object` ([Details](meter_provider.md))

* cannot be null

* defined in: [OpenTelemetryConfiguration](meter_provider.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/meter_provider")

### meter\_provider Type

`object` ([Details](meter_provider.md))

## propagator



`propagator`

* is optional

* Type: `object` ([Details](propagator.md))

* cannot be null

* defined in: [OpenTelemetryConfiguration](propagator.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/propagator")

### propagator Type

`object` ([Details](propagator.md))

## tracer\_provider



`tracer_provider`

* is optional

* Type: `object` ([Details](tracer_provider.md))

* cannot be null

* defined in: [OpenTelemetryConfiguration](tracer_provider.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/tracer_provider")

### tracer\_provider Type

`object` ([Details](tracer_provider.md))

## resource



`resource`

* is optional

* Type: `object` ([Declaritive Config - Resource](resource.md))

* cannot be null

* defined in: [OpenTelemetryConfiguration](resource.md "https://opentelemetry.io/otelconfig/resource.json#/properties/resource")

### resource Type

`object` ([Declaritive Config - Resource](resource.md))

## instrumentation/development



`instrumentation/development`

* is optional

* Type: `object` ([Details](instrumentation.md))

* cannot be null

* defined in: [OpenTelemetryConfiguration](instrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/instrumentation/development")

### development Type

`object` ([Details](instrumentation.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema

# OpenTelemetryConfiguration Definitions

## Definitions group AttributeLimits

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits"}
```

| Property                                                         | Type      | Required | Nullable    | Defined by                                                                                                                                                                                                                                                      |
| :--------------------------------------------------------------- | :-------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attribute\_value\_length\_limit](#attribute_value_length_limit) | `integer` | Optional | can be null | [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits/properties/attribute_value_length_limit") |
| [attribute\_count\_limit](#attribute_count_limit)                | `integer` | Optional | can be null | [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits/properties/attribute_count_limit")               |
| Additional Properties                                            | Any       | Optional | can be null |                                                                                                                                                                                                                                                                 |

### attribute\_value\_length\_limit



`attribute_value_length_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits/properties/attribute_value_length_limit")

#### attribute\_value\_length\_limit Type

`integer`

### attribute\_count\_limit



`attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [OpenTelemetryConfiguration](opentelemetry_configuration-defs-attributelimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/opentelemetry_configuration.json#/$defs/AttributeLimits/properties/attribute_count_limit")

#### attribute\_count\_limit Type

`integer`

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group LoggerProvider

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LoggerProvider"}
```

| Property                                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------------------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [processors](#processors)                                           | `array`  | Required | cannot be null | [Untitled schema](logger_provider-properties-processors.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/processors")                                    |
| [limits](#limits)                                                   | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-logrecordlimits.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/limits")                                         |
| [logger\_configurator/development](#logger_configuratordevelopment) | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-experimentalloggerconfigurator.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/logger_configurator/development") |

### processors



`processors`

* is required

* Type: `object[]` ([Details](logger_provider-defs-logrecordprocessor.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-properties-processors.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/processors")

#### processors Type

`object[]` ([Details](logger_provider-defs-logrecordprocessor.md))

#### processors Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

### limits



`limits`

* is optional

* Type: `object` ([Details](logger_provider-defs-logrecordlimits.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-logrecordlimits.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/limits")

#### limits Type

`object` ([Details](logger_provider-defs-logrecordlimits.md))

### logger\_configurator/development



`logger_configurator/development`

* is optional

* Type: `object` ([Details](logger_provider-defs-experimentalloggerconfigurator.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-experimentalloggerconfigurator.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/logger_configurator/development")

#### development Type

`object` ([Details](logger_provider-defs-experimentalloggerconfigurator.md))

## Definitions group MeterProvider

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/meter_provider.json#/$defs/MeterProvider"}
```

| Property                                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                   |
| :---------------------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [readers](#readers)                                               | `array`  | Required | cannot be null | [Untitled schema](meter_provider-properties-readers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/readers")                                        |
| [views](#views)                                                   | `array`  | Optional | cannot be null | [Untitled schema](meter_provider-properties-views.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/views")                                            |
| [exemplar\_filter](#exemplar_filter)                              | `string` | Optional | can be null    | [Untitled schema](meter_provider-defs-exemplarfilter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/exemplar_filter")                               |
| [meter\_configurator/development](#meter_configuratordevelopment) | `object` | Optional | cannot be null | [Untitled schema](meter_provider-defs-experimentalmeterconfigurator.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/meter_configurator/development") |

### readers



`readers`

* is required

* Type: `object[]` ([Details](meter_provider-defs-metricreader.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-properties-readers.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/readers")

#### readers Type

`object[]` ([Details](meter_provider-defs-metricreader.md))

#### readers Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

### views



`views`

* is optional

* Type: `object[]` ([Details](meter_provider-defs-view.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-properties-views.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/views")

#### views Type

`object[]` ([Details](meter_provider-defs-view.md))

### exemplar\_filter



`exemplar_filter`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](meter_provider-defs-exemplarfilter.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/exemplar_filter")

#### exemplar\_filter Type

`string`

#### exemplar\_filter Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"always_on"`   |             |
| `"always_off"`  |             |
| `"trace_based"` |             |

### meter\_configurator/development



`meter_configurator/development`

* is optional

* Type: `object` ([Details](meter_provider-defs-experimentalmeterconfigurator.md))

* cannot be null

* defined in: [Untitled schema](meter_provider-defs-experimentalmeterconfigurator.md "https://opentelemetry.io/otelconfig/meter_provider.json#/properties/meter_configurator/development")

#### development Type

`object` ([Details](meter_provider-defs-experimentalmeterconfigurator.md))

## Definitions group TracerProvider

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/TracerProvider"}
```

| Property                                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------------------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [processors](#processors-1)                                         | `array`  | Required | cannot be null | [Untitled schema](tracer_provider-properties-processors.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/processors")                                    |
| [limits](#limits-1)                                                 | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-spanlimits.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/limits")                                              |
| [sampler](#sampler)                                                 | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/sampler")                                                |
| [tracer\_configurator/development](#tracer_configuratordevelopment) | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-experimentaltracerconfigurator.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/tracer_configurator/development") |

### processors



`processors`

* is required

* Type: `object[]` ([Details](tracer_provider-defs-spanprocessor.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-properties-processors.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/processors")

#### processors Type

`object[]` ([Details](tracer_provider-defs-spanprocessor.md))

#### processors Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

### limits



`limits`

* is optional

* Type: `object` ([Details](tracer_provider-defs-spanlimits.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/limits")

#### limits Type

`object` ([Details](tracer_provider-defs-spanlimits.md))

### sampler



`sampler`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/sampler")

#### sampler Type

`object` ([Details](tracer_provider-defs-sampler.md))

#### sampler Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

### tracer\_configurator/development



`tracer_configurator/development`

* is optional

* Type: `object` ([Details](tracer_provider-defs-experimentaltracerconfigurator.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-experimentaltracerconfigurator.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/tracer_configurator/development")

#### development Type

`object` ([Details](tracer_provider-defs-experimentaltracerconfigurator.md))

## Definitions group Propagator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/propagator.json#/$defs/Propagator"}
```

| Property                           | Type     | Required | Nullable       | Defined by                                                                                                                                  |
| :--------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [composite](#composite)            | `array`  | Optional | cannot be null | [Untitled schema](propagator-properties-composite.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/composite")           |
| [composite\_list](#composite_list) | `string` | Optional | can be null    | [Untitled schema](propagator-properties-composite_list.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/composite_list") |

### composite



`composite`

* is optional

* Type: `object[]` ([Details](propagator-defs-textmappropagator.md))

* cannot be null

* defined in: [Untitled schema](propagator-properties-composite.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/composite")

#### composite Type

`object[]` ([Details](propagator-defs-textmappropagator.md))

### composite\_list



`composite_list`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](propagator-properties-composite_list.md "https://opentelemetry.io/otelconfig/propagator.json#/properties/composite_list")

#### composite\_list Type

`string`

## Definitions group Resource

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/resource.json#/$defs/Resource"}
```

| Property                                       | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :--------------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attributes](#attributes)                      | `array`  | Optional | cannot be null | [Declaritive Config - Resource](resource-properties-attributes.md "https://opentelemetry.io/otelconfig/resource.json#/properties/attributes")                         |
| [detection/development](#detectiondevelopment) | `object` | Optional | cannot be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetection.md "https://opentelemetry.io/otelconfig/resource.json#/properties/detection/development") |
| [schema\_url](#schema_url)                     | `string` | Optional | can be null    | [Declaritive Config - Resource](resource-properties-schema_url.md "https://opentelemetry.io/otelconfig/resource.json#/properties/schema_url")                         |
| [attributes\_list](#attributes_list)           | `string` | Optional | can be null    | [Declaritive Config - Resource](resource-properties-attributes_list.md "https://opentelemetry.io/otelconfig/resource.json#/properties/attributes_list")               |

### attributes



`attributes`

* is optional

* Type: `object[]` ([Details](resource-defs-attributenamevalue.md))

* cannot be null

* defined in: [Declaritive Config - Resource](resource-properties-attributes.md "https://opentelemetry.io/otelconfig/resource.json#/properties/attributes")

#### attributes Type

`object[]` ([Details](resource-defs-attributenamevalue.md))

### detection/development



`detection/development`

* is optional

* Type: `object` ([Details](resource-defs-experimentalresourcedetection.md))

* cannot be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetection.md "https://opentelemetry.io/otelconfig/resource.json#/properties/detection/development")

#### development Type

`object` ([Details](resource-defs-experimentalresourcedetection.md))

### schema\_url



`schema_url`

* is optional

* Type: `string`

* can be null

* defined in: [Declaritive Config - Resource](resource-properties-schema_url.md "https://opentelemetry.io/otelconfig/resource.json#/properties/schema_url")

#### schema\_url Type

`string`

### attributes\_list



`attributes_list`

* is optional

* Type: `string`

* can be null

* defined in: [Declaritive Config - Resource](resource-properties-attributes_list.md "https://opentelemetry.io/otelconfig/resource.json#/properties/attributes_list")

#### attributes\_list Type

`string`

## Definitions group ExperimentalInstrumentation

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/instrumentation.json#/$defs/ExperimentalInstrumentation"}
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                              |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [general](#general) | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentalgeneralinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/general")            |
| [cpp](#cpp)         | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/cpp")       |
| [dotnet](#dotnet)   | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/dotnet")    |
| [erlang](#erlang)   | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/erlang")    |
| [go](#go)           | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/go")        |
| [java](#java)       | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/java")      |
| [js](#js)           | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/js")        |
| [php](#php)         | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/php")       |
| [python](#python)   | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/python")    |
| [ruby](#ruby)       | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/ruby")      |
| [rust](#rust)       | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/rust")      |
| [swift](#swift)     | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/swift")     |
| `.*`                | `object` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/patternProperties/.*") |

### general



`general`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentalgeneralinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentalgeneralinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/general")

#### general Type

`object` ([Details](instrumentation-defs-experimentalgeneralinstrumentation.md))

### cpp



`cpp`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/cpp")

#### cpp Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### dotnet



`dotnet`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/dotnet")

#### dotnet Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### erlang



`erlang`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/erlang")

#### erlang Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### go



`go`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/go")

#### go Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### java



`java`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/java")

#### java Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### js



`js`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/js")

#### js Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### php



`php`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/php")

#### php Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### python



`python`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/python")

#### python Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### ruby



`ruby`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/ruby")

#### ruby Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### rust



`rust`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/rust")

#### rust Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### swift



`swift`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/properties/swift")

#### swift Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentallanguagespecificinstrumentation.md "https://opentelemetry.io/otelconfig/instrumentation.json#/patternProperties/.*")

#### .\* Type

`object` ([Details](instrumentation-defs-experimentallanguagespecificinstrumentation.md))
