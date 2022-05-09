FROM node:16 as build

WORKDIR /usr/src/app

COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build


EXPOSE 8080
CMD [ "node", "index.js" ]