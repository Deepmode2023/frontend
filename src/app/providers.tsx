import { PropsWithChildren, useEffect } from "react";
import { MobileProvider } from "./context/mobile";
import { SnackProvider } from "entities/snackbar";
import { AuthNavbarProvider } from "entities/auth";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AuthNavbarProvider>
      <SnackProvider>
        <MobileProvider>{children}</MobileProvider>
      </SnackProvider>
    </AuthNavbarProvider>
  );
};
