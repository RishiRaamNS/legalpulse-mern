import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import authRoutes from './routes/auth.route.js'
dotenv.config();
const app = express();

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(express.json());
app.use(allowCrossDomain);
app.use("/server/auth", authRoutes);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB successfully connected.");
  })
  .catch((err) => {
    console.log(err);
  });



import Lawyer from "./models/lawyer.model.js";
import Client from "./models/client.model.js";
import FreeSh from "./models/freelancer.model.js";
Lawyer();

Client();
FreeSh();


app.listen(3005, () => {
  console.log("Server listening on Port 3000");
});






app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

