import express from "express";

import auth from "../middlewares/auth.js"
import checkRole from "../middlewares/checkRole.js"
import validate from "../middlewares/validate.js"

import orderController from "../controller/order.Controller.js";

const router = express.Router()

router.post("/add", auth, orderController.placeOrder)

export default router