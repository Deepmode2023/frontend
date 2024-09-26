import { Fragment, PropsWithChildren, memo, useLayoutEffect } from "react";
import { useAuthStore } from "entities/auth";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { useNavigate } from "react-router-dom";

const authStore = createSelectorHooks(useAuthStore);

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const token = authStore().token;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!token) return navigate("/signin", { replace: true });
  }, [token]);
  return <Fragment>{children}</Fragment>;
};

export { ProtectedRoute };
