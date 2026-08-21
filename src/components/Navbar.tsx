"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Extension,
  Favorite,
  ArrowOutward,
  CloudOff,
  ArrowForward,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";
import { useBrowserDetection } from "@/hooks/useBrowserDetection";
import { useExtensionDetection } from "@/hooks/useExtensionDetection";

gsap.registerPlugin(useGSAP);

interface NavbarProps {
  chromeStoreUrl: string;
  animate?: boolean;
}

export default function Navbar({
  chromeStoreUrl,
  animate = true,
}: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);
  const { browserName, isSupported } = useBrowserDetection();
  const isExtInstalled = useExtensionDetection();

  return (
    <nav
      ref={navRef}
      className={`nav-gradient fixed top-0 left-0 w-full z-50 px-6 md:px-12 pt-6 pb-12 flex justify-between items-center pointer-events-none`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="group flex items-center text-3xl text-(--text-main) pointer-events-auto lowercase select-none cursor-pointer"
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
      <div className="flex items-center gap-4 md:gap-6 pointer-events-auto">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-(--text-main) hover:text-(--accent) font-bold text-sm transition-colors duration-150 ease-out group"
        >
          <span>GitHub</span>
          <ArrowOutward className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-150" />
        </a>

        {isExtInstalled ? (
          <a
            href="/u/0/home"
            className="flex items-center bg-(--accent) text-(--on-accent) px-5 py-2 rounded-full hover:opacity-90 transition-all duration-150 ease-out"
          >
            <span style={{ fontVariationSettings: '"wdth" 125, "wght" 900, "slnt" -10, "ROND" 100' }}>Go to retop</span>
          </a>
        ) : (
          <a
            href={isSupported ? chromeStoreUrl : "#"}
            target={isSupported ? "_blank" : "_self"}
            rel="noreferrer"
            id="nav-cta"
            className={`flex items-center gap-2 bg-(--accent) text-(--on-accent) px-5 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-all duration-150 ease-out group ${
              !isSupported ? "opacity-50 pointer-events-none grayscale" : ""
            }`}
          >
            <Extension className="text-current w-4 h-4" />
            <span className="text-sm tracking-tight mt-0.5">
              {isSupported ? "Install retop" : "Not supported"}
            </span>
          </a>
        )}
      </div>
    </nav>
  );
}
