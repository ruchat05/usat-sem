import type { RankingItem } from '../data/content';
import { Badge } from './Badge';
import { Rating } from './Rating';
import { CtaButton } from './CtaButton';

interface RankingCardProps {
  item: RankingItem;
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="ranking-card__features">
      {features.map((feature) => (
        <li key={feature} className="ranking-card__feature">
          <img
            className="ranking-card__check"
            src="/assets/check.png"
            alt=""
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function RankingCard({ item }: RankingCardProps) {
  const cardClass = item.badge
    ? `ranking-card ranking-card--${item.badge}`
    : 'ranking-card';

  return (
    <article className={cardClass}>
      <div className="ranking-card__inner">
        <div className="ranking-card__start">
          {item.badge && (
            <div className="ranking-card__badge">
              <Badge type={item.badge} />
            </div>
          )}
          <div className="ranking-card__identity">
            <span className="ranking-card__rank">{item.rank}</span>
            <div className="ranking-card__logo-wrap">
              <img
                className="ranking-card__logo"
                src={item.logo}
                alt={item.name}
              />
            </div>
            <div className="ranking-card__rating ranking-card__rating--header">
              <Rating value={item.rating} size="lg" />
            </div>
          </div>
        </div>

        <div className="ranking-card__details">
          <h3 className="ranking-card__name">{item.name}</h3>
          <FeatureList features={item.features} />
        </div>

        <div className="ranking-card__cta">
          <div className="ranking-card__rating ranking-card__rating--cta">
            <Rating value={item.rating} size="lg" />
          </div>
          <CtaButton>View Meal Plans</CtaButton>
          <span className="ranking-card__website">{item.websiteLabel}</span>
        </div>
      </div>
    </article>
  );
}
