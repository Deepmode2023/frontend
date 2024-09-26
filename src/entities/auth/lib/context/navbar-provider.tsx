import { createContext, PropsWithChildren, useMemo, useState } from "react";

export type PageType = "SIGNIN" | "REGISTRETION";
type PageInfoType = [PageType, number];

type AuthNavbarContextType = {
  currentPage: PageType;
  pages: Array<PageInfoType>;
  setCurrentPage: (page: PageType) => void;
};

const AuthNavbarContext = createContext<AuthNavbarContextType>({
  currentPage: "SIGNIN",
  pages: [],
  setCurrentPage: () => {
    throw new Error("You dont define 'setCurrentPage' function");
  },
});

const AuthNavbarProvider = ({ children }: PropsWithChildren) => {
  const [currentPage, setCurrentPage] = useState<PageType>("SIGNIN");

  return (
    <AuthNavbarContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        pages: [
          ["SIGNIN", 2],
          ["REGISTRETION", 1],
        ],
      }}
    >
      {children}
    </AuthNavbarContext.Provider>
  );
};

export { AuthNavbarProvider, AuthNavbarContext };
