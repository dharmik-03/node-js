import express from "express";
import userController from "../controller/user.controller.js";
import auth from "../middlewares/Auth.js";

const route = express.Router()

route.post("/add", userController.registerUser)
route.get("/allUser", userController.AllUser)
route.post("/login", userController.login)
route.post("/authlogin", auth, userController.authLogin)
route.post("/logout",auth,userController.logout)
route.post("/logoutAll",auth,userController.logoutAll)
route.delete("/delete", auth, userController.deleteUser)
route.patch("/update", auth, userController.update)

export default route
