import { mascotImages } from '../data/sections';

export default function FloatingMascot() {
  return (
    <div className="mascot" aria-hidden="true">
      <div className="mascot__sway">
        <img className="mascot__img" src={mascotImages.open} alt="" />
      </div>
    </div>
  );
}
