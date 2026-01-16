# syntax=docker/dockerfile:1@sha256:b6afd42430b15f2d2a4c5a02b919e98a525b785b1aaff16747d2f623364e39b6
FROM golang:1.25-alpine@sha256:ac09a5f469f307e5da71e766b0bd59c9c49ea460a528cc3e6686513d64a6f1fb AS build

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

FROM ubuntu:24.04@sha256:7a398144c5a2fa7dbd9362e460779dc6659bd9b19df50f724250c62ca7812eb3 AS shelltest

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
