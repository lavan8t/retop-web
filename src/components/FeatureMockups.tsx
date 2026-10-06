"use client";

import React from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   AUTHENTIC VIT STUDENT ID CARD (Exact component from retop-ext DigitalIDCard)
   - Zero border around card
   - Zero black background around card
   - Non-interactive, pure display
   - "JOHN DOE" and "21BCE0001"
   ═══════════════════════════════════════════════════════════════════════════ */
function AuthenticDigitalIDCard() {
  return (
    <div className="w-full max-w-[270px] sm:max-w-[285px] aspect-[296/462.5] bg-white text-slate-900 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden relative pointer-events-none select-none mx-auto">
      {/* Top Header */}
      <div className="pt-2 sm:pt-2.5 text-center shrink-0">
        <div
          className="text-[40px] sm:text-[46px] font-bold text-black tracking-tight leading-none font-id-times"
          style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "normal" }}
        >
          VTOP
        </div>
        <div className="mt-1 sm:mt-1.5 flex justify-center">
          <span
            className="text-[12px] sm:text-[13px] font-black text-black tracking-widest uppercase scale-x-120 inline-block transform font-id-times"
            style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "normal" }}
          >
            VELLORE CAMPUS
          </span>
        </div>
      </div>

      {/* 124x188 Neutral Student Avatar Placeholder */}
      <div className="w-[118px] h-[174px] sm:w-[124px] sm:h-[188px] mx-auto mt-1 sm:mt-1.5 bg-slate-100 rounded overflow-hidden flex items-center justify-center shrink-0 shadow-xs relative">
        <svg viewBox="0 0 124 188" className="w-full h-full" fill="none">
          <rect width="124" height="188" fill="#f8fafc" />
          <circle cx="62" cy="60" r="34" fill="#cbd5e1" />
          <path d="M6 188 C6 132 32 122 62 122 C92 122 118 132 118 188 Z" fill="#cbd5e1" />
        </svg>
      </div>

      {/* Student Name & Reg No */}
      <div className="flex flex-col items-center justify-center text-center px-2 mt-auto mb-2 sm:mb-2.5">
        <span
          className="font-bold text-[22px] sm:text-[25px] text-[#181d79] tracking-wide uppercase leading-tight font-id-helvetica"
          style={{ fontFamily: "'Helvetica', 'Arial', sans-serif" }}
        >
          JOHN DOE
        </span>
        <span
          className="font-bold text-[17px] sm:text-[19px] text-black tracking-normal mt-1 sm:mt-1.5 leading-none font-id-helvetica"
          style={{ fontFamily: "'Helvetica', 'Arial', sans-serif" }}
        >
          21BCE0001
        </span>
      </div>

      {/* Bottom Hosteller Banner */}
      <div
        className="w-full bg-[#181d79] text-white font-bold text-center h-[38px] sm:h-[42px] flex items-center justify-center rounded-b-xl text-lg sm:text-[21px] uppercase tracking-wider shrink-0 font-id-helvetica"
        style={{ fontFamily: "'Helvetica', 'Arial', sans-serif" }}
      >
        HOSTELLER
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   DESKTOP TIMETABLE CARD (Matrix view from retop-ext)
   ═══════════════════════════════════════════════════════════════════════════ */
