import { Request, Response } from "express";
import User from "../model/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signup = async (req: Request, res:Response) => {
    
    try {
    const newUser = req.body;
    const user = await User.create(newUser);
    res
       .status(201)
       .json({ message: "added new user", });
    } catch (error) {
        res 
           .status(400)
           .json({ message: "Failed to add new user", error})
 }
};

export const login = async (req: Request, res:Response) => {
    
    try {
    const {email, password} = req.body;
    const user = await User.findOne({email}).select("+password")

    if(!user){
      return res 
      .status(400)
      .json({ message: `${email}-User does not exist`,})
    }

      const isValid = await bcrypt.compare(password, user.password)

      if (!isValid) { 
         return res 
         .status(400)
         .json({ message: "incorrect email or password",})
       }
      

       const token = jwt.sign({
         id: user.id,
      },
       process.env.JWT_KEY as string, {expiresIn:process.env.JWT_EXPIRES_IN});

   //   console.log("User", user)
    res
       .status(201)
       .json({ message: "Found user", token});
    } catch (error) {
        res 
           .status(400)
           .json({ message: "Failed to find user", error})
 }
};

