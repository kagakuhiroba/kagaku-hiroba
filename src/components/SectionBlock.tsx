import { logoMarkImage, type SiteSection } from '../data/sections';
import { useReveal } from '../hooks/useReveal';
import { wrapJa } from '../utils/wrapJa';
import AchievementScroll from './AchievementScroll';
import PhotoScrollGallery from './PhotoScrollGallery';
import ScheduleList from './ScheduleList';

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

  const highlightIndex =
    section.lead && section.leadHighlight ? section.lead.indexOf(section.leadHighlight) : -1;

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
          ) : section.id === 'achievements' ? (
            <>
              <img className="section__title-logo" src={logoMarkImage.src} alt="歌楽ひろば" />{' '}
              {section.title}
            </>
          ) : section.id === 'profile' ? (
            <>
              <span className="section__title-brush">{section.title}</span>
              {section.bodyImage && (
                <img
                  className="section__title-photo"
                  src={section.bodyImage.src}
                  alt={section.bodyImage.alt}
                />
              )}
            </>
          ) : section.id === 'schedule' ? (
            <>
              <img className="section__title-logo" src={logoMarkImage.src} alt="歌楽ひろば" />{' '}
              今後の予定
            </>
          ) : (
            section.title
          )}
        </h2>
        {highlightIndex >= 0 && section.leadHighlight ? (
          <p className="section__lead">
            {wrapJa(section.lead!.slice(0, highlightIndex))}
            <span className="section__lead-highlight" data-text={wrapJa(section.leadHighlight)}>
              {wrapJa(section.leadHighlight)}
            </span>
            {wrapJa(section.lead!.slice(highlightIndex + section.leadHighlight.length))}
          </p>
        ) : (
          section.lead && <p className="section__lead">{wrapJa(section.lead)}</p>
        )}
        {sentences.length > 0 && (
          <div className="section__body">
            {sentences.map((sentence, i) => (
              <p key={`${i}-${sentence}`}>{wrapJa(sentence)}</p>
            ))}
          </div>
        )}
        {section.links && section.links.length > 0 && (
          <div className="section__links">
            {section.links.map((link) => (
              <a
                key={link.href}
                className={`section__link${link.variant === 'pattern' ? ' section__link--pattern' : ''}`}
                href={link.href}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        {section.id === 'schedule' && <ScheduleList />}
        {section.gallery && section.gallery.length > 0 && (
          <PhotoScrollGallery photos={section.gallery} />
        )}
        {section.achievements && section.achievements.length > 0 && (
          <AchievementScroll items={section.achievements} />
        )}
      </div>
    </section>
  );
}
