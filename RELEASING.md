# How to Create a Release of OpenTelemetry Configuration (for Maintainers Only)

* Prepare the release by:
  * If preparing a minor or major release, merge a PR to `main`
    to [update `file_format`](#update-file-format).
  * Merge a PR to `main` to update the [CHANGELOG.md](CHANGELOG.md). Changes
    should be listed under a heading of the
    form `## v{Major}.{Minor}.{Patch} - YYYY-MM-DD` under `## Unreleased`.
    Maintainers should highlight any breaking changes. You can
    use `./.github/scripts/draft-change-log-entries.sh <previous_version_tag>`
    or the
    Github [compare tool](https://github.com/open-telemetry/opentelemetry-configuration/compare/)
    to view a summary of all commits since last release as a reference. From
    this point on no new PRs can be merged until the release is complete.
* Go to
  Github [release page](https://github.com/open-telemetry/opentelemetry-configuration/releases),
  click `Draft a new release`.
* Click "Choose a tag" and specify the next version number. The Target branch
  should be "main".
* Click "Generate release notes" to get a draft release notes. Refer
  to [CHANGELOG.md](CHANGELOG.md) for a list of changes since last release.
  * Call out [breaking changes](CONTRIBUTING.md#pull-requests) and provide example migration steps (see [v0.4.0](https://github.com/open-telemetry/opentelemetry-configuration/releases/tag/v0.4.0) for an example).
* Click "Publish Release".

Our tags follow the naming convention of `v<major>.<minor>.<patch>`. Increment `minor` by 1
and use `patch` value of 0 for new minor version releases. For patch releases keep `minor`
unchanged and increment the `patch`.

## Update `file_format` {#update-file-format}

Update the `file_format: "<major>.<minor>` of [./examples](./examples) as follows:

```shell
# Set FILE_FORMAT env var to target version of the release
export FILE_FORMAT=0.4
make update-file-format
```

Merge a PR with the changes to `main`.
