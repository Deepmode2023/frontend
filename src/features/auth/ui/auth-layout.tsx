import { Component, useEffect, useLayoutEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { createSelectorFunctions } from "auto-zustand-selectors-hook";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      PAGES AUTHLAYOUT
      <Outlet />
    </div>
  );
};

export default AuthLayout;
