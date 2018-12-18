FROM ubuntu:14.04

MAINTAINER Rashian Burns <rashian@wan-scape.com>

RUN apt-get update && apt-get install -y curl nginx npm build-essential libssl-dev
RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 6.9.3
RUN . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm ls-remote
RUN npm config set strict-ssl false\
    && npm i mongodb --save \
    && npm i express --save

COPY nodejs.conf /etc/nginx/conf.d/nodejs.conf

EXPOSE 80 3000 8888

CMD sleep 10000

CMD nginx && node /home/node/app/app.js
