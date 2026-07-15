import express from "express";
import userController from "../controller/user.Controller.js";
import validate from "../middlewares/validate.js";
import register from "../validation/UserSchema.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post("/add", validate(register), userController.addUser);
router.get("/GetAll",auth, userController.getAll);

router.post("/login", userController.login);

router.get("/:id", userController.GetById);
router.delete("/delete", auth, userController.deleteUser);

export default router;
