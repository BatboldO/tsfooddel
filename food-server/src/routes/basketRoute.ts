import {Router} from "express"
import { getFromBasketByUser, addToBasketByUserId, deleteFromBasketByUser, updateBasketByUserId} from "../controller/basketController";
import { IReq } from "../utils/interface";
import {authenticate} from "../middleware/auth"

const router = Router();
router.route("/")
.get(getFromBasketByUser)
.post(addToBasketByUserId, authenticate)



router.route("/:foodId")
.delete(authenticate, deleteFromBasketByUser)
.put(authenticate, updateBasketByUserId);

export default router;