#!/usr/bin/env bash

# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 vMAJOR.MINOR.PATCH" >&2
  exit 1
fi

readonly schema_tag="$1"
readonly semver_number='(0|[1-9][0-9]*)'

if [[ ! ${schema_tag} =~ ^v${semver_number}\.${semver_number}\.${semver_number}$ ]]; then
  echo "Schema tag must be a stable semantic version of the form vMAJOR.MINOR.PATCH: ${schema_tag}" >&2
  exit 1
fi

readonly schema_major="${BASH_REMATCH[1]}"
readonly schema_minor="${BASH_REMATCH[2]}"
readonly schema_patch="${BASH_REMATCH[3]}"
readonly schema_version="${schema_major}.${schema_minor}.${schema_patch}"
readonly schema_file_format="${schema_major}.${schema_minor}"

# Schema releases in this repository reset lower-order components, so the
# non-zero component furthest to the right identifies the release's bump type.
if (( schema_patch > 0 )); then
  readonly bump_type="patch"
elif (( schema_minor > 0 )); then
  readonly bump_type="minor"
else
  readonly bump_type="major"
fi

readonly script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
readonly repository_root="$(cd -- "${script_dir}/../.." && pwd)"
readonly main_go="${repository_root}/validator/main.go"
readonly dist_toml="${repository_root}/dist.toml"

readonly main_version_count="$(grep -Ec '^[[:space:]]*Version:[[:space:]]+"[0-9]+\.[0-9]+\.[0-9]+",$' "${main_go}" || true)"
readonly dist_version_count="$(grep -Ec '^version = "[0-9]+\.[0-9]+\.[0-9]+"$' "${dist_toml}" || true)"

if [[ ${main_version_count} -ne 1 || ${dist_version_count} -ne 1 ]]; then
  echo "Expected exactly one validator version in both validator/main.go and dist.toml" >&2
  exit 1
fi

readonly main_version="$(sed -nE 's/^[[:space:]]*Version:[[:space:]]+"([0-9]+\.[0-9]+\.[0-9]+)",$/\1/p' "${main_go}")"
readonly dist_version="$(sed -nE 's/^version = "([0-9]+\.[0-9]+\.[0-9]+)"$/\1/p' "${dist_toml}")"

if [[ ${main_version} != "${dist_version}" ]]; then
  echo "Validator versions disagree: validator/main.go has ${main_version}, dist.toml has ${dist_version}" >&2
  exit 1
fi

IFS=. read -r validator_major validator_minor validator_patch <<< "${main_version}"
case "${bump_type}" in
  major)
    ((validator_major += 1))
    validator_minor=0
    validator_patch=0
    ;;
  minor)
    ((validator_minor += 1))
    validator_patch=0
    ;;
  patch)
    ((validator_patch += 1))
    ;;
esac
readonly validator_version="${validator_major}.${validator_minor}.${validator_patch}"

sed -Ei "s/^(const supportedFileFormat = \")[^\"]+(\")$/\1${schema_file_format}\2/" "${main_go}"
sed -Ei "s/^([[:space:]]*Version:[[:space:]]+\")[0-9]+\.[0-9]+\.[0-9]+(\",)$/\1${validator_version}\2/" "${main_go}"
sed -Ei "s/^(version = \")[0-9]+\.[0-9]+\.[0-9]+(\")$/\1${validator_version}\2/" "${dist_toml}"

if ! grep -Fqx "const supportedFileFormat = \"${schema_file_format}\"" "${main_go}" ||
   ! grep -Eq "^[[:space:]]*Version:[[:space:]]+\"${validator_version}\",$" "${main_go}" ||
   ! grep -Fqx "version = \"${validator_version}\"" "${dist_toml}"; then
  echo "Failed to update one or more validator version declarations" >&2
  exit 1
fi

echo "Schema ${schema_version} is a ${bump_type} release."
echo "The validator will support file format ${schema_file_format} and move from ${main_version} to ${validator_version}."

if [[ -n ${GITHUB_OUTPUT:-} ]]; then
  {
    echo "bump_type=${bump_type}"
    echo "schema_file_format=${schema_file_format}"
    echo "schema_version=${schema_version}"
    echo "validator_version=${validator_version}"
  } >> "${GITHUB_OUTPUT}"
fi
