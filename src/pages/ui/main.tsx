import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const MainPage = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      Outlet : <Outlet />
      <div className="border border-red-900 flex flex-col">
        <Link to="/repetition">REPETITION</Link>
        <Link to="/test1">TEST1</Link>
      </div>
    </div>
  );
};

export default MainPage;
