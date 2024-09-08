import { PropsWithChildren, useEffect } from "react";
import { MobileProvider } from "./context/mobile";
import { SnackProvider } from "entities/snackbar";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { AuthStore } from "shared/lib/store";
const authStore = createSelectorHooks(AuthStore);

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SnackProvider>
      <MobileProvider>{children}</MobileProvider>
    </SnackProvider>
  );
};
