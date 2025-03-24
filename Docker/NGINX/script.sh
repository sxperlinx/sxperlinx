#!/usr/bin/bash

git clone https://github.com/sxperlinx/sxperlinx/tree/main/Docker/NGINX.git

mkdir ngnix-server
cd nginx-server

cp ../sxperlinx/Docker/NGINX/{Dockerfile,index.html} .

rm -r ../sxperlinx

docker build -t nginx:latest .
docker run --name nginx -p 8080:80 -d nginx:latest
