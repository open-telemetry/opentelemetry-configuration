# syntax=docker/dockerfile:1@sha256:4edf897a3ffa55b89f906fc8cc78afdb3f1834cc9c7083565e611a8a7d5fe99e
FROM golang:1.27-alpine@sha256:b8c9b82affbbb82a020bbcf998dad2ba9516944ac7e883524642a481a9505e9c AS build

WORKDIR /app

RUN go env -w GOMODCACHE=/root/.cache/go-mod
RUN go env -w GOCACHE=/root/.cache/go-build

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN --mount=type=cache,target=/root/.cache/go-build,id=cache-go-build --mount=type=cache,target=/root/.cache/go-mod,id=cache-go-mod \
    CGO_ENABLED=0 GOOS=linux go build -o /otel_config_validator

FROM scratch AS releaser

WORKDIR /opt/otel_config_validator

COPY --from=build /otel_config_validator /otel_config_validator

ENTRYPOINT ["/otel_config_validator"]

FROM ubuntu:26.04@sha256:19fcd1bf268f02b60aca3bd30bd8a6d9a11759a430e32921833e65f16d87348a AS shelltest

ENV YQ_VERSION="v4.45.1"

RUN DEBIAN_FRONTEND=noninteractive \
    apt-get update \
    && apt-get install -y software-properties-common wget shelltestrunner jq make \
    && wget -qO /usr/local/bin/yq https://github.com/mikefarah/yq/releases/download/${YQ_VERSION}/yq_linux_amd64 \
        && chmod +x /usr/local/bin/yq \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /root/validator

COPY --from=build /otel_config_validator /otel_config_validator

# add otel_config_validator to the path
ENV PATH=/:$PATH

ENTRYPOINT ["shelltest"]
