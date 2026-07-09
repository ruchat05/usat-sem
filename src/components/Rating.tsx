export function Stars() {
  return <span className="stars" aria-hidden="true" />;
}

interface RatingProps {
  value: number;
  size?: 'sm' | 'lg';
}

export function Rating({ value, size = 'sm' }: RatingProps) {
  return (
    <div className={`rating rating--${size}`}>
      <span className="rating__value">{value.toFixed(1)}</span>
      <span className="rating__divider" aria-hidden="true" />
      <div className="rating__info">
        <Stars />
        <span className="rating__label">EXCELLENT</span>
      </div>
    </div>
  );
}
