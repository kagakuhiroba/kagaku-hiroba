import { Fragment, useState } from 'react';
import { WEATHER_SOURCES } from '../api/sources';
import ForecastTableHead from '../components/ForecastTableHead';
import { PrecipAmountCell, PrecipProbCell, TempCell, WeatherCell, WindCell } from '../components/WeatherCells';
import type { ForecastData } from '../types';
import { formatDayHeader, formatHourLabel, isSameDay } from '../utils/format';

const RANGE_OPTIONS = [
  { hours: 24, label: '24時間' },
  { hours: 48, label: '48時間' },
  { hours: 72, label: '72時間' },
  { hours: 168, label: '7日間' },
];

export default function HourlyPage({ forecast }: { forecast: ForecastData }) {
  const [hoursToShow, setHoursToShow] = useState(48);

  const baseSeries = forecast.hourly[WEATHER_SOURCES[0].id] ?? [];
  const rows = baseSeries.slice(0, hoursToShow);

  return (
    <div className="page">
      <div className="page__toolbar">
        <label className="range-select">
          表示範囲:
          <select value={hoursToShow} onChange={(e) => setHoursToShow(Number(e.target.value))}>
            {RANGE_OPTIONS.map((opt) => (
              <option key={opt.hours} value={opt.hours}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="table-scroll">
        <table className="forecast-table">
          <ForecastTableHead leftLabel="時刻" />
          <tbody>
            {rows.map((row, i) => {
              const newDay = i === 0 || !isSameDay(row.time, rows[i - 1].time);
              return (
                <tr key={row.time} className={newDay ? 'tr--day-start' : undefined}>
                  <th className="th th--time" scope="row">
                    {newDay && <div className="th__day">{formatDayHeader(row.time)}</div>}
                    <div className="th__hour">{formatHourLabel(row.time)}</div>
                  </th>
                  {WEATHER_SOURCES.map((s) => {
                    const point = forecast.hourly[s.id]?.[i];
                    return (
                      <Fragment key={s.id}>
                        <WeatherCell code={point?.weatherCode ?? null} />
                        <TempCell value={point?.temperature ?? null} />
                        <WindCell speed={point?.windSpeed ?? null} direction={point?.windDirection ?? null} />
                        <PrecipProbCell value={point?.precipitationProbability ?? null} />
                        <PrecipAmountCell value={point?.precipitation ?? null} />
                      </Fragment>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
