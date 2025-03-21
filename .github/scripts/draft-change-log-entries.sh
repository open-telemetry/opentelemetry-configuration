#!/bin/bash -e

previous_version=$1

range="$previous_version..HEAD"

echo "## Unreleased"
echo

git log --reverse \
        --perl-regexp \
        --author='^(?!renovate\[bot\] )' \
        --pretty=format:"* %s" \
        "$range" \
  | sed -E 's,\(#([0-9]+)\)$,\n  ([#\1](https://github.com/open-telemetry/opentelemetry-configuration/pull/\1)),'
