import { useEffect, useState } from 'react';
import { fetchForecast } from '../api/forecast';
import type { ForecastData, Location } from '../types';

interface ForecastState {
  data: ForecastData | null;
  loading: boolean;
  error: string | null;
}

export function useForecast(location: Location | null): ForecastState {
  const [state, setState] = useState<ForecastState>({ data: null, loading: false, error: null });

  useEffect(() => {
    if (!location) {
      setState({ data: null, loading: false, error: null });
      return;
    }
    let cancelled = false;
    setState((s) => ({ ...s, loading: true, error: null }));
    fetchForecast(location)
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        const message = e instanceof Error ? e.message : '天気予報の取得に失敗しました';
        setState({ data: null, loading: false, error: message });
      });
    return () => {
      cancelled = true;
    };
  }, [location]);

  return state;
}
