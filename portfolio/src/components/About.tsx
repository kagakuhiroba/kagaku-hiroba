import { CornerSplash } from './InkSplatter'

export function About() {
  return (
    <section id="about" className="section">
      <CornerSplash position="about" color="orange" size={260} />
      <div className="section__inner about">
        <div className="about__portrait" aria-hidden="true">
          <span>sumi</span>
        </div>
        <div className="about__text">
          <h2 className="section__title">
            About <span className="section__title-accent">Me</span>
          </h2>
          <p>
            はじめまして、フォトグラファー / ビデオグラファーの <strong>sumi channel</strong> です。
            人や街、自然の「今しかない瞬間」を写真と映像で残すことをテーマに活動しています。
          </p>
          <p>
            ポートレート撮影やイベント記録、商品PR動画、ドローン空撮まで、ご要望に合わせて柔軟に対応します。
            明るくポップな色使いと、被写体の魅力を引き出す構図づくりが得意です。
          </p>
          <ul className="about__facts">
            <li>
              <span className="about__facts-label">活動エリア</span>全国（出張撮影対応）
            </li>
            <li>
              <span className="about__facts-label">得意分野</span>ポートレート・イベント・空撮
            </li>
            <li>
              <span className="about__facts-label">機材</span>ミラーレス一眼 / ジンバル / ドローン
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
