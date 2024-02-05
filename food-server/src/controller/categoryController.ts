import {Request, Response, NextFunction} from "express"
 import Category from "../model/category"
import MyError from "../utils/myError";

 export const createCategory = async (req:Request, res:Response, next:NextFunction) => {
    try {
    const newCategory = req.body;
    await Category.create(newCategory);
    res.status(201).json({ message: "Category created successfully."})
    } catch (error){
        next(error);
    }
 };

 export const getCategory = async (req:Request, res:Response , next:NextFunction) => {
    try {
        const { categoryId } = req.params;
        const findCategory =  await Category.findById(categoryId)

       if (!categoryId){
        throw new MyError("{$categoryId} not found", 200)
       }

        res.status(200).json({ message: "Got CategoryId ${categoryId}successfully."})
    } catch (error){
        next(error)
    }
 };

 export const getAllCategory =  async (req:Request, res:Response , next:NextFunction) => {
    try {
        const { categoryID } = req.params;
        const Categories = await Category.find()
        res.status(201).json({ message: "Got all categories successfully."})
    } catch (error){
        next(error)
    }
 };

 export const updateCategory =  async (req:Request, res:Response , next:NextFunction) => {
    try {
        const {categoryId} = req.params;
        const updateCategory = req.body;
        const category =  await Category.findByIdAndUpdate(categoryId, updateCategory)
       
        if (!categoryId){
            throw new MyError("{$categoryId} not found", 200)
           }

        res.status(201).json({ message: "category updated successfully."})
    } catch (error){
        next(error)
    }
 };

 export const deleteCategory = async (req:Request, res:Response , next:NextFunction) => {
    try {
        const {categoryId} = req.params;
          const category = await Category.findByIdAndDelete(categoryId);

          if (!categoryId){
            throw new MyError("{$categoryId} not found", 200)
           }

        res.status(201).json({ message: "category deleted successfully."})
    } catch (error){
        next(error);
    }
 };