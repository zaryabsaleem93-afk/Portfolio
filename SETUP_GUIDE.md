# Zaryab Saleem — React Portfolio

## Setup Guide

---

## Prerequisites

Make sure you have these installed:

- **Node.js** v18 or higher → https://nodejs.org
- **npm** v9+ (comes with Node.js)
- A code editor (VS Code recommended)

To check your versions:
```bash
node -v
npm -v
```

---

## Project Structure

```
zaryab-portfolio/
├── index.html              ← HTML entry point
├── vite.config.js          ← Vite config
├── package.json            ← Dependencies
└── src/
    ├── main.jsx            ← React root
    ├── App.jsx             ← Router + layout
    ├── index.css           ← Global styles + design tokens
    ├── components/
    │   ├── Navbar.jsx / .css
    │   ├── Footer.jsx / .css
    │   ├── PageTransition.jsx / .css
    │   └── useScrollReveal.js
    └── pages/
        ├── Home.jsx / .css
        ├── About.jsx / .css
        ├── Services.jsx / .css
        ├── Projects.jsx / .css
        ├── Academic.jsx / .css
        └── Contact.jsx / .css
```

---

## Quick Start

### Step 1 — Install dependencies

```bash
cd zaryab-portfolio
npm install
```

### Step 2 — Run in development

```bash
npm run dev
```

Open your browser at **http://localhost:5173**

Hot reload is enabled — any file change reflects instantly.

---

## Build for Production

```bash
npm run build
```

This outputs a `dist/` folder with optimized static files.

To preview the production build locally:
```bash
npm run preview
```

---

## Deployment

### Deploy to Netlify (Recommended — Free)

1. Go to https://netlify.com and sign up
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop the `dist/` folder
4. Your site is live instantly with a free URL

Or via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to Vercel (Also Free)

1. Go to https://vercel.com
2. Import your GitHub repository
3. Vercel auto-detects Vite — click Deploy

Or via CLI:
```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```
2. Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```
3. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
4. Run:
```bash
npm run deploy
```

---

## Customization

### Update Personal Info

All content is written directly in the page components. Edit these files:

| What to change | File |
|---|---|
| Hero text, name | `src/pages/Home.jsx` |
| Bio, services, contact info | `src/pages/About.jsx` |
| Services list | `src/pages/Services.jsx` |
| Projects list | `src/pages/Projects.jsx` |
| Education history | `src/pages/Academic.jsx` |
| Contact details | `src/pages/Contact.jsx` |

### Change Colors

Open `src/index.css` and edit the `:root` variables:

```css
:root {
  --bg: #0a0a0a;           /* Page background */
  --surface: #111111;      /* Card backgrounds */
  --accent: #c8a96e;       /* Gold accent color */
  --text: #f0ede8;         /* Main text color */
  --muted: #888880;        /* Secondary text */
}
```

### Change Fonts

The site uses **Bebas Neue** (headings) + **Outfit** (body).

To change fonts:
1. Visit https://fonts.google.com
2. Select new fonts and copy the `<link>` tag
3. Replace in `index.html`
4. Update `--font-display` and `--font-body` in `index.css`

### Add a New Page

1. Create `src/pages/NewPage.jsx`:
```jsx
import PageTransition from '../components/PageTransition'
import { useScrollReveal } from '../components/useScrollReveal'

export default function NewPage() {
  useScrollReveal()
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <h1>New Page</h1>
        </div>
      </section>
    </PageTransition>
  )
}
```

2. Add the route in `src/App.jsx`:
```jsx
import NewPage from './pages/NewPage'
// ...
<Route path="/new-page" element={<NewPage />} />
```

3. Add the link in `src/components/Navbar.jsx`:
```jsx
const links = [
  // ...existing links
  { to: '/new-page', label: 'New Page' },
]
```

### Add Projects

In `src/pages/Projects.jsx`, add to the `projects` array:
```js
{
  name: 'Your Project Name',
  desc: 'Short description of the project.',
  img: 'https://your-image-url.com/image.jpg',
  url: 'https://your-project-url.com',
  tag: 'E-Commerce', // Tag shown on card
},
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Vite 5 | Dev server + build tool |
| CSS (Vanilla) | Styling — no Tailwind needed |
| Google Fonts | Typography |

---

## Features

- **6 pages**: Home, About, Services, Projects, Academic, Contact
- **Animated page transitions** on every route change
- **Scroll reveal animations** for all sections
- **Fully responsive** — mobile, tablet, desktop
- **Sticky navbar** with scroll effect + mobile hamburger
- **Working contact form** with success state
- **SEO-friendly** HTML structure
- **Zero external CSS dependencies** — pure CSS variables

---

## Troubleshooting

**`npm install` fails** → Delete `node_modules/` and `package-lock.json`, then retry.

**Port already in use** → Change port: `npm run dev -- --port 3000`

**Images not loading** → The images use direct URLs from your WordPress site. They'll work as long as your WordPress site is live. To host locally, download images and place them in `src/assets/`.

**Blank page after build** → If deploying to a subfolder, set `base` in `vite.config.js` (see GitHub Pages section above).

---

*Built with ❤️ for Zaryab Saleem*
