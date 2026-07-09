import mongoose from "mongoose";
import httpError from "../middlewares/httpError.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

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
      type: String,
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
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
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

UserSchema.statics.findByCredentials = async function (email, password) {
  try {
    const user = await this.findOne({ email });

    if (!user) {
      throw new httpError("unable to login");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new httpError("unable to login");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

UserSchema.methods.generateAuthToken = async function () {
  try {
    const user = this;
    const token = JWT.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    if (!token) {
      throw new Error("failed to genarete token");
    }

    user.tokens = user.tokens.concat({ token });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

const User = mongoose.model("user", UserSchema);

export default User;
