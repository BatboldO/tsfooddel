import { Router } from "express";
import { getUsers } from "../controller/userControllerr";

const router = Router();

router.route("/").get(getUsers);

export default router;