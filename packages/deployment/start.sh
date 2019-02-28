#!/usr/bin/env bash

tag=${1:-"latest"}

docker run -p 3000:3000 -it majik:$tag /bin/sh -c "node /index.js $(whoami) $(date '+%H:%M') $(uptime | cut -d' ' -f5 | tr -d ',')"