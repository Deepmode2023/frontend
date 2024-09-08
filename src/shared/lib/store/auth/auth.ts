import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRoutesSlice, IRoutesSliceState } from "./slices/routes";

type AuthStoreType = IRoutesSliceState;

export const AuthStore = create<AuthStoreType>()(
  devtools((...a) => ({
    ...createRoutesSlice(...a),
  }))
);

export type { AuthStoreType };
