import { describe, test, expect } from "bun:test";
import { insertFieldToObject } from "./setter";

const testingObj = { a: 10, z: 20 };

describe("Testing 'grebObject' function", () => {
  test("... & with string value", () => {
    const newObj = insertFieldToObject({
      obj: testingObj,
      insertedKey: "z",
      value: 10,
    });
    expect(newObj).toEqual({ a: 10, z: 10 });
  });

  test("... & with obj value", () => {
    const newObj = insertFieldToObject({
      obj: testingObj,
      insertedKey: "z",
      value: { y: { c: 10 } },
    });
    expect(newObj).toEqual({ a: 10, z: { y: { c: 10 } } });
  });

  test("... & with incorrect value", () => {
    const newObj = insertFieldToObject({
      obj: testingObj,
      insertedKey: "zsdfsdf",
      value: { y: { c: 10 } },
    });

    expect(newObj).toEqual({ a: 10, z: 20 });
  });
  test("... & with array obj param", () => {
    const arr = [testingObj, testingObj];

    const newObj = insertFieldToObject({
      obj: arr,
      insertedKey: "z",
      value: { y: { c: 10 } },
    });

    expect(newObj).toEqual([
      { a: 10, z: { y: { c: 10 } } },
      { a: 10, z: 20 },
    ]);
  });
});
