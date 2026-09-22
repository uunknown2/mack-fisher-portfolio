# Mack Fisher — Engineering Portfolio

A production-oriented personal engineering portfolio built with React, Vite, and TypeScript.

## Local development

Use Node.js 22.12 or newer and pnpm 10.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Production build

```bash
pnpm build
pnpm preview
```

The generated site is written to `dist/`. Run `pnpm typecheck` for a standalone TypeScript check.

## Cloudflare Workers deployment

Connect this GitHub repository through Cloudflare Workers & Pages. Select the repository's default branch and use:

- Build command: `pnpm build`
- Deploy command: `npx wrangler deploy`
- Root directory: repository root

The included `wrangler.jsonc` serves `dist/` as static assets; no backend or secrets are required. After deployment, add your domain in the Worker's custom-domain settings. Connecting the repository allows Cloudflare to build subsequent pushes automatically.

See [Cloudflare's static-site setup](https://developers.cloudflare.com/workers/static-assets/get-started/) for the current dashboard workflow. Deployment and domain setup are separate from uploading this repository.

## Project structure

- `src/App.tsx`: introduction, experience, capabilities, about, and contact
- `src/SelectedWork.tsx`: project content, captions, and gallery layout
- `src/styles.css`: typography, layout, and responsive styles
- `public/images/`: photos used by the site
- `public/resume/`: downloadable public résumé
- `index.html`: page metadata

Edit the project data in `SelectedWork.tsx` to update case studies. Use the existing photo layout to preserve full images and readable captions. Original photos, working documents, unused image variants, and review screenshots remain local and are excluded from Git.

## Image notes

Project photographs are provided by Mack Fisher. The cold-spray section distinguishes representative process imagery from an authorized photograph of a Mactech component used in the project; confidential ARL system imagery is intentionally excluded.
