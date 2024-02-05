import cloudinary from "../utils/cloudinary";
import {Request, Response, NextFunction} from "express"
import multer from "multer"
// import next from "next"


export const uploadFile = async (req:Request, Res:Response, next:NextFunction) => {
 try {
    console.log("File", req.file);
    const result = await cloudinary.uploader.upload(req.file?.path!);
    Res.send("OK =>" + result.secure_url);
 } catch  (error){
      next(error);
 }
}