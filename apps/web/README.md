This is a [Next.js](https://nextjs.org) app styled with [Tailwind CSS](https://tailwindcss.com) inside a Turborepo monorepo.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file. Global styles are in `app/globals.css` and Tailwind config in `tailwind.config.ts`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Monorepo

This repo contains two apps:

- `apps/web`: Next.js + Tailwind
- `apps/api`: Fastify + TypeScript

Shared configs live in `packages/*`.
