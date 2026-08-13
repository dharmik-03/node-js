
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: [
            "gujrati", "kathiyavadi", "punjabi", "rajsthani", "chinese", "south-indian"
        ],

    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    Cloudinary_Id: {
        type: String,
    },
}, {
    timestamps: true
})


const category = mongoose.model("category", categorySchema)

export default category