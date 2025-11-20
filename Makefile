# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

EXAMPLE_FILES := $(shell find . -path './examples/*.yaml' -exec basename {} \; | sort)
$(shell mkdir -p out)

.PHONY: all
all: install-tools compile-schema validate-examples all-meta-schema

include validator/Makefile

.PHONY: validate-examples
validate-examples:
	@if ! npm ls ajv-cli; then npm install; fi
	@for f in $(EXAMPLE_FILES); do \
	    npx envsub ./examples/$$f ./out/$$f || exit 1; \
		npx --no ajv-cli validate --spec=draft2020 --allow-matching-properties --errors=text -s ./schema_out/opentelemetry_configuration.json -r "./schema_out/!(opentelemetry_configuration.json)" -d ./out/$$f \
		    || exit 1; \
	done

.PHONY: update-file-format
update-file-format:
	@echo "Updating \"file_format:\" in ./examples/* to: $(FILE_FORMAT)"
	@for f in $(EXAMPLE_FILES); do \
	    sed -e 's/file_format:.*/file_format: \"$(FILE_FORMAT)\"/g' -i '' ./examples/$$f; \
	done

.PHONY: fix-language-implementations
fix-language-implementations:
	npm run-script fix-language-implementations || exit 1; \

.PHONY: generate-markdown
generate-markdown:
	npm run-script generate-markdown || exit 1; \

.PHONY: all-meta-schema
all-meta-schema: fix-language-implementations generate-markdown

.PHONY: install-tools
install-tools:
	npm install
	@echo "All tools installed"
