"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { atlasTheme } from "./theme";

/** Wrap your app with AtlasProvider to apply the Atlas dark theme + CSS baseline. */
export function AtlasProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={atlasTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
