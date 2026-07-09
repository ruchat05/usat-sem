import type { ContentSection } from '../data/content';
import { contentSections, rankings } from '../data/content';
import { RankingCard } from './RankingCard';
import { Sidebar } from './Sidebar';
import { PromoBanner } from './PromoBanner';
import { TopCards } from './TopCards';
import { TopCardsMobile } from './TopCardsMobile';

function ArticleSection({ section }: { section: ContentSection }) {
  return (
    <section className="article-section">
      <h2 className="article-section__title">{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="article-section__paragraph">
          {paragraph}
        </p>
      ))}
      {section.subsections?.map((sub) => (
        <div key={sub.title} className="article-section__subsection">
          <h3 className="article-section__subtitle">{sub.title}</h3>
          <ul className="article-section__list">
            {sub.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export function MainContent() {
  const sectionsBeforeBanner = contentSections.slice(0, 2);
  const sectionsAfterFirstBanner = contentSections.slice(2, 6);
  const sectionsAfterSecondBanner = contentSections.slice(6);

  return (
    <div className="main-content">
      <div className="main-content__layout">
        <TopCards />
        <TopCardsMobile />
        <div className="main-content__primary">
          <section className="rankings">
            {rankings.map((item) => (
              <RankingCard key={item.rank} item={item} />
            ))}
            <p className="rankings__disclaimer">
              *Pricing and offers accurate as of published date. See provider
              websites for most current offers and pricing.
            </p>
          </section>

          {sectionsBeforeBanner.map((section) => (
            <ArticleSection key={section.title} section={section} />
          ))}

          <PromoBanner />

          {sectionsAfterFirstBanner.map((section) => (
            <ArticleSection key={section.title} section={section} />
          ))}

          <PromoBanner />

          {sectionsAfterSecondBanner.map((section) => (
            <ArticleSection key={section.title} section={section} />
          ))}
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
