import { createTheme, type Theme } from "@mui/material/styles";
import { atlas } from "./tokens";

/** Pre-built Atlas MUI theme — dark mode, neutral gray palette, purple accent */
export const atlasTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: atlas.accent.main,
      light: atlas.accent.hover,
    },
    secondary: {
      main: atlas.status.info,
    },
    background: {
      default: atlas.bg.base,
      paper: atlas.bg.surface,
    },
    text: {
      primary: atlas.text.primary,
      secondary: atlas.text.secondary,
    },
    divider: atlas.border.default,
    success: { main: atlas.status.success },
    warning: { main: atlas.status.warning },
    error: { main: atlas.status.error },
    info: { main: atlas.status.info },
  },
  typography: {
    fontFamily: atlas.font,
  },
  shape: {
    borderRadius: atlas.radius,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: atlas.radius,
          border: `1px solid ${atlas.border.subtle}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: atlas.border.subtle,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: atlas.border.subtle,
        },
      },
    },
  },
});

export { createTheme };
