# Design Tokens

Design tokens define the core visual constants (colors, spacing, typography) used across all Atlas applications.

## JavaScript Tokens

```tsx
import { atlas, chartColors } from "@somniatore/atlas-style/tokens/js";
```

### `atlas` Object

```typescript
atlas.bg.base       // "#0d0d0d"  — page background
atlas.bg.surface    // "#171717"  — card/panel background
atlas.bg.elevated   // "#1e1e1e"  — elevated surfaces (modals, popovers)
atlas.bg.input      // "#2a2a2a"  — input field background

atlas.text.primary   // "#e8e8e8" — main text
atlas.text.secondary // "#9b9b9b" — secondary/muted text
atlas.text.tertiary  // "#676767" — disabled/placeholder text

atlas.border.default // "#2a2a2a" — standard borders
atlas.border.subtle  // "#1e1e1e" — subtle dividers

atlas.accent.main   // "#e8e8e8"                — primary accent
atlas.accent.hover  // "#ffffff"                 — hover state
atlas.accent.muted  // "rgba(255,255,255,0.06)" — subtle highlight

atlas.status.success // "#22c55e" — green (healthy, ok)
atlas.status.warning // "#f59e0b" — amber (degraded, slow)
atlas.status.error   // "#ef4444" — red (unhealthy, failed)
atlas.status.info    // "#64b5f6" — blue (informational)

atlas.font   // "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
atlas.radius // 12
```

### `chartColors` Object

Classification-specific colors for charts and visualizations:

```typescript
chartColors.simple    // "#4ade80" — green
chartColors.reasoning // "#fbbf24" — amber
chartColors.code      // "#60a5fa" — blue
chartColors.explicit  // "#a78bfa" — purple
```

## CSS Custom Properties

```tsx
import "@somniatore/atlas-style/tokens";
```

This import makes CSS variables available globally. Use them in any CSS or styled component:

```css
.my-card {
  background: var(--atlas-bg-surface);
  color: var(--atlas-text-primary);
  border: 1px solid var(--atlas-border-subtle);
  border-radius: var(--atlas-radius);
}
```
