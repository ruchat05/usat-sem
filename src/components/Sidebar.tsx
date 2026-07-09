import { guides, reviews } from '../data/content';
import { ArrowLink } from './CtaButton';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__card">
        <h2 className="sidebar__title">Our Guides</h2>
        <hr className="sidebar__divider" />
        {guides.map((guide, index) => (
          <div key={guide.title}>
            {index > 0 && <hr className="sidebar__divider" />}
            <div className="sidebar__item">
              <p className="sidebar__item-title">{guide.title}</p>
              <ArrowLink href={guide.href} className="sidebar__read-more">
                Read More
              </ArrowLink>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar__card">
        <h2 className="sidebar__title">Reviews</h2>
        <hr className="sidebar__divider" />
        {reviews.map((review, index) => (
          <div key={review.title}>
            {index > 0 && <hr className="sidebar__divider" />}
            <div className="sidebar__review">
              <img
                className="sidebar__review-logo"
                src={review.logo}
                alt=""
              />
              <div className="sidebar__review-content">
                <p className="sidebar__item-title">{review.title}</p>
                <ArrowLink href={review.href} className="sidebar__read-more">
                  Read More
                </ArrowLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
