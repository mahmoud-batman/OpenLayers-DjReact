# official node.js runtime for Docker
FROM node:12

# Create and set the directory for this container
WORKDIR /app/frontend/

# Install Application dependencies
COPY package.json yarn.lock /app/frontend/

# don't create package-lock.json file
RUN npm config set package-lock false

# install packages
RUN yarn install --no-optional

# Copy over the rest of the project
COPY . /app/frontend/

# Set the default port for the container
EXPOSE 3000

# Set the default command for the container
CMD yarn start