import { IndexRouteObject } from "react-router-dom";
import { Suspense } from "react";
import { ErrorPage, PageLoader } from "@/pages";

function defaultRoute(
  { element, ErrorBoundary, ...routeProps }: Omit<IndexRouteObject, "index">,
  isLazy: boolean = true,
  withErrorPage: boolean = true
): IndexRouteObject {
  return {
    index: true,
    ...routeProps,
    element: isLazy ? (
      <Suspense fallback={<PageLoader />}>{element}</Suspense>
    ) : (
      element
    ),
    ErrorBoundary: withErrorPage ? ErrorPage : null,
  };
}

export { defaultRoute };
