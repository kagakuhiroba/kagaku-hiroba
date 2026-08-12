import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { scheduleVenues, specialEvents } from '../data/sections';
import { wrapJa } from '../utils/wrapJa';

export default function ScheduleList() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeDetail = () => setActiveId(null);
  const active = scheduleVenues.find((venue) => venue.id === activeId);

  useEffect(() => {
    if (!activeId) return;
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDetail();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [activeId]);

  return (
    <div className="schedule-content">
      <p className="special-events__label">{wrapJa('歌楽ひろば　特別編')}</p>
      <div className="achievement-scroll">
        {specialEvents.map((event) => (
          <div className="achievement-card" key={event.image}>
            <img src={event.image} alt={event.alt} loading="lazy" />
            <div className="achievement-card__body">
              <p className="achievement-card__date">{wrapJa(event.date)}</p>
              <p className="achievement-card__title">{wrapJa(event.title)}</p>
              <p className="achievement-card__venue">{wrapJa(event.venue)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="schedule-venues">
        {scheduleVenues.map((venue) => (
          <button
            key={venue.id}
            type="button"
            className="schedule-venue"
            onClick={() => setActiveId(venue.id)}
          >
            <span>{wrapJa(venue.title)}</span>
            <span className="schedule-venue__arrow" aria-hidden="true">
              ›
            </span>
          </button>
        ))}
      </div>

      {active &&
        createPortal(
          <div className="schedule-modal-backdrop" onClick={closeDetail}>
            <div
              className="schedule-modal schedule-modal--images"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="schedule-modal__close"
                onClick={closeDetail}
                aria-label="閉じる"
              >
                ×
              </button>
              <p className="schedule-modal__title">{wrapJa(active.title)}</p>
              {active.images.length > 0 ? (
                <div className="schedule-modal__images">
                  {active.images.map((image) => (
                    <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
                  ))}
                </div>
              ) : (
                <p className="schedule-modal__pending">
                  {wrapJa('詳細情報は準備中です。決まり次第お知らせします。')}
                </p>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
