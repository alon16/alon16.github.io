# alon16.github.io

Personal portfolio of Katherine Alondra Ruiz, built with Vue 3 + Vite. English/Spanish, light/dark mode.

Live: https://alon16.github.io/

## Development

Requires Node 22 (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm dev       # local dev server
pnpm build     # production build in dist/
pnpm preview   # serve the production build
```

## Editing content

| What | Where |
| --- | --- |
| UI text (EN / ES) | `src/i18n/en.json`, `src/i18n/es.json` |
| Experience | `src/data/experience.js` |
| Projects | `src/data/projects.js` (add `demo: 'https://…'` to show a Demo button) |
| Skills | `src/data/skills.js` |
| CV downloads | `public/cv/KAR_CV_EN.pdf`, `public/cv/KAR_CV_ES.pdf` |
| Social preview image | `public/og-image.png` (1200×630) |

## Deploy

Every push to `main` builds and deploys with GitHub Actions (`.github/workflows/deploy.yml`).
In the repo settings, set **Pages → Source** to **GitHub Actions**.
