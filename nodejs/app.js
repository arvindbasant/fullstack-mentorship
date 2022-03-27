const express = require("express"); // include this lib
const cookieParser = require("cookieParser");

const app = express();
const port = 3333;

app.use(cookieParser);

// creating your own middleware
function mycookieParser(req) {
    const c = req.cookies;
    //"name = arvind, ssid = 567y5757" -> {name: "arvind", ssid: 6786786}
    c.name
    c.ssid
}

app.get("path", (req, res) => { res.send("hello") });

app.get("/students/:studentId", (req, res) => {
    const studentId = req.params.studentId; // 101

    // based on student pull data from database -> {id: 101, name: 'arvind'}
    const data = {id: 101, name: 'arvind'}

    res.send(data);
});

app.listen(port, () => console.log("server started"));


// BROWSER MAKES A REQUEST -> REQ PAYLOAD + HEADERS ----- VALIDATE HEADER, VALIDATE REQ BODY, CHECK COOKIES, ->  SERVER RESPONSE WITH DATA