"use client";

import { useTheme } from "@/components/ThemeProvider";
import {
  Check,
  WbSunny,
  DarkMode,
  Computer,
} from "@nine-thirty-five/material-symbols-react/rounded/700/filled";

// Mirrors COLORS in retop-ext settings.tsx exactly
const COLORS = [
  { id: "grey",   hex: "#71717a", label: "Monochrome" },
  { id: "red",    hex: "#ef4444", label: "Red" },
  { id: "orange", hex: "#f97316", label: "Orange" },
  { id: "yellow", hex: "#eab308", label: "Yellow" },
  { id: "green",  hex: "#22c55e", label: "Green" },
  { id: "blue",   hex: "#3b82f6", label: "Blue" },
  { id: "indigo", hex: "#6366f1", label: "Indigo" },
  { id: "purple", hex: "#a855f7", label: "Purple" },
  { id: "pink",   hex: "#ec4899", label: "Pink" },
  { id: "cyan",   hex: "#06b6d4", label: "Cyan" },
  { id: "lime",   hex: "#84cc16", label: "Lime" },
];

const THEME_OPTIONS = [
  { id: "light", label: "Light",  Icon: WbSunny  },
  { id: "dark",  label: "Dark",   Icon: DarkMode  },
  { id: "auto",  label: "System", Icon: Computer  },
] as const;

export default function ThemesSection() {
  const { themeMode, setThemeMode, accentName, setAccent } = useTheme();

  return (
    <section className="relative w-full max-w-6xl px-6 md:px-12 py-32 flex flex-col gap-16 z-20">
      {/* Heading */}
      <div className="themes-heading flex flex-col gap-4">
        <h2 className="font-title-base text-[clamp(2rem,5vw,4rem)] text-(--text-main) leading-none tracking-tighter">
          Make it yours.
        </h2>
        <p className="text-(--text-muted) text-base leading-relaxed font-medium max-w-lg">
          11 accent presets. 3 theme modes. When you switch, the entire UI
          follows — every card, every border, every glow.
        </p>
      </div>

      <div className="flex justify-center max-w-2xl mx-auto w-full">
        {/* Appearance Card — same structure as ext SettingTopicCard */}
        <div className="appearance-box flex flex-col gap-6 bg-(--bg-card) border border-(--border-subtle) p-7 rounded-3xl w-full">
          <h3 className="text-xs font-bold text-(--text-muted) uppercase tracking-widest">
            Appearance
          </h3>

          <div className="flex flex-col gap-6 w-full">
            {/* Color Scheme — icon button grid, same as ext */}
            <div className="flex flex-col gap-2 w-full">
              <span className="text-xs font-bold text-(--text-muted) uppercase tracking-wider">
                Color Scheme
              </span>
              <div className="flex items-center justify-around w-full py-2">
                {THEME_OPTIONS.map(({ id, label, Icon }) => {
                  const isActive =
                    themeMode === id ||
                    (id === "dark" && themeMode === "amoled");
                  return (
                    <button
                      key={id}
                      onClick={() => setThemeMode(id as any)}
                      className={`flex flex-col items-center justify-center gap-2 p-3 w-20 h-20 rounded-2xl transition-all cursor-pointer border-0 ${
                        isActive
                          ? "bg-(--accent) text-(--on-accent) shadow-md"
                          : "bg-transparent hover:bg-(--border-subtle) text-(--text-muted) hover:text-(--text-main)"
                      }`}
                    >
                      <Icon className="w-8 h-8 shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accent dots — same as ext */}
            <div className="flex flex-col gap-2 w-full">
              <span className="text-xs font-bold text-(--text-muted) uppercase tracking-wider">
                Accent
              </span>
              <div className="flex flex-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden gap-3 snap-x py-3 px-1 min-w-0">
                {COLORS.map((c) => {
                  const isActive = accentName.toLowerCase() === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setAccent(c.label, c.hex)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shrink-0 cursor-pointer ${
                        isActive
                          ? "ring-2 ring-offset-2 ring-(--text-main) scale-105"
                          : "hover:scale-105 opacity-80 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.label}
                    >
                      {isActive && <Check className="w-4 h-4 text-white" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
