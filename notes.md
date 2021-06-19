```sh
docker build -t devontherun/fc-docker-c2-node .
docker run --rm -d --network fc-docker-c2 --name fc-docker-c2-node -v $(pwd):/usr/src/app devontherun/fc-docker-c2-node

docker build -t devontherun/fc-docker-c2-mysql .
```
https://betterprogramming.pub/customize-your-mysql-database-in-docker-723ffd59d8fb
```sh
docker run --rm -d --network fc-docker-c2 -p 3306:3306 --name fc-docker-c2-mysql -e MYSQL_ROOT_PASSWORD=root devontherun/fc-docker-c2-mysql
docker exec -it fc-docker-c2-mysql bash
mysql -uroot -p
show databases;
use fullcycle;
show tables;
show columns from modules;
select \* from modules;

docker network create fc-docker-c2
```

Fix mysql 8 auth on mysql npm package:
https://www.npmjs.com/package/mysql2
```sh
npm un mysql && npm i mysql2

docker build -t devontherun/fc-docker-c2-nginx .

docker push devontherun/fc-docker-c2-mysql:latest
docker push devontherun/fc-docker-c2-node:latest
docker push devontherun/fc-docker-c2-nginx:latest

show variables like 'character%';
```
## --init intead of -d
```sh
$ docker run --rm --init -it --network fc-docker-c2 --name fc-docker-c2-node -v $(pwd):/usr/src/app devontherun/fc-docker-c2-node

docker-compose up
docker-compose up -d
docker-compose up pfa-mysql
docker-compose ps
docker-compose logs
docker-compose logs pfa-node
docker-compose stop
docker-compose down

docker scan IMAGE_NAME
docker scan nginx
```
