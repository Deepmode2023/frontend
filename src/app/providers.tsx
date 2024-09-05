import { PropsWithChildren, useEffect } from "react";
import { MobileProvider } from "./context/mobile";
import { SnackProvider, DisplayToastAdapter } from "entities/snackbar";

export const Providers = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    DisplayToastAdapter(
      { message: "HELLO", condition: "success", time: 5000 },
      5000
    );
  }, []);
  return (
    <SnackProvider>
      <MobileProvider>{children}</MobileProvider>
    </SnackProvider>
  );
};
