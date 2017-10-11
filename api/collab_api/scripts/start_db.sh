#!/bin/bash

CONTAINER="mongodb"
YAML_FILE="../../../containers/"

pushd $YAML_FILE
docker-compose up -d $CONTAINER
popd
