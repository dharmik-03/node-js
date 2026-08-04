import express from "express";
import providerController from "../controller/provider.Controller.js";
import auth from "../middlewares/auth.js"

const route = express.Router()

route.post("/add", auth, providerController.addProvider)

export default route