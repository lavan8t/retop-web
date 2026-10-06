"use client";

import React from "react";
import {
  Search,
  Star,
  Refresh,
  Campaign,
  School,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

export interface DesktopDashboardMockupProps {
  className?: string;
  showDeviceFrame?: boolean;
}

/* ═══════════════════════════════════════════════════════════════════════════
   DESKTOP DASHBOARD MOCKUP (High-Fidelity 3-Pane Browser Extension)
   ═══════════════════════════════════════════════════════════════════════════ */
export const DesktopDashboardMockup: React.FC<DesktopDashboardMockupProps> = ({
  className = "",
  showDeviceFrame = true,
}) => {
  const activeFilter = "all";

  const showClasses = true;
  const showExams = true;
  const showAssignments = true;

  const attendanceCourses = [
    { code: "AI", name: "Artificial Intelligence", pct: 92, safe: true },
    { code: "CN", name: "Computer Networks", pct: 85, safe: true },
    { code: "OS", name: "Operating Systems", pct: 88, safe: true },
    { code: "DBMS", name: "Database Management", pct: 75, safe: false },
    { code: "SE", name: "Software Engineering", pct: 95, safe: true },
  ];

  const content = (
    <div className="flex flex-col w-full h-full text-(--text-main) select-none pointer-events-none min-h-0 bg-(--bg-surface)">
      {/* ── TOPBAR ── */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-(--border-subtle) bg-(--bg-surface) shrink-0 gap-3">
        {/* Left: Logo */}
        <div className="flex items-center shrink-0">
          <div
            className="font-hero-base text-2xl font-black text-(--text-main) tracking-tighter lowercase leading-none flex items-center"
            style={{
              fontVariationSettings: '"wdth" 151, "wght" 900, "slnt" -10',
            }}
          >
            <span>re</span>
            <span className="w-1.5 h-1.5 rounded-full bg-(--text-main) ml-0.5 mt-2 shrink-0 inline-block" />
          </div>
        </div>

        {/* Center: Search pill */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-(--bg-card) border border-(--border-subtle) text-xs text-(--text-muted) w-full max-w-sm lg:max-w-md shadow-xs">
          <Search style={{ width: 15, height: 15, color: "var(--text-muted)" }} />
          <span className="truncate flex-1 text-(--text-muted)">
            Search courses, links, timetable...
          </span>
          <span className="hidden sm:inline-flex items-center text-[10px] font-sans font-semibold text-(--text-muted) bg-white/5 rounded px-1.5 py-0.5">
            ⌘K
          </span>
        </div>

        {/* Right: Actions & User Avatar */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            aria-label="Bookmarks"
            className="w-8 h-8 rounded-full flex items-center justify-center text-(--text-muted)"
          >
            <Star style={{ width: 17, height: 17 }} />
          </div>
          <div
            aria-label="Refresh"
            className="w-8 h-8 rounded-full flex items-center justify-center text-(--text-muted)"
          >
            <Refresh style={{ width: 17, height: 17 }} />
          </div>
          <div className="relative shrink-0 ml-1">
            <div className="w-8 h-8 rounded-full bg-(--accent)/20 border border-(--accent)/35 flex items-center justify-center text-(--accent) font-bold text-xs shadow-xs">
              L
            </div>
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-(--bg-surface)" />
          </div>
        </div>
      </div>

      {/* ── 3-PANE LAYOUT ── */}
      <div className="flex-1 grid grid-cols-12 gap-3.5 p-3.5 sm:p-4.5 overflow-y-auto no-scrollbar min-h-0 bg-(--bg-surface)">
        {/* ── LEFT PANE (25% / col-span-3) ── */}
        <div className="col-span-12 md:col-span-4 xl:col-span-3 flex flex-col gap-3 min-w-0">
          {/* Attendance Card */}
          <div className="rounded-2xl bg-(--bg-card) border border-(--border-subtle) p-3.5 flex flex-col gap-2.5 shadow-sm">
            <div className="flex items-center justify-between pb-2 border-b border-(--border-subtle)">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-wider uppercase text-(--text-muted)">
                  Attendance
                </span>
                <span className="text-2xl font-black text-(--text-main) leading-none mt-0.5">
                  90%
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400">
                On track
              </span>
            </div>

            {/* Attendance Rows */}
            <div className="flex flex-col gap-1.5">
              {attendanceCourses.map((c) => (
                <div
                  key={c.code}
                  className="p-2 rounded-xl bg-white/[0.03] dark:bg-white/[0.02] flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-(--text-main) truncate max-w-[72%]">
                      {c.code}{" "}
                      <span className="font-normal text-(--text-muted) text-[11px]">
                        • {c.name}
                      </span>
                    </span>
                    <span
                      className={`text-[11px] font-black ${
                        c.safe ? "text-emerald-400" : "text-amber-400"
                      }`}
                    >
                      {c.pct}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        c.safe ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spotlight: Academics & Events */}
          <div className="rounded-2xl bg-(--bg-card) border border-(--border-subtle) p-3.5 flex flex-col gap-2.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-bold text-(--accent)">
              <Campaign style={{ width: 16, height: 16 }} />
              <span>Spotlight</span>
            </div>

            {/* Academics Links */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-(--text-muted)">
                Academics
              </span>
              <div className="flex flex-wrap gap-1">
                {["Grade View", "Digital Assignments", "Exam Schedule"].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-lg text-[10px] font-medium bg-white/[0.04] text-(--text-main)"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Events */}
            <div className="space-y-1.5 pt-1.5 border-t border-(--border-subtle)">
              <span className="text-[10px] font-bold uppercase tracking-wider text-(--text-muted)">
                Events
              </span>
              <div className="space-y-1.5 text-[11px]">
                <div className="p-2 rounded-xl bg-white/[0.03] flex flex-col gap-0.5">
                  <span className="font-bold text-(--text-main) truncate">
                    FAT Schedule Released
                  </span>
                  <span className="text-[10px] text-(--text-muted)">
                    Fall Semester 2026-27
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] flex flex-col gap-0.5">
                  <span className="font-bold text-(--text-main) truncate">
                    Riviera 2027 Hackathon
                  </span>
                  <span className="text-[10px] text-(--text-muted)">
                    Registrations open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CENTER PANE (50% / col-span-6) ── */}
        <div className="col-span-12 md:col-span-8 xl:col-span-6 flex flex-col gap-3 min-w-0">
          {/* Month Header Card with Semester & Progress */}
          <div className="rounded-2xl bg-(--bg-card) border border-(--border-subtle) p-4 flex flex-col gap-2.5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base sm:text-lg font-black tracking-tight text-(--text-main) uppercase leading-none">
                  October 2026
                </h2>
                <p className="text-[11px] font-bold text-(--text-muted) mt-1">
                  Fall Semester 2026-27
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black tracking-wide uppercase text-(--accent)">
                  68% Completed
                </span>
                <span className="text-[10px] font-medium text-(--text-muted)">
                  42 days remaining
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-0.5">
              <div className="h-full bg-(--accent) rounded-full w-[68%]" />
            </div>

            {/* Filter Chips */}
            <div className="flex items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar">
              {[
                { id: "all", label: "All" },
                { id: "classes", label: "Classes (3)" },
                { id: "exams", label: "Exams (1)" },
                { id: "assignments", label: "DAs (2)" },
              ].map((chip) => {
                const isActive = activeFilter === chip.id;
                return (
                  <div
                    key={chip.id}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold shrink-0 border ${
                      isActive
                        ? "bg-(--accent) text-(--on-accent) border-(--accent) shadow-xs"
                        : "bg-(--bg-surface) text-(--text-muted) border-(--border-subtle)"
                    }`}
                  >
                    {chip.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Day Feed */}
          <div className="space-y-3">
            {/* Day 6 (Today, Tuesday) */}
            {showClasses && (
              <div className="flex items-start gap-3">
                <div className="w-9 shrink-0 flex flex-col items-center pt-0.5">
                  <div className="w-8 h-8 rounded-full bg-(--accent) text-(--on-accent) font-black text-sm flex items-center justify-center shadow-xs">
                    6
                  </div>
                  <span className="text-[10px] font-bold text-(--accent) uppercase mt-0.5">
                    TUE
                  </span>
                  <School
                    style={{
                      width: 13,
                      height: 13,
                      color: "var(--accent)",
                      marginTop: 2,
                      opacity: 0.85,
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col space-y-[2px]">
                  {/* Class 1 */}
                  <div className="rounded-t-[16px] rounded-b-[4px] bg-(--accent)/10 dark:bg-(--accent)/15 p-3 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-(--text-main) truncate leading-tight">
                        Artificial Intelligence
                      </span>
                      <span className="text-[10px] font-sans font-medium text-(--text-muted)">
                        CSE3002
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-(--text-muted)">
                      <span>08:00 AM - 08:50 AM</span>
                      <span className="font-semibold text-(--text-main)">SJT 401</span>
                    </div>
                  </div>

                  {/* Class 2 */}
                  <div className="rounded-[4px] bg-(--accent)/10 dark:bg-(--accent)/15 p-3 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-(--text-main) truncate leading-tight">
                        Computer Networks
                      </span>
                      <span className="text-[10px] font-sans font-medium text-(--text-muted)">
                        CSE3003
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-(--text-muted)">
                      <span>09:00 AM - 09:50 AM</span>
                      <span className="font-semibold text-(--text-main)">TT 214</span>
                    </div>
                  </div>

                  {/* Class 3 */}
                  <div className="rounded-t-[4px] rounded-b-[16px] bg-(--accent)/10 dark:bg-(--accent)/15 p-3 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-(--text-main) truncate leading-tight">
                        Operating Systems
                      </span>
                      <span className="text-[10px] font-sans font-medium text-(--text-muted)">
                        CSE2005
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-(--text-muted)">
                      <span>11:00 AM - 11:50 AM</span>
                      <span className="font-semibold text-(--text-main)">SJT 305</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Day 7 (Wednesday) */}
            {(showExams || showAssignments) && (
              <div className="flex items-start gap-3">
                <div className="w-9 shrink-0 flex flex-col items-center pt-0.5">
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-(--border-subtle) text-(--text-main) font-black text-sm flex items-center justify-center">
                    7
                  </div>
                  <span className="text-[10px] font-bold text-(--text-muted) uppercase mt-0.5">
                    WED
                  </span>
                  <School
                    style={{
                      width: 13,
                      height: 13,
                      color: "var(--text-muted)",
                      marginTop: 2,
                      opacity: 0.6,
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col space-y-[2px]">
                  {/* Exam Card */}
                  {showExams && (
                    <div className="rounded-t-[16px] rounded-b-[4px] bg-[#271435] dark:bg-[#230f30] p-3 flex flex-col gap-1.5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider text-purple-300">
                          EXAM - CAT 1
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-600/40 text-purple-200">
                          Seat #42 (SJT 602)
                        </span>
                      </div>

                      <span className="text-xs sm:text-sm font-bold text-white truncate leading-tight">
                        Software Engineering
                      </span>

                      <div className="flex items-center gap-2 text-[11px] text-purple-300">
                        <span className="font-bold">CSE3001</span>
                        <span>•</span>
                        <span>02:00 PM</span>
                        <span>•</span>
                        <span className="font-bold">SJT 602</span>
                      </div>
                    </div>
                  )}

                  {/* DA Row */}
                  {showAssignments && (
                    <div className="rounded-t-[4px] rounded-b-[16px] bg-white/[0.04] dark:bg-white/[0.03] p-3 flex items-center justify-between gap-2">
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-(--text-main) truncate">
                          Web Mining
                        </span>
                        <span className="text-[10px] font-medium text-(--text-muted)">
                          CSE4015 • Digital Assignment 1
                        </span>
                      </div>
                      <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 dark:text-amber-200">
                        Due Tomorrow
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT PANE (25% / col-span-3) ── */}
        <div className="col-span-12 md:col-span-12 xl:col-span-3 flex flex-col gap-3 min-w-0">
          {/* CGPA & Credits Card */}
          <div className="rounded-2xl bg-(--bg-card) border border-(--border-subtle) p-4 flex flex-col gap-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-(--text-muted)">
                  CGPA
                </span>
                <span className="text-3xl font-black tracking-tight text-(--text-main) mt-0.5 leading-none">
                  9.42
                </span>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold uppercase tracking-wider text-(--text-muted)">
                  CREDITS
                </span>
                <div className="flex items-baseline gap-1 mt-0.5 leading-none">
                  <span className="text-3xl font-black tracking-tight text-(--text-main)">
                    142
                  </span>
                  <span className="text-xs font-bold text-(--text-muted)">
                    / 160
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-(--border-subtle) flex items-center justify-between text-[11px] text-(--text-muted)">
              <span className="truncate">First Class with Distinction</span>
              <span className="font-bold text-(--accent) shrink-0">18 left</span>
            </div>
          </div>

          {/* Pending Assessments Card */}
          <div className="rounded-2xl bg-(--bg-card) border border-(--border-subtle) p-3.5 flex flex-col gap-2.5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-(--accent) tracking-wide">
                Pending assessments
              </span>
              <span className="text-[10px] font-bold text-(--text-muted) uppercase">
                2 Due
              </span>
            </div>

            <div className="flex flex-col space-y-[2px]">
              {/* Assessment 1 */}
              <div className="rounded-t-[14px] rounded-b-[4px] bg-white/[0.04] dark:bg-white/[0.03] p-3 flex items-center justify-between gap-2">
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-(--text-main) truncate">
                    Digital Assignment 1
                  </span>
                  <span className="text-[10px] font-medium text-(--text-muted)">
                    CSE3002 • AI
                  </span>
                </div>
                <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/15 text-rose-300 dark:text-rose-200">
                  In 2 days
                </span>
              </div>

              {/* Assessment 2 */}
              <div className="rounded-t-[4px] rounded-b-[14px] bg-white/[0.04] dark:bg-white/[0.03] p-3 flex items-center justify-between gap-2">
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-(--text-main) truncate">
                    Project Review II
                  </span>
                  <span className="text-[10px] font-medium text-(--text-muted)">
                    CSE3001 • SE
                  </span>
                </div>
                <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-(--accent)/15 text-(--accent)">
                  In 5 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!showDeviceFrame) {
    return (
      <div className={`w-full h-full bg-(--bg-surface) pointer-events-none select-none ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-6xl mx-auto pointer-events-none select-none ${className}`}>
      {/* Ambient background glow */}
      <div
        className="absolute -inset-2 sm:-inset-4 bg-(--accent)/15 rounded-3xl sm:rounded-[36px] blur-2xl -z-10 pointer-events-none opacity-45 dark:opacity-35"
        aria-hidden="true"
      />

      {/* Sleek Desktop Frame */}
      <div className="relative w-full h-[620px] sm:h-[660px] bg-(--bg-surface) rounded-2xl sm:rounded-[28px] border border-[#222226] dark:border-[#1e1e22] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden flex flex-col">
        {content}
      </div>
    </div>
  );
};
