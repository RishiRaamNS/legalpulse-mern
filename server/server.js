const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://rishi:rishi0504@cluster0.etsd55q.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection is successful");
  })
  .catch(() => {
    console.log("Error connecting the database");
  });

// const lawyersinfoSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     experience: String,
//     aboutme: String,
//     specialize: String,
//     location: String,
//     languages: [{ 0: String, 1: String }],
//     contactinfo: [{ mobile: Number, email: String }]
// })

// const Laywer = mongoose.model("Lawyer", lawyersinfoSchema);
