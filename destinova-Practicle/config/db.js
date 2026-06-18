import mongoose from "mongoose";
import httpError from "../middlewares/httpError.js";

async function conectDB(req, res, next) {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log("db connected");

    return connect;
  } catch (error) {
    throw new httpError(error.message);
  }
}

export default conectDB