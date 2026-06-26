import mongoose from "mongoose";

const connectDB = async function () {


    try {

        const connect = mongoose.connect(process.env.MONGO_URI)

        console.log("DB connected")

        return connect

    } catch (error) {
        throw new Error(error.message)

    }

}

export default connectDB