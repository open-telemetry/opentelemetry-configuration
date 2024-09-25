# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

ROOT_DIR :=$(realpath $(shell dirname $(lastword $(MAKEFILE_LIST))))
PARENT_DIR :=$(realpath ${ROOT_DIR}/../)
CURRENT_GIT_REF :=$(shell git rev-parse --short HEAD)
DOCKER_IMAGE_TAG :=${CURRENT_GIT_REF}
DOCKER_BUILD_ARGS :=-f ${ROOT_DIR}/Dockerfile -t otel_config_validator:${DOCKER_IMAGE_TAG} -t otel_config_validator:current
DOCKER_SHELLTEST_BUILD_ARGS :=-f ${ROOT_DIR}/Dockerfile --target shelltest -t shelltest:${CURRENT_GIT_REF} -t shelltest:current
EXAMPLE_FILES := $(shell find ${ROOT_DIR}/../examples -name "*.yaml" -exec basename {} \; | sort)
$(shell mkdir -p out)

GO = go

TOOLS = $(CURDIR)/.tools

TOOLS_MOD_DIR := ./internal/tools

$(TOOLS):
	@mkdir -p $@

$(TOOLS)/%: $(TOOLS_MOD_DIR)/go.mod | $(TOOLS)
	cd $(TOOLS_MOD_DIR) && \
	$(GO) build -o $@ $(PACKAGE)

GOVULNCHECK = $(TOOLS)/govulncheck
$(TOOLS)/govulncheck: PACKAGE=golang.org/x/vuln/cmd/govulncheck

.PHONY: tools
tools: $(GOVULNCHECK)

validator-copy-schema:
	mkdir -p ${ROOT_DIR}/schema
	find ${PARENT_DIR} -path '*/schema/*.json' ! -path '*/validator/schema/*.json' -exec cp '{}' "${ROOT_DIR}/schema/" ';'

validator: validator-copy-schema
	go build -C ${ROOT_DIR} ${ROOT_DIR}

validator-docker-image: validator-copy-schema
	docker build --target releaser ${DOCKER_BUILD_ARGS} ${ROOT_DIR}

validator-validate-examples:
	@for f in $(EXAMPLE_FILES); do \
	    echo "Validating" $$f ; \
	    PATH=${PATH}:${ROOT_DIR}/ otel_config_validator -o  ${ROOT_DIR}/out/$$f ${ROOT_DIR}/../examples/$$f ; \
	done

validator-build-shelltest-image:
	docker build ${DOCKER_SHELLTEST_BUILD_ARGS} ${ROOT_DIR}

validator-run-shelltests: validator-build-shelltest-image
	docker run -v ${PARENT_DIR}:/root shelltest:${CURRENT_GIT_REF} -- --plain /root/validator/shelltests

.PHONY: govulncheck
govulncheck: $(TOOLS)/govulncheck
	$(GOVULNCHECK) ./...

.PHONY: validator-validate-examples validator-copy-schema validator validator-docker-image
