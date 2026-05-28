import mongoose from "mongoose";

async function connectdb() {
  try {
    const connect = await mongoose.connect(
      "mongodb://127.0.0.1:27017/Employee",
    );

    console.log("db is connect");

    return connect;
  } catch (error) {
    throw new Error(error);
  }
}

export default connectdb;
