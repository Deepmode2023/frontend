import {
  createContext,
  PropsWithChildren,
  useLayoutEffect,
  useState,
} from "react";
import { throttle } from "shared";

type ScreenVariantType = "MOBILE" | "MAIN";

interface IMobileContext {
  screen: ScreenVariantType;
  onChangeScreen: (screen: ScreenVariantType) => void;
}

function getScreenVariant(sreenWidth: number): ScreenVariantType {
  return sreenWidth <= 720 ? "MOBILE" : "MAIN";
}

const MobileContext = createContext<IMobileContext>({
  screen: "MAIN",
  onChangeScreen: () => {
    throw new Error("You dont pass onChangeScreen function inside context!");
  },
});

const MobileProvider = ({ children }: PropsWithChildren) => {
  const [screen, setChangeScreen] = useState<ScreenVariantType>(() => {
    return getScreenVariant(window.innerHeight);
  });

  useLayoutEffect(() => {
    const resizeHandler = throttle((event: UIEvent) => {
      const windowTarget = event.target as Window;
      setChangeScreen(getScreenVariant(windowTarget.innerWidth));
    }, 500);

    window.addEventListener("resize", resizeHandler);

    return function cleanUp() {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ screen, onChangeScreen: setChangeScreen }}>
      {children}
    </MobileContext.Provider>
  );
};

export { MobileProvider, MobileContext, getScreenVariant };
