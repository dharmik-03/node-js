import express from "express";
import userController from "../controller/user.Controller.js";
import validate from "../middlewares/validate.js";
import { register } from "../validation/UserSchema.js";
import { updateUserSchema } from "../validation/UserSchema.js";
import auth from "../middlewares/auth.js";
import checkRole from "../middlewares/checkRole.js";

import { profilePic } from "../middlewares/upload.js";
import { authLimiter } from "../middlewares/rateLimit.js";

const router = express.Router();

router.post(
  "/add",
  profilePic.single("image"),
  validate(register),
  userController.addUser,
);
router.get("/GetAll", auth, checkRole("admin"), userController.getAll);

router.post("/login", authLimiter, userController.login);
router.post("/authLogin", auth, userController.authLogin);

router.post("/logout", auth, userController.logout);
router.post("/logoutAll", auth, userController.logoutAll);
router.delete("/delete", auth, userController.deleteUser);
router.patch(
  "/update",
  auth,
  validate(updateUserSchema),
  profilePic.single("image"),
  userController.update,
);

export default router;
