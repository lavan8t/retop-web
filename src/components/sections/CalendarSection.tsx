"use client";

import {
  ChevronLeft,
  ChevronRight,
  GridView,
  List,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";
import { calendarCopy } from "@/content/copy";

interface DayData {
  day: number;
  type?: "holiday" | "exam" | "event" | "today" | "class";
  title?: string;
  badge?: string;
}

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const DAYS: DayData[] = [
  { day: 1, type: "class" },
  { day: 2, type: "holiday", title: "Gandhi Jayanti", badge: "Holiday" },
  { day: 3, type: "class" },
  { day: 4, type: "class" },
  { day: 5, type: "class" },
  { day: 6, type: "today", title: "Classes", badge: "Today" },
  { day: 7, type: "exam", title: "CAT 1", badge: "Exam" },
  { day: 8, type: "exam", title: "CAT 1", badge: "Exam" },
  { day: 9, type: "exam", title: "CAT 1", badge: "Exam" },
  { day: 10, type: "class" },
  { day: 11, type: "class" },
  { day: 12, type: "class" },
  { day: 13, type: "class" },
  { day: 14, type: "class" },
  { day: 15, type: "class" },
  { day: 16, type: "class" },
  { day: 17, type: "class" },
  { day: 18, type: "class" },
  { day: 19, type: "holiday", title: "Ayudha Pooja", badge: "Holiday" },
  { day: 20, type: "holiday", title: "Vijaya Dasami", badge: "Holiday" },
  { day: 21, type: "class" },
  { day: 22, type: "class" },
  { day: 23, type: "event", title: "Gravitas '26", badge: "Event" },
  { day: 24, type: "event", title: "Gravitas '26", badge: "Event" },
  { day: 25, type: "class" },
  { day: 26, type: "class" },
  { day: 27, type: "class" },
  { day: 28, type: "class" },
  { day: 29, type: "holiday", title: "Diwali", badge: "Holiday" },
  { day: 30, type: "class" },
  { day: 31, type: "class" },
];

export default function CalendarSection() {
  return (
    <section className="relative w-full max-w-6xl px-4 sm:px-6 md:px-12 py-16 md:py-32 z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Academic Calendar Mockup matching retop-ext */}
        <div className="calendar-card bg-(--bg-card) border border-(--border-subtle) rounded-2xl p-3 sm:p-5 flex flex-col gap-3 shadow-sm pointer-events-none select-none">
          {/* Top Bar: Month, Semester, and View Controls */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-1">
            <div className="flex items-baseline gap-2">
              <h3 className="font-title-base text-base sm:text-lg text-(--text-main) font-black leading-none">
                October 2026
              </h3>
              <span className="text-xs font-bold text-(--text-muted)">•</span>
              <span className="text-xs font-semibold text-(--text-muted)">
                Fall Semester 2026-27
              </span>
            </div>

            {/* Controls matching retop-ext */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5 bg-(--bg-surface) rounded-lg p-0.5 border border-(--border-subtle)">
                <div className="w-6 h-6 flex items-center justify-center rounded text-(--text-muted)">
                  <ChevronLeft className="w-3.5 h-3.5" />
                </div>
                <div className="w-6 h-6 flex items-center justify-center rounded text-(--text-muted)">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="flex items-center bg-(--bg-surface) rounded-lg p-0.5 border border-(--border-subtle)">
                <div className="px-2 py-1 rounded bg-(--accent) text-(--on-accent) flex items-center gap-1 text-[11px] font-bold">
                  <GridView className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Grid</span>
                </div>
                <div className="px-2 py-1 rounded text-(--text-muted) flex items-center gap-1 text-[11px] font-medium">
                  <List className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">List</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category legend pills matching retop-ext */}
          <div className="flex items-center gap-2 text-xs flex-wrap pb-1">
            <span className="flex items-center gap-1.5 text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Holiday
            </span>
            <span className="flex items-center gap-1.5 text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
              Exam
            </span>
            <span className="flex items-center gap-1.5 text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
              Event
            </span>
            <span className="flex items-center gap-1.5 text-(--text-muted) bg-(--bg-surface) px-2 py-0.5 rounded-full text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-(--accent) inline-block" />
              Instructional
            </span>
          </div>

          {/* Weekday headers: SUN MON TUE WED THU FRI SAT */}
          <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
            {WEEKDAYS.map((d, i) => (
              <div
                key={d}
                className={`text-center text-[10px] sm:text-xs font-black py-1 ${
                  i === 0 ? "text-red-400" : "text-(--text-muted)"
                }`}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Days grid: 35 cells (4 offset + 31 days) */}
          <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
            {/* 4 blank cells for Thursday start offset */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={`offset-${i}`} className="aspect-square sm:aspect-auto sm:min-h-[58px]" />
            ))}

            {DAYS.map((item) => {
              const isToday = item.type === "today";
              const isHoliday = item.type === "holiday";
              const isExam = item.type === "exam";
              const isEvent = item.type === "event";

              let containerClass = "bg-(--bg-surface) border border-(--border-subtle)";
              let numClass = "text-(--text-main) font-bold";

              if (isToday) {
                containerClass = "bg-(--bg-card) ring-2 ring-(--accent) shadow-xs";
              } else if (isHoliday) {
                containerClass = "bg-red-500/15 border border-red-500/25";
                numClass = "text-red-400 font-black";
              } else if (isExam) {
                containerClass = "bg-amber-500/15 border border-amber-500/25";
                numClass = "text-amber-400 font-black";
              } else if (isEvent) {
                containerClass = "bg-purple-500/15 border border-purple-500/25";
                numClass = "text-purple-400 font-black";
              }

              return (
                <div
                  key={item.day}
                  className={`p-1 sm:p-1.5 rounded-lg sm:rounded-xl flex flex-col justify-between aspect-square sm:aspect-auto sm:min-h-[58px] ${containerClass}`}
                >
                  <div className="flex items-center justify-between">
                    {isToday ? (
                      <span className="w-5 h-5 rounded-full bg-(--accent) text-(--on-accent) font-black text-[10px] flex items-center justify-center">
                        {item.day}
                      </span>
                    ) : (
                      <span className={`text-[11px] sm:text-xs leading-none ${numClass}`}>
                        {item.day}
                      </span>
                    )}

                    {item.badge && (
                      <span className="hidden md:inline-block text-[8px] font-bold uppercase px-1 py-0.2 rounded bg-current/15 text-current">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {item.title && (
                    <div className="hidden sm:flex flex-col mt-auto pt-0.5">
                      <span className="text-[9px] font-bold leading-tight line-clamp-1">
                        {item.title}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Text */}
        <div className="calendar-text flex flex-col gap-6">
          <h2 className="font-title-base text-3xl sm:text-4xl md:text-5xl text-(--text-main) leading-none">
            {calendarCopy.heading}
          </h2>
          <div className="flex flex-col gap-6 mt-2 pr-4">
            {calendarCopy.items.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <h3 className="text-(--text-main) uppercase text-sm font-bold">
                  {item.title}
                </h3>
                <p className="text-(--text-main) opacity-90 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
