import { Fragment } from 'react';
import { WEATHER_SOURCES } from '../api/sources';
import ForecastTableHead from '../components/ForecastTableHead';
import { PrecipAmountCell, PrecipProbCell, TempCell, WeatherCell, WindCell } from '../components/WeatherCells';
import type { ForecastData } from '../types';
import { formatDateLabel } from '../utils/format';

export default function WeeklyPage({ forecast }: { forecast: ForecastData }) {
  const baseSeries = forecast.daily[WEATHER_SOURCES[0].id] ?? [];

  return (
    <div className="page">
      <div className="table-scroll">
        <table className="forecast-table">
          <ForecastTableHead leftLabel="日付" />
          <tbody>
            {baseSeries.map((row, i) => (
              <tr key={row.date}>
                <th className="th th--time" scope="row">
                  <div className="th__day">{formatDateLabel(row.date)}</div>
                </th>
                {WEATHER_SOURCES.map((s) => {
                  const point = forecast.daily[s.id]?.[i];
                  return (
                    <Fragment key={s.id}>
                      <WeatherCell code={point?.weatherCode ?? null} />
                      <TempCell value={point?.temperatureMax ?? null} sub={point?.temperatureMin ?? null} />
                      <WindCell speed={point?.windSpeedMax ?? null} direction={point?.windDirection ?? null} />
                      <PrecipProbCell value={point?.precipitationProbabilityMax ?? null} />
                      <PrecipAmountCell value={point?.precipitationSum ?? null} />
                    </Fragment>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
