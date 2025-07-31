# Untitled object in undefined Schema

```txt
https://opentelemetry.io/otelconfig/instrumentation.json#/$defs/ExperimentalHttpInstrumentation/properties/server
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [instrumentation.json\*](../schema/instrumentation.json "open original schema") |

## server Type

`object` ([Details](instrumentation-defs-experimentalhttpinstrumentation-properties-server.md))

# server Properties

| Property                                                  | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                 |
| :-------------------------------------------------------- | :------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [request\_captured\_headers](#request_captured_headers)   | `array` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentalhttpinstrumentation-properties-server-properties-request_captured_headers.md "https://opentelemetry.io/otelconfig/instrumentation.json#/$defs/ExperimentalHttpInstrumentation/properties/server/properties/request_captured_headers")   |
| [response\_captured\_headers](#response_captured_headers) | `array` | Optional | cannot be null | [Untitled schema](instrumentation-defs-experimentalhttpinstrumentation-properties-server-properties-response_captured_headers.md "https://opentelemetry.io/otelconfig/instrumentation.json#/$defs/ExperimentalHttpInstrumentation/properties/server/properties/response_captured_headers") |

## request\_captured\_headers



`request_captured_headers`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentalhttpinstrumentation-properties-server-properties-request_captured_headers.md "https://opentelemetry.io/otelconfig/instrumentation.json#/$defs/ExperimentalHttpInstrumentation/properties/server/properties/request_captured_headers")

### request\_captured\_headers Type

`string[]`

## response\_captured\_headers



`response_captured_headers`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Untitled schema](instrumentation-defs-experimentalhttpinstrumentation-properties-server-properties-response_captured_headers.md "https://opentelemetry.io/otelconfig/instrumentation.json#/$defs/ExperimentalHttpInstrumentation/properties/server/properties/response_captured_headers")

### response\_captured\_headers Type

`string[]`
