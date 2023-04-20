SCHEMA_FILES := $(shell find . -type f -path './schema/*.json' -not -path './.github/*' -not -path './node_modules/*' | sort)

.PHONY: all
all: install-tools compile-schema validate-example

.PHONY: compile-schema
compile-schema:
	@if ! npm ls ajv-cli; then npm install; fi
	@for f in $(SCHEMA_FILES); do \
	    npx --no ajv-cli compile --spec=draft2020 -s $$f \
	        || exit 1; \
	done

.PHONY: validate-example
validate-example:
	@if ! npm ls ajv-cli; then npm install; fi
	npx --no ajv-cli validate --spec=draft2020 --errors=text -s ./schema/opentelemetry_configuration.json -d ./kitchen-sink-example.yaml

.PHONY: install-tools
install-tools:
	npm install
	@echo "All tools installed"
