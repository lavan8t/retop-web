"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CHROME_STORE_URL =
  "https://chrome.google.com/webstore/detail/your-extension-id";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms - retop";
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
            Terms of Use
          </h1>
          <p className="text-(--text-muted) font-medium">Revision from July 4, 2026.</p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter">Definitions</h3>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-(--text-muted) font-medium leading-relaxed">
            <li><strong>retop / Software / Extension</strong>: The open-source browser extension developed primarily by the maintainers.</li>
            <li><strong>Website</strong>: The website (getretop.web.app) where these Terms of Use are displayed.</li>
          </ul>

          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter mt-6">Open-source rights</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            retop is fully open-source. You are allowed to use the Software and its source code under the
            conditions of its license. You can review the source code in its entirety in the retop repository on GitHub.
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-(--text-muted) font-medium leading-relaxed">
            <li><a href="https://github.com/vtop-retop" target="_blank" rel="noopener noreferrer" className="text-(--accent) hover:underline">vtop-retop/retop</a></li>
          </ul>

          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter mt-6">Disclaimer of warranty</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            There is no warranty for the Software, to the extent permitted by applicable law. Except when
            otherwise stated in writing, the maintainers provide the Software "AS IS" without warranty of any kind, either expressed or implied. 
            This includes, but is not limited to, the implied warranties of merchantability and fitness for a particular purpose. 
            The entire risk regarding the quality and performance of the Software rests with you.
          </p>

          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter mt-6">Limitation of liability</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            In no event – unless required by applicable law or agreed to in writing – will any maintainers or copyright holders be liable to you for damages. 
            This includes any general, special, incidental, or consequential damages arising from the use of or inability to use the Software, including loss of data.
          </p>

          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter mt-6">No Affiliation with VIT</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            retop is an independent, community-driven project and is <strong>not affiliated with, endorsed by, authorized by, or in any way connected to Vellore Institute of Technology (VIT).</strong> 
            VTOP™ is a registered trademark of Vellore Institute of Technology. All references to VTOP™ or VIT are made strictly for compatibility and informational purposes.
          </p>

          <h3 className="font-title-base text-2xl text-(--text-main) tracking-tighter mt-6">Changes to these terms</h3>
          <p className="text-(--text-muted) font-medium leading-relaxed">
            We reserve the right to update these Terms of Use from time to time. Continued use of retop after
            changes take effect constitutes acceptance of the revised Terms.
          </p>
        </div>
      </section>

      <Footer chromeStoreUrl={CHROME_STORE_URL} />
    </main>
  );
}
