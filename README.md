# Creative Portfolio — Template

A polished, brand-forward portfolio template for creatives and motion designers. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion — ideal for showcasing case studies, videos and animated interactions.

## Features

- Branded, responsive layouts and case-study pages
- Motion-ready components and smooth page transitions (Framer Motion)
- Image & video support with a simple public assets workflow
- TypeScript, Tailwind CSS, and opinionated component structure
- SEO-friendly, accessible markup and clean data-driven content

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Quick start

1. Install dependencies

   ```bash
   npm install
   ```

2. Run the dev server

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser.

## Customize content

- Project data lives in `src/data/portfolio.ts`. Edit `projects`, `siteConfig`, `services`, and `testimonials` to replace sample content.
- Place images and videos in the `public/` folder and reference them from `portfolio.ts` using absolute paths starting with `/` (for example: `/projects/your-project/cover.jpg`).
- The header, sections and components are in `src/components/` and `src/app/`. Use the existing components as patterns for new pages.

## Assets and media

Keep large source files (PSD, AI, AEP) out of the `public/` folder — only add web-optimized images and video files you want served by the site. Use `public/projects/` for project-specific media.

## Deployment

This template works with Vercel, Netlify, and other static/serverless hosts that support Next.js. For Vercel, simply connect the repository and deploy — Vercel will build and serve the site automatically.

## License

MIT — feel free to use this template for personal or commercial projects.

---

If you want, I can also update `package.json` with the repository name and short description, and add a short demo screenshot to the README. Which would you like me to add next?
