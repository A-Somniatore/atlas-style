import { createTheme, type Theme } from "@mui/material/styles";
import { atlas } from "./tokens";

/** Pre-built Atlas MUI theme — dark mode with gold/cyan accents */
export const atlasTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: atlas.accent.main,
      light: atlas.accent.hover,
    },
    secondary: {
      main: atlas.accent.secondary,
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
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h4: { fontWeight: 600 },
    h6: { fontWeight: 500 },
  },
  shape: {
    borderRadius: atlas.radius,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: atlas.bg.surface,
          borderRadius: atlas.radius,
          border: `1px solid ${atlas.border.subtle}`,
          transition: "border-color 0.2s ease",
          "&:hover": {
            borderColor: atlas.border.default,
          },
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
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: atlas.accent.muted,
          },
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
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-selected": {
            backgroundColor: atlas.accent.muted,
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(245, 166, 35, 0.12)",
          },
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        },
      },
    },
  },
});

export { createTheme };
