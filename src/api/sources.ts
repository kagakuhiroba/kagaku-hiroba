import type { WeatherSource } from '../types';

export const WEATHER_SOURCES: WeatherSource[] = [
  { id: 'jma_seamless', label: '気象庁 (JMA)', shortLabel: 'JMA', color: '#2563eb' },
  { id: 'ecmwf_ifs025', label: 'ECMWF (欧州中期予報センター)', shortLabel: 'ECMWF', color: '#16a34a' },
  { id: 'gfs_seamless', label: 'GFS (米国NOAA)', shortLabel: 'GFS', color: '#d97706' },
  { id: 'icon_seamless', label: 'ICON (独DWD)', shortLabel: 'ICON', color: '#dc2626' },
];
