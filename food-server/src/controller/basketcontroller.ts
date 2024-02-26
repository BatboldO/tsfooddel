import { NextFunction, Request, Response } from "express";
import Basket from "../model/basket"
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";


export const addBasket = async (
    req: Request,
    res: Response,
    next:NextFunction
) => {
    try {
  console.log("User", req.params);
  console.log("Body", req.body);

    const newBasket = req.body;
    await  Basket.create(newBasket);
    res.status(201).json({ message: "Basket created successfully."})
    } catch (error){
        next(error);
    }
 };

 export const getBasket = async (
    req: Request,
    res: Response,
    next:NextFunction
 ) => {
    try {
        const { basketId } = req.params;
        const BasketId =  await Basket.findById(Basket)

       if (!BasketId){
        throw new MyError("{$BasketId} not found", 200)
       }

        res.status(200).json({ message: "Got BasketId ${BasketId}successfully."})
    } catch (error){
        next(error)
    }
 };

 export const deleteBasket = async (req:Request, res:Response , next:NextFunction) => {
    try {
        const {BasketId} = req.params;
          const deleteBasket = await Basket.findByIdAndDelete(Basket);

          if (!Basket){
            throw new MyError("{$BasketId} not found", 200)
           }

        res.status(201).json({ message: "Basket deleted successfully."})
    } catch (error){
        next(error);
    }
 };


 export const updateBasket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {BasketId} = req.params;
        const updateBasket = await Basket.findByIdAndUpdate(Basket);
        
        if (!Basket) {
            throw new MyError ("{$BasketId} not found", 200)
        }
        res.status(201).json({message:"Basket updated successfully"})
     } catch(error){
            next(error);
        }
    };
 