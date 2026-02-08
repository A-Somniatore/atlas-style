# Atlas Style

Shared design system for Atlas AI applications. Provides a pre-built Material UI dark theme, design tokens (JS + CSS), and utility functions for formatting and color mapping.

## Quick Start

```tsx
import { AtlasProvider } from "@somniatore/atlas-style/provider";

export default function App({ children }) {
  return <AtlasProvider>{children}</AtlasProvider>;
}
```

This wraps your application with the Atlas dark theme (MUI `ThemeProvider` + `CssBaseline`).

## Package Exports

| Path | What it provides |
|------|-----------------|
| `@somniatore/atlas-style` | Everything (barrel) |
| `@somniatore/atlas-style/theme` | `atlasTheme` MUI theme object |
| `@somniatore/atlas-style/provider` | `AtlasProvider` React component |
| `@somniatore/atlas-style/tokens` | CSS custom properties |
| `@somniatore/atlas-style/tokens/js` | `atlas` token object, `chartColors` |
| `@somniatore/atlas-style/utils` | Formatting and color mapping functions |
| `@somniatore/atlas-style/constants` | `DRAWER_WIDTH` (240px) |

## Design Aesthetic

Clean dark mode inspired by Open WebUI. Warm neutral backgrounds with subtle borders and the Inter font family.

- Background: `#0d0d0d` (base) / `#171717` (surface) / `#1e1e1e` (elevated)
- Text: `#e8e8e8` (primary) / `#9b9b9b` (secondary)
- Border radius: 12px
- Font: Inter, system fallbacks
