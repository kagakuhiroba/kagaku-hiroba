import { sections } from '../data/sections';
import { useActiveSection } from '../hooks/useActiveSection';
import SectionBlock from './SectionBlock';

export default function ScrollGallery() {
  const ids = sections.map((section) => section.id);
  const activeId = useActiveSection(ids);

  return (
    <div className="gallery">
      <div className="gallery__sticky" aria-hidden="true">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`gallery__image gallery__image--${section.imageFit}${
              section.id === activeId ? ' is-active' : ''
            }`}
            style={
              section.imageFit === 'cover' ? { backgroundImage: `url(${section.image})` } : undefined
            }
          >
            {section.imageFit === 'contain' && <img src={section.image} alt="" />}
          </div>
        ))}
      </div>
      <div className="gallery__content">
        {sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
