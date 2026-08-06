import { WEATHER_SOURCES } from '../api/sources';

const METRIC_LABELS = ['天気', '気温', '風速', '降水確率', '降水量'];

export default function ForecastTableHead({ leftLabel }: { leftLabel: string }) {
  return (
    <thead>
      <tr className="thead-row thead-row--source">
        <th rowSpan={2} className="th th--corner">
          {leftLabel}
        </th>
        {WEATHER_SOURCES.map((s) => (
          <th key={s.id} colSpan={5} className="th th--source" style={{ borderTopColor: s.color }}>
            <span className="th__dot" style={{ background: s.color }} aria-hidden />
            {s.shortLabel}
          </th>
        ))}
      </tr>
      <tr className="thead-row thead-row--metric">
        {WEATHER_SOURCES.map((s) =>
          METRIC_LABELS.map((m) => (
            <th key={`${s.id}-${m}`} className="th th--metric">
              {m}
            </th>
          )),
        )}
      </tr>
    </thead>
  );
}
