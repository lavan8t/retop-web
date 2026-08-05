import {
  themeFromSourceColor,
  applyTheme,
  argbFromHex,
} from "@material/material-color-utilities";

export type ThemeMode = "light" | "dark" | "amoled";

let currentSourceHex = "#d95a00";
let currentMode: ThemeMode = "dark";

/**
 * Applies a Material Design 3 theme based on a hex source color and mode.
 */
export function applyMaterialTheme(
  hexColor?: string,
  mode?: ThemeMode,
) {
  if (hexColor && hexColor.startsWith("#") && (hexColor.length === 7 || hexColor.length === 4)) {
    currentSourceHex = hexColor;
  }
  if (mode) {
    currentMode = mode;
  }

  const argb = argbFromHex(currentSourceHex);
  const theme = themeFromSourceColor(argb);
  const isDark = currentMode !== "light";

  if (typeof document === "undefined") return;

  // Apply material theme tokens to document body
  applyTheme(theme, { target: document.documentElement, dark: isDark });

  // Set a data attribute so CSS can react to theme mode
  document.documentElement.setAttribute("data-theme", currentMode);

  // Manually override surfaces for AMOLED to pure black
  if (currentMode === "amoled") {
    const root = document.documentElement;
    root.style.setProperty("--md-sys-color-background", "#000000");
    root.style.setProperty("--md-sys-color-surface", "#000000");
    root.style.setProperty("--md-sys-color-surface-container", "#0a0a0a");
    root.style.setProperty("--md-sys-color-surface-container-high", "#0f0f0f");
    root.style.setProperty("--md-sys-color-surface-container-highest", "#141414");
    root.style.setProperty("--md-sys-color-surface-container-low", "#050505");
  }
}

export function getCurrentSourceHex() {
  return currentSourceHex;
}

export function getCurrentMode() {
  return currentMode;
}
