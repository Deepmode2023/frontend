import { makeHeader } from "shared/index";

export const formatHeader = (path?: string) => {
  if (path === "/") {
    path = "main";
  }
  return makeHeader(path, "Unknown header");
};
