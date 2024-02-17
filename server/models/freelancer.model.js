import mongoose from "mongoose";

const freelancerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    typeofuser:{
      type:String,
    }
  },
  { timestamps: true }
);

const FreeSh = mongoose.model("FreeSh", freelancerSchema);

export default FreeSh;
