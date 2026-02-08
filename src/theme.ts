import { createTheme, type Theme } from "@mui/material/styles";
import { atlas } from "./tokens";

/** Pre-built Atlas MUI theme — clean dark mode matching Open WebUI */
export const atlasTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e8e8e8",
      light: "#ffffff",
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
            backgroundColor: "rgba(255, 255, 255, 0.06)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.09)",
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
