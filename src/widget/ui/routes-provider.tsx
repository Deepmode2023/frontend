import { PropsWithChildren, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";

type RoutesProviderPropsType = {
  AuthPage: ReactNode;
  ErrorBoundary: (props: PropsWithChildren) => JSX.Element;
  UnExistingPage: ReactNode;
  MainPage: ReactNode;
  RepetitionPage: ReactNode;
};

export const RoutesProvider = ({
  AuthPage,
  ErrorBoundary,
  MainPage,
  RepetitionPage,
  UnExistingPage,
}: RoutesProviderPropsType) => (
  <ErrorBoundary>
    <Routes>
      <Route path="/" element={<ProtectedRoute>{MainPage}</ProtectedRoute>}>
        <Route
          path="repetition"
          element={<ProtectedRoute>{RepetitionPage}</ProtectedRoute>}
        />
      </Route>
      <Route path="/signin" element={AuthPage} />
      <Route path="*" element={UnExistingPage} />
    </Routes>
  </ErrorBoundary>
);
