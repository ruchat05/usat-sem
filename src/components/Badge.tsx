import type { BadgeType } from '../data/content';
import { badgeLabels } from '../data/content';

interface BadgeProps {
  type: BadgeType;
}

export function Badge({ type }: BadgeProps) {
  return (
    <span className={`badge badge--${type}`}>
      <span className="badge__icon" aria-hidden="true" />
      {badgeLabels[type]}
    </span>
  );
}
