import User from "../model/user.model.js"
import httpError from "../middlewares/httpError.js"


const Add = async function (req, res, next) {
    try {


        const { name,email, password, MobileNumber, address, Role } = req.body

        const newUser = await User.create({
            name, email,password, MobileNumber, address, Role,
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


const login = async function (req, res, next) {
    try {

        const { email, password } = req.body

        const user = await User.findByCredential(email, password)

        const token =await user.generateAuthToken()

        res.status(200).json({ message: "user loggin successfully", user ,token})

    } catch (error) {
        throw new Error(error.message)
    }
}



export default { Add, getAll, login }