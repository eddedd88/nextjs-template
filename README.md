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

1. Replace the existing dash and login folders and add the middleware file

```
src/app/_dash-with-convex-and-clerk/
├── dash          -> src/app/dash
├── login         -> src/app/login
└── middleware.ts -> src/middleware.ts
```
