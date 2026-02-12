# Agents Guide for This Repo

## Scope

This file defines recommended agent roles and behavior for contributing safely and quickly to this project.

## Agent Role

### 1) `fullstack-agent`

- Goal: deliver end-to-end product changes across UI, app logic, integrations, and quality checks.
- Typical tasks:
  - add/modify App Router pages in `src/app/**`
  - create/update components in `src/components/**`
  - implement server actions with `next-safe-action`
  - connect integrations (auth, DB, APIs, analytics)
  - run lint/build verification
- Must do:
  - include zod validation for new inputs
  - reuse existing `ui/*` primitives
  - never bypass env validation in `src/env/*.ts`
  - keep secrets server-only
  - run `pnpm lint` before finalizing
  - run `pnpm build` when structural changes occur

### 2) `playwright-test-agent`

- Goal: create and maintain end-to-end tests using Playwright.
- Typical tasks:
  - add/update E2E specs under a repo test folder (for example `tests/e2e/**`)
  - cover critical user flows across marketing pages, login, and dashboard
  - improve selector reliability and reduce flaky assertions
- Must do:
  - use stable selectors (`role`, `label`, `text`, or explicit test IDs when needed)
  - keep tests deterministic (avoid fixed sleeps; prefer `expect(...).toBeVisible()` style waits)
  - include both happy-path and at least one failure/validation-path case for new flows
  - document any required test fixtures or seeded data

### 3) `code-review-agent`

- Goal: review the entire codebase for correctness, maintainability, and risk.
- Typical tasks:
  - inspect changed and related files for bugs or regressions
  - identify missing validation, error handling, typing, and test coverage
  - flag architectural drift from repository conventions
- Must do:
  - prioritize findings by severity (`high`, `medium`, `low`)
  - provide file references for each finding
  - call out missing tests and residual risks explicitly
  - avoid style-only feedback unless it affects readability or reliability

## Working Rules

- Use `pnpm` commands.
- Keep TypeScript strictness intact; do not introduce `any` unless justified.
- Follow existing formatting and lint rules.
- Prefer minimal, composable edits over broad refactors.
- Keep changes localized and aligned with existing folder structure.
- When adding logic to templates with TODOs, replace placeholder logs with real behavior.
- For feature gating, use `src/lib/flags.ts` (`@/lib/flags`), but only when explicitly requested.
- Do not add feature flags by default for routine feature work.

## Mandatory Review Gate

- After every feature is built, `code-review-agent` must run a full review before the work is considered complete.
- Completion criteria for any feature:
  1. Feature implementation finished by `fullstack-agent` (or other implementation agent).
  2. Validation checks run (`pnpm lint`, and `pnpm build` for structural changes).
  3. Full review executed by `code-review-agent` with severity-ranked findings and file references.
  4. High-severity findings resolved, or explicitly accepted with documented rationale.

## Handoff Format Between Agents

When one agent finishes, include:

1. Files changed.
2. Behavior added/modified.
3. Checks run (`pnpm lint`, `pnpm build`) and results.
4. Open follow-ups (if any).
