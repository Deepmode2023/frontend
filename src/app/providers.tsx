import { PropsWithChildren, useEffect } from "react";
import { MobileProvider } from "./context/mobile";
import { SnackProvider } from "entities/snackbar";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SnackProvider>
      <MobileProvider>{children}</MobileProvider>
    </SnackProvider>
  );
};
