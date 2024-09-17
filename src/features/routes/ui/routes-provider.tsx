import {
  useEffect,
  PropsWithChildren,
  Fragment,
  useLayoutEffect,
  useState,
  lazy,
  memo,
} from "react";
import { useRoutes } from "features/routes";
import { ErrorBoundary, UnExistingPage } from "shared";
import { RouterProvider, Link, Outlet } from "react-router-dom";

export const RoutesProvider = ({ children }: PropsWithChildren) => {
  const { routes, isEmptyRoutes } = useRoutes({
    ErrorBoundaryLayout: (
      <div>
        HELLO ERROR BOUNDARY
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
    ),
    UnExistingPage: (
      <div>
        <UnExistingPage />
        <Outlet />
      </div>
    ),
    UnProtectedLayout: (
      <div>
        UNPROTECTED PAGE <Outlet />
      </div>
    ),
    ProtectedLayout: (
      <div>
        <Link to="/auth">GO TO AUTH</Link>PROTECTED PAGE
        <Outlet />
      </div>
    ),
    AuthPage: <div>Authentificate</div>,
  });

  if (isEmptyRoutes) {
    return <div>Loading ....</div>;
  }

  return (
    <RouterProvider
      router={routes!}
      fallbackElement={<div>Loading ....</div>}
    />
  );
};
