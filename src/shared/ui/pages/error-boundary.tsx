import { Component, ErrorInfo, Fragment, PropsWithChildren } from "react";
import ErrorPage from "./error";
import { Outlet, useOutlet } from "react-router-dom";

interface IErrorBoundary {
  hasError: boolean;
  error?: Error;
}

type ErrorBoundaryProps = PropsWithChildren<{}>;

class ErrorBoundary extends Component<ErrorBoundaryProps, IErrorBoundary> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return <ErrorPage error={this.state.error} />;
    }

    return (
      <Fragment>
        {this.props.children} <Outlet />
      </Fragment>
    );
  }
}

export default ErrorBoundary;
