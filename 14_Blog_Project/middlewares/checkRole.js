import httpError from "./httpError.js"

const checkRole = (...roles) => async (req, res, next) => {
    try {

        if (!req.user) {
            return next(new httpError("please authenticate", 401))
        }

        if (!roles.includes(req.user.Role)) {
            return next(new httpError("forbidden", 403))
        }

        next()



    } catch (error) {
        return next(new httpError(error.message, 500));
    }
}
export default checkRole