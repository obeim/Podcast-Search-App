# Podcast Search App

A modern podcast search application built with **Next.js** and **Fastify**, featuring real-time search capabilities using the iTunes API with caching and persistence.

## Overview

This application lets users search for podcasts using the iTunes API with improved performance through caching and database persistence. It demonstrates how to design a full-stack project with scalable backend APIs and a responsive frontend.

### Features

- **Podcast search** with iTunes API integration
- **Smart caching system** to reduce duplicate API calls
- **Modern responsive UI** built with Tailwind CSS
- **Database persistence** using PostgreSQL + Prisma ORM
- **Monorepo architecture** powered by Turborepo for efficient development
- **Docker support** for local and production environments

---

## Architecture

This project is organized as a Turborepo monorepo with two main apps:

- **`apps/web`** → Next.js 15 frontend with Tailwind CSS
- **`apps/api`** → Fastify backend API with TypeScript and Prisma

### Key Highlights

- **Search Caching**: Results persisted in PostgreSQL to improve performance
- **iTunes Integration**: Real-time podcast data via iTunes Search API
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Modern Stack**: Latest Next.js 15, React 19, Fastify, Prisma

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- pnpm ≥ 9 (recommended)
- PostgreSQL instance

### Setup

- first make sure you add the env variables, check .env.example on the root folder and inside each app (apps/api and apps/web) for all the variables
- then after you made sure you added the correct env variables for both apps and run the following commands :

```bash
pnpm install
cd apps/api
## make sure postgres is running and you add the correct DATABASE_URL
## then generate prisma client
pnpm exec prisma generate
## apply migrations into the db
pnpm exec prisma migrate deploy

cd ../..

## development
pnpm run dev


## production
pnpm run build
pnpm run start

```
