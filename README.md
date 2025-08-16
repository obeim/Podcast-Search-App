# Thmanyah Fullstack Assessment - Podcast Search App

A modern podcast search application built with Next.js and Fastify, featuring real-time search capabilities using the iTunes API with caching and persistence.

## 🎯 Project Overview

This application allows users to search for podcasts using the iTunes API. It features:

- **podcast search** with iTunes API integration
- **Smart caching system** to avoid duplicate API calls
- **Modern UI** with Tailwind CSS and responsive design
- **Database persistence** with PostgreSQL and Prisma ORM
- **Monorepo architecture** with Turborepo for efficient development

## 🏗️ Architecture

This Turborepo monorepo consists of:

### Apps and Packages

- **`apps/web`**: Next.js 15 frontend with Tailwind CSS
- **`apps/api`**: Fastify backend API with TypeScript

### Key Features

- **Search Caching**: Previously searched terms are cached in PostgreSQL to improve performance
- **iTunes Integration**: Direct integration with iTunes Search API for podcast data
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Modern Stack**: Latest versions of Next.js 15, React 19, and Fastify

### Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, TypeScript
- **Backend**: Fastify, Prisma ORM, PostgreSQL, TypeScript
- **Development**: Turborepo, Prettier, tsx
- **Database**: PostgreSQL with Prisma ORM

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 9.0.0 (recommended package manager)
- **PostgreSQL** database instance

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd thmanyah-fullstack-assesment
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create `.env` files in the respective app directories:

   **For API (`apps/api/.env`):**

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/podcast_search_db"
   ```

   **For Web (`apps/web/.env.local`):**

   ```env
   NEXT_PUBLIC_API_URL="http://localhost:4000"
   ```

4. **Set up the database**
   ```bash
   cd apps/api
   npx prisma generate
   npx prisma db push
   cd ../..
   ```

### Development

**Start all services:**

```bash
pnpm dev
```

**Start individual services:**

```bash
# Frontend only
pnpm dev --filter=web

# Backend only
pnpm dev --filter=api
```

### URLs

- **Frontend**: http://localhost:3000
- **API**: http://localhost:4000
- **API Health Check**: http://localhost:4000/health

### Building for Production

**Build all apps:**

```bash
pnpm build
```

**Build specific app:**

```bash
pnpm build --filter=web
pnpm build --filter=api
```

**Start production servers:**

```bash
# After building
cd apps/web && pnpm start
cd apps/api && pnpm start
```

## 🔧 Environment Variables

### Required Environment Variables

#### API Service (`apps/api/.env`)

| Variable       | Description                  | Example                                            |
| -------------- | ---------------------------- | -------------------------------------------------- |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/podcast_db` |

#### Web Service (`apps/web/.env.local`)

| Variable              | Description     | Example                 |
| --------------------- | --------------- | ----------------------- |
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:4000` |

## 🚀 How to Run the Project

### Option 1: Run with Docker (Recommended)

1. **Clone and navigate to the project**

   ```bash
   git clone <repository-url>
   cd thmanyah-fullstack-assesment
   ```

2. **Run with Docker Compose**

   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - API: http://localhost:4000

### Option 2: Run Locally

1. **Clone and install dependencies**

   ```bash
   git clone <repository-url>
   cd thmanyah-fullstack-assesment
   pnpm install
   ```

2. **Create environment files**

   Create `apps/api/.env`:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/podcast_search_db"
   PORT=4000
   ```

   Create `apps/web/.env.local`:

   ```env
   NEXT_PUBLIC_API_URL="http://localhost:4000"
   ```

3. **Set up database (Prisma will create the database automatically)**

   ```bash
   cd apps/api
   npx prisma generate
   npx prisma db push
   cd ../..
   ```

4. **Start the development servers**

   ```bash
   pnpm dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - API: http://localhost:4000

## 📝 API Endpoints

### Search Podcasts

- **GET** `/search?term={search_term}`
- **Description**: Search for podcasts using iTunes API
- **Response**: Array of podcast objects with caching

### Example Response

```json
[
  {
    "trackId": 123456789,
    "trackName": "The Joe Rogan Experience",
    "artistName": "Joe Rogan",
    "artworkUrl": "https://example.com/artwork.jpg"
  }
]
```

## 🧪 Development Commands

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Start specfic app on dev
pnpm run dev --filter web
pnpm run dev --filter api

# Build for production
pnpm build

# Database operations
cd apps/api
npx prisma generate    # Generate Prisma client
npx prisma db push     # Push schema to database
npx prisma studio      # Open Prisma Studio
```

## 🏗️ Build for Production

```bash
# Build all applications
pnpm build

# Start production servers
cd apps/api && pnpm start  # API on port 4000
cd apps/web && pnpm start  # Web on port 3000
```
