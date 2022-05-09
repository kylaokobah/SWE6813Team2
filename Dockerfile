FROM node:16.11.25 as build

WORKDIR/ SWE6813TEAM2

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19
