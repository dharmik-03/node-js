import express from "express";
import providerController from "../controller/provider.Controller.js"
import auth from "../middlewares/auth.js"
import upload from "../middlewares/upload.js"

const router = express.Router()

router.post("/registerProvider", auth,upload.array("documents"), providerController.registerAsProvider)

export default router