#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run prod

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:pizza-777/TheBattleOfWhales.git main:gh-pages

cd -