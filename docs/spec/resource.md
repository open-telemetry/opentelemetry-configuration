# Declaritive Config - Resource Schema

```txt
https://opentelemetry.io/otelconfig/resource.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [resource.json](../schema/resource.json "open original schema") |

## Declaritive Config - Resource Type

`object` ([Declaritive Config - Resource](resource.md))

# Declaritive Config - Resource Properties

| Property                                       | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :--------------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attributes](#attributes)                      | `array`  | Optional | cannot be null | [Declaritive Config - Resource](resource-properties-attributes.md "https://opentelemetry.io/otelconfig/resource.json#/properties/attributes")                         |
| [detection/development](#detectiondevelopment) | `object` | Optional | cannot be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetection.md "https://opentelemetry.io/otelconfig/resource.json#/properties/detection/development") |
| [schema\_url](#schema_url)                     | `string` | Optional | can be null    | [Declaritive Config - Resource](resource-properties-schema_url.md "https://opentelemetry.io/otelconfig/resource.json#/properties/schema_url")                         |
| [attributes\_list](#attributes_list)           | `string` | Optional | can be null    | [Declaritive Config - Resource](resource-properties-attributes_list.md "https://opentelemetry.io/otelconfig/resource.json#/properties/attributes_list")               |

## attributes



`attributes`

* is optional

* Type: `object[]` ([Details](resource-defs-attributenamevalue.md))

* cannot be null

* defined in: [Declaritive Config - Resource](resource-properties-attributes.md "https://opentelemetry.io/otelconfig/resource.json#/properties/attributes")

### attributes Type

`object[]` ([Details](resource-defs-attributenamevalue.md))

## detection/development



`detection/development`

* is optional

* Type: `object` ([Details](resource-defs-experimentalresourcedetection.md))

* cannot be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetection.md "https://opentelemetry.io/otelconfig/resource.json#/properties/detection/development")

### development Type

`object` ([Details](resource-defs-experimentalresourcedetection.md))

## schema\_url



`schema_url`

* is optional

* Type: `string`

* can be null

* defined in: [Declaritive Config - Resource](resource-properties-schema_url.md "https://opentelemetry.io/otelconfig/resource.json#/properties/schema_url")

### schema\_url Type

`string`

## attributes\_list



`attributes_list`

* is optional

* Type: `string`

* can be null

* defined in: [Declaritive Config - Resource](resource-properties-attributes_list.md "https://opentelemetry.io/otelconfig/resource.json#/properties/attributes_list")

### attributes\_list Type

`string`

# Declaritive Config - Resource Definitions

## Definitions group AttributeNameValue

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                           |
| :-------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)   | `string` | Required | cannot be null | [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-name.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/name")   |
| [value](#value) | Merged   | Required | cannot be null | [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/value") |
| [type](#type)   | `string` | Optional | can be null    | [Declaritive Config - Resource](resource-defs-attributetype.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/type")                        |

### name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-name.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/name")

#### name Type

`string`

### value



`value`

* is required

* Type: merged type ([Details](resource-defs-attributenamevalue-properties-value.md))

* cannot be null

* defined in: [Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/value")

#### value Type

merged type ([Details](resource-defs-attributenamevalue-properties-value.md))

one (and only one) of

* [Untitled string in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-0.md "check type definition")

* [Untitled number in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-1.md "check type definition")

* [Untitled boolean in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-2.md "check type definition")

* [Untitled null in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-3.md "check type definition")

* [Untitled array in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-4.md "check type definition")

* [Untitled array in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-5.md "check type definition")

* [Untitled array in Declaritive Config - Resource](resource-defs-attributenamevalue-properties-value-oneof-6.md "check type definition")

### type



`type`

* is optional

* Type: `string`

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-attributetype.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeNameValue/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `null`           |             |
| `"string"`       |             |
| `"bool"`         |             |
| `"int"`          |             |
| `"double"`       |             |
| `"string_array"` |             |
| `"bool_array"`   |             |
| `"int_array"`    |             |
| `"double_array"` |             |

## Definitions group AttributeType

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/resource.json#/$defs/AttributeType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ExperimentalResourceDetection

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :-------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [attributes](#attributes-1) | `object` | Optional | cannot be null | [Declaritive Config - Resource](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection/properties/attributes")                                      |
| [detectors](#detectors)     | `array`  | Optional | cannot be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetection-properties-detectors.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection/properties/detectors") |

### attributes



`attributes`

* is optional

* Type: `object` ([Details](common-defs-includeexclude.md))

* cannot be null

* defined in: [Declaritive Config - Resource](common-defs-includeexclude.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection/properties/attributes")

#### attributes Type

`object` ([Details](common-defs-includeexclude.md))

### detectors



`detectors`

* is optional

* Type: `object[]` ([Details](resource-defs-experimentalresourcedetector.md))

* cannot be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetection-properties-detectors.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetection/properties/detectors")

#### detectors Type

`object[]` ([Details](resource-defs-experimentalresourcedetector.md))

## Definitions group ExperimentalResourceDetector

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector"}
```

| Property                | Type     | Required | Nullable    | Defined by                                                                                                                                                                                                     |
| :---------------------- | :------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [container](#container) | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalcontainerresourcedetector.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/container")           |
| [host](#host)           | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalhostresourcedetector.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/host")                     |
| [process](#process)     | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalprocessresourcedetector.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/process")               |
| [service](#service)     | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalserviceresourcedetector.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/service")               |
| `.*`                    | `object` | Optional | can be null | [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-patternproperties-.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/patternProperties/.*") |
| Additional Properties   | Any      | Optional | can be null |                                                                                                                                                                                                                |

### container



`container`

* is optional

* Type: `object` ([Details](resource-defs-experimentalcontainerresourcedetector.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalcontainerresourcedetector.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/container")

#### container Type

`object` ([Details](resource-defs-experimentalcontainerresourcedetector.md))

### host



`host`

* is optional

* Type: `object` ([Details](resource-defs-experimentalhostresourcedetector.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalhostresourcedetector.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/host")

#### host Type

`object` ([Details](resource-defs-experimentalhostresourcedetector.md))

### process



`process`

* is optional

* Type: `object` ([Details](resource-defs-experimentalprocessresourcedetector.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalprocessresourcedetector.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/process")

#### process Type

`object` ([Details](resource-defs-experimentalprocessresourcedetector.md))

### service



`service`

* is optional

* Type: `object` ([Details](resource-defs-experimentalserviceresourcedetector.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalserviceresourcedetector.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/properties/service")

#### service Type

`object` ([Details](resource-defs-experimentalserviceresourcedetector.md))

### Pattern: `.*`



`.*`

* is optional

* Type: `object` ([Details](resource-defs-experimentalresourcedetector-patternproperties-.md))

* can be null

* defined in: [Declaritive Config - Resource](resource-defs-experimentalresourcedetector-patternproperties-.md "https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalResourceDetector/patternProperties/.*")

#### .\* Type

`object` ([Details](resource-defs-experimentalresourcedetector-patternproperties-.md))

### Additional Properties

Additional properties are allowed and do not have to follow a specific schema

## Definitions group ExperimentalContainerResourceDetector

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalContainerResourceDetector"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ExperimentalHostResourceDetector

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalHostResourceDetector"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ExperimentalProcessResourceDetector

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalProcessResourceDetector"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ExperimentalServiceResourceDetector

Reference this group by using

```json
{"$ref":"https://opentelemetry.io/otelconfig/resource.json#/$defs/ExperimentalServiceResourceDetector"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |
