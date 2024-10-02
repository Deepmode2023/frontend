import { PropsWithChildren, useEffect } from "react";
import { MobileProvider } from "./context/mobile";
import { SnackProvider } from "entities/snackbar";
import { AuthNavbarProvider } from "entities/auth";
import { ThemeMUIProvider } from "./theme-mui-provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeMUIProvider>
      <AuthNavbarProvider>
        <SnackProvider>
          <MobileProvider>{children}</MobileProvider>
        </SnackProvider>
      </AuthNavbarProvider>
    </ThemeMUIProvider>
  );
};
