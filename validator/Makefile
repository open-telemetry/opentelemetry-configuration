ROOT_DIR := $(realpath $(shell dirname $(lastword $(MAKEFILE_LIST))))
SCHEMA_DIR := ${ROOT_DIR}/../schema
CURRENT_GIT_REF := $(shell git rev-parse --short HEAD)
DOCKER_IMAGE_TAG := ${CURRENT_GIT_REF}
DOCKER_BUILD_ARGS := -t otel_config_validator:${DOCKER_IMAGE_TAG}
EXAMPLE_FILES := $(shell find ${ROOT_DIR}/../examples -name "*.yaml" -exec basename {} \;)
$(shell mkdir -p out)

validator-copy-schema:
	cp -R ${SCHEMA_DIR} ${ROOT_DIR}/

validator: validator-copy-schema
	go build -C ${ROOT_DIR} ${ROOT_DIR}

validator-docker: validator-copy-schema
	docker build . ${ROOT_DIR}/${DOCKER_BUILD_ARGS}

validator-validate-examples:
	@for f in $(EXAMPLE_FILES); do \
	    ./otel_config_validator -o  ${ROOT_DIR}/out/$$f ${ROOT_DIR}/../examples/$$f ; \
	done

.PHONY: validator-validate-examples validator-copy-schema validator validator-docker
