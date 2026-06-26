import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken"

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    UserEmail: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        validate: (value) => {
            if (value.toLowercase === "password") {
                throw new Error("password cannont set as a password")
            }
        }
    },
    tokens: [
        {
            token: {
                type: String,

            }
        }
    ]

}, {
    timestamps: true
})

UserSchema.pre("save", async function () {
  const user = this;

  if (user.isModified("Password")) {
    user.Password = await bcrypt.hash(user.Password, 10);
  }
});


UserSchema.statics.findByCredentials = async function (UserEmail, Password) {
  try {
    const user = await this.findOne({ UserEmail });

    if (!user) {
      throw new Error("unable to loggin");
    }

    const IsMatched = await bcrypt.compare(Password, user.Password);

    if (!IsMatched) {
      throw new Error("unable to loggin");
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
      { expiresIn: "7d" },
    );

  

    if (!token) {
      throw new Error("failed to generate token");
    }

    user.tokens = user.tokens.concat({ token });

    await user.save();

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};


const userModel = mongoose.model("userSchema", UserSchema)

export default userModel