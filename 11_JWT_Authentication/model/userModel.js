import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

//for encryption the password

userScema.pre("save", async function () {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

//loggin

userScema.statics.findByCredentials = async function (Email, password) {
  try {
    const user = await this.findOne({ Email });

    if (!user) {
      throw new Error("unable to loggin");
    }

    const IsMatched = await bcrypt.compare(password, user.password);

    if (!IsMatched) {
      throw new Error("unable to loggin");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const usermodel = mongoose.model("user", userScema);

export default usermodel;
