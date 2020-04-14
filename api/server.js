const express = require('express');

const PostRouter = require('../posts/post-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars', PostRouter);

//sanity test

server.get('/', (req, res) => {
    res.status(200).json({api: 'launched'});
});

module.exports = server;