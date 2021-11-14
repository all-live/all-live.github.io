#!/usr/bin/env sh

# set -e

# rm -rf node_modules/.cache

# next build

next export

touch out/.nojekyll

git add -f out/

git clone -b gh-pages https://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@github.com//all-live/AllLive-Landing/

cp -rf AllLive-Landing/.git ./.git
rm -rf AllLive-Landing

git add .
git commit -m "$*"

git push origin gh-pages
