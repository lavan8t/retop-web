"use client";

import React from "react";
import { featuresCopy } from "@/content/copy";

/* ═══════════════════════════════════════════════════════════════════════════
   MOCKUP CORNERS (Sleek peeks — just showing a corner, no stuffing)
   - Zero black background (uses translucent glass surface on gradient)
   - Non-interactive, pure display
   ═══════════════════════════════════════════════════════════════════════════ */

/* 1. Corner: Digital ID Card */
function IdCardCorner() {
  return (
    <div
      className="w-full max-w-[280px] aspect-[296/340] bg-white text-slate-900 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden relative pointer-events-none select-none mx-auto border border-white/20"
      style={{
        transform: "perspective(1200px) rotateX(6deg) rotateY(-8deg) rotateZ(1deg)",
        animation: "floatTilt 6s ease-in-out infinite alternate",
      }}
    >
      {/* Top Header */}
      <div className="pt-3 text-center shrink-0">
        <div
          className="text-4xl sm:text-[42px] font-bold text-black leading-none font-id-times"
          style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "normal" }}
        >
          VTOP
        </div>
        <div className="mt-1 flex justify-center">
          <span
            className="text-xs font-black text-black uppercase scale-x-110 inline-block font-id-times"
            style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "normal" }}
          >
            VELLORE CAMPUS
          </span>
        </div>
      </div>

      {/* Neutral Student Avatar Placeholder */}
      <div className="w-[110px] h-[140px] sm:w-[120px] sm:h-[155px] mx-auto mt-2 bg-slate-100 rounded overflow-hidden flex items-center justify-center shrink-0 shadow-xs relative">
        <svg viewBox="0 0 124 188" className="w-full h-full" fill="none">
          <rect width="124" height="188" fill="#f8fafc" />
          <circle cx="62" cy="60" r="34" fill="#cbd5e1" />
          <path d="M6 188 C6 132 32 122 62 122 C92 122 118 132 118 188 Z" fill="#cbd5e1" />
        </svg>
      </div>

      {/* Student Name & Reg No */}
      <div className="flex flex-col items-center justify-center text-center px-2 pb-3 mt-auto">
        <span
          className="font-bold text-xl sm:text-2xl text-[#181d79] leading-tight font-id-helvetica"
          style={{ fontFamily: "'Helvetica', 'Arial', sans-serif" }}
        >
          John Doe
        </span>
        <span
          className="font-bold text-sm sm:text-base text-black mt-1 leading-none font-id-helvetica"
          style={{ fontFamily: "'Helvetica', 'Arial', sans-serif" }}
        >
          21BCE0001
        </span>
      </div>

      {/* Subtle fade scrim at bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </div>
  );
}

/* 2. Corner: Timetable Matrix */
function TimetableCorner() {
  return (
    <div
      className="w-full max-w-[320px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 sm:p-5 shadow-lg pointer-events-none select-none flex flex-col gap-3 relative overflow-hidden"
      style={{
        transform: "perspective(1200px) rotateX(6deg) rotateY(8deg) rotateZ(-1deg)",
        animation: "floatTilt 6s ease-in-out infinite alternate",
        animationDelay: "0.8s",
      }}
    >
      <div className="flex items-center justify-between pb-1 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-(--text-main)">
            {featuresCopy.cards.timetable.semester}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/15 text-emerald-400">
            {featuresCopy.cards.timetable.status}
          </span>
        </div>
      </div>

      {/* Corner preview of first schedule slot */}
      <div className="grid grid-cols-[44px_1fr] gap-2 pt-1">
        <div className="p-2 font-black text-(--text-muted) rounded-xl text-center text-xs flex items-center justify-center bg-white/[0.04]">
          MON
        </div>
        <div className="p-3 rounded-2xl flex flex-col justify-between bg-white/[0.06] border border-white/10">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-(--text-main)">
              Soft. Engg.
            </span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-(--accent) text-(--on-accent)">
              NOW
            </span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-(--text-muted) pt-2">
            <span>08:00 - 08:50</span>
            <span className="font-semibold text-(--text-main)">SJT 401</span>
          </div>
        </div>
      </div>

      {/* Decorative second slot peek */}
      <div className="grid grid-cols-[44px_1fr] gap-2 opacity-60">
        <div className="p-2 font-black text-(--text-muted) rounded-xl text-center text-xs flex items-center justify-center bg-white/[0.02]">
          TUE
        </div>
        <div className="p-2.5 rounded-xl flex items-center justify-between bg-white/[0.03]">
          <span className="font-medium text-xs text-(--text-main)">
            Operating Systems
          </span>
          <span className="text-[10px] text-(--text-muted)">10:00 AM</span>
        </div>
      </div>
    </div>
  );
}

/* 3. Corner: Attendance Gauge */
function AttendanceCorner() {
  return (
    <div
      className="w-full max-w-[300px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 sm:p-5 shadow-lg pointer-events-none select-none flex flex-col gap-3 relative overflow-hidden"
      style={{
        transform: "perspective(1200px) rotateX(4deg) rotateY(6deg) rotateZ(-1deg)",
        animation: "floatTilt 6s ease-in-out infinite alternate",
        animationDelay: "1.6s",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-(--text-muted)">Attendance</span>
        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full">
          On track
        </span>
      </div>

      <div className="flex items-center gap-4 py-1">
        <div className="w-16 h-16 rounded-full border-4 border-(--accent) flex items-center justify-center bg-white/[0.03]">
          <span className="text-xl font-black text-(--text-main)">
            {featuresCopy.cards.attendance.headline}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-(--text-main)">
            {featuresCopy.cards.attendance.margin}
          </span>
          <span className="text-[10px] text-(--text-muted) mt-0.5">
            0 classes at risk
          </span>
        </div>
      </div>

      <div className="flex gap-1.5 pt-1">
        <span className="px-2 py-1 rounded-lg text-[10px] font-bold bg-white/[0.04] text-(--text-muted)">
          AI 92%
        </span>
        <span className="px-2 py-1 rounded-lg text-[10px] font-bold bg-white/[0.04] text-(--text-muted)">
          CN 85%
        </span>
        <span className="px-2 py-1 rounded-lg text-[10px] font-bold bg-white/[0.04] text-(--text-muted)">
          OS 88%
        </span>
      </div>
    </div>
  );
}

/* 4. Corner: Marks & Assessment */
function MarksCorner() {
  return (
    <div
      className="w-full max-w-[300px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 sm:p-5 shadow-lg pointer-events-none select-none flex flex-col gap-3 relative overflow-hidden"
      style={{
        transform: "perspective(1200px) rotateX(-4deg) rotateY(-6deg) rotateZ(1deg)",
        animation: "floatTilt 6s ease-in-out infinite alternate",
        animationDelay: "2.4s",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-(--text-muted)">Assessment</span>
        <span className="text-[10px] font-black text-purple-400 bg-purple-500/15 px-2 py-0.5 rounded-full">
          Grade S
        </span>
      </div>

      <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-(--text-main)">
            Software Engineering
          </span>
          <span className="text-xs font-black text-(--accent)">48 / 50</span>
        </div>
        <div className="flex items-center justify-between text-[10px] text-(--text-muted)">
          <span>CAT 1 Score</span>
          <span>96%</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-(--text-muted) px-1">
        <span>CGPA: 9.42</span>
        <span>Credits: 142 / 160</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CENTER TITLE: "Built beautiful. Not patched beautiful."
   - Perfect fit box: every line spans from left (0) to right (1000)
   - Always in that 5-line way only
   - Tailored fontVariationSettings "wdth" for each line
   ═══════════════════════════════════════════════════════════════════════════ */
function PerfectFitTitleBox() {
  return (
    <div className="w-full flex items-center justify-center px-2 py-4 select-none">
      <svg
        viewBox="0 0 1000 1040"
        className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px] h-auto select-none overflow-visible"
        aria-label="Built beautiful. Not patched beautiful."
        role="heading"
        aria-level={2}
      >
        {/* Line 1: Built (wdth 142, size 235) */}
        <text
          x="0"
          y="170"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fill="currentColor"
          className="text-(--text-main)"
          style={{
            fontSize: "235px",
            fontWeight: 900,
            fontVariationSettings: '"wdth" 142, "wght" 900',
          }}
        >
          Built
        </text>

        {/* Line 2: beautiful. (wdth 32, size 190) */}
        <text
          x="0"
          y="385"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fill="currentColor"
          className="text-(--text-main)"
          style={{
            fontSize: "190px",
            fontWeight: 900,
            fontVariationSettings: '"wdth" 32, "wght" 900',
          }}
        >
          beautiful.
        </text>

        {/* Line 3: Not (wdth 151, size 275) */}
        <text
          x="0"
          y="600"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fill="currentColor"
          className="text-(--text-main)"
          style={{
            fontSize: "275px",
            fontWeight: 900,
            fontVariationSettings: '"wdth" 151, "wght" 900',
          }}
        >
          Not
        </text>

        {/* Line 4: patched (wdth 76, size 195) */}
        <text
          x="0"
          y="815"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fill="currentColor"
          className="text-(--text-main)"
          style={{
            fontSize: "195px",
            fontWeight: 900,
            fontVariationSettings: '"wdth" 76, "wght" 900',
          }}
        >
          patched
        </text>

        {/* Line 5: beautiful. (wdth 32, size 190) */}
        <text
          x="0"
          y="1030"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fill="currentColor"
          className="text-(--text-main)"
          style={{
            fontSize: "190px",
            fontWeight: 900,
            fontVariationSettings: '"wdth" 32, "wght" 900',
          }}
        >
          beautiful.
        </text>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN FEATURES SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */
export function FeatureMockups() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes floatTilt {
              0% { transform: translateY(0px) rotateX(4deg) rotateY(6deg); }
              100% { transform: translateY(-8px) rotateX(7deg) rotateY(9deg); }
            }
          `,
        }}
      />

      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
        {/* Left Column: 2 Corner Peeks */}
        <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/3 items-center">
          <TimetableCorner />
          <AttendanceCorner />
        </div>

        {/* Center: The Perfect Fit Box Title */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <PerfectFitTitleBox />
        </div>

        {/* Right Column: 2 Corner Peeks */}
        <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/3 items-center">
          <IdCardCorner />
          <MarksCorner />
        </div>
      </div>
    </>
  );
}
