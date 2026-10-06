import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import DashboardSection from "@/components/sections/DashboardSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ThemesSection from "@/components/sections/ThemesSection";
import LegacySection from "@/components/sections/LegacySection";
import CalendarSection from "@/components/sections/CalendarSection";
import OmniboxSection from "@/components/sections/OmniboxSection";
import SocialSection from "@/components/sections/SocialSection";
import InstallCTASection from "@/components/sections/InstallCTASection";
import Footer from "@/components/Footer";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/retop/algmeibfbkahhjjgfkiifdnfcoomiigc?pli=1";

export const metadata: Metadata = {
  title: "Home - retop",
};

export default function RetopHome() {
  return (
    <main id="main-content" className="relative w-full flex flex-col items-center">
      <div
        className="fixed inset-0 w-full h-dvh -z-50 pointer-events-none"
        style={{ background: "var(--retop-gradient)" }}
      />

      <div className="flex flex-col items-center w-full">
        <Navbar chromeStoreUrl={CHROME_STORE_URL} />
        <HeroSection chromeStoreUrl={CHROME_STORE_URL} />
        <DashboardSection chromeStoreUrl={CHROME_STORE_URL} />
        <FeaturesSection />
        <ThemesSection />
        <LegacySection />
        <CalendarSection />
        <OmniboxSection />
        <SocialSection />
        <InstallCTASection chromeStoreUrl={CHROME_STORE_URL} />
        <Footer chromeStoreUrl={CHROME_STORE_URL} />
      </div>
    </main>
  );
}
