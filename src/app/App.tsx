import { Providers } from "./providers";
import { Fragment, useMemo } from "react";
import { Route } from "react-router-dom";
import { AuthStore } from "shared/lib/store";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { defaultRoutes } from "./routes";
import { defaultRoute } from "shared";
import { UnExistingPage, ErrorBoundary } from "@/pages";

const authStore = createSelectorHooks(AuthStore);

import { BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  const extraRoutes = authStore().routes;

  const memoizedExtraRoutes = useMemo(() => {
    return extraRoutes.map((child, itter) => (
      <Fragment key={itter}>{defaultRoute(child)}</Fragment>
    ));
  }, [extraRoutes]);

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {defaultRoutes}
          {memoizedExtraRoutes}
          <Route path="*" element={<UnExistingPage />} />
        </Routes>
      </Router>
      <Providers />
    </ErrorBoundary>
  );
};

export default App;
