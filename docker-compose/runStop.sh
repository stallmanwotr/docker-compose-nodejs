#!/bin/bash

#
# Stop a single container.
#

export PROJECT_NAME="--project-name vms"

export CONTAINER_NAME="nodejs_rest_server"

docker-compose $PROJECT_NAME stop $CONTAINER_NAME

