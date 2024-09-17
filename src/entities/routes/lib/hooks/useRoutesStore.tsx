import { useRoutesStore as store } from "../../store/routes";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

const routesStore = createSelectorHooks(store);

export const useRoutesStore = () => {
  const { addRoutes, addRoute, routes, registredRoutes } = routesStore();

  return { addRoutes, addRoute, storeRoutes: routes, registredRoutes };
};
