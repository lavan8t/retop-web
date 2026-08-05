"use client";

import Image from "next/image";
import { Check } from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

const features = [
  {
    id: "feature-id-card",
    caption: "Your identity card, finally.",
  },
  {
    id: "feature-timetable",
    caption: "Every class. Every mode.",
  },
  {
    id: "feature-attendance",
    caption: "Attendance without the dread.",
  },
  {
    id: "feature-marks",
    caption: "Every mark, laid bare.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="relative w-full max-w-[100rem] mx-auto px-6 md:px-12 py-32 flex flex-col gap-16 z-20"
    >
      {/* Heading */}
      <div className="features-heading flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12">
          <h2 className="font-title-base text-[clamp(2rem,5vw,4rem)] text-(--text-main) leading-none tracking-tighter flex-1">
            Built beautiful. Not patched beautiful.
          </h2>
          <p className="text-(--text-muted) text-base leading-relaxed font-medium max-w-sm md:pb-1">
            Not a skin. Not a theme. Every page in VTOP was redesigned from the
            ground up consistent, coherent, and actually pleasant to use.
          </p>
        </div>
      </div>

      {/* Feature screenshots grid */}
      <div className="features-image relative rounded-2xl border-[3px] border-(--bg-surface) overflow-hidden">
        <Image
          src="/features.jpg"
          alt="retop feature pages ID card, timetable, attendance rings, marks cards"
          width={1200}
          height={900}
          className="w-full h-auto"
        />
      </div>


    </section>
  );
}
