#!/usr/bin/env sh

set -e

rm -rf node_modules/.cache
rm -rf .next

yarn build

next export

touch out/.nojekyll

git add -f out/
git checkout -b temp-deploy-gh-pages
git commit -m "$*"
git subtree split --prefix out -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
git checkout main
git branch -D temp-deploy-gh-pages
