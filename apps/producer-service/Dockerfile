FROM node:18-alpine

# Install tree
RUN apk add --no-cache tree

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY apps/producer-service ./apps/producer-service
COPY libs ./libs

# Build the application
RUN npm run build producer-service

# Keep container alive with tail -f /dev/null
# CMD tail -f /dev/null
CMD sh -c "tree /usr/src/app/dist && node dist/apps/producer-service/apps/producer-service/src/main"
