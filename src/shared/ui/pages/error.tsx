import React from "react";

interface IErrorPageProps {
  error: Error;
}

const ErrorPage = ({ error }: IErrorPageProps) => {
  return <div>Error Page</div>;
};

export default ErrorPage;
