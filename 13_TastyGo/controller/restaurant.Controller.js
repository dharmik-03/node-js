
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

const getAllRestaurant = async function (req, res, next) {
    try {

        let {
            page = 1,
            limit = 10,
            isOpen,
            search,
            city,
            sort = "createdAt",
            order = "desc"
        } = req.query

        page = Number(page)
        limit = Number(limit)

        const filter = {};

        if (city) {
            filter.city = city
        }

        if (search) {
            filter.RestaurantName = {
                $regex: search,
                $options: "i"

            }
        };

        if (isOpen != undefined) {
            filter.isOpen = isOpen === "true"
        };

        // const sortOptions = () => {
        //     [sort] = "asc" ? 1 : -1;
        // };

        const totalRestaurant = await restaurantModel.countDocuments(filter)

        const restaurant = await restaurantModel.find(filter).populate("Owner", "name email address -_id").skip((page - 1) * limit).lean()

        if (restaurant.length === 0) {
            res.status(404).json({ success: true, message: "no restaurant found" })
        }

        res.status(200).json({ success: true, message: "restaurant data found", page: page, restaurant })

    } catch (error) {
        return next(new httpError(error.message, 500));

    }

}

export default { add,getAllRestaurant }