import User from "../model/user.model.js"
import httpError from "../middlewares/httpError.js"
import { get } from "mongoose"

const getAll = async function (req, res, next) {
    try {

        const { Role, isVerified } = req.query

        const Query = {}

        if (Role === "provider") {
            Query.Role = Role
        }

        if (Role === "user") {
            Query.Role = Role
        }

        if (isVerified != undefined) {
            Query.isVerified = isVerified === true
        }

        const users = await User.find(Query)

        if (users.length === 0) {
            return next(new httpError("no data found", 404))
        }


        const total = await User.countDocuments(Query)

        res.status(200).json({ success: true, message: "user data found", total, users })


    } catch (error) {

        return next(new httpError(error.message))

    }
}

export default { getAll }