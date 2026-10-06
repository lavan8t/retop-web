"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { privacyCopy } from "@/content/copy";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/retop/algmeibfbkahhjjgfkiifdnfcoomiigc?pli=1";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy - retop";
  }, []);
  return (
    <main className="relative w-full flex flex-col items-center">
      <div
        className="fixed inset-0 w-full h-dvh -z-50 pointer-events-none"
        style={{ background: "var(--retop-gradient)" }}
      />
      <Navbar chromeStoreUrl={CHROME_STORE_URL} animate={false} />

      <section className="relative w-full max-w-3xl px-6 md:px-12 pt-48 pb-32 z-20 flex flex-col gap-6 text-(--text-main)">
        <div>
          <h1 className="font-hero-base text-5xl md:text-6xl text-(--text-main) select-none leading-none mb-4"
              style={{ fontVariationSettings: '"wdth" 125, "wght" 800, "GRAD" 100, "ROND" 100, "slnt" -10' }}>
            {privacyCopy.title}
          </h1>
          <p className="text-(--text-muted) font-medium">{privacyCopy.lastUpdated}</p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          {privacyCopy.sections.map((section, idx) => (
            <div key={section.title} className={idx > 0 ? "mt-4" : ""}>
              <h3 className="font-title-base text-2xl text-(--text-main)">{section.title}</h3>
              <p className="text-(--text-muted) font-medium leading-relaxed mt-2">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer chromeStoreUrl={CHROME_STORE_URL} />
    </main>
  );
}
