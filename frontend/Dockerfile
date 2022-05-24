FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
