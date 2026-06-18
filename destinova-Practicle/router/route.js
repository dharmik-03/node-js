import express from "express";
import upload from "../middlewares/upload.js";
import destinovaController from "../controller/destinovaController.js";

const router = express.Router();

router.post("/add", upload.single("image"), destinovaController.addPackages);

router.get("/allpackage", destinovaController.GetAllPackage);
router.get("/:id", destinovaController.GetById);
router.delete("/:id", destinovaController.DeletePackage);

export default router;
