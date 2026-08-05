"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ShieldLock,
  Password,
  CloudOff,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Architecture() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const scrollSections = gsap.utils.toArray(".scroll-section");

      scrollSections.forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 60, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="architecture"
      className="w-full max-w-6xl px-8 pb-32 flex flex-col gap-32 relative z-20"
    >
      {/* Section 1: Shadow DOM */}
      <div className="scroll-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <ShieldLock className="text-(--bg-light-orange) text-5xl mb-2 drop-shadow-md" />
          <h2 className="font-title-base text-4xl md:text-5xl text-(--border-main) leading-none uppercase">
            Absolute Isolation.
          </h2>
          <p className="text-lg text-(--text-muted) font-normal transition-all duration-300 group-hover:font-bold group-hover:text-(--border-main)">
            Rendered entirely inside an open Shadow DOM. This ensures zero CSS
            conflicts or context leakage from the legacy VTOP DOM.
          </p>
        </div>
        <div className="bg-(--bg-card) p-8 rounded-3xl border-[3px] border-(--border-main) aspect-video flex items-center justify-center">
          <div className="text-sm md:text-base font-bold tracking-tight text-(--bg-dark-orange) leading-relaxed">
            &lt;div id="retop-host"&gt;
            <br />
            &nbsp;&nbsp;#shadow-root (open)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;DashboardApp /&gt;
            <br />
            &lt;/div&gt;
          </div>
        </div>
      </div>

      {/* Section 2: Smart Parsers & Captcha */}
      <div className="scroll-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 bg-(--bg-card) p-8 rounded-3xl border-[3px] border-(--border-main) aspect-video flex items-center justify-center">
          <div className="text-sm md:text-base font-bold tracking-tight text-(--accent-blue) text-center leading-relaxed">
            Content.ts intercepting...
            <br />
            <span className="text-green-600 tracking-tighter text-lg">
              CAPTCHA Auto-Solved
            </span>
            <br />
            Tokens generated.
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-4">
          <Password className="text-(--accent-blue) text-5xl mb-2 drop-shadow-md" />
          <h2 className="font-title-base text-4xl md:text-5xl text-(--border-main) leading-none uppercase">
            Seamless Entry.
          </h2>
          <p className="text-lg text-(--text-muted) font-normal">
            Features an invisible CAPTCHA solver utilizing advanced bitmap
            matching. Logging in is reduced to a single click.
          </p>
        </div>
      </div>

      {/* Section 3: Offline Mode & Cache */}
      <div className="scroll-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <CloudOff className="text-(--border-main) text-5xl mb-2 drop-shadow-md" />
          <h2 className="font-title-base text-4xl md:text-5xl text-(--border-main) leading-none uppercase">
            Always Ready.
          </h2>
          <p className="text-lg text-(--text-muted) font-normal">
            Powered by Zustand and a 24-hour TTL cache. Access your timetable,
            marks, and assignments even offline.
          </p>
        </div>
        <div className="bg-(--bg-card) p-8 rounded-3xl border-[3px] border-(--border-main) aspect-video flex items-center justify-center">
          <div className="text-sm md:text-base font-bold tracking-tight text-(--border-main) leading-relaxed">
            NetworkError: 503
            <br />
            Falling back to cache...
            <br />
            <span className="text-green-600 text-lg tracking-tighter">
              ✓ Timetable Loaded
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
