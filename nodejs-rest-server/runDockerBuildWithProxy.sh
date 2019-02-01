#!/bin/bash
#
# The proxy needs to start with "http://" for npm (node package manager). E.g.:
#   export http_proxy="http://10.17.106.13:8080/"

# Arguments passed into the Dockerfile.
export BUILD_ARGS="--build-arg BUILD_PROXY=${http_proxy}"

# Name for the resulting built image.
export IMAGE_NAME="-t vms/nodejs_rest_server"

#docker build --no-cache ${IMAGE_NAME} ${BUILD_ARGS} .
docker build ${IMAGE_NAME} ${BUILD_ARGS} .
