// Cold (blue) -> mild (green/yellow) -> hot (red) heat-map for temperature cells.
export function tempToColor(v: number | null): string {
  if (v === null) return 'transparent';
  const clamped = Math.max(-10, Math.min(38, v));
  const ratio = (clamped + 10) / 48; // 0..1
  const hue = 230 - ratio * 230; // 230 (blue) -> 0 (red)
  return `hsl(${hue}, 75%, 88%)`;
}

// Precipitation probability -> blue intensity bar.
export function precipProbColor(v: number | null): string {
  if (v === null) return 'transparent';
  const ratio = Math.max(0, Math.min(100, v)) / 100;
  return `hsla(212, 85%, 45%, ${0.12 + ratio * 0.68})`;
}
