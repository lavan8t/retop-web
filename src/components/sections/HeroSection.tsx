"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DashboardMockup } from "@/components/DashboardMockup";
import { Extension, CloudOff, ArrowForward } from "@nine-thirty-five/material-symbols-react/rounded/700/filled";
import { useBrowserDetection } from "@/hooks/useBrowserDetection";

gsap.registerPlugin(useGSAP);

interface HeroSectionProps {
  chromeStoreUrl: string;
}

export default function HeroSection({ chromeStoreUrl }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const subParaRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaSubtextRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  const { browserName, isSupported } = useBrowserDetection();
  const [isExtInstalled, setIsExtInstalled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("__RETOP_EXT_PRESENT__") === "true") {
        setIsExtInstalled(true);
      }
      const onMsg = (e: MessageEvent) => {
        if (e.data?.type === "RETOP_EXT_PRESENT") {
          setIsExtInstalled(true);
        }
      };
      window.addEventListener("message", onMsg);
      return () => window.removeEventListener("message", onMsg);
    }
  }, []);

  useGSAP(
    () => {
      // Set initial font state
      gsap.set(logoRef.current, {
        "--wdth": 151,
        "--wght": 800,
      });

      const tl = gsap.timeline({ delay: 0.2 });

      // Animate retop logo first
      tl.fromTo(
        logoRef.current,
        { scale: 1.2, y: "100vh", filter: "blur(32px)", opacity: 0 },
        {
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.6,
          ease: "expo.out",
        },
      );

      // Then animate the rest staggered
      const elements = [
        subtextRef.current,
        subParaRef.current,
        ctaRef.current,
        ctaSubtextRef.current,
      ];

      tl.fromTo(
        elements,
        { y: "100vh", filter: "blur(32px)", opacity: 1 },
        {
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.45",
      );

      tl.fromTo(
        mockupRef.current,
        { y: "100vh", filter: "blur(32px)", opacity: 1 },
        {
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        },
        "<0.32",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-dvh flex flex-col items-center justify-center px-6 md:px-12 pt-40 pb-16 z-20 gap-8 overflow-hidden"
    >
      <div className="flex flex-col items-center text-center max-w-4xl gap-6">
        <div className="group flex justify-center w-full pt-4 cursor-default">
          <h1
            ref={logoRef}
            className="opacity-0 font-hero-base text-[clamp(4rem,10vw,8rem)] leading-none text-(--text-main) select-none lowercase tracking-tighter"
            style={{
              fontVariationSettings:
                '"wdth" var(--wdth, 151), "wght" var(--wght, 800), "GRAD" 100, "ROND" 100, "slnt" -10',
            }}
          >
            retop
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6">
          <p
            ref={subtextRef}
            className="opacity-0 text-[clamp(1.4rem,3vw,2.2rem)] font-bold text-(--text-main) leading-tight tracking-tight max-w-2xl"
            style={{
              fontVariationSettings:
                '"wdth" var(--wdth, 151), "wght" var(--wght, 800), "GRAD" 100, "ROND" 0, "slnt" 0',
            }}
          >
            VTOP without the fuss
          </p>
          <p
            ref={subParaRef}
            className="opacity-0 text-base md:text-lg text-(--text-muted) max-w-xl leading-relaxed font-medium"
          >
            A browser extension that sits on top of your VTOP with a stunning,
            fast dashboard. No new account, no setup. Made for students, by
            students.
          </p>

          <div
            ref={ctaRef}
            className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full max-w-xl"
          >
            {isExtInstalled ? (
              <a
                href="/u/0/home"
                id="hero-cta"
                className="flex items-center justify-center bg-(--accent) text-(--on-accent) px-8 py-3.5 rounded-full hover:opacity-90 transition-all duration-150 ease-out"
              >
                <span className="text-base md:text-lg" style={{ fontVariationSettings: '"wdth" 125, "wght" 900, "slnt" -10, "ROND" 100' }}>Go to retop</span>
              </a>
            ) : (
              <a
                href={isSupported ? chromeStoreUrl : "#"}
                target={isSupported ? "_blank" : "_self"}
                rel="noopener noreferrer"
                id="hero-cta"
                className={`flex items-center justify-center gap-3 bg-(--accent) text-(--on-accent) px-8 py-3.5 rounded-full font-bold text-base md:text-lg hover:opacity-90 transition-all duration-150 ease-out ${
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
      </div>

      {/* Dashboard Mockup */}
      <div
        ref={mockupRef}
        className="opacity-0 relative w-full max-w-380 px-4 md:px-8 pb-10 mx-auto mt-4"
      >
          <DashboardMockup />
      </div>
    </section>
  );
}
