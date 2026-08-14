import type { GalleryPhoto } from '../data/sections';
import { useScrollDots } from '../hooks/useScrollDots';
import ScrollDots from './ScrollDots';

export default function PhotoScrollGallery({ photos }: { photos: GalleryPhoto[] }) {
  const { scrollRef, activeIndex, scrollToIndex } = useScrollDots<HTMLDivElement>();

  return (
    <>
      <div className="photo-scroll" ref={scrollRef}>
        {photos.map((photo) => (
          <img
            key={photo.src}
            className="photo-scroll__img"
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
          />
        ))}
      </div>
      <ScrollDots
        count={photos.length}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
        label="活動風景の写真を選ぶ"
      />
    </>
  );
}
