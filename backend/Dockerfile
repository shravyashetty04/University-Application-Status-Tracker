FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port (matches the port the app listens on in index.js)
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
