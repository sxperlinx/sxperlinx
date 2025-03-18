FROM node:23.10-alpine3.20 AS builder

WORKDIR /app

COPY package.json bun.lock .npmrc* ./

RUN \
  if [ -f bun.lock ]; then npm install -g bun && bun install; \
  else echo "=> Warning: bun.lock not found. Using npm ci." && npm ci; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.ts .
COPY tsconfig.json .

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

CMD \
  if [ -f package-lock.json ]; npm run dev \
  elif [ -f bun.lock ]; then bun run dev; \
  else echo "=> Warning: Lockfile not found. Using npm run dev" && npm run dev; \
  fi