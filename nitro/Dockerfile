# Start your image with a node base image as build
FROM node:20-alpine as BUILD

# The /build directory should act as the main application directory
WORKDIR /build

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install node packages
RUN npm install 

# Copy local directories to the current local directory of our docker image (/build)
COPY ./ ./

# Build the app
RUN npm run build 
    
# Start your image with a node base image
FROM node:20-alpine

WORKDIR /app

EXPOSE 3000

COPY --from=BUILD /build/.output /app

CMD ["node", "./server/index.mjs"]