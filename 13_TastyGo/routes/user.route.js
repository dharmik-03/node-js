import express from "express";
import userController from "../controller/user.Controller.js";

const router = express.Router();

router.post("/add", userController.addUser);
router.get("/GetAll", userController.getAll);

router.get("/:id", userController.GetById);

export default router;
