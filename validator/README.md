## OpenTelemetry SDK Configuration Validator

This application will validate a yaml or json file against the [OpenTelemetry
SDK Configuration schema](https://github.com/open-telemetry/opentelemetry-configuration/).

### Build

The `schema` directory is required to be in the directory of the Go file that
embeds it so a `go build` alone will fail, instead run `make` which will copy
the schema:

```
$ make
```

Same is true for building the docker image:

```
$ make docker
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
Default values are supported in the form `${VARIABLE:default}`.

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

