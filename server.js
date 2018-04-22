#!/usr/bin/env node
const http = require('http');
const redis = require('redis');

const client = redis.createClient({
    host: 'redis',
    port: 6379,
});
const server = http.createServer((req, res) => {
    client.incr('nb_requests', (err, val) => {
        if (err) {
            res.writeHead(500);
            res.end(err);
            return;
        }

        res.writeHead(200);
        res.end(`# of requests: ${val}`);
    });
});
server.listen(8000);
