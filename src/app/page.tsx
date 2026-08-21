"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import DashboardSection from "@/components/sections/DashboardSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ThemesSection from "@/components/sections/ThemesSection";
import LegacySection from "@/components/sections/LegacySection";
import CalendarSection from "@/components/sections/CalendarSection";
import OmniboxSection from "@/components/sections/OmniboxSection";
import SocialSection from "@/components/sections/SocialSection";
import Architecture from "@/components/Architecture";
import InstallCTASection from "@/components/sections/InstallCTASection";
import Footer from "@/components/Footer";

const CHROME_STORE_URL =
  "https://chrome.google.com/webstore/detail/your-extension-id";

export default function RetopHome() {
  useEffect(() => {
    document.title = "Home - retop";
  }, []);

  return (
    <main id="main-content" className="relative w-full flex flex-col items-center">
      <div
        className="fixed inset-0 w-full h-dvh -z-50 pointer-events-none"
        style={{ background: "var(--retop-gradient)" }}
      />

      {/* Mobile Blocker */}
      <div role="region" aria-label="Desktop Device Notice" className="flex md:hidden flex-col items-center justify-center min-h-dvh px-8 text-center z-50">
        <h1 className="text-4xl font-bold text-(--text-main) mb-4 lowercase tracking-tighter" style={{ fontVariationSettings: '"wdth" 125, "wght" 800' }}>retop</h1>
        <h2 className="text-2xl font-bold text-(--text-main) mb-3">Desktop Only</h2>
        <p className="text-(--text-muted) text-lg font-medium leading-relaxed max-w-sm">
          Retop is a browser extension and is currently only available for desktop and laptop devices. Please visit this site on a larger screen to install it.
        </p>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:flex flex-col items-center w-full">
        <Navbar chromeStoreUrl={CHROME_STORE_URL} />
        <HeroSection chromeStoreUrl={CHROME_STORE_URL} />
        
        <section id="dashboard-section" className="w-full flex flex-col items-center">
          <DashboardSection chromeStoreUrl={CHROME_STORE_URL} />
        </section>
        <section id="features-section" className="w-full flex flex-col items-center">
          <FeaturesSection />
        </section>
        <section id="themes-section" className="w-full flex flex-col items-center">
          <ThemesSection />
        </section>
        <section id="legacy-section" className="w-full flex flex-col items-center">
          <LegacySection />
        </section>
        <section id="calendar-section" className="w-full flex flex-col items-center">
          <CalendarSection />
        </section>
        <section id="omnibox-section" className="w-full flex flex-col items-center">
          <OmniboxSection />
        </section>
        <section id="architecture-section" className="w-full flex flex-col items-center">
          <Architecture />
        </section>
        <section id="social-section" className="w-full flex flex-col items-center">
          <SocialSection />
        </section>
        <section id="install-cta-section" className="w-full flex flex-col items-center">
          <InstallCTASection chromeStoreUrl={CHROME_STORE_URL} />
        </section>
        <Footer chromeStoreUrl={CHROME_STORE_URL} />
      </div>
    </main>
  );
}
