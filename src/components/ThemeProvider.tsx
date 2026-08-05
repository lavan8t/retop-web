"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { applyMaterialTheme, getCurrentSourceHex, getCurrentMode, type ThemeMode } from "@/lib/material-theme";

interface ThemeContextType {
  themeMode: ThemeMode;
  accentHex: string;
  accentName: string;
  isRandom: boolean;
  setThemeMode: (mode: ThemeMode, event?: React.MouseEvent) => void;
  setAccent: (name: string, hex: string, event?: React.MouseEvent) => void;
  setRandomAccent: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeMode: "dark",
  accentHex: "#d95a00",
  accentName: "Orange",
  isRandom: false,
  setThemeMode: () => {},
  setAccent: () => {},
  setRandomAccent: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>("dark");
  const [accentHex, setAccentHex] = useState("#d95a00");
  const [accentName, setAccentName] = useState("Orange");
  const [isRandom, setIsRandom] = useState(false);

  // Extension accent → hex mapping (mirrors settings-store.ts MATERIAL_ACCENTS)
  const EXT_ACCENT_MAP: Record<string, string> = {
    grey: "#71717a", red: "#ef4444", orange: "#f97316",
    yellow: "#eab308", green: "#22c55e", cyan: "#06b6d4",
    sky: "#0ea5e9", blue: "#3b82f6", indigo: "#6366f1",
    purple: "#a855f7", pink: "#ec4899", lime: "#84cc16",
    monochrome: "#71717a",
  };

  // Initialize material web components + theme (ext settings if available, else orange default)
  useEffect(() => {
    import("@material/web/switch/switch.js");
    import("@material/web/radio/radio.js");

    let hex = "#d95a00";
    let mode: ThemeMode = "dark";

    try {
      const raw = localStorage.getItem("retop-settings");
      if (raw) {
        const parsed = JSON.parse(raw);
        const s = parsed.state?.settings || parsed;
        if (s?.accentColor && EXT_ACCENT_MAP[s.accentColor]) {
          hex = EXT_ACCENT_MAP[s.accentColor];
          setAccentHex(hex);
          setAccentName(s.accentColor.charAt(0).toUpperCase() + s.accentColor.slice(1));
        }
        if (s?.themeMode === "light" || s?.themeMode === "dark" || s?.themeMode === "amoled") {
          mode = s.themeMode;
          setThemeModeState(mode);
        }
      }
    } catch {}

    applyMaterialTheme(hex, mode);
  }, []);

  const setThemeMode = useCallback((mode: ThemeMode, event?: React.MouseEvent) => {
    setThemeModeState(mode);
    applyMaterialTheme(undefined, mode);
  }, []);

  const setAccent = useCallback((name: string, hex: string, event?: React.MouseEvent) => {
    setIsRandom(false);
    setAccentName(name);
    setAccentHex(hex);
    applyMaterialTheme(hex);
  }, []);

  const setRandomAccent = useCallback((event?: React.MouseEvent) => {
    const randomHues = ["#2563eb", "#9333ea", "#ec4899", "#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4"];
    const hex = randomHues[Math.floor(Math.random() * randomHues.length)];
    setIsRandom(true);
    setAccentName("Random");
    setAccentHex(hex);
    applyMaterialTheme(hex);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        accentHex,
        accentName,
        isRandom,
        setThemeMode,
        setAccent,
        setRandomAccent,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
