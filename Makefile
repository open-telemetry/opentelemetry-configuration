SCHEMA_FILES := $(shell find . -path './schema/*.json' -exec basename {} \; | sort)

.PHONY: all
all: install-tools compile-schema validate-example

.PHONY: compile-schema
compile-schema:
	@if ! npm ls ajv-cli; then npm install; fi
	@for f in $(SCHEMA_FILES); do \
	    npx --no ajv-cli compile --spec=draft2020 --allow-matching-properties -s ./schema/$$f -r "./schema/!($$f)" \
	        || exit 1; \
	done

.PHONY: validate-example
validate-example:
	@if ! npm ls ajv-cli; then npm install; fi
	npx --no ajv-cli validate --spec=draft2020 --allow-matching-properties --errors=text -s ./schema/opentelemetry_configuration.json -r "./schema/!(opentelemetry_configuration.json)" -d ./kitchen-sink-example.yaml

.PHONY: install-tools
install-tools:
	npm install
	@echo "All tools installed"
