# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
# Use npm install to generate lock file and install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application for production
# This creates a 'dist' folder with static files
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:1.25-alpine
# Copy the built static files from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# The default Nginx entrypoint will start the server
CMD ["nginx", "-g", "daemon off;"]