function DesktopTimetableCard() {
  return (
    <div className="w-full rounded-3xl border border-(--border-subtle) bg-(--bg-card) p-5 sm:p-6 shadow-lg pointer-events-none select-none">
      <div className="w-full grid grid-cols-6 gap-1.5 text-xs overflow-x-auto">
        <div className="p-2 font-bold text-(--text-muted) bg-white/5 rounded-xl text-center text-[10px]">
          TIME
        </div>
        {["MON", "TUE", "WED", "THU", "FRI"].map((d) => (
          <div
            key={d}
            className={`p-2 font-bold rounded-xl text-center text-[10px] ${
              d === "TUE"
                ? "bg-(--accent) text-(--on-accent)"
                : "bg-white/5 text-(--text-main)"
            }`}
          >
            {d}
          </div>
        ))}

        {/* Slot Row 1: 08:00 - 08:50 */}
        <div className="p-2 text-[9px] font-sans font-medium text-(--text-muted) bg-white/[0.02] rounded-xl text-center my-auto">
          08:00
        </div>
        <div className="p-2 rounded-xl bg-(--accent)/15 text-center">
          <span className="font-bold text-(--accent) block text-[10px]">CSE3001</span>
          <span className="text-[8px] text-(--text-muted)">SJT 401</span>
        </div>
        <div className="p-2 rounded-xl bg-(--accent)/25 text-center">
          <span className="font-bold text-(--accent) block text-[10px]">CSE3001 [NOW]</span>
          <span className="text-[8px] text-(--text-muted)">SJT 401</span>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] text-center">
          <span className="font-bold text-(--text-muted) block text-[10px]">-</span>
        </div>
        <div className="p-2 rounded-xl bg-(--accent)/15 text-center">
          <span className="font-bold text-(--accent) block text-[10px]">CSE3001</span>
          <span className="text-[8px] text-(--text-muted)">SJT 401</span>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] text-center">
          <span className="font-bold text-(--text-muted) block text-[10px]">-</span>
        </div>

        {/* Slot Row 2: 09:00 - 09:50 */}
        <div className="p-2 text-[9px] font-sans font-medium text-(--text-muted) bg-white/[0.02] rounded-xl text-center my-auto">
          09:00
        </div>
        <div className="p-2 rounded-xl bg-blue-500/15 text-center">
          <span className="font-bold text-blue-400 block text-[10px]">CSE3002</span>
          <span className="text-[8px] text-(--text-muted)">TT 214</span>
        </div>
        <div className="p-2 rounded-xl bg-blue-500/15 text-center">
          <span className="font-bold text-blue-400 block text-[10px]">CSE3002</span>
          <span className="text-[8px] text-(--text-muted)">TT 214</span>
        </div>
        <div className="p-2 rounded-xl bg-blue-500/15 text-center">
          <span className="font-bold text-blue-400 block text-[10px]">CSE3002</span>
          <span className="text-[8px] text-(--text-muted)">TT 214</span>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] text-center">
          <span className="font-bold text-(--text-muted) block text-[10px]">-</span>
        </div>
        <div className="p-2 rounded-xl bg-blue-500/15 text-center">
          <span className="font-bold text-blue-400 block text-[10px]">CSE3002</span>
          <span className="text-[8px] text-(--text-muted)">TT 214</span>
        </div>

        {/* Slot Row 3: 10:00 - 10:50 */}
        <div className="p-2 text-[9px] font-sans font-medium text-(--text-muted) bg-white/[0.02] rounded-xl text-center my-auto">
          10:00
        </div>
        <div className="p-2 rounded-xl bg-emerald-500/15 text-center">
          <span className="font-bold text-emerald-400 block text-[10px]">CSE2005</span>
          <span className="text-[8px] text-(--text-muted)">SJT 112</span>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] text-center">
          <span className="font-bold text-(--text-muted) block text-[10px]">-</span>
        </div>
        <div className="p-2 rounded-xl bg-emerald-500/15 text-center">
          <span className="font-bold text-emerald-400 block text-[10px]">CSE2005</span>
          <span className="text-[8px] text-(--text-muted)">SJT 112</span>
        </div>
        <div className="p-2 rounded-xl bg-amber-500/15 text-center">
          <span className="font-bold text-amber-400 block text-[10px]">CSE2004</span>
          <span className="text-[8px] text-(--text-muted)">SJT 205</span>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] text-center">
          <span className="font-bold text-(--text-muted) block text-[10px]">-</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE ATTENDANCE CARD (Gauge & safe bunks from retop-app)
   ═══════════════════════════════════════════════════════════════════════════ */
