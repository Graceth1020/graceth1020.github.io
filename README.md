# graceth1020.github.io

Personal portfolio site built with React + Vite + Tailwind CSS.  
Feel free to fork and use this as a template for your own site!  
[中文说明](README.zh.md)

---



## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build tool:** Vite 5 + SWC
- **Styling:** Tailwind CSS 3 + shadcn/ui
- **Routing:** React Router v6
- **State:** TanStack React Query
- **Dark mode:** next-themes
- **i18n:** Lightweight custom Context-based solution (en/zh)
- **Package manager:** Bun / npm

## Features

- Clean editorial-style design with responsive layout
- Dark / light mode toggle (follows system preference by default)
- Bilingual support — English and Chinese (auto-detects browser language)
- Dynamic project listing from config data
- GitHub integration with source links
- Deployed via GitHub Actions to GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Opens at `http://localhost:8080`.

## Build

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── ThemeToggle.tsx
│   └── LanguageSwitcher.tsx
├── config/            # Project data and translations
│   ├── projects.ts    # Project listings (multilingual descriptions)
│   └── translations.ts
├── contexts/
│   └── LanguageContext.tsx  # i18n provider and hook
├── pages/
│   ├── Index.tsx      # Main portfolio page
│   └── NotFound.tsx   # 404 page
├── lib/utils.ts       # cn() utility
├── App.tsx
├── index.css          # Design tokens (light + dark mode)
└── main.tsx           # Entry point
```

## License

MIT
