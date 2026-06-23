# ☕ Hamar Café — Landing Page

A premium bilingual (English / Amharic) café landing page built with **React + Vite** and pure modern CSS.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Project Structure

```
hamar-cafe/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx               # Entry point
    ├── App.jsx                # Root component, language state
    ├── styles.css             # Full design system & all styles
    ├── constants/
    │   └── translations.js    # ← All text in EN + AM (edit here)
    └── components/
        ├── Navbar.jsx          # Sticky nav + language toggle
        ├── Hero.jsx            # Full-height hero section
        ├── MenuSection.jsx     # 6-item menu grid
        ├── AboutSection.jsx    # Story + stats + coffee art
        └── ContactFooter.jsx   # Address, phone, map, footer
```

## 🌐 Adding Translations

All text lives in `src/constants/translations.js`. To change any copy or add a new language:

1. Open `src/constants/translations.js`
2. Add your key-value pairs under the `en` or `am` object
3. Reference the key in the appropriate component using `t.your_key`

## 🎨 Changing Colors

All colors are CSS custom properties in `src/styles.css` under `:root`. Change `--gold`, `--espresso`, `--cream`, etc. to retheme the entire site instantly.

## 📞 Contact Info

| Field   | Value          |
|---------|----------------|
| Address | Woldia, Ethiopia |
| Phone   | 093 007 2428   |
| Hours   | Always Open    |
