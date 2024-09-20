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
) => routes.find(({ path }) => route.path === path);

const createRegisterRoute = ({
  isProtected,
  children = [],
  path = "index",
}: RouteStoreObjectType): RegistredRouteStoreObjectType => {
  let newRegistredRoutes: RegistredRouteStoreObjectType = {
    header: makeRouteHeader(path),
    isProtected,
    path,
  };

  const childRoutes = children.flatMap((childRoute) =>
    createRegisterRoute(childRoute)
  );

  return { ...newRegistredRoutes, children: childRoutes };
};

export const useRoutesStore = create<RoutesStoreType>()(
  devtools((set, get) => ({
    registredRoutes: [],
    addRegisteredRoutes: (routes) => {
      const newRegistredRoutes: Array<RegistredRouteStoreObjectType> =
        routes.reduce<RegistredRouteStoreObjectType[]>((acc, route) => {
          const foundedRegisterRoute = findRouteInRegisteredRoutes(
            get().registredRoutes,
            route
          );

          if (!foundedRegisterRoute) {
            return [...acc, createRegisterRoute(route)];
          }

          return acc;
        }, [] as RegistredRouteStoreObjectType[]);

      set((state) => ({
        registredRoutes: [...state.registredRoutes, ...newRegistredRoutes],
      }));
    },
    addRegisteredRoute: (route) => {},
  }))
);
