import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/certificates/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
dotenv.config();
const app = express();

const upload = multer({ storage: storage });
app.use(cors());
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

app.post("/lawyers/find", async (req, res) => {
  try {
    const searchvalue = await Lawyer.find()
      .or([
        {
          location: { $regex: req.body.value, $options: "i" },
        },
        {
          profession: { $regex: req.body.value, $options: "i" },
        },
        {
          name: { $regex: req.body.value, $options: "i" },
        },
      ])
      .limit(10);
    res.json(searchvalue);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

app.post("/lawyers/add", async (req, res) => {
  try {
    console.log(req.body);
    await Lawyer.create(req.body);
  } catch (e) {
    console.log(e);
  }
});

app.post("/api/upload", upload.single("cert"), async (req, res) => {
  try {
    console.log("success");
  } catch (e) {
    console.log(e);
  }
});
