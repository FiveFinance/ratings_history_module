FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run db:setup

RUN npm run db:setup2

EXPOSE 3001

CMD [ "npm", "run", "start" ]
