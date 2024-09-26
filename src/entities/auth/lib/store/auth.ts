import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IAuthStore } from "../../model/user";

export const useAuthStore = create<IAuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        token: null,
        refreshToken: null,
        addAuthorization: (user, token, refreshToken) =>
          set((state) => ({ token: token })),
      }),
      {
        name: import.meta.env.VITE_LOCALSTORAGE_AUTH_KEY!,
        partialize: ({ token }) => ({ token }),
      }
    )
  )
);
