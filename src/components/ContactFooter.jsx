export default function ContactFooter({ t }) {
  const details = [
    {
      icon: "📍",
      labelKey: "contact_address_label",
      valueKey: "contact_address_value",
    },
    {
      icon: "📞",
      labelKey: "contact_phone_label",
      valueKey: "contact_phone_value",
      href: "tel:+251930072428",
    },
    {
      icon: "🕐",
      labelKey: "contact_hours_label",
      valueKey: "contact_hours_value",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <p className="section-eyebrow">{t.contact_section_eyebrow}</p>
          <h2 className="section-headline">{t.contact_section_headline}</h2>
        </div>

        <div className="contact-grid">
          {/* Info Cards */}
          <div className="contact-info">
            {details.map(({ icon, labelKey, valueKey, href }) => (
              <div key={labelKey} className="contact-card">
                <span className="contact-card__icon">{icon}</span>
                <div>
                  <p className="contact-card__label">{t[labelKey]}</p>
                  {href ? (
                    <a href={href} className="contact-card__value contact-card__link">
                      {t[valueKey]}
                    </a>
                  ) : (
                    <p className="contact-card__value">{t[valueKey]}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="contact-social">
              <p className="contact-card__label">{t.contact_social_label}</p>
              <div className="contact-social__links">
                <a
                  href="https://web.facebook.com/p/Hamar-cafe-100083071643931/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="contact-map">
            <div className="map-block">
              <div className="map-block__pin" aria-hidden="true">
                <span>📍</span>
              </div>
              <p className="map-block__label">{t.contact_map_placeholder}</p>
              <a
                href="https://maps.google.com/?q=Woldia,Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary map-block__btn"
              >
                Open in Google Maps ↗
              </a>
              <div className="map-block__grid" aria-hidden="true">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="map-block__cell" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <footer className="footer-bar">
        <p className="footer-bar__tagline">{t.footer_tagline}</p>
        <p className="footer-bar__copy">{t.footer_copy}</p>
      </footer>
    </section>
  );
}
