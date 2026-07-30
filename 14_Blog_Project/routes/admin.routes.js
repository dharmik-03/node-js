import express from "express";
import userController from "../controller/user.Controller.js";
import auth from "../middlewares/auth.js";
import checkRole from "../middlewares/checkRole.js";
import upload from "../middlewares/upload.js";

const router = express.Router()

router.patch("/update/:id", auth, checkRole("admin"),upload.single("image"), userController.Update)
router.delete("/delete/:id", auth, checkRole("admin"), userController.deleteUser)

export default router