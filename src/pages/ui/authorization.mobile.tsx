import React, { useEffect, useContext, Suspense, lazy } from "react";
import { LogoDeepmode } from "shared/lib/assets/icons/logo-deepmode";
import { AuthNavbar, SignInForm, RegistrationForm } from "features/auth";
import { AuthNavbarContext } from "entities/auth";
import PageLoader from "./page-loader";
import { AnimatePresence } from "framer-motion";

const AuthorizationPage = ({}) => {
  const { currentPage } = useContext(AuthNavbarContext);

  return (
    <div className="w-full min-h-screen grid grid-rows-[auto_auto_1fr] justify-items-center overflow-hidden">
      <LogoDeepmode />
      <AuthNavbar />

      <AnimatePresence>
        {currentPage === "SIGNIN" ? (
          <Suspense key={"signin-form"} fallback={<PageLoader />}>
            <SignInForm />
          </Suspense>
        ) : (
          <Suspense key={"registration-form"} fallback={<PageLoader />}>
            <RegistrationForm />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthorizationPage;
