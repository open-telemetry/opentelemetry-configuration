package main

import (
	"bytes"
	"context"
	"embed"
	"encoding/json"
	"log"
	"net/url"
	"os"
	"path/filepath"
	"strings"

	jsonschema "github.com/santhosh-tekuri/jsonschema/v5"
	"github.com/urfave/cli/v3"
	yaml "gopkg.in/yaml.v3"
)

//go:embed schema/*
var schemaFS embed.FS

func main() {
	log.SetFlags(0)

	cmd := &cli.Command{
		Name:  "otel_config_validator",
		Usage: "Validate a configuration file against the OpenTelemetry Configuration Schema",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:     "output",
				Aliases:  []string{"o"},
				OnlyOnce: true,
				Usage:    "optionally where to output the configuration (as json or yaml) after variable expansion and validation",
			},
		},
		Action: runAction(),
	}

	if err := cmd.Run(context.Background(), os.Args); err != nil {
		log.Fatal(err)
	}
}

func runAction() func(ctx context.Context, cmd *cli.Command) error {
	return func(ctx context.Context, cmd *cli.Command) error {
		if cmd.Args().Len() < 1 {
			log.Fatalf("Must pass a configuration filename")
		} else {
			configFilePath := cmd.Args().Get(0)

			jsonConfig := validateConfiguration(configFilePath)

			if o := cmd.String("output"); o != "" {
				jsonToFile(jsonConfig, o)
			}
		}
		return nil
	}
}

func validateConfiguration(configFile string) interface{} {
	schemaFiles, err := schemaFS.ReadDir("schema")
	if err != nil {
		log.Fatal(err)
	}

	c := jsonschema.NewCompiler()

	for _, file := range schemaFiles {
		schemaURL, err := url.JoinPath("https://opentelemetry.io/otelconfig/", file.Name())
		schema, err := schemaFS.ReadFile(filepath.Join("schema", file.Name()))
		if err != nil {
			log.Fatal(err)
		}

		if err := c.AddResource(schemaURL, bytes.NewReader(schema)); err != nil {
			log.Fatal(err)
		}
	}

	schema, err := c.Compile("https://opentelemetry.io/otelconfig/opentelemetry_configuration.json")
	if err != nil {
		log.Fatalf("%#v", err)
	}

	v := decodeFile(configFile)
	expandedConfig := replaceVariables(v)

	if err = schema.Validate(expandedConfig); err != nil {
		if ve, ok := err.(*jsonschema.ValidationError); ok {
			log.Fatalf("%#v", ve)
		} else {
			log.Fatalf("%#v", err)
		}
	}

	return expandedConfig
}

func decodeFile(file string) interface{} {
	data, err := os.ReadFile(file)
	if err != nil {
		log.Fatal(err)
	}

	ext := filepath.Ext(file)
	if ext == ".yaml" || ext == ".yml" {
		return decodeYAML(file)
	}

	var v interface{}
	if err := json.Unmarshal(data, &v); err != nil {
		log.Fatalf("Invalid json file %s: %#v", file, err)
	}

	return v
}

func decodeYAML(file string) interface{} {
	var v interface{}

	body, err := os.ReadFile(file)
	if err != nil {
		log.Fatalf("Failed to read configuration file %s: %v", file, err)
	}

	reader := bytes.NewReader(body)
	dec := yaml.NewDecoder(reader)

	if err := dec.Decode(&v); err != nil {
		log.Fatalf("Invalid yaml file %s: %v", file, err)
	}

	return v
}

func jsonToFile(j interface{}, outFile string) {
	ext := filepath.Ext(outFile)
	if ext == ".yaml" || ext == ".yml" {
		yamlString, err := yaml.Marshal(j)
		err = os.WriteFile(outFile, yamlString, 0644)
		if err != nil {
			log.Fatalf("Unable to write output file: %v", err)
		}

		err = os.WriteFile(outFile, yamlString, 0644)
		if err != nil {
			log.Fatalf("Unable to write output file: %v", err)
		}
	} else if ext == ".json" {
		jsonString, err := json.MarshalIndent(j, "", "  ")
		if err != nil {
			log.Fatalf("Unable to convert to json: %v", err)
		}

		err = os.WriteFile(outFile, jsonString, 0644)
		if err != nil {
			log.Fatalf("Unable to write output file: %v", err)
		}
	} else {
		log.Fatalf("Unknown extension on output file %v", outFile)
	}
}

func replaceVariables(c interface{}) interface{} {
	expandedConfig := make(map[string]any)
	m, _ := c.(map[string]any)
	for k := range m {
		val := expandValues(m[k])
		expandedConfig[k] = val
	}

	return expandedConfig
}

func expandValues(value any) any {
	switch v := value.(type) {
	case string:
		if !strings.Contains(v, "${") || !strings.Contains(v, "}") {
			return v
		}

		return expandString(v)
	case []any:
		l := []any{}
		for _, e := range v {
			newElement := expandValues(e)
			l = append(l, newElement)
		}
		return l
	case map[string]any:
		newMap := make(map[string]any)

		for k, v := range v {
			updated := expandValues(v)
			newMap[k] = updated
		}

		return newMap
	}

	return value
}

// Replace environment variables ${EXAMPLE} with their value and continue to
// try replacing variables until there are no more, meaning ${EXAMPLE} could
// contain another variable ${ANOTHER_VARIABLE}. But stop after 100 iterations
// to prevent an infinite loop.
// This does not use os.ExpandVars in order to support defaults like ${VAR:default}
func expandString(s string) string {
	result := s
	for i := 0; i < 100; i++ {
		if !strings.Contains(result, "${") || !strings.Contains(result, "}") {
			break
		}

		closeIndex := strings.Index(result, "}")
		openIndex := strings.LastIndex(result[:closeIndex+1], "${")

		fullEnvVar := result[openIndex : closeIndex+1]
		envVar := result[openIndex+2 : closeIndex]

		maybeDefaultIndex := strings.Index(envVar, ":-")

		var newValue string
		if maybeDefaultIndex != -1 {
			d := envVar[maybeDefaultIndex+2:]
			envVar = envVar[:maybeDefaultIndex]
			newValue = os.Getenv(envVar)
			if strings.EqualFold(newValue, "") {
				newValue = d
			}
		} else {
			newValue = os.Getenv(envVar)
		}

		result = strings.ReplaceAll(result, fullEnvVar, newValue)
	}

	return result
}
