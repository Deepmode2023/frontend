import { RouteObject } from "react-router-dom";

declare global {}

type RouteStoreObjectType = Omit<RouteObject, "children" | "index"> & {
  isProtected: boolean;
  index?: boolean;
  children?: Array<RouteStoreObjectType>;
};

type RegistredRouteStoreObjectType = {
  isProtected: boolean;
  header: string;
  path: string | "index";
  children?: Array<RegistredRouteStoreObjectType>;
};

type RoutesStoreStateType = {
  registredRoutes: Array<RegistredRouteStoreObjectType>;
};

type RoutesStoreActionType = {
  addRegisteredRoute: (route: RouteStoreObjectType) => void;
  addRegisteredRoutes: (routes: Array<RouteStoreObjectType>) => void;
};
type RoutesStoreType = RoutesStoreActionType & RoutesStoreStateType;

export type {
  RouteStoreObjectType,
  RoutesStoreType,
  RegistredRouteStoreObjectType,
  RoutesStoreStateType,
  RoutesStoreActionType,
};
