const WEEKDAYS_JA = ['日', '月', '火', '水', '木', '金', '土'];

export function formatHourLabel(isoTime: string): string {
  const d = new Date(isoTime);
  return `${d.getHours()}時`;
}

export function formatDayHeader(isoTime: string): string {
  const d = new Date(isoTime);
  return `${d.getMonth() + 1}/${d.getDate()}(${WEEKDAYS_JA[d.getDay()]})`;
}

export function formatDateLabel(isoDate: string): string {
  const d = new Date(isoDate);
  return `${d.getMonth() + 1}/${d.getDate()}(${WEEKDAYS_JA[d.getDay()]})`;
}

export function isSameDay(a: string, b: string): boolean {
  return a.slice(0, 10) === b.slice(0, 10);
}

export function fmtNum(v: number | null, digits = 0, unit = ''): string {
  if (v === null) return '−';
  return `${v.toFixed(digits)}${unit}`;
}

export function locationLabel(loc: { name: string; admin1?: string; country?: string }): string {
  const parts = [loc.name];
  if (loc.admin1 && loc.admin1 !== loc.name) parts.push(loc.admin1);
  if (loc.country) parts.push(loc.country);
  return parts.join(' / ');
}
