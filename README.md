## Demo

### [See demo](https://nextjs-template-eight-plum.vercel.app/)

## Getting Started

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running.

**TIP:** Ask your AI Coding Assistant to update the landing page with your own content.

## UI Components

This template uses shadcn/ui 4.21.x with the Radix Vega style, Lucide icons, and Tailwind CSS 4. Components live in `src/components/ui`; their configuration is in `components.json` and theme tokens are in `src/app/globals.css`.

Use the installed CLI to add components or preview updates:

```bash
pnpm exec shadcn add tooltip
pnpm exec shadcn add button --diff
```

shadcn components are source files owned by this repo, so upgrading the `shadcn` package alone does not update them. Review component diffs before applying updates and preserve local customizations. Keep `shadcn/tailwind.css` imported in the global stylesheet for component utilities and variants.

Import `cn` from `cn` to merge Tailwind classes. The legacy `@/lib/utils` path re-exports the same helper for compatibility. See the [shadcn migration guide](https://ui.shadcn.com/docs/changelog/2026-09-cn).

## Tech Stack

- [Next.js](https://github.com/vercel/next.js/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Next Safe Action](https://github.com/TheEdoRan/next-safe-action)
- [Google Gemini AI](https://github.com/googleapis/js-genai)
