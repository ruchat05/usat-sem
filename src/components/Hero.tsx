export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-color" />
        <img className="hero__bg-image" src="/assets/hero-bg.png" alt="" />
        <div className="hero__bg-overlay" />
      </div>
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Best Prepared Meal Delivery Services
            <br />
            Of 2026
          </h1>
          <p className="hero__subtitle">
            Compare prepared meal delivery services to help you find the best fit
            for your preferences, dietary needs and budget.
          </p>
        </div>
        <div className="hero__disclosure">
          <p>
            We earn a commission from the offers on this page, which impacts
            their display.{' '}
            <a href="#" className="hero__disclosure-link">
              Advertiser Disclosure.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
