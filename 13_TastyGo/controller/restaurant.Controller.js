
import restaurantModel from "../model/restaurant.model.js"
import httpError from "../middlewares/httpError.js"

const add = async (req, res, next) => {

    try {


        const { RestaurantName, Description, Location, City, State, isOpen, ContactNumber, OpeningTime, ClosingTime } = req.body

        const newRestaurant = await restaurantModel.create({
            RestaurantName,
            Description, Location,
            City, State, isOpen, ContactNumber, OpeningTime, ClosingTime,
            Owner: req.user._id,
            Image: req.file?.path,
            cloudinaryId: req.file?.filename
        })





        res.status(201).json({ success: true, message: "new restaurant added", newRestaurant })

    } catch (error) {
        console.log(error);
        return next(new httpError(error.message, 500));

    }
}

export default { add }