# Coding Skills for This Repository

## 1) Build a New Server Action

Use this for mutations or backend-side operations.

1. Create file in a route/component folder with `'use server'`.
2. Import `safeAction` from `@/lib/safe-action`.
3. Add `.inputSchema(z.object({...}))`.
4. Implement `.action(async ({ parsedInput, ctx }) => { ... })`.
5. Throw `PublicError` for user-safe errors when needed.
6. Connect from client with `useAction(...)` in a client component.

## 2) Build a Form with Validation

Use for user inputs beyond simple one-field forms.

1. Define a shared `zod` schema for payload shape.
2. Use `react-hook-form` + resolver when client-side validation UX is needed.
3. Reuse `ControlledField` (`src/components/cotrolled-field.tsx`) and `ui/*` inputs.
4. Submit into a `safeAction` and render errors/toasts.

## 3) Add a New UI Section/Page

Use for marketing or dashboard UI extensions.

1. Create route in `src/app/**` (or `src/app/(website)/**` for marketing).
2. Reuse existing UI primitives from `src/components/ui/**`.
3. Use `Typography`, `Button`, `Card`, `Accordion`, etc. before custom primitives.
4. Keep spacing/layout consistent with existing `container` and utility patterns.

## 4) Add Environment Variables Safely

Use when integrations or APIs are introduced.

1. Add server vars to `src/env/server-env.ts`.
2. Add client vars (must start with `NEXT_PUBLIC_`) to `src/env/client-env.ts`.
3. Parse via zod and keep errors explicit.
4. Update `.env.example` with expected keys.

## 5) Implement Authentication

Use when replacing template placeholders.

1. Implement `getAuthToken()` in `src/lib/auth.ts`.
2. Replace session stub in `src/lib/safe-action.ts` middleware.
3. Ensure action `ctx.user.id` remains available for existing action patterns.
4. Protect private routes/layouts in `src/app/dash/**`.

## 6) Quality Gate Before Finishing

1. Run `pnpm lint`.
2. Run `pnpm build` for major changes.
3. Verify no placeholder logs/TODOs remain in touched paths.
