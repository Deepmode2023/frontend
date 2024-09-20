import { Fragment, PropsWithChildren, memo, useEffect } from "react";
import { useAuthStore } from "entities/auth";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

const authStore = createSelectorHooks(useAuthStore);

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { token, addAuthorization } = authStore();
  useEffect(() => {
    addAuthorization(undefined, "tokenfordeep", "skdfksdfk");
  }, []);
  return <Fragment>{children}</Fragment>;
};

export { ProtectedRoute };
