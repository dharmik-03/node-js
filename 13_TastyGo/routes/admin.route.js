import express from "express";
import userController from "../controller/user.Controller.js";
import auth from "../middlewares/auth.js";
import checkRole from "../middlewares/checkRole.js";

const router = express.Router()

router.patch("/update/:id", auth, checkRole("admin"), userController.update)
router.delete("/delete/:id", auth, checkRole("admin"), userController.deleteUser)

export default router