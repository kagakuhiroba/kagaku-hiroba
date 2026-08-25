import { CameraIcon, VideoIcon } from './CameraIcon'
import { CornerSplash } from './InkSplatter'
import { useInView } from '../hooks/useInView'

export function Hero() {
  const { ref, visible } = useInView<HTMLHeadingElement>()

  return (
    <section id="top" className="hero">
      <CornerSplash position="hero-tl" color="blue" size={680} variant="a" rotate={-8} />
      <CornerSplash position="hero-br" color="orange" size={610} variant="b" rotate={16} />
      <CornerSplash position="hero-tr" color="orange" size={300} variant="c" rotate={28} />
      <CornerSplash position="hero-bl" color="blue" size={380} variant="b" rotate={-22} />
      <CornerSplash position="hero-top" color="orange" size={230} variant="a" rotate={45} />
      <CornerSplash position="hero-bottom" color="blue" size={290} variant="c" rotate={-38} />
      <div className="hero__content">
        <p className="hero__eyebrow">Photographer / Videographer</p>
        <h1 ref={ref} className={`hero__title${visible ? ' hero__title--visible' : ''}`}>
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
