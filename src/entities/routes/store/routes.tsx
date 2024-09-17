import { devtools } from "zustand/middleware";
import { create } from "zustand";
import type {
  RoutesStoreType,
  RouteStoreObjectType,
  RegistredRouteStoreObjectType,
} from "../model/store";
import { makeRouteHeader } from "entities/routes";
import { RouteObject } from "react-router-dom";

const findRouteInRegisteredRoutes = (
  routes: RoutesStoreType["registredRoutes"],
  route: RouteStoreObjectType
) =>
  routes.find(({ path, uniqKey }) =>
    path ? route.path === path : route.uniqKey === uniqKey
  );

const createRegisterRoute = ({
  isProtected,
  children = [],
  path = "index",
  uniqKey,
}: RouteStoreObjectType): Array<RegistredRouteStoreObjectType> => {
  let newRegistredRoutes: Array<RegistredRouteStoreObjectType> = [
    { header: makeRouteHeader(path), isProtected, uniqKey, path },
  ];

  const childRoutes = children.flatMap((childRoute) =>
    createRegisterRoute(childRoute)
  );

  return [...newRegistredRoutes, ...childRoutes];
};

const createRoute = ({
  isProtected,
  path = "index",
  index = false,
  children = [],
  uniqKey,
  ...route
}: RouteStoreObjectType): RouteObject => {
  let newChildrenRoute: Array<RouteObject> | undefined = undefined;
  if (index && children.length > 0) {
    newChildrenRoute = children.flatMap((childRoute) =>
      createRoute(childRoute)
    );
  }

  return { ...route, children: newChildrenRoute, index } as RouteObject;
};

export const useRoutesStore = create<RoutesStoreType>()(
  devtools((set, get) => ({
    routes: [],
    registredRoutes: [],
    addRoutes: (routes) => {
      const registredRoutes = get().registredRoutes;
      const newRegistredRoutes: Array<RegistredRouteStoreObjectType> = [];
      const newRoutes: Array<RouteObject> = routes.reduce<
        RoutesStoreType["routes"]
      >((acc, route) => {
        const foundRegisterRoute = findRouteInRegisteredRoutes(
          registredRoutes,
          route
        );
        if (!foundRegisterRoute) {
          newRegistredRoutes.push(...createRegisterRoute(route));
          return [...acc, createRoute(route)];
        }
        return acc;
      }, []);

      set((state) => ({
        registredRoutes: [...state.registredRoutes, ...newRegistredRoutes],
        routes: [...state.routes, ...newRoutes],
      }));
    },
    addRoute: (route) => {},
  }))
);
