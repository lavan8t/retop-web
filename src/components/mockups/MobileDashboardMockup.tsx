"use client";

import React from "react";
import {
  Home,
  DateRange,
  CheckCircle,
  Assignment,
  Search,
  ChevronRight,
  School,
  Wifi,
  SignalCellularAlt,
  BatteryFull,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

export interface MobileDashboardMockupProps {
  className?: string;
  showDeviceFrame?: boolean;
}

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE DASHBOARD MOCKUP (Native Android App retop-app / DashboardScreen)
   ═══════════════════════════════════════════════════════════════════════════ */
export const MobileDashboardMockup: React.FC<MobileDashboardMockupProps> = ({
  className = "",
  showDeviceFrame = true,
}) => {
  const activeFilter = "all";
  const activeNav = "home";

  const showClasses = true;
  const showExams = true;
  const showAssignments = true;

  const content = (
    <div className="flex flex-col w-full h-full text-(--text-main) select-none pointer-events-none min-h-0">
      {/* ── STATUS BAR (in-device top status indicators) ── */}
      {showDeviceFrame && (
        <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0 text-(--text-muted) select-none">
          <span className="text-[11px] font-bold tracking-tight text-(--text-main)">9:41</span>
          {/* Camera cutout */}
          <div className="w-3.5 h-3.5 rounded-full bg-black border border-white/10 shadow-inner flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#1a233a] opacity-80" />
          </div>
          <div className="flex items-center gap-1.5 text-(--text-main)">
            <SignalCellularAlt style={{ width: 13, height: 13 }} />
            <Wifi style={{ width: 13, height: 13 }} />
            <div className="flex items-center gap-0.5">
              <span className="text-[9px] font-bold text-(--text-muted)">98%</span>
              <BatteryFull style={{ width: 13, height: 13 }} />
            </div>
          </div>
        </div>
      )}

      {/* ── SCROLLABLE APP FEED ── */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3.5 sm:px-4.5 pt-2 pb-5 space-y-3.5 min-h-0">
        {/* 1. Header Topbar */}
        <div className="flex items-center justify-between pt-1 pb-1">
          <div className="flex flex-col min-w-0 pr-2">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-(--text-main) truncate leading-tight">
              John Doe
            </h1>
            <span className="text-xs font-semibold text-(--text-muted) tracking-wide">
              21BCE0001
            </span>
          </div>

          <div className="shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-(--accent)/15 dark:bg-(--accent)/20 border border-(--accent)/30 flex items-center justify-center text-(--accent) font-bold text-base shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5Z"/></svg>
            </div>
          </div>
        </div>

        {/* 2. Merged CGPA & Credits Card (rounded-3xl) */}
        <div className="rounded-[24px] bg-(--bg-card) border border-(--border-subtle) px-5 py-3.5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-(--text-muted)">
                CGPA
              </span>
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-(--text-main) mt-0.5 leading-none">
                9.42
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-(--text-muted)">
                CREDITS
              </span>
              <div className="flex items-baseline gap-1 mt-0.5 leading-none">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-(--text-main)">
                  142
                </span>
                <span className="text-xs sm:text-sm font-bold text-(--text-muted)">
                  / 160
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Attendance Card (rounded-3xl) */}
        <div className="rounded-[24px] bg-(--bg-card) border border-(--border-subtle) px-5 py-3.5 flex items-center justify-between shadow-sm">
          <div className="flex flex-col min-w-0 pr-2">
            <span className="text-xs font-bold text-(--text-muted)">
              Attendance
            </span>
            <span className="text-xs font-semibold text-emerald-500 dark:text-emerald-400 mt-0.5 flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              All courses on track
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <span className="text-2xl sm:text-[26px] font-black tracking-tight text-(--text-main)">
              94%
            </span>
            <ChevronRight style={{ width: 18, height: 18, color: "var(--text-muted)" }} />
          </div>
        </div>

        {/* 4. Pending Assessments Card (rounded-3xl) */}
        <div className="rounded-[24px] bg-(--bg-card) border border-(--border-subtle) p-3.5 sm:p-4 space-y-2 shadow-sm">
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
                  CSE3002
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
                  CSE3001
                </span>
              </div>
              <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-(--accent)/15 text-(--accent)">
                In 5 days
              </span>
            </div>
          </div>
        </div>

        {/* 5. Month & Semester Header + Filter Chips */}
        <div className="pt-1.5 space-y-2.5">
          <div className="flex flex-col">
            <h2 className="text-lg sm:text-xl font-black tracking-tight text-(--text-main) uppercase leading-none">
              OCTOBER 2026
            </h2>
            <p className="text-[11px] font-bold text-(--text-muted) mt-1">
              Fall Semester 2026-27
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: "all", label: "All" },
              { id: "classes", label: "Classes" },
              { id: "exams", label: "Exams (1)" },
              { id: "assignments", label: "DAs (2)" },
            ].map((chip) => {
              const isActive = activeFilter === chip.id;
              return (
                <div
                  key={chip.id}
                  className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] font-bold shrink-0 border ${
                    isActive
                      ? "bg-(--accent) text-(--on-accent) border-(--accent) shadow-sm"
                      : "bg-(--bg-card) text-(--text-muted) border-(--border-subtle)"
                  }`}
                >
                  {chip.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. Synced Academic Calendar Feed */}
        <div className="space-y-3 pt-1">
          {/* DAY 1: October 6 (Today, Instructional Day) */}
          {showClasses && (
            <div className="flex items-start gap-2.5 sm:gap-3">
              {/* Date Column */}
              <div className="w-9 shrink-0 flex flex-col items-center pt-0.5">
                <div className="w-8 h-8 rounded-full bg-(--accent) text-(--on-accent) font-black text-sm flex items-center justify-center shadow-sm">
                  6
                </div>
                <span className="text-[10px] font-bold text-(--accent) uppercase mt-0.5">
                  TUE
                </span>
                <School style={{ width: 13, height: 13, color: "var(--accent)", marginTop: 2, opacity: 0.85 }} />
              </div>

              {/* Grouped Timetable Classes */}
              <div className="flex-1 min-w-0 flex flex-col space-y-[2px]">
                {/* Class 1 */}
                <div className="rounded-t-[18px] rounded-b-[4px] bg-(--accent)/10 dark:bg-(--accent)/15 p-3 sm:p-3.5 flex flex-col gap-1">
                  <span className="text-xs sm:text-sm font-bold text-(--text-main) truncate leading-tight">
                    Artificial Intelligence
                  </span>
                  <div className="flex items-center justify-between text-[11px] text-(--text-muted)">
                    <span>08:00 AM - 08:50 AM</span>
                    <span className="font-semibold text-(--text-main)">SJT 401</span>
                  </div>
                </div>

                {/* Class 2 */}
                <div className="rounded-t-[4px] rounded-b-[18px] bg-(--accent)/10 dark:bg-(--accent)/15 p-3 sm:p-3.5 flex flex-col gap-1">
                  <span className="text-xs sm:text-sm font-bold text-(--text-main) truncate leading-tight">
                    Computer Networks
                  </span>
                  <div className="flex items-center justify-between text-[11px] text-(--text-muted)">
                    <span>09:00 AM - 09:50 AM</span>
                    <span className="font-semibold text-(--text-main)">TT 214</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DAY 2: October 7 (Exam + DA Day) */}
          {(showExams || showAssignments) && (
            <div className="flex items-start gap-2.5 sm:gap-3">
              {/* Date Column */}
              <div className="w-9 shrink-0 flex flex-col items-center pt-0.5">
                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-(--border-subtle) text-(--text-main) font-black text-sm flex items-center justify-center">
                  7
                </div>
                <span className="text-[10px] font-bold text-(--text-muted) uppercase mt-0.5">
                  WED
                </span>
                <School style={{ width: 13, height: 13, color: "var(--text-muted)", marginTop: 2, opacity: 0.6 }} />
              </div>

              {/* Grouped Day Feed Content */}
              <div className="flex-1 min-w-0 flex flex-col space-y-[2px]">
                {/* Exam Card (tertiaryContainer purple styling) */}
                {showExams && (
                  <div className="rounded-t-[18px] rounded-b-[4px] bg-[#271435] dark:bg-[#230f30] p-3 sm:p-3.5 flex flex-col gap-1.5 shadow-sm">
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
                  <div className="rounded-t-[4px] rounded-b-[18px] bg-white/[0.04] dark:bg-white/[0.03] p-3 flex items-center justify-between gap-2">
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-(--text-main) truncate">
                        Web Mining
                      </span>
                      <span className="text-[10px] font-medium text-(--text-muted)">
                        CSE4015
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

      {/* 7. Floating Bottom Pill Bar */}
      <div className="relative pb-2 px-3 flex justify-center items-center shrink-0 z-30">
        <nav
          aria-label="Navigation Pill Bar"
          className="rounded-full bg-(--bg-card)/90 backdrop-blur-xl border border-white/10 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.55)] px-2.5 sm:px-3 py-1.5 flex items-center gap-1 sm:gap-1.5"
        >
          {[
            { id: "home", label: "Home", Icon: Home },
            { id: "timetable", label: "Timetable", Icon: DateRange },
            { id: "attendance", label: "Attendance", Icon: CheckCircle },
            { id: "assignments", label: "Assignments", Icon: Assignment },
            { id: "search", label: "Search", Icon: Search },
          ].map(({ id, label, Icon }) => {
            const isSelected = activeNav === id;
            return (
              <div
                key={id}
                title={label}
                aria-label={label}
                className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center ${
                  isSelected
                    ? "bg-(--accent)/20 text-(--accent) shadow-sm"
                    : "text-(--text-muted)"
                }`}
              >
                <Icon style={{ width: 18, height: 18 }} />
              </div>
            );
          })}
        </nav>
      </div>

      {/* Home bar indicator */}
      {showDeviceFrame && (
        <div className="w-28 sm:w-32 h-1 bg-white/20 rounded-full mx-auto mb-2 shrink-0" />
      )}
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
    <div className={`relative w-full max-w-[430px] mx-auto pointer-events-none select-none ${className}`}>
      {/* Ambient background glow */}
      <div
        className="absolute -inset-2 sm:-inset-4 bg-(--accent)/15 rounded-[44px] sm:rounded-[56px] blur-2xl -z-10 pointer-events-none opacity-50 dark:opacity-35"
        aria-hidden="true"
      />

      {/* Authentic Mobile Device Frame */}
      <div className="relative w-full h-[620px] sm:h-[660px] bg-(--bg-surface) rounded-[32px] sm:rounded-[44px] border-[4px] sm:border-[8px] border-[#222226] dark:border-[#161619] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden flex flex-col">
        {content}
      </div>
    </div>
  );
};
