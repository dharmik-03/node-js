import express from "express";
import providerController from "../controller/provider.Controller.js"
import auth from "../middlewares/auth.js"
import { uploadDocument } from "../middlewares/upload.js"
import { register } from "../validation/providerSchema.js";
import validate from "../middlewares/validate.js"

const router = express.Router()

router.post("/registerProvider", auth, uploadDocument.array("documents", 3), validate(register), providerController.registerAsProvider)

export default router