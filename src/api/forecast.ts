import { WEATHER_SOURCES } from './sources';
import type { DailyPoint, ForecastData, HourlyPoint, Location } from '../types';

const HOURLY_VARS = [
  'weather_code',
  'temperature_2m',
  'wind_speed_10m',
  'wind_direction_10m',
  'precipitation_probability',
  'precipitation',
];
const DAILY_VARS = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
  'wind_speed_10m_max',
  'wind_direction_10m_dominant',
  'precipitation_probability_max',
  'precipitation_sum',
];

type RawBlock = Record<string, unknown>;

// Open-Meteo suffixes each variable with the model id when multiple `models`
// are requested (e.g. `temperature_2m_jma_seamless`). Fall back to the plain
// variable name in case only one model is returned or the API omits the
// suffix, so the UI degrades gracefully instead of crashing.
function pickSeries(block: RawBlock, varName: string, modelId: string): unknown[] | undefined {
  const suffixed = block[`${varName}_${modelId}`];
  if (Array.isArray(suffixed)) return suffixed;
  const plain = block[varName];
  if (Array.isArray(plain)) return plain;
  return undefined;
}

function toNumberOrNull(v: unknown): number | null {
  return typeof v === 'number' && Number.isFinite(v) ? v : null;
}

export async function fetchForecast(location: Location, forecastDays = 7): Promise<ForecastData> {
  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', String(location.latitude));
  url.searchParams.set('longitude', String(location.longitude));
  url.searchParams.set('hourly', HOURLY_VARS.join(','));
  url.searchParams.set('daily', DAILY_VARS.join(','));
  url.searchParams.set('models', WEATHER_SOURCES.map((s) => s.id).join(','));
  url.searchParams.set('wind_speed_unit', 'ms');
  url.searchParams.set('timezone', 'auto');
  url.searchParams.set('forecast_days', String(forecastDays));

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`天気予報の取得に失敗しました (HTTP ${res.status})`);
  }
  const data = await res.json();

  const hourlyBlock: RawBlock = data.hourly ?? {};
  const dailyBlock: RawBlock = data.daily ?? {};
  const hourlyTimes: string[] = Array.isArray(hourlyBlock.time) ? (hourlyBlock.time as string[]) : [];
  const dailyTimes: string[] = Array.isArray(dailyBlock.time) ? (dailyBlock.time as string[]) : [];

  const hourly: ForecastData['hourly'] = {};
  const daily: ForecastData['daily'] = {};

  for (const source of WEATHER_SOURCES) {
    const weatherCode = pickSeries(hourlyBlock, 'weather_code', source.id);
    const temperature = pickSeries(hourlyBlock, 'temperature_2m', source.id);
    const windSpeed = pickSeries(hourlyBlock, 'wind_speed_10m', source.id);
    const windDirection = pickSeries(hourlyBlock, 'wind_direction_10m', source.id);
    const precipProb = pickSeries(hourlyBlock, 'precipitation_probability', source.id);
    const precip = pickSeries(hourlyBlock, 'precipitation', source.id);

    hourly[source.id] = hourlyTimes.map((time, i) => {
      const point: HourlyPoint = {
        time,
        weatherCode: toNumberOrNull(weatherCode?.[i]),
        temperature: toNumberOrNull(temperature?.[i]),
        windSpeed: toNumberOrNull(windSpeed?.[i]),
        windDirection: toNumberOrNull(windDirection?.[i]),
        precipitationProbability: toNumberOrNull(precipProb?.[i]),
        precipitation: toNumberOrNull(precip?.[i]),
      };
      return point;
    });

    const dWeatherCode = pickSeries(dailyBlock, 'weather_code', source.id);
    const dTempMax = pickSeries(dailyBlock, 'temperature_2m_max', source.id);
    const dTempMin = pickSeries(dailyBlock, 'temperature_2m_min', source.id);
    const dWindMax = pickSeries(dailyBlock, 'wind_speed_10m_max', source.id);
    const dWindDirection = pickSeries(dailyBlock, 'wind_direction_10m_dominant', source.id);
    const dPrecipProbMax = pickSeries(dailyBlock, 'precipitation_probability_max', source.id);
    const dPrecipSum = pickSeries(dailyBlock, 'precipitation_sum', source.id);

    daily[source.id] = dailyTimes.map((date, i) => {
      const point: DailyPoint = {
        date,
        weatherCode: toNumberOrNull(dWeatherCode?.[i]),
        temperatureMax: toNumberOrNull(dTempMax?.[i]),
        temperatureMin: toNumberOrNull(dTempMin?.[i]),
        windSpeedMax: toNumberOrNull(dWindMax?.[i]),
        windDirection: toNumberOrNull(dWindDirection?.[i]),
        precipitationProbabilityMax: toNumberOrNull(dPrecipProbMax?.[i]),
        precipitationSum: toNumberOrNull(dPrecipSum?.[i]),
      };
      return point;
    });
  }

  return {
    timezone: typeof data.timezone === 'string' ? data.timezone : 'auto',
    hourly,
    daily,
  };
}
