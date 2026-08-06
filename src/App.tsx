import { useState } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import LocationSearch from './components/LocationSearch';
import SourceLegend from './components/SourceLegend';
import { useForecast } from './hooks/useForecast';
import HourlyPage from './pages/HourlyPage';
import WeeklyPage from './pages/WeeklyPage';
import type { Location } from './types';
import { locationLabel } from './utils/format';

const DEFAULT_LOCATION: Location = {
  id: 1850147,
  name: '東京',
  admin1: '東京都',
  country: '日本',
  latitude: 35.6895,
  longitude: 139.6917,
  timezone: 'Asia/Tokyo',
};

export default function App() {
  const [location, setLocation] = useState<Location>(DEFAULT_LOCATION);
  const { data, loading, error } = useForecast(location);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__top">
          <h1 className="app-header__title">マルチ天気予報</h1>
          <LocationSearch onSelect={setLocation} />
        </div>
        <div className="app-header__bottom">
          <span className="app-header__location">📍 {locationLabel(location)}</span>
          <SourceLegend />
          <nav className="tabs">
            <NavLink to="/hourly" className={({ isActive }) => `tabs__link${isActive ? ' tabs__link--active' : ''}`}>
              1時間ごと
            </NavLink>
            <NavLink to="/weekly" className={({ isActive }) => `tabs__link${isActive ? ' tabs__link--active' : ''}`}>
              1週間ごと
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="app-main">
        {loading && <div className="status-banner">読み込み中…</div>}
        {error && <div className="status-banner status-banner--error">{error}</div>}
        {!loading && !error && data && (
          <Routes>
            <Route path="/" element={<Navigate to="/hourly" replace />} />
            <Route path="/hourly" element={<HourlyPage forecast={data} />} />
            <Route path="/weekly" element={<WeeklyPage forecast={data} />} />
          </Routes>
        )}
      </main>

      <footer className="app-footer">Weather data by Open-Meteo.com (CC BY 4.0)</footer>
    </div>
  );
}
