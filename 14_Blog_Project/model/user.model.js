import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
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
},
    {
        timestamps: true
    })

const User = mongoose.model("userSchema", userSchema)

export default User