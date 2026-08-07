import express from "express";
import auth from "../middlewares/auth.js";
import { RestaurantImage } from "../middlewares/upload.js";
import restaurantController from "../controller/restaurant.Controller.js";
import checkRole from "../middlewares/checkRole.js";
import validate from "../middlewares/validate.js";
import { restaurant } from "../validation/restaurantSchema.js";

const router = express.Router();

router.post(
  "/addRestaurant",
  auth,
  RestaurantImage.single("Image"),
  validate(restaurant),
  restaurantController.add,
);
router.get("/getAllrestaurant", auth, restaurantController.getAllRestaurant);

export default router;
