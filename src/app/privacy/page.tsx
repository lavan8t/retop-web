"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CHROME_STORE_URL =
  "https://chrome.google.com/webstore/detail/your-extension-id";

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
          <h1 className="font-hero-base text-5xl md:text-6xl text-(--text-main) select-none leading-none tracking-tighter mb-4"
              style={{ fontVariationSettings: '"wdth" 125, "wght" 800, "GRAD" 100, "ROND" 100, "slnt" -10' }}>
            Privacy Policy
          </h1>
          <p className="text-(--text-muted) font-medium">Revision from July 4, 2026.</p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          
          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter">Your Data Is Yours</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            retop does not collect, steal, transmit, or monetize your data. Everything required for the extension to function is cached entirely locally on your own device.
            Neither the maintainers, nor any third parties, have access to your academic data.
          </p>

          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter mt-6">Zero Analytics</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            There is absolutely no telemetry, usage tracking, or analytics baked into retop. We have no idea how you use the extension, and we prefer it that way.
          </p>
          
          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter mt-6">Third-party Providers</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            retop operates entirely within your browser and interacts directly with the VTOP servers.
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-(--text-muted) font-medium leading-relaxed">
            <li><strong>Third-party services used: None.</strong></li>
          </ul>

          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter mt-6">No Affiliation with VIT</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            retop is an independent, community-driven project and is <strong>not affiliated with, endorsed by, authorized by, or in any way connected to Vellore Institute of Technology (VIT).</strong> 
            VTOP™ is a registered trademark of Vellore Institute of Technology.
          </p>

          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter mt-6">Changes to this Policy</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            We reserve the right to update this Privacy Policy from time to time. Continued use of retop after
            changes take effect constitutes acceptance of the revised policy.
          </p>
          
        </div>
      </section>

      <Footer chromeStoreUrl={CHROME_STORE_URL} />
    </main>
  );
}
