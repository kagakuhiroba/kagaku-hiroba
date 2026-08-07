import { CameraIcon, VideoIcon } from './CameraIcon'
import { InkSplash } from './InkSplatter'

export function Hero() {
  return (
    <section id="top" className="hero">
      <svg
        className="hero__splatter"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <InkSplash x={150} y={110} scale={2.9} rotate={-10} color="blue" />
        <InkSplash x={1050} y={560} scale={2.9} rotate={14} color="orange" />
      </svg>
      <div className="hero__content">
        <p className="hero__eyebrow">Photographer / Videographer</p>
        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--sumi">
            <span className="hero__title-part hero__title-part--su">su</span>
            <span className="hero__title-part hero__title-part--mi">mi</span>
          </span>
          <span className="hero__title-line hero__title-part hero__title-part--channel">channel</span>
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
