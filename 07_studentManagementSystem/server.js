import express from "express";
import httpError from "./middlewares/httpError.js";
import mongoose from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.use((req, res) => {
  res.status(404).json({ success: true, message: "requested route not found" });
});

app.use((Error, req, res, next) => {
  if (res.headerssent) {
    return next(Error);
  }

  res
    .status(Error.statusCode || 500)
    .json({ message: Error.message || "something went wrong" });
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err.message);
  }

  console.log(`server is running on port ${port}`);
});
