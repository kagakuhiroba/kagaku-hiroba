import type { AchievementItem } from '../data/sections';
import { useScrollDots } from '../hooks/useScrollDots';
import { wrapJa } from '../utils/wrapJa';
import ScrollDots from './ScrollDots';

export default function AchievementScroll({ items }: { items: AchievementItem[] }) {
  const { scrollRef, activeIndex, scrollToIndex } = useScrollDots<HTMLDivElement>();

  return (
    <>
      <div className="achievement-scroll" ref={scrollRef}>
        {items.map((item) => (
          <div className="achievement-card" key={item.image}>
            <div className="achievement-card__photo">
              <img
                className="achievement-card__photo-bg"
                src={item.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <img className="achievement-card__photo-fg" src={item.image} alt={item.alt} loading="lazy" />
            </div>
            <div className="achievement-card__body">
              <p className="achievement-card__date">{wrapJa(`日付：${item.date}`)}</p>
              <p className="achievement-card__title">{wrapJa(item.title)}</p>
              <p className="achievement-card__venue">{wrapJa(`場所：${item.venue}`)}</p>
              <p className="achievement-card__detail">{item.detail ? wrapJa(item.detail) : ' '}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollDots
        count={items.length}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
        label="活動実績を選ぶ"
      />
    </>
  );
}
