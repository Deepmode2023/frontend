import { devtools } from "zustand/middleware";
import { create } from "zustand";
import type { RoutesStoreType } from "../model/store";

export const useRoutesStore = create<RoutesStoreType>()(
  devtools((set, get) => ({
    routes: [],
    registredRoutes: [],
    addRoute: (route) => {
      set((state) => {
        return state;
      });
    },
  }))
);
