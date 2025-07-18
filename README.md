## Demo

### [See demo](https://nextjs-template-eight-plum.vercel.app/)

## Getting Started

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running.

**TIP:** Ask your AI Coding Assistant to update the landing page with your own content.

## Tech Stack

- [Next.js](https://github.com/vercel/next.js/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Next Safe Action](https://github.com/TheEdoRan/next-safe-action)
- [Google Gemini AI](https://github.com/googleapis/js-genai)
- [Convex](https://convex.dev/)
- [Clerk](https://clerk.com/)

### Backend & Auth

This template contains an alternative dashboard that uses **Convex** for your backend needs (database, real-time updates, serverless functions, background jobs) and **Clerk** for authentication. Both services offer generous free tiers and are perfect for getting started quickly.

##### Setting up Convex and Clerk

1. Replace the existing `/dash` and `/login` folders and move the `/middleware.ts` file.

```
src/app/_dash-with-convex-and-clerk/
├── dash          -> src/app/dash
├── login         -> src/app/login
└── middleware.ts -> src/middleware.ts
```

2. Configure your environment variables:
   - Copy the `.env.example` file into a new `.env` file.
   - Update the environment variables in `.env` with your Convex and Clerk account values.
   - Update the environment validation files:
     ```bash
     src/lib/client-env.ts
     src/lib/server-env.ts
     ```
3. Update `src/app/layout.tsx` to use the `Providers` component from `src/app/providers.tsx`
