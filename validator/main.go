package main

import (
	"bytes"
	"context"
	"embed"
	"encoding/json"
	jsonschema "github.com/santhosh-tekuri/jsonschema/v5"
	"github.com/urfave/cli/v3"
	yaml "gopkg.in/yaml.v3"

	"log"
	"net/url"
	"os"
	"path/filepath"
	k8syaml "sigs.k8s.io/yaml"
	"strconv"
	"strings"
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

			outFile := cmd.String("output")
			ext := validateOutputOption(outFile)

			yaml := validateConfiguration(configFilePath, ext)

			if outFile != "" {
				toFile(yaml, outFile)
			}

			return nil
		}

		return nil
	}
}

func validateOutputOption(outFile string) string {
	if outFile != "" {				
		ext := filepath.Ext(outFile)
		if !isYamlExt(ext) && !isJsonExt(ext) {
			log.Fatalf("Unknown extension on output file %v", outFile)
		}

		err := os.MkdirAll(filepath.Dir(outFile), 0700)
		if err != nil {
			log.Fatalf("Unable to create dir for output file %s: %+v", outFile, err)
		}

		return ext
	}

	return ""
}

func validateConfiguration(configFile string, outfileExt string) []byte {
	schemaFiles, err := schemaFS.ReadDir("schema")
	if err != nil {
		log.Fatal(err)
	}

	c := jsonschema.NewCompiler()

	for _, file := range schemaFiles {
		schemaURL, err := url.JoinPath("https://opentelemetry.io/otelconfig/", file.Name())
		if err != nil {
			log.Fatal(err)
		}
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

	expandedConfig, outFile := decodeFile(configFile, outfileExt)

	if err = schema.Validate(expandedConfig); err != nil {
		if ve, ok := err.(*jsonschema.ValidationError); ok {
			log.Fatalf("%+v", ve)
		} else {
			log.Fatalf("%+v", err)
		}
	}

	return outFile
}

func decodeFile(configFile string, outfileExt string) (interface{}, []byte) {
	data, err := os.ReadFile(configFile)
	if err != nil {
		log.Fatal(err)
	}

	var j []byte
	var d []byte

	ext := filepath.Ext(configFile)
	if isYamlExt(ext) {
		y := decodeYaml(configFile)
		replaceYamlVariables(&y)

		var u interface{}
		err = y.Decode(&u)
		if err != nil {
			log.Fatal(err)
		}

		var jsonInterface interface{}
		if len(y.Content) > 0 {
			d, err = yaml.Marshal(&y.Content[0])
			if err != nil {
				log.Fatal(err)
			}

			j, err = k8syaml.YAMLToJSON(d)
			if err != nil {
				log.Fatalf("Error encoding yaml to json for validation: %+v", err)
			}

			if err := json.Unmarshal(j, &jsonInterface); err != nil {
				log.Fatalf("Invalid json file from yaml file %s: %+v", configFile, err)
			}
		}

		toWrite := convertYamlNode(y, outfileExt)

		return jsonInterface, toWrite
	}

	var v interface{}
	if err := json.Unmarshal(data, &v); err != nil {
		log.Fatalf("Invalid json file %s: %#v", configFile, err)
	}

	expandedConfig, b := replaceJsonVariables(v)

	toWrite := convertJsonBytes(b, outfileExt)

	return expandedConfig, toWrite
}

func isYamlExt(ext string) bool {
	return ext == ".yaml" || ext == ".yml"
}

func isJsonExt(ext string) bool {
	return ext == ".json"
}

func convertYamlNode(n yaml.Node, ext string) []byte {
	d, err := yaml.Marshal(&n.Content[0])
	if err != nil {
		log.Fatalf("Error marshalling yaml: %+v", err)
	}

	if isJsonExt(ext) {
		j, err := k8syaml.YAMLToJSON(d)
		if err != nil {
			log.Fatalf("Error converting yaml to json: %+v", err)
		}

		return j
	}

	return d
}

func convertJsonBytes(jsonBytes []byte, ext string) []byte {
	if isYamlExt(ext) {
		b, _ := k8syaml.JSONToYAML(jsonBytes)
		return b
	}

	return jsonBytes
}

func decodeYaml(file string) yaml.Node {
	body, err := os.ReadFile(file)
	if err != nil {
		log.Fatalf("Failed to read configuration file %s: %v", file, err)
	}

	var node yaml.Node
	if err := yaml.Unmarshal([]byte(body), &node); err != nil {
		log.Fatalf("Unable to parse config file %s: %+v", file, err)
	}

	return node
}

func toFile(jsonBytes []byte, outFile string) {
	err := os.WriteFile(outFile, jsonBytes, 0644)
	if err != nil {
		log.Fatalf("Unable to write output file: %v", err)
	}
}

func replaceYamlVariables(y *yaml.Node) interface{} {
	if y.Kind == yaml.DocumentNode {
		l := len(y.Content)
		for i := 0; i < l; i++ {
			n := y.Content[i]
			handleNode(n)
		}
	}

	return y
}

func handleNode(n *yaml.Node) {
	if n.Kind == yaml.MappingNode {
		handleMappingNode(n)
	} else if n.Kind == yaml.SequenceNode {
		handleSequenceNode(n)
	} else if n.Kind == yaml.ScalarNode {
		handleScalarNode(n)
	}
}

func handleMappingNode(c *yaml.Node) {
	lenMap := len(c.Content)

	// map is a flat list. every other element is a value
	for j := 1; j < lenMap; j += 2 {
		s := c.Content[j]
		handleNode(s)
	}
}

func handleSequenceNode(c *yaml.Node) {
	lenMap := len(c.Content)
	for j := 0; j < lenMap; j++ {
		s := c.Content[j]
		handleNode(s)
	}
}

func replaceJsonVariables(c interface{}) (interface{}, []byte) {
	expandedConfig := make(map[string]any)

	m, _ := c.(map[string]any)
	for k := range m {
		val := expandJsonValues(m[k])
		expandedConfig[k] = val
	}
	b, err := json.Marshal(expandedConfig)
	if err != nil {
		log.Fatalf("json.Marshal: %+v", err)
	}

	y, err := k8syaml.JSONToYAML(b)
	if err != nil {
		log.Fatalf("Error converting json result to yaml: %+v", err)
	}

	return expandedConfig, y
}

func expandJsonValues(value interface{}) any {
	switch v := value.(type) {
	case string:
		if !strings.Contains(v, "${") || !strings.Contains(v, "}") {
			return v
		}

		return expandString(v)
	case []any:
		l := []any{}
		for _, e := range v {
			newElement := expandJsonValues(e)
			l = append(l, newElement)
		}
		return l
	case map[string]any:
		newMap := make(map[string]any)

		for k, v := range v {
			updated := expandJsonValues(v)
			newMap[k] = updated
		}

		return newMap
	}

	return value
}

func handleScalarNode(n *yaml.Node) {
	// only a string type can have variable replacement
	// even if it can turn into another type
	if n.Tag == "!!str" {
		v := n.Value
		if !strings.Contains(v, "${") || !strings.Contains(v, "}") {
			return
		}

		newValue := expandString(v)
		n.Value = newValue

		// Otel Configuration File Spec defines supported values
		// for converting environment variables to types as being
		// booleans, integers and floats. Here we check if the
		// value cleanly parses to one of those types. If it does
		// and the value isn't quoted style then we set the Style to
		// TaggedStyle and set the tag to the appropriate type. But
		// only if the style is already TaggedStyle or no style.
		// Anything else means it is explicitly a string.
		if n.Style == 0 || n.Style == yaml.TaggedStyle {
			if newValue == "" {
				// be sure tag and style are empty for a null value so we get
				// quoted empty string
				n.Style = 0
				n.Tag = ""
			} else if _, err := strconv.ParseBool(newValue); err == nil {
				n.Style = yaml.TaggedStyle
				n.Tag = "!!bool"
			} else if _, err := strconv.Atoi(newValue); err == nil {
				n.Style = yaml.TaggedStyle
				n.Tag = "!!int"
			} else if _, err := strconv.ParseFloat(newValue, 64); err == nil {
				n.Style = yaml.TaggedStyle
				n.Tag = "!!float"
			}
		}
	}

}

// Replace environment variables, like ${EXAMPLE}, with their value.
// This does not use `os.ExpandVars` in order to support defaults
// for missing variables, ${VAR:-default}
func expandString(s string) string {
	allVars := findAllVars(s)
	for k, v := range allVars {
		if v == nil {
			s = strings.ReplaceAll(s, k, "")
		} else {
			return v.(string)
		}

	}

	return s
}

func findAllVars(s string) map[string]interface{} {
	result := make(map[string]interface{})
	lenS := len(s)

	var substr string
	for i := 0; i < lenS; {
		substr = s[i:lenS]

		if !strings.Contains(substr, "${") || !strings.Contains(substr, "}") {
			return result
		}

		closeIndex := strings.Index(substr, "}")
		openIndex := strings.LastIndex(substr[:closeIndex+1], "${")

		fullEnvVar := substr[openIndex : closeIndex+1]
		envVar := substr[openIndex+2 : closeIndex]

		maybeDefaultIndex := strings.Index(envVar, ":-")

		var newValue interface{}
		var isSet bool
		if maybeDefaultIndex != -1 {
			d := envVar[maybeDefaultIndex+2:]
			envVar = envVar[:maybeDefaultIndex]
			newValue, isSet = os.LookupEnv(envVar)
			if !isSet {
				newValue = d
			}
		} else {
			newValue, isSet = os.LookupEnv(envVar)
			if !isSet {
				newValue = nil
			}
		}

		result[fullEnvVar] = newValue

		i += closeIndex + 1
	}

	return result
}
