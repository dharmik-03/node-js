
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

const deleteRestaurant = async (req, res, next) => {
    try {
        const targetedUser = req.params.id;

        const Restaurant = await restaurantModel.findById(targetedUser);

        if (user.cloudinary_id) {
            await cloudinary.uploader.destroy(Restaurant.Cloudinary_Id);
        }

        await Restaurant.deleteOne();

        res
            .status(200)
            .json({ success: true, message: "Restaurant data delete successfully" });
    } catch (error) {
        next(new httpError(error.message));
    }
};

const updateRestaurant = async (req, res, next) => {
    try {
        const restaurant = await restaurantModel.findById(req.params.id);

        if (!restaurant) {
            return next(new httpError("Restaurant not found", 404));
        }

        const updates = Object.keys(req.body);

        const allowedFields = [
            "RestaurantName",
            "Address",
            "Phone",
            "description",
            "state",
            "city",
            "openTime",
            "closeTime",
        ];

        const isValidUpdate = updates.every((field) =>
            allowedFields.includes(field),
        );

        if (!isValidUpdate) {
            return next(new httpError("Only allowed fields can be updated", 400));
        }
        if (req.file) {
            if (restaurant.cloudinary_id) {
                await cloudinary.uploader.destroy(restaurant.cloudinary_id);
            }

            restaurant.Image = req.file.path;
            restaurant.cloudinary_id = req.file.filename;
        }

        updates.forEach((field) => {
            restaurant[field] = req.body[field];
        });

        await restaurant.save();

        res.status(200).json({
            success: true,
            message: "Restaurant updated successfully",
            restaurant,
        });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

export default { add, getAllRestaurant, updateRestaurant, deleteRestaurant }