// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

//go:build tools
// +build tools

package tools // import "otel_config_validator/internal/tools"

import (
	_ "golang.org/x/vuln/cmd/govulncheck"
)
