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

```bash
git clone <repository-url>
cd podcast-search-app
pnpm install
