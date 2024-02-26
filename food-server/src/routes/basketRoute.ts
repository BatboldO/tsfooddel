import {Router} from "express"
import { getBasket, addBasket, deleteBasket, updateBasket} from "../controller/basketController";
import { IReq } from "../utils/interface";
import {authenticate} from "../middleware/auth"

const router = Router();
router.route("/").get(getBasket).post(addBasket, authenticate)

router
.route("/:basketId")
.put(updateBasket)
.delete(deleteBasket)


export default router;