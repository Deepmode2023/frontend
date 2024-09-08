import { Route, RouteObject } from "react-router-dom";
import { Suspense, ReactNode } from "react";
import { ErrorPage, PageLoader } from "@/pages";

type ChildrenRouteType = DefaultRouteObjectType & { uniqKey: number | string };
type DefaultRouteObjectType = {
  isLazy?: boolean;
  withErrorPage?: boolean;
  children?: Array<ChildrenRouteType>;
  index?: boolean;
} & RouteObject;

const SuspenseWrapper = (component: ReactNode) => (
  <Suspense fallback={<PageLoader />}>{component}</Suspense>
);

const defaultRoute = ({
  element,
  isLazy = true,
  children = [],
  withErrorPage = false,
  index = false,
  ...routeProps
}: DefaultRouteObjectType): any => {
  if (isLazy && element) {
    element = <Suspense fallback={<PageLoader />}>{element}</Suspense>;
  }

  if (index) {
    return (
      <Route index element={element} errorElement={routeProps.errorElement} />
    );
  }

  return (
    /*@ts-ignore */
    <Route
      {...routeProps}
      element={element}
      errorElement={routeProps.errorElement}
      hasErrorBoundary
    >
      {children.map(
        ({
          element,
          index: childIndex = false,
          uniqKey,
          withErrorPage,
          isLazy,
          ...child
        }) => {
          if (childIndex) {
            return (
              <Route
                key={uniqKey}
                index
                element={isLazy ? SuspenseWrapper(element) : element}
              />
            );
          }
          return (
            /* @ts-ignore */
            <Route
              key={uniqKey}
              {...child}
              element={isLazy ? SuspenseWrapper(element) : element}
            />
          );
        }
      )}
    </Route>
  );
};

export { defaultRoute, type ChildrenRouteType, type DefaultRouteObjectType };
