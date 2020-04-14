//intialize the server objects
const server = require('./api/server');

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`\n===API RUNNING ON http://localhost:${PORT}===\n`)
});