#!/bin/bash

FILTER="bitnami/mongodb"
MONGNO_DB_CONTAINER=`docker ps | grep $FILTER | awk '{print $1}'`

if [ -z "{$MONGO_DB_CONTAINER}" ]; then
	echo $?
	echo 'Unable to locate docker container'
	exit 1
fi

docker exec -it $MONGO_DB_CONTAINER /bin/bash
