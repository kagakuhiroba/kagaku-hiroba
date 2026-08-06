import { WEATHER_SOURCES } from '../api/sources';

export default function SourceLegend() {
  return (
    <div className="source-legend">
      <span className="source-legend__label">比較ソース:</span>
      {WEATHER_SOURCES.map((s) => (
        <span key={s.id} className="source-legend__item">
          <span className="source-legend__dot" style={{ background: s.color }} aria-hidden />
          {s.label}
        </span>
      ))}
    </div>
  );
}
