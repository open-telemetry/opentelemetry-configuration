ROOT_DIR := $(realpath $(shell dirname $(lastword $(MAKEFILE_LIST))))
SCHEMA_DIR := ${ROOT_DIR}/../schema
CURRENT_GIT_REF := $(shell git rev-parse --short HEAD)
DOCKER_IMAGE_TAG := ${CURRENT_GIT_REF}
DOCKER_BUILD_ARGS := -t otel_config_validator:${DOCKER_IMAGE_TAG}
validate_file = echo $(file) ; $(shell ${ROOT_DIR}/otel_config_validator -o out.json $(file))

validator-copy-schema:
	cp -R ${SCHEMA_DIR} ${ROOT_DIR}/

validator: validator-copy-schema
	go build -C ${ROOT_DIR} ${ROOT_DIR}

validator-docker: validator-copy-schema
	docker build . ${ROOT_DIR}/${DOCKER_BUILD_ARGS}

validator-validate-examples: validator
	$(foreach file, $(wildcard $(ROOT_DIR)/../examples/*.yaml), $(validate_file))

.PHONY: validator-copy-schema validator validator-docker
