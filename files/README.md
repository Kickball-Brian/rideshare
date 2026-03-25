# RideshareLogic

Eleventy-powered static site with component-based architecture and Netlify CI/CD.

---

## Local Development

```bash
npm install
npm start
```

Site runs at `http://localhost:8080` with live reload.

---

## File Structure

```
src/
├── _includes/
│   ├── head.njk       ← <head> tag (meta, fonts, CSS link)
│   ├── nav.njk        ← site navigation
│   └── footer.njk     ← site footer + JS link
├── _layouts/
│   └── base.njk       ← wraps every page with head/nav/footer
├── assets/
│   ├── css/main.css   ← global styles + CSS variables
│   ├── js/main.js     ← global scripts
│   └── images/        ← all site images go here
└── index.njk          ← homepage (add pages here)
```

---

## Adding a New Page

Create `src/your-page-name/index.njk`:

```njk
---
layout: base.njk
title: Your Page Title
description: Page meta description
---

<!-- Your page HTML here -->
```

---

## Deployment

| Branch    | Environment | Auto-deploys |
|-----------|-------------|--------------|
| `main`    | Production  | ✅ on push   |
| `staging` | Staging     | ✅ on push   |

Push to `staging` to preview. Merge to `main` to go live.

---

## Netlify Setup (one-time)

1. In Netlify → **Site Settings → Build & Deploy → Branch Deploys**
2. Add `staging` as a branch to deploy
3. That's it — `netlify.toml` handles the rest
