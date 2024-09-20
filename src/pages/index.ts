import { lazy } from "react";

const AuthorizationPage = lazy(() => import("./ui/authorization"));
const MainPage = lazy(() => import("./ui/main"));
const ErrorBoundary = lazy(() => import("./ui/error-boundary"));
const PageLoader = lazy(() => import("./ui/page-loader"));
const UnExistingPage = lazy(() => import("./ui/404"));

export {
  AuthorizationPage,
  MainPage,
  ErrorBoundary,
  PageLoader,
  UnExistingPage,
};

export { AppPage } from "./ui/app";
