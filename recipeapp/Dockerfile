# Using Image Node.js 16 for long term support (LTS)
FROM node:16

# TO-DO: DOUBLE CHECK THE WORKDIR PATH WHEN TESTING
WORKDIR /usr/src/app

# Copy the package.json, src, and public files to the container
COPY recipeapp/package*.json ./
COPY recipeapp/src/ ./src
COPY recipeapp/public/ ./public

# Install the dependencies and start react app on port 3000
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]