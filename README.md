## Demo

### [See demo](https://nextjs-template-eight-plum.vercel.app/)

## Getting Started

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running.

**TIP:** Ask your AI Coding Assistant to update the landing page with your own content.

## Linting and Type Checking

Run `pnpm lint` to lint the repository with ESLint 10 and type-check it with TypeScript 7. ESLint caches successful results by file content in the ignored `.eslintcache` file, so repeated runs skip unchanged files. The first run still checks every file; TypeScript runs every time using its existing incremental cache.

After upgrading lint dependencies, delete `.eslintcache` to force a fresh check with the same `pnpm lint` command.

TypeScript 7 does not provide the compiler API required by `typescript-eslint`. The dependency named `typescript` therefore aliases `@typescript/typescript6` for API consumers, while `@typescript/native` aliases TypeScript 7 and provides the `tsc` command. Keep both aliases when updating dependencies; see [Microsoft's side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0).

`eslint.config.mjs` uses `@eslint/compat` to adapt the older rule APIs used by plugins bundled with `eslint-config-next`. Their upstream peer ranges still exclude ESLint 10, so pnpm may report peer warnings. The compatibility wrapper preserves the Next.js, React, accessibility, import, and TypeScript rules. Remove it once the bundled plugins support ESLint 10 directly.

## UI Components

This template uses shadcn/ui 4.22.x with the Base UI Vega style (`base-vega`), Lucide icons, and Tailwind CSS 4. Components live in `src/components/ui`; their configuration is in `components.json` and theme tokens are in `src/app/globals.css`.

Interactive primitives, including the drawer, use `@base-ui/react`. Compose triggers and buttons with `render` instead of `asChild`; for buttons rendered as links, also set `nativeButton={false}` and `role='link'` to preserve link semantics. For example: `<Button nativeButton={false} role='link' render={<Link href='/dash' />}>Dashboard</Button>`. See the [Base UI composition guide](https://base-ui.com/react/handbook/composition).

Use the installed CLI to add components or preview updates:

```bash
pnpm exec shadcn add tooltip
pnpm exec shadcn add button --diff
```

shadcn components are source files owned by this repo, so upgrading the `shadcn` package alone does not update them. Review component diffs before applying updates and preserve local customizations. Keep `shadcn/tailwind.css` imported in the global stylesheet for component utilities and variants.

Import `cn` from `cn` to merge Tailwind classes. The legacy `@/lib/utils` path re-exports the same helper for compatibility. See the [shadcn migration guide](https://ui.shadcn.com/docs/changelog/2026-09-cn).

## Browser Checks

Run `pnpm exec playwright install chromium` once, then `pnpm exec playwright test` to check the Base UI links, accordion, dialogs, mobile drawer, user menu, form validation, and file preview. The tests start a local development server on port 3100. They use the template's demo user and an in-memory CSV file; no seeded database or external accounts are required.

## Tech Stack

- [Next.js](https://github.com/vercel/next.js/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Next Safe Action](https://github.com/TheEdoRan/next-safe-action)
- [Google Gemini AI](https://github.com/googleapis/js-genai)
