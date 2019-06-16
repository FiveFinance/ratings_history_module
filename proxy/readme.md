# Proxy for two microservices

* Access the docker image [here]()
* These microserives are part of a larger single page web app. Check out the app proxy on Github here and link to DockerHub here

## Usage

**Set up with Docker**

* Create a docker-compose.yml file in the root directory
```yaml
version: '3.2'

services:

  history: 
    environment:
      - NODE_ENV=production

    build: history/

    depends_on:
      - 'database'

    ports:
      - '3011:3011'
    
  ratings: 
    environment:
      - NODE_ENV=production
      - FEC_HOST=http://localhost
      - FEC_DB=mongodb://172.19.0.2:27017

    build: ratings/

    depends_on:
      - 'database'

    ports:
      - '3001:3001'

  proxy: 
    environment:
      - NODE_ENV=production

    build: proxy/

    depends_on:
      - 'database'
      - 'ratings'
      - 'history'

    ports:
      - '80:80'

  database:

    image: mongo:latest
```

* run `docker-compose up -d` to start the app

**Set up with NPM**

* Locate the IPv4 address from `docker network ls` and `docker inspect ratings_history_module_default1`

* Adjust the `${HOST}` on each microservices using `docker exec -it ratings ~/../../bin/sh`,
`docker exec -it history ~/../../bin/sh`, and `vi database-mongod/index.js`
  * `mongodb://172.19.0.2:27017`

* Re-seed the database with `docker exec -it ratings_history_module_ratings_1 ~/../../bin/sh`, `npm run db:setup` or `docker exec -it ratings_history_module_history_1 ~/../../bin/sh`, `npm run db:setup2`, `npm run db:setup2`, `npm run db:setup2` (duplicated for three example purchase records)

* Re-compile each microservice with `npm run compile`

* Exit and restart the containers for these services using `docker ps` to get the CONTAINER IDs, and `docker restart <CONTAINER ID> <CONTAINER ID>`

* Adjust the `${HOST}` at the proxy container api endpoints server api endpoints using `docker exec -it ratings_history_module_proxy_1 ~/../../bin/sh`

* Restart the proxy container with `docker restart ratings_history_module_proxy_1`

Note: there are 100 company profiles in this app. Change the url parameter to navigate between company profiles. Example page: http://localhost/stocks/MSFT

## Requirements

* Using node alpine for a more lightweight build
* For modifying containers from other microservices:
```sh
apk -U add vim
```

## Development
- Client
  - Frontend designed with [React](https://reactjs.org/)
- Server
  - App served via an [Express](https://expressjs.com/) server
- Database
  - Company profile data stored in a [Mongo](https://www.mongodb.com/) database, accessed via [Mongoose](https://mongoosejs.com/)
- Testing
  - Unit tests written in [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/)
  - Network request tests implemented with [supertest](https://www.npmjs.com/package/supertest)
  - Continuous integration set up with [CircleCI](https://circleci.com/)
  - `npm run test` to execute tests
- Container
  - Containerized with [Docker](https://www.docker.com/)
- Hosting
  - Hosted on [Amazon EC2](https://aws.amazon.com/ec2/) and [Amazon S3](https://aws.amazon.com/s3/)

## Installing Dependencies

From within the root directory:
```sh
npm install -g webpack
npm install -g v
```
