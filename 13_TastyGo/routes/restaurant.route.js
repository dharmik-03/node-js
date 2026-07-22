import express from "express";
import auth from "../middlewares/auth.js"
import upload from "../middlewares/upload.js"
import restaurantController from "../controller/restaurant.Controller.js"
import checkRole from "../middlewares/checkRole.js";
import validate from "../middlewares/validate.js"
import { restaurant } from "../validation/restaurantSchema.js";

const router = express.Router()

router.post("/addRestaurant", auth, upload.single("Image"), validate(restaurant), restaurantController.add)

export default router