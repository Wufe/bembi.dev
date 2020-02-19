#!/bin/zsh

rm -rf release && true
mkdir release
rm -rf dist
yarn build:prod
mv ./main ./release/bembi.dev
cp .env.production ./release/.env