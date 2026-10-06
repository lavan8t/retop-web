"use client";

import React, { useEffect } from "react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-lg font-bold">
          !
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">Something went wrong</h2>
        <p className="text-sm text-neutral-400 leading-relaxed">
          {error?.message || "An unexpected error occurred while loading this section."}
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition-colors mt-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
