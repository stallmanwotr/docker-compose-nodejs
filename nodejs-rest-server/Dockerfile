# Base image: The official latest LTS version of node.
FROM node:carbon

# Arguments: Passed with '--build-arg' and their defaults:
ARG BUILD_PROXY=$http_proxy
RUN echo "** BUILD_PROXY: $BUILD_PROXY"

# Create a directory in the container.
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies into node_modules.
RUN npm config set http-proxy $BUILD_PROXY
RUN npm config set https-proxy $BUILD_PROXY
RUN npm install

COPY .babelrc .eslintrc .eslintignore ./
COPY public ./public
COPY src ./src

# Sanity check:
RUN echo "** PWD: ${PWD}, LS: `ls -a1F`"

# Server port: This is configured in package.json, or can be overridden here:
EXPOSE 4005
CMD [ "npm", "run", "start-server", "--", "--mongoUrl=mongodb://mongo:27017" ]
#CMD [ "npm", "run", "start-server", "--", "--port=8099" ]

