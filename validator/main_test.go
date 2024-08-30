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
		os.Unsetenv(e2)
		os.Unsetenv(e3)
	})

	// variables only replaced once so result should be the string "${VARIABLE2} World"
	s := expandString("${VARIABLE1} World")
	expected := "${VARIABLE2} World"
	if !strings.EqualFold(s, expected) {
		t.Errorf("String \"%v\" is not equal to \"%v\"", s, expected)
	}

	s = expandString("${VARIABLE2}")
	if !strings.EqualFold(s, v2) {
		t.Errorf("String \"%v\" does not equal %v", s, v2)
	}

	s = expandString("${env:VARIABLE2}")
	if !strings.EqualFold(s, v2) {
		t.Errorf("String \"%v\" does not equal %v", s, v2)
	}

	// variables nested in a variable declaration
	s = expandString("${${VARIABLE3}}")
	if !strings.Contains(s, "${VARIABLE1}") && !strings.Contains(s, "value2") {
		t.Errorf("String \"%v\" is not equal to \"${%v}\"", s, v3)
	}

	// variable with no ending bracket
	s = expandString("${VARIABLE2")
	if !strings.EqualFold(s, "${VARIABLE2") {
		t.Errorf("String \"%v\" should still contains ${VARIABLE2", s)
	}

	// replace undefined variable with default
	s = expandString("${UNDEFINED:-mydefault}")
	if !strings.EqualFold(s, "mydefault") {
		t.Errorf("String \"%v\" should be mydefault", s)
	}

	// replace undefined variable with default
	s = expandString("${env:UNDEFINED:-mydefault}")
	if !strings.EqualFold(s, "mydefault") {
		t.Errorf("String \"%v\" should be mydefault", s)
	}
	
	// replace 2 undefined variables with their particular defaults
	s = expandString("${UNDEFINED:-firstdefault} ${UNDEFINED:-seconddefault}")
	if !strings.EqualFold(s, "firstdefault seconddefault") {
		t.Errorf("String \"%s\" should be \"firstdefault seconddefault\"", s)
	}
}
