const http = require("http");

const host = "127.0.0.1"; // "localhost"
const port = 3000;

http.createServer();

const server = http.createServer((req, res) => {
    const data = "Hello message from server";
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(data);
});

server.listen(port, host, () => {
    console.log(`server started at port ${port}`);
});