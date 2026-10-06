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
          className="text-[40px] sm:text-[46px] font-bold text-black leading-none font-id-times"
          style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "normal" }}
        >
          VTOP
        </div>
        <div className="mt-1 sm:mt-1.5 flex justify-center">
          <span
            className="text-[12px] sm:text-[13px] font-black text-black st uppercase scale-x-120 inline-block transform font-id-times"
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
          className="font-bold text-[22px] sm:text-[25px] text-[#181d79] leading-tight font-id-helvetica"
          style={{ fontFamily: "'Helvetica', 'Arial', sans-serif" }}
        >
          John Doe
        </span>
        <span
          className="font-bold text-[17px] sm:text-[19px] text-black mt-1 sm:mt-1.5 leading-none font-id-helvetica"
          style={{ fontFamily: "'Helvetica', 'Arial', sans-serif" }}
        >
          21BCE0001
        </span>
      </div>

      {/* Bottom Hosteller Banner */}
      <div
        className="w-full bg-[#181d79] text-white font-bold text-center h-[38px] sm:h-[42px] flex items-center justify-center rounded-b-xl text-lg sm:text-[21px] uppercase r shrink-0 font-id-helvetica"
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
    <div className="w-full rounded-3xl border border-(--border-subtle) bg-(--bg-card) p-4 sm:p-5 shadow-lg pointer-events-none select-none flex flex-col gap-3">
      {/* Semester Subheading */}
      <div className="flex items-center justify-between pb-0.5">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-black text-(--text-main)">
            Winter Semester 2026-27
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/15 text-emerald-400">
            Active
          </span>
        </div>
        <span className="text-[10px] font-bold text-(--text-muted) uppercase">
          Theory & Lab Matrix
        </span>
      </div>

      {/* Grid view */}
      <div className="w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[580px] grid grid-cols-[40px_repeat(4,minmax(78px,1fr))_24px_repeat(2,minmax(78px,1fr))] gap-1.5 text-xs">
          {/* Header Row */}
          <div className="p-1.5 font-black text-(--text-muted) text-center text-[10px] flex items-center justify-center">
            DAY
          </div>
          <div className="p-1.5 font-bold text-(--text-muted) text-center text-[10px]">
            08:00
          </div>
          <div className="p-1.5 font-bold text-(--text-muted) text-center text-[10px]">
            09:00
          </div>
          <div className="p-1.5 font-bold text-(--text-muted) text-center text-[10px]">
            10:00
          </div>
          <div className="p-1.5 font-bold text-(--text-muted) text-center text-[10px]">
            11:00
          </div>
          <div className="p-1.5 font-bold text-(--text-muted) text-center text-[9px]">
            {/* Lunch spacer */}
          </div>
          <div className="p-1.5 font-bold text-(--text-muted) text-center text-[10px]">
            14:00
          </div>
          <div className="p-1.5 font-bold text-(--text-muted) text-center text-[10px]">
            15:00
          </div>

          {/* MON Row */}
          <div className="p-1.5 font-black text-(--text-muted) rounded-xl text-center text-[10px] flex items-center justify-center bg-white/[0.02]">
            MON
          </div>
          {/* Mon 08:00: Soft. Engg. */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-white/[0.04]">
            <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
              Soft. Engg.
            </span>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-white/10 text-(--text-main)">L</span>
              <span className="text-[8px] font-medium text-(--text-muted) uppercase">A1</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">SJT 401</span>
            </div>
          </div>
          {/* Mon 09:00: Empty F1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">F1</span>
          </div>
          {/* Mon 10:00: Operating Sys. */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-white/[0.04]">
            <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
              Operating Sys.
            </span>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-white/10 text-(--text-main)">L</span>
              <span className="text-[8px] font-medium text-(--text-muted) uppercase">D1</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">SJT 112</span>
            </div>
          </div>
          {/* Mon 11:00: Empty TB1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">TB1</span>
          </div>
          {/* LUNCH: spans 5 rows in column 6 */}
          <div
            className="row-span-5 flex items-center justify-center bg-white/[0.02] dark:bg-white/[0.02] rounded-xl overflow-hidden py-2"
          >
            <span
              className="text-[9px] font-black text-(--text-muted) uppercase opacity-50 whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              LUNCH
            </span>
          </div>
          {/* Mon 14:00: Empty A2 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">A2</span>
          </div>
          {/* Mon 15:00: Database Mgmt. */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-white/[0.04]">
            <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
              Database Mgmt.
            </span>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-white/10 text-(--text-main)">L</span>
              <span className="text-[8px] font-medium text-(--text-muted) uppercase">F2</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">SJT 205</span>
            </div>
          </div>

          {/* TUE Row */}
          <div className="p-1.5 font-black text-(--accent) rounded-xl text-center text-[10px] flex items-center justify-center bg-(--accent)/10">
            TUE
          </div>
          {/* Tue 08:00: Art. Intel. [NOW] */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-(--accent)/15 text-(--text-main)">
            <div className="flex items-start justify-between gap-1 w-full">
              <span className="font-bold text-[10px] leading-tight truncate">
                Art. Intel.
              </span>
              <span className="px-1 py-0.2 rounded text-[7px] font-black uppercase bg-(--accent) text-(--on-accent) shrink-0">
                NOW
              </span>
            </div>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-(--accent)/20 text-(--accent)">L</span>
              <span className="text-[8px] font-medium text-(--accent) uppercase">B1</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--accent) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-80">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">SJT 401</span>
            </div>
          </div>
          {/* Tue 09:00: Empty G1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">G1</span>
          </div>
          {/* Tue 10:00: Comp. Net. */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-white/[0.04]">
            <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
              Comp. Net.
            </span>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-white/10 text-(--text-main)">L</span>
              <span className="text-[8px] font-medium text-(--text-muted) uppercase">E1</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">TT 214</span>
            </div>
          </div>
          {/* Tue 11:00: Empty TC1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">TC1</span>
          </div>
          {/* Tue 14:00: Empty B2 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">B2</span>
          </div>
          {/* Tue 15:00: Empty G2 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">G2</span>
          </div>

          {/* WED Row */}
          <div className="p-1.5 font-black text-(--text-muted) rounded-xl text-center text-[10px] flex items-center justify-center bg-white/[0.02]">
            WED
          </div>
          {/* Wed 08:00 - 10:00: Lab spanning 2 cols! */}
          <div className="col-span-2 h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-purple-500/10">
            <div className="flex items-start justify-between gap-1 w-full">
              <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
                OS Lab
              </span>
              <span className="text-[8px] font-bold text-purple-400">
                2 Hrs
              </span>
            </div>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-purple-500/20 text-purple-300">P</span>
              <span className="text-[8px] font-medium text-purple-300 uppercase">L13-L14</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">SJT 112</span>
            </div>
          </div>
          {/* Wed 10:00: Empty F1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">F1</span>
          </div>
          {/* Wed 11:00: Empty V1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">V1</span>
          </div>
          {/* Wed 14:00: Empty C2 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">C2</span>
          </div>
          {/* Wed 15:00: Soft. Engg. */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-white/[0.04]">
            <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
              Soft. Engg.
            </span>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-white/10 text-(--text-main)">L</span>
              <span className="text-[8px] font-medium text-(--text-muted) uppercase">A2</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">SJT 401</span>
            </div>
          </div>

          {/* THU Row */}
          <div className="p-1.5 font-black text-(--text-muted) rounded-xl text-center text-[10px] flex items-center justify-center bg-white/[0.02]">
            THU
          </div>
          {/* Thu 08:00: Operating Sys. */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-white/[0.04]">
            <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
              Operating Sys.
            </span>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-white/10 text-(--text-main)">L</span>
              <span className="text-[8px] font-medium text-(--text-muted) uppercase">D1</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">SJT 112</span>
            </div>
          </div>
          {/* Thu 09:00: Art. Intel. */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-white/[0.04]">
            <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
              Art. Intel.
            </span>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-white/10 text-(--text-main)">L</span>
              <span className="text-[8px] font-medium text-(--text-muted) uppercase">B1</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">SJT 401</span>
            </div>
          </div>
          {/* Thu 10:00: Empty G1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">G1</span>
          </div>
          {/* Thu 11:00: Empty TE1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">TE1</span>
          </div>
          {/* Thu 14:00: Empty D2 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">D2</span>
          </div>
          {/* Thu 15:00: Empty B2 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">B2</span>
          </div>

          {/* FRI Row */}
          <div className="p-1.5 font-black text-(--text-muted) rounded-xl text-center text-[10px] flex items-center justify-center bg-white/[0.02]">
            FRI
          </div>
          {/* Fri 08:00: Comp. Net. */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-white/[0.04]">
            <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
              Comp. Net.
            </span>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-white/10 text-(--text-main)">L</span>
              <span className="text-[8px] font-medium text-(--text-muted) uppercase">E1</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">TT 214</span>
            </div>
          </div>
          {/* Fri 09:00: Empty C1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">C1</span>
          </div>
          {/* Fri 10:00: Database Mgmt. */}
          <div className="h-full min-h-[58px] p-2 rounded-xl flex flex-col justify-between text-left bg-white/[0.04]">
            <span className="font-bold text-[10px] text-(--text-main) leading-tight truncate">
              Database Mgmt.
            </span>
            <div className="flex items-center gap-1 my-0.5">
              <span className="px-1 rounded text-[8px] font-bold bg-white/10 text-(--text-main)">L</span>
              <span className="text-[8px] font-medium text-(--text-muted) uppercase">TA1</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-(--text-muted) font-medium truncate">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 shrink-0 opacity-70">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="truncate">SJT 205</span>
            </div>
          </div>
          {/* Fri 11:00: Empty TF1 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">TF1</span>
          </div>
          {/* Fri 14:00: Empty E2 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">E2</span>
          </div>
          {/* Fri 15:00: Empty C2 */}
          <div className="h-full min-h-[58px] p-1.5 rounded-xl bg-white/[0.015] flex flex-col items-center justify-center">
            <span className="text-[9px] font-semibold text-(--text-muted)/40 uppercase">C2</span>
          </div>
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
          { name: "Art. Intel.", pct: 96, attended: "24/25" },
          { name: "Comp. Net.", pct: 92, attended: "23/25" },
          { name: "Operating Sys.", pct: 90, attended: "18/20" },
          { name: "Database Mgmt.", pct: 88, attended: "22/25" },
        ].map((c) => (
          <div
            key={c.name}
            className="relative p-2.5 rounded-xl bg-(--bg-surface) flex items-center justify-between overflow-hidden"
          >
            <div
              className="absolute inset-y-0 left-0 bg-(--accent)/15 dark:bg-(--accent)/20 rounded-xl"
              style={{ width: `${c.pct}%` }}
            />
            <div className="relative z-10 flex flex-col min-w-0 pr-2">
              <span className="text-xs font-bold text-(--text-main) truncate">
                {c.name}
              </span>
              <span className="text-[10px] text-(--text-muted)">{c.attended} classes</span>
            </div>
            <span className="relative z-10 text-[11px] font-black px-2 py-0.5 rounded-md bg-(--accent)/20 text-(--accent)">
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
          <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase r bg-(--accent) text-(--on-accent)">
            NOW
          </span>
          <span className="text-[11px] font-bold text-(--accent)">08:00 - 08:50 AM</span>
        </div>
        <span className="text-xs sm:text-sm font-bold text-(--text-main)">
          Art. Intel.
        </span>
        <div className="flex items-center justify-between text-[11px] text-(--text-muted)">
          <span>BCSE302L • B1 Slot</span>
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
          Comp. Net.
        </span>
        <div className="flex items-center justify-between text-[11px] text-(--text-muted)">
          <span>BCSE303L • E1 Slot</span>
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
        <span className="text-[11px] font-bold text-(--text-muted) uppercase r px-1">
          Pending Assessments
        </span>
        {[
          {
            title: "Digital Assignment 1",
            course: "BCSE302L • Art. Intel.",
            due: "In 2 days",
            dueColor: "text-amber-400 bg-amber-500/10",
          },
          {
            title: "Project Review II",
            course: "BCSE301L • Soft. Engg.",
            due: "In 5 days",
            dueColor: "text-blue-400 bg-blue-500/10",
          },
          {
            title: "CAT-1 Assessment",
            course: "BCSE205L • Operating Sys.",
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
            code: "BCSE301L",
            title: "Soft. Engg.",
            cat1: "47/50",
            cat2: "48/50",
            da: "30/30",
            grade: "S",
          },
          {
            code: "BCSE302L",
            title: "Art. Intel.",
            cat1: "44/50",
            cat2: "46/50",
            da: "28/30",
            grade: "S",
          },
          {
            code: "BCSE205L",
            title: "Operating Sys.",
            cat1: "42/50",
            cat2: "45/50",
            da: "29/30",
            grade: "A",
          },
          {
            code: "BCSE204L",
            title: "Database Mgmt.",
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
            <h2 className="font-title-base text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-(--text-main) leading-tight font-bold">
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
