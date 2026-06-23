export default function Hero({ t }) {
  return (
    <section id="home" className="hero">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__eyebrow">{t.hero_eyebrow}</p>
        <h1 className="hero__headline">
          <span className="hero__headline-line1">{t.hero_headline_1}</span>
          <span className="hero__headline-line2">{t.hero_headline_2}</span>
        </h1>
        <p className="hero__subtext">{t.hero_subtext}</p>
        <div className="hero__actions">
          <a href="#menu" className="btn btn--primary">{t.hero_cta_primary}</a>
          <a href="#contact" className="btn btn--ghost">{t.hero_cta_secondary}</a>
        </div>
      </div>
      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
