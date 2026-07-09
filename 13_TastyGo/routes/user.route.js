import express from "express";
import userController from "../controller/user.Controller.js";
import validate from "../middlewares/validate.js";
import register from "../validation/UserSchema.js";

const router = express.Router();

router.post("/add", validate(register), userController.addUser);
router.get("/GetAll", userController.getAll);

router.get("/login", userController.login);

router.get("/:id", userController.GetById);
router.delete("/:id", userController.deleteUser);

export default router;