function MobileAttendanceCard() {
  return (
    <div className="w-full rounded-3xl border border-(--border-subtle) bg-(--bg-card) p-5 sm:p-6 shadow-lg pointer-events-none select-none flex flex-col gap-3">
      {/* Overall Attendance */}
      <div className="rounded-2xl bg-(--bg-surface) p-3.5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-black text-(--text-main)">94%</span>
          <span className="text-[11px] font-semibold text-emerald-400 mt-0.5">
            Safe bunk margin (+4)
          </span>
        </div>
        <div className="w-13 h-13 rounded-full bg-(--accent)/15 flex items-center justify-center font-bold text-xs text-(--accent)">
          94%
        </div>
      </div>

      {/* Course Breakdown */}
      <div className="flex flex-col gap-2">
        {[
          { name: "Artificial Intelligence", pct: 96, attended: "24/25" },
          { name: "Computer Networks", pct: 92, attended: "23/25" },
          { name: "Operating Systems", pct: 90, attended: "18/20" },
          { name: "Database Systems", pct: 88, attended: "22/25" },
        ].map((c) => (
          <div
            key={c.name}
            className="p-2.5 rounded-xl bg-(--bg-surface) flex items-center justify-between"
          >
            <div className="flex flex-col min-w-0 pr-2">
              <span className="text-xs font-bold text-(--text-main) truncate">
                {c.name}
              </span>
              <span className="text-[10px] text-(--text-muted)">{c.attended} classes</span>
            </div>
            <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-(--accent)/15 text-(--accent)">
              {c.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE CLASS SCHEDULE FEED (Active class feed from retop-app)
   ═══════════════════════════════════════════════════════════════════════════ */
function MobileScheduleCard() {
  return (
    <div className="w-full rounded-3xl border border-(--border-subtle) bg-(--bg-card) p-5 sm:p-6 shadow-lg pointer-events-none select-none flex flex-col gap-3">
      {/* Day Bar */}
      <div className="flex items-center justify-between bg-(--bg-surface) p-3 rounded-2xl">
        <span className="text-xs sm:text-sm font-black text-(--text-main)">
          Day 2 • Tuesday
        </span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400">
          3 Classes Today
        </span>
      </div>

      {/* Active Class - No border on pill */}
      <div className="rounded-2xl p-3 bg-(--accent)/15 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-(--accent) text-(--on-accent)">
            NOW
          </span>
          <span className="text-[11px] font-bold text-(--accent)">08:00 - 08:50 AM</span>
        </div>
        <span className="text-xs sm:text-sm font-bold text-(--text-main)">
          Artificial Intelligence
        </span>
        <div className="flex items-center justify-between text-[11px] text-(--text-muted)">
          <span>CSE3001 • A1 Slot</span>
          <span className="font-bold text-(--text-main)">SJT 401</span>
        </div>
      </div>

      {/* Upcoming Class */}
      <div className="rounded-2xl p-3 bg-(--bg-surface) flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold text-(--text-muted) uppercase">UPCOMING</span>
          <span className="text-[11px] font-bold text-(--text-muted)">09:00 - 09:50 AM</span>
        </div>
        <span className="text-xs sm:text-sm font-bold text-(--text-main)">
          Computer Networks
        </span>
        <div className="flex items-center justify-between text-[11px] text-(--text-muted)">
          <span>CSE3002 • B1 Slot</span>
          <span className="font-semibold text-(--text-main)">TT 214</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE CGPA & PENDING ASSESSMENTS CARD (retop-app)
   ═══════════════════════════════════════════════════════════════════════════ */
function MobileCgpaCard() {
  return (
    <div className="w-full rounded-3xl border border-(--border-subtle) bg-(--bg-card) p-5 sm:p-6 shadow-lg pointer-events-none select-none flex flex-col gap-3">
      {/* CGPA Banner */}
      <div className="rounded-2xl bg-(--bg-surface) p-3.5 flex items-center justify-between">
        <span className="text-base sm:text-lg font-black text-(--text-main)">
          9.42 <span className="text-xs font-semibold text-(--accent)">CGPA</span>
        </span>
        <span className="text-xs sm:text-sm font-bold text-(--text-muted)">
          142 / 160 Credits
        </span>
      </div>

      {/* Pending Assessments */}
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-bold text-(--text-muted) uppercase tracking-wider px-1">
          Pending Assessments
        </span>
        {[
          {
            title: "Digital Assignment 1",
            course: "CSE3002",
            due: "In 2 days",
            dueColor: "text-amber-400 bg-amber-500/10",
          },
          {
            title: "Project Review II",
            course: "CSE3001",
            due: "In 5 days",
            dueColor: "text-blue-400 bg-blue-500/10",
          },
          {
            title: "CAT-1 Assessment",
            course: "CSE2005",
            due: "Oct 12",
            dueColor: "text-(--accent) bg-(--accent)/10",
          },
        ].map((a) => (
          <div
            key={a.title}
            className="p-2.5 rounded-xl bg-(--bg-surface) flex items-center justify-between"
          >
            <div className="flex flex-col min-w-0 pr-2">
              <span className="text-xs font-bold text-(--text-main) truncate">
                {a.title}
              </span>
              <span className="text-[10px] text-(--text-muted)">{a.course}</span>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${a.dueColor}`}>
              {a.due}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   DESKTOP MARKS CARD (retop-ext breakdown)
   ═══════════════════════════════════════════════════════════════════════════ */
function DesktopMarksCard() {
  return (
    <div className="w-full rounded-3xl border border-(--border-subtle) bg-(--bg-card) p-5 sm:p-6 shadow-lg pointer-events-none select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        {[
          {
            code: "CSE3001",
            title: "Artificial Intelligence",
            cat1: "47/50",
            cat2: "48/50",
            da: "30/30",
            grade: "S",
          },
          {
            code: "CSE3002",
            title: "Computer Networks",
            cat1: "44/50",
            cat2: "46/50",
            da: "28/30",
            grade: "S",
          },
          {
            code: "CSE2005",
            title: "Operating Systems",
            cat1: "42/50",
            cat2: "45/50",
            da: "29/30",
            grade: "A",
          },
          {
            code: "CSE2004",
            title: "Database Systems",
            cat1: "45/50",
            cat2: "47/50",
            da: "30/30",
            grade: "S",
          },
        ].map((item) => (
          <div
            key={item.code}
            className="p-3 rounded-2xl bg-(--bg-surface) flex flex-col gap-1.5"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-(--text-main) truncate text-xs">
                {item.title}
              </span>
              <span className="px-1.5 py-0.5 rounded font-black text-[10px] bg-(--accent)/15 text-(--accent)">
                {item.grade}
              </span>
            </div>
            <div className="flex justify-between text-[10px] text-(--text-muted) font-sans font-medium">
              <span>CAT-1: {item.cat1}</span>
              <span>CAT-2: {item.cat2}</span>
              <span>DA: {item.da}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN MASONRY SHOWCASE
   - Center title: "Built beautiful. Not patched beautiful." without background
   - Surrounded by combined phone & desktop mockups
   - ID card: zero border, zero black background
   - Pills: zero border
   - Flat, clean, non-floating, no perspective slant
   ═══════════════════════════════════════════════════════════════════════════ */
export function FeatureMockups() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
        {/* Column 1: Left */}
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/3">
          <DesktopTimetableCard />
          <MobileAttendanceCard />
        </div>

        {/* Column 2: Center */}
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/3 items-center">
          <MobileScheduleCard />

          {/* Center Section Title - Clean, no background box */}
          <div className="w-full flex flex-col items-center justify-center text-center px-4 py-4 sm:py-6 select-none">
            <h2 className="font-title-base text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-(--text-main) leading-tight tracking-tighter font-bold">
              Built beautiful.
              <br />
              Not patched beautiful.
            </h2>
          </div>

          <MobileCgpaCard />
        </div>

        {/* Column 3: Right */}
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/3 items-center">
          {/* Authentic Digital ID Card - Zero border, zero black background */}
          <div className="w-full flex items-center justify-center py-1 sm:py-2">
            <AuthenticDigitalIDCard />
          </div>

          <DesktopMarksCard />
        </div>
      </div>
    </div>
  );
}
