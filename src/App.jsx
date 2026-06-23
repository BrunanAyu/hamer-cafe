import { useState } from "react";
import translations from "./constants/translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import ContactFooter from "./components/ContactFooter";
import "./styles.css";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="app" lang={lang}>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <MenuSection t={t} />
        <AboutSection t={t} />
        <ContactFooter t={t} />
      </main>
    </div>
  );
}
