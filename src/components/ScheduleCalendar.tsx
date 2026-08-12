import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ScheduleEvent } from '../data/sections';
import { wrapJa } from '../utils/wrapJa';

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];
const MONTHS_BEFORE = 6;
const MONTHS_AFTER = 12;

function formatDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function getMonthCells(year: number, month: number): (number | null)[] {
  const startWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array.from({ length: startWeekday }, () => null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function ScheduleCalendar({ events }: { events: ScheduleEvent[] }) {
  const today = useMemo(() => new Date(), []);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentMonthRef = useRef<HTMLDivElement>(null);
  const [selectedDateKey, setSelectedDateKey] = useState<string | null>(null);

  const months = useMemo(() => {
    const list: Date[] = [];
    for (let i = -MONTHS_BEFORE; i <= MONTHS_AFTER; i++) {
      list.push(new Date(today.getFullYear(), today.getMonth() + i, 1));
    }
    return list;
  }, [today]);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, ScheduleEvent[]>();
    for (const event of events) {
      const list = map.get(event.date) ?? [];
      list.push(event);
      map.set(event.date, list);
    }
    return map;
  }, [events]);

  useEffect(() => {
    // scrollIntoViewはページ全体の縦スクロールも動かしてしまうため、
    // 横スクロール用コンテナのscrollLeftのみを直接操作する。
    if (scrollRef.current && currentMonthRef.current) {
      scrollRef.current.scrollLeft = currentMonthRef.current.offsetLeft;
    }
  }, []);

  useEffect(() => {
    if (!selectedDateKey) return;
    const close = () => setSelectedDateKey(null);
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [selectedDateKey]);

  const closeDetail = () => setSelectedDateKey(null);
  const selectedEvents = selectedDateKey ? eventsByDate.get(selectedDateKey) : undefined;

  return (
    <div className="schedule-calendar">
      <div className="schedule-calendar__scroll" ref={scrollRef}>
        {months.map((monthDate) => {
          const year = monthDate.getFullYear();
          const month = monthDate.getMonth();
          const isCurrentMonth = year === today.getFullYear() && month === today.getMonth();
          const cells = getMonthCells(year, month);

          return (
            <div
              className="schedule-month"
              key={`${year}-${month}`}
              ref={isCurrentMonth ? currentMonthRef : undefined}
            >
              <p className="schedule-month__title">
                {year}年{month + 1}月
              </p>
              <div className="schedule-month__weekdays">
                {WEEKDAYS.map((weekday) => (
                  <span key={weekday}>{weekday}</span>
                ))}
              </div>
              <div className="schedule-month__grid">
                {cells.map((day, i) => {
                  if (day === null) {
                    return <div className="schedule-day schedule-day--empty" key={i} aria-hidden="true" />;
                  }

                  const dateKey = formatDateKey(year, month, day);
                  const dayEvents = eventsByDate.get(dateKey);
                  const isToday = isCurrentMonth && day === today.getDate();
                  const className = `schedule-day${dayEvents ? ' has-event' : ''}${isToday ? ' is-today' : ''}`;

                  if (!dayEvents) {
                    return (
                      <div className={className} key={i}>
                        <span className="schedule-day__number">{day}</span>
                      </div>
                    );
                  }

                  return (
                    <button
                      type="button"
                      className={className}
                      key={i}
                      onClick={() => setSelectedDateKey(dateKey)}
                    >
                      <span className="schedule-day__number">{day}</span>
                      {dayEvents.map((event) => (
                        <span className="schedule-day__event" key={event.title}>
                          {event.title}
                        </span>
                      ))}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {selectedEvents &&
        createPortal(
          <div className="schedule-modal-backdrop" onClick={closeDetail}>
            <div className="schedule-modal" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="schedule-modal__close"
                onClick={closeDetail}
                aria-label="閉じる"
              >
                ×
              </button>
              {selectedEvents.map((event) => (
                <div className="schedule-modal__item" key={event.title}>
                  <p className="schedule-modal__title">{wrapJa(event.title)}</p>
                  {event.time && <p>{wrapJa(`時間：${event.time}`)}</p>}
                  {event.venue && <p>{wrapJa(`会場：${event.venue}`)}</p>}
                  {event.price && <p>{wrapJa(`料金：${event.price}`)}</p>}
                </div>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
