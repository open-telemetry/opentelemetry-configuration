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
