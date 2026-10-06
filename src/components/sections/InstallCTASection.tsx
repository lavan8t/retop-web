"use client";

import { useState, useEffect } from "react";
import { Extension, CloudOff, ArrowForward } from "@nine-thirty-five/material-symbols-react/rounded/700/filled";
import { useBrowserDetection } from "@/hooks/useBrowserDetection";
import { useExtensionDetection } from "@/hooks/useExtensionDetection";

interface InstallCTASectionProps {
  chromeStoreUrl: string;
}

const checklist = [
  "Beautiful, modern UI across every page",
  "Offline access always fast",
  "Google Calendar sync",
  "11 accent themes + AMOLED mode",
  "Instant navigation with the Omnibox",
];

export default function InstallCTASection({
  chromeStoreUrl,
}: InstallCTASectionProps) {
  const { browserName, isSupported } = useBrowserDetection();
  const isExtInstalled = useExtensionDetection();

  return (
    <section className="relative w-full max-w-[95rem] px-4 sm:px-6 md:px-12 mx-auto pt-16 md:pt-24 pb-16 md:pb-32 flex flex-col items-center z-20 overflow-hidden">
      <div className="cta-content relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-16 max-w-7xl mx-auto w-full">
        {/* Left Column: Heading & CTA */}
        <div className="flex flex-col items-start text-left gap-6 sm:gap-8">
          <h2 className="font-title-base text-3xl sm:text-5xl md:text-6xl text-(--text-main) leading-none ">
            Stop tolerating VTOP.
            <br />
            <span className="text-(--accent)">Start loving it.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 sm:mt-4 w-full">
            {isExtInstalled ? (
              <a
                href="/u/0/home"
                id="bottom-cta"
                className="flex items-center justify-center bg-(--accent) text-(--on-accent) px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:opacity-90 transition-all duration-150 ease-out text-center max-w-full"
              >
                <span className="text-base sm:text-lg" style={{ fontVariationSettings: '"wdth" 125, "wght" 900, "slnt" -10, "ROND" 100' }}>Go to retop</span>
              </a>
            ) : (
              <a
                href={isSupported ? chromeStoreUrl : "#"}
                target={isSupported ? "_blank" : "_self"}
                rel="noopener noreferrer"
                id="bottom-cta"
                className={`flex items-center justify-center gap-2 sm:gap-3 bg-(--accent) text-(--on-accent) px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:opacity-90 transition-all duration-150 ease-out text-center max-w-full ${
                  !isSupported ? "opacity-50 pointer-events-none grayscale" : ""
                }`}
              >
                <Extension className="text-current text-2xl" />
                <span className="mt-0.5">
                  {isSupported ? "Install retop" : "Browser not supported"}
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 sm:gap-4 w-full">
          <div className="md:col-span-4 bg-(--bg-card) border border-(--border-subtle) p-4 sm:p-6 rounded-3xl sm:rounded-4xl flex items-center justify-center min-h-24 sm:min-h-30">
            <span className="text-base sm:text-lg md:text-xl text-(--text-main) text-center">
              {checklist[0]}
            </span>
          </div>
          <div className="md:col-span-2 bg-(--bg-card) border border-(--border-subtle) p-4 sm:p-6 rounded-3xl sm:rounded-4xl flex items-center justify-center min-h-24 sm:min-h-30">
            <span className="text-base sm:text-lg md:text-xl text-(--text-main) text-center">
              {checklist[1]}
            </span>
          </div>

          <div className="md:col-span-2 bg-(--bg-card) border border-(--border-subtle) p-4 sm:p-6 rounded-3xl sm:rounded-4xl flex items-center justify-center min-h-24 sm:min-h-30">
            <span className="text-base sm:text-lg md:text-xl text-(--text-main) text-center">
              {checklist[2]}
            </span>
          </div>
          <div className="md:col-span-4 bg-(--bg-card) border border-(--border-subtle) p-4 sm:p-6 rounded-3xl sm:rounded-4xl flex items-center justify-center min-h-24 sm:min-h-30">
            <span className="text-base sm:text-lg md:text-xl text-(--text-main) text-center">
              {checklist[3]}
            </span>
          </div>

          <div className="md:col-span-6 bg-(--bg-card) border border-(--border-subtle) p-4 sm:p-6 rounded-3xl sm:rounded-4xl flex items-center justify-center min-h-24 sm:min-h-30">
            <span className="text-base sm:text-lg md:text-xl text-(--text-main) text-center">
              {checklist[4]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
