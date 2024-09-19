ROOT_DIR :=$(realpath $(shell dirname $(lastword $(MAKEFILE_LIST))))
PARENT_DIR :=$(realpath ${ROOT_DIR}/../)
CURRENT_GIT_REF :=$(shell git rev-parse --short HEAD)
DOCKER_IMAGE_TAG :=${CURRENT_GIT_REF}
DOCKER_BUILD_ARGS :=-f ${ROOT_DIR}/Dockerfile -t otel_config_validator:${DOCKER_IMAGE_TAG} -t otel_config_validator:current
DOCKER_SHELLTEST_BUILD_ARGS :=-f ${ROOT_DIR}/Dockerfile --target shelltest -t shelltest:${CURRENT_GIT_REF} -t shelltest:current
EXAMPLE_FILES := $(shell find ${ROOT_DIR}/../examples -name "*.yaml" -exec basename {} \; | sort)
$(shell mkdir -p out)

validator-copy-schema:
	mkdir -p ${ROOT_DIR}/schema
	find ${PARENT_DIR} -path '*/schema/*.json' ! -path '*/validator/schema/*.json' -exec cp '{}' "${ROOT_DIR}/schema/" ';'

validator: validator-copy-schema
	go build -C ${ROOT_DIR} ${ROOT_DIR}

validator-docker-image: validator-copy-schema
	docker build --target releaser ${DOCKER_BUILD_ARGS} ${ROOT_DIR}

validator-validate-examples:
	@for f in $(EXAMPLE_FILES); do \
	    echo "Validating" $$f ; \
	    PATH=${PATH}:${ROOT_DIR}/ otel_config_validator -o  ${ROOT_DIR}/out/$$f ${ROOT_DIR}/../examples/$$f ; \
	done

validator-build-shelltest-image:
	docker build ${DOCKER_SHELLTEST_BUILD_ARGS} ${ROOT_DIR}

validator-run-shelltests: validator-build-shelltest-image
	docker run -v ${PARENT_DIR}:/root shelltest:${CURRENT_GIT_REF} -- --plain /root/validator/shelltests

.PHONY: validator-validate-examples validator-copy-schema validator validator-docker-image
