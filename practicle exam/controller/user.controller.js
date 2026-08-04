import httpError from "../middlewares/httpError.js";
import User from "../model/user.model.js"

const registerUser = async function (req, res, next) {
    try {

        const { name, email, password, mobileNumber, address } = req.body

        const newUser = await User.create({
            name, email, password, mobileNumber, address
        })

        res.status(201).json({ success: true, message: "new user added", newUser })

    } catch (error) {
        throw new httpError(error.message)
    }
}

const AllUser = async function (req, res, next) {
    try {

        const user = await User.find()

        if (user.length === 0) {
            return next(new httpError("no user data found", 404));
        }

        res.status(200).json({ success: true, message: "user data found", total: user.length, user })

    } catch (error) {
        throw new httpError(error.message)
    }
}

const login = async (req, res, next) => {

    try {

        const { email, password } = req.body

        const user = await User.findByCredentials(email, password)
        const token = await user.generateAuthToken()

        res.status(200).json({ success: true, message: "login successfully", user, token })

    } catch (error) {
        throw new httpError(error.message)
    }
}

const authLogin = async function (req, res, next) {
    try {

        const user = req.user

        if (!user) {
            return next(new httpError("auth login failed", 401));
        }

        res.status(200).json({ success: true, message: "auth login successfully", user })

    } catch (error) {
        throw new httpError(error.message)
    }
}

const logout = async function (req, res, next) {
    try {


        req.user.tokens = req.user.tokens.filter((f) => {
            return f.token !== req.token
        })

        await req.user.save()

        res.status(200).json({ success: true, message: "user logout success" })

    } catch (error) {
        throw new httpError(error.message)

    }
}


const logoutAll = async function (req, res, next) {
    try {


       req.user.tokens=[]

        await req.user.save()

        res.status(200).json({ success: true, message: "user logout All success" })

    } catch (error) {
        throw new httpError(error.message)

    }
}

const deleteUser = async function (req, res, next) {
    try {

        const targetUser = req.user._id

        const user = await User.findById(targetUser)

        if (!user) {
            return next(new httpError("user not found", 404));
        }

        await user.deleteOne()

        res.status(200).json({ success: true, message: "user delete successfully" })

    } catch (error) {
        throw new httpError(error.message)

    }
}

const update = async function (req, res, next) {
    try {

        const user = req.user

        const update = Object.keys(req.body)

        const allowed_Field = ["name", "address"]

        const isValid = update.every((u) =>
            allowed_Field.includes(u)
        )

        if (!isValid) {
            return new httpError("only allowed field can be updated")
        }

        update.forEach((field) => {
            user[field] = req.body[field];
        });

        await user.save()

        res.status(200).json({ success: true, message: "user updated", user })

    } catch (error) {
        throw new httpError(error.message)
    }
}

export default { registerUser, AllUser, login, authLogin, logout, deleteUser, update ,logoutAll}
