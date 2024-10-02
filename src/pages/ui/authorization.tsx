import { useContext, Suspense } from "react";
import { LogoDeepmode } from "shared/lib/assets/icons/logo-deepmode";
import { AuthNavbar, SignInForm } from "features/auth";
import { AuthNavbarContext } from "entities/auth";
import PageLoader from "./page-loader";

const AuthorizationPage = ({}) => {
  const { currentPage } = useContext(AuthNavbarContext);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-dark-color">
      <LogoDeepmode />
      <AuthNavbar />

      {currentPage === "SIGNIN" ? (
        <Suspense fallback={<PageLoader />}>
          <SignInForm />
        </Suspense>
      ) : (
        <Suspense fallback={<PageLoader />}>
          <SignInForm />
        </Suspense>
      )}
    </div>
  );
};

export default AuthorizationPage;
