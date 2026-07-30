import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            enum: [
                "Education",
                "Travel",
                "Food",
                "Business",
                "Other",
            ],
            default: "Other",
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userSchema",
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



const Blog = mongoose.model("Blog", blogSchema);

export default Blog;