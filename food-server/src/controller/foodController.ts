import {Request, Response, NextFunction} from "express"
 import Food from "../model/food"
import MyError from "../utils/myError";




export const createFood = async (req:Request, res:Response, next:NextFunction) => {
    try {
    const newFood = req.body;
    await Food.create(newFood);

    res.status(201).json({ message: "Food created successfully."})
    } catch (error){
        next(error);
    }
 };



//localhost:8080/food/123
 export const getFood = async (req:Request, res:Response , next:NextFunction) => {
    try {
        const { foodId } = req.params;
        const FoodId =  await Food.findById(Food)

       if (!FoodId){
        throw new MyError("{$FoodId} not found", 200)
       }

        res.status(200).json({ message: "Got FoodId ${FoodId}successfully."})
    } catch (error){
        next(error)
    }
 };


 export const getAllFood =  async (req:Request, res:Response , next:NextFunction) => {
    try {
        const Foodid = await Food.find().populate("category", "_id name") //Joining tables//
        res.status(201).json({ message: "Got all Food successfully."})
    } catch (error){
        next(error)
    }
 };


 export const updateFood=  async (req:Request, res:Response , next:NextFunction) => {
    try {
        const {FoodId} = req.params;
        const updateFood = req.body;
        const foodUpdate =  await Food.findByIdAndUpdate(Food, updateFood)
       
        if (!FoodId){
            throw new MyError("{$FoodId} not found", 200)
           }

        res.status(201).json({ message: "Food updated successfully."})
    } catch (error){
        next(error)
    }
 };


 export const deleteFood = async (req:Request, res:Response , next:NextFunction) => {
    try {
        const {FoodId} = req.params;
          const foodDel = await Food.findByIdAndDelete(Food);

          if (Food){
            throw new MyError("{$FoodId} not found", 200)
           }

        res.status(201).json({ message: "Food deleted successfully."})
    } catch (error){
        next(error);
    }
 };