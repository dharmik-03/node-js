import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect = await mongoose.connect("mongodb://localhost/:27017/student");

    console.log("db is connected");

    return connect;
  } catch (error) {
    throw new Error(error);
  }
}

export default connectDB;
