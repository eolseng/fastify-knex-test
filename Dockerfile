FROM node:14.16.0-alpine
# Set the working directory
WORKDIR ./app
# Install dependencies in the container
COPY package*.json ./
RUN npm install
# Copy over the rest of the working directory
COPY . .
# Expose port 3000 and start the server in dev mode
EXPOSE 3000
CMD ["npm", "run", "dev"]