import mongoose from "mongoose";

const lawyerSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    location: String,
    experience: Number,
    languages: Array,
    specialize: String,
    courts: Array,
    email: String,
    mobile: Number,
    enrolmentid: Number,
    profession: String,
    practiceareas: Array,
    about: String,
    rating: Number
  },
  { strict: false }
);

const Lawyer = mongoose.model("lawyers", lawyerSchema);

export default Lawyer;
