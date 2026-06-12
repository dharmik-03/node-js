import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.post("/add", userController.Add);

router.get("/GetAllUser", userController.GetAllUser);

router.post("/login", userController.loggin);

export default router;
