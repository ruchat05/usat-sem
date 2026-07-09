import { topCards } from '../data/content';
import { Badge } from './Badge';
import { Rating } from './Rating';
import { ArrowLink } from './CtaButton';

export function TopCards() {
  return (
    <section className="top-cards">
      <div className="top-cards__grid">
        {topCards.map((card) => (
          <article
            key={card.name}
            className={`top-card${card.featured ? ' top-card--featured' : ''}`}
          >
            <div className="top-card__body">
              {card.badge && <Badge type={card.badge} />}
              <div className="top-card__info">
                <h2 className="top-card__name">{card.name}</h2>
                <p className="top-card__offer">{card.offer}</p>
              </div>
              <div className="top-card__footer">
                <div className="top-card__logo-wrap">
                  <img
                    className="top-card__logo"
                    src={card.logo}
                    alt={card.name}
                  />
                </div>
                <div className="top-card__actions">
                  <Rating value={card.rating} />
                  <ArrowLink className="top-card__link">See Meals</ArrowLink>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
