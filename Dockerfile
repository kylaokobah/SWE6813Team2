FROM node:16 as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]