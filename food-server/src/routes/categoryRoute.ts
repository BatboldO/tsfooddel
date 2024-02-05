import {Router} from "express"
import { getAllCategory, createCategory,updateCategory,deleteCategory, getCategory } from "../controller/categoryController";

const router = Router();

router.route("/").get(getAllCategory).post(createCategory)

router
.route("/categoryId")
.get(getCategory)
.put(updateCategory)
.delete(deleteCategory)


export default router;