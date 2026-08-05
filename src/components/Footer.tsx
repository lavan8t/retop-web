"use client";

import Link from "next/link";
import {
  Extension,
  OpenInNew,
  Code,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

interface FooterProps {
  chromeStoreUrl: string;
}

export default function Footer({ chromeStoreUrl }: FooterProps) {
  return (
    <footer className="w-full max-w-[100rem] mx-auto text-(--text-main) py-24 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between gap-16 relative z-20">
      {/* Brand Column */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1
          className="font-hero-base text-5xl md:text-6xl text-(--text-main) select-none leading-none tracking-tighter"
          style={{
            fontVariationSettings:
              '"wdth" var(--wdth, 151), "wght" var(--wght, 800), "GRAD" 100, "ROND" 100, "slnt" -10',
          }}
        >
          retop
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-(--text-main) opacity-90 font-medium leading-relaxed">
            uni portal made better.
          </p>
          <p className="text-xs text-(--text-muted) font-medium leading-relaxed max-w-md">
            retop is not affiliated with, endorsed by, or connected to Vellore Institute of Technology. VTOP™ is a registered trademark of Vellore Institute of Technology.
          </p>
        </div>
      </div>

      {/* Link Columns */}
      <div className="flex flex-wrap md:flex-nowrap gap-16 md:gap-24 lg:gap-32">
        
        {/* Legal */}
        <div className="flex flex-col gap-5">
          <span className="text-(--text-main) font-black uppercase tracking-wider text-sm mb-2">Legal stuff</span>
          <Link href="/privacy" className="text-sm text-(--text-muted) hover:text-(--accent) font-medium transition-colors duration-150">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-sm text-(--text-muted) hover:text-(--accent) font-medium transition-colors duration-150">
            Terms of use
          </Link>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-5">
          <span className="text-(--text-main) font-black uppercase tracking-wider text-sm mb-2">Resources</span>
          <a href={chromeStoreUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-(--text-muted) hover:text-(--accent) font-medium transition-colors duration-150">
            Web Store
          </a>
          <a href="https://github.com/vtop-retop" target="_blank" rel="noopener noreferrer" className="text-sm text-(--text-muted) hover:text-(--accent) font-medium transition-colors duration-150">
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}
