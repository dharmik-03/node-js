import express from "express";
import httpError from "./middleware/httpError.js";

import router from "./routes/userRoute.js";

import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import connectDB from "./config/db.js";

const app = express();

app.use(express.json());
app.use("/user", router);

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
    .json({ message: error.message || "internal error" });
});

const port = process.env.PORT || 5000;

async function startServer(req, res, next) {
  try {
    const connect = await connectDB();

    if (!connect) {
      return next(new httpError("failed to connect DB", 500));
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
