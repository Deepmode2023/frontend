import {
  setterRoutes,
  INDEX_MAIN_ROUTES,
  INDEX_PROTECTED_ROUTES,
  INDEX_UNPROTECTED_ROUTES,
} from "./setter-routes";
import { test, describe, expect } from "bun:test";
import { v4 } from "uuid";

const routes = [
  {
    path: "/",
    errorElement: <div>Error</div>,
    isProtected: true,
    uniqKey: v4(),
    children: [
      {
        index: false,
        element: <div>Protected page</div>,
        uniqKey: v4(),
        isProtected: true,
      },
      {
        path: "unprt",
        element: <div>Unprotected page</div>,
        uniqKey: v4(),
        isProtected: false,
      },
    ],
  },
  {
    path: "*",
    isProtected: false,
    uniqKey: v4(),
    element: <div>Unexisting page</div>,
  },
];

describe("Checking setter-routes function", () => {
  test("... & with protected route data", () => {
    const route = { path: "test", element: <div>TEST PAGE</div> };
    const setterResult = setterRoutes(routes, route, "INDEX_PROTECTED_ROUTES");

    expect(
      setterResult[INDEX_MAIN_ROUTES].children[INDEX_PROTECTED_ROUTES].children
    ).toEqual([route]);
    expect(setterResult[1].path).toEqual("*");
  });
  test("... & with unprotected route data", () => {
    const route = { path: "test", element: <div>TEST PAGE</div> };
    const setterResult = setterRoutes(
      routes,
      route,
      "INDEX_UNPROTECTED_ROUTES"
    );

    expect(
      setterResult[INDEX_MAIN_ROUTES].children[INDEX_UNPROTECTED_ROUTES]
        .children
    ).toEqual([route]);
    expect(setterResult[1].path).toEqual("*");
  });

  test("... & with main route data", () => {
    const route = { path: "test", element: <div>TEST PAGE</div> };
    const setterResult = setterRoutes(routes, route, "INDEX_MAIN_ROUTES");

    expect(setterResult.length).toBe(3);
    expect(setterResult[2].path).toEqual("*");
  });
});
