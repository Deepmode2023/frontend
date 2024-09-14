import { Providers } from "./providers";
import { Outlet, Route, RouteObject, Link } from "react-router-dom";
import { UnExistingPage, ErrorBoundary } from "@/pages";

import {
  BrowserRouter as Router,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthLayout } from "features/auth";
import { useEffect, useState } from "react";

const MainPage = () => {
  return (
    <>
      <div>
        TOP LEVEL LAYOUT <Outlet />
      </div>
      <Link to="/help">CLICK TO HELP</Link>
    </>
  );
};

const App = () => {
  const [routes, setRoutes] = useState<any>([]);

  return (
    <ErrorBoundary>
      <RouterProvider router={createBrowserRouter(routes)} />
      {/* <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            {[]}
          </Route>
          <Route path="*" element={<UnExistingPage />} />
        </Routes>
      </Router> */}

      <Providers />
    </ErrorBoundary>
  );
};

export default App;
