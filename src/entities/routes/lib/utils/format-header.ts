import { makeHeader } from "shared/index";

export const makeRouteHeader = (path?: string) => {
  if (path === "/") {
    path = "main";
  }
  if (path === "*") {
    path = "unexisting";
  }
  return makeHeader(path, "Unknown header");
};
