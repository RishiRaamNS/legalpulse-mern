import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    typeofuser:{
      type:String,
    }
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);

export default Client;
