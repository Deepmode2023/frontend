import { Component, useEffect, useLayoutEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { createSelectorFunctions } from "auto-zustand-selectors-hook";
import { AuthStore } from "shared/lib/store";

const authStore = createSelectorFunctions(AuthStore);

const AuthLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return <Outlet />;
};

export { AuthLayout };
