import {
  lazy,
  PropsWithChildren,
  ReactNode,
  Suspense,
  memo,
  useMemo,
  useEffect,
} from "react";

const LazyComponentMap: Record<LazyComponentMapType, () => Promise<any>> = {
  AUTHORIZATION_PAGE: () => import("./authorization.mobile"),
  ERROR_BOUNDARY_PAGE: () => import("./error-boundary"),
  MAIN_PAGE: () => import("./main"),
  REPETITION_PAGE: () => import("./repetition"),
  UN_EXISITING_PAGE: () => import("./404"),
};

export type LazyComponentMapType =
  | "AUTHORIZATION_PAGE"
  | "MAIN_PAGE"
  | "ERROR_BOUNDARY_PAGE"
  | "UN_EXISITING_PAGE"
  | "REPETITION_PAGE";

type LazyLoadedComponentPropsType<TPropsComponent> = PropsWithChildren & {
  propsComponent: TPropsComponent;
  componentName: LazyComponentMapType;
  fallbackComponent: ReactNode;
};

function LazyLoadedComponent<TPropsComponent>({
  componentName,
  fallbackComponent,
  propsComponent,
}: LazyLoadedComponentPropsType<TPropsComponent>) {
  const Component = LazyComponentMap[componentName]
    ? lazy(LazyComponentMap[componentName])
    : null;

  if (!Component) {
    throw new Error(
      `Unregistred lazy component with name: ${componentName}. Check please 'componentName' props`
    );
  }

  return (
    <Suspense fallback={fallbackComponent}>
      <Component {...propsComponent} />
    </Suspense>
  );
}

export default memo(LazyLoadedComponent);
