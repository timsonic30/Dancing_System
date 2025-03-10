const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 3030;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://wazine6513:Ab123456@erb.3et5k.mongodb.net/?retryWrites=true&w=majority&appName=ERB"
  )
  .then(() =>
    console.log("Pinged your deployment. You successfully connected to MongoDB")
  )
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res, next) => {
  //   console.log("I am here");
  res.send({ message: "Backend send back the data to you" });
});

app.get("/login", (req, res, next) => {
  //   console.log("I am here");
  res.send({ message: "Backend send back the data to you" });
});

app.get("/register", (req, res, next) => {
  const { phone, email, password } = req.body;
  console.log(phone, email, password);
  res.send({ message: "Backend send back the data to you" });
});

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
