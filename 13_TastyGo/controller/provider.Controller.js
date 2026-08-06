import User from "../model/user.model.js"
import providerModel from "../model/provider.model.js"
import httpError from "../middlewares/httpError.js"

const registerAsProvider = async function (req, res, next) {
    try {
        const targetUser = req.user._id

        const user = await User.findById(targetUser)

        const existingProvider = await providerModel.findOne({ Providername: req.user._id })

        // if (existingProvider) {
        //     return next(new httpError("already register as provider", 500))
        // }

        const { restaurants, AccNumber } = req.body

        const newProvider = await providerModel.create({
            Providername: req.user._id,
            restaurants,
            AccNumber,
            documents: req.files.map((file) => file.path),
            cloudinary_Id: req.files.map((file) => file.filename)

        })

        user.Role = "provider"

        await user.save()

        res.status(201).json({
            success: true,
            message: "provider account registered wait for admin approval",
            newProvider,
        });

    } catch (error) {
        next(new httpError(error.message, 500));
    }
}

export default { registerAsProvider }