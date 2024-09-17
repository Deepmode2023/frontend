import { describe, test, expect } from "bun:test";
import { getPath, getPaths } from "./object";
import mock from "../../mock/world-object";

describe("Total testing 'getPath', 'getPaths' ", () => {
  const result = "";

  test("... & with wierd searchedKey", () => {
    expect(
      getPath({
        searchKey: [],
        searchedObject: mock,
        withKey: false,
      })
    ).toBe(result);
    expect(
      getPath({ searchKey: undefined, searchedObject: mock, withKey: false })
    ).toBe(result);

    expect(
      getPath({ searchKey: null, searchedObject: mock, withKey: true })
    ).toBe(result);

    expect(
      getPath({ searchKey: NaN, searchedObject: mock, withKey: false })
    ).toBe(result);
  });

  test("... & with wierd searchedObject", () => {
    expect(
      getPath({ searchKey: "street", searchedObject: [], withKey: true })
    ).toBe(result);
    expect(
      getPath({
        searchKey: "street",
        searchedObject: "test",
        withKey: true,
      })
    ).toBe(result);
    expect(
      getPath({ searchKey: 122323, searchedObject: [], withKey: false })
    ).toBe(result);
  });
});

describe("Testing 'getPath' with diffecult mock object", () => {
  test("... & existing key in mock data and path with key", () => {
    const searchKey = "Cairo";
    const result = "Africa.Egypt.Cairo";
    expect(getPath({ searchKey, searchedObject: mock, withKey: true })).toBe(
      result
    );
  });

  test("... & existing the key inside deeply array with key", () => {
    const searchKey = "street";
    const result = "Africa.Egypt.Cairo.[0].street";

    expect(
      getPath({
        searchKey,
        searchedObject: mock,
        withKey: true,
      })
    ).toBe(result);

    expect(
      getPath({ searchKey, searchedObject: mock, withKey: false })
    ).toMatchSnapshot();
  });

  test("... & pass unexisting key inside deeply with key", () => {
    const searchKey = "streetsss";
    const result = "";

    expect(
      getPath({
        searchKey,
        searchedObject: mock,
        withKey: true,
      })
    ).toBe(result);
  });

  test("... & pass unexisting key inside deeply without key", () => {
    const searchKey = "streetsss";
    const result = "";

    expect(
      getPath({
        searchKey,
        searchedObject: mock,
        withKey: false,
      })
    ).toBe(result);
  });

  test("... & pass without key", () => {
    const searchKey = "street";
    const result = "Africa.Egypt.Cairo.[0]";

    expect(
      getPath({
        searchKey,
        searchedObject: mock,
        withKey: false,
      })
    ).toBe(result);

    expect(
      getPath({ searchKey, searchedObject: mock, withKey: false })
    ).toMatchSnapshot();
  });
});

describe("Testing 'getPaths' with diffecult mock object", () => {
  const slicedMock = mock.Africa.Egypt;
  test("... & existing key in mock data and path with key", () => {
    const searchKey = "street";
    const result = [
      "Cairo.[0].street",
      "Cairo.[1].street",
      "Alexandria.[0].street",
      "Alexandria.[1].street",
    ];
    expect(
      getPaths({ searchKey, searchedObject: slicedMock, withKey: true })
    ).toEqual(result);

    expect(
      getPaths({ searchKey, searchedObject: slicedMock, withKey: true })
    ).toMatchSnapshot();
  });

  test("... & existing key in mock data and path without key", () => {
    const searchKey = "street";
    const result = [
      "Cairo.[0]",
      "Cairo.[1]",
      "Alexandria.[0]",
      "Alexandria.[1]",
    ];
    expect(
      getPaths({ searchKey, searchedObject: slicedMock, withKey: false })
    ).toEqual(result);

    expect(
      getPaths({ searchKey, searchedObject: slicedMock, withKey: false })
    ).toMatchSnapshot();
  });

  test("... & pass unexisting key inside deeply with key", () => {
    const searchKey = "streetsss";
    const result = "";

    expect(
      getPath({
        searchKey,
        searchedObject: slicedMock,
        withKey: true,
      })
    ).toBe(result);
  });
});
