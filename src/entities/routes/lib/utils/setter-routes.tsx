import type { RouteStoreObjectType } from "entities/routes/model/store";
import { RouteObject } from "react-router-dom";

type PlaceType =
  | "INDEX_MAIN_ROUTES"
  | "INDEX_PROTECTED_ROUTES"
  | "INDEX_UNPROTECTED_ROUTES";

export const INDEX_MAIN_ROUTES = 0;
export const INDEX_PROTECTED_ROUTES = 0;
export const INDEX_UNPROTECTED_ROUTES = 1;

type SetterRouteType = Omit<
  RouteStoreObjectType,
  "uniqKey" | "isProtected" | "children"
> & {
  children?: Array<RouteObject>;
};

const setterRoutes = (
  routes: Array<RouteStoreObjectType>,
  route: SetterRouteType,
  place: PlaceType
) => {
  const mainRoutes = routes[INDEX_MAIN_ROUTES];

  if (!mainRoutes || !mainRoutes.children) {
    throw new Error("Main routes or children are not defined.");
  }

  let protectedRoutes: RouteObject =
    mainRoutes.children[INDEX_PROTECTED_ROUTES];
  let unProtectedRoutes: RouteObject =
    mainRoutes.children[INDEX_UNPROTECTED_ROUTES];

  switch (place) {
    case "INDEX_PROTECTED_ROUTES": {
      if (!protectedRoutes) {
        protectedRoutes = { children: [] };
      }

      const updatedProtectedRoutes = {
        ...protectedRoutes,
        children: [...(protectedRoutes.children ?? []), route],
      };

      return routes.map((r, index) =>
        index === INDEX_MAIN_ROUTES
          ? {
              ...r,
              children: r.children?.map((child, childIndex) =>
                childIndex === INDEX_PROTECTED_ROUTES
                  ? updatedProtectedRoutes
                  : child
              ),
            }
          : r
      );
    }

    case "INDEX_UNPROTECTED_ROUTES": {
      if (!unProtectedRoutes) {
        unProtectedRoutes = { children: [] };
      }

      const updatedUnProtectedRoutes = {
        ...unProtectedRoutes,
        children: [...(unProtectedRoutes.children ?? []), route],
      };

      return routes.map((r, index) =>
        index === INDEX_MAIN_ROUTES
          ? {
              ...r,
              children: r.children?.map((child, childIndex) =>
                childIndex === INDEX_UNPROTECTED_ROUTES
                  ? updatedUnProtectedRoutes
                  : child
              ),
            }
          : r
      );
    }

    case "INDEX_MAIN_ROUTES":
      return [route, ...routes];

    default:
      return routes;
  }
};

export { setterRoutes };
