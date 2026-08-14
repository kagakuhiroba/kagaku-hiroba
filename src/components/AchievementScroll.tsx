import { useEffect, useRef, useState } from 'react';
import type { AchievementItem } from '../data/sections';
import { wrapJa } from '../utils/wrapJa';

export default function AchievementScroll({ items }: { items: AchievementItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let ticking = false;
    const updateActiveIndex = () => {
      ticking = false;
      const children = Array.from(el.children) as HTMLElement[];
      let closest = 0;
      let closestDistance = Infinity;
      children.forEach((child, i) => {
        const distance = Math.abs(child.offsetLeft - el.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveIndex);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    const card = el?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

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
      <div className="achievement-dots" role="tablist" aria-label="活動実績を選ぶ">
        {items.map((item, i) => (
          <button
            key={item.image}
            type="button"
            role="tab"
            className={`achievement-dot${i === activeIndex ? ' is-active' : ''}`}
            aria-selected={i === activeIndex}
            aria-label={`${i + 1}枚目`}
            onClick={() => scrollToCard(i)}
          />
        ))}
      </div>
    </>
  );
}
