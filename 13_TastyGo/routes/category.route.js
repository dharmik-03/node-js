import express from "express";
import categoryController from "../controller/category.Controller.js"
import auth from "../middlewares/auth.js"
import checkRole from "../middlewares/checkRole.js"
import { categoryImage } from "../middlewares/upload.js";

const route = express.Router()

route.post("/add", auth, checkRole("admin"), categoryImage.single("image"), categoryController.add)

export default route