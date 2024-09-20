import { useRoutesStore as store } from "../../store/routes";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

const routesStore = createSelectorHooks(store);

export const useRoutesStore = () => {
  const { addRegisteredRoute, addRegisteredRoutes, registredRoutes } =
    routesStore();

  return { addRegisteredRoute, addRegisteredRoutes, registredRoutes };
};
