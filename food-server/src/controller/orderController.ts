import { NextFunction } from "express";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";

export const createOrder = (req:IReq, res: Response, next:NextFunction) => {
    try { 
           const newOrder = {
            userId: ""
           };
    } catch ( error ) {
        next(error);
    }
}