import mongoose from "mongoose";
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: (value) => {
            if (value.toLowerCase() === "password") {
                throw new Error("password cannot set as password word")
            }
        }
    },
    MobileNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cloudinary_id: {
        type: String
    },
    isVerified: {
        type: Boolean,

    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
},
    {
        timestamps: true
    })


userSchema.pre("save", async function () {

    const user = this

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10)
    }

})

userSchema.statics.findByCredential = async function (email, password) {

    try {

        const user = await this.findOne({ email })

        if (!user) {
            throw new Error("unable to login email")
        }

        const isvalid = await bcrypt.compare(password, user.password)

        if (!isvalid) {
            throw new Error("unable to login password")
        }

        return user

    } catch (error) {
        throw new Error(error.message)
    }


}

userSchema.methods.generateAuthToken = async function () {

    try {

        const user = this

        const token = JWT.sign(
            { _id: user._id.toString() },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        if (!token) {
            throw new Error("failed to generate token")

        }
        user.tokens = user.tokens.concat({ token })
        await user.save()

        return token
    } catch (error) {
        throw new Error(error.message)

    }

}

const User = mongoose.model("userSchema", userSchema)

export default User