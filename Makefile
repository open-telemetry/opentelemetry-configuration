# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

SCHEMA_FILES := $(shell find . -path './schema/*.json' -exec basename {} \; | sort)
EXAMPLE_FILES := $(shell find . -path './examples/*.yaml' -exec basename {} \; | sort)
$(shell mkdir -p out)

.PHONY: all
all: install-tools compile-schema generate-descriptions validate-examples

include validator/Makefile

.PHONY: compile-schema
compile-schema:
	@if ! npm ls ajv-cli; then npm install; fi
	@for f in $(SCHEMA_FILES); do \
	    npx --no ajv-cli compile --spec=draft2020 --allow-matching-properties -s ./schema/$$f -r "./schema/!($$f|*.yaml)" \
	        || exit 1; \
	done

.PHONY: validate-examples
validate-examples:
	@if ! npm ls ajv-cli; then npm install; fi
	@for f in $(EXAMPLE_FILES); do \
	    npx envsub ./examples/$$f ./out/$$f || exit 1; \
		npx --no ajv-cli validate --spec=draft2020 --allow-matching-properties --errors=text -s ./schema/opentelemetry_configuration.json -r "./schema/!(opentelemetry_configuration.json|*.yaml)" -d ./out/$$f \
		    || exit 1; \
	done

.PHONY: generate-descriptions
generate-descriptions:
	@if ! npm ls minimatch yaml; then npm install; fi
	@for f in $(EXAMPLE_FILES); do \
	    npm run-script generate-descriptions -- $(shell pwd)/examples/$$f $(shell pwd)/examples/$$f || exit 1; \
	done

.PHONY: update-file-format
update-file-format:
	@echo "Updating \"file_format:\" in ./examples/* to: $(FILE_FORMAT)"
	@for f in $(EXAMPLE_FILES); do \
	    sed -e 's/file_format:.*/file_format: \"$(FILE_FORMAT)\"/g' -i '' ./examples/$$f; \
	done

.PHONY: install-tools
install-tools:
	npm install
	@echo "All tools installed"
