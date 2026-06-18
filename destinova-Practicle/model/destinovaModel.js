import mongoose from "mongoose";

const newSchema = new mongoose.Schema(
    {
        packageName: {
            type: String,
            trim: true,
            required: true,
        },
        packagePrice: {
            type: String,
            trim: true,
            required: true,
        },
        Date: {
            type: Date,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        cloudinary_id: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const packages = mongoose.model("destinova", newSchema);

export default packages;