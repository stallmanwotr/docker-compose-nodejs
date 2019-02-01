#!/bin/bash

export CONTAINER_NAME="test_mongo"

export PORT_MAP="-p 27017:27017"

export VOLUME_MAP="-v ${PWD}/data:/data/db"

#export RUN_OPTS="-d --name ${CONTAINER_NAME}"
export RUN_OPTS="--rm --name ${CONTAINER_NAME}"

#
# $ mkdir ~/data
#
# -d, --detach         Run container in background and print container ID
# -v, --volume list    Bind mount a volume

docker run ${RUN_OPTS} ${PORT_MAP} ${VOLUME_MAP} mongo

#
# Use 'docker exec' to run commands inside the container.
#
#   $ docker exec -it test_mongo bash
# 
# The MongoDB Server log is available through Docker's container log:
# 
#   $ docker logs test_mongo
#

