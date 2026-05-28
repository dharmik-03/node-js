import express from "express";
import httpError from "./middlewares/httpError.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import router from "./routes/eventRoute.js";
dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use("/event", router)
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
    return next(error);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "something went wrong" });
});

const port = 5000;

async function StartServer() {
  try {
    const connect = await connectDB();

    if (!connect) {
      return console.log("db connect to failed");
    }

    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log("hello from server");
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

StartServer();
