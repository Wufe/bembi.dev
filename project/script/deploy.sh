#!/bin/zsh

docker rm -f bembi.dev
docker build -t kesshin/bembi.dev:latest -f docker/Dockerfile .
docker run -d --name bembi.dev -p 127.0.0.1:5432:2345 -w /app kesshin/bembi.dev:latest /app/bembi.dev

# docker run -it --rm --name bembi.dev -p 127.0.0.1:5432:2345 -w /app kesshin/bembi.dev:latest /app/bembi.dev