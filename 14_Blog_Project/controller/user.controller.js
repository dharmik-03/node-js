import User from "../model/user.model.js"
import httpError from "../middlewares/httpError.js"


const Add = async function (req, res, next) {
    try {


        const { name, password, MobileNumber, address, Role } = req.body

        const newUser = await User.create({
            name, password, MobileNumber, address, Role,
            image: req.file?.path,
            cloudinary_id: req.file?.filename
        })

        res.status(201).json({ success: true, message: "new user added", newUser })

    } catch (error) {
        throw new Error(error.message)
    }
}

const getAll = async function (req, res, next) {
    try {
        const user = await User.find()

        if (user.length === 0) {
            return next(new httpError("no user data found"))
        }

        res.status(200).json({ success: true, message: "user data found", total: user.length, data: user })


    } catch (error) {
        throw new Error(error.message)
    }
}


export default { Add ,getAll}