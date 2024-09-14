import { expect, describe, test } from "bun:test";
import { makeHeader } from "./header";

describe("Make test makeHeader function", () => {
  const defaultValue = "Default Value";
  test("... & pass correct arument", () => {
    expect(makeHeader("some-header")).toBe("Some Header");
    expect(makeHeader("some-greatful123")).toBe("Some Greatful 123");
  });

  test("... & pass any argument other than a string", () => {
    expect(makeHeader(undefined)).toBe("Default Header");
    expect(makeHeader(null)).toBe("Default Header");
    expect(makeHeader(123124)).toBe("Default Header");
  });

  test("... & checking second argument 'defaultValue'", () => {
    expect(makeHeader(undefined, defaultValue)).toBe(defaultValue);
  });
});
