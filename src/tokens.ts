/** Atlas design tokens — matches Open WebUI's warm neutral dark aesthetic */

export const atlas = {
  bg: {
    base: "#0d0d0d",
    surface: "#171717",
    elevated: "#1e1e1e",
    input: "#2a2a2a",
  },
  text: {
    primary: "#e8e8e8",
    secondary: "#9b9b9b",
    tertiary: "#676767",
  },
  border: {
    default: "#2a2a2a",
    subtle: "#1e1e1e",
  },
  accent: {
    main: "#e8e8e8",
    hover: "#ffffff",
    muted: "rgba(255, 255, 255, 0.06)",
  },
  status: {
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#64b5f6",
  },
  font: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  radius: 12,
} as const;

/** Chart colors — muted, professional tones */
export const chartColors = {
  simple: "#4ade80",
  reasoning: "#fbbf24",
  code: "#60a5fa",
  explicit: "#a78bfa",
} as const;
