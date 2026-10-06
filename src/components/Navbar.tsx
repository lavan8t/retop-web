"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Extension,
  Favorite,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";
import { useBrowserDetection } from "@/hooks/useBrowserDetection";
import { useExtensionDetection } from "@/hooks/useExtensionDetection";
import { navbarCopy } from "@/content/copy";

gsap.registerPlugin(useGSAP);

interface NavbarProps {
  chromeStoreUrl: string;
  animate?: boolean;
}

export default function Navbar({
  chromeStoreUrl,
}: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);
  const { isSupported } = useBrowserDetection();
  const isExtInstalled = useExtensionDetection();

  return (
    <nav
      ref={navRef}
      className="nav-gradient fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-12 pt-4 sm:pt-6 pb-8 sm:pb-12 flex justify-between items-center pointer-events-none"
    >
      {/* Logo */}
      <Link
        href="/"
        className="group flex items-center text-2xl sm:text-3xl text-(--text-main) pointer-events-auto lowercase select-none cursor-pointer shrink-0"
        style={{
          fontVariationSettings:
            '"wdth" 125, "wght" 800, "GRAD" 100, "ROND" 100, "slnt" -10',
        }}
      >
        <span>re</span>
        <div className="relative flex items-center justify-center w-2.5 h-2.5 bg-(--text-main) rounded-full ml-0.5 mt-2.5 group-hover:w-5 group-hover:h-5 group-hover:ml-1 group-hover:mt-1.5 transition-all duration-150 ease-out">
          <Favorite className="text-(--bg-surface) w-3 h-3 scale-0 group-hover:scale-100 transition-transform duration-150 ease-out absolute" />
        </div>
      </Link>

      {/* Links + CTA */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 pointer-events-auto shrink-0">
        <a
          href="https://github.com/vtop-retop"
          target="_blank"
          rel="noreferrer"
          aria-label={navbarCopy.githubAria}
          className="text-(--text-main) hover:text-(--accent) transition-colors duration-150 p-1.5 flex items-center justify-center rounded-full"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            className="w-5 h-5 shrink-0"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {isExtInstalled ? (
          <a
            href="/u/0/home"
            className="flex items-center bg-(--accent) text-(--on-accent) px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full hover:opacity-90 transition-all duration-150 ease-out text-xs sm:text-sm"
          >
            <span style={{ fontVariationSettings: '"wdth" 125, "wght" 900, "slnt" -10, "ROND" 100' }}>{navbarCopy.openApp}</span>
          </a>
        ) : (
          <a
            href={isSupported ? chromeStoreUrl : "#"}
            target={isSupported ? "_blank" : "_self"}
            rel="noreferrer"
            id="nav-cta"
            className={`flex items-center gap-1.5 sm:gap-2 bg-(--accent) text-(--on-accent) px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm hover:opacity-90 transition-all duration-150 ease-out group ${
              !isSupported ? "opacity-50 pointer-events-none grayscale" : ""
            }`}
          >
            <Extension className="text-current w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="mt-0.5 whitespace-nowrap">
              {isSupported ? navbarCopy.installExtension : navbarCopy.unsupportedBrowser}
            </span>
          </a>
        )}
      </div>
    </nav>
  );
}
