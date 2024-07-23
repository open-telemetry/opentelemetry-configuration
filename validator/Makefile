ROOT_DIR := $(realpath $(shell dirname $(lastword $(MAKEFILE_LIST))))
SCHEMA_DIR := ${ROOT_DIR}/../schema
CURRENT_GIT_REF := $(shell git rev-parse --short HEAD)
DOCKER_IMAGE_TAG := ${CURRENT_GIT_REF}
DOCKER_BUILD_ARGS := -f ${ROOT_DIR}/Dockerfile -t otel_config_validator:${DOCKER_IMAGE_TAG} -t otel_config_validator:current
EXAMPLE_FILES := $(shell find ${ROOT_DIR}/../examples -name "*.yaml" -exec basename {} \;)
$(shell mkdir -p out)

validator-copy-schema:
	cp -R ${SCHEMA_DIR} ${ROOT_DIR}/

validator: validator-copy-schema
	go build -C ${ROOT_DIR} ${ROOT_DIR}

validator-docker-image: validator-copy-schema
	docker build ${DOCKER_BUILD_ARGS} ${ROOT_DIR}

validator-validate-examples:
	@for f in $(EXAMPLE_FILES); do \
	    echo "Validating" $$f ; \
	    ${ROOT_DIR}/otel_config_validator -o  ${ROOT_DIR}/out/$$f ${ROOT_DIR}/../examples/$$f ; \
	done

.PHONY: validator-validate-examples validator-copy-schema validator validator-docker-image
