# CLAUDE.md - Atlas Style

## Overview

Shared design system for Atlas AI applications. MUI dark theme + design tokens + utility functions.

## Tech Stack

- **Package**: `@somniatore/atlas-style` v0.1.2
- **Registry**: `registry.somniatore.com`
- **Peer deps**: `@emotion/react>=11`, `@emotion/styled>=11`, `@mui/material>=6`, `react>=18`

## Structure

```
src/
├── index.ts           # Barrel exports (everything)
├── theme.ts           # MUI dark theme (atlasTheme)
├── AtlasProvider.tsx   # ThemeProvider + CssBaseline wrapper
├── tokens.ts          # Design tokens (JS object: atlas, chartColors)
├── tokens.css         # Design tokens (CSS custom properties)
├── utils.ts           # formatLatency, formatTimestamp, formatNumber, classificationColor, statusColor
└── constants.ts       # DRAWER_WIDTH = 240
```

## Exports

- `atlasTheme` — Material UI `Theme` (dark mode, Inter font)
- `AtlasProvider` — React component wrapping `ThemeProvider` + `CssBaseline`
- `atlas` — Design token object (bg, text, border, accent, status, font, radius)
- `chartColors` — Classification colors (simple, reasoning, code, explicit)
- `formatLatency(ms)` — "200ms" or "1.50s"
- `formatTimestamp(iso)` — Locale-formatted date
- `formatNumber(n)` — Thousand-separated
- `classificationColor(c)` — MUI chip color name
- `statusColor(available)` — "success" or "error"
- `DRAWER_WIDTH` — 240

## Consumers

- `atlas-admin` (Next.js dashboard)
