import { lazy } from "react";
import PageLoader from "./ui/page-loader";

const UnExistingPage = lazy(() => import("./ui/404"));
const AuthorizationPage = lazy(() => import("./ui/authorization"));
const MainPage = lazy(() => import("./ui/main"));
const ErrorPage = lazy(() => import("./ui/error"));
const ErrorBoundary = lazy(() => import("./ui/error-boundary"));

export {
  AuthorizationPage,
  MainPage,
  PageLoader,
  ErrorPage,
  UnExistingPage,
  ErrorBoundary,
};
