import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { heroImages, logoImage, noteSprites } from '../data/sections';

const SLIDE_INTERVAL_MS = 3000;
const NOTE_COUNT = 12;

function createNoteParticles() {
  return Array.from({ length: NOTE_COUNT }, (_, i) => {
    const duration = 9 + Math.random() * 6;
    const delay = -Math.random() * duration;
    return {
      key: i,
      sprite: noteSprites[i % noteSprites.length],
      left: 6 + Math.random() * 88,
      bottomStart: Math.random() * 22,
      size: 26 + Math.random() * 30,
      duration,
      delay,
      drift: Math.round((Math.random() - 0.5) * 60),
    };
  });
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const notes = useMemo(createNoteParticles, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [index]);

  const goTo = (target: number) => {
    setIndex((target + heroImages.length) % heroImages.length);
  };

  return (
    <section className="hero" aria-label="歌楽ひろば">
      <div className="hero__slides">
        {heroImages.map((image, i) => (
          <div
            key={image.src}
            className={`hero__slide${i === index ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${image.src})`, backgroundPosition: image.focus }}
            role="img"
            aria-label={image.alt}
            aria-hidden={i === index ? undefined : true}
          />
        ))}
      </div>
      <div className="hero__scrim" />

      <div className="hero__notes" aria-hidden="true">
        {notes.map((note) => (
          <img
            key={note.key}
            className="hero__note"
            src={note.sprite}
            alt=""
            style={
              {
                left: `${note.left}%`,
                bottom: `${note.bottomStart}%`,
                width: `${note.size}px`,
                animationDuration: `${note.duration}s`,
                animationDelay: `${note.delay}s`,
                '--note-drift': `${note.drift}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <button
        type="button"
        className="hero__nav hero__nav--prev"
        onClick={() => goTo(index - 1)}
        aria-label="前の写真"
      >
        ‹
      </button>
      <button
        type="button"
        className="hero__nav hero__nav--next"
        onClick={() => goTo(index + 1)}
        aria-label="次の写真"
      >
        ›
      </button>

      <div className="hero__logo-wrap">
        <img className="hero__logo" src={logoImage.src} alt={logoImage.alt} />
        <p className="hero__by">あいたひめ</p>
      </div>

      <div className="hero__foot">
        <div className="hero__dots" role="tablist" aria-label="表示する写真を選ぶ">
          {heroImages.map((image, i) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              className={`hero__dot${i === index ? ' is-active' : ''}`}
              aria-selected={i === index}
              aria-label={`写真 ${i + 1}枚目`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <a className="hero__cta" href="#profile" aria-label="スクロールして次へ">
          <span>Scroll</span>
          <span className="hero__cta-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
