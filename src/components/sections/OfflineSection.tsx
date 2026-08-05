"use client";

import { Check } from "@nine-thirty-five/material-symbols-react/rounded/700/filled";
import { CloudOff } from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

export default function OfflineSection() {
  return (
    <section
      className="relative w-full max-w-6xl px-6 md:px-12 py-32 z-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="offline-text flex flex-col gap-6">
          <CloudOff className="text-(--accent) text-5xl drop-shadow-md" />
          <h2 className="font-title-base text-[clamp(2rem,4.5vw,3.5rem)] text-(--text-main) leading-none tracking-tighter">
            Even when WiFi gives up, retop doesn&apos;t.
          </h2>
          <div className="flex flex-col gap-6 mt-2 pr-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-(--text-main) uppercase tracking-wider text-sm">
                Instant Access
              </h3>
              <p className="text-(--text-main) opacity-90 text-sm font-medium leading-relaxed">
                Your timetable, attendance, and marks are cached securely on
                your local device. The dashboard loads instantly on repeat
                visits without a single loading spinner.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-(--text-main) uppercase tracking-wider text-sm">
                Background Sync
              </h3>
              <p className="text-(--text-main) opacity-90 text-sm font-medium leading-relaxed">
                The cache refreshes seamlessly in the background to ensure you
                always have the latest data. It's heavily optimized and works
                flawlessly even on slow 2G campus networks.
              </p>
            </div>
          </div>
        </div>

        {/* Visual split panel */}
        <div className="offline-visual grid grid-cols-2 gap-0 rounded-2xl border-[3px] border-(--bg-surface) overflow-hidden">
          {/* Old VTOP side */}
          <div className="bg-(--bg-card) p-6 flex flex-col gap-4 items-center justify-center border-r-[3px] border-(--border-subtle)">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-(--text-muted) opacity-30 border-t-(--text-muted) animate-spin" />
              <p className="text-center text-xs text-(--text-muted) font-mono leading-relaxed">
                Loading...
                <br />
                No connection.
              </p>
            </div>
            <span className="text-[9px] tracking-wider text-(--text-muted) opacity-50 mt-2">
              Old VTOP
            </span>
          </div>

          {/* retop side */}
          <div className="bg-(--bg-surface) p-6 flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1.5 w-full">
                {["Timetable", "Attendance", "Marks"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 bg-(--bg-card) border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] rounded-lg px-3 py-2"
                  >
                    <Check className="text-(--accent) w-4 h-4" />
                    <span className="text-xs text-(--text-muted) font-medium">
                      {item}
                    </span>
                    <span className="ml-auto text-[9px] text-(--accent) tracking-wide">
                      Cached
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <span className="text-[9px] tracking-wider text-(--accent) opacity-60 mt-2">
              retop
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
