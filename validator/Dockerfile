# syntax=docker/dockerfile:1
FROM golang:1.22 AS build

WORKDIR /app

RUN go env -w GOMODCACHE=/root/.cache/go-mod
RUN go env -w GOCACHE=/root/.cache/go-build

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN --mount=type=cache,target=/root/.cache/go-build,id=cache-go-build --mount=type=cache,target=/root/.cache/go-mod,id=cache-go-mod \
    CGO_ENABLED=0 GOOS=linux go build -o /otel_config_validator

FROM gcr.io/distroless/base-debian12

WORKDIR /opt/otel_config_validator

COPY --from=build /otel_config_validator /otel_config_validator

ENTRYPOINT ["/otel_config_validator"]
