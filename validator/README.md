## OpenTelemetry SDK Configuration Validator

This application will replace environment variables in values of valid yaml or
json files, following the rules of [file configuration environment variable
substitution](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/file-configuration.md#environment-variable-substitution),
before validating that result against the [OpenTelemetry SDK Configuration
schema](https://github.com/open-telemetry/opentelemetry-configuration/).

### Build

The `schema` directory is required to be in the directory of the Go file that
embeds it, so a `go build` alone will fail, instead run `make` which will copy
the schema:

```
$ make validator
```

Same is true for building the docker image:

```
$ make validator-docker
```

### Usage

The command `otel_config_validator` takes one argument, the path to the yaml or
json configuration file and optionally the path to a file to output the
configuration after environment variable expansion and validation has been done.
The format (json or yaml) of the output is based on the extension (`.json` or
`yml`/`.yaml`) of the output file name.

```
$ ./otel_config_validator -o out.json ../examples/kitchen-sink.yaml
```

Environment variable substitution is supported with the syntax `${VARIABLE}`.
Default values are supported in the form `${VARIABLE:-default}`.

In the case of json input only strings can be the result of substitution. To
ensure only values are replaced the input must be parsed as valid json or yaml
and in the case of json a value like `${VARIABLE}` will always have to be double
quoted as `"${VARIABLE}"` so will always remain double quoted. If you need to
substitute in a boolean, integer or float please use yaml for the input
configuration file.

### Testing

Run the Go unit tests:

```
$ go test .
```

Running the tests of the compiled CLI requires
[shelltest](https://github.com/simonmichael/shelltestrunner),
[jq](https://github.com/jqlang/jq/) and [yq](https://github.com/mikefarah/yq):

```
$ shelltest -c --diff --all shelltests/*.test
```

