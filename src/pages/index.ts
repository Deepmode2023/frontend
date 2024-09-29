import { lazy } from "react";

const AuthorizationMobilePage = lazy(() => import("./ui/authorization.mobile"));
const MainPage = lazy(() => import("./ui/main"));
const ErrorBoundary = lazy(() => import("./ui/error-boundary"));
const PageLoader = lazy(() => import("./ui/page-loader"));
const UnExistingPage = lazy(() => import("./ui/404"));

export {
  AuthorizationMobilePage,
  MainPage,
  ErrorBoundary,
  PageLoader,
  UnExistingPage,
};

export { AppPage } from "./ui/app";
