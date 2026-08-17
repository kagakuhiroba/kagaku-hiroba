import { useEffect, useRef, useState, type RefObject } from 'react';

export function useReveal<T extends HTMLElement>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 上下を20%ずつ狭めた領域で判定することで、スクロール終端付近で
    // 隣り合う短いセクション同士が同時に「表示中」判定になるのを防ぐ。
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: '-20% 0px -20% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
