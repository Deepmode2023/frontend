import { ReactNode } from "react";
import type { RouteStoreObjectType } from "../../model/store";
import { v4 } from "uuid";

type GetDefaultRoutesParamsType = {
  ErrorBoundaryLayout: ReactNode;
  UnProtectedLayout: ReactNode;
  ProtectedLayout: ReactNode;
  UnExistingPage: ReactNode;
};

const getDefaultRoutes: (
  components: GetDefaultRoutesParamsType
) => Array<RouteStoreObjectType> = ({
  ErrorBoundaryLayout,
  UnProtectedLayout,
  UnExistingPage,
  ProtectedLayout,
}) => [
  {
    path: "/",
    errorElement: ErrorBoundaryLayout,
    isProtected: true,
    uniqKey: v4(),
    children: [
      {
        index: false,
        element: ProtectedLayout,
        uniqKey: v4(),
        isProtected: true,
      },
      {
        path: "unprt",
        element: UnProtectedLayout,
        uniqKey: v4(),
        isProtected: false,
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
