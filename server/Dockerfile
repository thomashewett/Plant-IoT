# Pull the Node image from Docker Hub
FROM node:14-slim

# Copying only package.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy rest of the code to container
COPY . .

EXPOSE 8082

# Run the API on Nodemon
CMD ["npm", "run", "start-server"]