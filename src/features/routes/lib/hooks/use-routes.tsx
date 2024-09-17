import { useLayoutEffect, useState, useMemo, memo, useEffect } from "react";
import {
  useRoutesStore,
  getDefaultRoutes,
  type GetDefaultRoutesParamsType,
} from "entities/routes";
import { createBrowserRouter } from "react-router-dom";
import { usePrevious } from "shared";

const useRoutes = (defaultProps: GetDefaultRoutesParamsType) => {
  const { storeRoutes, addRoutes } = useRoutesStore();
  const [routes, setRoutes] = useState<ReturnType<
    typeof createBrowserRouter
  > | null>(null);

  const { isNotEqual } = usePrevious(storeRoutes);

  useEffect(() => {
    addRoutes(getDefaultRoutes(defaultProps));
  }, []);

  useEffect(() => {
    if (storeRoutes.length > 0 && isNotEqual()) {
      setRoutes(createBrowserRouter(storeRoutes));
    }
  }, [storeRoutes]);

  return useMemo(() => {
    const isEmptyRoutes = !routes;
    return { routes, isEmptyRoutes };
  }, [routes]);
};

export { useRoutes };
