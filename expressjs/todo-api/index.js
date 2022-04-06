const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
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

app.get("/todo/user/:userId", async (req, res) => {
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

app.get("/todo/:todoId", async (req, res) => {
  try {
    await client.connect();
    const todosCollectionRef = client.db("todo").collection("todos");
    const todo = await todosCollectionRef
      .find(ObjectId(req.params.todoId))
      .toArray();
    if (todo) return res.send(todo[0]);
    else return res.send({});
  } catch (error) {
  } finally {
    await client.close();
  }
});

app.post("/todo", async (req, res) => {
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

app.put("/todo", async (req, res) => {
  try {
    const body = req.body;
    const _id = body.todoId;
    delete body.todoId;

    await client.connect();
    const todosCollectionRef = client.db("todo").collection("todos");

    const todo = await todosCollectionRef.findOneAndUpdate(
      { _id: ObjectId(_id) },
      { $set: body },
      { returnDocument: "after" }
    );

    if (todo) return res.send(todo);
    else return res.send({});
  } catch (error) {
  } finally {
    await client.close();
  }
});

app.delete("/todo/:todoId", async (req, res) => {
  try {
    await client.connect();
    const todosCollectionRef = client.db("todo").collection("todos");
    const deletedTodo = await todosCollectionRef.deleteOne({
      _id: ObjectId(req.params.todoId),
    });

    res.send(deletedTodo);
  } catch (error) {}
});

app.listen(3001, () => {
  console.log("api running in port 3001");
});
