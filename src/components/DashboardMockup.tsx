"use client";

import React from "react";
import {
  Person,
  Campaign,
  School,
  Star,
  Refresh,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

/* ── font-variation presets matching ext input.css exactly ── */
const fvExpanded = "'wdth' 125, 'wght' 800, 'GRAD' 100, 'ROND' 100";

/* ── redacted pill ── */
const Pill = ({ w = 96, h = 12 }: { w?: number; h?: number }) => (
  <div
    style={{
      width: w,
      height: h,
      borderRadius: 999,
      background: "var(--text-main)",
      opacity: 0.18,
      flexShrink: 0,
    }}
  />
);

/* ── attendance row ── */
const ATT: Record<string, string> = {
  red: "#ef4444",
  blue: "#3b82f6",
  green: "#16a34a",
};

const AttRow = ({ pct, color }: { pct: number; color: string }) => (
  <div
    style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 14px",
      borderRadius: 12,
      background: "var(--bg-card)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: `${pct}%`,
        background: `color-mix(in srgb, ${ATT[color]} 25%, var(--bg-surface))`,
      }}
    />
    <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
      <Pill w={100} />
      <span
        style={{
          fontSize: 9,
          fontWeight: 900,
          fontVariationSettings: fvExpanded,
          textTransform: "uppercase",
          padding: "2px 6px",
          borderRadius: 6,
          background: "color-mix(in srgb, var(--text-main) 6%, transparent)",
          color: "var(--text-muted)",
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        TH
      </span>
    </div>
    <div
      style={{
        position: "relative",
        zIndex: 1,
        flexShrink: 0,
        fontWeight: 900,
        fontSize: 11,
        padding: "4px 10px",
        borderRadius: 8,
        background: ATT[color],
        color: "#000",
      }}
    >
      <Pill w={24} h={10} />
    </div>
  </div>
);

/* ── spotlight bar (redacted) ── */
const SpotBar = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 14px",
      background: "var(--bg-elevated)",
    }}
  >
    <Pill w={180} h={10} />
  </div>
);

/* ── class card ── */
const ClassCard = ({ time, done = false }: { time: string; done?: boolean }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: 14,
      backgroundColor: "rgb(140, 0, 83)",
      color: "rgb(255, 236, 241)",
      opacity: done ? 0.3 : 0.9,
      filter: done ? "grayscale(1) saturate(0)" : undefined,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{time}</span>
      <Pill w={120} h={14} />
    </div>
    <Pill w={48} h={12} />
  </div>
);

