export default function AboutSection({ t }) {
  const stats = [
    { value: "about_stat_1_value", label: "about_stat_1_label" },
    { value: "about_stat_2_value", label: "about_stat_2_label" },
    { value: "about_stat_3_value", label: "about_stat_3_label" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container about-section__inner">
        <div className="about-section__visual" aria-hidden="true">
          <div className="about-section__coffee-art">
            <div className="coffee-cup">
              <div className="coffee-cup__body">
                <div className="coffee-cup__liquid" />
                <div className="coffee-cup__foam" />
                <div className="coffee-cup__leaf" />
              </div>
              <div className="coffee-cup__handle" />
              <div className="coffee-cup__saucer" />
            </div>
            <div className="about-section__steam">
              <span /><span /><span />
            </div>
          </div>
          <div className="about-section__stats">
            {stats.map(({ value, label }) => (
              <div key={value} className="about-stat">
                <span className="about-stat__value">{t[value]}</span>
                <span className="about-stat__label">{t[label]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section__text">
          <p className="section-eyebrow">{t.about_eyebrow}</p>
          <h2 className="section-headline about-section__headline">
            {t.about_headline.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h2>
          <p className="about-section__body">{t.about_body_1}</p>
          <p className="about-section__body">{t.about_body_2}</p>
        </div>
      </div>
    </section>
  );
}
