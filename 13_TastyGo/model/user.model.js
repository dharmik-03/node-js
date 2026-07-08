import mongoose from "mongoose";
import httpError from "../middlewares/httpError.js";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (value) => {
        if (value.toLowerCase() === "password") {
          throw new httpError("password cannot set as password word");
        }
      },
    },
    address: {
      type: String,
      required: true,
    },
    MobileNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    Role: {
      type: String,
      enum: ["user", "provider", "admin"],
      default: "user",
      required: true,
    },
    isVerified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre("save", async function () {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

const User = mongoose.model("user", UserSchema);

export default User;
