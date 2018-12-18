FROM ubuntu:14.04

MAINTAINER Rashian Burns <r.burns@celmatix.com>

RUN apt-get update && apt-get install -y curl python gcc g++ build-essential nginx
RUN curl -sLO https://deb.nodesource.com/node_6.x/pool/main/n/nodejs/nodejs_6.9.4-1nodesource1~trusty1_amd64.deb && dpkg -i nodejs_6.9.4-1nodesource1~trusty1_amd64.deb

EXPOSE 80 3000 8888

CMD nginx && node /home/node/app/app.js
