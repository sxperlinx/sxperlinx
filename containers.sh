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

    docker network create web_network_development || echo "=> Network already exists"
    docker compose -f compose.dev.yml build || echo "=> Build failed"
    docker compose -f compose.dev.yml up || echo "=> Up failed"
    ;;
  prod)
    echo "=> Running prod environment"

    docker network create web_network_production || echo "=> Network already exists"
    docker compose -f compose.prod.yml build || echo "=> Build failed"
    docker compose -f compose.prod.yml up -d || echo "=> Up failed"
    ;;
  prod-multistage)
    echo "=> Running prod-multistage environment"

    docker network create web_network_multistage  || echo "=> Network already exists"
    docker compose -f compose.prod-multistage.yml build || echo "=> Build failed"
    docker compose -f compose.prod-multistage.yml up -d || echo "=> Up failed"
    ;;
  *)
    echo "=> Unknown environment"
    exit 1
    ;;
esac