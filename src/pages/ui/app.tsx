import { PropsWithChildren, memo } from "react";
import { RoutesProvider } from "@/widget";
import PageLoader from "./page-loader";
import LazyLoadedComponent from "./lazy-loader";

const AppPage = memo(({ children }: PropsWithChildren) => {
  const defaultProps = {};

  return (
    <RoutesProvider
      RepetitionPage={
        <LazyLoadedComponent
          componentName="REPETITION_PAGE"
          fallbackComponent={<PageLoader />}
          propsComponent={defaultProps}
        />
      }
      MainPage={
        <LazyLoadedComponent
          componentName="MAIN_PAGE"
          fallbackComponent={<PageLoader />}
          propsComponent={defaultProps}
        >
          {children}
        </LazyLoadedComponent>
      }
      AuthPage={
        <LazyLoadedComponent
          componentName="AUTHORIZATION_PAGE"
          fallbackComponent={<PageLoader />}
          propsComponent={defaultProps}
        />
      }
      ErrorBoundary={(props: PropsWithChildren) => (
        <LazyLoadedComponent
          componentName="ERROR_BOUNDARY_PAGE"
          fallbackComponent={<PageLoader />}
          propsComponent={props}
        />
      )}
      UnExistingPage={
        <LazyLoadedComponent
          componentName="UN_EXISITING_PAGE"
          fallbackComponent={<PageLoader />}
          propsComponent={defaultProps}
        />
      }
    />
  );
});

export { AppPage };
