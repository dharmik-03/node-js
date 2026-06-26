import JWT from "jsonwebtoken";
import httpError from "./httpError.js";
import userModel from "../model/UserModel.js";


const auth = async (req, res, next) => {

    try {

        const authHeader = req.header("Authorization")

        if (!authHeader) {
            next(new httpError("header required", 401))

        }

        const token = authHeader.replace("Bearer ", "")

        const decoded = JWT.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({

            _id: decoded._id,
            "tokens.token": token

        })

        if (!user) {
            next(new httpError("authentication required", 401))
        }

        req.user = user

        req.token = token

        next()

    } catch (error) {
        next(new httpError(error.message))
    }

}

export default auth