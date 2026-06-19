import mongoose from "mongoose";

const NewSchema = mongoose.Schema({

    packageName: {
        type: String,
        required: true,
        trim: true
    },
    Date: {
        type: String,
        required: true
    },
    PackageType: {
        type: String,
        required: true,

    },
    packagePrice: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        required: true
    }

},
    {
        Timestamps: true
    })

const package = mongoose.model("package model", NewSchema)

export default package