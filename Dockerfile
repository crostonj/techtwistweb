# Stage 1: Build React app (optional if prebuilt)
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:stable-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add your custom nginx config
COPY nginx.conf /etc/nginx/conf.d

# Copy built assets
COPY --from=build /app/build /usr/share/nginx/html

# Expose port and start server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
