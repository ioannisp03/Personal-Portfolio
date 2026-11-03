# Engineering portfolio

A complete software engineering portfolio built with Next.js App Router, strict TypeScript, Tailwind CSS, Motion for React, and Lucide icons. Near-black surfaces, electric-lime accents, expressive typography, and original CSS illustrations keep the design distinctive without stock imagery or external fonts.

## Run locally

Use a supported Node.js LTS release (22.13+ or 24 recommended) and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm`.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the production build. No environment variables, backend, database, authentication, paid API, or external font service is required.

## Included

- Homepage: hero, featured case studies, about, experience, skills, additional projects, and direct contact links.
- `/projects`: accessible discipline filters and animated project cards.
- `/projects/[slug]`: context, contribution, architecture, decisions, trade-offs, challenges, results, optional screenshots, and next-project navigation.
- Keyboard-accessible mobile navigation, skip link, focus states, reduced-motion support, semantic landmarks, and responsive layouts.
- Original CSS illustrations and optimized user-supplied images via `next/image`, with lazy loading for non-priority images.
- Per-project metadata, generated Open Graph image, favicon, sitemap, robots file, 404 page, loading skeleton, and recoverable error page.
- Server Components by default; client code is limited to navigation, reveals, the hero interaction, and filtering.

## Customize the content

All content lives in **`src/data/portfolio.ts`**, with models in **`src/types/portfolio.ts`**. Names, skills, architecture, and writing prompts are clearly labeled placeholders, not claims about your experience.

1. Update `personal.name`, `monogram`, `role`, `headline`, `introduction`, `description`, `about`, and `approach`.
2. Set `email`, social URLs, and your resume URL. Missing URLs remain `null` and render as unavailable text with an explanation. Social URLs open in a new tab with safe link attributes.
3. Add `public/resume.pdf` and set `resume.href` to `/resume.pdf`, or provide a real HTTPS resume URL. A local PDF opens directly so visitors can view or download it in their browser.
4. Replace the experience entry with verified roles, dates, locations, accomplishments, and technologies. Add entries to extend the timeline. Set each finished entry's `placeholder` to `false`.
5. Replace example skills with tools you actually use, then set each category's `placeholder` to `false`.
6. Add a portrait to `public/images/` and set `personal.portrait` to `{ src: "/images/portrait.webp", alt: "Portrait of your name", width: 800, height: 800 }`. Otherwise the designed photo placeholder remains.
7. Set `personal.siteUrl` to your final canonical HTTPS origin without a trailing slash. Set `personal.placeholder` to `false` once the personal content is ready. This enables search indexing and the sitemap. Until then the site emits `noindex` and disallows crawlers; the local metadata base is localhost.

Missing employment history? Use an empty `experience` array and remove the `<Experience />` section and its header link until you have content to share. Do not turn placeholder prompts into unsupported claims.

## Add a project

Add an object to `projects` in `src/data/portfolio.ts` using the `Project` type. The existing four entries demonstrate the format. Shared `story` values are writing prompts to replace, not project facts.

- Choose a unique URL-safe `slug`, e.g. `my-project`.
- Supply your title, subtitle, summary, category, year, technologies, role, timeline, and complete case-study story.
- Set `featured: true` for the homepage's selected-work section. Non-featured entries appear in the additional-project grid. Every project appears on `/projects`.
- Choose `visual: "systems"`, `"interface"`, `"terminal"`, or `"orbit"` for a designed placeholder. These always say they are illustrations, not screenshots.
- For real screenshots, add an `image` object and optional `gallery` array. Each requires `src`, descriptive `alt`, `width`, and `height`. Local files in `public/images/` need no extra configuration. External images require explicitly allowed `images.remotePatterns` in `next.config.ts`.
- Replace `architecture` nodes and `architectureNote` with your actual system and data flow. The template renders a sequential diagram. For branches or bidirectional edges, include an accurate diagram in `gallery` and explain it in the note.
- Populate decisions, trade-offs, challenges, results, and reflection. Metrics are optional: use verified qualitative outcomes when you have no measurements.
- Set `repository` and `demo` to real URLs, or leave them `null` when unavailable or private.
- Set `placeholder: false` only when the entire project's content is yours. Placeholder projects stay `noindex` and are excluded from the sitemap even after the rest of the site is ready.

Routes are generated at build time. Adding or editing projects requires a rebuild, with no route-component changes. Unknown slugs return the custom 404. Filters derive from the data; extend the category union in `Project` if you need more disciplines.

## Structure and design

```text
src/
  app/                    Routes, styles, metadata, loading/error pages
    projects/[slug]/      Statically generated case studies
  components/
    sections/             Homepage and shared contact sections
    ui/                   Reveal, link, and heading primitives
  data/portfolio.ts       All portfolio content
  lib/                    Small shared utilities
  types/                  Strict data models
public/images/            Your photographs, screenshots, and diagrams
```

Color tokens and responsive layout rules live in `src/app/globals.css`. Tailwind's CSS-first theme exposes the same palette as utilities. No external font download is needed. The hero has three manually selected process steps with no continuous animation. Motion respects reduced-motion preferences. Reveals retain visible content before JavaScript loads.

## Deploy to Vercel

Nothing has been deployed. When ready:

1. Replace placeholder content and add real links and assets. Configure `siteUrl` and indexing flags as described above.
2. Run lint, typecheck, and the production build locally.
3. Push the repository to your Git provider.
4. In Vercel, import the repository with the **Next.js** framework preset. Use `npm ci` for installation and `npm run build` for the build. Leave the output directory at its default.
5. Deploy on the free Hobby tier, subject to Vercel's current limits and terms. This project requires no environment variables or paid integrations.
6. If Vercel assigned a new URL, update `siteUrl` to that origin and redeploy. Check the homepage, project routes, `/opengraph-image`, `/robots.txt`, and `/sitemap.xml` on the final domain.

Publish only after you have reviewed the content and are ready for it to be public. `noindex` is a search-engine directive, not access control.
