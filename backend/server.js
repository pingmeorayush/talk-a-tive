const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  console.log(chats);
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(chats);
  const { params } = req;
  const chat = chats?.find((item) => item?._id === params.id);
  res.send(chat);
});

const PORT = process.env.PORT;

app.listen(5001, console.log("server started ha bro at 5001"));
