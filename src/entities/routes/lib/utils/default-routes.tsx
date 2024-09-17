import { ReactNode } from "react";
import type { RouteStoreObjectType } from "../../model/store";
import { v4 } from "uuid";

export type GetDefaultRoutesParamsType = {
  ErrorBoundaryLayout: ReactNode;
  UnProtectedLayout: ReactNode;
  ProtectedLayout: ReactNode;
  UnExistingPage: ReactNode;
  AuthPage: ReactNode;
};

const getDefaultRoutes: (
  components: GetDefaultRoutesParamsType
) => Array<RouteStoreObjectType> = ({
  ErrorBoundaryLayout,
  UnProtectedLayout,
  UnExistingPage,
  ProtectedLayout,
  AuthPage,
}) => [
  {
    path: "/",
    errorElement: ErrorBoundaryLayout,
    isProtected: true,
    uniqKey: v4(),
    children: [
      {
        path: "prt",
        element: ProtectedLayout,
        uniqKey: v4(),
        isProtected: true,
      },
      {
        path: "unprt",
        element: UnProtectedLayout,
        uniqKey: v4(),
        isProtected: false,
        children: [
          {
            path: "auth",
            isProtected: false,
            uniqKey: v4(),
            element: AuthPage,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    isProtected: false,
    uniqKey: v4(),
    element: UnExistingPage,
  },
];

export { getDefaultRoutes };
