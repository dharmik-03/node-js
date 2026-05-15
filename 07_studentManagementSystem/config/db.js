import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect = await mongoose.connect("mongodb://localhost/:2701/student");

    console.log("db is connected");

    return connect;
  } catch (error) {
    throw new Error(error);
  }
}

export default mongoose;
