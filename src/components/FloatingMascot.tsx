import { useEffect, useState } from 'react';
import { mascotImages } from '../data/sections';

const BLINK_DURATION_MS = 150;
const BLINK_MIN_INTERVAL_MS = 2600;
const BLINK_MAX_INTERVAL_MS = 5200;

export default function FloatingMascot() {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const scheduleBlink = () => {
      const delay = BLINK_MIN_INTERVAL_MS + Math.random() * (BLINK_MAX_INTERVAL_MS - BLINK_MIN_INTERVAL_MS);
      timeoutId = setTimeout(() => {
        setBlinking(true);
        timeoutId = setTimeout(() => {
          setBlinking(false);
          scheduleBlink();
        }, BLINK_DURATION_MS);
      }, delay);
    };
    scheduleBlink();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="mascot" aria-hidden="true">
      <img
        className="mascot__img"
        src={blinking ? mascotImages.blink : mascotImages.open}
        alt=""
      />
    </div>
  );
}
