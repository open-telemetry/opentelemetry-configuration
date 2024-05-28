package main

import (
	"os"
	"strings"
	"testing"
)

func TestExpandString(t *testing.T) {
	e1 := "VARIABLE1"
	v1 := "${VARIABLE2}"

	e2 := "VARIABLE2"
	v2 := "value2"

	e3 := "VARIABLE3"
	v3 := "VARIABLE1"

	os.Setenv(e1, v1)
	os.Setenv(e2, v2)
	os.Setenv(e3, v3)

	t.Cleanup(func() {
		os.Unsetenv(e1)
	})

	s := expandString("${VARIABLE1} World")
	if !strings.Contains(s, v2) {
		t.Errorf("String \"%v\" does not contain value %v", s, v2)
	}

	s = expandString("${VARIABLE1}${VARIABLE2}")
	if !strings.Contains(s, "value2value2") {
		t.Errorf("String \"%v\" does not contain value %v", s, v2)
	}

	s = expandString("${${VARIABLE3}}")
	if !strings.Contains(s, v2) {
		t.Errorf("String \"%v\" does not contain value %v", s, v2)
	}

	s = expandString("${VARIABLE2")
	if !strings.Contains(s, "${VARIABLE2") {
		t.Errorf("String \"%v\" should still contains ${VARIABLE2", s)
	}

	s = expandString("${UNDEFINED:-mydefault}")
	if !strings.EqualFold(s, "mydefault") {
		t.Errorf("String \"%v\" should be mydefault", s)
	}
}
