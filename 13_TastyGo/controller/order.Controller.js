import Order from "../model/order.Model.js"
import food from "../model/FoodModel.js"
import httpError from "../middlewares/httpError.js"

const placeOrder = async function (req, res, next) {

    try {

        const userID = req.user._id

        const { restaurant, items, deliveryAddress, phone } = req.body;

        const foodsID = items.map((item) => item.food)

        const foods = await food.find({
            _id: { $in: foodsID }

        })

        let totalAmount = 0;


        const orderItems = items.map((item) => {
            const foodFound = foods.find(
                (food) => food._id.toString() === item.food.toString(),
            )

            const itemsTotal = foodFound.price * item.quantity;
            totalAmount += itemsTotal

            return {
                food: foodFound._id,
                quantity: item.quantity,
            }
        })


        const newOrder = await Order.create({
            customerName: userID,
            restaurant,
            items: orderItems,
            totalAmount,
            deliveryAddress,
            phone
        })

const orderPopulate = await newOrder.populate([
    {
        path: "customerName",
        select: "Name Email Phone -_id"
    },
    {
        path: "restaurant",
        select: "RestaurantName"
    },
    {
        path: "items.food",
        select: "name price description -_id"
    }
]);

     return res.status(201).json({
    success: true,
    message: "Order placed successfully",
    order: orderPopulate
});


    } catch (error) {
        return next(new httpError(error.message));
    }

}

export default { placeOrder }