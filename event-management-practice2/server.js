import express, { json } from "express";
import httpError from "./middlewares/httpError.js";

import router from "./router/eventRouter.js";

import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import connectDB from "./config/db.js";

const app = express();
app.use(express.json())
app.use("/event",router)

app.get("/", (req, res, next) => {
  res.json("hello from server");
});

app.use((req, res, error) => {
  res.status(404).json({ success: false, message: "no route found" });
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "something went wrong" });
});

const port = 5000;

async function startServer(req, res, next) {
  try {
    const connect = await connectDB();

    if (!connect) {
      return console.log("failed to connect DB");
    }

    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

startServer();
