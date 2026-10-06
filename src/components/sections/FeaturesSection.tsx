"use client";

import { FeatureMockups } from "@/components/FeatureMockups";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative w-full max-w-[105rem] mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-32 flex flex-col items-center justify-center z-20 overflow-hidden"
    >
      {/* Surrounding Masonry Showcase with Section Title in Center */}
      <div className="features-showcase w-full">
        <FeatureMockups />
      </div>
    </section>
  );
}
