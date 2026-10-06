"use client";

import Link from "next/link";
import {
  Extension,
  OpenInNew,
  Code,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";
import { footerCopy } from "@/content/copy";

interface FooterProps {
  chromeStoreUrl: string;
}

export default function Footer({ chromeStoreUrl }: FooterProps) {
  return (
    <footer className="w-full max-w-[100rem] mx-auto text-(--text-main) py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between gap-12 sm:gap-16 relative z-20">
      {/* Brand Column */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1
          className="font-hero-base text-4xl sm:text-5xl md:text-6xl text-(--text-main) select-none leading-none "
          style={{
            fontVariationSettings:
              '"wdth" var(--wdth, 151), "wght" var(--wght, 800), "GRAD" 100, "ROND" 100, "slnt" -10',
          }}
        >
          {footerCopy.brand}
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-(--text-main) opacity-90 font-medium leading-relaxed">
            {footerCopy.tagline}
          </p>
          <p className="text-xs text-(--text-muted) font-medium leading-relaxed max-w-md">
            {footerCopy.disclaimer}
          </p>
        </div>
      </div>

      {/* Link Columns */}
      <div className="flex flex-wrap md:flex-nowrap gap-8 sm:gap-16 md:gap-24">
        
        {/* Legal */}
        <div className="flex flex-col gap-5">
          <span className="text-(--text-main) font-black uppercase r text-sm mb-2">{footerCopy.legalHeading}</span>
          <Link href="/privacy" className="text-sm text-(--text-muted) hover:text-(--accent) font-medium transition-colors duration-150">
            {footerCopy.privacyLink}
          </Link>
          <Link href="/terms" className="text-sm text-(--text-muted) hover:text-(--accent) font-medium transition-colors duration-150">
            {footerCopy.termsLink}
          </Link>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-5">
          <span className="text-(--text-main) font-black uppercase r text-sm mb-2">{footerCopy.resourcesHeading}</span>
          <a href={chromeStoreUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-(--text-muted) hover:text-(--accent) font-medium transition-colors duration-150">
            {footerCopy.webStoreLink}
          </a>
          <a href="https://github.com/vtop-retop" target="_blank" rel="noopener noreferrer" className="text-sm text-(--text-muted) hover:text-(--accent) font-medium transition-colors duration-150">
            {footerCopy.githubLink}
          </a>
        </div>

      </div>
    </footer>
  );
}
