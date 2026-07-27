import mongoose from "mongoose";

const DBconnect = async function () {
    try {

        const connect = await mongoose.connect(process.env.MONGO_URI)

        return connect

    } catch (error) {
        throw new Error(error.message)

    }
}

export default DBconnect