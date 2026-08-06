import type { GeocodingResult, Location } from '../types';

export async function searchLocations(query: string, signal?: AbortSignal): Promise<Location[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
  url.searchParams.set('name', trimmed);
  url.searchParams.set('count', '10');
  url.searchParams.set('language', 'ja');
  url.searchParams.set('format', 'json');

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) {
    throw new Error(`地点検索に失敗しました (HTTP ${res.status})`);
  }
  const data = await res.json();
  const results: GeocodingResult[] = data.results ?? [];

  return results.map((r) => ({
    id: r.id,
    name: r.name,
    admin1: r.admin1,
    country: r.country,
    latitude: r.latitude,
    longitude: r.longitude,
    timezone: r.timezone,
  }));
}
