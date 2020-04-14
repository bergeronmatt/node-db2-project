//intialize the server objects
const express = require('express');


const server = express();
const PORT = process.env.PORT || 4000

server.use(express.json());

server.listen(PORT, () => {
    console.log(`\n===API RUNNING ON http://localhost:${PORT}===\n`)
});