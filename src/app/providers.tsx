import { PropsWithChildren } from "react";
import { MobileProvider } from "./context/mobile";

export const Providers = ({ children }: PropsWithChildren) => {
  return <MobileProvider>{children}</MobileProvider>;
};
