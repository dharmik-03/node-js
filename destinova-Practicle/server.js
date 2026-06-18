import express from "express";
import httpError from "./middlewares/httpError.js";
import conectDB from "./config/db.js";

import dotenv from "dotenv";

import router from "./router/route.js";

dotenv.config({ path: "./.env" });
const app = express();

app.use(express.json());
app.use("/package", router);

app.use("/", (req, res, next) => {
  res.json({ message: "hello from server" });
});

app.get((req, res, next) => {
  res.status(404).json({ message: "requested route not found" });
});

app.use((error, req, res, next) => {
  
  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "Internal Server Error" });
});

const port = process.env.PORT || 5000;

async function startServer(req, res, next) {
  try {
    const connect = await conectDB();

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
