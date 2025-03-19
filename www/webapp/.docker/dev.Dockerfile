FROM node:23.10-alpine3.20 AS builder

WORKDIR /app

COPY package.json bun.lockb ./

RUN npm install -g bun && bun install

COPY src ./src
COPY public ./public
COPY next.config.ts .
COPY tsconfig.json .

ENV NEXT_TELEMETRY_DISABLED 1

RUN echo "::> Running in development mode"

CMD bun run dev