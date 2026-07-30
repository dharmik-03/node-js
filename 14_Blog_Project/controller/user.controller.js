import User from "../model/user.model.js"
import httpError from "../middlewares/httpError.js"
import cloudinary from "../config/cloudinary.js"


const Add = async function (req, res, next) {
    try {


        const { name, email, password, MobileNumber, address, Role } = req.body

        const newUser = await User.create({
            name, email, password, MobileNumber, address, Role,
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

        const token = await user.generateAuthToken()

        res.status(200).json({ message: "user loggin successfully", user, token })

    } catch (error) {
        throw new Error(error.message)
    }
}

const authLogin = async function (req, res, next) {
    try {

        const user = req.user

        if (!user) {
            return next(new httpError("invalid token"))
        }

        res.status(200).json({ success: true, message: "auth login success", user })

    } catch (error) {
        throw new Error(error.message)
    }
}

const logOut = async function (req, res, next) {
    try {

        const user = req.user

        user.tokens = user.tokens.filter((t) =>
            t.token != req.token
        )

        await user.save()

        res.status(200).json({ success: true, message: "user logout successfully" })

    } catch (error) {
        throw new Error(error.message)
    }
}

const logOutAll = async function (req, res, next) {
    try {

        const user = req.user

        user.tokens = []

        await user.save()

        res.status(200).json({ success: true, message: "user All device logout successfull" })

    } catch (error) {
        throw new Error(error.message)

    }
}

const Update = async function (req, res, next) {
    try {

        const targetedUser = req.params.id || req.user._id

        const user = await User.findById(targetedUser)


        if (!user) {
            return next(new httpError("user not found", 404));
        }




        const update = Object.keys(req.body)


        let allowedFields = ["name", "address", "image"]

        if (req.user.Role === "admin") {
            allowedFields = [...allowedFields, "isVerified"]
        }

        const isValid = update.every((t) =>
            allowedFields.includes(t)
        )

        if (!isValid) {
            return next(new httpError("only allowed field can be updated"))
        }

        update.forEach((update) =>
            user[update] = req.body[update]
        )

        if (req.file) {
            if (user.cloudinary_id) {
                await cloudinary.uploader.destroy(user.cloudinary_id)
            }

            user.image = req.file?.path
            user.cloudinary_id = req.file?.filename
        }

        await user.save()

        res.status(200).json({ success: true, message: "user data update successfully", user })

    } catch (error) {
        throw new Error(error.message)

    }
}

const deleteUser = async function (req, res, next) {
    try {

        const targetedUser = req.params.id || req.user._id

        const user = await User.findById(targetedUser)


        if (!user) {
            return next(new httpError("user not found", 404));
        }


        if (user.cloudinary_id) {
            await cloudinary.uploader.destroy(user.cloudinary_id)
        }

        await user.deleteOne()

        res
            .status(200)
            .json({ success: true, message: "user delete successfully" });

    } catch (error) {
        throw new Error(error.message)

    }
}

export default { Add, getAll, login, authLogin, logOut, logOutAll, Update, deleteUser }