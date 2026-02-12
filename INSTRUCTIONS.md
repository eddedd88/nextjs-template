# Repository Instructions for Coding Agents

## Purpose

This project is a Next.js App Router starter template for a SaaS-style web app with reusable UI primitives and server actions.

## Libraries and Tooling in Use

- Next.js `16.1.6` (App Router, typed routes enabled, Turbopack in dev)
- React `19.2.x` and React DOM `19.2.x`
- TypeScript `5.9.x` in strict mode
- Tailwind CSS `4.x` with `@tailwindcss/postcss`
- shadcn-style component setup (`components.json`) + Radix primitives via `radix-ui`
- `class-variance-authority`, `clsx`, `tailwind-merge` for variant-based styling
- `next-safe-action` + `zod` for validated server actions
- `react-hook-form` + `@hookform/resolvers` for client form handling
- `sonner` for toasts
- `lucide-react` icons
- `vaul` drawer primitives
- `@vercel/analytics` and `@vercel/speed-insights`
- ESLint 9 + `eslint-config-next`, Prettier 3 + `prettier-plugin-tailwindcss`, Husky + lint-staged

## Project Conventions

- Package manager: `pnpm`
- Path alias: `@/* -> src/*`
- Prefer Server Components by default; use `'use client'` only when needed.
- Use `safeAction` from `src/lib/safe-action.ts` for new server actions.
- Validate all action/form inputs with `zod`.
- Reuse components from `src/components/ui/*` before creating new UI primitives.
- Use `cn()` from `src/lib/utils.ts` for className merging.
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

## Common Template TODOs

- Replace placeholder auth in `src/lib/auth.ts` and session stub in `src/lib/safe-action.ts`.
- Implement persistence/integrations for:
  - `src/app/dash/submit-prompt-action.ts`
  - `src/components/feedback-button/submit-feedback-action.ts`
  - `src/app/(website)/_components/join-waitlist-button/add-waitlist-action.tsx`
- Add and validate required env vars in `src/env/*.ts`.
