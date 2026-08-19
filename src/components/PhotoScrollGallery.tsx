import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { GalleryPhoto } from '../data/sections';
import { useScrollDots } from '../hooks/useScrollDots';
import ScrollDots from './ScrollDots';

export default function PhotoScrollGallery({ photos }: { photos: GalleryPhoto[] }) {
  const { scrollRef, activeIndex, scrollToIndex } = useScrollDots<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const closeLightbox = () => setLightbox(null);

  useEffect(() => {
    if (!lightbox) return;
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [lightbox]);

  return (
    <>
      <div className="photo-scroll" ref={scrollRef}>
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            className="photo-scroll__item"
            onClick={() => setLightbox({ src: photo.src, alt: photo.alt })}
            aria-label={`${photo.alt}を拡大表示`}
          >
            <img className="photo-scroll__img" src={photo.src} alt={photo.alt} loading="lazy" />
          </button>
        ))}
      </div>
      <ScrollDots
        count={photos.length}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
        label="活動風景の写真を選ぶ"
      />

      {lightbox &&
        createPortal(
          <div className="lightbox-backdrop" onClick={closeLightbox}>
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="閉じる"
            >
              ×
            </button>
            <img
              className="lightbox-image"
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
