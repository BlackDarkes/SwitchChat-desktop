# Сборка
FROM node:24-alpine as build

RUN corepack enable

WORKDIR /app

COPY package* pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build


# Запуск
FROM node:24-alpine as run
