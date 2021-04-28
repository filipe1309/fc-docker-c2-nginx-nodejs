# <p align="center">FC Docker - Nginx | Nodejs 🐋</p>

<p align="center">
<img src="https://img.shields.io/badge/nodejs-15.0-green" alt="NodeJS"/>
</p>

## 💬 About

This project was developed following [FullCycle's Docker Module - Challenge 2](https://portal.code.education/lms/#/180/163/110/conteudos?projeto=51&fase=249).

### Challenge 2

-   [x] Create a nginx image to use as a reverse-proxy to node.js app
-   [x] Create a nodejs image to register a person name into a mysql db person table
-   [x] Nodejs aapp should return `<h1>Full Cycle Rocks!</h1>` to Nginx + List of names previously registered
-   [x] Create a docker-compose that will run the services with `docker-compose up -d` on port `8080`
-   [x] Create a Gihub repo with the program & docker files

## :computer: Technologies

-   [Docker](https://www.docker.com/)
-   [Node.js](https://nodejs.org/en/)
-   [Nginx](https://www.nginx.com/)
-   [MySQL](https://www.mysql.com/)
-   [Node MySQL2](https://www.npmjs.com/package/mysql2)

## :scroll: Requirements

-   [Docker](https://www.docker.com/)

## :cd: Installation

```sh
git clone git@github.com:filipe1309/fc-fc-docker-c2.git
```

```sh
cd fc-fc-docker-c2
```

### Create docker network

```sh
docker network create fc-docker-c2
```

## :runner: Running

**Up app**

```sh
docker-compose up -d
```

> docker-compose down to remove containers

Access http://localhost:8080/

## License

[MIT](https://choosealicense.com/licenses/mit/)

## About Me

<p align="center">
    <a style="font-weight: bold" href="https://www.linkedin.com/in/filipe1309/">
    <img style="border-radius:50%" width="100px; "src="https://avatars.githubusercontent.com/u/2081014?s=60&v=4"/>
    </a>
</p>

---

<p align="center">
Done with ♥ by <a style="font-weight: bold" href="https://www.linkedin.com/in/filipe1309/">Filipe Leuch Bonfim</a> 🖖

</p>
