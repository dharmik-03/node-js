
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import httpError from "../middlewares/httpError.js";

const userModel = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: (value) => {
            if (value.toLowerCase() === "password") {
                return new Error("password cannot set as password word")
            }
        }
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    tokens:[{
        token:{
            type:String
        }
    }]


}, {
    timestamps: true
})


userModel.pre("save", async function () {
    const user = this;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10);
    }
});

userModel.statics.findByCredentials = async function (email, password) {
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



userModel.methods.generateAuthToken = async function () {
    try {

        const user = this
        const token = JWT.sign(
            { _id: user._id.toString() },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }

        )

        if (!token) {
            return new (httpError("plz authenticate"))
        }

        user.tokens = user.tokens.concat({ token })

        await user.save()
        return token

    } catch (error) {
        throw new Error(error.message);

    }
}


const User = mongoose.model("user", userModel)

export default User