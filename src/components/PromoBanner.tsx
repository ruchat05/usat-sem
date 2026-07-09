import { CtaButton } from './CtaButton';

export function PromoBanner() {
  return (
    <aside className="promo-banner">
      <div className="promo-banner__inner">
        <img
          className="promo-banner__image"
          src="/assets/banner-meals.png"
          alt="Home Chef meal delivery box"
        />
        <div className="promo-banner__content">
          <div className="promo-banner__text">
            <p className="promo-banner__eyebrow">
              $4.99/serving + Free Shipping on 1st Box
            </p>
            <p className="promo-banner__headline">Free Extra for Life</p>
          </div>
          <div className="promo-banner__cta">
            <CtaButton showArrow={false}>Pick Your Meals</CtaButton>
            <span className="promo-banner__website">
              On Home Chef&apos;s Website
            </span>
          </div>
        </div>
      </div>
      <span className="promo-banner__ad">AD</span>
    </aside>
  );
}
