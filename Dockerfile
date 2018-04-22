FROM node:9.10

RUN mkdir /app/ && chown 1000:1000 /app/
USER 1000:1000
WORKDIR /app/

COPY package.json package-lock.json /app/
RUN npm install

COPY server.js /app/server.js
CMD ["/app/server.js"]
EXPOSE 8000
