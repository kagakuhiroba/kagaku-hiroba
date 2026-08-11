import { useEffect, useState } from 'react';
import { heroImages, logoImage } from '../data/sections';

const SLIDE_INTERVAL_MS = 3000;

export default function Hero() {
  const [index, setIndex] = useState(0);

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
      </div>

      <div className="hero__caption">
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
