# Pull the Node image from Docker Hub
FROM node:14-slim

# Set working directory
WORKDIR /usr/app

# Copying only package.json
COPY package*.json ./

# Install Dependencies
RUN npm install -qyg nodemon@2.0.7
RUN npm install -qy

# Copy rest of the code to container
COPY . .

EXPOSE 8082

# Run the API on Nodemon
CMD ["npm", "run", "start-server"]