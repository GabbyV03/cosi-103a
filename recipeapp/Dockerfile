# Use the official Node.js image as base
FROM node:15

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies for both client and server
RUN npm install

# Copy the entire client and server codebase to the container
COPY . .

# Build the React client
RUN npm run build

# Accept the NUTRITION_API_KEY as a build argument
ARG NUTRITION_API_KEY

# Set the NUTRITION_API_KEY as an environment variable
ENV NUTRITION_API_KEY=$NUTRITION_API_KEY

# Expose port 8000 for the Express server
EXPOSE 8000

# Start the Express server when the container starts
CMD ["npm", "start"]