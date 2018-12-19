#!/bin/bash

NVM_DIR="/root/.nvm"

. $NVM_DIR/nvm.sh

echo "Starting nginx..."
nginx

echo "Starting NodeJS App..."
node /home/node/app/app.js
