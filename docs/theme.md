# Theme

The `atlasTheme` is a pre-built Material UI v6 theme configured for dark mode.

## Usage

### With AtlasProvider (recommended)

```tsx
import { AtlasProvider } from "@somniatore/atlas-style/provider";

function App({ children }) {
  return <AtlasProvider>{children}</AtlasProvider>;
}
```

`AtlasProvider` wraps MUI's `ThemeProvider` + `CssBaseline` so you don't need to set them up manually.

### Direct theme access

```tsx
import { atlasTheme } from "@somniatore/atlas-style/theme";
import { ThemeProvider } from "@mui/material/styles";

<ThemeProvider theme={atlasTheme}>{children}</ThemeProvider>
```

## Theme Configuration

### Palette

| Key | Value | Description |
|-----|-------|-------------|
| `mode` | `"dark"` | Dark mode |
| `primary.main` | `#e8e8e8` | Near-white primary |
| `secondary.main` | `#64b5f6` | Info blue |
| `background.default` | `#0d0d0d` | Page background |
| `background.paper` | `#171717` | Card/surface background |
| `text.primary` | `#e8e8e8` | Primary text |
| `text.secondary` | `#9b9b9b` | Secondary text |
| `divider` | `#2a2a2a` | Border color |
| `success.main` | `#22c55e` | Green |
| `warning.main` | `#f59e0b` | Amber |
| `error.main` | `#ef4444` | Red |
| `info.main` | `#64b5f6` | Blue |

### Typography

- Font family: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- Regular weight: 400, medium: 500
- h4: weight 600, h6: weight 500

### Shape

- Border radius: 12px

### Component Overrides

- **MuiCard**: No background image, surface background, subtle border
- **MuiPaper**: No background image
- **MuiTableCell**: Subtle border bottom
- **MuiDivider**: Subtle border color
- **MuiChip**: Medium font weight (500)
- **MuiListItemButton**: Rounded corners (8px), subtle hover/selected states
