FROM nginx:latest

COPY default.conf /etc/nginx/conf.d/default.conf
COPY index.html /app/index.html