import JWT from "jsonwebtoken";
import httpError from "./httpError.js";
import User from "../model/user.model.js";

const auth = async function (req, res, next) {
  try {
    const authHeader = req.header("Authorization");
    console.log("Authorization Header:", authHeader);

    if (!authHeader) {
      throw new httpError("auth header is required");
    }

    const token = authHeader.replace("Bearer ", "");
console.log("Token:", token);


    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      return next(new httpError("authentication failed", 401));
    }

    req.user = user;
    req.token = token;

    

    next();
  } catch (error) {
    next(new httpError(error.message, 401));
  }
};

export default auth;
