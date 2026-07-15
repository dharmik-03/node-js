import httpError from "./httpError.js"


const checkAuth = async function (req, res, next) {
    try {
        if (!req.user) {
            res.render("login")
        }

        next()
    } catch (error) {
        next(new httpError(error.message))

    }

}

export default checkAuth