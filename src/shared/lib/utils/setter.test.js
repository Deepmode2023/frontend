import { describe, test, expect } from "bun:test";
import { grepObject } from "./setter";

const testingObj = { a: 10, z: 20 };

describe("Testing 'grebObject' function", () => {
  test("... & with string arguments", () => {
    expect(grepObject(testingObj, "z")).toEqual({ z: 20 });
  });
});

// describe("Testing 'setter' function", () => {
//   test("... & with string arguments", () => {});
// });
