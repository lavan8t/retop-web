"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white flex min-h-screen flex-col items-center justify-center p-6 text-center font-sans antialiased">
        <div className="max-w-md w-full flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-xl font-bold">
            !
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Something went wrong</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {error?.message || "An unexpected error occurred in the application."}
          </p>
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition-colors mt-2"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
