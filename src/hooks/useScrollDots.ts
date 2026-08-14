import { useEffect, useRef, useState } from 'react';

export function useScrollDots<T extends HTMLElement>() {
  const scrollRef = useRef<T>(null);
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

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    const card = el?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  return { scrollRef, activeIndex, scrollToIndex };
}
