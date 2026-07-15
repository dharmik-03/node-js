import mongoose from "mongoose";

const connectDB = async function (req, res, next) {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log("Db connected");

    return connect;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default connectDB;
