#!/bin/sh
#
# "docker-compose up"
#   https://docs.docker.com/compose/reference/up/
#   https://docs.docker.com/compose/reference/overview/

# https://stackoverflow.com/questions/39988844/docker-compose-up-vs-docker-compose-up-build-vs-docker-compose-build-no-cach
# "
# The following only builds the images, does not start the containers:
# 
#     docker-compose build
# 
# The following builds the images if the images _do not exist_ and starts the containers:
# 
#     docker-compose up
# 
# If you add the --build option, it is forced to build the images even when not needed:
# 
#     docker-compose up --build
# 
# The following skips the image build process:
# 
#     docker-compose up --no-build
# "

#
# Project name: Added as a prefix to container names.
#
export PROJECT_NAME="--project-name vms"

#docker-compose $PROJECT_NAME up

docker-compose $PROJECT_NAME up --build


