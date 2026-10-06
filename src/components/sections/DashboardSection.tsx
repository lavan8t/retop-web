"use client";

import { dashboardCopy } from "@/content/copy";

interface DashboardSectionProps {
  chromeStoreUrl: string;
}

export default function DashboardSection({
  chromeStoreUrl,
}: DashboardSectionProps) {
  return (
    <section className="relative w-full max-w-[95rem] px-4 sm:px-8 md:px-16 lg:px-24 mx-auto pt-6 sm:pt-8 pb-16 md:pb-32 flex flex-col gap-8 sm:gap-12 z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8 sm:gap-y-12">
        {dashboardCopy.sections.map((section) => (
          <div key={section.id} className="flex flex-col gap-2.5 sm:gap-3">
            <h3 className="font-title-base text-xl sm:text-2xl md:text-3xl text-(--text-main) font-bold">
              {section.title}
            </h3>
            <p className="text-(--text-muted) text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
