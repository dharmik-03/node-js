import express from "express";
import userController from "../controller/user.Controller.js";
import auth from "../middlewares/auth.js";
import checkRole from "../middlewares/checkRole.js";
import adminController from "../controller/admin.Controller.js";

const router = express.Router()

router.patch("/update/:id", auth, checkRole("admin"), userController.update)
router.delete("/delete/:id", auth, checkRole("admin"), userController.deleteUser)
router.get("/getAll", auth, checkRole("admin"), adminController.getAll)

export default router