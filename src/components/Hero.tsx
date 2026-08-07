import { heroImage, logoImage } from '../data/sections';

export default function Hero() {
  return (
    <section className="hero" aria-label="歌楽ひろば">
      <div
        className="hero__image"
        style={{ backgroundImage: `url(${heroImage.src})` }}
        role="img"
        aria-label={heroImage.alt}
      />
      <div className="hero__scrim" />
      <div className="hero__content">
        <p className="hero__by">あいたひめ</p>
        <div className="hero__logo-card">
          <img className="hero__logo" src={logoImage.src} alt={logoImage.alt} />
        </div>
        <a className="hero__cta" href="#profile" aria-label="スクロールして次へ">
          <span>Scroll</span>
          <span className="hero__cta-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
