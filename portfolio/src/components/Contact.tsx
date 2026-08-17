import { CornerSplash } from './InkSplatter'

const SNS_LINKS = [
  { label: 'X (Twitter)', href: 'https://x.com/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'YouTube', href: 'https://youtube.com/' },
]

export function Contact() {
  return (
    <section id="contact" className="section section--tinted">
      <CornerSplash position="contact" color="orange" size={260} />
      <div className="section__inner contact">
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
