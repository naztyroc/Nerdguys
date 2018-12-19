## MongoDB / NGINX / NodeJS Stack Development Stack

For use of deploying nodeJS Stack via docker on linux.


## Components

- web - nginx proxy [ubuntu 14.04 / nginx 1.4.6]
- app - nodejs application stack [ubunt 14.04 / nodejs 6.9.4]
- mongodb # database backend [ubuntu 14.04 / mongodb 3.2.2]

## Update docker-compose.yaml mongodb root username and password
MONGO_INITDB_ROOT_USERNAME:
MONGO_INITDB_ROOT_PASSWORD:

## Update docker-compose.yaml folder paths for db_data, nodejs, and nginx_conf

ex.
device: /Users/<username>/Nerdguys/nodejs_mongo_stack/db_data


## Deploy Instructions

```console

ADD 'test.local' to /etc/hosts (nodejs test hostname)
sudo echo '127.0.0.1 test.local' | sudo tee -a /etc/hosts

cd ~/

git clone https://github.com/naztyroc/Nerdguys.git

cd Nerdguys/nodejs_mongo_stack

docker-compose build --pull

docker-compose up -d

docker ps -a

```

## Validate instance is running

```console

docker logs `docker ps -a | grep web | awk '{print $1}'`
Example app listening on port 3000!
MongoDB connection successful

curl http://test.local:8888
Hello World!

...
```
