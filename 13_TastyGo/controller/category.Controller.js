import category from "../model/categoryModel.js"
import httpError from "../middlewares/httpError.js"


const add = async function (req, res, next) {
    try {
   
        const { name, description } = req.body

        const newCategory = await category({
            name,
            description,
            image: req.file?.path,
            Cloudinary_Id: req.file?.filename
        })

        await newCategory.save()

        res.status(201).json({ success: true, message: "new category added", newCategory })

    } catch (error) {
        next(new httpError(error.message))
    }
}

export default {add}