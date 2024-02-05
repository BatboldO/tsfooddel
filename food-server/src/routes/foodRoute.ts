import {Router} from "express"
import { getAllFood, createFood,updateFood,deleteFood, getFood } from "../controller/foodController";

const router = Router();

router.route("/").get(getAllFood).post(createFood)

router
.route("/:foodId")
.get(getFood)
.put(updateFood)
.delete(deleteFood)


export default router;