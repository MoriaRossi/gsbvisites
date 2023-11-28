#!/bin/bash

CONTAINER_NAME="gsbvisites-pg"
POSTGRES_PASSWORD="gsbvisites"
POSTGRES_DB="gsbvisites-db"  # Specify the name of your PostgreSQL database
POSTGRES_USER="postgres"  # Specify the name of your PostgreSQL user
POSTGRES_VERSION="16.1"  # Specify the PostgreSQL version you want to use
INIT_SCRIPT="./create_database.sql"

# Stop and remove the existing container if it exists
docker stop $CONTAINER_NAME &> /dev/null
docker rm $CONTAINER_NAME &> /dev/null

# Run the new container with the initialization script
docker run --rm --name $CONTAINER_NAME \
  -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
  -e POSTGRES_DB=$POSTGRES_DB \
  -e POSTGRES_USER=$POSTGRES_USER \
  -p 5432:5432 \
  -v $INIT_SCRIPT:/docker-entrypoint-initdb.d/init.sql \
  postgres:$POSTGRES_VERSION

# Check for errors
if [ $? -ne 0 ]; then
  echo "Error starting PostgreSQL container"
  exit 1
fi

echo "PostgreSQL container (version $POSTGRES_VERSION) started with initialization script."
