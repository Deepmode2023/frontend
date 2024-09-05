import { AuthorizationPage, MainPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { defaultRoute } from "./generator-route";

export const routes = createBrowserRouter([
  defaultRoute({ path: "/", element: <MainPage /> }),
  defaultRoute({ path: "/auth", element: <AuthorizationPage /> }),
]);
