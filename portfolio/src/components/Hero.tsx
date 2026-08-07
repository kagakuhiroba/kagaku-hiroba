import { CameraIcon, VideoIcon } from './CameraIcon'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__decor hero__decor--blue" />
      <div className="hero__decor hero__decor--orange" />
      <div className="hero__content">
        <p className="hero__eyebrow">Photographer / Videographer</p>
        <h1 className="hero__title">
          sumi <span>channel</span>
        </h1>
        <p className="hero__lead">
          写真と映像で、日常のワクワクする瞬間を切り取っています。
          <br />
          ポートレートからイベント記録・ドローン空撮まで、幅広く対応します。
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#works">
            作品を見る
          </a>
          <a className="button button--outline" href="#contact">
            お問い合わせ
          </a>
        </div>
        <div className="hero__badges">
          <span className="badge badge--blue">
            <CameraIcon className="badge__icon" /> Photo
          </span>
          <span className="badge badge--orange">
            <VideoIcon className="badge__icon" /> Video
          </span>
        </div>
      </div>
    </section>
  )
}
