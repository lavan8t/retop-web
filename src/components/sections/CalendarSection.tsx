"use client";

import { ArrowForward } from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
const holidays = [4, 15, 26];
const exams = [8, 9, 22, 23];
const events = [12, 18];

export default function CalendarSection() {
  const getDayStyle = (day: number) => {
    if (holidays.includes(day))
      return "bg-red-900/40 text-red-400 border-red-500/40";
    if (exams.includes(day))
      return "bg-amber-900/40 text-amber-400 border-amber-500/40";
    if (events.includes(day))
      return "bg-(--accent)/20 text-(--accent) border-(--accent)/40";
    return "bg-(--bg-surface) text-(--text-muted) border-(--border-subtle)";
  };

  return (
    <section
      className="relative w-full max-w-6xl px-6 md:px-12 py-32 z-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Mini Calendar mockup */}
        <div className="calendar-card bg-(--bg-card) border-[3px] border-(--bg-surface) rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-title-base text-base text-(--text-main) uppercase">
              November 2025
            </h3>
            <div className="flex gap-2 text-xs">
              <span className="flex items-center gap-1 text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />{" "}
                Holiday
              </span>
              <span className="flex items-center gap-1 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />{" "}
                Exam
              </span>
              <span className="flex items-center gap-1 text-(--accent)">
                <span className="w-2 h-2 rounded-full bg-(--accent) inline-block" />{" "}
                Event
              </span>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div
                key={i}
                className="text-center text-[10px] text-(--text-muted) py-1"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for offset */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {calendarDays.map((day) => (
              <div
                key={day}
                className={`aspect-square flex items-center justify-center text-xs font-bold rounded-md border ${getDayStyle(day)} transition-all`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="calendar-text flex flex-col gap-6">
          <h2 className="font-title-base text-[clamp(2rem,4.5vw,3.5rem)] text-(--text-main) leading-none tracking-tighter">
            Your semester in Google Calendar. One click.
          </h2>
          <div className="flex flex-col gap-6 mt-2 pr-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-(--text-main) uppercase tracking-wider text-sm">
                Full Google Sync
              </h3>
              <p className="text-(--text-main) opacity-90 text-sm font-medium leading-relaxed">
                Connect your Google account once to export your full timetable.
                Holidays and day-order overrides are automatically handled
                without any manual cleanup.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-(--text-main) uppercase tracking-wider text-sm">
                Unified Scheduling
              </h3>
              <p className="text-(--text-main) opacity-90 text-sm font-medium leading-relaxed">
                See your VTOP classes seamlessly alongside your personal events.
                Prefer Apple devices? It works flawlessly with Apple Calendar
                via our iCal export.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
