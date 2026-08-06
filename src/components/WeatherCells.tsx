import { getWeatherCodeInfo } from '../api/weatherCodes';
import { tempToColor, precipProbColor } from '../utils/color';
import { fmtNum } from '../utils/format';

export function WeatherCell({ code }: { code: number | null }) {
  const info = getWeatherCodeInfo(code);
  return (
    <td className="cell cell--weather" title={info.label}>
      <span className="cell__icon" aria-hidden>
        {info.icon}
      </span>
      <span className="cell__weather-label">{info.label}</span>
    </td>
  );
}

export function TempCell({ value, sub }: { value: number | null; sub?: number | null }) {
  const bg = tempToColor(value);
  return (
    <td className="cell cell--temp" style={{ background: bg }}>
      <span className="cell__temp-main">{fmtNum(value, 0, '°')}</span>
      {sub !== undefined && <span className="cell__temp-sub">/{fmtNum(sub ?? null, 0, '°')}</span>}
    </td>
  );
}

export function WindCell({ speed, direction }: { speed: number | null; direction: number | null }) {
  return (
    <td className="cell cell--wind">
      {direction !== null && (
        <span className="cell__wind-arrow" style={{ transform: `rotate(${direction}deg)` }} aria-hidden>
          ↓
        </span>
      )}
      <span>{fmtNum(speed, 1, 'm/s')}</span>
    </td>
  );
}

export function PrecipProbCell({ value }: { value: number | null }) {
  const bg = precipProbColor(value);
  return (
    <td className="cell cell--precip-prob" style={{ background: bg }}>
      {fmtNum(value, 0, '%')}
    </td>
  );
}

export function PrecipAmountCell({ value }: { value: number | null }) {
  const strong = value !== null && value >= 1;
  return <td className={`cell cell--precip-amount${strong ? ' cell--precip-amount--strong' : ''}`}>{fmtNum(value, 1, 'mm')}</td>;
}
