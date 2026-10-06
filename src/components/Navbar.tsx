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
