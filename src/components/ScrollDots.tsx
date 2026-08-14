export default function ScrollDots({
  count,
  activeIndex,
  onSelect,
  label,
}: {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  label: string;
}) {
  return (
    <div className="scroll-dots" role="tablist" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          className={`scroll-dot${i === activeIndex ? ' is-active' : ''}`}
          aria-selected={i === activeIndex}
          aria-label={`${i + 1}枚目`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}
