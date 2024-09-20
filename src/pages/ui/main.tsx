import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const TestComponent = ({ children }: PropsWithChildren) => {
  console.log("COMPONENTS RENDER ");
  return <div>TEST COMPONENT WITH CHILDREN {children}</div>;
};

const MainPage = ({ children }: PropsWithChildren) => {
  console.log("HELLO >>> MAINPAGE");
  return (
    <div>
      {children}
      Outlet : <Outlet />
      <Link to="/repetition">GO TO THE PROTECTED ROUTE</Link>
      <TestComponent>{children}</TestComponent>
    </div>
  );
};

export default MainPage;
