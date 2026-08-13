import food from "../model/FoodModel.js";
import httpError from "../middlewares/httpError.js"

const add = async function (req, res, next) {
    try {

        const { name, price, owner, restaurantName, description, isAvailable, category } = req.body

        const newFood = await food({
            name,
            price,
            owner,
            restaurantName,
            description,
            isAvailable,
            category,
            image: req.files?.map((file) => file.path) || [],
            cloudinary_id: req.files?.map((file) => file.filename) || []
        })

        await newFood.save()

        await newFood.populate(["owner", "category", "restaurantName"]);
        await newFood.populate("restaurantName", "RestaurantName -_id");


        res.status(201).json({ success: true, message: "new food added", newFood })

    } catch (error) {
        next(new httpError(error.message))
    }
}
const update = async function (req, res, next) {
    try {
        const { id } = req.params;

        const {
            name,
            price,
            owner,
            restaurantName,
            description,
            isAvailable,
            category
        } = req.body;

        const updateData = {
            name,
            price,
            owner,
            restaurantName,
            description,
            isAvailable,
            category
        };

        if (req.files && req.files.length > 0) {
            updateData.image = req.files.map((file) => file.path);
            updateData.cloudinary_id = req.files.map((file) => file.filename);
        }

        const updatedFood = await food.findByIdAndUpdate(id);

        if (!updatedFood) {
            return next(new httpError("Food not found", 404));
        }

        res.status(200).json({
            success: true,
            message: "Food updated successfully",
            updatedFood
        });

    } catch (error) {
        next(new httpError(error.message));
    }
};

const Delete = async function (req, res, next) {
    try {
        const deletedFood = await food.findByIdAndDelete(req.params.id);

        if (!deletedFood) {
            return next(new httpError("Food not found", 404));
        }

        res.status(200).json({
            success: true,
            message: "Food deleted successfully",

        });

    } catch (error) {
        next(new httpError(error.message));
    }
};




export default { add }