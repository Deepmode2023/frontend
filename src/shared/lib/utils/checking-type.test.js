import { test, expect, describe } from "bun:test";
import { isArray, isObject } from "./checking-type";

test("Checking function 'isArray'", () => {
  expect(isArray([])).toBe(true);
  expect(isArray({})).toBe(false);
  expect(isArray("sldflsd")).toBe(false);
  expect(isArray(123123)).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray(undefined)).toBe(false);
  expect(isArray(NaN)).toBe(false);
});

test("Checking function 'isObject'", () => {
  expect(isObject([])).toBe(false);
  expect(isObject({})).toBe(true);
  expect(isObject("sldflsd")).toBe(false);
  expect(isObject(123123)).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(NaN)).toBe(false);
});
