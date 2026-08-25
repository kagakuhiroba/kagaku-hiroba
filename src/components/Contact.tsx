import { CornerSplash } from './InkSplatter'
import { useInView } from '../hooks/useInView'

const SNS_LINKS = [
  { label: 'X (Twitter)', href: 'https://x.com/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'YouTube', href: 'https://youtube.com/' },
]

export function Contact() {
  const { ref, visible } = useInView<HTMLDivElement>()

  return (
    <section id="contact" className="section section--tinted">
      <CornerSplash position="contact" color="orange" size={480} variant="a" rotate={22} />
      <CornerSplash position="contact-alt" color="blue" size={240} variant="c" rotate={-30} />
      <CornerSplash position="contact-top" color="orange" size={210} variant="b" rotate={60} />
      <div ref={ref} className={`section__inner contact fade-scroll${visible ? ' fade-scroll--visible' : ''}`}>
        <h2 className="section__title">
          <span className="section__title-accent">Contact</span> お問い合わせ
        </h2>
        <p className="contact__lead">
          撮影のご依頼・お見積もりなど、お気軽にご連絡ください。
        </p>
        <div className="contact__panel">
          <a className="button button--primary" href="mailto:contact@example.com">
            メールで問い合わせる
          </a>
          <ul className="contact__sns">
            {SNS_LINKS.map((sns) => (
              <li key={sns.label}>
                <a href={sns.href} target="_blank" rel="noreferrer">
                  {sns.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
