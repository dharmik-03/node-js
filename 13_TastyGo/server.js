import express from "express";
import httpError from "./middlewares/httpError.js";
import connectDB from "./config/DB.js";
import UserRouter from "./routes/user.route.js";
import adminRouter from "./routes/admin.route.js"
import restaurantRouter from "./routes/restaurant.route.js"

import dotenv from "dotenv";
import User from "./model/user.model.js";
dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json())

app.use("/user", UserRouter)
app.use("/admin", adminRouter)
app.use("/restaurant", restaurantRouter)

app.get("/", (req, res, next) => {
  res.json({ message: "hello from server" });
});

app.use((req, res, next) => {
  res
    .status(404)
    .json({ success: false, message: "requested route not found" });
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(new httpError(error.message));
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
});

const port = 5000;

async function startServer(req, res, next) {
  try {
    const connect = await connectDB();

    if (!connect) {
      return console.log("DB failed");
    }

    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    process.exit(1);
  }
}

startServer();




async function checkOwner() {


  try {

    const owner = await User.findById("6a5efea46c836500c73ecf67").populate("restaurant","RestaurantName")

    console.log("owner", owner);


    // console.log("owner restaurant",owner.restaurant)



  } catch (error) {

  }
}

checkOwner()