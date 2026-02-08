# Utilities

Formatting and color mapping functions shared across Atlas frontends.

```tsx
import {
  formatLatency,
  formatTimestamp,
  formatNumber,
  classificationColor,
  statusColor,
} from "@somniatore/atlas-style/utils";
```

## `formatLatency(ms: number): string`

Formats milliseconds as human-readable latency.

```tsx
formatLatency(200)   // "200ms"
formatLatency(1500)  // "1.50s"
formatLatency(50)    // "50ms"
```

## `formatTimestamp(ts: string): string`

Formats an ISO 8601 timestamp to a locale-formatted date string.

```tsx
formatTimestamp("2026-02-08T12:00:00Z")  // "2/8/2026, 12:00:00 PM" (locale-dependent)
```

## `formatNumber(n: number): string`

Formats a number with thousand separators.

```tsx
formatNumber(12345)   // "12,345"
formatNumber(1000000) // "1,000,000"
```

## `classificationColor(classification: string): MuiChipColor`

Maps an Atlas classification to a Material UI chip color name.

| Classification | Returns |
|---------------|---------|
| `"simple"` | `"success"` (green) |
| `"reasoning"` | `"warning"` (amber) |
| `"code"` | `"info"` (blue) |
| other | `"default"` |

```tsx
<Chip label={classification} color={classificationColor(classification)} />
```

## `statusColor(available: boolean): "success" | "error"`

Maps an availability boolean to a chip color.

```tsx
<Chip label={available ? "Online" : "Offline"} color={statusColor(available)} />
```
