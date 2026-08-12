import { logoMarkImage, scheduleEvents, type SiteSection } from '../data/sections';
import { useReveal } from '../hooks/useReveal';
import ScheduleCalendar from './ScheduleCalendar';

export default function SectionBlock({ section }: { section: SiteSection }) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  const highlightIndex = section.leadHighlight ? section.lead.indexOf(section.leadHighlight) : -1;

  return (
    <section id={section.id} className="section">
      <div
        ref={ref}
        className={`section__inner section__inner--${section.id}${visible ? ' is-visible' : ''}`}
      >
        <h2 className="section__title">
          {section.id === 'about' ? (
            <>
              <img className="section__title-logo" src={logoMarkImage.src} alt="歌楽ひろば" /> とは
            </>
          ) : (
            section.title
          )}
        </h2>
        {highlightIndex >= 0 && section.leadHighlight ? (
          <p className="section__lead">
            {section.lead.slice(0, highlightIndex)}
            <span className="section__lead-highlight">{section.leadHighlight}</span>
            {section.lead.slice(highlightIndex + section.leadHighlight.length)}
          </p>
        ) : (
          <p className="section__lead">{section.lead}</p>
        )}
        {section.body.length > 0 && (
          <div className="section__body">
            {section.bodyImage && (
              <img
                className="section__body-image"
                src={section.bodyImage.src}
                alt={section.bodyImage.alt}
                loading="lazy"
              />
            )}
            {section.body.map((paragraph, i) => (
              <p key={`${i}-${paragraph}`}>{paragraph}</p>
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
        {section.id === 'schedule' && <ScheduleCalendar events={scheduleEvents} />}
        {section.achievements && section.achievements.length > 0 && (
          <div className="achievement-scroll">
            {section.achievements.map((item) => (
              <div className="achievement-card" key={item.image}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div className="achievement-card__body">
                  <p className="achievement-card__date">{item.date}</p>
                  <p className="achievement-card__title">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
