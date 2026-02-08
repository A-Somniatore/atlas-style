/** Format milliseconds as human-readable latency */
export function formatLatency(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

/** Format ISO timestamp to locale string */
export function formatTimestamp(ts: string): string {
  return new Date(ts).toLocaleString();
}

/** Format number with thousand separators */
export function formatNumber(n: number): string {
  return n.toLocaleString();
}

/** Map atlas classification to MUI chip color */
export function classificationColor(
  classification: string,
): "success" | "warning" | "error" | "info" | "default" {
  switch (classification) {
    case "simple":
      return "success";
    case "reasoning":
      return "warning";
    case "code":
      return "info";
    default:
      return "default";
  }
}

/** Map availability boolean to MUI chip color */
export function statusColor(available: boolean): "success" | "error" {
  return available ? "success" : "error";
}
