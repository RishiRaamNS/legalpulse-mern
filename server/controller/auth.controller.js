
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import Client from "../models/client.model.js";
import FreeSh from "../models/freelancer.model.js";


export const clientsignup = async (req, res, next) => {
  const { email, password } = req.body;

  const hashedPassword =bcryptjs.hashSync(password, 10);

  const newClient = new Client({ email, password: hashedPassword });

  try {
    await newClient.save();
    res.status(201).json({ message: "Client created successfully"});
  } catch (error) {
    next(error);
  }
};



export const freelancesignup = async (req, res, next) => {
  const { name,email,password,state} = req.body;

  const hashedPassword =bcryptjs.hashSync(password,10);

  const newFreeSh = new FreeSh({ name,email, password: hashedPassword ,state});

  try {
    await newFreeSh.save();
    res.status(201).json({ message: "FreeLancer created successfully" });
  } catch (error) {
    next(error);
  }
};


export const gensignin= async (req,res,next)=>{
  const { email,password,typeofuser} = req.body;
  try{
    
  
  
  
  if (typeofuser === "Client") {
    const validClient = await Client.findOne({ email: email });
    const validPassword = bcryptjs.compareSync(password, validClient.password);
    if (!validPassword) return next(errorHandler(402, "invalid credentials"));
    const token = jwt.sign({ id: validClient._id }, process.env.JWT_SECRET);

    const expirydate = new Date(Date.now() + 3600000);
    const { password: hashedPassword, ...restofitems } = validClient._doc;

    res
      .cookie("access_token", token, { httpOnly: true, expires: expirydate })
      .status(200)
      .json(restofitems);

    console.log("the user is a client")
  } 
  
  else if (typeofuser === "Provider") {
    const validFree = await FreeSh.findOne({ email: email });
    const validPassword = bcryptjs.compareSync(password, validFree.password);
    if (!validPassword) return next(errorHandler(402, "invalid credentials"));
    const token = jwt.sign({ id: validFree._id }, process.env.JWT_SECRET);

    const expirydate = new Date(Date.now() + 3600000);
    const {
      password: hashedPassword,

      ...restofitems
    } = validFree._doc;

    res
      .cookie("access_token", token, { httpOnly: true, expires: expirydate })
      .status(200)
      .json(restofitems);
      console.log("the user is a freelancer")
  } else {
    return next(errorHandler(401, "User not found"));
  }

  
  }

  catch(error){

    next(error)

  }
  
    
 
  
}


