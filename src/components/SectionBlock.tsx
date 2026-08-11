import type { SiteSection } from '../data/sections';
import { useReveal } from '../hooks/useReveal';

// 句点(。)ごとに文を分割し、1文ずつ独立した段落として表示する。
function splitIntoSentences(paragraph: string): string[] {
  return paragraph
    .split('。')
    .map((sentence, i, all) => (i < all.length - 1 ? `${sentence}。` : sentence))
    .filter((sentence) => sentence.trim().length > 0);
}

export default function SectionBlock({ section }: { section: SiteSection }) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  const sentences = section.body.flatMap(splitIntoSentences);

  return (
    <section id={section.id} className="section">
      <div
        ref={ref}
        className={`section__inner section__inner--${section.id}${visible ? ' is-visible' : ''}`}
      >
        <p className="section__eyebrow">{section.eyebrow}</p>
        <h2 className="section__title">{section.title}</h2>
        <p className="section__lead">{section.lead}</p>
        {sentences.length > 0 && (
          <div className="section__body">
            {section.bodyImage && (
              <img
                className="section__body-image"
                src={section.bodyImage.src}
                alt={section.bodyImage.alt}
                loading="lazy"
              />
            )}
            {sentences.map((sentence, i) => (
              <p key={`${i}-${sentence}`}>{sentence}</p>
            ))}
          </div>
        )}
        {section.links && section.links.length > 0 && (
          <div className="section__links">
            {section.links.map((link) => (
              <a key={link.href} className="section__link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        )}
        {section.gallery && section.gallery.length > 0 && (
          <div className="section__gallery">
            {section.gallery.map((photo) => (
              <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
