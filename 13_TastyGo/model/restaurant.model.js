import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    RestaurantName: {
        type: String,
        required: true,
        trim: true
    },
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"

    },
    Description: {
        type: String,
        trim: true,
    },
    Location: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true,
    },

    State: {
        type: String,
        required: true,
    },
    isOpen: {
        type: Boolean,
        default: true
    },
    ContactNumber: {
        type: String,
        required: true
    },
    OpeningTime: {
        type: String,
        required: true,
    },

    ClosingTime: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true
    },
    cloudinaryId: {
        type: String,
        required: true
    }


}, {
    timestamps: true
})

const restaurantModel = mongoose.model("restaurantModel", restaurantSchema)

export default restaurantModel