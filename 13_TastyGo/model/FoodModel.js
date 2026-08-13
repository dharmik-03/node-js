
import mongoose, { mongo } from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",

    },
    restaurantName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurantModel",
    },
    description: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true

    },
    isVerified: {
        type: Boolean,
        default: true
    },
    image: [
        {
            type: String,
            required: true
        }
    ],
    cloudinary_id: [
        {
            type: String,


        }
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true

    },

}, {
    timestamps: true
})


const food = mongoose.model("food", FoodSchema)

export default food