import express from "express";
import auth from "../middlewares/auth.js"
import upload from "../middlewares/upload.js"
import restaurantController from "../controller/restaurant.Controller.js"
import checkRole from "../middlewares/checkRole.js";

const router = express.Router()

router.post("/addRestaurant", auth, upload.single("Image"), restaurantController.add)

export default router