# syntax=docker/dockerfile:1@sha256:4a43a54dd1fedceb30ba47e76cfcf2b47304f4161c0caeac2db1c61804ea3c91
FROM golang:1.26-alpine@sha256:2389ebfa5b7f43eeafbd6be0c3700cc46690ef842ad962f6c5bd6be49ed82039 AS build

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

FROM ubuntu:24.04@sha256:d1e2e92c075e5ca139d51a140fff46f84315c0fdce203eab2807c7e495eff4f9 AS shelltest

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
