# Stage 1: Build the SvelteKit project
FROM oven/bun:1.1.34 AS build

# Set the working directory
WORKDIR /app

# Copy the project files
COPY . .

# Install dependencies and build the project
RUN bun install && bun run build

# Stage 2: Serve the built files with Nginx
FROM nginx:alpine AS prod

# Copy the build output from the first stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
