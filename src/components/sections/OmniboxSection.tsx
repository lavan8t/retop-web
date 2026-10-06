"use client";

import Image from "next/image";
import {
  Schedule,
  RadioButtonUnchecked,
  Star,
  GridView,
  Person,
  RadioButtonChecked,
  Search,
  KeyboardReturn,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";
import { omniboxCopy } from "@/content/copy";

const results = [
  {
    icon: <Schedule className="w-5 h-5 text-current" />,
    label: "Timetable",
    desc: "View your full week schedule",
  },
  {
    icon: <RadioButtonUnchecked className="w-5 h-5 text-current" />,
    label: "Attendance",
    desc: "Check subject-wise attendance",
  },
  {
    icon: <Star className="w-5 h-5 text-current" />,
    label: "Marks",
    desc: "View marks and assessments",
  },
  {
    icon: <GridView className="w-5 h-5 text-current" />,
    label: "Calendar",
    desc: "Academic calendar overview",
  },
  {
    icon: <Person className="w-5 h-5 text-current" />,
    label: "Profile",
    desc: "Your student ID card",
  },
];

export default function OmniboxSection() {
  return (
    <section
      className="relative w-full max-w-6xl px-4 sm:px-6 md:px-12 py-16 md:py-32 z-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Text */}
        <div className="omnibox-heading flex flex-col gap-6">
          <h2 className="font-title-base text-3xl sm:text-4xl md:text-5xl text-(--text-main) leading-none ">
            {omniboxCopy.heading}
          </h2>
          <p className="text-(--text-muted) text-base sm:text-lg leading-relaxed font-medium max-w-md">
            {omniboxCopy.descriptionPrefix}{" "}
            <kbd className="bg-(--bg-surface) border-2 border-(--accent) text-(--accent) px-2 py-0.5 rounded text-xs font-black">
              {omniboxCopy.keyName}
            </kbd>{" "}
            {omniboxCopy.descriptionSuffix}
          </p>
          <div className="flex flex-col gap-6 mt-2 pr-4">
            {omniboxCopy.items.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <h3 className="text-(--text-main) uppercase r text-sm">
                  {item.title}
                </h3>
                <p className="text-(--text-main) opacity-90 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Omnibox preview */}
        <div className="omnibox-preview bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col gap-4">
          {/* Search input */}
          <div className="flex items-center gap-3 bg-white/[0.05] border-2 border-(--accent)/40 rounded-xl px-4 py-3">
            <Search className="text-(--text-muted) w-5 h-5" />
            <span className="text-(--text-main) text-sm">
              timetable
              <span className="animate-pulse text-(--accent)">|</span>
            </span>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-1">
            {results.map((result, i) => (
              <div
                key={result.label}
                className={`result-row flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-100 ${
                  i === 0
                    ? "bg-(--accent)/20 border-2 border-(--accent)/50"
                    : "border-2 border-transparent"
                }`}
              >
                <span className="text-(--accent) text-base w-5 text-center shrink-0">
                  {result.icon}
                </span>
                <div>
                  <div className="text-sm font-bold text-(--text-main)">
                    {result.label}
                  </div>
                  <div className="text-xs text-(--text-muted)">
                    {result.desc}
                  </div>
                </div>
                {i === 0 && (
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-(--accent) r">
                    Enter <KeyboardReturn className="w-3 h-3" />
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-(--text-muted) font-medium mt-1">
            Press Esc to dismiss
          </p>
        </div>
      </div>
    </section>
  );
}
