# Using Image Node.js 20
FROM node:20

# TO-DO: DOUBLE CHECK THE WORKDIR PATH WHEN TESTING
WORKDIR /usr/src/app

# Copy the package.json, src, and public files to the container
COPY package*.json ./
COPY src/ ./src
COPY public/ ./public

# Install the dependencies and start react app on port 3000
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]