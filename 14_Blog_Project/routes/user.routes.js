import express from "express"
import userController from "../controller/user.controller.js"
import upload from "../middlewares/upload.js"
import auth from "../middlewares/auth.js"
import validate from "../middlewares/validate.js"
import { registerSchema, updateUserSchema } from "../validation/userSchema.js"
import checkRole from "../middlewares/checkRole.js"

const route = express.Router()

route.post(
    "/add",
    upload.single("image"),
    validate(registerSchema),
    userController.Add
);
route.get("/getAll", auth, checkRole("admin"),userController.getAll)
route.post("/login", userController.login)
route.post("/authLogin", auth, userController.authLogin)
route.post("/logOut", auth, userController.logOut)
route.post("/logOutAll", auth, userController.logOutAll)
route.patch("/update", auth, upload.single("image"),validate(updateUserSchema), userController.Update)
route.delete("/delete", auth, userController.deleteUser)

export default route