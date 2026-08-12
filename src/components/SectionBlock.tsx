import { logoMarkImage, scheduleEvents, type SiteSection } from '../data/sections';
import { useReveal } from '../hooks/useReveal';
import { wrapJa } from '../utils/wrapJa';
import ScheduleCalendar from './ScheduleCalendar';

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
            {wrapJa(section.lead.slice(0, highlightIndex))}
            <span className="section__lead-highlight">{wrapJa(section.leadHighlight)}</span>
            {wrapJa(section.lead.slice(highlightIndex + section.leadHighlight.length))}
          </p>
        ) : (
          <p className="section__lead">{wrapJa(section.lead)}</p>
        )}
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
              <p key={`${i}-${sentence}`}>{wrapJa(sentence)}</p>
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
                  <p className="achievement-card__date">{wrapJa(item.date)}</p>
                  <p className="achievement-card__title">{wrapJa(item.title)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
