import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB successfully connected.");
  })
  .catch((err) => {
    console.log(err);
  });

import Lawyer from "./models/lawyer.model.js";
Lawyer();
app.listen(3001, () => {
  console.log("Server listening on Port 3000");
});

app.get("/lawyers", async (req, res) => {
  try {
    const lawyers = await Lawyer.find({});
    res.json(lawyers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
