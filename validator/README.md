## OpenTelemetry SDK Configuration Validator

This application will replace environment variables in values of valid yaml
files, following the rules of [file configuration environment variable
substitution](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/data-model.md#environment-variable-substitution),
before validating that result against a version of the [OpenTelemetry SDK
Configuration
schema](https://github.com/open-telemetry/opentelemetry-configuration/) and
optionally outputting to a yaml or json file.

> NOTE: All make commands are run from the root of the repository.

### Build

Requirements:

- Go 1.20 or above

The `schema` directory is required to be in the directory of the Go file that
embeds it, so a `go build` alone will fail, instead run `make` which will copy
the schema:

```
$ make validator
```

Same is true for building the docker image:

```
$ make validator-docker-image
```

The schema in the `schema` directory is the default that will be used when
running the validator. To use a different schema a directory containing the
schema can be passed with `-s`/`--schema`.

### Usage

The command `otel_config_validator` takes one argument, the path to the yaml
file and optionally the path to a file to output the configuration after
environment variable expansion and validation has been done. The format (json or
yaml) of the output is based on the extension (`.json` or `yml`/`.yaml`) of the
output file name.

```
$ ./otel_config_validator -o out.json ../examples/kitchen-sink.yaml
```

The docker image creates a directory `/opt/otel_config_validator` and sets it to
the `WORKDIR`, meaning you can mount your current directory to
`/opt/otel_config_validator` and then read/write from `./` in the arguments to
`docker run`:

```
$ docker run -v $(pwd):/opt/otel_config_validator otel_config_validator:current -o out.yaml examples/kitchen-sink.yaml
```

With the above docker command the output file, `out.yaml`, will be owned by
`root:root` but be readable by any user.

Environment variable substitution is supported with the syntax `${VARIABLE}` or
`${env:VARIABLE}`. Default values are supported in the form
`${VARIABLE:-default}`. The full specification for variable substitution can be
found in the
[opentelemetry-specification](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/configuration/data-model.md#environment-variable-substitution).

#### Using a Different Schema Version

To use a version of of the schema other than the one builtin to the
`otel_config_validator` executable pass the `-s <directory>` option:

```
$ ./otel_config_validator -o out.json -s .../some/path/opentelemetry-configuration-0.1.0/ ../examples/kitchen-sink.yaml
```

### Testing

Run the Go unit tests:

```
$ go test .
```

Running the tests of the compiled CLI requires
[shelltest](https://github.com/simonmichael/shelltestrunner),
[jq](https://github.com/jqlang/jq/) and [yq](https://github.com/mikefarah/yq)
and setting the `$PATH` to include `otel_config_validator`, but you can just use
the `Makefile` target `validator-run-shelltests` to run them in Docker:

```
$ make validator-run-shelltests
```

### Releasing

To release a new version of `otel_config_validator` the version in `dist.toml`
and the `Version` property of `cli.Comamnd` in `main.go` must be bumped. Next, a
tag prefixed with `validator-` must be created and pushed to the repository, for
example `validator-0.1.0`. Then, the `cargo-dist` Github Action will create a
Github release, build binaries for multiple platforms and publish them to the
new release.

Docker image are published on merge to `main`.
