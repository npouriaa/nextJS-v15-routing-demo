// error.tsx file will not handles errors from a layout.tsx file in the same segment , the solution is to move the error.tsx file into the layout parent segment

"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type ErrorBoundaryProps = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary = ({ error, reset }: ErrorBoundaryProps) => {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">{error.message}</h1>
      <button className="border rounded-md p-1" onClick={() => reload()}>
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
