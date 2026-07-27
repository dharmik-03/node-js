import express from "express"
import userController from "../controller/user.controller.js"
import upload from "../middlewares/upload.js"

const route = express.Router()

route.post("/add", upload.single("image"),userController.Add)
route.get("/getAll",userController.getAll)

export default route