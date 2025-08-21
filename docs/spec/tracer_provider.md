# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/tracer_provider.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [tracer\_provider.json](../schema/tracer_provider.json "open original schema") |

## Untitled object in undefined Type

`object` ([Details](tracer_provider.md))

# Untitled object in undefined Properties

| Property                                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------------------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [processors](#processors)                                           | `array`  | Required | cannot be null | [Untitled schema](tracer_provider-properties-processors.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/processors")                                    |
| [limits](#limits)                                                   | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-spanlimits.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/limits")                                              |
| [sampler](#sampler)                                                 | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/sampler")                                                |
| [tracer\_configurator/development](#tracer_configuratordevelopment) | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-experimentaltracerconfigurator.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/tracer_configurator/development") |

## processors



`processors`

* is required

* Type: `object[]` ([Details](tracer_provider-defs-spanprocessor.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-properties-processors.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/processors")

### processors Type

`object[]` ([Details](tracer_provider-defs-spanprocessor.md))

### processors Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## limits



`limits`

* is optional

* Type: `object` ([Details](tracer_provider-defs-spanlimits.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/limits")

### limits Type

`object` ([Details](tracer_provider-defs-spanlimits.md))

## sampler



`sampler`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/sampler")

### sampler Type

`object` ([Details](tracer_provider-defs-sampler.md))

### sampler Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## tracer\_configurator/development



`tracer_configurator/development`

* is optional

* Type: `object` ([Details](tracer_provider-defs-experimentaltracerconfigurator.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-experimentaltracerconfigurator.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/properties/tracer_configurator/development")

### development Type

`object` ([Details](tracer_provider-defs-experimentaltracerconfigurator.md))

# Untitled object in undefined Definitions

## Definitions group BatchSpanProcessor

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor"}
```

| Property                                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                           |
| :------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [schedule\_delay](#schedule_delay)                 | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-schedule_delay.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/schedule_delay")               |
| [export\_timeout](#export_timeout)                 | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-export_timeout.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/export_timeout")               |
| [max\_queue\_size](#max_queue_size)                | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-max_queue_size.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/max_queue_size")               |
| [max\_export\_batch\_size](#max_export_batch_size) | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-max_export_batch_size.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/max_export_batch_size") |
| [exporter](#exporter)                              | `object`  | Required | cannot be null | [Untitled schema](tracer_provider-defs-spanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/exporter")                                                     |

### schedule\_delay



`schedule_delay`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-schedule_delay.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/schedule_delay")

#### schedule\_delay Type

`integer`

#### schedule\_delay Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### export\_timeout



`export_timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-export_timeout.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/export_timeout")

#### export\_timeout Type

`integer`

#### export\_timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### max\_queue\_size



`max_queue_size`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-max_queue_size.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/max_queue_size")

#### max\_queue\_size Type

`integer`

#### max\_queue\_size Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### max\_export\_batch\_size



`max_export_batch_size`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor-properties-max_export_batch_size.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/max_export_batch_size")

#### max\_export\_batch\_size Type

`integer`

#### max\_export\_batch\_size Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`

### exporter



`exporter`

* is required

* Type: `object` ([Details](tracer_provider-defs-spanexporter.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-spanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/BatchSpanProcessor/properties/exporter")

#### exporter Type

`object` ([Details](tracer_provider-defs-spanexporter.md))

#### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## Definitions group Sampler

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler"}
```

| Property                                         | Type     | Required | Nullable    | Defined by                                                                                                                                                                    |
| :----------------------------------------------- | :------- | :------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [always\_off](#always_off)                       | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-alwaysoffsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/always_off")                   |
| [always\_on](#always_on)                         | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-alwaysonsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/always_on")                     |
| [jaeger\_remote](#jaeger_remote)                 | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-jaegerremotesampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/jaeger_remote")             |
| [parent\_based](#parent_based)                   | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-parentbasedsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/parent_based")               |
| [trace\_id\_ratio\_based](#trace_id_ratio_based) | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-traceidratiobasedsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/trace_id_ratio_based") |
| `.*`                                             | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-sampler-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/patternProperties/.*")          |
| Additional Properties                            | Any      | Optional | can be null |                                                                                                                                                                               |

### always\_off



`always_off`

* is optional

* Type: `object` ([Details](tracer_provider-defs-alwaysoffsampler.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-alwaysoffsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/always_off")

#### always\_off Type

`object` ([Details](tracer_provider-defs-alwaysoffsampler.md))

### always\_on



`always_on`

* is optional

* Type: `object` ([Details](tracer_provider-defs-alwaysonsampler.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-alwaysonsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/always_on")

#### always\_on Type

`object` ([Details](tracer_provider-defs-alwaysonsampler.md))

### jaeger\_remote



`jaeger_remote`

* is optional

* Type: `object` ([Details](tracer_provider-defs-jaegerremotesampler.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-jaegerremotesampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/jaeger_remote")

#### jaeger\_remote Type

`object` ([Details](tracer_provider-defs-jaegerremotesampler.md))

### parent\_based



`parent_based`

* is optional

* Type: `object` ([Details](tracer_provider-defs-parentbasedsampler.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-parentbasedsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/parent_based")

#### parent\_based Type

`object` ([Details](tracer_provider-defs-parentbasedsampler.md))

### trace\_id\_ratio\_based



`trace_id_ratio_based`

* is optional

* Type: `object` ([Details](tracer_provider-defs-traceidratiobasedsampler.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-traceidratiobasedsampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/properties/trace_id_ratio_based")

#### trace\_id\_ratio\_based Type

`object` ([Details](tracer_provider-defs-traceidratiobasedsampler.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler-patternproperties-.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-sampler-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/Sampler/patternProperties/.*")

#### .\* Type

`object` ([Details](tracer_provider-defs-sampler-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group AlwaysOffSampler

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/AlwaysOffSampler"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group AlwaysOnSampler

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/AlwaysOnSampler"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group JaegerRemoteSampler

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler"}
```

| Property                             | Type      | Required | Nullable       | Defined by                                                                                                                                                                                   |
| :----------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint)                | `string`  | Optional | can be null    | [Untitled schema](tracer_provider-defs-jaegerremotesampler-properties-endpoint.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/endpoint") |
| [interval](#interval)                | `integer` | Optional | can be null    | [Untitled schema](tracer_provider-defs-jaegerremotesampler-properties-interval.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/interval") |
| [initial\_sampler](#initial_sampler) | `object`  | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/initial_sampler")                          |

### endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-jaegerremotesampler-properties-endpoint.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/endpoint")

#### endpoint Type

`string`

### interval



`interval`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-jaegerremotesampler-properties-interval.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/interval")

#### interval Type

`integer`

#### interval Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### initial\_sampler



`initial_sampler`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/JaegerRemoteSampler/properties/initial_sampler")

#### initial\_sampler Type

`object` ([Details](tracer_provider-defs-sampler.md))

#### initial\_sampler Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## Definitions group ParentBasedSampler

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler"}
```

| Property                                                   | Type     | Required | Nullable       | Defined by                                                                                                                                                                   |
| :--------------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [root](#root)                                              | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/root")                      |
| [remote\_parent\_sampled](#remote_parent_sampled)          | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/remote_parent_sampled")     |
| [remote\_parent\_not\_sampled](#remote_parent_not_sampled) | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/remote_parent_not_sampled") |
| [local\_parent\_sampled](#local_parent_sampled)            | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/local_parent_sampled")      |
| [local\_parent\_not\_sampled](#local_parent_not_sampled)   | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/local_parent_not_sampled")  |

### root



`root`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/root")

#### root Type

`object` ([Details](tracer_provider-defs-sampler.md))

#### root Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

### remote\_parent\_sampled



`remote_parent_sampled`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/remote_parent_sampled")

#### remote\_parent\_sampled Type

`object` ([Details](tracer_provider-defs-sampler.md))

#### remote\_parent\_sampled Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

### remote\_parent\_not\_sampled



`remote_parent_not_sampled`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/remote_parent_not_sampled")

#### remote\_parent\_not\_sampled Type

`object` ([Details](tracer_provider-defs-sampler.md))

#### remote\_parent\_not\_sampled Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

### local\_parent\_sampled



`local_parent_sampled`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/local_parent_sampled")

#### local\_parent\_sampled Type

`object` ([Details](tracer_provider-defs-sampler.md))

#### local\_parent\_sampled Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

### local\_parent\_not\_sampled



`local_parent_not_sampled`

* is optional

* Type: `object` ([Details](tracer_provider-defs-sampler.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-sampler.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ParentBasedSampler/properties/local_parent_not_sampled")

#### local\_parent\_not\_sampled Type

`object` ([Details](tracer_provider-defs-sampler.md))

#### local\_parent\_not\_sampled Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## Definitions group TraceIdRatioBasedSampler

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/TraceIdRatioBasedSampler"}
```

| Property        | Type     | Required | Nullable    | Defined by                                                                                                                                                                                       |
| :-------------- | :------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ratio](#ratio) | `number` | Optional | can be null | [Untitled schema](tracer_provider-defs-traceidratiobasedsampler-properties-ratio.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/TraceIdRatioBasedSampler/properties/ratio") |

### ratio



`ratio`

* is optional

* Type: `number`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-traceidratiobasedsampler-properties-ratio.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/TraceIdRatioBasedSampler/properties/ratio")

#### ratio Type

`number`

## Definitions group SimpleSpanProcessor

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SimpleSpanProcessor"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [exporter](#exporter-1) | `object` | Required | cannot be null | [Untitled schema](tracer_provider-defs-spanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SimpleSpanProcessor/properties/exporter") |

### exporter



`exporter`

* is required

* Type: `object` ([Details](tracer_provider-defs-spanexporter.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-spanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SimpleSpanProcessor/properties/exporter")

#### exporter Type

`object` ([Details](tracer_provider-defs-spanexporter.md))

#### exporter Constraints

**maximum number of properties**: the maximum number of properties for this object is: `1`

**minimum number of properties**: the minimum number of properties for this object is: `1`

## Definitions group SpanExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter"}
```

| Property                                        | Type     | Required | Nullable    | Defined by                                                                                                                                                                     |
| :---------------------------------------------- | :------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [otlp\_http](#otlp_http)                        | `object` | Optional | can be null | [Untitled schema](common-defs-otlphttpexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_http")                         |
| [otlp\_grpc](#otlp_grpc)                        | `object` | Optional | can be null | [Untitled schema](common-defs-otlpgrpcexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_grpc")                         |
| [otlp\_file/development](#otlp_filedevelopment) | `object` | Optional | can be null | [Untitled schema](common-defs-experimentalotlpfileexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_file/development") |
| [console](#console)                             | `object` | Optional | can be null | [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/console")                            |
| [zipkin](#zipkin)                               | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-zipkinspanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/zipkin")                 |
| `.*`                                            | `object` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/patternProperties/.*") |
| Additional Properties                           | Any      | Optional | can be null |                                                                                                                                                                                |

### otlp\_http



`otlp_http`

* is optional

* Type: `object` ([Details](common-defs-otlphttpexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-otlphttpexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_http")

#### otlp\_http Type

`object` ([Details](common-defs-otlphttpexporter.md))

### otlp\_grpc



`otlp_grpc`

* is optional

* Type: `object` ([Details](common-defs-otlpgrpcexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-otlpgrpcexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_grpc")

#### otlp\_grpc Type

`object` ([Details](common-defs-otlpgrpcexporter.md))

### otlp\_file/development



`otlp_file/development`

* is optional

* Type: `object` ([Details](common-defs-experimentalotlpfileexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-experimentalotlpfileexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/otlp_file/development")

#### development Type

`object` ([Details](common-defs-experimentalotlpfileexporter.md))

### console



`console`

* is optional

* Type: `object` ([Details](common-defs-consoleexporter.md))

* can be null

* defined in: [Untitled schema](common-defs-consoleexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/console")

#### console Type

`object` ([Details](common-defs-consoleexporter.md))

### zipkin



`zipkin`

* is optional

* Type: `object` ([Details](tracer_provider-defs-zipkinspanexporter.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-zipkinspanexporter.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/properties/zipkin")

#### zipkin Type

`object` ([Details](tracer_provider-defs-zipkinspanexporter.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](tracer_provider-defs-spanexporter-patternproperties-.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanexporter-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanExporter/patternProperties/.*")

#### .\* Type

`object` ([Details](tracer_provider-defs-spanexporter-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group SpanLimits

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits"}
```

| Property                                                         | Type      | Required | Nullable    | Defined by                                                                                                                                                                                                         |
| :--------------------------------------------------------------- | :-------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attribute\_value\_length\_limit](#attribute_value_length_limit) | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/attribute_value_length_limit") |
| [attribute\_count\_limit](#attribute_count_limit)                | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/attribute_count_limit")               |
| [event\_count\_limit](#event_count_limit)                        | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-event_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/event_count_limit")                       |
| [link\_count\_limit](#link_count_limit)                          | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-link_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/link_count_limit")                         |
| [event\_attribute\_count\_limit](#event_attribute_count_limit)   | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-event_attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/event_attribute_count_limit")   |
| [link\_attribute\_count\_limit](#link_attribute_count_limit)     | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-spanlimits-properties-link_attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/link_attribute_count_limit")     |

### attribute\_value\_length\_limit



`attribute_value_length_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-attribute_value_length_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/attribute_value_length_limit")

#### attribute\_value\_length\_limit Type

`integer`

#### attribute\_value\_length\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### attribute\_count\_limit



`attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/attribute_count_limit")

#### attribute\_count\_limit Type

`integer`

#### attribute\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### event\_count\_limit



`event_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-event_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/event_count_limit")

#### event\_count\_limit Type

`integer`

#### event\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### link\_count\_limit



`link_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-link_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/link_count_limit")

#### link\_count\_limit Type

`integer`

#### link\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### event\_attribute\_count\_limit



`event_attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-event_attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/event_attribute_count_limit")

#### event\_attribute\_count\_limit Type

`integer`

#### event\_attribute\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### link\_attribute\_count\_limit



`link_attribute_count_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanlimits-properties-link_attribute_count_limit.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanLimits/properties/link_attribute_count_limit")

#### link\_attribute\_count\_limit Type

`integer`

#### link\_attribute\_count\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## Definitions group SpanProcessor

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [batch](#batch)       | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-batchspanprocessor.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/properties/batch")                   |
| [simple](#simple)     | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-simplespanprocessor.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/properties/simple")                 |
| `.*`                  | `object` | Optional | can be null    | [Untitled schema](tracer_provider-defs-spanprocessor-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/patternProperties/.*") |
| Additional Properties | Any      | Optional | can be null    |                                                                                                                                                                                  |

### batch



`batch`

* is optional

* Type: `object` ([Details](tracer_provider-defs-batchspanprocessor.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-batchspanprocessor.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/properties/batch")

#### batch Type

`object` ([Details](tracer_provider-defs-batchspanprocessor.md))

### simple



`simple`

* is optional

* Type: `object` ([Details](tracer_provider-defs-simplespanprocessor.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-simplespanprocessor.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/properties/simple")

#### simple Type

`object` ([Details](tracer_provider-defs-simplespanprocessor.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](tracer_provider-defs-spanprocessor-patternproperties-.md))

* can be null

* defined in: [Untitled schema](tracer_provider-defs-spanprocessor-patternproperties-.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/SpanProcessor/patternProperties/.*")

#### .\* Type

`object` ([Details](tracer_provider-defs-spanprocessor-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group ZipkinSpanExporter

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter"}
```

| Property                | Type      | Required | Nullable    | Defined by                                                                                                                                                                                 |
| :---------------------- | :-------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [endpoint](#endpoint-1) | `string`  | Optional | can be null | [Untitled schema](tracer_provider-defs-zipkinspanexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter/properties/endpoint") |
| [timeout](#timeout)     | `integer` | Optional | can be null | [Untitled schema](tracer_provider-defs-zipkinspanexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter/properties/timeout")   |

### endpoint



`endpoint`

* is optional

* Type: `string`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-zipkinspanexporter-properties-endpoint.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter/properties/endpoint")

#### endpoint Type

`string`

### timeout



`timeout`

* is optional

* Type: `integer`

* can be null

* defined in: [Untitled schema](tracer_provider-defs-zipkinspanexporter-properties-timeout.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ZipkinSpanExporter/properties/timeout")

#### timeout Type

`integer`

#### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## Definitions group ExperimentalTracerConfigurator

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator"}
```

| Property                           | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :--------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [default\_config](#default_config) | `object` | Optional | cannot be null | [Untitled schema](tracer_provider-defs-experimentaltracerconfig.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator/properties/default_config")                   |
| [tracers](#tracers)                | `array`  | Optional | cannot be null | [Untitled schema](tracer_provider-defs-experimentaltracerconfigurator-properties-tracers.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator/properties/tracers") |

### default\_config



`default_config`

* is optional

* Type: `object` ([Details](tracer_provider-defs-experimentaltracerconfig.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-experimentaltracerconfig.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator/properties/default_config")

#### default\_config Type

`object` ([Details](tracer_provider-defs-experimentaltracerconfig.md))

### tracers



`tracers`

* is optional

* Type: `object[]` ([Details](tracer_provider-defs-experimentaltracermatcherandconfig.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-experimentaltracerconfigurator-properties-tracers.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfigurator/properties/tracers")

#### tracers Type

`object[]` ([Details](tracer_provider-defs-experimentaltracermatcherandconfig.md))

## Definitions group ExperimentalTracerMatcherAndConfig

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerMatcherAndConfig"}
```

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :---------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)     | `string` | Required | cannot be null | [Untitled schema](tracer_provider-defs-experimentaltracermatcherandconfig-properties-name.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerMatcherAndConfig/properties/name") |
| [config](#config) | `object` | Required | cannot be null | [Untitled schema](tracer_provider-defs-experimentaltracerconfig.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerMatcherAndConfig/properties/config")                         |

### name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-experimentaltracermatcherandconfig-properties-name.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerMatcherAndConfig/properties/name")

#### name Type

`string`

### config



`config`

* is required

* Type: `object` ([Details](tracer_provider-defs-experimentaltracerconfig.md))

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-experimentaltracerconfig.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerMatcherAndConfig/properties/config")

#### config Type

`object` ([Details](tracer_provider-defs-experimentaltracerconfig.md))

## Definitions group ExperimentalTracerConfig

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfig"}
```

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :-------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [disabled](#disabled) | `boolean` | Required | cannot be null | [Untitled schema](tracer_provider-defs-experimentaltracerconfig-properties-disabled.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfig/properties/disabled") |

### disabled



`disabled`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Untitled schema](tracer_provider-defs-experimentaltracerconfig-properties-disabled.md "https://opentelemetry.io/otelconfig/tracer_provider.json#/$defs/ExperimentalTracerConfig/properties/disabled")

#### disabled Type

`boolean`
