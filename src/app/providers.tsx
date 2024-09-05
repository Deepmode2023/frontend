import { PropsWithChildren, Fragment } from "react";
import { MobileProvider } from "./context/mobile";
import { SnackProvider } from "entities/snackbar";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <RouterProvider router={routes} />
      <SnackProvider>
        <MobileProvider>{children}</MobileProvider>
      </SnackProvider>
    </Fragment>
  );
};
