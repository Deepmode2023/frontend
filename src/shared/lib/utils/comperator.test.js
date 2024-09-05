import { describe, test, expect } from "bun:test";
import { isEqual } from "./comperator";

describe("Cheching comperator isEqual", () => {
  test("... & with basic case", () => {
    const obj1 = { a: 10, b: 20 };
    const obj2 = { a: 11, b: 20 };

    expect(isEqual(obj1, obj2)).toBe(false);
    obj2.a = 10;
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test("... & test with string | number | null case", () => {
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual(1, 1)).toBe(true);

    expect(isEqual("hello", "Hello")).toBe(false);
    expect(isEqual("hello", "hello")).toBe(true);
  });
});
