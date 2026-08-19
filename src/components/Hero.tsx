import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { aitahimeLogoImage, heroImages, logoImage, noteSprites, sections } from '../data/sections';

const SLIDE_INTERVAL_MS = 3000;
const NOTE_COUNT = 7;

function createNoteParticles() {
  return Array.from({ length: NOTE_COUNT }, (_, i) => {
    const duration = 6 + Math.random() * 5;
    // サイトを開いてから1秒後にアニメーションを開始する。
    const delay = 1 + Math.random() * 1.5;
    // ロゴの下(約50〜64%)から、ロゴの上あたり(約8〜16%)までふわっと浮かび上がる。
    const topStart = 50 + Math.random() * 14;
    const topEnd = 8 + Math.random() * 8;
    return {
      key: i,
      sprite: noteSprites[i % noteSprites.length],
      left: 6 + Math.random() * 88,
      topStart,
      travel: topEnd - topStart,
      size: 26 + Math.random() * 30,
      duration,
      delay,
      drift: Math.round((Math.random() - 0.5) * 60),
    };
  });
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const notes = useMemo(createNoteParticles, []);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [index]);

  // 最初のページ(ヒーロー)から次のセクションへスクロールした際、ヒーローの内容をフェードアウトさせる。
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const height = el.offsetHeight || window.innerHeight;
      // ヒーローの高さの40%分スクロールするまではフェードを開始せず、残りの60%で一気にフェードアウトさせる。
      const fadeStart = height * 0.4;
      const progress = Math.min(Math.max((window.scrollY - fadeStart) / (height - fadeStart), 0), 1);
      setFadeOpacity(1 - progress);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (target: number) => {
    setIndex((target + heroImages.length) % heroImages.length);
  };

  return (
    <section className="hero" aria-label="歌楽ひろば" ref={heroRef}>
      <div className="hero__fade" style={{ opacity: fadeOpacity }}>
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
                  top: `${note.topStart}%`,
                  width: `${note.size}px`,
                  animationDuration: `${note.duration}s`,
                  animationDelay: `${note.delay}s`,
                  '--note-drift': `${note.drift}px`,
                  '--note-travel': `${note.travel}vh`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <nav className="hero__pagenav" aria-label="ページ内ナビゲーション">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.navLabel ?? section.title}
            </a>
          ))}
        </nav>

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
          <div className="hero__logo-frame">
            <img className="hero__logo" src={logoImage.src} alt={logoImage.alt} />
            <div
              className="hero__logo-shine"
              aria-hidden="true"
              style={{
                WebkitMaskImage: `url(${logoImage.src})`,
                maskImage: `url(${logoImage.src})`,
              }}
            />
          </div>
          <div className="hero__logo-frame hero__logo-frame--by">
            <img
              className="hero__logo hero__logo--by"
              src={aitahimeLogoImage.src}
              alt={aitahimeLogoImage.alt}
            />
            <div
              className="hero__logo-shine"
              aria-hidden="true"
              style={{
                WebkitMaskImage: `url(${aitahimeLogoImage.src})`,
                maskImage: `url(${aitahimeLogoImage.src})`,
              }}
            />
          </div>
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
      </div>
    </section>
  );
}
