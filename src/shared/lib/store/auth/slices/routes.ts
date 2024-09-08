import { ReactNode } from "react";
import { StateCreator } from "zustand";
import { DefaultRouteObjectType } from "../../../../lib/utils/generator-route";

type AddingRouteType = { isProtected: boolean } & Omit<
  DefaultRouteObjectType,
  "element"
>;

export interface IRoutesSliceState {
  routes: Array<DefaultRouteObjectType>;
  protectedRoutes: Array<string>;
  existingRoutes: Array<String>;
  addRoute: (route: AddingRouteType) => {
    route: Omit<AddingRouteType, "isProtected">;
    setElement: (element: ReactNode) => void;
  };
  addExistingRouteFromOut: (path: string) => void;
}

export const createRoutesSlice: StateCreator<IRoutesSliceState> = (set) => ({
  routes: [],
  protectedRoutes: [],
  existingRoutes: [],
  addRoute: ({ isProtected, index, ...route }) => ({
    route,
    setElement: (element) => {
      set(({ protectedRoutes, ...state }) => {
        if (state.existingRoutes.includes(route.path ?? "")) {
          return { ...state, protectedRoutes };
        }

        if (isProtected && route.path) {
          protectedRoutes.push(route.path);
        }

        const finalRoute = {
          ...route,
          element,
          index: index === true ? undefined : index,
        };

        return {
          routes: [...state.routes, finalRoute],
          protectedRoutes,
          addedRoutes: route.path
            ? [...state.existingRoutes, route.path]
            : state.existingRoutes,
        };
      });
    },
  }),
  addExistingRouteFromOut: (path) =>
    set((state) => ({
      ...state,
      existingRoutes: state.existingRoutes.concat(path),
    })),
});
