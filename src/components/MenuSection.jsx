const menuItems = [
  {
    id: "macchiato",
    emoji: "☕",
    nameKey: "menu_item_macchiato_name",
    descKey: "menu_item_macchiato_desc",
    priceKey: "menu_item_macchiato_price",
    tag: "signature",
  },
  {
    id: "black_forest",
    emoji: "🎂",
    nameKey: "menu_item_black_forest_name",
    descKey: "menu_item_black_forest_desc",
    priceKey: "menu_item_black_forest_price",
    tag: "popular",
  },
  {
    id: "custom_cake",
    emoji: "🎉",
    nameKey: "menu_item_custom_cake_name",
    descKey: "menu_item_custom_cake_desc",
    priceKey: "menu_item_custom_cake_price",
    tag: "custom",
  },
  {
    id: "cookies",
    emoji: "🍪",
    nameKey: "menu_item_cookies_name",
    descKey: "menu_item_cookies_desc",
    priceKey: "menu_item_cookies_price",
    tag: "daily",
  },
  {
    id: "blue_rose",
    emoji: "🌹",
    nameKey: "menu_item_blue_rose_name",
    descKey: "menu_item_blue_rose_desc",
    priceKey: "menu_item_blue_rose_price",
    tag: "premium",
  },
  {
    id: "barbie",
    emoji: "✨",
    nameKey: "menu_item_barbie_name",
    descKey: "menu_item_barbie_desc",
    priceKey: "menu_item_barbie_price",
    tag: "showpiece",
  },
];

export default function MenuSection({ t }) {
  return (
    <section id="menu" className="menu-section">
      <div className="section-container">
        <div className="section-header">
          <p className="section-eyebrow">{t.menu_section_eyebrow}</p>
          <h2 className="section-headline">{t.menu_section_headline}</h2>
          <p className="section-subtext">{t.menu_section_subtext}</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <article key={item.id} className="menu-card">
              <div className="menu-card__emoji-wrap">
                <span className="menu-card__emoji" role="img" aria-label={t[item.nameKey]}>
                  {item.emoji}
                </span>
              </div>
              <div className="menu-card__body">
                <span className={`menu-card__tag menu-card__tag--${item.tag}`}>
                  {item.tag}
                </span>
                <h3 className="menu-card__name">{t[item.nameKey]}</h3>
                <p className="menu-card__desc">{t[item.descKey]}</p>
                <p className="menu-card__price">{t[item.priceKey]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
