# -------- Builder --------
    FROM node:20-bullseye AS builder
    WORKDIR /app
    
    RUN npm install -g pnpm

    COPY package*.json ./
    RUN pnpm install
    
    COPY . .
    
    RUN pnpm --filter web build
    
    # -------- Runner --------
    FROM node:20-slim AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY package*.json ./
    
    EXPOSE 3000
    CMD ["npm", "start"]
