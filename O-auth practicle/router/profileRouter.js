import express from "express"

import checkAuth from "../middlewares/checkAuth.js"

const ProfileRouter = express.Router()

ProfileRouter.get("/", checkAuth, (req, res, next) => {

    res.render("profile", { user: req.user })

})

export default ProfileRouter