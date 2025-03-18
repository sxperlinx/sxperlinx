FROM node:23.10-alpine3.20 AS base

# 1. Rebuild source code only when needed
FROM base AS builder

WORKDIR /app

COPY package.json bun.lock* .npmrc* ./

RUN \
  if [ -f bun.lock ]; then npm install -g bun && bun install; \
  else echo "=> Warning: bun.lock not found. Using npm ci." && npm ci; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.ts .
COPY tsconfig.json .

ARG NODE_ENV
ENV NODE_ENV=production

ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  if [ -f bun.lock ]; then bun run build; \
  else echo "=> Warning: bun.lock not found. Using npm run build." && npm run build; \
  fi

# 2. Production image
FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

CMD \
  if [ -f bun.lock ]; then bun run start; \
  else echo "=> Warning: bun.lock not found. Using npm run start." && npm run start; \
  fi