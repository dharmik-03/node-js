import express from "express";
import userController from "../controller/userController.js";
import auth from "../middlewares/auth.js"

const router = express.Router()

router.post("/add", userController.Add);

router.post("/login", userController.loggin);
router.get("/authLogin", auth, userController.AuthLoggin);
router.get("/logout", auth, userController.logOut);
router.get("/logoutALL", auth, userController.logoutALL);
router.get("/GetAll", userController.GetAllUser);

router.get("/:id", userController.GetById);
router.delete("/:id", userController.deletes);

export default router;
