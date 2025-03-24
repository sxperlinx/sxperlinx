#!/usr/bin/env bash

set -e

ENV=$1

if [ -z "$ENV" ]; then
  echo "Usage: $0 <env>"
  exit 1
fi

case $ENV in
  dev)
    echo "=> Running dev environment"

    docker network create web_network_dev || echo "=> Network already exists"
    docker compose -f compose.dev.yml build || echo "=> Build failed"
    docker compose -f compose.dev.yml up || echo "=> Up failed"
    ;;
  prod)
    echo "=> Running prod environment"

    docker network create web_network_prod || echo "=> Network already exists"
    docker compose -f compose.prod.yml build || echo "=> Build failed"
    docker compose -f compose.prod.yml up -d || echo "=> Up failed"
    ;;
  *)
    echo "=> Unknown environment"
    exit 1
    ;;
esac