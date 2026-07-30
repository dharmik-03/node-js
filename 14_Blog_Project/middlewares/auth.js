import JWT from "jsonwebtoken"
import User from "../model/user.model.js"
import httpError from "./httpError.js"

const auth = async function (req, res, next) {

    try {

        const authHeader = req.header("Authorization")

        if (!authHeader) {
            throw new httpError("auth header is required");
        }

        const token = await authHeader.replace("Bearer ", "")

        const decoded = await JWT.verify(token, process.env.JWT_SECRET)

        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token
        })

        if (!user) {
            return next(new httpError("authentication failed", 401));
        }

        req.user = user
        req.token = token

        next()

    } catch (error) {
        next(new httpError(error.message, 401));
    }

}

export default auth