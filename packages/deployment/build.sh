#!/usr/bin/env bash

tag=${1:-"latest"}

# Extra step because docker wants files that are 'added' in the Dockerfile to exist within build dir
# Force coppies file over
yes | cp -i ../../index.js .

docker build -t majik:$tag "."