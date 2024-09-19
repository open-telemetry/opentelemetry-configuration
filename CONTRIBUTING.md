# Contributing

Read OpenTelemetry project [contributing
guide](https://github.com/open-telemetry/community/blob/main/CONTRIBUTING.md)
for general information about the project.

## Consistency Checks

This repository has various checks to ensure the schema changes are valid. Before using:

- Install the latest LTS release of **[Node](https://nodejs.org/)**.
  For example, using **[nvm][]** under Linux run:

  ```bash
  nvm install --lts
  ```

- Install tooling packages:

  ```bash
  npm install
  ```

You can perform all checks locally using this command:

```bash
make all
```

## Description generation

The [./examples](./examples) directory contains a variety of examples, which
include important comments describing the semantics of the configuration
properties. In order to keep these comments consistent across examples, we have
tooling which automatically generates comments for each property.

How it works:

* The [./schema/type_descriptions.yaml](./schema/type_descriptions.yaml) file
  defines descriptions for each of the properties of each type defines in
  the [JSON schema](./schema) data model.
* The [./scripts/generate-descriptions.js](./scripts/generate-comments.js) is a
  script which for a given input configuration file will:
  * Parse the YAML.
  * Walk through each key / value pair, and for each:
    * Compute the JSON dot notation location of the current key / value pair.
    * Find the first matching rule
      in [type_description.yaml](./schema/type_descriptions.yaml). Iterate
      through the rules and evaluate the key / value pair dot notation location
      against each of the rule's `path_patterns`.
    * Inject / overwrite comments for its properties according
      to `type_descriptions.yaml`.
  * Write the resulting content to specified output file or to the console.

The `make generate-descriptions` command runs this process against each file
in `./examples` and overwrites each file in the process. 

**NOTE:** The [build](./.github/workflows/build-check.yaml) will fail
if `make generate-descriptions` produces any changes which are not checked into
version control.

To run against a single file:

- Install the latest LTS release of **[Node](https://nodejs.org/)**.
  For example, using **[nvm][]** under Linux run:

  ```bash
  nvm install --lts
  ```

- Install tooling packages:

  ```bash
  npm install
  ```
  
- Run the script:

```shell
npm run-script generate-descriptions -- /absolute/path/to/input/file.yaml /absolute/path/to/output/file.yaml
```

Optionally, include the `--debug` parameter. This prints out information about
each key value pair, including the computed dot notation location, the matched
rule, the previous description, the new description, etc.

```shell
npm run-script generate-comments -- /absolute/path/to/input/file.yaml /absolute/path/to/output/file.yaml --debug
```

## Pull requests

A PR is ready to merge when:

* It has as least 1 approval from [codeowners](.github/CODEOWNERS) (TODO: bump to 2 when we have more codeowners)
* There is no `request changes` from the [codeowners](.github/CODEOWNERS)
* If a change to the schema, at least one [example](examples/) is updated to illustrate change
* All required status checks pass
* The PR includes a [CHANGELOG](CHANGELOG.md) entry under `## UNRELEASED` following the form:

```markdown

* {Brief description of change}
  ([#{PR Number}]({https://github.com/open-telemetry/opentelemetry-configuration/pull/{PR Number}))

```
