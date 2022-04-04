const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://admin:admin@cluster0.hhgl8.mongodb.net/todo?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const app = express();
app.use(cors());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("todo app api is running");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    await client.connect();
    const collection = client.db("todo").collection("user");

    const user = await collection.findOne({
      userId: username,
      password: password,
    });
    if (user) {
      console.log({ user });
      return res.send({ message: "success", user });
    } else {
      return res.send({ message: "failed" });
    }
  } catch (error) {
    console.log({ error });
  } finally {
    await client.close();
  }
});

// get all todos by userId
app.get("/todos/user/:userId", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("todo").collection("todos");

    const todos = await collection
      .find({
        userId: req.params.userId,
      })
      .toArray();
    if (todos) {
      return res.send(todos);
    } else {
      return res.send([]);
    }
  } catch (error) {
    console.log({ error });
  } finally {
    await client.close();
  }
});

// task create a post endpoint for creating new todos
app.post("/todos", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("todo").collection("todos");

    const newTodo = await collection.insertOne(req.body);
    if (newTodo) {
      return res.send(newTodo);
    } else {
      return res.send([]);
    }
  } catch (error) {
    console.log({ error });
  } finally {
    await client.close();
  }
});

app.listen(3001, () => {
  console.log("api running in port 3001");
});
