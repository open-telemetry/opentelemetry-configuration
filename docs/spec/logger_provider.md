# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/logger_provider.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [logger\_provider.json](../schema/logger_provider.json "open original schema") |

## Untitled object in undefined Type

`object` ([Details](logger_provider.md))

# Untitled object in undefined Properties

| Property                                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------------------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [processors](#processors)                                           | `array`  | Required | cannot be null | [Untitled schema](logger_provider-properties-processors.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/processors")                                    |
| [limits](#limits)                                                   | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-logrecordlimits.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/limits")                                         |
| [logger\_configurator/development](#logger_configuratordevelopment) | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-experimentalloggerconfigurator.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/logger_configurator/development") |

## processors



`processors`

* is required

* Type: `object[]` ([Details](logger_provider-defs-logrecordprocessor.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-properties-processors.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/processors")

### processors Type

`object[]` ([Details](logger_provider-defs-logrecordprocessor.md))

### processors Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## limits



`limits`

* is optional

* Type: `object` ([Details](logger_provider-defs-logrecordlimits.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-logrecordlimits.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/limits")

### limits Type

`object` ([Details](logger_provider-defs-logrecordlimits.md))

## logger\_configurator/development



`logger_configurator/development`

* is optional

* Type: `object` ([Details](logger_provider-defs-experimentalloggerconfigurator.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-experimentalloggerconfigurator.md "https://opentelemetry.io/otelconfig/logger_provider.json#/properties/logger_configurator/development")

### development Type

`object` ([Details](logger_provider-defs-experimentalloggerconfigurator.md))

# Untitled object in undefined Definitions

## Definitions group SimpleLogRecordProcessor

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/SimpleLogRecordProcessor"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                  |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [exporter](#exporter) | `object` | Required | cannot be null | [Untitled schema](logger_provider-defs-logrecordexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/SimpleLogRecordProcessor/properties/exporter") |

### exporter



`exporter`

* is required

* Type: `object` ([Details](logger_provider-defs-logrecordexporter.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-logrecordexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/SimpleLogRecordProcessor/properties/exporter")

#### exporter Type

`object` ([Details](logger_provider-defs-logrecordexporter.md))

#### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## Definitions group BatchLogRecordProcessor

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor"}
```

| Property                                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                     |
| :------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [schedule\_delay](#schedule_delay)                 | `integer` | Optional | can be null    | [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-schedule_delay.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/schedule_delay")               |
| [export\_timeout](#export_timeout)                 | `integer` | Optional | can be null    | [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-export_timeout.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/export_timeout")               |
| [max\_queue\_size](#max_queue_size)                | `integer` | Optional | can be null    | [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-max_queue_size.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/max_queue_size")               |
| [max\_export\_batch\_size](#max_export_batch_size) | `integer` | Optional | can be null    | [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-max_export_batch_size.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/max_export_batch_size") |
| [exporter](#exporter-1)                            | `object`  | Required | cannot be null | [Untitled schema](logger_provider-defs-logrecordexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/exporter")                                                     |

### schedule\_delay



`schedule_delay`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-schedule_delay.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/schedule_delay")

#### schedule\_delay Type

`integer`

#### schedule\_delay Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### export\_timeout



`export_timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-export_timeout.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/export_timeout")

#### export\_timeout Type

`integer`

#### export\_timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### max\_queue\_size



`max_queue_size`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-max_queue_size.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/max_queue_size")

#### max\_queue\_size Type

`integer`

#### max\_queue\_size Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### max\_export\_batch\_size



`max_export_batch_size`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor-properties-max_export_batch_size.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/max_export_batch_size")

#### max\_export\_batch\_size Type

`integer`

#### max\_export\_batch\_size Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### exporter



`exporter`

* is required

* Type: `object` ([Details](logger_provider-defs-logrecordexporter.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-logrecordexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/BatchLogRecordProcessor/properties/exporter")

#### exporter Type

`object` ([Details](logger_provider-defs-logrecordexporter.md))

#### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## Definitions group LogRecordExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter"}
```

| Property                                        | Type     | Required | Nullable    | Defined by                                                                                                                                                                               |
| :---------------------------------------------- | :------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [otlp\_http](#otlp_http)                        | `object` | Optional | can be null | [Untitled schema](common-defs-otlphttpexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_http")                              |
| [otlp\_grpc](#otlp_grpc)                        | `object` | Optional | can be null | [Untitled schema](common-defs-otlpgrpcexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_grpc")                              |
| [otlp\_file/development](#otlp_filedevelopment) | `object` | Optional | can be null | [Untitled schema](common-defs-experimentalotlpfileexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_file/development")      |
| [console](#console)                             | `object` | Optional | can be null | [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/console")                                 |
| `.*`                                            | `object` | Optional | can be null | [Untitled schema](logger_provider-defs-logrecordexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/patternProperties/.*") |
| Additional Properties                           | Any      | Optional | can be null |                                                                                                                                                                                          |

### otlp\_http



`otlp_http`

* is optional

* Type: `object` ([Details](common-defs-otlphttpexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_http")

#### otlp\_http Type

`object` ([Details](common-defs-otlphttpexporter.md))

### otlp\_grpc



`otlp_grpc`

* is optional

* Type: `object` ([Details](common-defs-otlpgrpcexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_grpc")

#### otlp\_grpc Type

`object` ([Details](common-defs-otlpgrpcexporter.md))

### otlp\_file/development



`otlp_file/development`

* is optional

* Type: `object` ([Details](common-defs-experimentalotlpfileexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-experimentalotlpfileexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/otlp_file/development")

#### development Type

`object` ([Details](common-defs-experimentalotlpfileexporter.md))

### console



`console`

* is optional

* Type: `object` ([Details](common-defs-consoleexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/properties/console")

#### console Type

`object` ([Details](common-defs-consoleexporter.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](logger_provider-defs-logrecordexporter-patternproperties-.md))

* can be null

* defined in: [Untitled schema](logger_provider-defs-logrecordexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordExporter/patternProperties/.*")

#### .\* Type

`object` ([Details](logger_provider-defs-logrecordexporter-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group LogRecordLimits

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits"}
```

| Property                                                         | Type      | Required | Nullable    | Defined by                                                                                                                                                                                                                   |
| :--------------------------------------------------------------- | :-------- | :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attribute\_value\_length\_limit](#attribute_value_length_limit) | `integer` | Optional | can be null | [Untitled schema](logger_provider-defs-logrecordlimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits/properties/attribute_value_length_limit") |
| [attribute\_count\_limit](#attribute_count_limit)                | `integer` | Optional | can be null | [Untitled schema](logger_provider-defs-logrecordlimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits/properties/attribute_count_limit")               |

### attribute\_value\_length\_limit



`attribute_value_length_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-logrecordlimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits/properties/attribute_value_length_limit")

#### attribute\_value\_length\_limit Type

`integer`

#### attribute\_value\_length\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### attribute\_count\_limit



`attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](logger_provider-defs-logrecordlimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordLimits/properties/attribute_count_limit")

#### attribute\_count\_limit Type

`integer`

#### attribute\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## Definitions group LogRecordProcessor

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                 |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [batch](#batch)       | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-batchlogrecordprocessor.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/properties/batch")                   |
| [simple](#simple)     | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-simplelogrecordprocessor.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/properties/simple")                 |
| `.*`                  | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-logrecordprocessor-patternproperties-.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/patternProperties/.*") |
| Additional Properties | Any      | Optional | can be null    |                                                                                                                                                                                            |

### batch



`batch`

* is optional

* Type: `object` ([Details](logger_provider-defs-batchlogrecordprocessor.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-batchlogrecordprocessor.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/properties/batch")

#### batch Type

`object` ([Details](logger_provider-defs-batchlogrecordprocessor.md))

### simple



`simple`

* is optional

* Type: `object` ([Details](logger_provider-defs-simplelogrecordprocessor.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-simplelogrecordprocessor.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/properties/simple")

#### simple Type

`object` ([Details](logger_provider-defs-simplelogrecordprocessor.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](logger_provider-defs-logrecordprocessor-patternproperties-.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-logrecordprocessor-patternproperties-.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/LogRecordProcessor/patternProperties/.*")

#### .\* Type

`object` ([Details](logger_provider-defs-logrecordprocessor-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group ExperimentalLoggerConfigurator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator"}
```

| Property                           | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                     |
| :--------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [default\_config](#default_config) | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-experimentalloggerconfigurator-properties-default_config.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator/properties/default_config") |
| [loggers](#loggers)                | `array`  | Optional | cannot be null | [Untitled schema](logger_provider-defs-experimentalloggerconfigurator-properties-loggers.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator/properties/loggers")               |

### default\_config



`default_config`

* is optional

* Type: `object` ([Details](logger_provider-defs-experimentalloggerconfigurator-properties-default_config.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-experimentalloggerconfigurator-properties-default_config.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator/properties/default_config")

#### default\_config Type

`object` ([Details](logger_provider-defs-experimentalloggerconfigurator-properties-default_config.md))

### loggers



`loggers`

* is optional

* Type: `object[]` ([Details](logger_provider-defs-experimentalloggerconfigurator-properties-loggers-items.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-experimentalloggerconfigurator-properties-loggers.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfigurator/properties/loggers")

#### loggers Type

`object[]` ([Details](logger_provider-defs-experimentalloggerconfigurator-properties-loggers-items.md))

## Definitions group ExperimentalLoggerMatcherAndConfig

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerMatcherAndConfig"}
```

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                             |
| :---------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)     | `string` | Optional | cannot be null | [Untitled schema](logger_provider-defs-experimentalloggermatcherandconfig-properties-name.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerMatcherAndConfig/properties/name")     |
| [config](#config) | `object` | Optional | cannot be null | [Untitled schema](logger_provider-defs-experimentalloggermatcherandconfig-properties-config.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerMatcherAndConfig/properties/config") |

### name



`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-experimentalloggermatcherandconfig-properties-name.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerMatcherAndConfig/properties/name")

#### name Type

`string`

### config



`config`

* is optional

* Type: `object` ([Details](logger_provider-defs-experimentalloggermatcherandconfig-properties-config.md))

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-experimentalloggermatcherandconfig-properties-config.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerMatcherAndConfig/properties/config")

#### config Type

`object` ([Details](logger_provider-defs-experimentalloggermatcherandconfig-properties-config.md))

## Definitions group ExperimentalLoggerConfig

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfig"}
```

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :-------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [disabled](#disabled) | `boolean` | Optional | cannot be null | [Untitled schema](logger_provider-defs-experimentalloggerconfig-properties-disabled.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfig/properties/disabled") |

### disabled



`disabled`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Untitled schema](logger_provider-defs-experimentalloggerconfig-properties-disabled.md "https://opentelemetry.io/otelconfig/logger_provider.json#/$defs/ExperimentalLoggerConfig/properties/disabled")

#### disabled Type

`boolean`
