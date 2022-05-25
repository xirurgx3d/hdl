FROM node:alpine

RUN mkdir -p /etc/app/cx
ENV PORT 3000

WORKDIR /etc/app/cx

COPY package.json /etc/app/cx
COPY yarn.lock /etc/app/cx

RUN yarn install --production
RUN yarn add @babel/core

COPY . /etc/app/cx

RUN yarn build


CMD [ "yarn", "start" ]