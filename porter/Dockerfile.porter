FROM node:18-alpine AS base

RUN corepack enable pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM node:18-alpine AS dev
RUN npm i -g pnpm
EXPOSE 8080
WORKDIR /app
COPY . .

CMD ["pnpm", "run", "watch"]
