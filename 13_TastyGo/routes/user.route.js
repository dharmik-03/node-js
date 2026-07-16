import express from "express";
import userController from "../controller/user.Controller.js";
import validate from "../middlewares/validate.js";
import register from "../validation/UserSchema.js";
import auth from "../middlewares/auth.js";
import checkRole from "../middlewares/checkRole.js"

import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/add", validate(register), upload.single("image"), userController.addUser);
router.get("/GetAll", auth, checkRole("admin"), userController.getAll);

router.post("/login", userController.login);
router.post("/authLogin", auth, userController.authLogin)

router.post("/logout", auth, userController.logout)
router.post("/logoutAll", auth, userController.logoutAll)
router.delete("/delete", auth, userController.deleteUser);
router.patch("/update", auth, userController.update)

export default router;
