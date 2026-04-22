# fjrosario

Personal link hub and redirect site for [frankrosario.com](https://frankrosario.com),
built with Next.js and exported as a static site for GitHub Pages.

## Requirements

- Node.js 20+
- npm

## Local development

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Content updates

- Edit the home page links in [src/data/linkArray.ts](/Users/frankrosario/Projects/fjrosario/src/data/linkArray.ts:1).
- Edit the profile text in [src/data/bio.ts](/Users/frankrosario/Projects/fjrosario/src/data/bio.ts:1).
- Redirect pages under `/out/<slug>` are generated from the same link data.

## Analytics

- Set `NEXT_PUBLIC_GA_ID` to enable Google Analytics loading in production builds.
- If no analytics ID is set, the site skips loading analytics scripts.
