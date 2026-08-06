export interface Location {
  id: number;
  name: string;
  admin1?: string;
  country?: string;
  latitude: number;
  longitude: number;
  timezone?: string;
}

export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  country_code?: string;
  admin1?: string;
  admin2?: string;
  timezone?: string;
}

export interface WeatherSource {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
}

export interface HourlyPoint {
  time: string;
  weatherCode: number | null;
  temperature: number | null;
  windSpeed: number | null;
  windDirection: number | null;
  precipitationProbability: number | null;
  precipitation: number | null;
}

export interface DailyPoint {
  date: string;
  weatherCode: number | null;
  temperatureMax: number | null;
  temperatureMin: number | null;
  windSpeedMax: number | null;
  windDirection: number | null;
  precipitationProbabilityMax: number | null;
  precipitationSum: number | null;
}

export type HourlyBySource = Record<string, HourlyPoint[]>;
export type DailyBySource = Record<string, DailyPoint[]>;

export interface ForecastData {
  timezone: string;
  hourly: HourlyBySource;
  daily: DailyBySource;
}
