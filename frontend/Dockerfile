FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 88

CMD ["nginx", "-g", "daemon off;"]
