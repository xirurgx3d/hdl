FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i npm@latest -g
RUN npm install npm-run-all

EXPOSE 4000

CMD [ "npm","run", "start" ]