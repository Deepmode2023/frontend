import { RouteObject } from "react-router-dom";

declare global {}

type RouteStoreObjectType = Omit<RouteObject, "children" | "index"> & {
  isProtected: boolean;
  index?: boolean;
  uniqKey: number | string;
  children?: Array<RouteStoreObjectType>;
};

type RegistredRouteStoreObjectType = {
  isProtected: boolean;
  uniqKey: number | string;
  header: string;
  path: string | "index";
};

type RoutesStoreStateType = {
  routes: Array<RouteObject>;
  registredRoutes: Array<RegistredRouteStoreObjectType>;
};

type RoutesStoreActionType = {
  addRoute: (route: RouteStoreObjectType) => void;
  addRoutes: (routes: Array<RouteStoreObjectType>) => void;
};
type RoutesStoreType = RoutesStoreActionType & RoutesStoreStateType;

export type {
  RouteStoreObjectType,
  RoutesStoreType,
  RegistredRouteStoreObjectType,
  RoutesStoreStateType,
  RoutesStoreActionType,
  RoutesStoreType,
};
