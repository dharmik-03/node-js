
import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({

    Providername: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    restaurants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurantModel",
        required: true

    }],
    documents: [
        {
            type: String,
        },
    ],
    cloudinary_Id: {
        type: String,
        required: true

    },
    isVerified: {
        type: Boolean,
    },

}, {
    timestamps: true

})

const providerModel = mongoose.model("provider", providerSchema)

export default providerModel