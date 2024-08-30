SCHEMA_FILES := $(shell find . -path './schema/*.json' -exec basename {} \; | sort)
EXAMPLE_FILES := $(shell find . -path './examples/*.yaml' -exec basename {} \; | sort)
$(shell mkdir -p out)

include validator/Makefile

.PHONY: all
all: install-tools compile-schema validate-examples

.PHONY: compile-schema
compile-schema:
	@if ! npm ls ajv-cli; then npm install; fi
	@for f in $(SCHEMA_FILES); do \
	    npx --no ajv-cli compile --spec=draft2020 --allow-matching-properties -s ./schema/$$f -r "./schema/!($$f)" \
	        || exit 1; \
	done

.PHONY: validate-examples
validate-examples:
	@if ! npm ls ajv-cli; then npm install; fi
	@for f in $(EXAMPLE_FILES); do \
	    npx envsub ./examples/$$f ./out/$$f || exit 1; \
		npx --no ajv-cli validate --spec=draft2020 --allow-matching-properties --errors=text -s ./schema/opentelemetry_configuration.json -r "./schema/!(opentelemetry_configuration.json)" -d ./out/$$f \
		    || exit 1; \
	done

.PHONY: install-tools
install-tools:
	npm install
	@echo "All tools installed"
