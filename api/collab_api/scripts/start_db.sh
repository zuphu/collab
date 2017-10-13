#!/bin/bash

CONTAINER="mongodb"
YAML_FILE="../../../containers/"

cd $YAML_FILE
docker-compose up -d $CONTAINER
