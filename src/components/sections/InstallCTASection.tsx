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
    <section className="relative w-full max-w-[95rem] px-6 md:px-12 mx-auto pt-24 pb-32 flex flex-col items-center z-20 overflow-hidden">
      <div className="cta-content relative grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-7xl mx-auto w-full">
        {/* Left Column: Heading & CTA */}
        <div className="flex flex-col items-start text-left gap-8">
          <h2 className="font-title-base text-[clamp(2.5rem,6vw,5rem)] text-(--text-main) leading-none tracking-tighter">
            Stop tolerating VTOP.
            <br />
            <span className="text-(--accent)">Start loving it.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full">
            {isExtInstalled ? (
              <a
                href="/u/0/home"
                id="bottom-cta"
                className="flex items-center justify-center bg-(--accent) text-(--on-accent) px-8 py-4 rounded-full hover:opacity-90 transition-all duration-150 ease-out"
              >
                <span className="text-lg" style={{ fontVariationSettings: '"wdth" 125, "wght" 900, "slnt" -10, "ROND" 100' }}>Go to retop</span>
              </a>
            ) : (
              <a
                href={isSupported ? chromeStoreUrl : "#"}
                target={isSupported ? "_blank" : "_self"}
                rel="noopener noreferrer"
                id="bottom-cta"
                className={`flex items-center justify-center gap-3 bg-(--accent) text-(--on-accent) px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-150 ease-out ${
                  !isSupported ? "opacity-50 pointer-events-none grayscale" : ""
                }`}
              >
                <Extension className="text-current text-2xl" />
                <span className="tracking-tighter mt-0.5">
                  {isSupported ? "Install retop" : "Browser not supported"}
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full">
          <div className="md:col-span-4 bg-(--bg-card) border border-(--border-subtle) p-6 rounded-4xl flex items-center justify-center min-h-30 hover:border-(--accent)/50 hover:shadow-[0_0_20px_0px_color-mix(in_srgb,var(--accent)_15%,transparent)] transition-all duration-300 group">
            <span className="text-lg md:text-xl text-(--text-main) tracking-tighter text-center group-hover:scale-105 transition-transform">
              {checklist[0]}
            </span>
          </div>
          <div className="md:col-span-2 bg-(--bg-card) border border-(--border-subtle) p-6 rounded-4xl flex items-center justify-center min-h-30 hover:border-(--accent)/50 hover:shadow-[0_0_20px_0px_color-mix(in_srgb,var(--accent)_15%,transparent)] transition-all duration-300 group">
            <span className="text-lg md:text-xl text-(--text-main) tracking-tighter text-center group-hover:scale-105 transition-transform">
              {checklist[1]}
            </span>
          </div>

          <div className="md:col-span-2 bg-(--bg-card) border border-(--border-subtle) p-6 rounded-4xl flex items-center justify-center min-h-30 hover:border-(--accent)/50 hover:shadow-[0_0_20px_0px_color-mix(in_srgb,var(--accent)_15%,transparent)] transition-all duration-300 group">
            <span className="text-lg md:text-xl text-(--text-main) tracking-tighter text-center group-hover:scale-105 transition-transform">
              {checklist[2]}
            </span>
          </div>
          <div className="md:col-span-4 bg-(--bg-card) border border-(--border-subtle) p-6 rounded-4xl flex items-center justify-center min-h-30 hover:border-(--accent)/50 hover:shadow-[0_0_20px_0px_color-mix(in_srgb,var(--accent)_15%,transparent)] transition-all duration-300 group">
            <span className="text-lg md:text-xl text-(--text-main) tracking-tighter text-center group-hover:scale-105 transition-transform">
              {checklist[3]}
            </span>
          </div>

          <div className="md:col-span-6 bg-(--bg-card) border border-(--border-subtle) p-6 rounded-4xl flex items-center justify-center min-h-30 hover:border-(--accent)/50 hover:shadow-[0_0_20px_0px_color-mix(in_srgb,var(--accent)_15%,transparent)] transition-all duration-300 group">
            <span className="text-lg md:text-xl text-(--text-main) tracking-tighter text-center group-hover:scale-105 transition-transform">
              {checklist[4]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
