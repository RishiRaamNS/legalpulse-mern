import mongoose from "mongoose";

const lawyerSchema = new mongoose.Schema(
  {
    name: String,
  },
  { strict: false }
);

const Lawyer = mongoose.model("lawyers", lawyerSchema);

export default Lawyer;
