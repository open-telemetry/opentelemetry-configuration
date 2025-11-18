# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

SCHEMA_FILES := $(shell find . -path './schema/*.json' -exec basename {} \; | sort)
EXAMPLE_FILES := $(shell find . -path './examples/*.yaml' -exec basename {} \; | sort)
SNIPPET_FILES := $(shell find . -path './snippets/*.yaml' -exec basename {} \; | sort)
$(shell mkdir -p out)

.PHONY: all
all: install-tools compile-schema validate-examples all-meta-schema

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

.PHONY: update-file-format
update-file-format:
	@echo "Updating \"file_format:\" in ./examples/* and ./snippets/* to: $(FILE_FORMAT)"
	@for f in $(EXAMPLE_FILES); do \
	    sed -e 's/file_format:.*/file_format: \"$(FILE_FORMAT)\"/g' -i '' ./examples/$$f; \
	done
	@for f in $(SNIPPET_FILES); do \
	    sed -e 's/file_format:.*/file_format: \"$(FILE_FORMAT)\"/g' -i '' ./snippets/$$f; \
	done

.PHONY: fix-meta-schema
fix-meta-schema:
	npm run-script fix-meta-schema || exit 1; \

.PHONY: validate-snippets
validate-snippets:
	npm run-script validate-snippets || exit 1; \

.PHONY: generate-markdown
generate-markdown:
	npm run-script generate-markdown || exit 1; \

.PHONY: all-meta-schema
all-meta-schema: fix-meta-schema validate-snippets generate-markdown

.PHONY: install-tools
install-tools:
	npm install
	@echo "All tools installed"
