import express from "express";
import foodController from "../controller/food.Controller.js";
import auth from "../middlewares/auth.js"
import checkRole from "../middlewares/checkRole.js"
import { foodImage } from "../middlewares/upload.js";

const route = express.Router()

route.post(
  "/add",
  auth,
  checkRole("admin", "provider"),
  foodImage.array("image", 5),
  foodController.add
);


route.get("/allFood", auth, foodController.getAllFood);

route.patch(
  "/update/:id",
  auth,
  checkRole("admin", "provider"),
  foodImage.array("image", 5),
  foodController.update,
);

route.delete(
  "/delete/:id",
  auth,
  checkRole("admin", "provider"),
  foodController.Delete,
);

export default route