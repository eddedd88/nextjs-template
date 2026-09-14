# Repository Instructions for Coding Agents

## Purpose

This project is a Next.js App Router starter template for a SaaS-style web app with reusable UI primitives and server actions.

## Libraries and Tooling in Use

- Next.js `16.3.x` (App Router, typed routes enabled, Turbopack in dev)
- React `19.3.x` and React DOM `19.3.x`
- TypeScript `7.0.x` CLI in strict mode, with the TypeScript 6 compatibility API for tooling
- Tailwind CSS `4.x` with `@tailwindcss/postcss`
- shadcn/ui 4.21.x with the Radix Vega style (`components.json`) + Radix primitives via `radix-ui`
- `class-variance-authority` for variants and `cn` for Tailwind class merging
- `next-safe-action` + `zod` for validated server actions
- `react-hook-form` + `@hookform/resolvers` for client form handling
- `sonner` for toasts
- `lucide-react` icons
- `vaul` drawer primitives
- `@vercel/analytics` and `@vercel/speed-insights`
- ESLint 10 + `eslint-config-next` + `@eslint/compat`, Prettier 3 + `prettier-plugin-tailwindcss`, Husky + lint-staged

## Project Conventions

- Package manager: `pnpm`
- Path alias: `@/* -> src/*`
- Prefer Server Components by default; use `'use client'` only when needed.
- Use `safeAction` from `src/lib/safe-action.ts` for new server actions.
- Validate all action/form inputs with `zod`.
- Reuse components from `src/components/ui/*` before creating new UI primitives.
- Import `cn()` from `cn` for className merging (`src/lib/utils.ts` also re-exports it).
- Feature flags live in `src/lib/flags.ts` (`@/lib/flags`).
- Only introduce feature flags when explicitly requested; do not gate new features by default.
- Keep styling in Tailwind utility classes and theme tokens from `src/app/globals.css`.

## Implementation Paths to Know

- App routes and layouts: `src/app/**`
- Marketing pages: `src/app/(website)/**`
- Dashboard flow: `src/app/dash/**`
- Shared UI components: `src/components/ui/**`
- Shared helpers: `src/lib/**`
- Environment schema: `src/env/client-env.ts`, `src/env/server-env.ts`

## Run and Verify

```bash
pnpm dev
pnpm lint
pnpm build
```

`pnpm lint` is the single command for linting and type checking. It uses ESLint's content cache and still runs the TypeScript check. The ESLint cache is ignored by Git; delete `.eslintcache` after upgrading lint dependencies to force a fresh check.

Keep the TypeScript dependency aliases: `typescript` points to `@typescript/typescript6` for API consumers such as `typescript-eslint`, and `@typescript/native` points to TypeScript 7 for `tsc`. Keep `fixupConfigRules` in the ESLint config until Next's bundled plugins support ESLint 10's rule APIs directly; do not disable rules to work around plugin compatibility errors.

## Common Template TODOs

- Replace placeholder auth in `src/lib/auth.ts` and session stub in `src/lib/safe-action.ts`.
- Implement persistence/integrations for:
  - `src/app/dash/submit-prompt-action.ts`
  - `src/components/feedback-button/submit-feedback-action.ts`
  - `src/app/(website)/_components/join-waitlist-button/add-waitlist-action.tsx`
- Add and validate required env vars in `src/env/*.ts`.
