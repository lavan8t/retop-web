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
      className="relative w-full max-w-6xl px-6 md:px-12 py-32 z-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="omnibox-heading flex flex-col gap-6">
          <h2 className="font-title-base text-[clamp(2rem,4.5vw,3.5rem)] text-(--text-main) leading-none tracking-tighter">
            Press any key. Jump anywhere.
          </h2>
          <p className="text-(--text-muted) text-base leading-relaxed font-medium max-w-md">
            Press{" "}
            <kbd className="bg-(--bg-surface) border-2 border-(--accent) text-(--accent) px-2 py-0.5 rounded text-xs font-black">
              Spacebar
            </kbd>{" "}
            from anywhere in the portal. The omnibox opens
            instantly a full-screen command palette over every module.
          </p>
          <div className="flex flex-col gap-6 mt-2 pr-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-(--text-main) uppercase tracking-wider text-sm">
                Lightning Fast
              </h3>
              <p className="text-(--text-main) opacity-90 text-sm font-medium leading-relaxed">
                No mouse needed. No more hunting through complex sidebars. You
                can jump to any VTOP page instantly using just your keyboard.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-(--text-main) uppercase tracking-wider text-sm">
                University Spotlight
              </h3>
              <p className="text-(--text-main) opacity-90 text-sm font-medium leading-relaxed">
                It feels just like macOS Spotlight or Raycast, completely
                tailored for your academic life.
              </p>
            </div>
          </div>
        </div>

        {/* Omnibox preview */}
        <div className="omnibox-preview bg-(--bg-surface) border-[3px] border-(--bg-surface) rounded-2xl p-6 flex flex-col gap-4">
          {/* Search input */}
          <div className="flex items-center gap-3 bg-(--bg-card) border-2 border-(--accent)/40 rounded-xl px-4 py-3">
            <Search className="text-(--text-muted) w-5 h-5" />
            <span className="text-(--text-main) font-mono text-sm">
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
                    : "border-2 border-transparent hover:bg-(--bg-surface)"
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
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-(--accent) tracking-wider">
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
