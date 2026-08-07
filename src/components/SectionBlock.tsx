import type { SiteSection } from '../data/sections';
import { useReveal } from '../hooks/useReveal';

export default function SectionBlock({ section }: { section: SiteSection }) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section id={section.id} className="section">
      <div ref={ref} className={`section__inner${visible ? ' is-visible' : ''}`}>
        <p className="section__eyebrow">{section.eyebrow}</p>
        <h2 className="section__title">{section.title}</h2>
        <p className="section__lead">{section.lead}</p>
        {section.body.length > 0 && (
          <div className="section__body">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
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
