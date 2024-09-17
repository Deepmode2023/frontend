import { lazy } from "react";

const AuthorizationPage = lazy(() => import("./ui/authorization"));
const MainPage = lazy(() => import("./ui/main"));

export { AuthorizationPage, MainPage };
