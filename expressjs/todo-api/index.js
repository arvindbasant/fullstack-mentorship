const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("todo app api is running");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    // from db
    if (username === 'arvind' && password === 'password') {
        return res.send({message: 'success'});
    }
    res.send({message: 'failed'});
});

app.listen(3001, () => {
    console.log('api running in port 3001');
});