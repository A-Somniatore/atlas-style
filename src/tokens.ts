/** Atlas design tokens as JS constants — use these in MUI sx props, styled-components, etc. */

export const atlas = {
  bg: {
    base: "#0d0d0d",
    surface: "#171717",
    elevated: "#262626",
    input: "#333333",
  },
  text: {
    primary: "#eeeeee",
    secondary: "#9b9b9b",
    tertiary: "#676767",
  },
  border: {
    default: "#333333",
    subtle: "#262626",
  },
  accent: {
    main: "#7c4dff",
    hover: "#9e74ff",
    muted: "rgba(124, 77, 255, 0.12)",
  },
  status: {
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  },
  font: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  radius: 12,
} as const;

/** Chart-specific colors matching atlas classification semantics */
export const chartColors = {
  simple: "#22c55e",
  reasoning: "#f59e0b",
  code: "#3b82f6",
  explicit: "#7c4dff",
} as const;
