# syntax=docker/dockerfile:1
FROM golang:1.22 AS build

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o /otel_config_validator

FROM gcr.io/distroless/base-debian12

WORKDIR /

COPY --from=build /otel_config_validator /otel_config_validator

USER nonroot:nonroot

ENTRYPOINT ["/otel_config_validator"]
