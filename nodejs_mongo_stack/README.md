## MongoDB / NGINX / NodeJS Stack Development Stack

For use of deploying nodeJS Stack via docker on linux.


## Components

- web - nginx proxy [ubuntu 14.04 / nginx ]
- app - nodejs application stack [ubunt 14.04 / nodejs 6.9.4]
- mongodb # database backend [ubuntu 14.04 / mongodb 3.2.2]


## Deploy Instructions

```console

ADD 'test.local' to /etc/hosts (nodejs test hostname)
sudo echo "127.0.0.1 test.local" >> /etc/hosts

git clone https://github.com/naztyroc/Nerdguys.git

cd Nerdguys/nodejs_mongo_stack

```

## Update docker-compose.yaml mongodb root username and password

```console
docker-compose build --pull

docker-compose up -d

docker ps -a
```

## Validate instance is running

```console
curl -I http://localhost:8888

HTTP/1.1 302 Found
Server: nginx/1.13.12
...
```
