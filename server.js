const PORT = process.env.PORT || 8001;
const http = require("http");
const app = require('./app');
const httpServer = http.createServer(app);

httpServer.listen(PORT);
console.log(`Listening on port ${PORT} ...`);

