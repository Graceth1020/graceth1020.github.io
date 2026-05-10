# graceth1020.github.io

Personal portfolio site built with React + Vite + Tailwind CSS.  
Feel free to fork and use this as a template for your own site!  

🔗 **Live preview:** [graceth1020.github.io](https://graceth1020.github.io/)  
📖 [中文说明](README.zh.md)

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

## Customization

To make this site your own, edit these files:

### 1. Personal info — `src/config/site.ts`

```ts
export const site = {
  name: "Your Name",          // displayed in greeting, copyright, SEO
  handle: "yourhandle",       // shown in top-left nav brand
  url: "https://example.com",
  description: "Your SEO description...",
  social: { github: "https://github.com/yourhandle" },
  year: "2025",
  builtWith: "YourFramework", // "Built with YourFramework"
};
```

### 2. Projects — `src/config/projects.ts`

Replace the sample projects with your own. Each project has a `description` object with `en` and `zh` fields.

### 3. UI text & translations — `src/config/translations.ts`

Update the hero greeting, bio, section labels, and all UI strings in both `en` and `zh`.

### 4. Meta tags — `index.html`

Update the `<title>` and `<meta>` tags as a static fallback (they're also synced at runtime from `site.ts`).

### 5. Colors — `src/index.css`

Tweak the HSL design tokens in `:root` (light) and `.dark` (dark) to match your brand.

### 6. Logo / favicon — `public/`

Replace `favicon.ico` and add your own assets.

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
├── config/            # Central configuration
│   ├── site.ts        # Your personal info (name, links, etc.)
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
