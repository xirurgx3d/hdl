FROM node:alpine
# node:16 have problem sass



# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
#COPY yarn.lock /usr/src/app/

RUN npm install
# RUN yarn install --production
# RUN yarn add @babel/core

# Copying source files
COPY . /usr/src/app

RUN npm run build
# RUN yarn build


CMD [ "npm","run" ,"start" ]