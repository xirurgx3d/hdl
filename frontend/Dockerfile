FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install --force
COPY . .
RUN npm run start
EXPOSE 5000

