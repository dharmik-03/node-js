import mongoose from "mongoose";

const userScema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: (value) => {
        if (value.toLowerCase() === "password") {
          throw new Error("password can't set as a password word");
        }
      },
    },
  },
  { timestamps: true },
);

const usermodel = mongoose.model("user", userScema);

export default usermodel;
