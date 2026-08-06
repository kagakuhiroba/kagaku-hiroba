import { useEffect, useRef, useState } from 'react';
import { searchLocations } from '../api/geocoding';
import type { Location } from '../types';
import { locationLabel } from '../utils/format';

interface Props {
  onSelect: (loc: Location) => void;
}

export default function LocationSearch({ onSelect }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }
    setLoading(true);
    debounceRef.current = setTimeout(() => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      searchLocations(query, controller.signal)
        .then((locs) => {
          setResults(locs);
          setError(null);
        })
        .catch((e: unknown) => {
          if (e instanceof DOMException && e.name === 'AbortError') return;
          setError('地点検索でエラーが発生しました');
        })
        .finally(() => setLoading(false));
    }, 350);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  return (
    <div className="location-search">
      <input
        type="text"
        className="location-search__input"
        placeholder="地名・住所で検索（例: 新宿区、大阪市、札幌）"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      />
      {open && (query.trim() || loading) && (
        <div className="location-search__dropdown">
          {loading && <div className="location-search__status">検索中…</div>}
          {!loading && error && <div className="location-search__status location-search__status--error">{error}</div>}
          {!loading && !error && results.length === 0 && query.trim() && (
            <div className="location-search__status">該当する地点が見つかりません</div>
          )}
          {!loading &&
            results.map((loc) => (
              <button
                key={loc.id}
                type="button"
                className="location-search__item"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onSelect(loc);
                  setQuery('');
                  setResults([]);
                  setOpen(false);
                }}
              >
                {locationLabel(loc)}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
