/** Atlas design tokens — dark theme with gold/cyan accents from the Atlas logo */

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
    main: "#F5A623",
    hover: "#FFD060",
    secondary: "#4FC3F7",
    muted: "rgba(245, 166, 35, 0.08)",
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

/** Chart colors — derived from the Atlas logo palette (gold/cyan) */
export const chartColors = {
  simple: "#4FC3F7",   // Cyan — clean, straightforward requests
  reasoning: "#F5A623", // Gold — complex reasoning tasks
  code: "#26C6DA",     // Teal — code generation
  explicit: "#FFB74D", // Amber — explicit model selection
} as const;
