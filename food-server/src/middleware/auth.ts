import { NextFunction, Request, Response} from "express";
import MyError from "../utils/myError";
import jwt  from "jsonwebtoken";
import User from "../model/user";
import { IReq } from "../utils/interface";


export const authenticate = async (req:IReq, res:Response, next:NextFunction) => {
 try {
    if (!req.headers.authorization){
        throw new MyError("token baihgui baina, zaaval token ilgeene uu", 400);
    }

  const token =  req.headers.authorization.split(" ")[1];
  console.log("token =>", token);
  if (!token){
    throw new MyError("Ene uildgliig hiihiiin tuld nevtreh yostoi", 400);
  }

   const {id} = jwt.verify(token!, process.env.JWT_PRIVATE_KEY!) as {
    id: string;
   };
   const findUser = await User.findById(id);
   req.user = findUser;
 next();
 }catch (error) {
 next(error)
 }
};