FROM node:23.10-alpine3.20

WORKDIR /app

COPY package.json bun.lock* .npmrc* ./

RUN \
  if [ -f bun.lock ]; then npm install -g bun && bun install; \
  else echo "=> Warning: bun.lock not found. Using npm ci" && npm ci; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.ts .
COPY tsconfig.json .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  if [ -f bun.lock ]; then bun run build; \
  else echo "=> Warning: bun.lock not found. Using npm run build" && npm run build; \
  fi

CMD \
  if [ -f bun.lock ]; then bun run start; \
  else echo "=> Warning: bun.lock not found. Using npm run start" && npm run start; \
  fi