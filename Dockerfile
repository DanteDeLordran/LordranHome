FROM oven/bun:1.1.42-alpine AS build

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .


RUN bunx --bun vite build

FROM nginx:1.27-alpine-slim AS production

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]