import { topCards } from '../data/content';
import { Badge } from './Badge';
import { Rating } from './Rating';
import { ArrowLink } from './CtaButton';

export function TopCardsMobile() {
  return (
    <section className="top-cards-mobile" aria-label="Top meal delivery providers">
      <div className="top-cards-mobile__track">
        {topCards.map((card) => (
          <article
            key={card.name}
            className={`top-cards-mobile__card${
              card.featured ? ' top-cards-mobile__card--featured' : ''
            }`}
          >
            {card.badge && <Badge type={card.badge} />}
            <h2 className="top-cards-mobile__name">{card.name}</h2>
            <p className="top-cards-mobile__offer">{card.offer}</p>
            <div className="top-cards-mobile__footer">
              <div className="top-cards-mobile__logo-wrap">
                <img
                  className="top-cards-mobile__logo"
                  src={card.logo}
                  alt={card.name}
                />
              </div>
              <div className="top-cards-mobile__actions">
                <Rating value={card.rating} />
                <ArrowLink className="top-cards-mobile__link">See Meals</ArrowLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
