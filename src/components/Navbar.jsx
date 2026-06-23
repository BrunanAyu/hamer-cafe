import { useState, useEffect } from "react";

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { key: "nav_home", href: "#home" },
    { key: "nav_menu", href: "#menu" },
    { key: "nav_about", href: "#about" },
    { key: "nav_contact", href: "#contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          <span className="navbar__brand-icon">☕</span>
          {t.nav_brand}
        </a>

        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {links.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {t[key]}
            </a>
          ))}
          <button
            className="navbar__lang-toggle"
            onClick={() => {
              setLang(lang === "en" ? "am" : "en");
              setMenuOpen(false);
            }}
            aria-label="Toggle language"
          >
            {t.nav_lang_toggle}
          </button>
          <a href="#contact" className="navbar__find-us" onClick={() => setMenuOpen(false)}>
            {t.nav_find_us}
          </a>
        </nav>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
