# How to Create a Release of OpenTelemetry Configuration (for Maintainers Only)

## Update `file_format`

Update the `file_format: "<verison>` of [./examples](./examples) as follows:

```shell
# Set FILE_FORMAT env var to target version of the release
export FILE_FORMAT=0.4
make update-file-format
```

Merge a PR with the changes to `main`.

## Tagging the Release

Our release tags follow the convention `v<major>.<minor>.<patch>`. For example,
the `v0.1.0`, `v0.1.1`).

In this section upstream repository refers to the main opentelemetry-configuration
github repository.

Before any push to the upstream repository you need to create a [personal access
token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).

1. Checkout `main` and ensure you are synchronized with main on `upstream`.

    ```bash
   git checkout main
   git pull upstream main
    ```

NOTE: Your local `main` branch should have additional commits besides those on
upstream `main`.

TODO: include command for ensuring local main is identical to upstream main.

2. For `vMajor.Minor.Patch` tag:

    - Create and push a tag:

    ```bash
    MAJOR=0 MINOR=1 PATCH=0 # Set appropriately for new release
    git tag -a v$MAJOR.$MINOR.$PATCH -m "Version $MAJOR.$MINOR.$PATCH"
    git push upstream v$MAJOR.$MINOR.$PATCH
    ```

## Patch Release

All patch releases should include only bug-fixes, and must avoid
adding/modifying the public APIs. To prepare a patch follow the following instructions:

* Checkout the tag corresponding to the version to patch (e.g. `v0.1.0` if producing `v0.1.1`)
* Cherry-pick the commits to include
* Create and push new tag as described above

TODO: update to include specific commands after performing first patch release

## Announcement

Once deployment is done, go to Github [release
page](https://github.com/open-telemetry/opentelemetry-configuration/releases), press
`Draft a new release` to write release notes about the new release.

You can use `git log upstream/v$MAJOR.$((MINOR-1)).x..upstream/v$MAJOR.$MINOR.x --graph --first-parent`
or the Github [compare tool](https://github.com/open-telemetry/opentelemetry-configuration/compare/)
to view a summary of all commits since last release as a reference.

In addition, you can refer to [CHANGELOG.md](CHANGELOG.md)
for a list of major changes since last release.

## Update release versions in documentations and CHANGELOG files

After releasing is done, you need to update the [CHANGELOG.md](CHANGELOG.md),
adding a heading for the release of the
form `## v{Major}.{Minor}.{Patch} - YYYY-MM-DD` under `## Unreleased`.

Create a PR to mark the new release in [CHANGELOG.md](CHANGELOG.md) on main branch.
