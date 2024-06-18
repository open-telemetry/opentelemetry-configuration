ROOT_DIR := $(realpath $(shell dirname $(firstword $(MAKEFILE_LIST))))
SCHEMA_DIR := ${ROOT_DIR}/../schema
CURRENT_GIT_REF := $(shell git rev-parse --short HEAD)
DOCKER_IMAGE_TAG := ${CURRENT_GIT_REF}
DOCKER_BUILD_ARGS := -t otel_config_validator:${DOCKER_IMAGE_TAG}

all: build

copy-schema:
	cp -R ${SCHEMA_DIR} ${ROOT_DIR}/

build: copy-schema
	go build

docker: copy-schema
	docker build . ${DOCKER_BUILD_ARGS}

.PHONY: all copy-schema build docker
