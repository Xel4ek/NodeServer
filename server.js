'use strict';

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const index = fs.readFileSync('index.html', 'utf8');
    if (req.url === '/style.css') {
        const css = fs.readFileSync('style.css', 'utf8');
        res.end(css);
    }
    res.end(index);
});

server.listen(3000);