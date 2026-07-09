import type { RankingItem } from '../data/content';
import { Badge } from './Badge';
import { Rating } from './Rating';
import { CtaButton } from './CtaButton';

interface RankingCardProps {
  item: RankingItem;
}

export function RankingCard({ item }: RankingCardProps) {
  const cardClass = item.badge
    ? `ranking-card ranking-card--${item.badge}`
    : 'ranking-card';

  return (
    <article className={cardClass}>
      <div className="ranking-card__inner">
        <div className="ranking-card__left">
          <div className="ranking-card__brand">
            {item.badge && <Badge type={item.badge} />}
            <div className="ranking-card__identity">
              <span className="ranking-card__rank">{item.rank}</span>
              <div className="ranking-card__logo-wrap">
                <img
                  className="ranking-card__logo"
                  src={item.logo}
                  alt={item.name}
                />
              </div>
            </div>
          </div>
          <div className="ranking-card__details">
            <h3 className="ranking-card__name">{item.name}</h3>
            <ul className="ranking-card__features">
              {item.features.map((feature) => (
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
          </div>
        </div>
        <div className="ranking-card__cta">
          <Rating value={item.rating} size="lg" />
          <CtaButton>View Meal Plans</CtaButton>
          <span className="ranking-card__website">{item.websiteLabel}</span>
        </div>
      </div>
    </article>
  );
}
