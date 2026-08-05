"use client";

import { useEffect, useState } from "react";
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
import { CheckCircle } from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

const CHROME_STORE_URL =
  "https://chrome.google.com/webstore/detail/your-extension-id";

export default function RetopHome() {
  const [showInstallModal, setShowInstallModal] = useState(false);

  useEffect(() => {
    document.title = "Home - retop";
    if (typeof window !== "undefined") {
      const isInstalledParam = window.location.search.includes("installed=true");
      const isExtPresent = localStorage.getItem("__RETOP_EXT_PRESENT__") === "true";

      if (isInstalledParam || isExtPresent) {
        if (!sessionStorage.getItem("retop_install_popup_dismissed")) {
          setShowInstallModal(true);
        }
      }

      const onMsg = (e: MessageEvent) => {
        if (e.data?.type === "RETOP_EXT_PRESENT") {
          if (!sessionStorage.getItem("retop_install_popup_dismissed")) {
            setShowInstallModal(true);
          }
        }
      };
      window.addEventListener("message", onMsg);
      return () => window.removeEventListener("message", onMsg);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("retop_install_popup_dismissed", "true");
    setShowInstallModal(false);
  };

  return (
    <main id="main-content" className="relative w-full flex flex-col items-center">
      <div
        className="fixed inset-0 w-full h-dvh -z-50 pointer-events-none"
        style={{ background: "var(--retop-gradient)" }}
      />

      {/* Extension Installed Popup Modal */}
      {showInstallModal && (
        <div className="fixed inset-0 z-200 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-(--bg-surface) border-2 border-(--accent) rounded-3xl p-8 max-w-md w-full shadow-2xl flex flex-col items-center text-center gap-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-(--accent)/15 border-2 border-(--accent)/30 flex items-center justify-center text-3xl text-(--accent)">
              <CheckCircle className="w-9 h-9" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-2xl font-bold text-(--text-main) tracking-tight">
                Extension Installed!
              </h2>
              <p className="text-sm text-(--text-muted) leading-relaxed">
                retop extension is active and connected to your browser. You can now access VTOP supercharged or launch your cached offline profile.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-2">
              <a
                href="https://vtop.vit.ac.in/vtop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-(--accent) text-white font-bold text-sm hover:opacity-90 transition-all text-center shadow-lg"
              >
                Go to VTOP
              </a>
              <button
                onClick={() => {
                  window.location.href = "/u/0/home";
                }}
                className="w-full py-3.5 px-5 rounded-xl border border-(--border-subtle) bg-white/5 hover:bg-white/10 text-(--text-main) font-bold text-sm transition-all cursor-pointer"
              >
                Open Offline App
              </button>
            </div>
            <button
              onClick={handleDismiss}
              className="text-xs text-(--text-muted) hover:text-(--text-main) mt-1 underline cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

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
        <section id="social-section" className="w-full flex flex-col items-center">
          <SocialSection />
        </section>
        <InstallCTASection chromeStoreUrl={CHROME_STORE_URL} />
        <Footer chromeStoreUrl={CHROME_STORE_URL} />
      </div>
    </main>
  );
}
