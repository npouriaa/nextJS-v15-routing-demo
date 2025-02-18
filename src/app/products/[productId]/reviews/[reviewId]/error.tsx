"use client";

type ErrorBoundaryProps = {
  error: Error;
};

const ErrorBoundary = ({ error }: ErrorBoundaryProps) => {
  return <h1 className="text-2xl font-bold text-red-500">{error.message}</h1>;
};

export default ErrorBoundary;
