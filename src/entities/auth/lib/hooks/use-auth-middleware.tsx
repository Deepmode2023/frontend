import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useAuthMiddleware = () => {
  const location = useLocation();
  useEffect(() => {}, []);

  return {};
};

export { useAuthMiddleware };