/* ── exam card ── */
const ExamCard = () => (
  <div
    style={{
      padding: 12,
      backgroundColor: "rgb(105, 0, 179)",
      color: "rgb(250, 236, 255)",
      opacity: 0.9,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span
        style={{
          padding: "2px 6px",
          borderRadius: 4,
          background: "rgba(0,0,0,0.15)",
          fontSize: 9,
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          flexShrink: 0,
        }}
      >
        CAT1
      </span>
      <Pill w={56} h={10} />
      <Pill w={100} h={12} />
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 6,
        marginTop: 6,
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div style={{ display: "flex", gap: 12 }}>
        <Pill w={90} h={10} />
        <Pill w={56} h={10} />
      </div>
      <Pill w={64} h={10} />
    </div>
  </div>
);

/* ── assignment row ── */
const AssignmentRow = () => (
  <div style={{ padding: 12, background: "var(--bg-card)", borderRadius: 16 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 8 }}>
      <Pill w={110} h={12} />
      <Pill w={80} h={10} />
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
      <Pill w={64} h={8} />
    </div>
  </div>
);

/* ── day row ── */
const DayRow = ({
  date,
  dayLabel,
  isToday = false,
  label,
  subLabel,
  children,
}: {
  date: number;
  dayLabel: string;
  isToday?: boolean;
  label: string;
  subLabel?: string;
  children: React.ReactNode;
}) => (
  <div style={{ display: "flex", gap: 12, marginBottom: 16, position: "relative" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 48, paddingTop: 4 }}>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 14,
          marginBottom: 2,
          background: isToday ? "var(--accent)" : "transparent",
          color: isToday ? "var(--on-accent)" : "var(--text-main)",
        }}
      >
        {date}
      </div>
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          fontVariationSettings: fvExpanded,
          textTransform: "uppercase",
          color: isToday ? "var(--accent)" : "var(--text-muted)",
        }}
      >
        {dayLabel}
      </div>
    </div>
    <div style={{ flex: 1, minWidth: 0, paddingBottom: 16, paddingLeft: 16, borderLeft: "2px solid color-mix(in srgb, var(--text-main) 12%, transparent)" }}>
      <div style={{ paddingBottom: 8 }}>
        <span
          style={{
            fontWeight: 900,
            fontVariationSettings: fvExpanded,
            textTransform: "uppercase",
            fontSize: 14,
            color: "var(--text-main)",
          }}
        >
          {label}
        </span>
        {subLabel && (
          <span style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginTop: 2 }}>
            {subLabel}
          </span>
        )}
      </div>
      {children}
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════ */
export const DashboardMockup = () => (
  <div
    style={{
      width: "100%",
      aspectRatio: "16/9",
      display: "flex",
      overflow: "hidden",
      borderRadius: 24,
      background: "var(--bg-surface)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
      pointerEvents: "auto",
      userSelect: "none",
      position: "relative",
    }}
  >
    {/* ── TOPBAR ── */}
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        zIndex: 100,
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(180deg, color-mix(in srgb, var(--bg-surface) 95%, transparent) 0%, transparent 100%)",
      }}
    >
      {/* re• + Search */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: 4, paddingLeft: 8 }}>
          <span
            style={{
              fontVariationSettings: fvExpanded,
              fontSize: 28,
              fontStyle: "italic",
              textTransform: "lowercase",
              lineHeight: 1,
              color: "var(--text-main)",
            }}
          >
            re
          </span>
          <div
            style={{
              marginLeft: -3,
              marginBottom: 3,
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent)",
              flexShrink: 0,
            }}
          />
        </div>
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "var(--text-main)",
          }}
        >
          Search
        </span>
      </div>

      {/* Right controls: Star, Reload, Profile Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
          }}
        >
          <Star style={{ width: 20, height: 20, color: "var(--text-muted)" }} />
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
          }}
        >
          <Refresh style={{ width: 20, height: 20, color: "var(--text-muted)" }} />
        </div>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-elevated)",
          }}
        >
          <Person style={{ width: 20, height: 20, color: "var(--text-muted)" }} />
        </div>
      </div>
    </header>

    {/* ── LEFT PANE ── */}
    <div
      style={{
        width: "27%",
        flexShrink: 0,
        height: "100%",
        overflow: "hidden",
        paddingTop: 80,
        paddingBottom: 24,
        paddingLeft: 32,
        paddingRight: 16,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        zIndex: 40,
      }}
    >
      {/* Attendance */}
      <div style={{ flexShrink: 0, borderRadius: 24, background: "var(--bg-elevated)", overflow: "hidden" }}>
        <div style={{ padding: "16px 16px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                fontVariationSettings: fvExpanded,
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 4,
              }}
            >
              Attendance
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 900,
                fontVariationSettings: fvExpanded,
                lineHeight: 1,
                color: "var(--text-main)",
              }}
            >
              90%
            </div>
          </div>
        </div>
        <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 2 }}>
          <AttRow pct={75} color="red" />
          <AttRow pct={85} color="blue" />
          <AttRow pct={85} color="blue" />
          <AttRow pct={85} color="blue" />
          <AttRow pct={92} color="green" />
          <AttRow pct={93} color="green" />
          <AttRow pct={100} color="green" />
        </div>
      </div>

      {/* Spotlight */}
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
          <span
            style={{
              fontWeight: 900,
              fontVariationSettings: fvExpanded,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--text-main)",
            }}
          >
            Spotlight
          </span>
          <Campaign style={{ width: 28, height: 28, color: "var(--text-main)", mixBlendMode: "overlay" as const, opacity: 0.8 }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Academics */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                fontVariationSettings: fvExpanded,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-muted)",
                paddingLeft: 4,
              }}
            >
              Academics
            </span>
            <div style={{ borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", gap: 2 }}>
              <SpotBar />
            </div>
          </div>

          {/* Events */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                fontVariationSettings: fvExpanded,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-muted)",
                paddingLeft: 4,
              }}
            >
              Events
            </span>
            <div style={{ borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", gap: 2 }}>
              <SpotBar />
              <SpotBar />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── CENTER PANE ── */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden", position: "relative" }}>
      {/* Month header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 80,
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
          position: "relative",
          zIndex: 10,
          background: "linear-gradient(180deg, color-mix(in srgb, var(--bg-surface) 95%, transparent) 70%, transparent 100%)",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text-main)" }}>August 2026</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 900,
              fontVariationSettings: fvExpanded,
              color: "var(--text-main)",
            }}
          >
            Fall Semester 2026-27
          </span>
          <div style={{ width: 128, height: 3, marginTop: 4, borderRadius: 999, background: "color-mix(in srgb, var(--text-main) 12%, transparent)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: "25%", borderRadius: 999, background: "var(--accent)" }} />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          padding: "8px 16px 32px",
          maskImage: "linear-gradient(transparent, black 3%, black)",
          WebkitMaskImage: "linear-gradient(transparent, black 3%, black)",
        }}
      >
        <DayRow date={4} dayLabel="Tue" isToday label="Instructional Day">
          <div style={{ display: "flex", flexDirection: "column", gap: 2, borderRadius: 16, overflow: "hidden", marginBottom: 8 }}>
            <ClassCard time="08:00" done />
            <ClassCard time="09:00" done />
            <ClassCard time="10:00" done />
            <ClassCard time="11:00" done />
            <ClassCard time="14:00" done />
          </div>
        </DayRow>

        <DayRow date={5} dayLabel="Wed" label="Instructional Day">
          <div style={{ display: "flex", flexDirection: "column", gap: 2, borderRadius: 16, overflow: "hidden", marginBottom: 8 }}>
            <ClassCard time="08:00" />
            <ClassCard time="09:00" />
            <ClassCard time="10:00" />
          </div>
        </DayRow>

        <DayRow date={9} dayLabel="Sun" label="CAT - I" subLabel="(Exam Day)">
          <div style={{ display: "flex", flexDirection: "column", gap: 2, borderRadius: 16, overflow: "hidden", marginBottom: 8 }}>
            <ExamCard />
          </div>
        </DayRow>

        <DayRow date={10} dayLabel="Mon" label="CAT - I" subLabel="(Exam Day)">
          <div style={{ display: "flex", flexDirection: "column", gap: 2, borderRadius: 16, overflow: "hidden", marginBottom: 8 }}>
            <ExamCard />
          </div>
        </DayRow>
      </div>
    </div>

    {/* ── RIGHT PANE ── */}
    <div
      style={{
        width: "23%",
        flexShrink: 0,
        height: "100%",
        overflow: "hidden",
        paddingTop: 80,
        paddingBottom: 24,
        paddingLeft: 16,
        paddingRight: 32,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        zIndex: 30,
      }}
    >
      {/* CGPA + Credits */}
      <div style={{ flexShrink: 0, borderRadius: 24, padding: 16, background: "var(--bg-elevated)" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
          <div style={{ textAlign: "right" as const }}>
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                fontVariationSettings: fvExpanded,
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 2,
              }}
            >
              Credits
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 4 }}>
              <Pill w={40} h={20} />
              <span style={{ color: "var(--text-muted)", fontSize: 14, fontWeight: 700 }}>/</span>
              <Pill w={32} h={16} />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <School style={{ width: 36, height: 36, color: "var(--text-main)", opacity: 0.8, mixBlendMode: "overlay" }} />
          <div style={{ textAlign: "right" as const }}>
            <div
              style={{
                fontSize: 9,
                fontWeight: 700,
                fontVariationSettings: fvExpanded,
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 2,
              }}
            >
              CGPA
            </div>
            <Pill w={56} h={24} />
          </div>
        </div>
      </div>

      {/* Pending Assignments */}
      <div style={{ flexShrink: 0, borderRadius: 24, background: "var(--bg-elevated)", overflow: "hidden" }}>
        <div style={{ padding: "12px 16px" }}>
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              fontVariationSettings: fvExpanded,
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Pending Assignments
          </span>
        </div>
        <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 6 }}>
          <AssignmentRow />
          <AssignmentRow />
        </div>
      </div>
    </div>
  </div>
);
