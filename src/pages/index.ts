import { lazy } from "react";
import PageLoader from "./ui/page-loader";

const ErrorPage = lazy(() => import("./ui/404"));
const AuthorizationPage = lazy(() => import("./ui/authorization"));
const MainPage = lazy(() => import("./ui/main"));

export { AuthorizationPage, MainPage, PageLoader, ErrorPage };
