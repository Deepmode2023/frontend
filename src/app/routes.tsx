import { AuthorizationPage, MainPage } from "@/pages";
import { AuthLayout } from "entities/auth";
import { defaultRoute } from "shared";

export const defaultRoutes = defaultRoute({
  path: "/",
  element: <AuthLayout />,
  withErrorPage: true,
  isLazy: false,
  children: [
    {
      element: <MainPage />,
      index: true,
      uniqKey: 1,
    },
    {
      path: "auth",
      element: <AuthorizationPage />,
      uniqKey: 2,
    },
  ],
});
