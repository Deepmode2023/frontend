import React, { PropsWithChildren } from "react";
import { RoutesProvider } from "features/routes";
import { Link } from "react-router-dom";

const MainPage = ({ children }: PropsWithChildren) => {
  return (
    <RoutesProvider>
      <div>Hello main</div>
      {children}
      <Link to="/unprt/auth">GO TO THE PROTECTED ROUTE</Link>
    </RoutesProvider>
  );
};

export default MainPage;
