import { SnackbarProvider } from "notistack";
import { PropsWithChildren, Fragment, lazy } from "react";
import { useSnackMessage } from "../lib/hooks/use-snack-message";
import { Message } from "./message";
import { ICONS } from "../config/constant";

const Snackbar = lazy(() => import("./snackbar"));

const SnackInitializer = () => {
  useSnackMessage(Message);
  return <Fragment />;
};

export const SnackProvider = ({ children }: PropsWithChildren) => (
  <SnackbarProvider
    maxSnack={5}
    anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    iconVariant={{
      error: ICONS("error").icon,
      success: ICONS("success").icon,
      warning: ICONS("warning").icon,
    }}
    Components={{
      error: Snackbar,
      success: Snackbar,
      warning: Snackbar,
    }}
  >
    <SnackInitializer />
    {children}
  </SnackbarProvider>
);
