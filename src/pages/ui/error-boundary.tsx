import React, {
  ErrorInfo,
  useState,
  useEffect,
  ReactNode,
  PropsWithChildren,
} from "react";
import { useLocation } from "react-router-dom";

type ErrorBoundaryProps = {
  children: ReactNode;
  hasError: boolean;
  setHasError: (condition: boolean) => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundaryInner extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidUpdate(
    prevProps: ErrorBoundaryProps,
    _previousState: ErrorBoundaryState
  ) {
    if (!this.props.hasError && prevProps.hasError) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    this.props.setHasError(true);
  }

  render() {
    return this.state.hasError ? (
      <h1>There was an error</h1>
    ) : (
      this.props.children
    );
  }
}

function ErrorBoundary({ children }: PropsWithChildren) {
  const [hasError, setHasError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (hasError) {
      setHasError(false);
    }
  }, [location.key]);

  return (
    <ErrorBoundaryInner hasError={hasError} setHasError={setHasError}>
      {children}
    </ErrorBoundaryInner>
  );
}

export default ErrorBoundary;
