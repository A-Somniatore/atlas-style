# Atlas Style

Shared design system for Atlas AI applications. Provides a Material UI dark theme, design tokens, and utility functions used by `atlas-admin` and other Atlas frontends.

## Installation

```bash
npm install @somniatore/atlas-style --registry https://registry.somniatore.com
```

Peer dependencies: `@emotion/react>=11`, `@emotion/styled>=11`, `@mui/material>=6`, `react>=18`.

## Usage

### Theme Provider

Wrap your app to apply the Atlas dark theme:

```tsx
import { AtlasProvider } from "@somniatore/atlas-style/provider";

export default function App({ children }) {
  return <AtlasProvider>{children}</AtlasProvider>;
}
```

### Theme Object

Import the raw MUI theme for custom use:

```tsx
import { atlasTheme } from "@somniatore/atlas-style/theme";
import { ThemeProvider } from "@mui/material/styles";

<ThemeProvider theme={atlasTheme}>{children}</ThemeProvider>
```

### Design Tokens

```tsx
import { atlas, chartColors } from "@somniatore/atlas-style/tokens/js";

// Colors
atlas.bg.base       // "#0d0d0d"
atlas.bg.surface    // "#171717"
atlas.text.primary  // "#e8e8e8"
atlas.status.success // "#22c55e"

// Chart colors for classification types
chartColors.simple    // "#4ade80"
chartColors.reasoning // "#fbbf24"
chartColors.code      // "#60a5fa"
chartColors.explicit  // "#a78bfa"
```

CSS custom properties are also available:

```tsx
import "@somniatore/atlas-style/tokens";
// Use var(--atlas-bg-base), var(--atlas-text-primary), etc.
```

### Utilities

```tsx
import {
  formatLatency,
  formatTimestamp,
  formatNumber,
  classificationColor,
  statusColor,
} from "@somniatore/atlas-style/utils";

formatLatency(1500)           // "1.50s"
formatLatency(200)            // "200ms"
formatTimestamp(isoString)    // locale-formatted string
formatNumber(12345)           // "12,345"
classificationColor("code")  // "info" (MUI chip color)
statusColor(true)             // "success"
```

### Constants

```tsx
import { DRAWER_WIDTH } from "@somniatore/atlas-style/constants";
// 240 — standard sidebar width
```

## Exports

| Path | Exports |
|------|---------|
| `@somniatore/atlas-style` | `atlasTheme`, `AtlasProvider`, `atlas`, `chartColors`, utils, `DRAWER_WIDTH` |
| `@somniatore/atlas-style/theme` | `atlasTheme`, `createTheme` |
| `@somniatore/atlas-style/provider` | `AtlasProvider` |
| `@somniatore/atlas-style/tokens` | CSS custom properties |
| `@somniatore/atlas-style/tokens/js` | `atlas`, `chartColors` |
| `@somniatore/atlas-style/utils` | `formatLatency`, `formatTimestamp`, `formatNumber`, `classificationColor`, `statusColor` |
| `@somniatore/atlas-style/constants` | `DRAWER_WIDTH` |

## Design Aesthetic

Clean dark mode matching the Open WebUI aesthetic. Warm neutral backgrounds (`#0d0d0d` / `#171717`) with subtle borders and `Inter` font family.
