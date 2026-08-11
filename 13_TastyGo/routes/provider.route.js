import express from "express";
import providerController from "../controller/provider.Controller.js"
import auth from "../middlewares/auth.js"
import { uploadDocument } from "../middlewares/upload.js"
import { register } from "../validation/providerSchema.js";
import validate from "../middlewares/validate.js"
import checkRole from "../middlewares/checkRole.js"

const router = express.Router()

router.post("/registerProvider", auth, uploadDocument.array("documents", 3), validate(register), providerController.registerAsProvider)

router.get("/getAll", auth, checkRole("admin"), providerController.getAllProviders)

export default router