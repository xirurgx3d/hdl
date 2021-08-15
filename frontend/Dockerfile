FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
