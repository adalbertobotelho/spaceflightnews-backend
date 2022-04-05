FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY . .

RUN apk update && apk add bash

RUN yarn

RUN yarn prisma generate

EXPOSE 3000

CMD [ "yarn", "dev" ] 