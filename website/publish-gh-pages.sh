#!/bin/bash



if [ -z "$1" ]
then
    echo You must provide a GitHub username as argument...
    exit 1
else
    echo GitHub username: $1 
fi

GIT_USER=$1 \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  npm run publish-gh-pages
