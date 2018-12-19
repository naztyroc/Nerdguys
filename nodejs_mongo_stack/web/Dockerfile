FROM ubuntu:14.04

MAINTAINER Rashian Burns <rashian@wan-scape.com>


RUN apt-get update && apt-get install -y curl nginx npm build-essential libssl-dev
RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 6.9.3
RUN . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
RUN cd /home/node/app \
    && npm config set strict-ssl false\
    && npm i mongodb --save \
    && npm i express --save

COPY app.js /home/node/app/app.js
COPY startup.sh /bin/startup.sh

RUN chmod 755 /bin/startup.sh

EXPOSE 80 3000

ENTRYPOINT [ "bash", "-c", "/bin/startup.sh"]
